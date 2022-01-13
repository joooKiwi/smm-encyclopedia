import type {BooleanProperty, PossibleBoolean} from '../Property';
import type {ValueOrCallbackValue}             from '../../../util/holder/ObjectHolder';

import {PropertyContainer} from '../Property.container';

export class BooleanPropertyContainer<B extends PossibleBoolean = PossibleBoolean, >
    extends PropertyContainer<B>
    implements BooleanProperty<B> {

    public constructor(value: ValueOrCallbackValue<B>,) {
        super(value,);
    }

}
