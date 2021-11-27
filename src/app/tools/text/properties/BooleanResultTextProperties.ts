import type {BooleanTextProperties} from './BooleanTextProperties';
import type {ReactProperty}         from '../../../../util/react/ReactProperty';

export interface BooleanResultTextProperties
    extends ReactProperty, Omit<BooleanTextProperties, `${boolean}`> {

    true: BooleanValue

    false: BooleanValue

}

export type TextColor = `text-${string}`;
export type BooleanValue = string | [value: string, color: TextColor,];
