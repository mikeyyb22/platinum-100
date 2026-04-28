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
const moveFilterBtns = document.querySelectorAll('.move-filter-btn');
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

function formatMoveName(name) {
    return name.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
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

// ******** OPEN PLANNING MODAL ********
async function openPlanningModal(pokemon) {
    currentPokemon = pokemon;
    activeMoveFilter = 'all';
    showEggMoves = false;

    // Reset UI
    modalPokemonName.textContent = pokemon.displayName;
    modalPokemonSprite.src = `${PLATINUM_SPRITE_BASE}/${pokemon.name}.png`;
    modalPokemonSprite.alt = pokemon.displayName;
    eggMovesToggle.checked = false;

    // Reset filter buttons
    moveFilterBtns.forEach((btn) => {
        btn.classList.remove('active');
        if (btn.dataset.moveFilter === 'all') btn.classList.add('active');
    });

    // Fetch moves
    await renderAvailableMoves(pokemon);
    renderSelectedMoves(pokemon);

    planningModal.showModal();
}

// ******** FETCH MOVES ********
async function fetchMoves(pokemonName) {
    if (moveCache[pokemonName]) return moveCache[pokemonName];

    try {
        // Fetch evo line to get pre-evo moves
        const speciesRes = await fetch(`${POKEAPI_BASE}/pokemon-species/${pokemonName}`);
        console.log('Fetching species for:', pokemonName);
        console.log('Species response status:', speciesRes.status);
        const speciesData = await speciesRes.json();
        const evoChainRes = await fetch(speciesData.evolution_chain.url);
        const evoChainData = await evoChainRes.json();

        // Walk evo chain to get all members
        const evoLine = [];
        function walkChain(node) {
            evoLine.push(node.species.name);
            node.evolves_to.forEach(walkChain);
        }
        walkChain(evoChainData.chain);

        // Fetch moves for each member of evo line
        const allMoves = {};
        await Promise.all(evoLine.map(async(name) => {
            const res = await fetch(`${POKEAPI_BASE}/pokemon/${name}`);
            const data = await res.json();
            data.moves.forEach((moveEntry) => {
                const platinumData = moveEntry.version_group_details.find((v) => v.version_group.name === 'platinum');
                if (!platinumData) return;

                const moveName = moveEntry.move.name;
                const method = platinumData.move_learn_method.name;
                const level = platinumData.level_learned_at;

                if (!allMoves[moveName]) {
                    allMoves[moveName] = {
                        name: moveName,
                        method: method,
                        level: level,
                        learnedBy: name
                    }
                }
            });
        }));

        const sortedMoves = Object.values(allMoves).sort((a, b) => {
            const methodOrder = { 'level-up': 0, 'machine': 1, 'tutor': 2, 'egg': 3 };
            if (methodOrder[a.method] !== methodOrder[b.method]) {
                return methodOrder[a.method] - methodOrder[b.method];
            }
            return a.level - b.level
        });

        const sortedMovesObj = {};
        sortedMoves.forEach((move) => {
            sortedMovesObj[move.name] = move;
        });

        moveCache[pokemonName] = sortedMovesObj;
        return sortedMovesObj;

        moveCache[pokemonName] = allMoves;
        return allMoves;
    } catch (error) {
        console.error('Error fetching moves:', error);
        return {};
    }
} 

// ******** AVAILABLE MOVES ********
async function renderAvailableMoves(pokemon) {
    availableMovesList.innerHTML = '';
    availableMovesList.innerHTML = '<li style="color: var(--text-secondary); padding: 10px;">Loading moves...</li>';

    const moves = await fetchMoves(pokemon.name);
    const saved = plannedMoves[pokemon.name] || [];
    const savedNames = new Set(saved.map((m) => m.name));

    availableMovesList.innerHTML = '';

    Object.values(moves).forEach((move) => {
        // Filter by method
        if (activeMoveFilter !== 'all' && move.methdo !== activeMoveFilter) return;

        // Hide egg moves unless toggled
        if (move.method === 'egg' && !showEggMoves) return;
        
        const li = document.createElement('li');
        const nameSpan = document.createElement('span');
        const methodSpan = document.createElement('span');

        li.classList.add('available-move-item');
        nameSpan.classList.add('move-name');
        methodSpan.classList.add('move-method-tag');

        nameSpan.textContent = formatMoveName(move.name);
        methodSpan.textContent = getMoveMethodLabel(move);

        if (savedNames.has(move.name)) {
            li.classList.add('selected');
        }

        if (saved.length >= 4 && !savedNames.has(move.name)) {
            li.classList.add('disabled');
        }

        li.appendChild(nameSpan);
        li.appendChild(methodSpan);

        li.addEventListener('click', () => {
            if (li.classList.contains('disabled')) return
            selectMove(pokemon, move);
        });

        availableMovesList.appendChild(li);
    });
}

// ******** MOVE METHOD LABEL ********
function getMoveMethodLabel(move) {
    if (move.method === 'level-up') {
        if (move.learnedBy !== currentPokemon.name) {
            return `Pre-evo @ Lv.${move.level}`;
        }
        return `Lv. ${move.level}`;
    }
    if (move.method === 'machine') return 'TM/HM';
    if (move.method === 'tutor') return 'Tutor';
    if (move.method === 'egg') return 'Egg';
    return move.method;
}

// ******** RENDER SELECTED MOVES ********
function renderSelectedMoves(pokemon) {
    selectedMovesList.innerHTML = '';
    const saved = plannedMoves[pokemon.name] || [];

    moveCount.textContent = `(${saved.length}/4)`;

    if (saved.length === 0) {
        const empty = document.createElement('li');
        empty.style.color = 'var(--text-secondary)';
        empty.style.fontSize = '0.85rem';
        empty.style.padding = '8px 10px';
        empty.textContent = 'No moves selected yet. Click a move below to add it';
        selectedMovesList.appendChild(empty);
        return;
    }

    saved.forEach((move) => {
        const li = document.createElement('li');
        const nameDiv = document.createElement('div');
        const howSpan = document.createElement('span');
        const removeBtn = document.createElement('button');

        li.classList.add('selected-move-item');
        nameDiv.classList.add('selected-move-name');
        howSpan.classList.add('selected-move-how');
        removeBtn.classList.add('remove-move-btn');
        
        nameDiv.textContent = formatMoveName(move.name);
        howSpan.textContent = move.how;
        removeBtn.textContent = '✕';

        nameDiv.appendChild(removeBtn);
        li.appendChild(nameDiv);
        li.appendChild(howSpan);

        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            removeMove(pokemon, move.name);
        });

        selectedMovesList.appendChild(li);
    });
}

// ******** SELECT MOVE ********
function selectMove(pokemon, move) {
    const saved = plannedMoves[pokemon.name] || [];
    if (saved.length >= 4) return;

    const how = getMoveHowText(move);

    saved.push({
        name: move.name,
        method: move.method,
        level: move.level,
        learnedBy: move.learnedBy,
        how: how
    });

    plannedMoves[pokemon.name] = saved;
    localStorage.setItem('platinumPlanning', JSON.stringify(plannedMoves));

    renderSelectedMoves(pokemon);
    renderAvailableMoves(pokemon);
    updatePlannerCard(pokemon);
}

// ******** REMOVE MOVE ********
function removeMove(pokemon, moveName) {
    const saved = plannedMoves[pokemon.name] || [];
    plannedMoves[pokemon.name] = saved.filter((m) => m.name !== moveName);
    localStorage.setItem('platinumPlanning', JSON.stringify(plannedMoves));

    renderSelectedMoves(pokemon);
    renderAvailableMoves(pokemon);
    updatePlannerCard(pokemon);
}

// ******** HOW-TO MOVE TEXT ********
function getMoveHowText(move) {
    if (move.method === 'level-up') {
        if (move.learnedBy !== currentPokemon.name) {
            const preName = formatDisplayName(move.learnedBy);
            return `Don't evolve until ${preName} learns ${move.name} at Lv. ${move.level}.`
        }
        return `Learned at Lv. ${move.level}.`
    }

    if (move.method === 'machine') {
        const tm = tmLocations.find((t) =>
        t.move.toLowerCase().replace(/ /g, '-') === move.name
        );
        if (tm) {
            const loc = tm.locations[0];
            return `${tm.name} — f${loc.name} (${loc.method}${loc.price ? ', ' + loc.price : ''})`;
        }
        return 'TM/HM — location unknown';
    }

    if (move.method === 'tutor') {
        const tutor = moveTutors.find((t) => 
            t.moves.some((m) => m.name && m.name.toLowerCase().replace(/ /g, '-') === move.name)
        );
        if (tutor) {
            return `Move Tutor — ${tutor.location} (${tutor.cost})`;
        }
        return 'Move Tutor — location unknown';
    }

    if (move.method === 'egg') {
        return `Egg move — breed ${formatDisplayName(move.learnedBy)} with compatible parent`;
    }

    return move.method;
}

// ******** UPDATE PLANNER CARD ********
function updatePlannerCard(pokemon) {
    const saved = plannedMoves[pokemon.name] || [];
    const allCards = document.querySelectorAll('.planner-card');

    allCards.forEach((card) => {
        const nameEl = card.querySelector('.planner-card-name');
        if (nameEl && nameEl.textContent === pokemon.displayName) {
            const movesDiv = card.querySelector('.planner-card-moves');
            movesDiv.innerHTML = '';

            for (let i = 0; i < 4; i++) {
                const moveSpan = document.createElement('span');
                moveSpan.classList.add('planner-card-move');
                if (saved[i]) {
                    moveSpan.textContent = saved[i].name.replace(/-/g, ' ');
                } else {
                    moveSpan.textContent = '—';
                    moveSpan.classList.add('empty');
                }
                movesDiv.appendChild(moveSpan);
            }
        }
    });
}

// ******** MODAL EVENT LISTENERS ********
moveFilterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        activeMoveFilter = btn.dataset.moveFilter;
        moveFilterBtns.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        renderAvailableMoves(currentPokemon);
    });
});

eggMovesToggle.addEventListener('change', () => {
    showEggMoves = eggMovesToggle.checked;
    renderAvailableMoves(currentPokemon);
});

planningModalClose.addEventListener('click', () => {
    planningModal.close();
});

planningModal.addEventListener('click', (e) => {
    if (e.target === planningModal) {
        planningModal.close();
    }
});

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