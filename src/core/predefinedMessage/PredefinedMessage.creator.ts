import type {PredefinedMessage}         from 'core/predefinedMessage/PredefinedMessage'
import type {PredefinedMessageTemplate} from 'core/predefinedMessage/PredefinedMessage.template'

import {PredefinedMessageContainer} from 'core/predefinedMessage/PredefinedMessage.container'
import {NameBuilderContainer}       from 'lang/name/Name.builder.container'

export function createContent(template: PredefinedMessageTemplate,): PredefinedMessage {
    return new PredefinedMessageContainer(new NameBuilderContainer(template.name, 2, true,).build(),)
}
