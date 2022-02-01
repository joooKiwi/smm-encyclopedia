import type {ReactState}   from '../util/react/ReactState';
import {GlobalThemeOption} from './options/GlobalThemeOption';

export interface AppStates
    extends ReactState {

}

//region -------------------- Single states group --------------------

export interface GlobalAppState
    extends ReactState {

    images: PossibleImageAnimation
    sounds: boolean

    game: {
        1: boolean
        2: boolean
    }

    gameStyle: {
        SMB: boolean
        SMB3: boolean
        SMW: boolean
        NSMBU: boolean
        SM3DW: boolean
    }

    theme: {
        ground: GlobalThemeOption
        underground: GlobalThemeOption
        underwater: GlobalThemeOption
        desert: GlobalThemeOption
        snow: GlobalThemeOption
        sky: GlobalThemeOption
        forest: GlobalThemeOption
        ghostHouse: GlobalThemeOption
        airship: GlobalThemeOption
        castle: GlobalThemeOption
    }

    time: {
        day: boolean
        night: boolean
    }

}

interface AppStateThatHaveACategory {

    display: {
        asText: {
            category: boolean
        }
    }

}

interface AppStateThatHaveAnimatedImages {

    display: {
        imageAnimations: PossibleImageAnimation
    }

}

export type PossibleImageAnimation = | boolean | 'separated';

//endregion -------------------- Single states group --------------------

export interface EntityAppStates
    extends AppStates, AppStateThatHaveACategory {

    display: {
        section: {
            name: boolean
            game: boolean
            gameStyle: boolean
            courseTheme: boolean
            time: boolean
            category: boolean
            limit: boolean
            images: boolean
        }
        asText: {
            category: boolean
            whenAll: {
                game: boolean
                gameStyle: boolean
                courseTheme: boolean
                time: boolean
            }
            ifApplicable: {
                acronymOnLimits: boolean
            }
        }
        images: {
            editor: boolean
            clearCondition: boolean
            whilePlaying: boolean
            unused: boolean
        }
    }

}

export interface SoundEffectAppStates
    extends AppStates, AppStateThatHaveACategory {

}

export interface MiiCostumeAppStates
    extends AppStates, AppStateThatHaveACategory {

    display: {
        section: {
            image: boolean
            name: boolean
            conditionToUnlockIt: boolean
            category: boolean
        }
        asText: {
            category: boolean
        }
    }

}

export interface MysteryMushroomAppStates
    extends AppStates, AppStateThatHaveAnimatedImages {

}
