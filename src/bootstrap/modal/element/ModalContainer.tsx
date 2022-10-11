import type {HTMLDivProperties}                                                  from '../../../util/react/html/HTMLDivProperties'
import type {ReactElement, ReactProperties, ReactPropertiesWithOptionalChildren} from '../../../util/react/ReactProperties'
import {EMPTY_OBJECT, EMPTY_STRING}                                              from '../../../util/emptyVariables'

export type PossibleModalSize = | 'sm' | 'md' | 'lg' | 'xl'

interface ModalContainerProperties
    extends ReactProperties, Omit<HTMLDivProperties, 'key'> {

    id: string

    verticallyCentered?: boolean

    modalSize?: PossibleModalSize

    modalDialogProperties?: Omit<HTMLDivProperties, 'key'>

    modalContentProperties?: HTMLDivProperties

}

const DEFAULT_VERTICALLY_CENTERED = false
const DEFAULT_SIZE: PossibleModalSize = 'md'

/**
 *
 * @reactComponent
 * @param properties
 */
export default function ModalContainer({id, className=EMPTY_STRING, title, children, verticallyCentered = DEFAULT_VERTICALLY_CENTERED, modalSize = DEFAULT_SIZE,
                                           modalDialogProperties: {className: modalDialogClassName = EMPTY_STRING, ...otherModalDialogProperties} = EMPTY_OBJECT,
                                           modalContentProperties: {className: modalContentClassName = EMPTY_STRING, ...otherModalContentProperties} = EMPTY_OBJECT,
                                           ...otherProperties}: ReactPropertiesWithOptionalChildren<ModalContainerProperties, | ReactElement | readonly ReactElement[]>,) {
    return <div  {...otherProperties} key={`${id} - modal`} className={`modal fade ${className}`} id={id}>
        <div {...otherModalDialogProperties} key={`${id} - modal dialog`} className={`modal-dialog ${verticallyCentered ? 'modal-dialog-centered' : ''} ${modalSize !== DEFAULT_SIZE ? `modal-${modalSize}` : ''} ${modalDialogClassName}`}>
            <div {...otherModalContentProperties} className={`modal-content ${modalContentClassName}`}>{children}</div>
        </div>
    </div>
}
