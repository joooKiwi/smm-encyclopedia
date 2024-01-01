import type {ReactProperties} from 'util/react/ReactProperties'

import LanguageModal    from 'navigation/modal/LanguageModal'
import DisplayViewModal from 'navigation/modal/DisplayViewModal'
import ParameterModal   from 'navigation/modal/ParameterModal'
import SearchModal      from 'navigation/modal/SearchModal'
import ColorModal       from 'navigation/modal/ColorModal'

interface ModalContainersProperties
    extends ReactProperties {

    parameter: NonNullable<ReactElement>

}

/** @reactComponent */
export default function ModalContainers({parameter,}: ModalContainersProperties,) {
    return <aside key="modal container" id="modal-container">
        <LanguageModal/>
        <ParameterModal reference={parameter}/>
        <DisplayViewModal/>
        <SearchModal/>
        <ColorModal/>
    </aside>
}
