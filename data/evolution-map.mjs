/**
 * evolution-map.mjs
 *
 * Maps every Pokémon name (as it appears in platinum-checklist.mjs) to an array
 * of its final evolution(s) in Pokémon Platinum (Generation IV).
 *
 * Rules:
 *  - Pokémon that don't evolve map to themselves.
 *  - Pokémon with branched evolutions include all branches.
 *  - Pokémon that are already a final evolution map to themselves.
 *  - Values use lowercase PokeAPI naming conventions (hyphens, no apostrophes).
 *  - Keys match the name field exactly as it appears in the checklist.
 *
 * Generation IV–specific notes honoured:
 *  - Eevee → 7 branches (Glaceon and Leafeon via Icy/Mossy Rock level-up)
 *  - Ralts → Gardevoir (any) or Gallade (male + Dawn Stone)
 *  - Snorunt → Glalie (any) or Froslass (female + Dawn Stone)
 *  - Oddish → Vileplume (Leaf Stone) or Bellossom (Sun Stone)
 *  - Slowpoke → Slowbro (level) or Slowking (King's Rock trade)
 *  - Burmy → Wormadam (female) or Mothim (male)
 *  - Nincada → Ninjask + Shedinja (empty party slot + Poké Ball)
 *  - Tyrogue → Hitmonlee / Hitmonchan / Hitmontop (stat-based)
 *  - Combee → Vespiquen (female) or stays Combee (male, no further evolution)
 *  - Gen IV trade/item evolutions added: Electivire, Magmortar, Magnezone,
 *    Probopass, Rhyperior, Lickilicky, Tangrowth, Yanmega, Mamoswine,
 *    Dusknoir, Weavile, Gliscor, Togekiss, Ambipom, Honchkrow, Mismagius,
 *    Porygon-Z, etc.
 *  - Shaymin's Sky Forme is a form change, not an evolution → stays shaymin.
 *  - Stantler does not evolve in Gen IV (Wyrdeer is Gen IX).
 *  - Mankey line ends at Primeape in Gen IV (Annihilape is Gen IX).
 *  - Unown: all 28 forms (A–Z, !, ?) are treated as a single species → unown.
 */

const evolutionMap = {

  // ── A ───────────────────────────────────────────────────────────────────────
  "Abra":             ["alakazam"],          // Abra → Kadabra → Alakazam (trade)
  "Absol":            ["absol"],
  "Aipom":            ["ambipom"],           // Aipom → Ambipom (Double Hit level-up)
  "Arceus":           ["arceus"],
  "Ariados":          ["ariados"],           // Spinarak → Ariados; no further evo
  "Aron":             ["aggron"],            // Aron → Lairon → Aggron
  "Articuno":         ["articuno"],
  "Azelf":            ["azelf"],
  "Azurill":          ["azumarill"],         // Azurill → Marill → Azumarill

  // ── B ───────────────────────────────────────────────────────────────────────
  "Bagon":            ["salamence"],         // Bagon → Shelgon → Salamence
  "Baltoy":           ["claydol"],           // Baltoy → Claydol
  "Banette":          ["banette"],           // Shuppet → Banette; no further evo
  "Barboach":         ["whiscash"],          // Barboach → Whiscash
  "Beldum":           ["metagross"],         // Beldum → Metang → Metagross
  "Bellsprout":       ["victreebel"],        // Bellsprout → Weepinbell → Victreebel (Leaf Stone)
  "Bidoof":           ["bibarel"],           // Bidoof → Bibarel
  "Bonsly":           ["sudowoodo"],         // Bonsly → Sudowoodo (Mimic level-up)
  "Bronzor":          ["bronzong"],          // Bronzor → Bronzong
  "Budew":            ["roserade"],          // Budew → Roselia → Roserade (Shiny Stone)
  "Buizel":           ["floatzel"],          // Buizel → Floatzel
  "Buneary":          ["lopunny"],           // Buneary → Lopunny (friendship)
  "Burmy":            ["wormadam", "mothim"], // Female → Wormadam; Male → Mothim

  // ── C ───────────────────────────────────────────────────────────────────────
  "Cacnea":           ["cacturne"],          // Cacnea → Cacturne
  "Carnivine":        ["carnivine"],
  "Carvanha":         ["sharpedo"],          // Carvanha → Sharpedo
  "Cascoon":          ["dustox"],            // Cascoon → Dustox
  "Castform":         ["castform"],
  "Caterpie":         ["butterfree"],        // Caterpie → Metapod → Butterfree
  "Chansey":          ["blissey"],           // Chansey → Blissey (friendship)
  "Chatot":           ["chatot"],
  "Cherubi":          ["cherrim"],           // Cherubi → Cherrim
  "Chinchou":         ["lanturn"],           // Chinchou → Lanturn
  "Chingling":        ["chimecho"],          // Chingling → Chimecho (friendship at night)
  "Clefairy":         ["clefable"],          // Clefairy → Clefable (Moon Stone)
  "Cleffa":           ["clefable"],          // Cleffa → Clefairy → Clefable (Moon Stone)
  "Combee":           ["vespiquen"],         // Female → Vespiquen; Male cannot evolve
  "Corsola":          ["corsola"],
  "Cresselia":        ["cresselia"],
  "Croagunk":         ["toxicroak"],         // Croagunk → Toxicroak
  "Cubone":           ["marowak"],           // Cubone → Marowak

  // ── D ───────────────────────────────────────────────────────────────────────
  "Darkrai":          ["darkrai"],
  "Delibird":         ["delibird"],
  "Dewgong":          ["dewgong"],           // Seel → Dewgong; no further evo
  "Dialga":           ["dialga"],
  "Diglett":          ["dugtrio"],           // Diglett → Dugtrio
  "Ditto":            ["ditto"],
  "Doduo":            ["dodrio"],            // Doduo → Dodrio
  "Dratini":          ["dragonite"],         // Dratini → Dragonair → Dragonite
  "Drifloon":         ["drifblim"],          // Drifloon → Drifblim
  "Drowzee":          ["hypno"],             // Drowzee → Hypno
  "Dunsparce":        ["dunsparce"],
  "Duskull":          ["dusknoir"],          // Duskull → Dusclops → Dusknoir (Reaper Cloth trade)

  // ── E ───────────────────────────────────────────────────────────────────────
  "Eevee":            ["vaporeon", "jolteon", "flareon", "espeon", "umbreon", "leafeon", "glaceon"],
  "Ekans":            ["arbok"],             // Ekans → Arbok
  "Electabuzz":       ["electivire"],        // Electabuzz → Electivire (Electirizer trade)
  "Electrike":        ["manectric"],         // Electrike → Manectric
  "Exeggcute":        ["exeggutor"],         // Exeggcute → Exeggutor (Leaf Stone)

  // ── F ───────────────────────────────────────────────────────────────────────
  "Farfetch'd":       ["farfetchd"],
  "Feebas":           ["milotic"],           // Feebas → Milotic (max Beauty)
  "Finneon":          ["lumineon"],          // Finneon → Lumineon

  // ── G ───────────────────────────────────────────────────────────────────────
  "Gastly":           ["gengar"],            // Gastly → Haunter → Gengar (trade)
  "Gengar":           ["gengar"],            // Already a final evolution
  "Geodude":          ["golem"],             // Geodude → Graveler → Golem (trade)
  "Gible":            ["garchomp"],          // Gible → Gabite → Garchomp
  "Girafarig":        ["girafarig"],
  "Giratina":         ["giratina"],
  "Gligar":           ["gliscor"],           // Gligar → Gliscor (Razor Fang level-up at night)
  "Goldeen":          ["seaking"],           // Goldeen → Seaking
  "Grimer":           ["muk"],              // Grimer → Muk
  "Growlithe":        ["arcanine"],          // Growlithe → Arcanine (Fire Stone)
  "Gulpin":           ["swalot"],            // Gulpin → Swalot

  // ── H ───────────────────────────────────────────────────────────────────────
  "Happiny":          ["blissey"],           // Happiny → Chansey → Blissey (friendship)
  "Heatran":          ["heatran"],
  "Heracross":        ["heracross"],
  "Hippopotas":       ["hippowdon"],         // Hippopotas → Hippowdon
  "Hoothoot":         ["noctowl"],           // Hoothoot → Noctowl
  "Hoppip":           ["jumpluff"],          // Hoppip → Skiploom → Jumpluff
  "Houndour":         ["houndoom"],          // Houndour → Houndoom

  // ── I ───────────────────────────────────────────────────────────────────────
  "Igglybuff":        ["wigglytuff"],        // Igglybuff → Jigglypuff → Wigglytuff (Moon Stone)
  "Illumise":         ["illumise"],

  // ── J ───────────────────────────────────────────────────────────────────────
  "Jigglypuff":       ["wigglytuff"],        // Jigglypuff → Wigglytuff (Moon Stone)
  "Jynx":             ["jynx"],

  // ── K ───────────────────────────────────────────────────────────────────────
  "Kangaskhan":       ["kangaskhan"],
  "Kecleon":          ["kecleon"],
  "Koffing":          ["weezing"],           // Koffing → Weezing
  "Krabby":           ["kingler"],           // Krabby → Kingler
  "Kricketot":        ["kricketune"],        // Kricketot → Kricketune

  // ── L ───────────────────────────────────────────────────────────────────────
  "Lapras":           ["lapras"],
  "Larvitar":         ["tyranitar"],         // Larvitar → Pupitar → Tyranitar
  "Ledian":           ["ledian"],            // Ledyba → Ledian; no further evo
  "Lickitung":        ["lickilicky"],        // Lickitung → Lickilicky (Rollout level-up)
  "Lotad":            ["ludicolo"],          // Lotad → Lombre → Ludicolo (Water Stone)
  "Loudred":          ["exploud"],           // Loudred → Exploud
  "Lunatone":         ["lunatone"],
  "Luvdisc":          ["luvdisc"],

  // ── M ───────────────────────────────────────────────────────────────────────
  "Machop":           ["machamp"],           // Machop → Machoke → Machamp (trade)
  "Magikarp":         ["gyarados"],          // Magikarp → Gyarados
  "Magmar":           ["magmortar"],         // Magmar → Magmortar (Magmarizer trade)
  "Magnemite":        ["magnezone"],         // Magnemite → Magneton → Magnezone (Mt. Coronet)
  "Makuhita":         ["hariyama"],          // Makuhita → Hariyama
  "Mankey":           ["primeape"],          // Mankey → Primeape (Annihilape is Gen IX)
  "Mantyke":          ["mantine"],           // Mantyke → Mantine (Remoraid in party)
  "Mareep":           ["ampharos"],          // Mareep → Flaaffy → Ampharos
  "Marill":           ["azumarill"],         // Marill → Azumarill
  "Mawile":           ["mawile"],
  "Meditite":         ["medicham"],          // Meditite → Medicham
  "Meowth":           ["persian"],           // Meowth → Persian
  "Mesprit":          ["mesprit"],
  "Miltank":          ["miltank"],
  "Mime Jr.":         ["mr-mime"],           // Mime Jr. → Mr. Mime (Mimic level-up)
  "Minun":            ["minun"],
  "Moltres":          ["moltres"],
  "Mr. Mime":         ["mr-mime"],           // Already a final evolution
  "Munchlax":         ["snorlax"],           // Munchlax → Snorlax (friendship)

  // ── N ───────────────────────────────────────────────────────────────────────
  "Natu":             ["xatu"],              // Natu → Xatu
  "Nidoran F":        ["nidoqueen"],         // Nidoran♀ → Nidorina → Nidoqueen (Moon Stone)
  "Nidoran M":        ["nidoking"],          // Nidoran♂ → Nidorino → Nidoking (Moon Stone)
  "Nincada":          ["ninjask", "shedinja"], // Ninjask always; Shedinja if empty party slot + Poké Ball
  "Nosepass":         ["probopass"],         // Nosepass → Probopass (Mt. Coronet)
  "Numel":            ["camerupt"],          // Numel → Camerupt

  // ── O ───────────────────────────────────────────────────────────────────────
  "Octillery":        ["octillery"],         // Remoraid → Octillery; no further evo
  "Oddish":           ["vileplume", "bellossom"], // Gloom → Vileplume (Leaf Stone) or Bellossom (Sun Stone)
  "Onix":             ["steelix"],           // Onix → Steelix (Metal Coat trade)

  // ── P ───────────────────────────────────────────────────────────────────────
  "Pachirisu":        ["pachirisu"],
  "Palkia":           ["palkia"],
  "Paras":            ["parasect"],          // Paras → Parasect
  "Phanpy":           ["donphan"],           // Phanpy → Donphan
  "Pichu":            ["raichu"],            // Pichu → Pikachu → Raichu (Thunder Stone)
  "Pidgey":           ["pidgeot"],           // Pidgey → Pidgeotto → Pidgeot
  "Pikachu":          ["raichu"],            // Pikachu → Raichu (Thunder Stone)
  "Pineco":           ["forretress"],        // Pineco → Forretress
  "Pinsir":           ["pinsir"],
  "Plusle":           ["plusle"],
  "Ponyta":           ["rapidash"],          // Ponyta → Rapidash
  "Poochyena":        ["mightyena"],         // Poochyena → Mightyena
  "Porygon":          ["porygon-z"],         // Porygon → Porygon2 (Up-Grade trade) → Porygon-Z (Dubious Disc trade)
  "Psyduck":          ["golduck"],           // Psyduck → Golduck

  // ── R ───────────────────────────────────────────────────────────────────────
  "Ralts":            ["gardevoir", "gallade"], // Kirlia → Gardevoir (any) or Gallade (male + Dawn Stone)
  "Rattata":          ["raticate"],          // Rattata → Raticate
  "Regice":           ["regice"],
  "Regigigas":        ["regigigas"],
  "Regirock":         ["regirock"],
  "Registeel":        ["registeel"],
  "Remoraid":         ["octillery"],         // Remoraid → Octillery
  "Rhyhorn":          ["rhyperior"],         // Rhyhorn → Rhydon → Rhyperior (Protector trade)
  "Riolu":            ["lucario"],           // Riolu → Lucario (friendship during day)
  "Rotom":            ["rotom"],

  // ── S ───────────────────────────────────────────────────────────────────────
  "Sableye":          ["sableye"],
  "Sandshrew":        ["sandslash"],         // Sandshrew → Sandslash
  "Scyther":          ["scizor"],            // Scyther → Scizor (Metal Coat trade)
  "Sealeo":           ["walrein"],           // Spheal → Sealeo → Walrein
  "Seedot":           ["shiftry"],           // Seedot → Nuzleaf → Shiftry (Leaf Stone)
  "Sentret":          ["furret"],            // Sentret → Furret
  "Seviper":          ["seviper"],
  "Shaymin":          ["shaymin"],           // Sky Forme is a form change, not an evolution
  "Shellder":         ["cloyster"],          // Shellder → Cloyster (Water Stone)
  "Shellos E":        ["gastrodon"],         // East Sea Shellos → Gastrodon (East)
  "Shellos W":        ["gastrodon"],         // West Sea Shellos → Gastrodon (West)
  "Shieldon/Cranidos":["bastiodon", "rampardos"], // Shieldon → Bastiodon; Cranidos → Rampardos
  "Shinx":            ["luxray"],            // Shinx → Luxio → Luxray
  "Shroomish":        ["breloom"],           // Shroomish → Breloom
  "Shuckle":          ["shuckle"],
  "Silcoon":          ["beautifly"],         // Silcoon → Beautifly
  "Skarmory":         ["skarmory"],
  "Skitty":           ["delcatty"],          // Skitty → Delcatty (Moon Stone)
  "Skorupi":          ["drapion"],           // Skorupi → Drapion
  "Slakoth":          ["slaking"],           // Slakoth → Vigoroth → Slaking
  "Slowpoke":         ["slowbro", "slowking"], // Level 37 → Slowbro; King's Rock trade → Slowking
  "Slugma":           ["magcargo"],          // Slugma → Magcargo
  "Smeargle":         ["smeargle"],
  "Smoochum":         ["jynx"],             // Smoochum → Jynx (no further evo)
  "Sneasel":          ["weavile"],           // Sneasel → Weavile (Razor Claw level-up at night)
  "Snorunt":          ["glalie", "froslass"], // Any → Glalie; Female + Dawn Stone → Froslass
  "Snover":           ["abomasnow"],         // Snover → Abomasnow
  "Snubbull":         ["granbull"],          // Snubbull → Granbull
  "Solrock":          ["solrock"],
  "Spearow":          ["fearow"],            // Spearow → Fearow
  "Spinda":           ["spinda"],
  "Spiritomb":        ["spiritomb"],
  "Spoink":           ["grumpig"],           // Spoink → Grumpig
  "Stantler":         ["stantler"],          // No evolution in Gen IV (Wyrdeer is Gen IX)
  "Starly":           ["staraptor"],         // Starly → Staravia → Staraptor
  "Starter":          ["torterra", "infernape", "empoleon"], // Turtwig / Chimchar / Piplup lines
  "Staryu":           ["starmie"],           // Staryu → Starmie (Water Stone)
  "Sudowoodo":        ["sudowoodo"],         // Bonsly → Sudowoodo; no further evo
  "Sunkern":          ["sunflora"],          // Sunkern → Sunflora (Sun Stone)
  "Swablu":           ["altaria"],           // Swablu → Altaria
  "Swellow":          ["swellow"],           // Taillow → Swellow; no further evo
  "Swinub":           ["mamoswine"],         // Swinub → Piloswine → Mamoswine (Ancient Power level-up)

  // ── T ───────────────────────────────────────────────────────────────────────
  "Tangela":          ["tangrowth"],         // Tangela → Tangrowth (Ancient Power level-up)
  "Tauros":           ["tauros"],
  "Teddiursa":        ["ursaring"],          // Teddiursa → Ursaring
  "Tentacool":        ["tentacruel"],        // Tentacool → Tentacruel
  "Togepi":           ["togekiss"],          // Togepi → Togetic → Togekiss (Shiny Stone)
  "Torkoal":          ["torkoal"],
  "Tropius":          ["tropius"],
  "Tyrogue":          ["hitmonlee", "hitmonchan", "hitmontop"], // Attack >, < or = Defense

  // ── U ───────────────────────────────────────────────────────────────────────
  // All 28 Unown forms (A–Z, !, ?) are treated as a single species.
  "Unown !":          ["unown"],
  "Unown ?":          ["unown"],
  "Unown A":          ["unown"],
  "Unown B":          ["unown"],
  "Unown C":          ["unown"],
  "Unown D":          ["unown"],
  "Unown E":          ["unown"],
  "Unown F":          ["unown"],
  "Unown G":          ["unown"],
  "Unown H":          ["unown"],
  "Unown I":          ["unown"],
  "Unown J":          ["unown"],
  "Unown K":          ["unown"],
  "Unown L":          ["unown"],
  "Unown M":          ["unown"],
  "Unown N":          ["unown"],
  "Unown O":          ["unown"],
  "Unown P":          ["unown"],
  "Unown Q":          ["unown"],
  "Unown R":          ["unown"],
  "Unown S":          ["unown"],
  "Unown T":          ["unown"],
  "Unown U":          ["unown"],
  "Unown V":          ["unown"],
  "Unown W":          ["unown"],
  "Unown X":          ["unown"],
  "Unown Y":          ["unown"],
  "Unown Z":          ["unown"],
  "Uxie":             ["uxie"],

  // ── V ───────────────────────────────────────────────────────────────────────
  "Venonat":          ["venomoth"],          // Venonat → Venomoth
  "Volbeat":          ["volbeat"],
  "Voltorb":          ["electrode"],         // Voltorb → Electrode
  "Vulpix":           ["ninetales"],         // Vulpix → Ninetales (Fire Stone)

  // ── W ───────────────────────────────────────────────────────────────────────
  "Wailmer":          ["wailord"],           // Wailmer → Wailord
  "Weedle":           ["beedrill"],          // Weedle → Kakuna → Beedrill
  "Wingull":          ["pelipper"],          // Wingull → Pelipper
  "Wobbuffet":        ["wobbuffet"],         // Wynaut → Wobbuffet; no further evo
  "Wooper":           ["quagsire"],          // Wooper → Quagsire
  "Wurmple":          ["beautifly", "dustox"], // Silcoon path → Beautifly; Cascoon path → Dustox

  // ── Y ───────────────────────────────────────────────────────────────────────
  "Yanma":            ["yanmega"],           // Yanma → Yanmega (Ancient Power level-up)

  // ── Z ───────────────────────────────────────────────────────────────────────
  "Zangoose":         ["zangoose"],
  "Zapdos":           ["zapdos"],
  "Zigzagoon":        ["linoone"],           // Zigzagoon → Linoone
  "Zubat":            ["crobat"],            // Zubat → Golbat → Crobat (friendship)
};

export default evolutionMap;
