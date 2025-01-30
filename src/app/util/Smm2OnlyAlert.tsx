import type {ReactProperties} from 'util/react/ReactProperties'
import type {GameCollection}  from 'util/collection/GameCollection'

import {contentTranslation} from 'lang/components/translationMethods'

interface Smm2OnlyAlert
    extends ReactProperties {

    value: GameCollection

}

/** @reactComponent */
export default function Smm2OnlyAlert({value,}: Smm2OnlyAlert,) {
    if (value.hasSmm1)
        return null
    return <div className="container-sm alert alert-warning small text-center" role="alert">{contentTranslation('alert.smm2 only',)}</div>
}
