import type {SingleLimitProperty} from './SingleLimitProperty';

export interface SingleLimitThatCanBeUnknownProperty<T>
    extends SingleLimitProperty<| T | null> {

    get isUnknown(): boolean

}
