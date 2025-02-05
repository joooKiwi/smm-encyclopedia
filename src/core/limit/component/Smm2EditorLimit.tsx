import type {Entities}        from 'core/entity/Entities'
import type {ReactProperties} from 'util/react/ReactProperties'

import TextComponent    from 'app/tools/text/TextComponent'
import LimitComponent   from 'core/limit/Limit.component'
import {NOT_APPLICABLE} from 'util/commonVariables'

interface Smm2EditorLimitProperties
    extends ReactProperties {

    readonly reference: Entities

}

export default function Smm2EditorLimit({reference,}: Smm2EditorLimitProperties,) {
    const entity = reference.reference
    const editorLimit = entity.editorLimit_smm2

    if (editorLimit == null || editorLimit === NOT_APPLICABLE)
        return <TextComponent id={`editor-SuperMarioMaker2-${reference.englishNameInHtml}`} content={editorLimit} isUnknown={entity.isUnknown_editorLimit_smm2}/>
    return <LimitComponent id={`editor-SuperMarioMaker2-${reference.englishNameInHtml}`} limits={editorLimit} displayAcronymIfApplicable/>
}
