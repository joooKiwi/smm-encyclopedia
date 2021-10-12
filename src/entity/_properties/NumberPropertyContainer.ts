import type {NumberProperty, PossibleNumber} from './Property';
import type {ValueOrCallbackValue}           from '../../util/holder/ObjectHolder';

import {PropertyContainer} from './PropertyContainer';

export class NumberPropertyContainer<N extends PossibleNumber = PossibleNumber, >
    extends PropertyContainer<N>
    implements NumberProperty<N> {

    public constructor(value: ValueOrCallbackValue<N>,) {
        super(value,);
    }

}
