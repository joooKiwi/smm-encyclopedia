import type {HTMLDivProperties}                                              from '../../../util/react/html/HTMLDivProperties';
import type {ReactElement, ReactProperty, ReactPropertyWithOptionalChildren} from '../../../util/react/ReactProperty';
import {EMPTY_OBJECT}                                                        from '../../../util/emptyVariables';

export type PossibleModalSize = | 'sm' | 'md' | 'lg' | 'xl';

interface ModalContainerProperties
    extends ReactProperty, Omit<HTMLDivProperties, 'key'> {

    id: string

    verticallyCentered?: boolean

    modalSize?: PossibleModalSize

    modalDialogProperties?: Omit<HTMLDivProperties, 'key'>

    modalContentProperties?: HTMLDivProperties

}

const DEFAULT_VERTICALLY_CENTERED = false;
const DEFAULT_SIZE: PossibleModalSize = 'md';

/**
 *
 * @reactComponent
 * @param properties
 */
export default function ModalContainer({id, className, title, children, verticallyCentered = DEFAULT_VERTICALLY_CENTERED, modalSize = DEFAULT_SIZE,
                                           modalDialogProperties: {className: modalDialogClassName, ...otherModalDialogProperties} = EMPTY_OBJECT,
                                           modalContentProperties: {className: modalContentClassName, ...otherModalContentProperties} = EMPTY_OBJECT,
                                           ...otherProperties}: ReactPropertyWithOptionalChildren<ModalContainerProperties, | ReactElement | readonly ReactElement[]>,) {
    return <div  {...otherProperties} key={`${id} - modal`} className={`modal fade ${className}`} id={id}>
        <div {...otherModalDialogProperties} key={`${id} - modal dialog`} className={`modal-dialog ${verticallyCentered ? 'modal-dialog-centered' : ''} ${modalSize !== DEFAULT_SIZE ? `modal-${modalSize}` : ''} ${modalDialogClassName}`}>
            <div {...otherModalContentProperties} className={`modal-content ${modalContentClassName}`}>{children}</div>
        </div>
    </div>;
}
