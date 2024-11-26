import type {ReactProperties}       from 'util/react/ReactProperties'
import type {HTMLDivProperties}     from 'util/react/html/HTMLDivProperties'
import type {HTMLButtonProperties}  from 'util/react/html/HTMLButtonProperties'
import type {HTMLHeadingProperties} from 'util/react/html/HTMLHeadingProperties'

import {Empty} from 'util/emptyVariables'

import EMPTY_OBJECT = Empty.EMPTY_OBJECT
import EMPTY_STRING = Empty.EMPTY_STRING

interface ModalHeaderProperties
    extends ReactProperties, HTMLDivProperties {

    readonly modalTitle: | string | ReactElement

    readonly titleProperties?: HTMLHeadingProperties

    readonly closeButtonProperties?: Omit<HTMLButtonProperties, | 'type' | 'data-bs-dismiss' | 'aria-label'>

}

/**
 *
 * @reactComponent
 * @param properties
 */
export default function ModalHeader({className = EMPTY_STRING, modalTitle,
                                        titleProperties: {className: titleClassName = EMPTY_STRING, ...otherTitleProperties} = EMPTY_OBJECT,
                                        closeButtonProperties: {className: closeButtonClassName = EMPTY_STRING, ...otherCloseButtonProperties} = EMPTY_OBJECT,
                                        ...otherProperties}: ModalHeaderProperties,) {
    return <div {...otherProperties} className={`modal-header ${className}`}>
        <h4 {...otherTitleProperties} className={`modal-title w-100 text-center ${titleClassName}`}>{modalTitle}</h4>
        <button {...otherCloseButtonProperties} type="button" className={`btn-close ${closeButtonClassName}`} data-bs-dismiss="modal" aria-label="Close"/>
    </div>
}
