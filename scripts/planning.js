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

function formatDisplayName(name) {
    const specialNames = {
        'mr-mime': 'Mr. Mime',
        'mime-jr': 'Mime Jr.',
        'porygon-z': 'Porygon-Z',
    };

    return specialNames[name] || name.charAt(0).toUpperCase() + name.slice(1);
}

// ******** GET FINAL EVO ********
function getFinalEvolutions(pokemonName) {
    const finals = evolutionMap[pokemonName];
    if (!finals) return [pokemonName.toLowerCase()];
    return finals;
}

function buildPokemonList() {
    const seen = new Set();
    const finalList = [];
    const checklistPokemon = getPokemonFromChecklist();

    checklistPokemon.forEach((pokemon) => {
        const finals = getFinalEvolutions(pokemon.name);

        finals.forEach((finalName) => {
            if (!seen.has(finalName)) {
                seen.add(finalName);
                finalList.push({
                    name: finalName,
                    displayName: formatDisplayName(finalName),
                    sprite: `${PLATINUM_SPRITE_BASE}/${finalName}.png`,
                    originalEntry: pokemon.name,
                    phase: pokemon.phase,
                    location: pokemon.location
                });
            }
        });
    });

    return finalList;
}

const pokemonList = buildPokemonList();

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
        img.dataset.pokemonName = pokemon.name;
        img.dataset.src = pokemon.sprite;
        imageObserver.observe(img);
        img.alt = pokemon.name;
        
        nameEl.textContent = pokemon.displayName;

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

// ******** FETCH TRADE/MIGRATION PKMN ********
async function fetchTradeMigrationPokemon() {
    try {
        const response = await fetch(`${POKEAPI_BASE}/pokemon?limit=493`);
        const data = await response.json();

        // Get names already on list
        const checklistNames = new Set(pokemonList.map((p) => p.name));

        // Get all final evolution names from evolutionMap
        const allFinals = new Set();
        Object.values(evolutionMap).forEach((finals) => {
            finals.forEach((name) => allFinals.add(name.toLowerCase()));
        });

        console.log('allFinals size:', allFinals.size);
        console.log('Does allFinals have venusaur?', allFinals.has('venusaur'));
        console.log('Does allFinals have infernape?', allFinals.has('infernape'));
        console.log('checklistNames size:', checklistNames.size);
        console.log('Does checklistNames have infernape?', checklistNames.has('infernape'));
        console.log('PokeAPI returned:', data.results.length, 'pokemon');

        const tradeMons = data.results
            .map((p) => p.name)
            .filter((name) => allFinals.has(name) && !checklistNames.has(name))          
            .map((name) => ({
                name: name,
                displayName: formatDisplayName(name),
                sprite: `${PLATINUM_SPRITE_BASE}/${name}.png`,
                phase: 'Trade/Migration',
                location: null
            }));

            return tradeMons;
    } catch (error) {
        console.error('Error fetching trade/migration Pokémon:', error);
        return [];
    }
}



// ******** FORM NAME MAP ********
const formNameMap = {
    'wormadam': 'wormadam-plant',
    // 'cherrim': 'cherrim-sunshine',
    'giratina': 'giratina-altered',
    'shaymin': 'shaymin-land',
}

// ******** INTERSECTION OBSERVER ********
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(async(entry) => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const pokemonName = img.dataset.pokemonName;
            
            try {
                const apiName = formNameMap[pokemonName] || pokemonName;
                const response = await fetch(`${POKEAPI_BASE}/pokemon/${apiName}`);
                const data = await response.json();
                const id = data.id;
                img.src = `${PLATINUM_SPRITE_BASE}/${id}.png`;
            } catch (error) {
                img.src = './images/poke-ball-icon.svg';
            }

            imageObserver.unobserve(img);
        }
    });
}, {
    rootMargin: '100px'
});

// ******** SEARCH ********
pokemonSearch.addEventListener('input', () => {
    const query = pokemonSearch.value.toLowerCase().trim();

    const filtered = pokemonList.filter((pokemon) =>
        pokemon.displayName.toLowerCase().includes(query)
    );

    renderPokemonCards(filtered);
});

const checklistPokemon = getPokemonFromChecklist();

// ******** START ********
async function init() {
    renderPokemonCards(pokemonList);

    const tradeMons = await fetchTradeMigrationPokemon();

    if (tradeMons.length > 0) {
        // Add divider
        const divider = document.createElement('div');
        divider.classList.add('section-divider');
        pokemonCards.appendChild(divider);

        //Add subtitle
        const subtitle = document.createElement('h2');
        subtitle.classList.add('trade-migration-title');
        subtitle.textContent = 'Trade / Migration Pokemon';
        pokemonCards.appendChild(subtitle);

        // Render trade/migration cards
        tradeMons.forEach((pokemon) => {
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

            img.src = './images/favicon.ico';
            img.dataset.pokemonName = pokemon.name;
            img.loading = 'lazy';
            imageObserver.observe(img);
            img.alt = pokemon.name;

            nameEl.textContent = pokemon.displayName;

            for (let i = 0; i < 4; i++) {
                const moveSpan = document.createElement('span');
                moveSpan.classList.add('planner-card-move');
                if (saved[i]) {
                    moveSpan.textContent = saved[i].name;
                } else {
                    moveSpan.textContent = '—';
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
}

init();