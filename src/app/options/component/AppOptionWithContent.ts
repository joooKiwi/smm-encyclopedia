import type {ReactElement} from '../../../util/react/ReactProperties';

export interface AppOptionWithContent {

    get renderContent(): readonly ReactElement[]

}

export type PossibleRenderReactElement = | ReactElement | readonly ReactElement[];
