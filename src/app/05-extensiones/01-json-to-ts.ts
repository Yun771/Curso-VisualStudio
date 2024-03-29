
// Extensión Paste JSON as Code
// https://pokeapi.co/

// Generated by https://quicktype.io

export class Pokemon {
    abilities:                Ability[];
    base_experience:          number;
    forms:                    Species[];
    game_indices:             GameIndex[];
    height:                   number;
    held_items:               HeldItem[];
    id:                       number;
    is_default:               boolean;
    location_area_encounters: string;
    moves:                    Move[];
    name:                     string;
    order:                    number;
    species:                  Species;
    sprites:                  Sprites;
    stats:                    Stat[];
    types:                    Type[];
    weight:                   number;
}

export class Ability {
    ability:   Species;
    is_hidden: boolean;
    slot:      number;
}

export class Species {
    name: string;
    url:  string;
}

export class GameIndex {
    game_index: number;
    version:    Species;
}

export class HeldItem {
    item:            Species;
    version_details: VersionDetail[];
}

export class VersionDetail {
    rarity:  number;
    version: Species;
}

export class Move {
    move:                  Species;
    version_group_details: VersionGroupDetail[];
}

export class VersionGroupDetail {
    level_learned_at:  number;
    move_learn_method: Species;
    version_group:     Species;
}

export class GenerationV {
    "black-white": Sprites;
}

export class GenerationIv {
    "diamond-pearl":        Sprites;
    "heartgold-soulsilver": Sprites;
    platinum:               Sprites;
}

export class Versions {
    "generation-i":    GenerationI;
    "generation-ii":   GenerationIi;
    "generation-iii":  GenerationIii;
    "generation-iv":   GenerationIv;
    "generation-v":    GenerationV;
    "generation-vi":   { [key: string]: GenerationVi };
    "generation-vii":  GenerationVii;
    "generation-viii": GenerationViii;
}

export class Sprites {
    back_default:       string;
    back_female:        null;
    back_shiny:         string;
    back_shiny_female:  null;
    front_default:      string;
    front_female:       null;
    front_shiny:        string;
    front_shiny_female: null;
    other?:             Other;
    versions?:          Versions;
    animated?:          Sprites;
}

export class GenerationI {
    "red-blue": RedBlue;
    yellow:     RedBlue;
}

export class RedBlue {
    back_default:  string;
    back_gray:     string;
    front_default: string;
    front_gray:    string;
}

export class GenerationIi {
    crystal: Crystal;
    gold:    Crystal;
    silver:  Crystal;
}

export class Crystal {
    back_default:  string;
    back_shiny:    string;
    front_default: string;
    front_shiny:   string;
}

export class GenerationIii {
    emerald:             Emerald;
    "firered-leafgreen": Crystal;
    "ruby-sapphire":     Crystal;
}

export class Emerald {
    front_default: string;
    front_shiny:   string;
}

export class GenerationVi {
    front_default:      string;
    front_female:       null;
    front_shiny:        string;
    front_shiny_female: null;
}

export class GenerationVii {
    icons:                  DreamWorld;
    "ultra-sun-ultra-moon": GenerationVi;
}

export class DreamWorld {
    front_default: string;
    front_female:  null;
}

export class GenerationViii {
    icons: DreamWorld;
}

export class Other {
    dream_world:        DreamWorld;
    "official-artwork": OfficialArtwork;
}

export class OfficialArtwork {
    front_default: string;
}

export class Stat {
    base_stat: number;
    effort:    number;
    stat:      Species;
}

export class Type {
    slot: number;
    type: Species;
}


