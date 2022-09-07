import type {BooleanTextProperties} from './BooleanTextProperties';
import type {ReactProperties}       from '../../../../util/react/ReactProperties';

export interface BooleanResultTextProperties
    extends ReactProperties, Omit<BooleanTextProperties, `${boolean}`> {

    true: BooleanValue

    false: BooleanValue

}

export type TextColor = `text-${string}`;
export type BooleanValue = string | [value: string, color: TextColor,];
