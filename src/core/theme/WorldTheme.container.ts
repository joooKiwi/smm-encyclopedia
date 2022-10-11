import type {AbstractExclusiveSMM2GameProperty, GameProperty} from '../entity/properties/game/GameProperty'
import type {ClassThatIsAvailableFromTheStart}                from '../availableFromTheStart/ClassThatIsAvailableFromTheStart'
import type {Name}                                            from '../../lang/name/Name'
import type {ObjectHolder}                                    from '../../util/holder/ObjectHolder'
import type {WorldTheme}                                      from './WorldTheme'

import {AbstractTheme} from './AbstractTheme'

export class WorldThemeContainer
    extends AbstractTheme<AbstractExclusiveSMM2GameProperty>
    implements WorldTheme {


    public constructor(name: Name<string>, isInProperty: GameProperty<false, false, true>, isAvailableFromTheStart: ObjectHolder<ClassThatIsAvailableFromTheStart<null, null, true>>,) {
        super(name, isInProperty, isAvailableFromTheStart,)
    }

}
