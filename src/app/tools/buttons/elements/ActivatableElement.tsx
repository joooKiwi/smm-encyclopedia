import type {ReactProperty} from '../../../../util/react/ReactProperty';

//TODO change to ActivatableProperty and change the .tsx to a .ts
export interface ActivatableElement
    extends ReactProperty {

    isActive: boolean

}
