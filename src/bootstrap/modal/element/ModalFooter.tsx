import type {ReactProperty}        from '../../../util/react/ReactProperty';
import type {HTMLButtonProperties} from '../../../util/react/html/HTMLButtonProperties';
import type {HTMLDivProperties}    from '../../../util/react/html/HTMLDivProperties';

import ContentTranslationComponent from '../../../lang/components/ContentTranslationComponent';
import {EMPTY_OBJECT}              from '../../../util/emptyVariables';
import {EMPTY_REACT_ELEMENT}       from '../../../util/emptyReactVariables';

interface ModalFooterProperties
    extends ReactProperty, HTMLDivProperties {

    successButton?: Omit<HTMLButtonProperties, 'type'>

    cancelButton?: Omit<HTMLButtonProperties, 'type'>

}

/**
 *
 * @reactComponent
 */
export default function ModalFooter({className, successButton: successButtonProperties,
                                        cancelButton: {className: cancelButtonClassName, ...otherCancelButtonProperties} = EMPTY_OBJECT,
                                        ...otherProperties}: ModalFooterProperties,) {
    return <div {...otherProperties} className={`${className ?? ''} modal-footer`}>
        {createSuccessButton(successButtonProperties)}
        <ContentTranslationComponent>{translation =>
            <button {...otherCancelButtonProperties} type="button" className={`btn btn-danger ${cancelButtonClassName}`} data-bs-dismiss="modal">{translation('Cancel')}</button>
        }</ContentTranslationComponent>
    </div>;
}

function createSuccessButton(properties?: Omit<HTMLButtonProperties, 'type'>,) {
    if (properties == null)
        return EMPTY_REACT_ELEMENT;

    const {className: successClassName, ...otherSuccessProperties} = properties;
    return <button {...otherSuccessProperties} type="button" className={`btn btn-success ${successClassName ?? ''}`}/>;
}
