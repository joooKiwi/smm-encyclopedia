import type {Lazy}                             from '@joookiwi/lazy'
import type {Array, NullOrBoolean, NullOrTrue} from '@joookiwi/type'

import type {Entity}                                           from 'core/entity/Entity'
import type {Games}                                            from 'core/game/Games'
import type {GameStyle, PossibleNightDesertWindTranslationKey} from 'core/gameStyle/GameStyle'
import type {Name}                                             from 'lang/name/Name'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'
import {GameMap}              from 'util/collection/GameMap'

export class GameStyleContainer
    extends ClassContainingAName<string>
    implements GameStyle {

    //region -------------------- Fields --------------------

    readonly #isInSuperMarioMaker1And3DS
    readonly #entitiesHolder
    readonly #isAvailableFromTheStartInSuperMarioMaker1
    readonly #isAvailableFromTheStartInSuperMarioMakerFor3DS: NullOrTrue
    readonly #nightDesertWindTranslationKey
    #gameMap?: GameMap<GameStyle>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<string>,
                       isInSuperMarioMaker1And3DS: boolean,
                       isAvailableFromTheStartInSuperMarioMaker1: NullOrBoolean,
                       entities: Lazy<Array<Entity>>,
                       nightDesertWindTranslationKey: PossibleNightDesertWindTranslationKey,) {
        super(name,)
        this.#isInSuperMarioMaker1And3DS = isInSuperMarioMaker1And3DS
        if ((this.#isAvailableFromTheStartInSuperMarioMaker1 = isAvailableFromTheStartInSuperMarioMaker1) == null)
            this.#isAvailableFromTheStartInSuperMarioMakerFor3DS = null
        else
            this.#isAvailableFromTheStartInSuperMarioMakerFor3DS = true
        this.#entitiesHolder = entities
        this.#nightDesertWindTranslationKey = nightDesertWindTranslationKey
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    //region -------------------- Game properties --------------------

    public get isInSuperMarioMaker1() {
        return this.#isInSuperMarioMaker1And3DS
    }

    public get isInSuperMarioMakerFor3DS() {
        return this.#isInSuperMarioMaker1And3DS
    }

    public get isInSuperMarioMaker2(): true {
        return true
    }

    //endregion -------------------- Game properties --------------------
    //region -------------------- "Is available from the start" properties --------------------

    public get isAvailableFromTheStartInSMM1() {
        return this.#isAvailableFromTheStartInSuperMarioMaker1
    }

    public get isAvailableFromTheStartInSMM3DS() {
        return this.#isAvailableFromTheStartInSuperMarioMakerFor3DS
    }

    public get isAvailableFromTheStartInSMM2(): true {
        return true
    }

    //endregion -------------------- "Is available from the start" properties --------------------

    public get entities() {
        return this.#entitiesHolder.value
    }

    public get nightDesertWindTranslationKey() {
        return this.#nightDesertWindTranslationKey
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap(): ReadonlyMap<Games, boolean> {
        return this.#gameMap ??= new GameMap(this,)
    }

    //endregion -------------------- Convertor methods --------------------

}
