import type {Property}             from './Property';
import type {ValueOrCallbackValue} from '../../util/holder/ObjectHolder';

import {AbstractProperty} from './AbstractProperty';

export class PropertyContainer<T>
    extends AbstractProperty<T>
    implements Property<T> {

    public constructor(value: ValueOrCallbackValue<T>,) {
        super(value);
    }

}
