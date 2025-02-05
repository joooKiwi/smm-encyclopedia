import type {Entities}        from 'core/entity/Entities'
import type {ReactProperties} from 'util/react/ReactProperties'

import LimitComponent from 'core/limit/Limit.component'

interface PlayLimitProperties
    extends ReactProperties {

    readonly reference: Entities

}

export default function PlayLimit({reference,}: PlayLimitProperties,) {
    return <LimitComponent id={`play-${reference.englishNameInHtml}`} limits={reference.reference.toPlayLimitMap()} displayAcronymIfApplicable/>
}
