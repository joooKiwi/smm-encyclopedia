import type {ClassThatIsAvailableFromTheStart}                from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart'
import type {AbstractExclusiveSMM2GameProperty, GameProperty} from 'core/entity/properties/game/GameProperty'
import type {WorldTheme}                                      from 'core/theme/WorldTheme'
import type {Name}                                            from 'lang/name/Name'
import type {ObjectHolder}                                    from 'util/holder/ObjectHolder'

import {AbstractTheme} from 'core/theme/AbstractTheme'

export class WorldThemeContainer
    extends AbstractTheme<AbstractExclusiveSMM2GameProperty>
    implements WorldTheme {


    public constructor(name: Name<string>, isInProperty: GameProperty<false, false, true>, isAvailableFromTheStart: ObjectHolder<ClassThatIsAvailableFromTheStart<null, null, true>>,) {
        super(name, isInProperty, isAvailableFromTheStart,)
    }

}
