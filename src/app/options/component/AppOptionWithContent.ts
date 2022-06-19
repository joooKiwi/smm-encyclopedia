import type {ReactElement} from '../../../util/react/ReactProperty';

export interface AppOptionWithContent {

    get renderContent(): readonly ReactElement[]

}

export type PossibleRenderReactElement = | ReactElement | readonly ReactElement[];
