import {ActivatableElement} from "./ActivatableElement";

export interface ActivatableImageElement
    extends ActivatableElement {
    source: string
    name: string
}