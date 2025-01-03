import type {ReactProperties}      from 'util/react/ReactProperties'
import type {HTMLButtonProperties} from 'util/react/html/HTMLButtonProperties'

import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'

interface ModalButtonProperties
    extends ReactProperties, Omit<HTMLButtonProperties, | 'type' | 'onClick'> {

    readonly ref: ReactReference<HTMLButtonElement>

    readonly elementToShow: | string | HTMLElement

    readonly elementToHide?: | string | HTMLElement

}

const instanceHandler = BootstrapInstanceHandler.get

/**
 * A button made to trigger a {@link bootstrap.Modal} from a Javascript standpoint
 *
 * @reactComponent
 * @param properties
 * @see https://getbootstrap.com/docs/5.3/components/modal
 */
export default function ModalButton({ref, elementToShow, elementToHide, ...otherProperties}: ModalButtonProperties,) {
    return <button ref={ref} {...otherProperties} type="button" onClick={() => {
        instanceHandler.getModalInstanceOrNull(elementToShow,)?.instance.show()
        if (elementToHide != null)
            instanceHandler.getModalInstanceOrNull(elementToHide,)?.instance.hide()
    }}/>
}
