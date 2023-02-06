import type {PredefinedMessage}         from 'core/predefinedMessage/PredefinedMessage'
import type {PredefinedMessageTemplate} from 'core/predefinedMessage/PredefinedMessage.template'
import type {Name}                      from 'lang/name/Name'

import {TemplateWithNameCreator}    from 'core/_template/TemplateWithName.creator'
import {PredefinedMessageContainer} from 'core/predefinedMessage/PredefinedMessage.container'

export class PredefinedMessageCreator
    extends TemplateWithNameCreator<PredefinedMessageTemplate, PredefinedMessage> {


    public constructor(template: PredefinedMessageTemplate,) {
        super(template, 2, true,)
    }

    protected override _create(name: Name<string>,): PredefinedMessage {
        return new PredefinedMessageContainer(name)
    }

}
