import type {ReactState} from '../util/react/ReactState';

export interface AppStates
    extends ReactState {

}

interface AppStateThatHaveACategory {

    displayCategoryAsText: boolean
}

export interface EntityAppStates
    extends AppStates, AppStateThatHaveACategory {

}

export interface SoundEffectAppStates
    extends AppStates, AppStateThatHaveACategory {

}
