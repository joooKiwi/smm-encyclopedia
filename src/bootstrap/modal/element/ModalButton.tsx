import type {ReactProperties}      from 'util/react/ReactProperties'
import type {HTMLButtonProperties} from 'util/react/html/HTMLButtonProperties'

interface ModalButtonProperties
    extends ReactProperties, Omit<HTMLButtonProperties, 'type'> {

    elementToShow: string

}

/**
 * A simple button made to trigger a {@link bootstrap.Modal} from a Javascript standpoint
 *
 * @reactComponent
 * @param properties
 * @see https://getbootstrap.com/docs/5.2/components/modal
 */
export default function ModalButton({elementToShow, ...otherProperties}: ModalButtonProperties,) {
    return <button {...otherProperties} type="button" data-bs-toggle="modal" data-bs-target={`#${elementToShow}`}/>
}
