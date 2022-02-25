import type {MiiCostume}                                from './MiiCostume';
import type {MiiCostumeCategory}                        from '../miiCostumeCategory/MiiCostumeCategory';
import type {Name}                                      from '../../lang/name/Name';
import type {ObjectHolder}                              from '../../util/holder/ObjectHolder';
import type {PossibleConditionToUnlockIt, PossibleMode} from './MiiCostume.template';
import type {Versions}                                  from '../version/Versions';

import {ClassContainingAName}         from '../../lang/name/ClassContainingAName';

export class MiiCostumeContainer
    extends ClassContainingAName<string>
    implements MiiCostume {

    //region -------------------- Attributes --------------------

    readonly #mode;
    readonly #conditionToUnlockId;
    readonly #version;
    readonly #category;

    //endregion -------------------- Attributes --------------------

    //TODO change to object holder directly instead of creating the object holder instance here.
    public constructor(name: Name<string>, mode: PossibleMode, conditionToUnlockId: PossibleConditionToUnlockIt, version: ObjectHolder<| Versions | null>, category: ObjectHolder<MiiCostumeCategory>,) {
        super(name,);
        this.#mode = mode;
        this.#conditionToUnlockId = conditionToUnlockId;
        this.#version = version;
        this.#category = category;
    }

    //region -------------------- Getter methods --------------------

    public get mode() {
        return this.#mode;
    }

    public get conditionToUnlockId() {
        return this.#conditionToUnlockId;
    }

    public get version() {
        return this.#version.get;
    }

    public get category() {
        return this.#category.get;
    }

    //endregion -------------------- Getter methods --------------------

}
