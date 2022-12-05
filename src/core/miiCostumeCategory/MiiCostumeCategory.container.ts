import type {MiiCostumeCategory} from 'core/miiCostumeCategory/MiiCostumeCategory'
import type {Name}               from 'lang/name/Name'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'

export class MiiCostumeCategoryContainer
    extends ClassContainingAName<string>
    implements MiiCostumeCategory {

    public constructor(name: Name<string>,) {
        super(name)
    }

}
