// Inicializa o mapa focado no globo terrestre (zoom nível 2)
const map = L.map('map').setView([10, -20], 2);

// Adiciona o mapa base de satélite
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri'
}).addTo(map);

// Função mágica: Busca o seu arquivo JSON e desenha no mapa
fetch('nodes.json')
    .then(resposta => resposta.json()) // Converte o arquivo para algo que o JS entende
    .then(dadosGeologicos => {
        // Para cada local no seu arquivo JSON, faça o seguinte:
        dadosGeologicos.forEach(local => {
            
            // 1. Cria o marcador na coordenada exata
            const marcador = L.marker(local.coordenadas).addTo(map);
            
            // 2. Monta o balão de texto (Pop-up) com as informações do AI Studio
            const balaoDeTexto = `
                <div style="font-family: Arial, sans-serif; max-width: 250px;">
                    <h3 style="margin-bottom: 5px; color: #1a73e8;">${local.nome_local}</h3>
                    <p style="margin-top: 0;"><strong>Análogo a:</strong> ${local.analogo_a}</p>
                    <p style="font-size: 14px;">${local.justificativa}</p>
                </div>
            `;
            
            // 3. Gruda o balão de texto no marcador
            marcador.bindPopup(balaoDeTexto);
        });
    })
    .catch(erro => console.error("Erro ao carregar os dados:", erro));
