import type {ReactNode} from 'react'

import type {ReactProperties}      from 'util/react/ReactProperties'
import type {HTMLButtonProperties} from 'util/react/html/HTMLButtonProperties'
import type {HTMLDivProperties}    from 'util/react/html/HTMLDivProperties'

import {contentTranslation}         from 'lang/components/translationMethods'
import {EMPTY_OBJECT, EMPTY_STRING} from 'util/emptyVariables'
import {EMPTY_REACT_ELEMENT}        from 'util/emptyReactVariables'

interface ModalFooterProperties
    extends ReactProperties, HTMLDivProperties {

    successButton?: ModalSuccessButtonProperties

    cancelButton?: ModalCancelButtonProperties

}

interface ModalSuccessButtonProperties
    extends ReactProperties, Omit<HTMLButtonProperties, 'type'> {

    children: ReactNode

}

interface ModalCancelButtonProperties
    extends ReactProperties, Omit<HTMLButtonProperties, 'type'> {

}

/**
 *
 * @reactComponent
 */
export default function ModalFooter({className = EMPTY_STRING, successButton: successButtonProperties, cancelButton: cancelButtonProperties, ...otherProperties}: ModalFooterProperties,) {
    return <div {...otherProperties} className={`${className} modal-footer`}>
        {createSuccessButton(successButtonProperties)}
        {createCancelButton(cancelButtonProperties)}
    </div>
}

function createSuccessButton(properties?: ModalSuccessButtonProperties,) {
    if (properties == null)
        return EMPTY_REACT_ELEMENT

    const {children, className = EMPTY_STRING, ...otherProperties} = properties
    return <button {...otherProperties} type="button" className={`btn btn-success ${className}`}>{children}</button>
}

function createCancelButton(properties: ModalCancelButtonProperties = EMPTY_OBJECT,) {
    const {children, className = EMPTY_STRING, ...otherProperties} = properties

    if (children != null)
        return <button {...otherProperties} type="button" className={`btn btn-danger ${className}`} data-bs-dismiss="modal">{children}</button>

    return <button {...otherProperties} type="button" className={`btn btn-danger ${className}`} data-bs-dismiss="modal">{contentTranslation('Cancel')}</button>
}
