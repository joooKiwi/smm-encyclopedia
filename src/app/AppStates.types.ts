import type {ReactState} from '../util/react/ReactState';

export interface AppStates
    extends ReactState {

}

interface AppStateThatHaveACategory {

    display: {
        asText: {
            category: boolean
        }
    }

}

export interface EntityAppStates
    extends AppStates, AppStateThatHaveACategory {

    display: {
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
    }

}

export interface SoundEffectAppStates
    extends AppStates, AppStateThatHaveACategory {

}
