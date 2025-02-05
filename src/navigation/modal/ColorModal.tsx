import type {Dispatch, SetStateAction} from 'react'
import {useRef, useState}              from 'react'

import {BootstrapInstanceHandler} from 'bootstrap/BootstrapInstanceHandler'
import Modal                      from 'bootstrap/modal/Modal'
import {ColorThemes}              from 'color/ColorThemes'
import {contentTranslation}       from 'lang/components/translationMethods'
import ColorToLanguageButton      from 'navigation/button/ColorToLanguage.button'
import {COLOR_MODAL_ID}           from 'navigation/button/modalIds'
import ColorModeChangerSingleLink from 'navigation/modal/ColorModeChanger.single.link'

import Companion = ColorThemes.Companion
import ColorToParameterButton     from 'navigation/button/ColorToParameter.button.tsx'

/** @reactComponent */
export default function ColorModal() {
    const modal = useRef<HTMLDivElement>(null,)
    const [, setCurrentColorMode,] = useState(Companion.current,)
    const callbackToSetLanguage:(colorTheme: ColorThemes,) => void = it => setColorTheme(it, setCurrentColorMode,)

    return <>
        <Modal modalReference={modal}/>
        <div ref={modal} id={COLOR_MODAL_ID} className="modal fade">
            <div className="modal-dialog modal-dialog-centered modal-md">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="btn-group" role="group">
                            <ColorToLanguageButton/>
                            <ColorToParameterButton/>
                        </div>
                        <h4 className="modal-title w-100 text-center">{contentTranslation('Change the color modes',)}</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label={contentTranslation('Close',)}/>
                    </div>
                    <div className="modal-body">
                        <div className="btn-group-vertical btn-group-lg" role="group">
                            <ColorModeChangerSingleLink color={ColorThemes.AUTOMATIC} changeColor={callbackToSetLanguage}/>
                            <div className="btn-group btn-group-lg" role="group">
                                <ColorModeChangerSingleLink color={ColorThemes.LIGHT} changeColor={callbackToSetLanguage}/>
                                <ColorModeChangerSingleLink color={ColorThemes.DARK} changeColor={callbackToSetLanguage}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

function setColorTheme(it: ColorThemes, setCurrentColorMode: Dispatch<SetStateAction<ColorThemes>>,) {
    setCurrentColorMode(Companion.current = it,)
    BootstrapInstanceHandler.get.getModalInstanceOrNull(COLOR_MODAL_ID,)?.instance.hide()
}
