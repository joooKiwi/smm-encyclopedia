import type {Singleton}                            from '@joookiwi/enumerable'
import type {NullableString, NullOr, NullOrString} from '@joookiwi/type'
import {Enum}                                      from '@joookiwi/enumerable'

import type {CompanionEnumDeclaration_ViewDisplays}   from 'app/withInterpreter/ViewDisplays.companionEnumDeclaration'
import type {Names, Ordinals, PossibleUrlValue, Type} from 'app/withInterpreter/ViewDisplays.types'
import type {ClassWithType}                           from 'core/ClassWithType'
import type {ClassUsedInRoute}                        from 'route/ClassUsedInRoute'
import type {ClassWithIsCurrent}                      from 'util/enumerable/ClassWithIsCurrent'

import {CompanionEnumWithCurrentAndSetCurrentEvent} from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEvent'

/** @usedByTheRouting */
export abstract class ViewDisplays<const TYPE extends Type = Type,
    const URL extends PossibleUrlValue = PossibleUrlValue,>
    extends Enum<Ordinals, Names>
    implements ClassWithType<TYPE>,
        ClassUsedInRoute<URL, URL>,
        ClassWithIsCurrent {

    //region -------------------- Enum instances --------------------

    public static readonly TABLE =       new class ViewDisplays_Table extends ViewDisplays<'table', 'table'> {

        protected override _getRoutePath<const PATH extends string, >(path: PATH,) {
            return `${path} (table)` as const
        }

    }('table', 'table', 'table',)
    // public static readonly NAME_LIST =   new class ViewDisplays_SimpleList extends ViewDisplays<'name-list', 'name'> {
    //
    //     protected override _getRoutePath<const PATH extends string, >(path: PATH,) {
    //         return `${path} (name)` as const
    //     }
    //
    // }('name-list', 'name', 'list-nested',)
    public static readonly SIMPLE_LIST = new class ViewDisplays_SimpleList extends ViewDisplays<'simple-list', 'list'> {

        protected override _getRoutePath<const PATH extends string, >(path: PATH,) {
            return `${path} (list)` as const
        }

    }('simple-list', 'list', 'list-ul',)
    public static readonly CARD_LIST =   new class ViewDisplays_CardList extends ViewDisplays<'card-list', 'card'> {

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

        // public readonly URL_REGEX = /\/(table|list|card)\//i

        public getValueInUrl(url: string,): NullOr<ViewDisplays> {
            const lowerCasedUrl = url.toLowerCase()
            if (lowerCasedUrl.includes('/list/',))
                return ViewDisplays.SIMPLE_LIST
            if (lowerCasedUrl.includes('/card/',))
                return ViewDisplays.CARD_LIST
            if (lowerCasedUrl.includes('/table/',))
                return ViewDisplays.TABLE
            return null
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #type
    readonly #url
    readonly #htmlType

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(type: TYPE, url: URL, htmlType: PossibleBootstrapIcon,) {
        super()
        this.#type = type
        this.#url = url
        this.#htmlType = htmlType
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get type(): TYPE {
        return this.#type
    }

    public get urlValue(): URL {
        return this.#url
    }

    public get urlName(): URL {
        return this.#url
    }

    public get htmlType(): PossibleBootstrapIcon {
        return this.#htmlType
    }

    /** The current instance is the current one selected in the application */
    public get isCurrent(): boolean {
        return this === ViewDisplays.CompanionEnum.get.currentOrNull
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    /**
     * Get a route path with the type in parentheses
     *
     * @param path The nullable path to get its types
     */
    public getRoutePath<const PATH extends string, >(path: NullableString<PATH>,): NullOrString<PossibleRoutePath<PATH>> {
        return path == null ? null : this._getRoutePath(path,)
    }

    protected abstract _getRoutePath<const PATH extends string, >(path: PATH,): PossibleRoutePath<PATH>

    //endregion -------------------- Methods --------------------

}

type PossibleRoutePath<PATH extends string, > = `${PATH} (${| 'list' | 'card' | 'table'})`
// type PossibleRoutePath<PATH extends string, > = `${PATH} (${| 'name' | 'list' | 'card' | 'table'})`//TODO add the name list
