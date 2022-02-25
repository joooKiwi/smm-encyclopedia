import type {AbstractExclusiveSMM2GameProperty} from '../entity/properties/GameProperty';
import type {Name}                              from '../../lang/name/Name';
import type {WorldTheme}                        from './WorldTheme';

import {AbstractTheme}         from './AbstractTheme';
import {GamePropertyContainer} from '../entity/properties/GameProperty.container';

export class WorldThemeContainer
    extends AbstractTheme<AbstractExclusiveSMM2GameProperty>
    implements WorldTheme {

    public constructor(name: Name<string>,) {
        super(name, GamePropertyContainer.get(false, true,));
    }

}
