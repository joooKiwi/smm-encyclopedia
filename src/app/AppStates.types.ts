import type {ReactState} from '../util/react/ReactState';

export interface AppStates
    extends ReactState {

}

//region -------------------- Single states group --------------------

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
    extends AppStates, AppStateThatHaveAnimatedImages, AppStateThatHaveACategory {

    display: {
        imageAnimations: PossibleImageAnimation
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

export interface MysteryMushroomAppStates
    extends AppStates, AppStateThatHaveAnimatedImages {

}
