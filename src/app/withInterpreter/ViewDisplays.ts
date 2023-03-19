import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {AbstractAppWithInterpreter}      from 'app/withInterpreter/AbstractAppWithInterpreter'
import type {AbstractCardListApp}             from 'app/withInterpreter/AbstractCardListApp'
import type {AbstractSimpleListApp}           from 'app/withInterpreter/AbstractSimpleListApp'
import type {AbstractTableApp}                from 'app/withInterpreter/AbstractTableApp'
import type {HTMLType, Names, Ordinals, Type} from 'app/withInterpreter/ViewDisplays.types'
import type {ClassWithType}                   from 'core/ClassWithType'
import type {ReactElement}                    from 'util/react/ReactProperties'

import {assert}           from 'util/utilitiesMethods'
import {Nullable, NullOr} from 'util/types/nullable'

export abstract class ViewDisplays
    extends Enum<Ordinals, Names>
    implements ClassWithType<Type> {

    //region -------------------- Enum instances --------------------

    public static readonly TABLE =       new class ViewDisplays_Table extends ViewDisplays {

        public override createComponent(app: PossibleApp,): ReactElement {
            assert('createTable' in app, 'The application does not handle a table creation.',)
            return app.createTable()
        }

        protected override _getRoutePath<PATH extends string, >(path: PATH,) {
            return `${path} (table)` as const
        }

    }('table', 'table', 'table',)
    public static readonly SIMPLE_LIST = new class ViewDisplays_SimpleList extends ViewDisplays {

        public override createComponent(app: PossibleApp,): ReactElement {
            assert('createList' in app, 'The application does not handle a "simple list" creation.',)
            return app.createList()
        }

        protected override _getRoutePath<PATH extends string, >(path: PATH,) {
            return `${path} (list)` as const
        }

    }('simple-list', 'list', 'list',)
    public static readonly CARD_LIST =   new class ViewDisplays_CardList extends ViewDisplays {

        public override createComponent(app: PossibleApp,): ReactElement {
            assert('createCardList' in app, 'The application does not handle a "card list" creation.',)
            return app.createCardList()
        }

        protected override _getRoutePath<PATH extends string, >(path: PATH,) {
            return `${path} (card)` as const
        }

    }('card-list', 'card', 'card-list',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: ViewDisplays

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #type
    readonly #routeType
    readonly #htmlType

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(type: Type, routeType: RouteType, htmlType: HTMLType,) {
        super()
        this.#type = type
        this.#routeType = routeType
        this.#htmlType = htmlType
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get type(): Type {
        return this.#type
    }

    public get routeType(): RouteType {
        return this.#routeType
    }

    public get htmlType(): HTMLType {
        return this.#htmlType
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract createComponent(app: PossibleApp,): ReactElement

    /**
     * Get a route path with the type in parentheses
     *
     * @param path The nullable path to get its types
     */
    public getRoutePath<PATH extends string, >(path: Nullable<PATH>,): NullOr<PossibleRoutePath<PATH>> {
        return path == null ? null : this._getRoutePath(path)
    }

    /**
     * Get a route path with only the {@link ViewDisplays.SIMPLE_LIST} & {@link ViewDisplays.CARD_LIST}.
     *
     * @param path The nullable path to get its types
     * @throws {AssertionError} (only in development) It is the {@link ViewDisplays.TABLE} calling it
     */
    public getRoutePathAsListOnly<PATH extends string, >(path: Nullable<PATH>,): NullOr<PossibleListRoutePath<PATH>> {
        // @ts-ignore
        assert(this !== ViewDisplays.TABLE, 'The view display cannot be retrieved for a list only (simple & card) display',)
        return this.getRoutePath(path) as NullOr<PossibleListRoutePath<PATH>>
    }

    protected abstract _getRoutePath<PATH extends string, >(path: PATH,): PossibleRoutePath<PATH>

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): EnumerableConstructor<Ordinals, Names> {
        return ViewDisplays
    }

    public static getValue(value: PossibleValueByEnumerable<ViewDisplays>,): ViewDisplays {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): CollectionHolder<ViewDisplays> {
        return Enum.getValuesOn(this,)
    }

    public static* [Symbol.iterator](): IterableIterator<ViewDisplays> {
        yield* this.values
    }

    //endregion -------------------- Enum methods --------------------

}

type PossibleRoutePath<PATH extends string, > = `${PATH} (${| 'list' | 'card' | 'table'})`
type PossibleListRoutePath<PATH extends string, > = `${PATH} (${| 'list' | 'card'})`
type PossibleApp = | AbstractAppWithInterpreter<any> | AbstractSimpleListApp<any> | AbstractCardListApp<any> | AbstractTableApp<any>
