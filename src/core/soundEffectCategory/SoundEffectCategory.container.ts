import type {SoundEffectCategory} from 'core/soundEffectCategory/SoundEffectCategory'
import type {Name}                from 'lang/name/Name'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'

export class SoundEffectCategoryContainer
    extends ClassContainingAName<string>
    implements SoundEffectCategory {

    public constructor(name: Name<string>,) {
        super(name,)
    }

}
