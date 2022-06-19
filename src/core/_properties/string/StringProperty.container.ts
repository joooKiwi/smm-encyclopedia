import type {PossibleString, StringProperty} from '../Property';
import type {PossibleValueOnObjectHolder}    from '../../../util/holder/ObjectHolder';

import {PropertyContainer} from '../Property.container';

export class StringPropertyContainer<S extends PossibleString = PossibleString, >
    extends PropertyContainer<S>
    implements StringProperty<S> {

    public constructor(value: PossibleValueOnObjectHolder<S>,) {
        super(value,);
    }

}
