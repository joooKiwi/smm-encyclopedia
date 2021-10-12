import type {BooleanProperty, PossibleBoolean, PossibleValueReceived} from './Property';

import {PropertyContainer} from './PropertyContainer';

export class BooleanPropertyContainer<B extends PossibleBoolean = PossibleBoolean, >
    extends PropertyContainer<B>
    implements BooleanProperty<B> {

    public constructor(value: PossibleValueReceived<B>,) {
        super(value,);
    }

}
