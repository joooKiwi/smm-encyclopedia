import type {ActivatableElement} from './ActivatableElement';

//TODO change to ActivatableImageProperty and change the .tsx to a .ts
export interface ActivatableImageElement
    extends ActivatableElement {

    source: string

    name: string

}
