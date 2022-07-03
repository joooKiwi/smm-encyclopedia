import type {AbstractAppWithInterpreter}                                                                                                                                                  from './AbstractAppWithInterpreter';
import type {AbstractCardListApp}                                                                                                                                                         from './AbstractCardListApp';
import type {AbstractSimpleListApp}                                                                                                                                                       from './AbstractSimpleListApp';
import type {AbstractTableApp}                                                                                                                                                            from './AbstractTableApp';
import type {StaticReference}                                                                                                                                                             from '../../util/enum/Enum.types';
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleValue, Type} from './ViewDisplays.types';
import {HTMLType}                                                                                                                                                                         from './ViewDisplays.types';
import type {ReactElement}                                                                                                                                                                from '../../util/react/ReactProperty';

import {Enum}   from '../../util/enum/Enum';
import {assert} from '../../util/utilitiesMethods';

export abstract class ViewDisplays
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly TABLE =       new class ViewDisplays_Table extends ViewDisplays {

        public override createComponent(app: PossibleApp,): ReactElement {
            assert('createTable' in app, 'The application does not handle a table creation.',);
            return app.createTable();
        }

    }('table', 'table',);
    public static readonly SIMPLE_LIST = new class ViewDisplays_SimpleList extends ViewDisplays {

        public override createComponent(app: PossibleApp,): ReactElement {
            assert('createList' in app, 'The application does not handle a "simple list" creation.',);
            return app.createList();
        }

    }('simple-list', 'list',);
    public static readonly CARD_LIST =   new class ViewDisplays_CardList extends ViewDisplays {

        public override createComponent(app: PossibleApp,): ReactElement {
            assert('createCardList' in app, 'The application does not handle a "card list" creation.',);
            return app.createCardList();
        }

    }('card-list', 'card-list',);

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum attributes --------------------

    static [index: number]: ViewDisplays;

    //endregion -------------------- Enum attributes --------------------
    //region -------------------- Attributes --------------------

    readonly #type;
    readonly #htmlType;

    //endregion -------------------- Attributes --------------------

    private constructor(type: Type, htmlType: HTMLType,) {
        super();
        this.#type = type;
        this.#htmlType = htmlType;
    }

    //region -------------------- Getter methods --------------------

    public get type(): Type {
        return this.#type;
    }

    public get htmlType(): HTMLType {
        return this.#htmlType;
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract createComponent(app: PossibleApp,): ReactElement;

    /**
     * Create a button to be used in a "button group" for displaying a specific "view display".
     *
     * @param currentValue the current value selected in the "button group"
     * @param key the react key
     * @param callbackOnClick the callback to call when clicking the button (to change the view)
     */
    public createButton(currentValue: ViewDisplays, key: string, callbackOnClick: (nextValue: ViewDisplays,) => void,): ReactElement {
        return this === currentValue
            ? <button key={`${key} (${this.name})`} className={`btn btn-success bi-${this.htmlType} btn-viewDisplay`} disabled/>
            : <button key={`${key} (${this.name})`} className={`btn btn-dark bi-${this.htmlType} btn-viewDisplay`} onClick={() => callbackOnClick(this)}/>;
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<ViewDisplays> {
        return ViewDisplays;
    }

    //region -------------------- Enum value methods --------------------

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends ViewDisplays = ViewDisplays, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): ViewDisplays
    public static getValue(value: PossibleValue,): | ViewDisplays | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,);
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this);
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]();
    }

    //endregion -------------------- Enum methods --------------------

}

type PossibleApp = | AbstractAppWithInterpreter<any> | AbstractSimpleListApp<any> | AbstractCardListApp<any> | AbstractTableApp<any>;
