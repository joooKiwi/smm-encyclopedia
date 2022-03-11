import type {ExtendedMap}       from '../../../util/extended/ExtendedMap';
import type {GameStyleProperty} from './GameStyleProperty';

import {ExtendedMapContainer} from '../../../util/extended/ExtendedMap.container';
import {Import}               from '../../../util/DynamicImporter';
import type {GameStyles}      from '../../gameStyle/GameStyles';


/**
 * @multiton
 * @provider
 * @classWithDynamicImport @link GameStyles}
 */
export class GameStylePropertyContainer
    implements GameStyleProperty {

    //region -------------------- Attributes --------------------

    static readonly #EVERY_CONTAINERS: ExtendedMap<ArgumentsReceived, GameStyleProperty> = new ExtendedMapContainer();

    #map?: ReadonlyMap<GameStyles, boolean>;
    readonly #isInSuperMarioBrosStyle;
    readonly #isInSuperMarioBros3Style;
    readonly #isInSuperMarioWorldStyle;
    readonly #isInNewSuperMarioBrosUStyle;
    readonly #isInSuperMario3DWorldStyle;

    //endregion -------------------- Attributes --------------------

    private constructor([isInSuperMarioBrosStyle, isInSuperMarioBros3Style, isInSuperMarioWorldStyle, isInNewSuperMarioBrosUStyle, isInSuperMario3DWorldStyle,]: ArgumentsReceived,) {
        this.#isInSuperMarioBrosStyle = isInSuperMarioBrosStyle;
        this.#isInSuperMarioBros3Style = isInSuperMarioBros3Style;
        this.#isInSuperMarioWorldStyle = isInSuperMarioWorldStyle;
        this.#isInNewSuperMarioBrosUStyle = isInNewSuperMarioBrosUStyle;
        this.#isInSuperMario3DWorldStyle = isInSuperMario3DWorldStyle;
    }

    //region -------------------- Getter methods --------------------

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

    //endregion -------------------- Getter methods --------------------

    public toGameStyleMap(): ReadonlyMap<GameStyles, boolean> {
        return this.#map ??= new Map(Import.GameStyles.values.map(gameStyle => [gameStyle, gameStyle.get(this),]));
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
