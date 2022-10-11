import type {Name}              from '../../lang/name/Name'
import type {PredefinedMessage} from './PredefinedMessage'

import {ClassContainingAName} from '../../lang/name/ClassContainingAName'

export class PredefinedMessageContainer
    extends ClassContainingAName<string>
    implements PredefinedMessage {

    public constructor(name: Name<string>,) {
        super(name,)
    }

}
