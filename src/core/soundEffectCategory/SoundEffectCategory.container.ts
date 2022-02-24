import type {Name}                from '../../lang/name/Name';
import type {SoundEffectCategory} from './SoundEffectCategory';

import {ClassContainingAName} from '../../lang/name/ClassContainingAName';

export class SoundEffectCategoryContainer
    extends ClassContainingAName<string>
    implements SoundEffectCategory {

    public constructor(name: Name<string>,) {
        super(name,);
    }

}
