import type {Array} from '@joookiwi/type'

import type {Entity}     from 'core/entity/Entity'
import type {Instrument} from 'core/instrument/Instrument'
import type {Name}       from 'lang/name/Name'
import type {Games}      from 'core/game/Games'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'
import {GameMap}              from 'util/collection/GameMap'

export class InstrumentContainer
    extends ClassContainingAName<string>
    implements Instrument {

    //region -------------------- Fields --------------------

    readonly #entities

    readonly #isInSuperMarioMaker1
    readonly #isInSuperMarioMakerFor3DS
    #gameMap?: GameMap<boolean, Instrument>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<string>, entities: Array<Entity>,
                       isInSuperMarioMaker1: boolean, isInSuperMarioMakerFor3DS: boolean,) {
        super(name,)
        this.#entities = entities
        this.#isInSuperMarioMaker1 = isInSuperMarioMaker1
        this.#isInSuperMarioMakerFor3DS = isInSuperMarioMakerFor3DS
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get entities(): Array<Entity> {
        return this.#entities
    }

    public get isInSuperMarioMaker1(): boolean {
        return this.#isInSuperMarioMaker1
    }

    public get isInSuperMarioMakerFor3DS(): boolean {
        return this.#isInSuperMarioMakerFor3DS
    }

    public get isInSuperMarioMaker2(): true {
        return true
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap(): ReadonlyMap<Games, boolean> {
        return this.#gameMap ??= new GameMap(this,)
    }

    //endregion -------------------- Convertor methods --------------------

}
