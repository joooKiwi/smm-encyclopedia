import type {ReactState}   from '../util/react/ReactState'
import type {ViewDisplays} from './withInterpreter/ViewDisplays'

export interface AppStates
    extends ReactState {

}

export interface AppWithVariableDisplayStates
    extends AppStates {

    typeDisplayed: ViewDisplays

}

//region -------------------- Single states group --------------------

/**@deprecated The global app state should be changed to route arguments instead*/
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

//endregion -------------------- Single states group --------------------
//region -------------------- Specific states --------------------

export interface EntityAppStates
    extends AppWithVariableDisplayStates {
}

export interface EntityLimitAppStates
    extends AppWithVariableDisplayStates {
}

export interface ThemeAppStates
    extends AppWithVariableDisplayStates {
}

export interface GameStyleAppStates
    extends AppWithVariableDisplayStates {
}

export interface SoundEffectAppStates
    extends AppWithVariableDisplayStates {
}

export interface MiiCostumeAppStates
    extends AppWithVariableDisplayStates {
}

export interface MysteryMushroomAppStates
    extends AppWithVariableDisplayStates {
}

export interface InstrumentAppStates
    extends AppWithVariableDisplayStates {
}

//endregion -------------------- Specific states --------------------
