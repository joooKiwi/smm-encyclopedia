import type {Singleton} from '@joookiwi/enumerable'
import {Enum}           from '@joookiwi/enumerable'

import type {AbstractAppWithInterpreter}                        from 'app/withInterpreter/AbstractAppWithInterpreter'
import type {AbstractCardListApp}                               from 'app/withInterpreter/AbstractCardListApp'
import type {AbstractSimpleListApp}                             from 'app/withInterpreter/AbstractSimpleListApp'
import type {AbstractTableApp}                                  from 'app/withInterpreter/AbstractTableApp'
import type {CompanionEnumDeclaration_ViewDisplays}             from 'app/withInterpreter/ViewDisplays.companionEnumDeclaration'
import type {HTMLType, Names, Ordinals, PossibleUrlValue, Type} from 'app/withInterpreter/ViewDisplays.types'
import type {ClassWithType}                                     from 'core/ClassWithType'
import type {ClassUsedInRoute}                                  from 'route/ClassUsedInRoute'
import type {ClassWithIsCurrent}                                from 'util/enumerable/ClassWithIsCurrent'

import {assert, getValueInUrl}                      from 'util/utilitiesMethods'
import {CompanionEnumWithCurrentAndSetCurrentEvent} from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEvent'

/** @usedByTheRouting */
export abstract class ViewDisplays
    extends Enum<Ordinals, Names>
    implements ClassWithType<Type>,
        ClassUsedInRoute<PossibleUrlValue>,
        ClassWithIsCurrent {

    //region -------------------- Enum instances --------------------

    public static readonly TABLE =       new class ViewDisplays_Table extends ViewDisplays {

        public override createComponent(app: PossibleApp,): ReactElement {
            assert('createTable' in app, 'The application does not handle a table creation.',)
            return app.createTable()
        }

        protected override _getRoutePath<const PATH extends string, >(path: PATH,) {
            return `${path} (table)` as const
        }

    }('table', 'table', 'table',)
    public static readonly SIMPLE_LIST = new class ViewDisplays_SimpleList extends ViewDisplays {

        public override createComponent(app: PossibleApp,): ReactElement {
            assert('createList' in app, 'The application does not handle a "simple list" creation.',)
            return app.createList()
        }

        protected override _getRoutePath<const PATH extends string, >(path: PATH,) {
            return `${path} (list)` as const
        }

    }('simple-list', 'list', 'list',)
    public static readonly CARD_LIST =   new class ViewDisplays_CardList extends ViewDisplays {

        public override createComponent(app: PossibleApp,): ReactElement {
            assert('createCardList' in app, 'The application does not handle a "card list" creation.',)
            return app.createCardList()
        }

        protected override _getRoutePath<const PATH extends string, >(path: PATH,) {
            return `${path} (card)` as const
        }

    }('card-list', 'card', 'card-list',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<CompanionEnumDeclaration_ViewDisplays> = class CompanionEnum_ViewDisplays
        extends CompanionEnumWithCurrentAndSetCurrentEvent<ViewDisplays, typeof ViewDisplays>
        implements CompanionEnumDeclaration_ViewDisplays {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_ViewDisplays

        private constructor() {
            super(ViewDisplays,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_ViewDisplays()
        }

        //endregion -------------------- Singleton usage --------------------

        public readonly URL_REGEX = /\/(table|list|card)\//i
        public readonly PREFIX = null

        public getValueInUrl(url: string): NullOr<ViewDisplays> {
            return getValueInUrl(url, this,);
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #type
    readonly #urlValue
    readonly #htmlType

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(type: Type, urlValue: PossibleUrlValue, htmlType: HTMLType,) {
        super()
        this.#type = type
        this.#urlValue = urlValue
        this.#htmlType = htmlType
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get type(): Type {
        return this.#type
    }

    public get urlValue(): PossibleUrlValue {
        return this.#urlValue
    }

    public get htmlType(): HTMLType {
        return this.#htmlType
    }

    /** The current instance is the current one selected in the application */
    public get isCurrent(): boolean {
        return this === ViewDisplays.CompanionEnum.get.currentOrNull
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract createComponent(app: PossibleApp,): ReactElement

    /**
     * Get a route path with the type in parentheses
     *
     * @param path The nullable path to get its types
     */
    public getRoutePath<const PATH extends string, >(path: Nullable<PATH>,): NullOr<PossibleRoutePath<PATH>> {
        return path == null ? null : this._getRoutePath(path)
    }

    /**
     * Get a route path with only the {@link ViewDisplays.SIMPLE_LIST} & {@link ViewDisplays.CARD_LIST}.
     *
     * @param path The nullable path to get its types
     * @throws {AssertionError} (only in development) It is the {@link ViewDisplays.TABLE} calling it
     */
    public getRoutePathAsListOnly<const PATH extends string, >(path: Nullable<PATH>,): NullOr<PossibleListRoutePath<PATH>>
    public getRoutePathAsListOnly(path: Nullable<string>,) {
        // @ts-ignore
        assert(this !== ViewDisplays.TABLE, 'The view display cannot be retrieved for a list only (simple & card) display',)
        return this.getRoutePath(path,)
    }

    protected abstract _getRoutePath<const PATH extends string, >(path: PATH,): PossibleRoutePath<PATH>

    //endregion -------------------- Methods --------------------

}

type PossibleRoutePath<PATH extends string, > = `${PATH} (${| 'list' | 'card' | 'table'})`
type PossibleListRoutePath<PATH extends string, > = `${PATH} (${| 'list' | 'card'})`
type PossibleApp = | AbstractAppWithInterpreter<any> | AbstractSimpleListApp<any> | AbstractCardListApp<any> | AbstractTableApp<any>
