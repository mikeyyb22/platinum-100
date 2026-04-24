const moveTutors = [

  {
    "name": "Move Reminder",
    "location": "Pastoria City",
    "phase": "Cobble",
    "cost": "Heart Scale",
    "repeatable": true,
    "notes": "Teaches any move the Pokémon could have learned at an earlier level — move list varies per Pokémon",
    "moves": []
    // No fixed move list — handle dynamically in JS using PokeAPI movepool data
  },

  {
    "name": "Grandma Wilma",
    "location": "Route 210",
    "phase": "Icicle",
    "cost": "Max Friendship",
    "repeatable": true,
    "notes": "North foggy section east of Celestic Town — requires Rock Climb - teaches Draco Meteor to Dragon type with max friendship",
    "moves": [
        {
            "name": "Draco Meteor",
            "type": "Dragon",
            "price": "Max Friendship"
        }
    ]
  },

  {
    "name": "Ultimate Move Tutor",
    "location": "Survival Area",
    "phase": "Post",
    "cost": "Max Friendship",
    "repeatable": true,
    "notes": "Teaches elemental Hyper Beam variants to fully evolved starter Pokémon only",
    "moves": [
        {
            "name": "Blast Burn",
            "type": "Fire",
            "price": "Max Friendship"
        },
        {
            "name": "Frenzy Plant",
            "type": "Grass",
            "price": "Max Friendship"
        },
        {
            "name": "Hydro Cannon",
            "type": "Water",
            "price": "Max Friendship"
        }
    ]
  },

  {
    "name": "Shard Tutor",
    "location": "Route 212",
    "phase": "Relic",
    "cost": "Shards",
    "repeatable": true,
    "notes": "South rainy section — house roughly halfway between Pastoria City and Hearthome City",
    "moves": [
        {
            "name": "Air Cutter",
            "type": "Flying",
            "price": "2 red, 2 green, 4 blue"
        },
        {
            "name": "Dive",
            "type": "Water",
            "price": "2 red, 4 blue, 2 yellow"
        },
        {
            "name": "Fire Punch",
            "type": "Fire",
            "price": "2 red, 6 blue"
        },
        {
            "name": "Fury Cutter",
            "type": "Bug",
            "price": "8 blue"
        },
        {
            "name": "Ice Punch",
            "type": "Ice",
            "price": "2 red, 6 blue"
        },
        {
            "name": "Icy Wind",
            "type": "Ice",
            "price": "2 green, 6 blue"
        },
        {
            "name": "Knock Off",
            "type": "Dark",
            "price": "4 red, 4 blue"
        },
        {
            "name": "Ominous Wind",
            "type": "Ghost",
            "price": "2 green, 6 blue"
        },
        {
            "name": "Sucker Punch",
            "type": "Dark",
            "price": "6 blue, 2 yellow"
        },
        {
            "name": "ThunderPunch",
            "type": "Electric",
            "price": "2 red, 6 blue"
        },
        {
            "name": "Trick",
            "type": "Psychic",
            "price": "4 blue, 4 yellow"
        },
        {
            "name": "Vacuum Wave",
            "type": "Fighting",
            "price": "2 red, 2 green, 4 blue"
        },
        {
            "name": "Zen Headbutt",
            "type": "Psychic",
            "price": "4 blue, 4 yellow"
        },
    ]
  },

  {
    "name": "Shard Tutor",
    "location": "Snowpoint City",
    "phase": "Mine",
    "cost": "Shards",
    "repeatable": true,
    "notes": "Northeast house — north of the Pokémon Center past the Gym",
    "moves": [
        {
            "name": "Helping Hand",
            "type": "Normal",
            "price": "2 red, 2 green, 4 yellow"
        },
        {
            "name": "Last Resort",
            "type": "Normal",
            "price": "8 green"
        },
        {
            "name": "Magnet Rise",
            "type": "Electric",
            "price": "2 green, 2 blue, 4 yellow"
        },
        {
            "name": "Snore",
            "type": "Normal",
            "price": "2 red, 2 green, 4 yellow"
        },
        {
            "name": "Spite",
            "type": "Ghost",
            "price": "4 green, 2 blue, 2 yellow"
        },
        {
            "name": "Swift",
            "type": "Normal",
            "price": "4 green, 2 blue, 2 yellow"
        },
        {
            "name": "Synthesis",
            "type": "Grass",
            "price": "6 green, 2 yellow"
        },
        {
            "name": "Uproar",
            "type": "Normal",
            "price": "2 green, 6 yellow"
        },
    ]
  },

  {
    "name": "Shard Tutor",
    "location": "Survival Area",
    "phase": "Post",
    "cost": "Shards",
    "repeatable": true,
    "notes": "House in the Survival Area — largest move list of the three Shard Tutors",
    "moves": [
        {
            "name": "AncientPower",
            "type": "Rock",
            "price": "6 red, 2 green"
        },
        {
            "name": "Aqua Tail",
            "type": "Water",
            "price": "6 red, 2 green"
        },
        {
            "name": "Bounce",
            "type": "Flying",
            "price": "4 red, 2 green, 2 yellow"
        },
        {
            "name": "Earth Power",
            "type": "Ground",
            "price": "6 red, 2 green"
        },
        {
            "name": "Endeavor",
            "type": "Normal",
            "price": "4 red, 4 yellow"
        },
        {
            "name": "Gastro Acid",
            "type": "Poison",
            "price": "4 red, 2 green, 2 yellow"
        },
        {
            "name": "Gunk Shot",
            "type": "Poison",
            "price": "4 red, 2 green, 2 blue"
        },
        {
            "name": "Heat Wave",
            "type": "Fire",
            "price": "4 red, 2 green, 2 blue"
        },
        {
            "name": "Iron Defense",
            "type": "Steel",
            "price": "4 red, 2 blue, 2 yellow"
        },
        {
            "name": "Iron Head",
            "type": "Steel",
            "price": "6 red, 2 yellow"
        },
        {
            "name": "Mud-Slap",
            "type": "Ground",
            "price": "4 red, 4 blue"
        },
        {
            "name": "Outrage",
            "type": "Dragon",
            "price": "6 red, 2 yellow"
        },
        {
            "name": "Rollout",
            "type": "Rock",
            "price": "4 red, 2 green, 2 blue"
        },
        {
            "name": "Seed Bomb",
            "type": "Grass",
            "price": "4 red, 4 green"
        },
        {
            "name": "Signal Beam",
            "type": "Bug",
            "price": "2 red, 2 green, 2 blue, 2 yellow"
        },
        {
            "name": "Superpower",
            "type": "Fighting",
            "price": "8 red"
        },
        {
            "name": "Twister",
            "type": "Dragon",
            "price": "6 red, 2 green"
        }
    ]
  }

];

export default moveTutors;
