import type {NullOr} from '@joookiwi/type'

import type {Games}                      from 'core/game/Games'
import type {OtherPluralWordInTheGame}   from 'core/otherWordInTheGame/OtherPluralWordInTheGame'
import type {OtherWordInTheGame}         from 'core/otherWordInTheGame/OtherWordInTheGame'
import type {Name}                       from 'lang/name/Name'

import {ClassContainingAName} from 'lang/name/ClassContainingAName'
import {GameMap}              from 'util/collection/GameMap'

export class OtherWordInTheGameContainer
    extends ClassContainingAName<string>
    implements OtherWordInTheGame {

    //region -------------------- Fields --------------------

    readonly #isInSuperMarioMaker1
    readonly #isInSuperMarioMakerFor3DS
    readonly #isInSuperMarioMaker2
    readonly #pluralForm
    #map?: GameMap<OtherWordInTheGame>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<string>, isInSuperMarioMaker1: boolean, isInSuperMarioMakerFor3DS: boolean, isInSuperMarioMaker2: boolean, pluralForm: NullOr<OtherPluralWordInTheGame>,) {
        super(name,)
        this.#isInSuperMarioMaker1 = isInSuperMarioMaker1
        this.#isInSuperMarioMakerFor3DS = isInSuperMarioMakerFor3DS
        this.#isInSuperMarioMaker2 = isInSuperMarioMaker2
        this.#pluralForm = pluralForm
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get pluralForm(): NullOr<OtherPluralWordInTheGame> {
        return this.#pluralForm
    }

    //region -------------------- Game properties --------------------

    public get isInSuperMarioMaker1(): boolean {
        return this.#isInSuperMarioMaker1
    }

    public get isInSuperMarioMakerFor3DS(): boolean {
        return this.#isInSuperMarioMakerFor3DS
    }

    public get isInSuperMarioMaker2(): boolean {
        return this.#isInSuperMarioMaker2
    }

    //endregion -------------------- Game properties --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap(): ReadonlyMap<Games, boolean> {
        return this.#map ??= new GameMap(this,)
    }

    //endregion -------------------- Convertor methods --------------------

}
