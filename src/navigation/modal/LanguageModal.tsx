import {Dispatch, SetStateAction, useRef, useState} from 'react'

import Modal                       from 'bootstrap/modal/Modal'
import {contentTranslation}        from 'lang/components/translationMethods'
import {LANGUAGE_CHANGER_MODAL_ID} from 'navigation/button/modalIds'
import {ProjectLanguages}          from 'lang/ProjectLanguages'
import {LanguageChangerSingleLink} from 'navigation/modal/LanguageChanger.single.link'
import {BootstrapInstanceHandler}  from 'bootstrap/BootstrapInstanceHandler'

import Companion = ProjectLanguages.Companion

/** @reactComponent */
export default function LanguageModal() {
    const modal = useRef<HTMLDivElement>(null,)
    const [, setCurrentLanguage,] = useState(ProjectLanguages.current,)
    const callbackToSetLanguage = (it: ProjectLanguages,) => setLanguage(it, setCurrentLanguage,)

    return <>
        <Modal modalReference={modal}/>
        <div ref={modal} id={LANGUAGE_CHANGER_MODAL_ID} className="modal fade">
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title w-100 text-center">{contentTranslation('Change the language',)}</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label={contentTranslation('Close',)}/>
                    </div>
                    <div className="modal-body">
                        <div id="languageChanger-body" className="container d-flex flex-wrap justify-content-between justify-content-xl-evenly">
                            <div id="double-languageChanger-english" className="languageChanger-link-container btn-group btn-group-lg col-12 col-xl-5 my-2" role="group">
                                <LanguageChangerSingleLink language={ProjectLanguages.AMERICAN_ENGLISH} callbackToSetLanguage={callbackToSetLanguage}/>
                                {/*TODO Separate the american into 2 groups (canadian and united state)*/}
                                <LanguageChangerSingleLink language={ProjectLanguages.EUROPEAN_ENGLISH} callbackToSetLanguage={callbackToSetLanguage}/>
                            </div>
                            <div id="double-languageChanger-french" className="languageChanger-link-container btn-group btn-group-lg col-12 col-xl-5 my-2" role="group">
                                <LanguageChangerSingleLink language={ProjectLanguages.CANADIAN_FRENCH} callbackToSetLanguage={callbackToSetLanguage}/>
                                <LanguageChangerSingleLink language={ProjectLanguages.EUROPEAN_FRENCH} callbackToSetLanguage={callbackToSetLanguage}/>
                            </div>
                            <div id="single-languageChanger-german" className="languageChanger-link-container col-12 col-lg-5 col-xxl-3 mx-auto mx-xl-0 my-2">
                                <LanguageChangerSingleLink language={ProjectLanguages.GERMAN} callbackToSetLanguage={callbackToSetLanguage}/>
                            </div>
                            <div id="double-languageChanger-spanish" className="languageChanger-link-container btn-group btn-group-lg col-12 col-xl-5 my-2" role="group">
                                <LanguageChangerSingleLink language={ProjectLanguages.AMERICAN_SPANISH} callbackToSetLanguage={callbackToSetLanguage}/>
                                <LanguageChangerSingleLink language={ProjectLanguages.EUROPEAN_SPANISH} callbackToSetLanguage={callbackToSetLanguage}/>
                            </div>
                            <div id="single-languageChanger-italian" className="languageChanger-link-container col-12 col-sm-5 col-xxl-3 my-2">
                                <LanguageChangerSingleLink language={ProjectLanguages.ITALIAN} callbackToSetLanguage={callbackToSetLanguage}/>
                            </div>
                            <div id="single-languageChanger-dutch" className="languageChanger-link-container col-12 col-sm-5 col-xxl-3 my-2">
                                <LanguageChangerSingleLink language={ProjectLanguages.DUTCH} callbackToSetLanguage={callbackToSetLanguage}/>
                            </div>
                            <div id="double-languageChanger-portuguese" className="languageChanger-link-container btn-group btn-group-lg col-12 col-xl-5 my-2" role="group">
                                <LanguageChangerSingleLink language={ProjectLanguages.AMERICAN_PORTUGUESE} callbackToSetLanguage={callbackToSetLanguage}/>
                                <LanguageChangerSingleLink language={ProjectLanguages.EUROPEAN_PORTUGUESE} callbackToSetLanguage={callbackToSetLanguage}/>
                            </div>
                            <div id="single-languageChanger-russian" className="languageChanger-link-container col-12 col-sm-5 col-xxl-3 my-2">
                                <LanguageChangerSingleLink language={ProjectLanguages.RUSSIAN} callbackToSetLanguage={callbackToSetLanguage}/>
                            </div>
                            <div id="single-languageChanger-japanese" className="languageChanger-link-container col-12 col-sm-5 col-xxl-3 my-2">
                                <LanguageChangerSingleLink language={ProjectLanguages.JAPANESE} callbackToSetLanguage={callbackToSetLanguage}/>
                            </div>
                            <div id="double-languageChanger-chinese" className="languageChanger-link-container btn-group btn-group-lg col-12 col-xl-5 my-2" role="group">
                                <LanguageChangerSingleLink language={ProjectLanguages.TRADITIONAL_CHINESE} callbackToSetLanguage={callbackToSetLanguage}/>
                                <LanguageChangerSingleLink language={ProjectLanguages.SIMPLIFIED_CHINESE} callbackToSetLanguage={callbackToSetLanguage}/>
                            </div>
                            <div id="single-languageChanger-korean" className="languageChanger-link-container col-12 col-lg-5 col-xxl-3 mx-auto mx-xxl-0 my-2">
                                <LanguageChangerSingleLink language={ProjectLanguages.KOREAN} callbackToSetLanguage={callbackToSetLanguage}/>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">{contentTranslation('Cancel',)}</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

function setLanguage(language:ProjectLanguages, setCurrentLanguage: Dispatch<SetStateAction<ProjectLanguages>>,){
    setCurrentLanguage(Companion.current = language,)
    BootstrapInstanceHandler.get.getModalInstanceOrNull(LANGUAGE_CHANGER_MODAL_ID,)?.instance.hide()
}
