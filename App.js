import { useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Pressable,
  Image,
} from "react-native";

// import AsyncStorage from "@react-native-async-storage/async-storage";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";

export default function App() {
  const [texto, onChangeText] = useState("Titulo da foto/local");
  const [minhaLocalizacao, setMinhaLocalizacao] = useState(null);
  const [status, requestPermission] = ImagePicker.useCameraPermissions();
  const [foto, setFoto] = useState();

  useEffect(() => {
    async function obterLocalizacao() {
      const { status } = Location.requestForegroundPermissionsAsync();

      let localizacaoAtual = await Location.getCurrentPositionAsync({});
      setMinhaLocalizacao(localizacaoAtual);
    }
    obterLocalizacao();
  }, []);

  const regiaoInicial = {
    latitude: -23.533773,
    longitude: -46.65529,
    latitudeDelta: 10,
    longitudeDelta: 10,
  };
  const [localizacao, setLocalizacao] = useState();
  const novaLocalizacao = (event) => {
    setLocalizacao({
      latitude: minhaLocalizacao.coords.latitude,
      longitude: minhaLocalizacao.coords.longitude,
      latitudeDelta: 0.0052,
      longitudeDelta: 0.0012,
    });

    fetch(
      `https://nominatim.openstreetmap.org/reverse.php?lat=${minhaLocalizacao.coords.latitude}&lon=${minhaLocalizacao.coords.longitude}&zoom=18&format=jsonv2`
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados.address.road);
        //marcacaoConfirmada();
        Alert.alert("Sucesso", `Endereço: ${dados.address.road}`, [
          {
            text: "OK",
            onPress: () => {
              return false;
            },
            style: "cancel", //somente ios
          },
        ]);
      });
  };

  //console.log(localizacao.display_name);

  const marcacaoConfirmada = () => {
    Alert.alert("Marcação registrada com sucesso!", `No endereço  `, [
      {
        text: "OK",
        onPress: () => {
          return false;
        },
        style: "cancel", //somente ios
      },
    ]);
  };

  /* Recupera Hora e Data Atual (aplica formatação) */
  let dataHora = new Date();
  /* hora */
  let hora = dataHora.getHours().toString();
  let horaF = hora.length == 1 ? "0" + hora : hora;
  /* minuto */
  let minuto = dataHora.getMinutes().toString();
  let minutoF = minuto.length == 1 ? "0" + minuto : minuto;
  /* dia */
  let dia = dataHora.getDate().toString();
  let diaF = dia.length == 1 ? "0" + dia : dia;
  /* mes */
  let mes = dataHora.getMonth().toString() + 1;
  let mesF = mes.length == 1 ? "0" + mes : mes;
  /* concatena as variáveis */
  let horaAtual = `${horaF}:${minutoF} - ${diaF}/${mesF}/${dataHora.getFullYear()}`;

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <StatusBar animated={true} backgroundColor="black" />
        <Text style={styles.texto}>App 2 - Marcação de Pontos</Text>

        <View style={styles.caixa}>
          <View style={styles.view}>
            <MapView
              style={styles.map}
              region={localizacao ?? regiaoInicial}
              liteMode={false}
            >
              {localizacao && (
                <Marker coordinate={localizacao} title="Titulo" draggable />
              )}
            </MapView>
          </View>
          <Text style={styles.dataHora}>{horaAtual}</Text>

          <Pressable style={styles.botao} onPress={novaLocalizacao}>
            <Text style={styles.textoBotao}>Marcar</Text>
          </Pressable>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  texto: {
    textAlign: "center",
    fontSize: 22,
    marginTop: 20,
    marginBottom: 40,
  },

  dataHora: {
    textAlign: "center",
    fontSize: 26,
    paddingTop: 30,
    paddingBottom: 30,
    color: "blue",
  },

  caixa: {
    width: 400,
    alignItems: "center",
  },

  view: {
    height: 200,
    width: 350,
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 4,
  },

  map: {
    width: "100%",
    height: "100%",
  },

  botao: {
    height: 40,
    width: 350,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    borderWidth: 2,
    borderRadius: 4,
  },

  textoBotao: {
    fontSize: 20,
  },
});
