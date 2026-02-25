import type {Medals}          from 'core/medal/Medals'
import type {ReactProperties} from 'util/react/ReactProperties'

import AmountOfStarToUnlock from 'core/medal/component/AmountOfStarToUnlock'
import HonorMedalImage      from 'core/medal/component/HonorMedalImage'
import TooltipComponent     from 'bootstrap/tooltip/Tooltip.component.tsx'
import {gameContentTranslation} from 'lang/components/translationMethods.tsx'

interface AmountOfStarToUnlockWithPrefixProperties
    extends ReactProperties {

    readonly reference: Medals

}

/** @reactComponent */
export default function AmountOfStarToUnlockWithPrefix({reference,}: AmountOfStarToUnlockWithPrefixProperties,) {
    return <div>
        <TooltipComponent tooltip={gameContentTranslation('medal.xx star to unlock', {number: reference.reference.amountOfStarReceivedToUnlockIt,},)}>
            <AmountOfStarToUnlock reference={reference}/>
            <HonorMedalImage/>
        </TooltipComponent>
    </div>
}
