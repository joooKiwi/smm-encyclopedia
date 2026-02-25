import type {Medals}          from 'core/medal/Medals'
import type {ReactProperties} from 'util/react/ReactProperties'

import TextComponent from 'app/tools/text/TextComponent'

interface AmountOfStarToUnlockProperties
    extends ReactProperties {

    readonly reference: Medals

}

/** @reactComponent */
export default function AmountOfStarToUnlock({reference,}: AmountOfStarToUnlockProperties,) {
    return <TextComponent content={reference.reference.amountOfStarReceivedToUnlockIt}/>
}
