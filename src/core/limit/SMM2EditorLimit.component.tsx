import type {SimpleLimitComponentProperties} from 'core/limit/Limit.component.types'

import TextComponent    from 'app/tools/text/TextComponent'
import LimitComponent   from 'core/limit/Limit.component'
import {NOT_APPLICABLE} from 'util/commonVariables'

export default function SMM2EditorLimitComponent({reference,}: SimpleLimitComponentProperties,) {
    const entity = reference.reference
    const editorLimit = entity.editorLimit_smm2

    if (editorLimit == null || editorLimit === NOT_APPLICABLE)
        return <TextComponent id={`editor-SuperMarioMaker2-${reference.englishNameInHtml}`} content={editorLimit} isUnknown={entity.isUnknown_editorLimit_smm2}/>
    return <LimitComponent id={`editor-SuperMarioMaker2-${reference.englishNameInHtml}`} limits={editorLimit} displayAcronymIfApplicable/>
}
