import type {BooleanProperty, PossibleBoolean} from '../Property';
import type {PossibleValueOnObjectHolder}      from '../../../util/holder/ObjectHolder';

import {PropertyContainer} from '../Property.container';

export class BooleanPropertyContainer<B extends PossibleBoolean = PossibleBoolean, >
    extends PropertyContainer<B>
    implements BooleanProperty<B> {

    public constructor(value: PossibleValueOnObjectHolder<B>,) {
        super(value,);
    }

}
