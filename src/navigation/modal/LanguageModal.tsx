import {useRef} from 'react'

import Modal                       from 'bootstrap/modal/Modal'
import {contentTranslation}        from 'lang/components/translationMethods'
import LanguageChangerBody         from 'navigation/LanguageChanger.body'
import {LANGUAGE_CHANGER_MODAL_ID} from 'navigation/button/modalIds'

/** @reactComponent */
export default function LanguageModal() {
    const modal = useRef<HTMLDivElement>(null,)

    return <>
        <Modal modalReference={modal}/>
        <div ref={modal} id={LANGUAGE_CHANGER_MODAL_ID} className="modal fade">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title w-100 text-center">{contentTranslation('Change the language')}</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label={contentTranslation('Close')}/>
                    </div>
                    <div className="modal-body"><LanguageChangerBody/></div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">{contentTranslation('Cancel')}</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}
