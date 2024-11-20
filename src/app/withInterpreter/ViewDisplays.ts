import type {Singleton} from '@joookiwi/enumerable'
import type {NullOr}    from '@joookiwi/type'
import {Enum}           from '@joookiwi/enumerable'

import type {CompanionEnumDeclaration_ViewDisplays}   from 'app/withInterpreter/ViewDisplays.companionEnumDeclaration'
import type {Names, Ordinals, PossibleUrlValue, Type} from 'app/withInterpreter/ViewDisplays.types'
import type {ClassWithType}                           from 'core/ClassWithType'
import type {ClassUsedInRoute}                        from 'route/ClassUsedInRoute'
import type {ClassWithIsCurrent}                      from 'util/enumerable/ClassWithIsCurrent'

import {CompanionEnumWithCurrentAndSetCurrentEvent} from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEvent'

/** @usedByTheRouting */
export class ViewDisplays<const TYPE extends Type = Type,
    const URL extends PossibleUrlValue = PossibleUrlValue,>
    extends Enum<Ordinals, Names>
    implements ClassWithType<TYPE>,
        ClassUsedInRoute<URL, URL>,
        ClassWithIsCurrent {

    //region -------------------- Enum instances --------------------

    public static readonly TABLE =       new ViewDisplays('table', 'table', 'table',)
    // public static readonly NAME_LIST =   new ViewDisplays('name-list', 'name', 'list-nested',)
    public static readonly SIMPLE_LIST = new ViewDisplays('simple-list', 'list', 'list-ul',)
    public static readonly CARD_LIST =   new ViewDisplays('card-list', 'card', 'card-list',)

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

        public findInUrl(url: string,): NullOr<ViewDisplays> {
            const lowerCasedUrl = url.toLowerCase()
            if (lowerCasedUrl.includes('/list/',))
                return ViewDisplays.SIMPLE_LIST
            if (lowerCasedUrl.includes('/card/',))
                return ViewDisplays.CARD_LIST
            if (lowerCasedUrl.includes('/table/',))
                return ViewDisplays.TABLE
            return null
        }

        public findInName(name: string,): NullOr<ViewDisplays> {
            if (name.endsWith('(list)',) || name.includes('(list',))
                return ViewDisplays.SIMPLE_LIST
            if (name.endsWith('(card)',) || name.includes('(card',))
                return ViewDisplays.CARD_LIST
            if (name.endsWith('(table)',) || name.includes('(table',))
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
        return this === ViewDisplays.Companion.currentOrNull
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

export namespace ViewDisplays {

    /** The companion instance of a {@link ViewDisplays} */
    export const Companion = ViewDisplays.CompanionEnum.get

    export const ALL = [ViewDisplays.TABLE, ViewDisplays.CARD_LIST, /*ViewDisplays.NAME_LIST, */ViewDisplays.SIMPLE_LIST,] as const

}
