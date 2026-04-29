const tmLocations = [

  // ******** TM01 - TM10 ********

  {
    "number": 1,
    "name": "TM01",
    "move": "Focus Punch",
    "type": "Fighting",
    "infinite": false,
    "locations": [
      {
        "name": "Oreburgh Gate",
        "method": "Found",
        "price": null,
        "notes": "B1F west — requires Rock Smash, Surf, and Strength",
        "phase": "Mine"
      }
    ]
  },

  {
    "number": 2,
    "name": "TM02",
    "move": "Dragon Claw",
    "type": "Dragon",
    "infinite": false,
    "locations": [
      {
        "name": "Mt. Coronet",
        "method": "Found",
        "price": null,
        "notes": "Uppermost cave — requires Rock Climb, accessible after chasing Team Galactic out",
        "phase": "Distortion"
      }
    ]
  },

  {
    "number": 3,
    "name": "TM03",
    "move": "Water Pulse",
    "type": "Water",
    "infinite": false,
    "locations": [
      {
        "name": "Ravaged Path",
        "method": "Found",
        "price": null,
        "notes": "Northeast section — requires Surf and Rock Smash",
        "phase": "Relic"
      }
    ]
  },

  {
    "number": 4,
    "name": "TM04",
    "move": "Calm Mind",
    "type": "Psychic",
    "infinite": true,
    "locations": [
      {
        "name": "Battle Frontier",
        "method": "Purchase",
        "price": "48 BP",
        "notes": null,
        "phase": "Battle Frontier"
      }
    ]
  },

  {
    "number": 5,
    "name": "TM05",
    "move": "Roar",
    "type": "Normal",
    "infinite": false,
    "locations": [
      {
        "name": "Route 213",
        "method": "Found",
        "price": null,
        "notes": "Northwest — requires Rock Climb",
        "phase": "Relic"
      }
    ]
  },

  {
    "number": 6,
    "name": "TM06",
    "move": "Toxic",
    "type": "Poison",
    "infinite": true,
    "locations": [
      {
        "name": "Route 212",
        "method": "Found",
        "price": null,
        "notes": "Southeast corner of the larger swamp",
        "phase": "Relic"
      },
      {
        "name": "Battle Frontier",
        "method": "Purchase",
        "price": "32 BP",
        "notes": null,
        "phase": "Battle Frontier"
      }
    ]
  },

  {
    "number": 7,
    "name": "TM07",
    "move": "Hail",
    "type": "Ice",
    "infinite": false,
    "locations": [
      {
        "name": "Route 217",
        "method": "Found",
        "price": null,
        "notes": "Just southeast of the Hiker's house, in the snow",
        "phase": "Icicle"
      }
    ]
  },

  {
    "number": 8,
    "name": "TM08",
    "move": "Bulk Up",
    "type": "Fighting",
    "infinite": true,
    "locations": [
      {
        "name": "Battle Frontier",
        "method": "Purchase",
        "price": "48 BP",
        "notes": null,
        "phase": "Battle Frontier"
      }
    ]
  },

  {
    "number": 9,
    "name": "TM09",
    "move": "Bullet Seed",
    "type": "Grass",
    "infinite": false,
    "locations": [
      {
        "name": "Route 204",
        "method": "Found",
        "price": null,
        "notes": "Northwest — end of the small fenced passageway near Floaroma entrance",
        "phase": "Pre"
      }
    ]
  },

  {
    "number": 10,
    "name": "TM10",
    "move": "Hidden Power",
    "type": "Normal",
    "infinite": true,
    "locations": [
      {
        "name": "Veilstone Game Corner",
        "method": "Purchase",
        "price": "6,000 Coins",
        "notes": null,
        "phase": "Cobble"
      }
    ]
  },

  // ******** TM11 - TM20 ********

  {
    "number": 11,
    "name": "TM11",
    "move": "Sunny Day",
    "type": "Fire",
    "infinite": false,
    "locations": [
      {
        "name": "Route 212",
        "method": "Found",
        "price": null,
        "notes": "West of Pokemon Mansion — requires Cut or Surf",
        "phase": "Relic"
      }
    ]
  },

  {
    "number": 12,
    "name": "TM12",
    "move": "Taunt",
    "type": "Dark",
    "infinite": false,
    "locations": [
      {
        "name": "Route 211",
        "method": "Found",
        "price": null,
        "notes": "East of Eterna City — under the bridge near the cave entrance, requires Rock Smash",
        "phase": "Coal"
      }
    ]
  },

  {
    "number": 13,
    "name": "TM13",
    "move": "Ice Beam",
    "type": "Ice",
    "infinite": true,
    "locations": [
      {
        "name": "Route 216",
        "method": "Found",
        "price": null,
        "notes": "Northeast area — requires Rock Climb",
        "phase": "Icicle"
      },
      {
        "name": "Veilstone Game Corner",
        "method": "Purchase",
        "price": "10,000 Coins",
        "notes": null,
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 14,
    "name": "TM14",
    "move": "Blizzard",
    "type": "Ice",
    "infinite": true,
    "locations": [
      {
        "name": "Lake Acuity",
        "method": "Found",
        "price": null,
        "notes": "Northwest corner of tall grass — requires Surf and Rock Climb",
        "phase": "Icicle"
      },
      {
        "name": "Veilstone Dept. Store",
        "method": "Purchase",
        "price": "$5,500",
        "notes": "3F, bottom cashier",
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 15,
    "name": "TM15",
    "move": "Hyper Beam",
    "type": "Normal",
    "infinite": true,
    "locations": [
      {
        "name": "Veilstone Dept. Store",
        "method": "Purchase",
        "price": "$7,500",
        "notes": "3F, bottom cashier",
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 16,
    "name": "TM16",
    "move": "Light Screen",
    "type": "Psychic",
    "infinite": true,
    "locations": [
      {
        "name": "Veilstone Dept. Store",
        "method": "Purchase",
        "price": "$2,000",
        "notes": "3F, top cashier",
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 17,
    "name": "TM17",
    "move": "Protect",
    "type": "Normal",
    "infinite": true,
    "locations": [
      {
        "name": "Veilstone Dept. Store",
        "method": "Purchase",
        "price": "$2,000",
        "notes": "3F, top cashier",
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 18,
    "name": "TM18",
    "move": "Rain Dance",
    "type": "Water",
    "infinite": false,
    "locations": [
      {
        "name": "Route 223",
        "method": "Found",
        "price": null,
        "notes": "Small platform surrounded by rocks — requires Surf",
        "phase": "Beacon"
      }
    ]
  },

  {
    "number": 19,
    "name": "TM19",
    "move": "Giga Drain",
    "type": "Grass",
    "infinite": false,
    "locations": [
      {
        "name": "Route 209",
        "method": "Found",
        "price": null,
        "notes": "Southeast dead end — requires Surf",
        "phase": "Fen"
      }
    ]
  },

  {
    "number": 20,
    "name": "TM20",
    "move": "Safeguard",
    "type": "Normal",
    "infinite": true,
    "locations": [
      {
        "name": "Veilstone Dept. Store",
        "method": "Purchase",
        "price": "$2,000",
        "notes": "3F, top cashier",
        "phase": "Cobble"
      }
    ]
  },

  // ******** TM21 - TM30 ********

  {
    "number": 21,
    "name": "TM21",
    "move": "Frustration",
    "type": "Normal",
    "infinite": true,
    "locations": [
      {
        "name": "Team Galactic HQ",
        "method": "Found",
        "price": null,
        "notes": "Behind locked door in the generator room — requires Galactic Key",
        "phase": "Cobble"
      },
      {
        "name": "Veilstone Game Corner",
        "method": "Purchase",
        "price": "8,000 Coins",
        "notes": null,
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 22,
    "name": "TM22",
    "move": "SolarBeam",
    "type": "Grass",
    "infinite": true,
    "locations": [
      {
        "name": "Veilstone Dept. Store",
        "method": "Purchase",
        "price": "$3,000",
        "notes": "3F, bottom cashier",
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 23,
    "name": "TM23",
    "move": "Iron Tail",
    "type": "Steel",
    "infinite": false,
    "locations": [
      {
        "name": "Iron Island",
        "method": "Found",
        "price": null,
        "notes": "B2F east — western half of the pit southeast of a Worker",
        "phase": "Fen"
      }
    ]
  },

  {
    "number": 24,
    "name": "TM24",
    "move": "Thunderbolt",
    "type": "Electric",
    "infinite": true,
    "locations": [
      {
        "name": "Valley Windworks",
        "method": "Found",
        "price": null,
        "notes": "Small platform behind the building — requires Surf",
        "phase": "Fen"
      },
      {
        "name": "Veilstone Game Corner",
        "method": "Purchase",
        "price": "10,000 Coins",
        "notes": null,
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 25,
    "name": "TM25",
    "move": "Thunder",
    "type": "Electric",
    "infinite": true,
    "locations": [
      {
        "name": "Lake Valor",
        "method": "Found",
        "price": null,
        "notes": "East wall of tall grass in the southeast — requires Surf",
        "phase": "Cobble"
      },
      {
        "name": "Veilstone Dept. Store",
        "method": "Purchase",
        "price": "$5,500",
        "notes": "3F, bottom cashier",
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 26,
    "name": "TM26",
    "move": "Earthquake",
    "type": "Ground",
    "infinite": true,
    "locations": [
      {
        "name": "Wayward Cave",
        "method": "Found",
        "price": null,
        "notes": "Hidden entrance under Cycling Road — requires Cut and Bicycle",
        "phase": "Forest"
      },
      {
        "name": "Battle Frontier",
        "method": "Purchase",
        "price": "80 BP",
        "notes": null,
        "phase": "Battle Frontier"
      }
    ]
  },

  {
    "number": 27,
    "name": "TM27",
    "move": "Return",
    "type": "Normal",
    "infinite": true,
    "locations": [
      {
        "name": "Sandgem Town",
        "method": "Gift",
        "price": null,
        "notes": "Given by Professor Rowan after receiving the Pokédex",
        "phase": "Pre"
      },
      {
        "name": "Lost Tower",
        "method": "Found",
        "price": null,
        "notes": "4F — north of the middle southernmost gravestone",
        "phase": "Fen"
      },
      {
        "name": "Veilstone Game Corner",
        "method": "Purchase",
        "price": "8,000 Coins",
        "notes": null,
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 28,
    "name": "TM28",
    "move": "Dig",
    "type": "Ground",
    "infinite": false,
    "locations": [
      {
        "name": "Maniac Tunnel",
        "method": "Found",
        "price": null,
        "notes": "Just inside the entrance — behind small rocks",
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 29,
    "name": "TM29",
    "move": "Psychic",
    "type": "Psychic",
    "infinite": true,
    "locations": [
      {
        "name": "Route 211",
        "method": "Found",
        "price": null,
        "notes": "Celestic Town side — highest hill on the eastern part, requires Rock Smash and Rock Climb",
        "phase": "Icicle"
      },
      {
        "name": "Veilstone Game Corner",
        "method": "Purchase",
        "price": "10,000 Coins",
        "notes": null,
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 30,
    "name": "TM30",
    "move": "Shadow Ball",
    "type": "Ghost",
    "infinite": true,
    "locations": [
      {
        "name": "Route 210",
        "method": "Found",
        "price": null,
        "notes": "Foggy area — end of the log path, requires Rock Smash and Bicycle",
        "phase": "Fen"
      },
      {
        "name": "Battle Frontier",
        "method": "Purchase",
        "price": "64 BP",
        "notes": null,
        "phase": "Battle Frontier"
      }
    ]
  },

  // ******** TM31 - TM40 ********

  {
    "number": 31,
    "name": "TM31",
    "move": "Brick Break",
    "type": "Fighting",
    "infinite": true,
    "locations": [
      {
        "name": "Oreburgh Gate",
        "method": "Found",
        "price": null,
        "notes": "B1F northwest — left of the jump ramps, requires Rock Smash and Surf or Bicycle",
        "phase": "Forest"
      },
      {
        "name": "Battle Frontier",
        "method": "Purchase",
        "price": "40 BP",
        "notes": null,
        "phase": "Battle Frontier"
      }
    ]
  },

  {
    "number": 32,
    "name": "TM32",
    "move": "Double Team",
    "type": "Normal",
    "infinite": true,
    "locations": [
      {
        "name": "Wayward Cave",
        "method": "Found",
        "price": null,
        "notes": "1F southwest corner — main entrance, Flash recommended",
        "phase": "Forest"
      },
      {
        "name": "Veilstone Game Corner",
        "method": "Purchase",
        "price": "4,000 Coins",
        "notes": null,
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 33,
    "name": "TM33",
    "move": "Reflect",
    "type": "Psychic",
    "infinite": true,
    "locations": [
      {
        "name": "Veilstone Dept. Store",
        "method": "Purchase",
        "price": "$2,000",
        "notes": "3F, bottom cashier",
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 34,
    "name": "TM34",
    "move": "Shock Wave",
    "type": "Electric",
    "infinite": false,
    "locations": [
      {
        "name": "Route 215",
        "method": "Found",
        "price": null,
        "notes": "South of the largest grass patch",
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 35,
    "name": "TM35",
    "move": "Flamethrower",
    "type": "Fire",
    "infinite": true,
    "locations": [
      {
        "name": "Fuego Ironworks",
        "method": "Found",
        "price": null,
        "notes": "Interior — next to the boiler",
        "phase": "Pre"
      },
      {
        "name": "Veilstone Game Corner",
        "method": "Purchase",
        "price": "10,000 Coins",
        "notes": null,
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 36,
    "name": "TM36",
    "move": "Sludge Bomb",
    "type": "Poison",
    "infinite": true,
    "locations": [
      {
        "name": "Galactic Warehouse",
        "method": "Found",
        "price": null,
        "notes": "B1F northeast — southeast of the Galactic Key",
        "phase": "Cobble"
      },
      {
        "name": "Battle Frontier",
        "method": "Purchase",
        "price": "80 BP",
        "notes": null,
        "phase": "Battle Frontier"
      }
    ]
  },

  {
    "number": 37,
    "name": "TM37",
    "move": "Sandstorm",
    "type": "Rock",
    "infinite": false,
    "locations": [
      {
        "name": "Route 228",
        "method": "Found",
        "price": null,
        "notes": "Southwest of the two Pokémon Rangers",
        "phase": "Post"
      }
    ]
  },

  {
    "number": 38,
    "name": "TM38",
    "move": "Fire Blast",
    "type": "Fire",
    "infinite": true,
    "locations": [
      {
        "name": "Lake Verity",
        "method": "Found",
        "price": null,
        "notes": "Southeast corner of tall grass in the western area — requires Surf",
        "phase": "Cobble"
      },
      {
        "name": "Veilstone Dept. Store",
        "method": "Purchase",
        "price": "$5,500",
        "notes": "3F, bottom cashier",
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 39,
    "name": "TM39",
    "move": "Rock Tomb",
    "type": "Rock",
    "infinite": false,
    "locations": [
      {
        "name": "Ravaged Path",
        "method": "Found",
        "price": null,
        "notes": "Southwest — behind breakable rocks, requires Rock Smash",
        "phase": "Pre"
      }
    ]
  },

  {
    "number": 40,
    "name": "TM40",
    "move": "Aerial Ace",
    "type": "Flying",
    "infinite": true,
    "locations": [
      {
        "name": "Route 213",
        "method": "Found",
        "price": null,
        "notes": "Near Dr. Footstep's house — smash the rocks next to the house",
        "phase": "Relic"
      },
      {
        "name": "Battle Frontier",
        "method": "Purchase",
        "price": "40 BP",
        "notes": null,
        "phase": "Battle Frontier"
      }
    ]
  },

  // ******** TM41 - TM50 ********

  {
    "number": 41,
    "name": "TM41",
    "move": "Torment",
    "type": "Dark",
    "infinite": false,
    "locations": [
      {
        "name": "Victory Road",
        "method": "Found",
        "price": null,
        "notes": "1F — above the Psychic, requires Rock Climb",
        "phase": "Beacon"
      }
    ]
  },

  {
    "number": 42,
    "name": "TM42",
    "move": "Facade",
    "type": "Normal",
    "infinite": false,
    "locations": [
      {
        "name": "Survival Area",
        "method": "Gift",
        "price": null,
        "notes": "Given by a man inside the southernmost house",
        "phase": "Post"
      }
    ]
  },

  {
    "number": 43,
    "name": "TM43",
    "move": "Secret Power",
    "type": "Normal",
    "infinite": false,
    "locations": [
      {
        "name": "Amity Square",
        "method": "Found",
        "price": null,
        "notes": "South area — near the man with a Pikachu",
        "phase": "Fen"
      }
    ]
  },

  {
    "number": 44,
    "name": "TM44",
    "move": "Rest",
    "type": "Psychic",
    "infinite": true,
    "locations": [
      {
        "name": "Veilstone Game Corner",
        "method": "Purchase",
        "price": "6,000 Coins",
        "notes": null,
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 45,
    "name": "TM45",
    "move": "Attract",
    "type": "Normal",
    "infinite": true,
    "locations": [
      {
        "name": "Amity Square",
        "method": "Found",
        "price": null,
        "notes": "North area — near the boy with a Drifloon",
        "phase": "Fen"
      },
      {
        "name": "Battle Frontier",
        "method": "Purchase",
        "price": "32 BP",
        "notes": null,
        "phase": "Battle Frontier"
      }
    ]
  },

  {
    "number": 46,
    "name": "TM46",
    "move": "Thief",
    "type": "Dark",
    "infinite": false,
    "locations": [
      {
        "name": "Eterna City",
        "method": "Found",
        "price": null,
        "notes": "Northeast — cut the tree next to the Team Galactic Building",
        "phase": "Forest"
      }
    ]
  },

  {
    "number": 47,
    "name": "TM47",
    "move": "Steel Wing",
    "type": "Steel",
    "infinite": false,
    "locations": [
      {
        "name": "Route 209",
        "method": "Found",
        "price": null,
        "notes": "Southeast — between the trees south of the Lost Tower, requires Cut",
        "phase": "Fen"
      }
    ]
  },

  {
    "number": 48,
    "name": "TM48",
    "move": "Skill Swap",
    "type": "Psychic",
    "infinite": false,
    "locations": [
      {
        "name": "Canalave City",
        "method": "Found",
        "price": null,
        "notes": "House nearest to the Route 218 entrance",
        "phase": "Fen"
      }
    ]
  },

  {
    "number": 49,
    "name": "TM49",
    "move": "Snatch",
    "type": "Dark",
    "infinite": false,
    "locations": [
      {
        "name": "Team Galactic HQ",
        "method": "Found",
        "price": null,
        "notes": "1F southeast — requires Storage Key (obtained from Galactic grunt outside HQ)",
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 50,
    "name": "TM50",
    "move": "Overheat",
    "type": "Fire",
    "infinite": false,
    "locations": [
      {
        "name": "Stark Mountain",
        "method": "Found",
        "price": null,
        "notes": "Main cavern — use Strength to move the boulder next to the Ace Trainers",
        "phase": "Stark Mountain"
      }
    ]
  },

  // ******** TM51 - TM60 ********

  {
    "number": 51,
    "name": "TM51",
    "move": "Roost",
    "type": "Flying",
    "infinite": false,
    "locations": [
      {
        "name": "Route 210",
        "method": "Gift",
        "price": null,
        "notes": "South section — given by a girl standing on the edge of the southernmost hill",
        "phase": "Relic"
      }
    ]
  },

  {
    "number": 52,
    "name": "TM52",
    "move": "Focus Blast",
    "type": "Fighting",
    "infinite": true,
    "locations": [
      {
        "name": "Veilstone Dept. Store",
        "method": "Purchase",
        "price": "$5,500",
        "notes": "3F, bottom cashier",
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 53,
    "name": "TM53",
    "move": "Energy Ball",
    "type": "Grass",
    "infinite": true,
    "locations": [
      {
        "name": "Route 226",
        "method": "Found",
        "price": null,
        "notes": "Use Rock Climb on the ledge near the Meister's house",
        "phase": "Post"
      },
      {
        "name": "Battle Frontier",
        "method": "Purchase",
        "price": "64 BP",
        "notes": null,
        "phase": "Battle Frontier"
      }
    ]
  },

  {
    "number": 54,
    "name": "TM54",
    "move": "False Swipe",
    "type": "Normal",
    "infinite": true,
    "locations": [
      {
        "name": "Veilstone Dept. Store",
        "method": "Purchase",
        "price": "$2,000",
        "notes": "3F, top cashier",
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 55,
    "name": "TM55",
    "move": "Brine",
    "type": "Water",
    "infinite": false,
    "locations": [
      {
        "name": "Pastoria City",
        "method": "Gym Badge",
        "price": null,
        "notes": "Defeat Gym Leader Crasher Wake",
        "phase": "Fen"
      }
    ]
  },

  {
    "number": 56,
    "name": "TM56",
    "move": "Fling",
    "type": "Dark",
    "infinite": false,
    "locations": [
      {
        "name": "Route 222",
        "method": "Gift",
        "price": null,
        "notes": "Given by the man standing on the edge of the hill",
        "phase": "Beacon"
      }
    ]
  },

  {
    "number": 57,
    "name": "TM57",
    "move": "Charge Beam",
    "type": "Electric",
    "infinite": false,
    "locations": [
      {
        "name": "Sunyshore City",
        "method": "Gym Badge",
        "price": null,
        "notes": "Defeat Gym Leader Volkner",
        "phase": "Beacon"
      }
    ]
  },

  {
    "number": 58,
    "name": "TM58",
    "move": "Endure",
    "type": "Normal",
    "infinite": true,
    "locations": [
      {
        "name": "Veilstone Game Corner",
        "method": "Purchase",
        "price": "2,000 Coins",
        "notes": null,
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 59,
    "name": "TM59",
    "move": "Dragon Pulse",
    "type": "Dragon",
    "infinite": true,
    "locations": [
      {
        "name": "Victory Road",
        "method": "Found",
        "price": null,
        "notes": "Near the end — go down the southernmost waterfall after the Dragon Tamer, requires Waterfall",
        "phase": "Beacon"
      },
      {
        "name": "Battle Frontier",
        "method": "Purchase",
        "price": "80 BP",
        "notes": null,
        "phase": "Battle Frontier"
      }
    ]
  },

  {
    "number": 60,
    "name": "TM60",
    "move": "Drain Punch",
    "type": "Fighting",
    "infinite": false,
    "locations": [
      {
        "name": "Veilstone City",
        "method": "Gym Badge",
        "price": null,
        "notes": "Defeat Gym Leader Maylene",
        "phase": "Cobble"
      }
    ]
  },

  // ******** TM61 - TM70 ********

  {
    "number": 61,
    "name": "TM61",
    "move": "Will-O-Wisp",
    "type": "Fire",
    "infinite": true,
    "locations": [
      {
        "name": "Battle Frontier",
        "method": "Purchase",
        "price": "32 BP",
        "notes": null,
        "phase": "Battle Frontier"
      }
    ]
  },

  {
    "number": 62,
    "name": "TM62",
    "move": "Silver Wind",
    "type": "Bug",
    "infinite": false,
    "locations": [
      {
        "name": "Route 212",
        "method": "Found",
        "price": null,
        "notes": "Small island near the three fishermen",
        "phase": "Relic"
      }
    ]
  },

  {
    "number": 63,
    "name": "TM63",
    "move": "Embargo",
    "type": "Dark",
    "infinite": false,
    "locations": [
      {
        "name": "Veilstone City",
        "method": "Gift",
        "price": null,
        "notes": "Given by a man near the Pokémon Center",
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 64,
    "name": "TM64",
    "move": "Explosion",
    "type": "Normal",
    "infinite": false,
    "locations": [
      {
        "name": "Veilstone Game Corner",
        "method": "Found",
        "price": null,
        "notes": "Given by the woman behind the counter at random (bonus rounds)",
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 65,
    "name": "TM65",
    "move": "Shadow Claw",
    "type": "Ghost",
    "infinite": false,
    "locations": [
      {
        "name": "Hearthome City",
        "method": "Gym Badge",
        "price": null,
        "notes": "Defeat Gym Leader Fantina",
        "phase": "Relic"
      }
    ]
  },

  {
    "number": 66,
    "name": "TM66",
    "move": "Payback",
    "type": "Dark",
    "infinite": false,
    "locations": [
      {
        "name": "Route 215",
        "method": "Gift",
        "price": null,
        "notes": "Given by the Black Belt before the second bridge",
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 67,
    "name": "TM67",
    "move": "Recycle",
    "type": "Normal",
    "infinite": false,
    "locations": [
      {
        "name": "Eterna City",
        "method": "Gift",
        "price": null,
        "notes": "Given by the old lady on the 2F of the Eterna Condominiums",
        "phase": "Forest"
      }
    ]
  },

  {
    "number": 68,
    "name": "TM68",
    "move": "Giga Impact",
    "type": "Normal",
    "infinite": true,
    "locations": [
      {
        "name": "Veilstone Game Corner",
        "method": "Purchase",
        "price": "20,000 Coins",
        "notes": null,
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 69,
    "name": "TM69",
    "move": "Rock Polish",
    "type": "Rock",
    "infinite": false,
    "locations": [
      {
        "name": "Mt. Coronet",
        "method": "Found",
        "price": null,
        "notes": "North of the Eterna City entrance — requires Strength and Rock Smash",
        "phase": "Fen"
      }
    ]
  },

  {
    "number": 70,
    "name": "TM70",
    "move": "Flash",
    "type": "Normal",
    "infinite": true,
    "locations": [
      {
        "name": "Oreburgh Gate",
        "method": "Found",
        "price": null,
        "notes": "Basement right side — requires Rock Smash",
        "phase": "Coal"
      },
      {
        "name": "Veilstone Dept. Store",
        "method": "Purchase",
        "price": "$1,000",
        "notes": null,
        "phase": "Cobble"
      }
    ]
  },

  // ******** TM71 - TM80 ********

  {
    "number": 71,
    "name": "TM71",
    "move": "Stone Edge",
    "type": "Rock",
    "infinite": true,
    "locations": [
      {
        "name": "Victory Road",
        "method": "Found",
        "price": null,
        "notes": "End of the third set of bike ramps",
        "phase": "Beacon"
      },
      {
        "name": "Battle Frontier",
        "method": "Purchase",
        "price": "80 BP",
        "notes": null,
        "phase": "Battle Frontier"
      }
    ]
  },

  {
    "number": 72,
    "name": "TM72",
    "move": "Avalanche",
    "type": "Ice",
    "infinite": false,
    "locations": [
      {
        "name": "Snowpoint City",
        "method": "Gym Badge",
        "price": null,
        "notes": "Defeat Gym Leader Candice",
        "phase": "Icicle"
      }
    ]
  },

  {
    "number": 73,
    "name": "TM73",
    "move": "Thunder Wave",
    "type": "Electric",
    "infinite": true,
    "locations": [
      {
        "name": "Battle Frontier",
        "method": "Purchase",
        "price": "32 BP",
        "notes": null,
        "phase": "Battle Frontier"
      }
    ]
  },

  {
    "number": 74,
    "name": "TM74",
    "move": "Gyro Ball",
    "type": "Steel",
    "infinite": true,
    "locations": [
      {
        "name": "Veilstone Game Corner",
        "method": "Purchase",
        "price": "10,000 Coins",
        "notes": null,
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 75,
    "name": "TM75",
    "move": "Swords Dance",
    "type": "Normal",
    "infinite": true,
    "locations": [
      {
        "name": "Veilstone Game Corner",
        "method": "Purchase",
        "price": "4,000 Coins",
        "notes": null,
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 76,
    "name": "TM76",
    "move": "Stealth Rock",
    "type": "Rock",
    "infinite": false,
    "locations": [
      {
        "name": "Oreburgh City",
        "method": "Gym Badge",
        "price": null,
        "notes": "Defeat Gym Leader Roark",
        "phase": "Coal"
      }
    ]
  },

  {
    "number": 77,
    "name": "TM77",
    "move": "Psych Up",
    "type": "Normal",
    "infinite": false,
    "locations": [
      {
        "name": "Route 211",
        "method": "Gift",
        "price": null,
        "notes": "Given by a Trainer on the edge of the hill near the Ruin Maniac — requires Rock Climb",
        "phase": "Icicle"
      }
    ]
  },

  {
    "number": 78,
    "name": "TM78",
    "move": "Captivate",
    "type": "Normal",
    "infinite": false,
    "locations": [
      {
        "name": "Route 204",
        "method": "Gift",
        "price": null,
        "notes": "North section — use Cut on the tree near the Twins, follow the path to the woman",
        "phase": "Forest"
      }
    ]
  },

  {
    "number": 79,
    "name": "TM79",
    "move": "Dark Pulse",
    "type": "Dark",
    "infinite": false,
    "locations": [
      {
        "name": "Victory Road",
        "method": "Found",
        "price": null,
        "notes": "2F — enter from the northwest door on 1F, use Rock Climb twice, then Strength",
        "phase": "Beacon"
      }
    ]
  },

  {
    "number": 80,
    "name": "TM80",
    "move": "Rock Slide",
    "type": "Rock",
    "infinite": false,
    "locations": [
      {
        "name": "Mt. Coronet",
        "method": "Found",
        "price": null,
        "notes": "Requires Surf, Strength, and Rock Climb — accessible from Eterna City entrance",
        "phase": "Icicle"
      }
    ]
  },

  // ******** TM81 - TM92 ********

  {
    "number": 81,
    "name": "TM81",
    "move": "X-Scissor",
    "type": "Bug",
    "infinite": true,
    "locations": [
      {
        "name": "Route 221",
        "method": "Found",
        "price": null,
        "notes": "After crossing the large patch of grass",
        "phase": "Post"
      },
      {
        "name": "Battle Frontier",
        "method": "Purchase",
        "price": "64 BP",
        "notes": null,
        "phase": "Battle Frontier"
      }
    ]
  },

  {
    "number": 82,
    "name": "TM82",
    "move": "Sleep Talk",
    "type": "Normal",
    "infinite": false,
    "locations": [
      {
        "name": "Eterna Forest",
        "method": "Found",
        "price": null,
        "notes": "Shortcut via left bridge outside Eterna City — requires Cut",
        "phase": "Forest"
      }
    ]
  },

  {
    "number": 83,
    "name": "TM83",
    "move": "Natural Gift",
    "type": "Normal",
    "infinite": true,
    "locations": [
      {
        "name": "Veilstone Dept. Store",
        "method": "Purchase",
        "price": "$2,000",
        "notes": null,
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 84,
    "name": "TM84",
    "move": "Poison Jab",
    "type": "Poison",
    "infinite": false,
    "locations": [
      {
        "name": "Route 212",
        "method": "Found",
        "price": null,
        "notes": "Behind a tree in the rainy area — requires Surf",
        "phase": "Relic"
      }
    ]
  },

  {
    "number": 85,
    "name": "TM85",
    "move": "Dream Eater",
    "type": "Psychic",
    "infinite": false,
    "locations": [
      {
        "name": "Valor Lakefront",
        "method": "Found",
        "price": null,
        "notes": "Behind the Game Designer's house — use Rock Climb on the rocks, follow the path",
        "phase": "Relic"
      }
    ]
  },

  {
    "number": 86,
    "name": "TM86",
    "move": "Grass Knot",
    "type": "Grass",
    "infinite": false,
    "locations": [
      {
        "name": "Eterna City",
        "method": "Gym Badge",
        "price": null,
        "notes": "Defeat Gym Leader Gardenia",
        "phase": "Forest"
      }
    ]
  },

  {
    "number": 87,
    "name": "TM87",
    "move": "Swagger",
    "type": "Normal",
    "infinite": false,
    "locations": [
      {
        "name": "Pokemon Mansion",
        "method": "Found",
        "price": null,
        "notes": "Inside Mr. Backlot's office — accessible only between 2 AM and 6 AM",
        "phase": "Relic"
      }
    ]
  },

  {
    "number": 88,
    "name": "TM88",
    "move": "Pluck",
    "type": "Flying",
    "infinite": false,
    "locations": [
      {
        "name": "Floaroma Town",
        "method": "Gift",
        "price": null,
        "notes": "Given by a girl inside the house next to the flower shop",
        "phase": "Pre"
      }
    ]
  },

  {
    "number": 89,
    "name": "TM89",
    "move": "U-Turn",
    "type": "Bug",
    "infinite": true,
    "locations": [
      {
        "name": "Canalave City",
        "method": "Found",
        "price": null,
        "notes": "Canal — Surf south to reach the TM",
        "phase": "Fen"
      },
      {
        "name": "Veilstone Game Corner",
        "method": "Purchase",
        "price": "6,000 Coins",
        "notes": null,
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 90,
    "name": "TM90",
    "move": "Substitute",
    "type": "Normal",
    "infinite": true,
    "locations": [
      {
        "name": "Old Chateau",
        "method": "Found",
        "price": null,
        "notes": "2F — inside the rightmost room",
        "phase": "Forest"
      },
      {
        "name": "Veilstone Game Corner",
        "method": "Purchase",
        "price": "2,000 Coins",
        "notes": null,
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 91,
    "name": "TM91",
    "move": "Flash Cannon",
    "type": "Steel",
    "infinite": false,
    "locations": [
      {
        "name": "Canalave City",
        "method": "Gym Badge",
        "price": null,
        "notes": "Defeat Gym Leader Byron",
        "phase": "Fen"
      }
    ]
  },

  {
    "number": 92,
    "name": "TM92",
    "move": "Trick Room",
    "type": "Psychic",
    "infinite": false,
    "locations": [
      {
        "name": "Route 213",
        "method": "Gift",
        "price": null,
        "notes": "Given by a Clown inside the house near the hotel entrance",
        "phase": "Relic"
      }
    ]
  },

  // ******** HMs ********

  {
    "number": 1,
    "name": "HM01",
    "move": "Cut",
    "type": "Normal",
    "infinite": true,
    "locations": [
      {
        "name": "Eterna City",
        "method": "Gift",
        "price": null,
        "notes": "Given by Cynthia after defeating Gym Leader Gardenia",
        "phase": "Forest"
      }
    ]
  },

  {
    "number": 2,
    "name": "HM02",
    "move": "Fly",
    "type": "Flying",
    "infinite": true,
    "locations": [
      {
        "name": "Veilstone City",
        "method": "Found",
        "price": null,
        "notes": "Galactic Warehouse — right of the entrance, accessible after battling the two Grunts with Dawn/Lucas",
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 3,
    "name": "HM03",
    "move": "Surf",
    "type": "Water",
    "infinite": true,
    "locations": [
      {
        "name": "Celestic Town",
        "method": "Gift",
        "price": null,
        "notes": "Given by Cynthia's grandmother inside the ruins after defeating the Galactic Grunt and delivering the Old Charm",
        "phase": "Relic"
      }
    ]
  },

  {
    "number": 4,
    "name": "HM04",
    "move": "Strength",
    "type": "Normal",
    "infinite": true,
    "locations": [
      {
        "name": "Iron Island",
        "method": "Gift",
        "price": null,
        "notes": "Given by Riley after accompanying him through Iron Island",
        "phase": "Fen"
      }
    ]
  },

  {
    "number": 5,
    "name": "HM05",
    "move": "Defog",
    "type": "Flying",
    "infinite": true,
    "locations": [
      {
        "name": "Solaceon Ruins",
        "method": "Found",
        "price": null,
        "notes": "Deepest floor of the ruins",
        "phase": "Cobble"
      }
    ]
  },

  {
    "number": 6,
    "name": "HM06",
    "move": "Rock Smash",
    "type": "Fighting",
    "infinite": true,
    "locations": [
      {
        "name": "Oreburgh Gate",
        "method": "Gift",
        "price": null,
        "notes": "Given by the Hiker upon entering the cave for the first time",
        "phase": "Pre"
      }
    ]
  },

  {
    "number": 7,
    "name": "HM07",
    "move": "Waterfall",
    "type": "Water",
    "infinite": true,
    "locations": [
      {
        "name": "Sunyshore City",
        "method": "Gift",
        "price": null,
        "notes": "Given by Jasmine after defeating Gym Leader Volkner",
        "phase": "Beacon"
      }
    ]
  },

  {
    "number": 8,
    "name": "HM08",
    "move": "Rock Climb",
    "type": "Normal",
    "infinite": true,
    "locations": [
      {
        "name": "Route 217",
        "method": "Found",
        "price": null,
        "notes": "Northeast of the Hiker's house, in the snow",
        "phase": "Icicle"
      }
    ]
  }

];

export default tmLocations;
