import type {PredefinedMessage}         from 'core/predefinedMessage/PredefinedMessage'
import type {PredefinedMessageTemplate} from 'core/predefinedMessage/PredefinedMessage.template'
import type {Name}                      from 'lang/name/Name'
import type {Builder}                   from 'util/builder/Builder'

import {TemplateWithNameBuilder}    from 'core/_template/TemplateWithName.builder'
import {Games}                      from 'core/game/Games'
import {PredefinedMessageContainer} from 'core/predefinedMessage/PredefinedMessage.container'

export class PredefinedMessageBuilder
    extends TemplateWithNameBuilder<PredefinedMessageTemplate, PredefinedMessage> {


    public constructor(templateBuilder_or_template: Builder<PredefinedMessageTemplate>,) {
        super(templateBuilder_or_template, Games.SUPER_MARIO_MAKER_2, true,)
    }

    protected /*static*/ override get _static() {
        return PredefinedMessageBuilder
    }


    protected override _build(name: Name<string>,): PredefinedMessage {
        return new PredefinedMessageContainer(name)
    }

}
