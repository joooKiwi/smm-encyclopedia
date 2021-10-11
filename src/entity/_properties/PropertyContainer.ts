import {Property}         from './Property';
import {AbstractProperty} from './AbstractProperty';

export class PropertyContainer<T>
    extends AbstractProperty<T>
    implements Property<T> {

    public constructor(value: T,) {
        super(value);
    }

}
