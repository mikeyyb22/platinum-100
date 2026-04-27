import platinumChecklist from '../data/platinum-checklist.mjs';

// ******** DATA ********
const phases = platinumChecklist.phases;
const phaseNames = Object.keys(phases);

// ******** STATE ********
let currentPhaseIndex = 0;
let activeFilter = 'all';
let checkedItems = JSON.parse(localStorage.getItem('platinumProgress')) || {};

// ******** DOM ********
const phaseTitle = document.querySelector('#phase-title');
const locationCards = document.querySelector('#location-cards');
const prevPhaseBtn = document.querySelector('#prev-phase');
const nextPhaseBtn = document.querySelector('#next-phase');
const progressCount = document.querySelector('#progress-count');
const progressPercent = document.querySelector('#progress-percent');
const progressBar = document.querySelector('#progress-bar');
const modal = document.querySelector('#location-modal');
const modalTitle = document.querySelector('#modal-title');
const modalItems = document.querySelector('#modal-items');
const modalProgress = document.querySelector('#modal-progress-count');
const modalClose = document.querySelector('#modal-close');
const filterBtns = document.querySelectorAll('.filter-btn');
const phaseProgress = document.querySelector('#phase-progress');

// ******** HELPERS ********
function getBaseType(type) {
    if (type.includes('Item')) return 'Item';
    if (type.includes('Event')) return 'Event';
    if (type.includes('Battle')) return 'Battle';
    if (type.includes('Pokemon')) return 'Pokemon';
    return type;
}

function getObtainBadge(item) {
    if (item.type !== 'Pokemon' && !item.hidden) return null;

    const obtain = item.obtain || '';
    const span = document.createElement('span');
    span.classList.add('obtain-badge');

    if (item.hidden) {
        span.classList.add('hidden-badge');
        span.textContent = 'Hidden - Click here for location';
        return span;
    }

    if (obtain === 'Grass') {
        span.classList.add('obtain-grass');
        span.textContent = 'Grass';
    } else if (obtain === 'Surfing') {
        span.classList.add('obtain-surfing');
        span.textContent = 'Surf';
    } else if (obtain === 'Fishing - Old Rod') {
        span.classList.add('obtain-old-rod');
        span.textContent = 'Old Rod';
    } else if (obtain === 'Fishing - Good Rod') {
        span.classList.add('obtain-good-rod');
        span.textContent = 'Good Rod';
    } else if (obtain === 'Fishing - Super Rod') {
        span.classList.add('obtain-super-rod');
        span.textContent = 'Super Rod';
    } else if (obtain === 'Honey Tree') {
        span.classList.add('obtain-honey');
        span.textContent = 'Honey Tree';
    } else if (obtain === 'Gift') {
        span.classList.add('obtain-gift');
        span.textContent = 'Gift';
    } else if (obtain === 'Static') {
        span.classList.add('obtain-static');
        span.textContent = 'Static';
    } else if (obtain === 'Poke Radar') {
        span.classList.add('obtain-radar');
        span.textContent = 'Poké Radar';
    } else if (obtain === 'Swarm') {
        span.classList.add('obtain-swarm');
        span.textContent = 'Swarm';
    } else if (obtain === 'Dual-slot [FireRed]' || 'Dual-slot [LeafGreen]' || 'Dual-slot [Ruby]' || 'Dual-slot [Sapphire]' || 'Dual-slot [Emerald]' || 'Dual-slot [Any Gen III]') {
        span.classList.add('obtain-dual-slot');
        
        const cartridgeColors = {
            'Dual-slot [FireRed]': '#CC0000',
            'Dual-slot [LeafGreen]': '#2D6E2D',
            'Dual-slot [Ruby]': '#9B1C1C',
            'Dual-slot [Sapphire]': '#1C3A9B',
            'Dual-slot [Emerald]': '#1C7A3A',
            'Dual-slot [Any Gen III]': '#555555'
        };

        const color = cartridgeColors[obtain] || '#555555';
        span.style.backgroundColor = color;

        const icon = document.createElement('span');
        icon.classList.add('cartridge-icon');
        icon.style.color = color;

        const gameName = obtain.replace('Dual-slot ', '').replace('[', '').replace(']', '');
        span.appendChild(icon);
        span.append(` Dual-slot: ${gameName}`);
    } 

    return span;
}

// ******** PROGRESS ********
function updateProgress() {
    let totalItems = 0;
    let checkedCount = 0;

    phaseNames.forEach((phaseName) => {
        const locations = phases[phaseName];
        Object.keys(locations).forEach((locationName) => {
            locations[locationName].forEach((item) => {
                const itemKey = `${phaseName}-${locationName}-${item.name}`;
                totalItems++;
                if (checkedItems[itemKey]) {
                    checkedCount++;
                }
            });
        });
    });

    const percent = totalItems === 0 ? 0 : Math.round((checkedCount / totalItems) * 100);

    progressCount.textContent = `${checkedCount} / ${totalItems}`;
    progressPercent.textContent = `${percent}%`;
    progressBar.style.width = `${percent}%`;
}

// ******** LOCATION CARDS ********
function renderLocationCards() {
    locationCards.innerHTML = '';
    phaseTitle.textContent = phaseNames[currentPhaseIndex];

    const currentPhase = phases[phaseNames[currentPhaseIndex]];
    const locationNames = Object.keys(currentPhase);

    locationNames.forEach((locationName) => {
        const items = currentPhase[locationName];

        const filteredItems = activeFilter === 'all'
            ? items
            : items.filter((item) => getBaseType(item.type) === activeFilter);
        
        if (filteredItems.length === 0) return;

        let locationTotal = filteredItems.length;
        let locationChecked = 0;

        filteredItems.forEach((item) => {
            const itemKey = `${phaseNames[currentPhaseIndex]}-${locationName}-${item.name}`;
            if (checkedItems[itemKey]) {
                locationChecked++;
            }
        });

        const card = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');

        card.classList.add('location-card');
        h3.textContent = locationName;
        p.classList.add('card-progress');
        p.innerHTML = `Progress: <span>${locationChecked} / ${locationTotal}</span>`;

        card.appendChild(h3);
        card.appendChild(p);

        card.addEventListener('click', () => {
            openModal(locationName, items);
        });

        if (locationChecked === locationTotal && locationTotal > 0) {
            card.classList.add('completed');
        }

        locationCards.appendChild(card);

        let phaseTotal = 0;
        let phaseChecked = 0;

        Object.keys(currentPhase).forEach((locationName) => {
            currentPhase[locationName].forEach((item) => {
                const itemKey = `${phaseNames[currentPhaseIndex]}-${locationName}-${item.name}`;
                phaseTotal++;
                if (checkedItems[itemKey]) {
                    phaseChecked++;
                }
            });
        });

        phaseProgress.textContent = `${phaseChecked} / ${phaseTotal}`;
    });
}

// ******** MODAL ********
function openModal(locationName, items) {
    modalTitle.textContent = locationName;
    modalItems.innerHTML = '';

    const filteredItems = activeFilter === 'all'
        ? items
        : items.filter((item) => getBaseType(item.type) === activeFilter);
    
    let locationTotal = filteredItems.length;
    let locationChecked = 0;

    filteredItems.forEach((item) => {
        const itemKey = `${phaseNames[currentPhaseIndex]}-${locationName}-${item.name}`;
        if (checkedItems[itemKey]) {
            locationChecked++;
        }
    });

    modalProgress.textContent = `Progress: ${locationChecked} / ${locationTotal}`;

    filteredItems.forEach((item) => {
        const itemKey = `${phaseNames[currentPhaseIndex]}-${locationName}-${item.name}`;
        const isChecked = checkedItems[itemKey];

        const li = document.createElement('li');
        const img = document.createElement('img');
        const nameSpan = document.createElement('span');
        const typeSpan = document.createElement('span');

        li.classList.add('modal-item'); 
        if (isChecked) {
            li.classList.add('checked');
        }

        nameSpan.classList.add('item-name');
        typeSpan.classList.add('item-type');
        
        img.src = item.sprite;
        img.alt = item.name;
        nameSpan.textContent = item.name;
        typeSpan.textContent = item.type;

        li.appendChild(img);
        li.appendChild(nameSpan);
        li.appendChild(typeSpan);

        const badge = getObtainBadge(item);
        if (badge) {
            li.appendChild(badge);

            if (item.hidden && item.location) {
                const locationDiv = document.createElement('div');
                locationDiv.classList.add('hidden-location');
                locationDiv.textContent = `📍 ${item.location}`;

                badge.addEventListener('click', (e) => {
                    e.stopPropagation();
                    locationDiv.classList.toggle('show');
                });

                li.appendChild(locationDiv);
            }
        }

        li.addEventListener('click', () => {
            checkItem(itemKey, locationName, items);
        });

        modalItems.appendChild(li);
    });

    modal.showModal();
}

// ******* CHECK ITEM ********
function checkItem(itemKey, locationName, items) {
    if (checkedItems[itemKey]) {
        delete checkedItems[itemKey];
    } else {
        checkedItems[itemKey] = true;
    }
    localStorage.setItem('platinumProgress', JSON.stringify(checkedItems));

    updateProgress();
    openModal(locationName, items);
    renderLocationCards();
}

// ******** PHASE NAVIGATOR ********
prevPhaseBtn.addEventListener('click', () => {
    currentPhaseIndex = (currentPhaseIndex - 1 + phaseNames.length) % phaseNames.length;
    activeFilter = 'all';
    renderLocationCards();
    resetFilterBtns();
});

nextPhaseBtn.addEventListener('click', () => {
    currentPhaseIndex = (currentPhaseIndex + 1) % phaseNames.length;
    activeFilter = 'all';
    renderLocationCards();
    resetFilterBtns();
});

// ******** FILTER BUTTONS ********
function resetFilterBtns() {
    filterBtns.forEach((btn) => {
        btn.classList.remove('active');
        if (btn.dataset.filter === 'all') {
            btn.classList.add('active');
        }
    });
}

filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        activeFilter = btn.dataset.filter;
        filterBtns.forEach((button) => button.classList.remove('active'));
        btn.classList.add('active');
        renderLocationCards();
    });
});

// ******** MODAL CLOSE ********
modalClose.addEventListener('click', () => {
    modal.close();
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.close();
    }
})

// ******** START ********
renderLocationCards();
updateProgress();