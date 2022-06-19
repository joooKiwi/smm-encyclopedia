import type {ReactProperty}        from '../../../util/react/ReactProperty';
import type {HTMLButtonProperties} from '../../../util/react/html/HTMLButtonProperties';

import {ModalInstance} from '../ModalInstance';

interface ModalButtonProperties
    extends ReactProperty, Omit<HTMLButtonProperties, | 'type' | 'onClick'> {

    elementToShow: string

}

/**
 *
 * @reactComponent
 * @param properties
 */
export default function ModalButton({elementToShow, ...otherProperties}: ModalButtonProperties,) {
    return <button {...otherProperties} type="button" onClick={() => ModalInstance.getInstance(elementToShow).instance.show()}/>;
}
