import type {ImageAnimations}   from './options/global/ImageAnimations';
import type {Images}            from './options/global/Images';
import type {GlobalThemeOption} from './options/global/GlobalThemeOption';
import type {ReactState}        from '../util/react/ReactState';
import type {Sounds}            from './options/global/Sounds';
import type {Texts}             from './options/global/Texts';
import type {ViewDisplays}      from './withInterpreter/ViewDisplays';

export interface AppStates
    extends ReactState {

}

export interface AppWithVariableDisplayStates
    extends AppStates {

    typeDisplayed: ViewDisplays

}

//region -------------------- Single states group --------------------

export interface GlobalAppState
    extends ReactState {

    // images: Images
    // imageAnimations: ImageAnimations
    // sounds: Sounds
    // texts: Texts
    //
    // game: {
    //     1: boolean
    //     '3DS': boolean
    //     2: boolean
    // }
    //
    // gameStyle: {
    //     SMB: boolean
    //     SMB3: boolean
    //     SMW: boolean
    //     NSMBU: boolean
    //     SM3DW: boolean
    // }
    //
    // theme: {
    //     ground: GlobalThemeOption
    //     underground: GlobalThemeOption
    //     underwater: GlobalThemeOption
    //     desert: GlobalThemeOption
    //     snow: GlobalThemeOption
    //     sky: GlobalThemeOption
    //     forest: GlobalThemeOption
    //     ghostHouse: GlobalThemeOption
    //     airship: GlobalThemeOption
    //     castle: GlobalThemeOption
    // }
    //
    // time: {
    //     day: boolean
    //     night: boolean
    // }

}

interface AppStateThatHaveACategory {

    display: {
        asText: {
            category: boolean
        }
    }

}

//endregion -------------------- Single states group --------------------
//region -------------------- Specific states --------------------

export interface EntityAppStates
    extends AppStates, AppWithVariableDisplayStates/*, AppStateThatHaveACategory*/ {

    // display: {
    //     section: {
    //         name: boolean
    //         game: boolean
    //         gameStyle: boolean
    //         courseTheme: boolean
    //         time: boolean
    //         category: boolean
    //         limit: boolean
    //         images: boolean
    //     }
    //     asText: {
    //         category: boolean
    //         whenAll: {
    //             game: boolean
    //             gameStyle: boolean
    //             courseTheme: boolean
    //             time: boolean
    //         }
    //         ifApplicable: {
    //             acronymOnLimits: boolean
    //         }
    //     }
    //     images: {
    //         editor: boolean
    //         clearCondition: boolean
    //         whilePlaying: boolean
    //         unused: boolean
    //     }
    // }

}

export interface ThemeAppStates
    extends AppStates, AppWithVariableDisplayStates {

}

export interface GameStyleAppStates
    extends AppStates {

    // display: {
    //     section: {
    //         image: boolean
    //         name: boolean
    //         game: boolean
    //         nightDesertWind: boolean
    //     }
    // }

}

export interface SoundEffectAppStates
    extends AppStates, AppStateThatHaveACategory {

}

export interface MiiCostumeAppStates
    extends AppStates, AppWithVariableDisplayStates/*, AppStateThatHaveACategory*/ {

    // display: {
    //     section: {
    //         image: boolean
    //         name: boolean
    //         conditionToUnlockIt: boolean
    //         category: boolean
    //     }
    //     asText: {
    //         category: boolean
    //     }
    // }

}

export interface MysteryMushroomAppStates
    extends AppStates {

}

//endregion -------------------- Specific states --------------------
