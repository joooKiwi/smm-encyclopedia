import type {Array} from '@joookiwi/type'

import type {Entity}     from 'core/entity/Entity'
import type {Instrument} from 'core/instrument/Instrument'
import type {Name}       from 'lang/name/Name'
import type {Games}      from 'core/game/Games'
import type {GameStyles} from 'core/gameStyle/GameStyles'
import type {Times}      from 'core/time/Times'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'
import {GameMap}              from 'util/collection/GameMap'
import {GameStyleMap}         from 'util/collection/GameStyleMap'
import {TimeMap}              from 'util/collection/TimeMap'

export class InstrumentContainer
    extends ClassContainingAName<string>
    implements Instrument {

    //region -------------------- Fields --------------------

    readonly #entities

    readonly #isInSuperMarioMaker1
    readonly #isInSuperMarioMakerFor3DS
    readonly #isInSuperMarioBros
    readonly #isInSuperMarioBros3
    readonly #isInSuperMarioWorld
    readonly #isInNewSuperMarioBrosU
    readonly #isInDayTime
    readonly #isInNightTime
    #gameMap?: GameMap<Instrument>
    #gameStyleMap?: GameStyleMap<Instrument>
    #timeMap?: TimeMap<Instrument>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<string>, entities: Array<Entity>,
                       isInSuperMarioMaker1: boolean, isInSuperMarioMakerFor3DS: boolean,
                       isInSuperMarioBros: boolean, isInSuperMarioBros3: boolean, isInSuperMarioWorld: boolean, isInNewSuperMarioBrosU: boolean,
                       isInDayTime: boolean, isInNightTime: boolean,) {
        super(name,)
        this.#entities = entities
        this.#isInSuperMarioMaker1 = isInSuperMarioMaker1
        this.#isInSuperMarioMakerFor3DS = isInSuperMarioMakerFor3DS
        this.#isInSuperMarioBros = isInSuperMarioBros
        this.#isInSuperMarioBros3 = isInSuperMarioBros3
        this.#isInSuperMarioWorld = isInSuperMarioWorld
        this.#isInNewSuperMarioBrosU = isInNewSuperMarioBrosU
        this.#isInDayTime = isInDayTime
        this.#isInNightTime = isInNightTime
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get entities() { return this.#entities }

    public get isInSuperMarioMaker1() { return this.#isInSuperMarioMaker1 }
    public get isInSuperMarioMakerFor3DS() { return this.#isInSuperMarioMakerFor3DS }
    public get isInSuperMarioMaker2() { return true as const }

    public get isInSuperMarioBrosStyle() { return this.#isInSuperMarioBros }
    public get isInSuperMarioBros3Style() { return this.#isInSuperMarioBros3 }
    public get isInSuperMarioWorldStyle() { return this.#isInSuperMarioWorld }
    public get isInNewSuperMarioBrosUStyle() { return this.#isInNewSuperMarioBrosU }
    public get isInSuperMario3DWorldStyle() { return false as const }

    public get isInDayTheme() { return this.#isInDayTime }
    public get isInNightTheme() { return this.#isInNightTime }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap(): ReadonlyMap<Games, boolean> {
        return this.#gameMap ??= new GameMap(this,)
    }

    public toGameStyleMap(): ReadonlyMap<GameStyles, boolean> {
        return this.#gameStyleMap ??= new GameStyleMap(this,)
    }

    public toTimeMap(): ReadonlyMap<Times, boolean> {
        return this.#timeMap ??= new TimeMap(this,)
    }

    //endregion -------------------- Convertor methods --------------------

}
