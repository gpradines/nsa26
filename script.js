// Inicializa o mapa e centraliza em Recife (Latitude, Longitude) com zoom nível 4
const map = L.map('map').setView([-8.0476, -34.8770], 4);

// Adiciona a camada de satélite da Esri
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);

// Preparamos a função que futuramente vai ler o arquivo analogos.json
// fetch('analogos.json')
//   .then(response => response.json())
//   .then(data => console.log("Dados carregados:", data));
