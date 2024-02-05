import {lazyOf} from '@joookiwi/lazy'

import type {MiiCostume}         from 'core/miiCostume/MiiCostume'
import type {MiiCostumeCategory} from 'core/miiCostumeCategory/MiiCostumeCategory'
import type {Versions}           from 'core/version/Versions'
import type {Name}               from 'lang/name/Name'

import {ClassContainingANameAndACategory} from 'lang/name/ClassContainingANameAndACategory'
import type {OfficialNotifications}       from 'core/officialNotification/OfficialNotifications'

export class MiiCostumeContainer
    extends ClassContainingANameAndACategory<string, string, MiiCostumeCategory>
    implements MiiCostume {

    //region -------------------- Fields --------------------

    readonly #officialNotification
    readonly #officialNotificationAmount
    readonly #version

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<string>,
                       officialNotification: NullOr<OfficialNotifications>, officialNotificationAmount: NullOrNumber,
                       version: NullOr<Versions>,
                       category: MiiCostumeCategory,) {
        super(name, lazyOf(category,),)
        this.#officialNotification = officialNotification
        this.#officialNotificationAmount = officialNotificationAmount
        this.#version = version
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get officialNotification() {
        return this.#officialNotification
    }

    public get officialNotificationAmount() {
        return this.#officialNotificationAmount
    }


    public get version() {
        return this.#version
    }

    //endregion -------------------- Getter methods --------------------

}
