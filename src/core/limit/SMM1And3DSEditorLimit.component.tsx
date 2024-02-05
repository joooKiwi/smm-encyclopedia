import type {SimpleLimitComponentProperties} from 'core/limit/Limit.component.types'

import TextComponent    from 'app/tools/text/TextComponent'
import LimitComponent   from 'core/limit/Limit.component'
import {NOT_APPLICABLE} from 'util/commonVariables'

export default function SMM1And3DSEditorLimitComponent({reference,}: SimpleLimitComponentProperties,) {
    const editorLimit = reference.reference.editorLimit_smm1And3ds

    if (editorLimit == null)
        return null
    if (editorLimit === NOT_APPLICABLE)
        return <TextComponent id={`editor-SuperMarioMaker1And3DS-${reference.englishNameInHtml}`} content={NOT_APPLICABLE}/>
    return <LimitComponent id={`editor-SuperMarioMaker1And3DS-${reference.englishNameInHtml}`} limits={editorLimit} displayAcronymIfApplicable/>
}
