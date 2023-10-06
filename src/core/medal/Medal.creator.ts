import type {MedalTemplate} from 'core/medal/Medal.template'
import type {Medal}         from 'core/medal/Medal'

import {MedalContainer} from 'core/medal/Medal.container'
import {Medals}         from 'core/medal/Medals'

export function createContent(template: MedalTemplate,): Medal {
    const imageName = template.imageName

    return new MedalContainer(
        Medals.CompanionEnum.get.getValueByName(imageName,).associatedReference.reference,
        imageName,
        template.amount.allowedLevelToUpload,
        template.amount.amountOfStarReceived,
    )
}
