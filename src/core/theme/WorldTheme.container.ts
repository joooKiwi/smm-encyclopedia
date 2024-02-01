import type {WorldTheme} from 'core/theme/WorldTheme'
import type {Name}       from 'lang/name/Name'

import {AbstractTheme} from 'core/theme/AbstractTheme'

export class WorldThemeContainer
    extends AbstractTheme<false, null, null>
    implements WorldTheme {

    public constructor(name: Name<string>,) {
        super(name, false, null, null,)
    }

}
