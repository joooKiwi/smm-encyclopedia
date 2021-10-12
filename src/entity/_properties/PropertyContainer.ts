import {PossibleValueReceived, Property} from './Property';
import {AbstractProperty}                from './AbstractProperty';

export class PropertyContainer<T>
    extends AbstractProperty<T>
    implements Property<T> {

    public constructor(value: T,)
    public constructor(value: () => T,)
    // @ts-ignore
    protected constructor(value: PossibleValueReceived<T>,)
    public constructor(value: PossibleValueReceived<T>,) {
        super(value);
    }

}
