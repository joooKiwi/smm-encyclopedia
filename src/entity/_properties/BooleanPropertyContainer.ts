import type {BooleanProperty, PossibleBoolean} from './BooleanProperty';

import {PropertyContainer} from './PropertyContainer';

export class BooleanPropertyContainer<B extends PossibleBoolean = PossibleBoolean, >
    extends PropertyContainer<B>
    implements BooleanProperty<B> {

    public constructor(value: B,) {
        super(value);
    }

}
