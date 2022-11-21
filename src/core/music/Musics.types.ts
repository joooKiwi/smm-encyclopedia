enum Enum {

    TITLE_SCREEN,

    GROUND,
    UNDERGROUND,
    UNDERWATER,
    DESERT,
    SNOW,
    SKY,
    FOREST,
    GHOST_HOUSE,
    AIRSHIP,
    CASTLE,
    VOLCANO,
    SPACE,

    P_SWITCH,
    STAR,

    NINJA_ATTACK,
    AUDIENCE,
    SCATTING,
    TRADITIONAL,
    PEACEFUL,

    BONUS,
    BOSS, FINAL_BOSS,

    SUPER_MARIO_KART,
    SUPER_MARIO_64,
    SUPER_MARIO_SUNSHINE,
    SUPER_MARIO_GALAXY,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum
