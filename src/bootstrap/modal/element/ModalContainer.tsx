import type {NullOr}           from '@joookiwi/type'
import type {MutableRefObject} from 'react'

import type {PossibleModalSize}                                    from 'bootstrap/modal/ModalInstance.declaration'
import type {HTMLDivProperties}                                    from 'util/react/html/HTMLDivProperties'
import type {ReactProperties, ReactPropertiesWithOptionalChildren} from 'util/react/ReactProperties'

import {Empty} from 'util/emptyVariables'

import EMPTY_OBJECT = Empty.EMPTY_OBJECT
import EMPTY_STRING = Empty.EMPTY_STRING

interface ModalContainerProperties
    extends ReactProperties, Omit<HTMLDivProperties, 'key'> {

    /** The reference to associate on the div having the {@link id} received */
    readonly modalReference: MutableRefObject<NullOr<HTMLDivElement>>

    readonly id: string

    readonly verticallyCentered?: boolean

    readonly modalSize?: PossibleModalSize

    readonly modalDialogProperties?: Omit<HTMLDivProperties, 'key'>

    readonly modalContentProperties?: HTMLDivProperties

}

const DEFAULT_VERTICALLY_CENTERED = false
const DEFAULT_SIZE = 'md' satisfies PossibleModalSize

/**
 *
 * @reactComponent
 * @param properties
 */
export default function ModalContainer({modalReference, id, className = EMPTY_STRING, title, children, verticallyCentered = DEFAULT_VERTICALLY_CENTERED, modalSize = DEFAULT_SIZE,
                                           modalDialogProperties: {className: modalDialogClassName = EMPTY_STRING, ...otherModalDialogProperties} = EMPTY_OBJECT,
                                           modalContentProperties: {className: modalContentClassName = EMPTY_STRING, ...otherModalContentProperties} = EMPTY_OBJECT,
                                           ...otherProperties}: ReactPropertiesWithOptionalChildren<ModalContainerProperties, ReactElementOrArray>,) {
    return <div ref={modalReference} {...otherProperties} key={`${id} - modal`} id={id} className={`modal fade ${className}`}>
        <div {...otherModalDialogProperties} key={`${id} - modal dialog`} className={`modal-dialog ${verticallyCentered ? 'modal-dialog-centered' : EMPTY_STRING} ${modalSize !== DEFAULT_SIZE ? `modal-${modalSize}` : EMPTY_STRING} ${modalDialogClassName}`}>
            <div {...otherModalContentProperties} className={`modal-content ${modalContentClassName}`}>{children}</div>
        </div>
    </div>
}
