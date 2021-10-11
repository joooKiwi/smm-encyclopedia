import type {PropertyWithNoValues} from './PropertyWithNoValues';

export interface Property<T>
    extends PropertyWithNoValues {

    get value(): T

}
