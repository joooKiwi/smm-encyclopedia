import type {ReactPropertiesWithChildren} from 'util/react/ReactProperties'
import type {HTMLDivProperties}           from 'util/react/html/HTMLDivProperties'

import {Empty} from 'util/emptyVariables'

import EMPTY_STRING = Empty.EMPTY_STRING

interface ModalBodyProperties
    extends ReactPropertiesWithChildren<NonNullReactElementOrArray>,
        HTMLDivProperties {

    readonly children: NonNullReactElementOrArray

}

export default function ModalBody({className = EMPTY_STRING, children, ...otherProperties}: ModalBodyProperties,) {
    return <div {...otherProperties} className={`modal-body ${className}`}>{children}</div>
}
