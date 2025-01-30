import type {Entities}        from 'core/entity/Entities.ts'
import type {ReactProperties} from 'util/react/ReactProperties.ts'

import TextComponent    from 'app/tools/text/TextComponent.tsx'
import LimitComponent   from 'core/limit/Limit.component.tsx'
import {NOT_APPLICABLE} from 'util/commonVariables.ts'

interface Smm1And3dsEditorLimitProperties
    extends ReactProperties {

    readonly reference: Entities

}

export default function Smm1And3dsEditorLimit({reference,}: Smm1And3dsEditorLimitProperties,) {
    const editorLimit = reference.reference.editorLimit_smm1And3ds

    if (editorLimit == null)
        return null
    if (editorLimit === NOT_APPLICABLE)
        return <TextComponent id={`editor-SuperMarioMaker1And3DS-${reference.englishNameInHtml}`} content={NOT_APPLICABLE}/>
    return <LimitComponent id={`editor-SuperMarioMaker1And3DS-${reference.englishNameInHtml}`} limits={editorLimit} displayAcronymIfApplicable/>
}
