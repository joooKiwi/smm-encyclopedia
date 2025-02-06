import type {Singleton} from '@joookiwi/enumerable'
import type {NullOr}    from '@joookiwi/type'
import {Enum}           from '@joookiwi/enumerable'

import type {ClassWithType}                         from 'core/ClassWithType'
import type {CompanionEnumDeclaration_ViewDisplays} from 'display/ViewDisplays.companionEnumDeclaration'
import type {Names, Ordinals, Type}                 from 'display/ViewDisplays.types'
import type {ClassUsedInRoute}                      from 'route/ClassUsedInRoute'
import type {ClassWithIsCurrent}                    from 'util/enumerable/ClassWithIsCurrent'

import {CompanionEnumWithCurrentAndSetCurrentEvent} from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEvent'

/** @usedByTheRouting */
export class ViewDisplays<const TYPE extends Type = Type,
    const ICON extends PossibleBootstrapIcon = PossibleBootstrapIcon, >
    extends Enum<Ordinals, Names>
    implements ClassWithType<TYPE>,
        ClassUsedInRoute<TYPE, TYPE>,
        ClassWithIsCurrent {

    //region -------------------- Enum instances --------------------

    public static readonly NONE =  new ViewDisplays('none', 'slash-circle',)
    public static readonly TABLE = new ViewDisplays('table', 'table',)
    public static readonly CARD =  new ViewDisplays('card', 'grid',)
    // public static readonly NAME =  new ViewDisplays('name', 'list-nested',)
    public static readonly LIST =  new ViewDisplays('list', 'list-ul',)

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
                return ViewDisplays.LIST
            // if (lowerCasedUrl.includes('/name/',))
            //     return ViewDisplays.NAME
            if (lowerCasedUrl.includes('/card/',))
                return ViewDisplays.CARD
            if (lowerCasedUrl.includes('/table/',))
                return ViewDisplays.TABLE
            return null
        }

        public findInName(name: string,): NullOr<ViewDisplays> {
            if (name.endsWith('(list)',) || name.includes('(list',))
                return ViewDisplays.LIST
            // if (name.endsWith('(name)',) || name.includes('(name',))
            //     return ViewDisplays.NAME
            if (name.endsWith('(card)',) || name.includes('(card',))
                return ViewDisplays.CARD
            if (name.endsWith('(table)',) || name.includes('(table',))
                return ViewDisplays.TABLE
            return null
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #type
    readonly #icon

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(type: TYPE, icon: ICON,) {
        super()
        this.#type = type
        this.#icon = icon
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get type(): TYPE {
        return this.#type
    }

    public get urlValue(): TYPE {
        return this.#type
    }

    public get urlName(): TYPE {
        return this.#type
    }

    public get icon(): ICON {
        return this.#icon
    }

    /** The current instance is the current one selected in the application */
    public get isCurrent(): boolean {
        return this === ViewDisplays.Companion.currentOrNull
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------
    //endregion -------------------- Methods --------------------

}

export namespace ViewDisplays {// eslint-disable-line @typescript-eslint/no-namespace

    /** The companion instance of a {@link ViewDisplays} */
    export const Companion = ViewDisplays.CompanionEnum.get

    export const ALL = Companion.values

}
