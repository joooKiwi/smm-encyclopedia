import type {MedalTemplate} from 'core/medal/Medal.template'
import type {Medal}         from 'core/medal/Medal'

import {TemplateCreator} from 'core/_template/Template.creator'
import {MedalContainer}  from 'core/medal/Medal.container'
import {Medals}          from 'core/medal/Medals'

export class MedalCreator
    extends TemplateCreator<MedalTemplate, Medal> {

    public constructor(template: MedalTemplate,) {
        super(template,)
    }

    public override create(): Medal {
        const template = this.template
        const imageName = template.imageName

        return new MedalContainer(
            Medals.CompanionEnum.get.getValueByName(imageName,).associatedReference.reference,
            imageName,
            template.amount.allowedLevelToUpload,
            template.amount.amountOfStarReceived,
        )
    }

}
