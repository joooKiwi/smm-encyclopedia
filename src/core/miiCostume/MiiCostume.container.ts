import type {Lazy} from '@joookiwi/lazy'

import type {MiiCostume}                 from 'core/miiCostume/MiiCostume'
import type {MiiCostumeCategory}         from 'core/miiCostumeCategory/MiiCostumeCategory'
import type {OfficialNotificationHolder} from 'core/officialNotification/holder/OfficialNotificationHolder'
import type {Versions}                   from 'core/version/Versions'
import type {Name}                       from 'lang/name/Name'
import type {NullOr}                     from 'util/types/nullable'
import type {ValueOrCallback}            from 'util/holder/ObjectHolder.types'

import {ClassContainingANameAndACategory} from 'lang/name/ClassContainingANameAndACategory'

export class MiiCostumeContainer
    extends ClassContainingANameAndACategory<string, string, MiiCostumeCategory>
    implements MiiCostume {

    //region -------------------- Fields --------------------

    readonly #officialNotificationHolder
    readonly #version

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: ValueOrCallback<Name<string>>,
                       officialNotification: Lazy<OfficialNotificationHolder>,
                       version: Lazy<NullOr<Versions>>,
                       category: ValueOrCallback<MiiCostumeCategory>,) {
        super(name, category,)
        this.#officialNotificationHolder = officialNotification
        this.#version = version
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Official notification --------------------

    public get officialNotificationContainer() {
        return this.#officialNotificationHolder.value
    }

    public get officialNotification() {
        return this.officialNotificationContainer.officialNotification
    }

    public get officialNotificationAmount() {
        return this.officialNotificationContainer.amount
    }

    //endregion -------------------- Official notification --------------------

    public get version() {
        return this.#version.value
    }

    //endregion -------------------- Getter methods --------------------

}
