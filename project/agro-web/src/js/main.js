// main.js - Código JavaScript principal para a interatividade da página

document.addEventListener('DOMContentLoaded', () => {
    // Função para carregar dados das culturas
    fetch('./src/data/crops.json')
        .then(response => response.json())
        .then(data => {
            displayCrops(data);
        })
        .catch(error => console.error('Erro ao carregar os dados das culturas:', error));
});

// Função para exibir as culturas na página
function displayCrops(crops) {
    const cropsContainer = document.getElementById('crops-container');
    crops.forEach(crop => {
        const cropCard = createFarmCard(crop);
        cropsContainer.appendChild(cropCard);
    });
}

// Importa a função createFarmCard do componente farmCard.js
import { createFarmCard } from '../components/farmCard.js';