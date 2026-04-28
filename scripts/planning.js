import platinumChecklist from '../data/platinum-checklist.mjs';
import tmLocations from '../data/tm-locations.mjs';
import moveTutors from '../data/move-tutors.mjs';
import evolutionMap from '../data/evolution-map.mjs';

// ******** CONSTANTS ********
const POKEAPI_BASE = 'https://pokeapi.co/api/v2';
const PLATINUM_SPRITE_BASE = 'https://raw.githubusercontent.com/POKEAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum';

// ******** STATE ********
let plannedMoves = JSON.parse(localStorage.getItem('platinumPlanning')) || {};
let currentPokemon = null;
let activeMoveFilter = 'all';
let showEggMoves = false;
let moveCache = {};

// ******** DOM ********
const pokemonCards = document.querySelector('#pokemon-cards');
const pokemonSearch = document.querySelector('#pokemon-search');
const planningModal = document.querySelector('#planning-modal');
const planningModalClose = document.querySelector('#planning-modal-close');
const modalPokemonSprite = document.querySelector('#modal-pokemon-sprite');
const modalPokemonName = document.querySelector('#modal-pokemon-name');
const selectedMovesList = document.querySelector('#selected-moves-list');
const moveCount = document.querySelector('#move-count');
const availableMovesList = document.querySelector('#available-moves-list');
const eggMovesToggle = document.querySelector('#egg-moves-toggle');
const moveFilterBtns = document.querySelector('.move-filter-btn');
const tmConflictWarning = document.querySelector('#tm-conflict-warning');

// ******** HELPERS ********
const phases = platinumChecklist.phases;
const phaseNames = Object.keys(phases);

function getBaseType(type) {
    if (type.includes('Item')) return 'Item';
    if (type.includes('Event')) return 'Event';
    if (type.includes('Battle')) return 'Battle';
    if (type.includes('Pokemon')) return 'Pokemon';
    return type;
}

// ******** BUILD POKEMON LIST ********
function getPokemonFromChecklist() {
    const seen = new Set();
    const pokemonList = [];
    const phases = platinumChecklist.phases;

    phaseNames.forEach((phaseName) => {
        const locations = phases[phaseName];
        Object.keys(locations).forEach((locationName) => {
            locations[locationName].forEach((item) => {
                if (getBaseType(item.type) === 'Pokemon' && !seen.has(item.name)) {
                    seen.add(item.name);
                    pokemonList.push({
                        name: item.name,
                        sprite: item.sprite || `${PLATINUM_SPRITE_BASE}/${item.name}.png`,
                        obtain: item.obtain || null,
                        phase: phaseName,
                        location: locationName
                    });
                }
            });
        });
    });

    return pokemonList;
}

// ******** RENDER PKMN CARDS ********
function renderPokemonCards(pokemonList) {
    pokemonCards.innerHTML = '';

    pokemonList.forEach((pokemon) => {
        const saved = plannedMoves[pokemon.name] || [];

        const card = document.createElement('div');
        const img = document.createElement('img');
        const info = document.createElement('div');
        const nameEl = document.createElement('p');
        const movesDiv = document.createElement('div');

        card.classList.add('planner-card');
        info.classList.add('planner-card-info');
        nameEl.classList.add('planner-card-name');
        movesDiv.classList.add('planner-card-moves');

        img.src = './images/poke-ball-icon.svg';
        img.dataset.src = pokemon.sprite || './images/poke-ball-icon.svg';
        imageObserver.observe(img);
        img.alt = pokemon.name;
        
        nameEl.textContent = pokemon.name;

        // Show up to 4 move slots
        for (let i = 0; i < 4; i++) {
            const moveSpan = document.createElement('span');
            moveSpan.classList.add('planner-card-move');
            if (saved[i]) {
                moveSpan.textContent = saved[i].name;
            } else {
                moveSpan.textContent = "~"
                moveSpan.classList.add('empty');
            }
            movesDiv.appendChild(moveSpan);
        }

        info.appendChild(nameEl);
        info.appendChild(movesDiv);
        card.appendChild(img);
        card.appendChild(info);

        card.addEventListener('click', () => {
            openPlanningModal(pokemon);
        });

        pokemonCards.appendChild(card);
    });
}

// ******** INTERSECTION OBSERVER ********
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            imageObserver.unobserve(img);
        }
    });
}, {
    rootMargin: '100px'
});

// ******** SEARCH ********
pokemonSearch.addEventListener('inpuut', () => {
    const query = pokemonSearch.value.toLowerCase().trim();

    const filtered = checklistPokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(query)
    );

    renderPokemonCards(filtered);
});

const checklistPokemon = getPokemonFromChecklist();

// ******** START ********
renderPokemonCards(checklistPokemon);