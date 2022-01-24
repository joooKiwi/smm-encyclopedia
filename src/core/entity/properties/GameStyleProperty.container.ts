import type {ExtendedMap}       from '../../../util/extended/ExtendedMap';
import type {GameStyleProperty} from './GameStyleProperty';

import {ExtendedMapContainer} from '../../../util/extended/ExtendedMap.container';
import {GameStyles}           from '../../gameStyle/GameStyles';

/**
 * @multiton
 * @provider
 * @todo change GameStyles to a dynamic import
 */
export class GameStylePropertyContainer
    implements GameStyleProperty {

    //region -------------------- Predefined containers --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<ArgumentsReceived, GameStylePropertyContainer> = new ExtendedMapContainer();

    //endregion -------------------- Predefined containers --------------------
    //region -------------------- Container attributes, constructor & methods --------------------

    readonly #isInSuperMarioBrosStyle;
    readonly #isInSuperMarioBros3Style;
    readonly #isInSuperMarioWorldStyle;
    readonly #isInNewSuperMarioBrosUStyle;
    readonly #isInSuperMario3DWorldStyle;


    private constructor([isInSuperMarioBrosStyle, isInSuperMarioBros3Style, isInSuperMarioWorldStyle, isInNewSuperMarioBrosUStyle, isInSuperMario3DWorldStyle,]: ArgumentsReceived,) {
        this.#isInSuperMarioBrosStyle = isInSuperMarioBrosStyle;
        this.#isInSuperMarioBros3Style = isInSuperMarioBros3Style;
        this.#isInSuperMarioWorldStyle = isInSuperMarioWorldStyle;
        this.#isInNewSuperMarioBrosUStyle = isInNewSuperMarioBrosUStyle;
        this.#isInSuperMario3DWorldStyle = isInSuperMario3DWorldStyle;
    }


    public get isInSuperMarioBrosStyle() {
        return this.#isInSuperMarioBrosStyle;
    }

    public get isInSuperMarioBros3Style() {
        return this.#isInSuperMarioBros3Style;
    }

    public get isInSuperMarioWorldStyle() {
        return this.#isInSuperMarioWorldStyle;
    }

    public get isInNewSuperMarioBrosUStyle() {
        return this.#isInNewSuperMarioBrosUStyle;
    }

    public get isInSuperMario3DWorldStyle() {
        return this.#isInSuperMario3DWorldStyle;
    }


    public toGameStyleMap(): Map<GameStyles, boolean> {
        return new Map(GameStyles.values.map(gameStyle => [gameStyle, gameStyle.get(this),]));
    }

    //endregion -------------------- Container attributes, constructor & methods --------------------
    //region -------------------- Provider / Multiton method --------------------

    public static get<SMB extends boolean = boolean, SMB3 extends boolean = boolean, SMW extends boolean = boolean, NSMBU extends boolean = boolean, SM3DW extends | boolean | null = | boolean | null, >(isInSuperMarioBrosStyle: SMB, isInSuperMarioBros3Style: SMB3, isInSuperMarioWorldStyle: SMW, isInNewSuperMarioBrosUStyle: NSMBU, isInSuperMario3DWorldStyle: SM3DW,): GameStyleProperty<SMB, SMB3, SMW, NSMBU, SM3DW>
    /**
     * Get a property instance based on the {@link GameStyles} properties.
     *
     * @param argumentsReceived
     * @noDuplicateInstanceCreation
     */
    public static get(...argumentsReceived: ArgumentsReceived) {
        return this.#EVERY_CONTAINERS.if(map => map.has(argumentsReceived))
            .isNotMet(map => map.set(argumentsReceived, new this(argumentsReceived,)))
            .get(argumentsReceived);
    }

    //endregion -------------------- Provider / Multiton method --------------------

}

type ArgumentsReceived = readonly [isInSuperMarioBrosStyle: boolean, isInSuperMarioBros3Style: boolean, isInSuperMarioWorldStyle: boolean, isInNewSuperMarioBrosUStyle: boolean, isInSuperMario3DWorldStyle: | boolean | null,];
