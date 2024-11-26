import type {ReactProperties, ReactPropertiesWithChildren} from 'util/react/ReactProperties'
import type {HTMLDivProperties}                            from 'util/react/html/HTMLDivProperties'

import {Empty} from 'util/emptyVariables'

import EMPTY_STRING = Empty.EMPTY_STRING

interface ModalBodyProperties
    extends ReactProperties, HTMLDivProperties {}

export default function ModalBody({className = EMPTY_STRING, children, ...otherProperties}: ReactPropertiesWithChildren<ModalBodyProperties, ReactElementOrArray>,) {
    return <div {...otherProperties} className={`modal-body ${className}`}>{children}</div>
}
