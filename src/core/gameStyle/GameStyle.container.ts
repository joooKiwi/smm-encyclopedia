import type {ClassThatIsAvailableFromTheStart}                 from '../availableFromTheStart/ClassThatIsAvailableFromTheStart';
import type {Entity}                                           from '../entity/Entity';
import type {GameProperty}                                     from '../entity/properties/GameProperty';
import type {GameStyle, PossibleNightDesertWindTranslationKey} from './GameStyle';
import type {Name}                                             from '../../lang/name/Name';
import type {ObjectHolder, PossibleValueOnObjectHolder}        from '../../util/holder/ObjectHolder';

import {ClassContainingAName} from '../../lang/name/ClassContainingAName';

export class GameStyleContainer
    extends ClassContainingAName<string>
    implements GameStyle {

    //region -------------------- Fields --------------------

    readonly #isInPropertyHolder;
    readonly #entitiesHolder;
    readonly #isAvailableFromTheStartHolder;
    readonly #nightDesertWindTranslationKey;

    //endregion -------------------- Fields --------------------

    public constructor(name: PossibleValueOnObjectHolder<Name<string>>, isInProperty: ObjectHolder<GameProperty>, isAvailableFromTheStart: ObjectHolder<ClassThatIsAvailableFromTheStart>, entities: ObjectHolder<readonly Entity[]>, nightDesertWindTranslationKey: PossibleNightDesertWindTranslationKey,) {
        super(name,);
        this.#isInPropertyHolder = isInProperty;
        this.#isAvailableFromTheStartHolder = isAvailableFromTheStart;
        this.#entitiesHolder = entities;
        this.#nightDesertWindTranslationKey = nightDesertWindTranslationKey;
    }

    //region -------------------- Getter methods --------------------

    //region -------------------- Game properties --------------------

    public get isInProperty() {
        return this.#isInPropertyHolder.get;
    }

    public get isInSuperMarioMaker1() {
        return this.isInProperty.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMakerFor3DS() {
        return this.isInProperty.isInSuperMarioMakerFor3DS;
    }

    public get isInSuperMarioMaker2() {
        return this.isInProperty.isInSuperMarioMaker2;
    }

    //endregion -------------------- Game properties --------------------
    //region -------------------- "Is available from the start" properties --------------------

    public get isAvailableFromTheStartContainer(): ClassThatIsAvailableFromTheStart {
        return this.#isAvailableFromTheStartHolder.get;
    }

    public get isAvailableFromTheStartInSMM1() {
        return this.isAvailableFromTheStartContainer.isAvailableFromTheStartInSMM1;
    }

    public get isAvailableFromTheStartInSMM3DS() {
        return this.isAvailableFromTheStartContainer.isAvailableFromTheStartInSMM3DS;
    }

    public get isAvailableFromTheStartInSMM2() {
        return this.isAvailableFromTheStartContainer.isAvailableFromTheStartInSMM2;
    }

    //endregion -------------------- "Is available from the start" properties --------------------

    public get entities() {
        return this.#entitiesHolder.get;
    }

    public get nightDesertWindTranslationKey() {
        return this.#nightDesertWindTranslationKey;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap() {
        return this.isInProperty.toGameMap();
    }

    //endregion -------------------- Convertor methods --------------------

}