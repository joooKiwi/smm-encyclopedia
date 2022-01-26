import {ReactElement} from '../util/react/ReactProperty';

export interface ModalProperties {

    id: string

}

export interface ModalPropertiesWithDiv
    extends ModalProperties {

    divId: string

}

export interface ModalPropertiesWithContent
    extends ModalProperties {

    content: ReactElement

}
