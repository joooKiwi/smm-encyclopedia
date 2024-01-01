import {useRef} from 'react'

import Modal                   from 'bootstrap/modal/Modal'
import {contentTranslation}    from 'lang/components/translationMethods'
import DisplayViewBody         from 'navigation/DisplayView.body'
import {DISPLAY_VIEW_MODAL_ID} from 'navigation/button/modalIds'
import {SUSPENSION_POINT}      from 'util/commonVariables'

/**
 * @reactComponent
 */
export default function DisplayViewModal() {
    const modal = useRef<HTMLDivElement>(null,)

    return <>
        <Modal modalReference={modal}/>
        <div ref={modal} id={DISPLAY_VIEW_MODAL_ID} className="modal fade">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title w-100 text-center">{contentTranslation('Display')}{SUSPENSION_POINT}</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label={contentTranslation('Close')}/>
                    </div>
                    <div className="modal-body"><DisplayViewBody/></div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">{contentTranslation('Cancel')}</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}
