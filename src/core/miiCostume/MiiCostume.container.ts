import type {MiiCostume}                                from './MiiCostume'
import type {MiiCostumeCategory}                        from '../miiCostumeCategory/MiiCostumeCategory'
import type {Name}                                      from '../../lang/name/Name'
import type {NullOr}                                    from '../../util/types'
import type {ObjectHolder, PossibleValueOnObjectHolder} from '../../util/holder/ObjectHolder'
import type {OfficialNotificationHolder}                from '../officialNotification/holder/OfficialNotificationHolder'
import type {Versions}                                  from '../version/Versions'

import {ClassContainingANameAndACategory} from '../../lang/name/ClassContainingANameAndACategory'

export class MiiCostumeContainer
    extends ClassContainingANameAndACategory<string, string, MiiCostumeCategory>
    implements MiiCostume {

    //region -------------------- Fields --------------------

    readonly #officialNotificationHolder
    readonly #version

    //endregion -------------------- Fields --------------------

    public constructor(name: PossibleValueOnObjectHolder<Name<string>>, officialNotification: ObjectHolder<OfficialNotificationHolder>, version: ObjectHolder<NullOr<Versions>>, category: PossibleValueOnObjectHolder<MiiCostumeCategory>,) {
        super(name, category,)
        this.#officialNotificationHolder = officialNotification
        this.#version = version
    }

    //region -------------------- Getter methods --------------------

    //region -------------------- Official notification --------------------

    public get officialNotificationContainer() {
        return this.#officialNotificationHolder.get
    }

    public get officialNotification() {
        return this.officialNotificationContainer.officialNotification
    }

    public get officialNotificationAmount() {
        return this.officialNotificationContainer.amount
    }

    //endregion -------------------- Official notification --------------------

    public get version() {
        return this.#version.get
    }

    //endregion -------------------- Getter methods --------------------

}
