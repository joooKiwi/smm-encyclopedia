import type {SoundEffectProperty} from './SoundEffectProperty';
import type {GameProperty}        from '../../../properties/GameProperty';
import {GamePropertyContainer}    from '../../../properties/GameProperty.container';

export class SoundEffectPropertyContainer
    implements SoundEffectProperty {

    //region -------------------- Attributes --------------------

    readonly #gameContainer: GameProperty;

    //endregion -------------------- Attributes --------------------

    public constructor(isInSuperMarioMaker1: boolean, isInSuperMarioMaker2: boolean,) {
        this.#gameContainer = GamePropertyContainer.get(isInSuperMarioMaker1, isInSuperMarioMaker2,);
    }

    //region -------------------- Game properties --------------------

    public get gameContainer() {
        return this.#gameContainer;
    }

    public get isInSuperMarioMaker1() {
        return this.gameContainer.isInSuperMarioMaker1;
    }

    public get isInSuperMarioMaker2() {
        return this.gameContainer.isInSuperMarioMaker2;
    }

    //endregion -------------------- Game properties --------------------

}
