import type {CollectionHolder, EnumerableConstructor, PossibleValueByEnumerable} from '@joookiwi/enumerable/dist/types'
import type {Dispatch, SetStateAction}                                           from 'react'
import {Enum}                                                                    from '@joookiwi/enumerable'

import type {AbstractAppWithInterpreter}                 from 'app/withInterpreter/AbstractAppWithInterpreter'
import type {AbstractCardListApp}                        from 'app/withInterpreter/AbstractCardListApp'
import type {AbstractSimpleListApp}                      from 'app/withInterpreter/AbstractSimpleListApp'
import type {AbstractTableApp}                           from 'app/withInterpreter/AbstractTableApp'
import type {HTMLType, Names, Ordinals, RouteType, Type} from 'app/withInterpreter/ViewDisplays.types'
import type {ClassWithType}                              from 'core/ClassWithType'
import type {ClassWithIsCurrent}                         from 'util/enumerable/ClassWithIsCurrent'
import type {ReactElement}                               from 'util/react/ReactProperties'
import type {Nullable, NullOr}                           from 'util/types/nullable'

import {assert}                                 from 'util/utilitiesMethods'
import {ClassWithCurrentAndEventImplementation} from 'util/enumerable/ClassWithCurrentAndEvent.implementation'

/**
 * @usedByTheRouting
 */
export abstract class ViewDisplays
    extends Enum<Ordinals, Names>
    implements ClassWithType<Type>,
        ClassWithIsCurrent {

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
    //region -------------------- Companion --------------------

    /**
     * The reference of the static methods applicable to the class {@link ViewDisplays}
     *
     * @see https://kotlinlang.org/docs/object-declarations.html#companion-objects
     * @singleton
     */
    public static readonly Companion = class Companion_ViewDisplays extends ClassWithCurrentAndEventImplementation<ViewDisplays> {

        //region -------------------- Singleton usage --------------------

        static #instance?: Companion_ViewDisplays

        private constructor() {
            super(ViewDisplays,)
        }

        public static get get() {
            return this.#instance ??= new this()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion --------------------
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

    //region -------------------- Getter & setter methods (current) --------------------

    /** The current instance is the current one selected in the application */
    public get isCurrent(): boolean {
        return this === ViewDisplays.currentOrNull
    }


    /** Get the current {@link ViewDisplays view display} that may be initialized */
    public static get currentOrNull(): NullOr<ViewDisplays> {
        return this.Companion.get.currentOrNull
    }

    /**
     * Get the non-nullable current {@link ViewDisplays view display}
     *
     * @throws ReferenceError The current {@link ViewDisplays view display} has not been initialized yet
     */
    public static get current(): ViewDisplays {
        return this.Companion.get.current
    }

    /**
     * Set the current {@link ViewDisplays view display} held in the {@link ViewDisplays.Companion}
     *
     * @param value The {@link ViewDisplays view display} to set as the current one
     */
    public static set current(value: PossibleValueByEnumerable<ViewDisplays>,) {
        this.Companion.get.current = value
    }


    /** Get the current {@link ViewDisplays view display} event listener or <b>null</b> if it has not been initialized */
    public static get setCurrentEventOrNull(): NullOr<Dispatch<SetStateAction<NullOr<ViewDisplays>>>> {
        return this.Companion.get.onSetCurrentEventOrNull
    }

    /**
     * Get the non-nullable current {@link ViewDisplays view display} event listener
     *
     * @throws {ReferenceError} The event listener has not been initialized
     */
    public static get setCurrentEvent(): Dispatch<SetStateAction<NullOr<ViewDisplays>>> {
        return this.Companion.get.onSetCurrentEvent
    }

    /**
     * Initialize the event listener on the setting of the current {@link ViewDisplays view display}
     *
     * @param value The event listener to set
     * @shouldOnlyBeCalledOnce
     */
    public static set setCurrentEvent(value: Dispatch<SetStateAction<NullOr<ViewDisplays>>>,) {
        this.Companion.get.onSetCurrentEvent = value
    }

    //endregion -------------------- Getter & setter methods (current) --------------------

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
