import type {Entity}                                           from '../entity/Entity';
import type {GameProperty}                                     from '../entity/properties/GameProperty';
import type {GameStyle, PossibleNightDesertWindTranslationKey} from './GameStyle';
import type {Name}                                             from '../../lang/name/Name';
import type {ObjectHolder}                                     from '../../util/holder/ObjectHolder';

import {ClassContainingAName}         from '../../lang/name/ClassContainingAName';
import {DelayedObjectHolderContainer} from '../../util/holder/DelayedObjectHolder.container';

export class GameStyleContainer
    extends ClassContainingAName<string>
    implements GameStyle {

    //region -------------------- Attributes --------------------

    readonly #isInProperty;
    readonly #entities: ObjectHolder<readonly Entity[]>;
    readonly #nightDesertWindTranslationKey;

    //endregion -------------------- Attributes --------------------

    //TODO change to object holder directly instead of creating the object holder instance here.
    public constructor(name: () => Name<string>, isInProperty: GameProperty, entities: () => readonly Entity[], nightDesertWindTranslationKey: PossibleNightDesertWindTranslationKey,) {
        super(name,);
        this.#isInProperty = isInProperty;
        this.#entities = new DelayedObjectHolderContainer(entities);
        this.#nightDesertWindTranslationKey = nightDesertWindTranslationKey;
    }

    //region -------------------- Game properties --------------------

    public get isInProperty() {
        return this.#isInProperty;
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

    public get entities() {
        return this.#entities.get;
    }

    public get nightDesertWindTranslationKey() {
        return this.#nightDesertWindTranslationKey;
    }


    public toGameMap() {
        return this.isInProperty.toGameMap();
    }

}