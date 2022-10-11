import type {Builder}                   from '../../util/builder/Builder'
import type {PredefinedMessage}         from './PredefinedMessage'
import type {PredefinedMessageTemplate} from './PredefinedMessage.template'
import type {Name}                      from '../../lang/name/Name'

import {Games}                      from '../game/Games'
import {PredefinedMessageContainer} from './PredefinedMessage.container'
import {TemplateWithNameBuilder}    from '../_template/TemplateWithName.builder'

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
