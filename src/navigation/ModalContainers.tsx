import {useEffect} from 'react'

import type {ModalPropertiesWithDiv}        from 'navigation/ModalContainers.types'
import type {ReactElement, ReactProperties} from 'util/react/ReactProperties'

import ModalBody                                       from 'bootstrap/modal/element/ModalBody'
import ModalContainer                                  from 'bootstrap/modal/element/ModalContainer'
import ModalFooter                                     from 'bootstrap/modal/element/ModalFooter'
import ModalHeader                                     from 'bootstrap/modal/element/ModalHeader'
import {ModalInstance}                                 from 'bootstrap/modal/ModalInstance'
import {contentTranslation}                            from 'lang/components/translationMethods'
import DisplayViewBody                                 from 'navigation/DisplayView.body'
import LanguageChangerBody                             from 'navigation/LanguageChanger.body'
import {LANGUAGE_CHANGER_MODAL_ID, PARAMETER_MODAL_ID} from 'navigation/button/modalIds'

interface ModalContainersProperties
    extends ReactProperties {

    parameter: NonNullable<ReactElement>

    displayView: ModalPropertiesWithDiv

    search: ModalPropertiesWithDiv

}

/**
 * @param properties
 * @reactComponent
 */
export default function ModalContainers({
                                            parameter,
                                            displayView: {id: displayViewId, divId: displayViewDivId,},
                                            search: {id: searchId, divId: searchDivId,},
                                        }: ModalContainersProperties,) {
    useEffect(() => {
        new ModalInstance(LANGUAGE_CHANGER_MODAL_ID,)
        new ModalInstance(PARAMETER_MODAL_ID,)
        new ModalInstance(displayViewId,)
        new ModalInstance(searchId,)
    })

    return <aside key="modal container" id="modal-container">
        <ModalContainer key="modal - language changer (container)" id={LANGUAGE_CHANGER_MODAL_ID} verticallyCentered={true} modalSize="xl">
            <ModalHeader key="modal - language changer (header)" modalTitle={contentTranslation('Change the language')}/>
            <ModalBody key="modal - language changer (body)"><LanguageChangerBody/></ModalBody>
            <ModalFooter key="modal - language changer (footer)"/>
        </ModalContainer>

        <ModalContainer key="modal - parameter (container)" id={PARAMETER_MODAL_ID} verticallyCentered modalSize="xl">
            <ModalHeader key="modal - parameter (header)" modalTitle={contentTranslation('Options')}/>
            <ModalBody key="modal - parameter (body)">{parameter}</ModalBody>
            {/*<ModalFooter key="modal - parameter (footer)" successButton={({children: contentTranslation('Confirm'),})}/>*/}
        </ModalContainer>

        <ModalContainer key="modal - display view (container)" id={displayViewId} verticallyCentered modalSize="lg">
            <ModalHeader key="modal - display view (header)" modalTitle={`${contentTranslation('Display')}…`}/>
            <ModalBody key="modal - display view (body)">
                <DisplayViewBody id={displayViewId} divId={displayViewDivId}/>
            </ModalBody>
            <ModalFooter key="modal - display view (footer)"/>
        </ModalContainer>

        <ModalContainer key="modal - search (container)" id={searchId} verticallyCentered modalSize="lg">
        {/*    <ModalHeader key="modal - search (header)" modalTitle={`${contentTranslation('Search')}…`}/>*/}
        {/*    <ModalBody key="modal - search (body)">*/}
        {/*        <SearchBody id={searchId} divId={searchDivId}/>*/}
        {/*    </ModalBody>*/}
        {/*    <ModalFooter key="modal - search (footer)" successButton={({children: contentTranslation('Search')})}/>*/}
        </ModalContainer>
    </aside>
}
