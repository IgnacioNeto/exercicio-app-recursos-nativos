# Exercício App com Recursos Nativos

**Objetivo**: combinar diversos recursos nativos na construção de um app React Native

## Opção 1: App para registro de fotos de lugares visitados

Protótipo de referência para layout: [https://www.figma.com/proto/mGuN1IhCjQQaDP1vJGuH9U/Wireframes-Apps?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2](https://www.figma.com/proto/mGuN1IhCjQQaDP1vJGuH9U/Wireframes-Apps?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2)

O app deverá ter:
- Um botão para acionar a câmera para tirar uma foto do lugar
- Um botão que obtenha a localização atual do usuário (ou seja, do local onde ele está tirando a foto)
- Um campo de entrada de texto para digitar um nome/título para a foto/local

**Desafios:**
- Salvar o lugar visitado usando algum recurso de armazenamento local (async storage ou api-fake com json-server) ou remoto (firebase)
- Exibir em uma tela uma lista com as fotos/lugares

Este aplicativo deverá combinar **pelo menos** os recursos nativos: `ImagePicker`, `MapView` e `Location`.

*Fique a vontade para adicionar qualquer outro recurso que achar necessário!*


## Opção 2: App para marcação de ponto

Protótipo de referência para layout: [https://www.figma.com/proto/mGuN1IhCjQQaDP1vJGuH9U/Wireframes-Apps?node-id=1%3A98&scaling=scale-down&page-id=1%3A97&starting-point-node-id=1%3A98](https://www.figma.com/proto/mGuN1IhCjQQaDP1vJGuH9U/Wireframes-Apps?node-id=1%3A98&scaling=scale-down&page-id=1%3A97&starting-point-node-id=1%3A98)

O app deverá ter:
- Carregamento automático da localização do usuário ao entrar no app
- Programação para obter a data/hora no momento em que o usuário estiver registrando o ponto
- Um botão para salvar (simulação) o registro do ponto
- Exibição de mensagem em um Alert confirmando o registro

**Desafios:**
- Salvar o registro usando algum recurso de armazenamento local (async storage ou api-fake com json-server) ou remoto (firebase)
- Descobrir qual o nome da rua a partir da longitude e latitude (há APIs para isso, como por exemplo a: https://nominatim.openstreetmap.org/ui/reverse.html

Este aplicativo deverá combinar **pelo menos** os recursos nativos: `MapView` e `Location`.

*Fique a vontade para adicionar qualquer outro recurso que achar necessário!*
