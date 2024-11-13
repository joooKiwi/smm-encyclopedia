enum Enum {

    MARIO,
    SMALL_MARIO, SUPER_MARIO,
    WEIRD_MARIO, COSTUME_MARIO,
    FIRE_MARIO, SUPERBALL_MARIO,
    GIANT_MARIO, SMB2_MARIO,
    RACCOON_MARIO, FROG_MARIO,
    CAPE_MARIO, BALLOON_MARIO,
    PROPELLER_MARIO, FLYING_SQUIRREL_MARIO,
    CAT_MARIO, BUILDER_MARIO, BOOMERANG_MARIO,
    BUZZY_MARIO, SPINY_MARIO,

    LUIGI,
    SMALL_LUIGI, SUPER_LUIGI,
    FIRE_LUIGI, SUPERBALL_LUIGI,
    GIANT_LUIGI, SMB2_LUIGI,
    RACCOON_LUIGI, FROG_LUIGI,
    CAPE_LUIGI, BALLOON_LUIGI,
    PROPELLER_LUIGI, FLYING_SQUIRREL_LUIGI,
    CAT_LUIGI, BUILDER_LUIGI, BOOMERANG_LUIGI,
    BUZZY_LUIGI, SPINY_LUIGI,

    TOAD,
    SMALL_TOAD, SUPER_TOAD,
    FIRE_TOAD, SUPERBALL_TOAD,
    GIANT_TOAD, SMB2_TOAD,
    RACCOON_TOAD, FROG_TOAD,
    CAPE_TOAD, BALLOON_TOAD,
    PROPELLER_TOAD, FLYING_SQUIRREL_TOAD,
    CAT_TOAD, BUILDER_TOAD, BOOMERANG_TOAD,
    BUZZY_TOAD, SPINY_TOAD,

    TOADETTE,
    SMALL_TOADETTE, SUPER_TOADETTE,
    FIRE_TOADETTE, SUPERBALL_TOADETTE,
    GIANT_TOADETTE, SMB2_TOADETTE,
    RACCOON_TOADETTE, FROG_TOADETTE,
    CAPE_TOADETTE, BALLOON_TOADETTE,
    PROPELLER_TOADETTE, FLYING_SQUIRREL_TOADETTE,
    CAT_TOADETTE, BUILDER_TOADETTE, BOOMERANG_TOADETTE,
    BUZZY_TOADETTE, SPINY_TOADETTE,

    LINK, ZELDA,

    PEACH, DAISY, YOSHI,

    DONKEY_KONG,

    PRINCESS_PEACH,
    RED_TOAD, GREEN_TOAD, BLUE_TOAD, PURPLE_TOAD, YELLOW_TOAD,

    UNDODOG_SMM, UNDODOG_SMM2,
    YAMAMURA,
    MARY_O, NINA,
    PARAKEET,
    MR_ERASER,
    SOUND_FROG_SMM, SOUND_FROG_SMM2,
    PARTRICK,

    THE_TASKMASTER, THE_GAMEMASTER,
    LEGENDARY_EXPLORER, STARGAZER,

    FATHER_OF_NAME_WITHHELD, NAME_WITHHELF_BY_REQUEST,
    A_CERTAIN_MAGE, MISCHIVEOUS_MOLE,


    AGENT_1, AGENT_2,
    CELEBRITY_MC, CELEBRITY_DJ,

    DOCTOR_GIZMO, YOUTHFUL_RESEARCHER,

    GOOMBA_LOVER, SNAKE_BLOCK_ENTHUSIAST, LONELY_FARMER,
    AMATEUR_METEOROLOGIST, ECCENTRIC_MILLIONAIRE, P_E_TEACHER,
    ROOKIE_CARPENTER, VETERAN_CARPENTER, OCEAN_AFICIONADO,
    WARRIOR_DAD, FIRED_UP_ANNOUNCER, WORLD_RENOWNED_CHEF,
    BASEMENT_MUSICIAN, YOUNG_DREAMER, RULER_OF_THE_SKIES,
    GENERAL_CONTRACTOR,

    COURSEBOT, WORLDBOT,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- English name --------------------

export type PossibleUniqueEnglishName = Exclude<PossibleEnglishName, | 'Undodog' | 'Soundfrog'> | `${| 'Undodog' | 'Soundfrog'} (SMM${| EmptyString | 2})`
export type PossibleEnglishName_PlayableCharacter = | `${| EmptyString | `${| 'Small' | 'Super'
                                                                       | 'Fire' | 'Superball'
                                                                       | 'Giant' | 'SMB2'
                                                                       | 'Raccoon' | 'Frog'
                                                                       | 'Cape' | 'Balloon'
                                                                       | 'Propeller' | 'Flying Squirrel'
                                                                       | 'Cat' | 'Builder' | 'Boomerang'
                                                                       | 'Buzzy' | 'Spiny'} `}${| 'Mario' | 'Luigi' | 'Toad' | 'Toadette'}`
                                                    | `${| 'Weird' | 'Costume'} Mario`

                                                    | 'Link'
export type PossibleEnglishName =
    | PossibleEnglishName_PlayableCharacter | 'Zelda'

    | 'Peach' | 'Daisy' | 'Yoshi'

    | 'Donkey Kong'

    | 'Princess Peach' | `${| 'Red' | 'Green' | 'Blue' | 'Purple' | 'Yellow'} Toad`

    | 'Undodog' | 'Yamamura' | 'Mary O.' | 'Nina' | 'Parakeet'
    | 'Mr. Eraser' | 'Soundfrog' | 'Partrick'

    | 'The Taskmaster' | 'The Gamemaster' | 'Legendary Explorer' | 'Stargazer'
    | 'Father of Name Withheld' | 'Name Withheld by Request' | 'A Certain Mage' | 'Mischievous Mole'
    | 'Agent 1' | 'Agent 2' | 'Celebrity MC' | 'Celebrity DJ'
    | 'Doctor Gizmo' | 'Youthful Researcher'

    | 'Goomba Lover' | 'Snake Block Enthusiast' | 'Lonely Farmer'
    | 'Amateur Meteorologist' | 'Eccentric Millionaire' | 'P.E. Teacher'
    | 'Rookie Carpenter' | 'Veteran Carpenter' | 'Ocean Aficionado'
    | 'Warrior Dad' | 'Fired-Up Announcer' | 'World-Renowned Chef'
    | 'Basement Musician' | 'Young Dreamer' | 'Ruler of the Skies'
    | 'General Contractor'

    | 'Coursebot' | 'Worldbot'


//endregion -------------------- English name --------------------
