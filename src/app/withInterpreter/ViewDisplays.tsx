import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {AbstractAppWithInterpreter}      from 'app/withInterpreter/AbstractAppWithInterpreter'
import type {AbstractCardListApp}             from 'app/withInterpreter/AbstractCardListApp'
import type {AbstractSimpleListApp}           from 'app/withInterpreter/AbstractSimpleListApp'
import type {AbstractTableApp}                from 'app/withInterpreter/AbstractTableApp'
import type {HTMLType, Names, Ordinals, Type} from 'app/withInterpreter/ViewDisplays.types'
import type {ReactElement}                    from 'util/react/ReactProperties'

import {assert} from 'util/utilitiesMethods'

export abstract class ViewDisplays
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly TABLE =       new class ViewDisplays_Table extends ViewDisplays {

        public override createComponent(app: PossibleApp,): ReactElement {
            assert('createTable' in app, 'The application does not handle a table creation.',)
            return app.createTable()
        }

    }('table', 'table',)
    public static readonly SIMPLE_LIST = new class ViewDisplays_SimpleList extends ViewDisplays {

        public override createComponent(app: PossibleApp,): ReactElement {
            assert('createList' in app, 'The application does not handle a "simple list" creation.',)
            return app.createList()
        }

    }('simple-list', 'list',)
    public static readonly CARD_LIST =   new class ViewDisplays_CardList extends ViewDisplays {

        public override createComponent(app: PossibleApp,): ReactElement {
            assert('createCardList' in app, 'The application does not handle a "card list" creation.',)
            return app.createCardList()
        }

    }('card-list', 'card-list',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: ViewDisplays

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #type
    readonly #htmlType

    //endregion -------------------- Fields --------------------

    private constructor(type: Type, htmlType: HTMLType,) {
        super()
        this.#type = type
        this.#htmlType = htmlType
    }

    //region -------------------- Getter methods --------------------

    public get type(): Type {
        return this.#type
    }

    public get htmlType(): HTMLType {
        return this.#htmlType
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract createComponent(app: PossibleApp,): ReactElement

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
            : <button key={`${key} (${this.name})`} className={`btn btn-dark bi-${this.htmlType} btn-viewDisplay`} onClick={() => callbackOnClick(this)}/>
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return ViewDisplays
    }

    public static getValue(value: PossibleValueByEnumerable<ViewDisplays>,): ViewDisplays {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<ViewDisplays> {
        return Enum.getValuesOn(this)
    }

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}

type PossibleApp = | AbstractAppWithInterpreter<any> | AbstractSimpleListApp<any> | AbstractCardListApp<any> | AbstractTableApp<any>
