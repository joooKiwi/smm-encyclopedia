import type {NumberProperty, PossibleNumber, PossibleValueReceived} from './Property';

import {PropertyContainer} from './PropertyContainer';

export class NumberPropertyContainer<N extends PossibleNumber = PossibleNumber, >
    extends PropertyContainer<N>
    implements NumberProperty<N> {

    public constructor(value: PossibleValueReceived<N>,) {
        super(value,);
    }

}
