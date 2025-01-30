import type {EmptyString}      from '@joookiwi/type'
import {MysteryMushroomSounds} from 'core/mysteryMushroom/MysteryMushroomSounds'
import {MysteryMushroomImages} from 'core/mysteryMushroom/MysteryMushroomImages'

declare const enum Enum {
    MYSTERY_MUSHROOM,

    YAMAMURA, MARY_O, UNDODOG,

    MR_GAME_AND_WATCH,

    PAC_MAN,

    MARIO,
    LUIGI, PROFESSOR_E_GADD,
    PEACH, DAISY, ROSALINA,
    TOAD, CAPTAIN_TOAD, TOADETTE,
    YOSHI, BIRDO,
    WARIO, ASHLEY, WALUIGI,
    BOWSER, BOWSER_JR, GOOMBA, SHY_GUY, NABBIT,
    BUILDER_MARIO, MARIO_SILVER, MARIO_GOLD,
    DR_MARIO,
    FROG_MARIO, STATUE_MARIO, MARIO_TRIO,
    KART_MARIO,
    CAT_MARIO, CAT_PEACH,
    SKY_POP,
    BABY_MARIO,
    QUESTION_MARK_BLOCK, TRAMPOLINE,
    MARIO_MB, SIDESTEPPER, SHELLCREEPER, FIGHTER_FLY,

    GREEN_YARN_YOSHI, PINK_YARN_YOSHI, LIGHT_BLUE_YARN_YOSHI, MEGA_YARN_YOSHI,

    DONKEY_KONG, DONKEY_KONG_JR, DIDDY_KONG,

    LITTLE_MAC,

    DUCK_HUNT,

    BUBBLES,

    BIKE,

    BALLOON_FIGHTER,

    POPO_AND_NANA,

    FOREMAN_SPIKE,

    LINK, ZELDA, SHEIK,
    TOON_LINK, TETRA,
    TINGLE,
    GANONDORF,
    WOLF_LINK, TOTEM_LINK,

    SAMUS, ZERO_SUIT_SAMUS,

    VOLLEYBALL_PLAYER,

    PIT, PALUTENA, DARK_PIT,

    DONBE, HIKARI,

    MEGA_MAN,

    AYUMI_TACHIBANA,

    MARTH, IKE, LUCINA, ROBIN,

    CAPTAIN_FALCON,

    SONIC,

    KIRBY, KING_DEDEDE, META_KNIGHT,

    FOX_MCCLOUD, FALCO_LOMBARDI, SLIPPY_TOAD, PEPPY_HARE,
    ARWING,

    NESS, LUCAS,
    MASTER_BELCH, MR_SATURN,

    BULBASAUR,
    CHARMANDER, CHARIZARD,
    SQUIRTLE,
    PIKACHU,
    JIGGLYPUFF,
    MEWTWO,
    LUCARIO,
    GRENINJA,

    VILLAGER,
    TOM_NOOK,
    K_K_SLIDER,
    RESETTI,
    ROVER,
    TIMMY_AND_TOMMY,
    BLATHERS,
    MABEL,
    KAPP_N,
    CELESTE,
    KICKS,
    ISABELLE_SUMMER_OUTFIT, ISABELLE_WINTER_OUTFIT,
    DIGBY,
    CYRUS,
    REESE,
    LOTTIE,

    CAPTAIN_OLIMAR, PIKMIN,

    CHIBI_ROBO,

    WII_BALANCE_BOARD, WII_FIT_TRAINER,

    SHULK,

    FELYNE,

    YU_AYASAKI,

    DR_KAWASHIMA,

    DR_LOBE,

    BARBARA_THE_BAT,

    STARFY,

    MALLO,

    NIKKI,
    IRIS_ARCHWELL,
    ARCADE_BUNNY,

    CHITOGE_KIRISAKI,

    INKLING_SQUID, INKLING_BOY, INKLING_GIRL,
    CALLIE, MARIE,

    ROB,
    DISKUN,
    MAHJONG_TILE,

    KITTY_WHITE, MELODY,
    SHAUN_THE_SHEEP,

    ARINO_KACHO,
    SUPER_MARIO_KUN,
    NECKY,
    GLA,
    BABYMETAL,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- File name --------------------

/** The possible file name associated to a {@link MysteryMushrooms} sound */
export type PossibleSoundFileName = typeof MysteryMushroomSounds[Names]['fileName']

/** The possible first file name associated to a {@link MysteryMushrooms} images */
export type PossibleImageFileName1 = typeof MysteryMushroomImages[Names]['fileName1']
/** The possible second file name associated to a {@link MysteryMushrooms} images */
export type PossibleImageFileName2 = typeof MysteryMushroomImages[Names]['fileName2']

/** The possible file name associated to a {@link MysteryMushrooms} images */
export type PossibleImagesFileName = typeof MysteryMushroomImages[Names][| 'fileName1' | 'fileName2']

//endregion -------------------- File name --------------------
//region -------------------- English name --------------------

export type PossibleUniqueEnglishName = | PossibleEnglishName | 'Mario (MB)'
export type PossibleEnglishName =
    | 'Mystery Mushroom'

    | 'Yamamura' | 'Mary O.' | 'Undodog'

    | 'Mr. Game & Watch'

    | 'PAC-MAN'

    | 'Mario'
    | 'Peach'
    | 'Daisy'
    | 'Rosalina'
    | 'Luigi'
    | 'Professor E. Gadd'
    | `Toad${| EmptyString | 'ette'}` | 'Captain Toad'
    | 'Yoshi' | 'Birdo'
    | 'Wario' | 'Ashley' | 'Waluigi'
    | `Bowser${| EmptyString | ' Jr.'}` | 'Goomba' | 'Shy Guy' | 'Nabbit'
    | `Mario ${| `(${| 'Silver' | 'Gold'})` | 'Trio'}`
    | `${| 'Builder' | 'Dr.' | 'Frog' | 'Statue' | 'Kart'} Mario`
    | `Cat ${| 'Mario' | 'Peach'}`
    | 'Sky Pop'
    | 'Baby Mario'
    | '? Block' | 'Trampoline'
    | 'Sidestepper' | 'Shellcreeper' | 'Fighter Fly'

    | `${| 'Green' | 'Pink' | 'Light-Blue' | 'Mega'} Yarn Yoshi`

    | `Donkey Kong${| EmptyString | ' Jr.'}` | 'Diddy Kong'

    | 'Little Mac'

    | 'Duck Hunt'

    | 'Bubbles'

    | 'Bike'

    | 'Balloon Fighter'

    | 'Popo & Nana'

    | 'Foreman Spike'

    | 'Link' | 'Zelda' | 'Sheik'
    | 'Toon Link' | 'Tetra'
    | 'Tingle'
    | 'Ganondorf'
    | `${| 'Wolf' | 'Totem'} Link`

    | `${| EmptyString | 'Zero Suit '}Samus`

    | 'Volleyball Player'

    | 'Pit' | 'Palutena' | 'Dark Pit'

    | 'Donbe' | 'Hikari'

    | 'Mega Man'

    | 'Ayumi Tachibana'

    | 'Marth' | 'Ike' | 'Lucina' | 'Robin'

    | 'Captain Falcon'

    | 'Sonic'

    | 'Kirby' | 'King Dedede' | 'Meta Knight'

    | 'Fox McCloud' | 'Falco Lombardi' | 'Slippy Toad' | 'Peppy Hare'
    | 'Arwing'

    | 'Ness' | 'Lucas'
    | 'Master Belch' | 'Mr. Saturn'

    | 'Pikachu'
    | 'Bulbasaur'
    | 'Charmander' | 'Charizard'
    | 'Squirtle'
    | 'Jigglypuff'
    | 'Mewtwo'
    | 'Lucario'
    | 'Greninja'

    | 'Villager'
    | 'Tom Nook'
    | 'K.K. Slider'
    | 'Resetti'
    | 'Rover'
    | 'Timmy & Tommy'
    | 'Blathers'
    | 'Mabel'
    | 'Kapp’n'
    | 'Celeste'
    | 'Kicks'
    | 'Isabelle (Summer Outfit)' | 'Isabelle (Winter Outfit)'
    | 'Digby'
    | 'Cyrus'
    | 'Reese'
    | 'Lottie'

    | 'Captain Olimar' | 'Pikmin'

    | 'Chibi-Robo'

    | 'Wii Balance Board' | 'Wii Fit Trainer'

    | 'Shulk'

    | 'Felyne'

    | 'Yu Ayasaki'

    | 'Dr. Kawashima'

    | 'Dr. Lobe'

    | 'Barbara the Bat'

    | 'Starfy'

    | 'Mallo'

    | 'Nikki'
    | 'Iris Archwell'
    | 'Arcade bunny'

    | 'Chitoge Kirisaki'

    | `Inkling ${'Squid' | 'Boy' | 'Girl'}`
    | 'Callie' | 'Marie'

    | 'R.O.B.' | 'Diskun' | 'Mahjong Tile'

    | 'Kitty White' | 'Melody'
    | 'Shaun the Sheep'

    | 'Arino KACHO' | 'SUPER MARIO KUN' | 'Necky' | 'GLA' | 'BABYMETAL'

//endregion -------------------- English name --------------------
