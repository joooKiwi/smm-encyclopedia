import type {Entities}        from 'core/entity/Entities.ts'
import type {ReactProperties} from 'util/react/ReactProperties.ts'

import LimitComponent from 'core/limit/Limit.component.tsx'

interface PlayLimitProperties
    extends ReactProperties {

    readonly reference: Entities

}

export default function PlayLimit({reference,}: PlayLimitProperties,) {
    return <LimitComponent id={`play-${reference.englishNameInHtml}`} limits={reference.reference.toPlayLimitMap()} displayAcronymIfApplicable/>
}
