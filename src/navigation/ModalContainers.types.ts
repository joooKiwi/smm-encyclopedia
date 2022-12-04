import {ReactElement, ReactProperties} from 'util/react/ReactProperties'

export interface ModalProperties
    extends ReactProperties {

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
