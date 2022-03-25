import type {MiiCostume}                 from './MiiCostume';
import type {MiiCostumeCategory}         from '../miiCostumeCategory/MiiCostumeCategory';
import type {Name}                       from '../../lang/name/Name';
import type {ObjectHolder}               from '../../util/holder/ObjectHolder';
import type {OfficialNotificationHolder} from '../officialNotification/holder/OfficialNotificationHolder';
import type {Versions}                   from '../version/Versions';

import {ClassContainingAName} from '../../lang/name/ClassContainingAName';

export class MiiCostumeContainer
    extends ClassContainingAName<string>
    implements MiiCostume {

    //region -------------------- Attributes --------------------

    readonly #officialNotificationHolder;
    readonly #version;
    readonly #category;

    //endregion -------------------- Attributes --------------------

    public constructor(name: Name<string>, officialNotification: ObjectHolder<OfficialNotificationHolder>, version: ObjectHolder<| Versions | null>, category: ObjectHolder<MiiCostumeCategory>,) {
        super(name,);
        this.#officialNotificationHolder = officialNotification;
        this.#version = version;
        this.#category = category;
    }

    //region -------------------- Getter methods --------------------

    //region -------------------- Official notification --------------------

    public get officialNotificationContainer() {
        return this.#officialNotificationHolder.get;
    }

    public get officialNotification() {
        return this.officialNotificationContainer.officialNotification;
    }

    public get officialNotificationAmount() {
        return this.officialNotificationContainer.amount;
    }

    //endregion -------------------- Official notification --------------------

    public get version() {
        return this.#version.get;
    }

    public get category() {
        return this.#category.get;
    }

    //endregion -------------------- Getter methods --------------------

}
