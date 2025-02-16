import type {CharacterName} from 'core/characterName/CharacterName'
import type {Games}         from 'core/game/Games'
import type {Name}          from 'lang/name/Name'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'
import {Times}                from 'core/time/Times'
import {GameMap}              from 'util/collection/GameMap'
import {TimeMap}              from 'util/collection/TimeMap'

export class CharacterNameContainer
    extends ClassContainingAName<string>
    implements CharacterName {

    //region -------------------- Fields --------------------

    readonly #isInSuperMarioMaker1
    readonly #isInSuperMarioMakerFor3DS
    readonly #isInSuperMarioMaker2
    readonly #isInDayTime
    readonly #isInNightTime
    readonly #hasNameSaidInTheEditor
    #gameMap?: GameMap<CharacterName>
    #timeMap?: TimeMap<CharacterName>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<string>,
                       isInSuperMarioMaker1: boolean, isInSuperMarioMakerFor3DS: boolean, isInSuperMarioMaker2: boolean,
                       isInDayTime: boolean, isInNightTime: boolean,
                       hasNameSaidInTheEditor: boolean,) {
        super(name,)
        this.#isInSuperMarioMaker1 = isInSuperMarioMaker1
        this.#isInSuperMarioMakerFor3DS = isInSuperMarioMakerFor3DS
        this.#isInSuperMarioMaker2 = isInSuperMarioMaker2
        this.#isInDayTime = isInDayTime
        this.#isInNightTime = isInNightTime
        this.#hasNameSaidInTheEditor = hasNameSaidInTheEditor
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get isInSuperMarioMaker1(): boolean {
        return this.#isInSuperMarioMaker1
    }

    public get isInSuperMarioMakerFor3DS(): boolean {
        return this.#isInSuperMarioMakerFor3DS
    }

    public get isInSuperMarioMaker2(): boolean {
        return this.#isInSuperMarioMaker2
    }


    public get isInDayTheme(): boolean {
        return this.#isInDayTime
    }

    public get isInNightTheme(): boolean {
        return this.#isInNightTime
    }


    public get hasNameSaidInTheEditor(): boolean {
        return this.#hasNameSaidInTheEditor
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public toGameMap(): ReadonlyMap<Games, boolean> {
        return this.#gameMap ??= new GameMap(this,)
    }

    public toTimeMap(): ReadonlyMap<Times, boolean> {
        return this.#timeMap ??= new TimeMap(this,)
    }

    //endregion -------------------- Methods --------------------

}
