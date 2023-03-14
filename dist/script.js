var marcadores = [{
  Id: 1,
  Nome: "Campo dom josé",
  Endereco: "R. Lins, 84-198 - Jardim Dom Jose, Embu das Artes - SP, 06823-340, Brazil",
  Latitude: -23.670313,
  Longitude: -46.804153
}, {
  Id: 2,
  Nome: "Campo Limpo",
  Endereco: "Estr. do Campo Limpo, 459 - Vila Prel, São Paulo - SP, Brazil",
  Latitude: -23.650759,
  Longitude: -46.757100
}, {
  Id: 3,
  Nome: "Itapecerica da serra",
  Endereco: "Centro - Itapecerica da Serra, Santuario Nossa Senhora dos Prazeres e Divina Misericórdia , São Paulo - SP, 06850-710, Brazil",
  Latitude: -23.716473,
  Longitude: -46.850097
}, {
  Id: 4,
  Nome: "Parque Ibirapuera",
  Endereco: "Av. Pedro Álvares Cabral, Vila Mariana , São Paulo - SP, 04094-050, Brazil",
  Latitude: -23.587429,
  Longitude: -46.657610
}];

var usuario = new google.maps.LatLng(-23.5489, -46.6388 );

//definindo as opções do mapa
var opcoes = {
  // setando o posicionamento do usuário como centro do mapa
  center: usuario,
  // definindo o nível de zoom
  zoom: 12
}

//criando o mapa
var meuMapa = new google.maps.Map(mapa, opcoes);

//laço para percorrer o array de localizações
var addPin = function(marker) {
  
  var latLon = new google.maps.LatLng(marker.Latitude, marker.Longitude);
  var pin = new google.maps.Marker({
    position: latLon,
    map: meuMapa,
    title: marker.Nome,
    icon: '',
    animation: google.maps.Animation.DROP
  });
  
  //definindo o conteúdo de cada Pin
  var conteudo = "<h3>" + marker.Nome + "</h3><p>" + marker.Endereco + "</p>";
  
  //criando o objeto do tipo "janela de informação"
  var janela = new google.maps.InfoWindow({
    content: conteudo,
    maxWidth: 300
  });
  
  //adicionando o evento do click para abrir a janela com as informações
  google.maps.event.addListener(pin, "click", function() {
    janela.open(meuMapa, pin); //
  });
}

for (i=0;i<marcadores.length;i++) {
  addPin(marcadores[i]);
}