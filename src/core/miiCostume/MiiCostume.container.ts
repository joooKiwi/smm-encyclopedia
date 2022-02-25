import type {MiiCostume}                                                  from './MiiCostume';
import type {Name}                                                        from '../../lang/name/Name';
import type {ObjectHolder}                                                from '../../util/holder/ObjectHolder';
import type {PossibleCategory, PossibleConditionToUnlockIt, PossibleMode} from './MiiCostume.template';
import type {Versions}                                                    from '../version/Versions';

import {ClassContainingAName}         from '../../lang/name/ClassContainingAName';
import {DelayedObjectHolderContainer} from '../../util/holder/DelayedObjectHolder.container';

export class MiiCostumeContainer
    extends ClassContainingAName<string>
    implements MiiCostume {

    //region -------------------- Attributes --------------------

    readonly #mode;
    readonly #conditionToUnlockId;
    readonly #version: ObjectHolder<| Versions | null>;
    readonly #category: ObjectHolder<PossibleCategory>;

    //endregion -------------------- Attributes --------------------

    //TODO change to object holder directly instead of creating the object holder instance here.
    public constructor(name: Name<string>, mode: PossibleMode, conditionToUnlockId: PossibleConditionToUnlockIt, version: () => | Versions | null, category: () => PossibleCategory,) {
        super(name,);
        this.#mode = mode;
        this.#conditionToUnlockId = conditionToUnlockId;
        this.#version = new DelayedObjectHolderContainer(version);
        this.#category = new DelayedObjectHolderContainer(category);
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
