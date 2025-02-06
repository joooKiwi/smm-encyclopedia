import type {Singleton} from '@joookiwi/enumerable'
import type {NullOr} from '@joookiwi/type'
import {Enum}        from '@joookiwi/enumerable'

import type {CompanionEnumDeclaration_ColorThemes}              from 'color/ColorThemes.companionEnumDeclaration'
import type {Names, Ordinals, PossibleColor, PossibleColorMode} from 'color/ColorThemes.types'
import type {ClassUsedInRoute}                                  from 'route/ClassUsedInRoute'
import type {ClassWithIsCurrent}                                from 'util/enumerable/ClassWithIsCurrent'

import {getValueInUrl}                              from 'util/utilitiesMethods'
import {CompanionEnumWithCurrentAndSetCurrentEvent} from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEvent'

export class ColorThemes
    extends Enum<Ordinals, Names>
    implements ClassUsedInRoute<PossibleColorMode, never>,
        ClassWithIsCurrent {

    //region -------------------- Enum instances --------------------

    public static readonly AUTOMATIC = new class ColorThemes_Automatic extends ColorThemes {

        public override get color(): PossibleColor { return ColorThemes.Companion.DARK_MEDIA_QUERY.matches ? 'dark' : 'light' }

        public override get mediaQuery(): never { throw new ReferenceError('The automatic color mode doesn\'t have an associated media query.',) }

        public override get isMediaQuerySelected(): false { return false }

        public override updateDomElement() {
            super.updateDomElement()
            document.documentElement.setAttribute('data-bs-theme', this.color,)
        }

    } ('auto',)
    public static readonly LIGHT = new ColorThemes('light',)
    public static readonly DARK = new ColorThemes('dark',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<CompanionEnumDeclaration_ColorThemes> = class CompanionEnum_ColorThemes
        extends CompanionEnumWithCurrentAndSetCurrentEvent<ColorThemes, typeof ColorThemes> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_ColorThemes

        private constructor() {
            super(ColorThemes,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_ColorThemes()
        }

        //endregion -------------------- Singleton usage --------------------

        protected override readonly _DEFAULT = ColorThemes.AUTOMATIC

        public readonly URL_REGEX = /\/color-(auto|light|dark)\//i
        public readonly PREFIX = 'color-'

        public readonly LIGHT_MEDIA_QUERY = window.matchMedia('(prefers-color-scheme: light)',)
        public readonly DARK_MEDIA_QUERY = window.matchMedia('(prefers-color-scheme: dark)',)

        public getValueInUrl(url: string,): NullOr<ColorThemes> { return getValueInUrl(url, this,) }

        protected override _onSetCurrent(value: ColorThemes,) {
            super._onSetCurrent(value,)
            document.documentElement.setAttribute('data-bs-theme', value.color,)
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #colorMode
    #mediaQuery?: MediaQueryList

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(colorMode: PossibleColorMode,) {
        super()
        this.#colorMode = colorMode
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get urlValue(): PossibleColorMode { return this.colorMode }

    public get urlName(): never { throw new ReferenceError('No color name exist in an url.') }

    public get colorMode(): PossibleColorMode {
        return this.#colorMode
    }

    public get color(): PossibleColor {
        return this.colorMode as PossibleColor
    }

    public get mediaQuery(): MediaQueryList {
        return this.#mediaQuery ??= this.color === 'dark' ? ColorThemes.Companion.DARK_MEDIA_QUERY : ColorThemes.Companion.LIGHT_MEDIA_QUERY
    }

    public get isMediaQuerySelected(): boolean {
        return this.mediaQuery.matches
    }

    public get isCurrent(): boolean {
        return this === ColorThemes.Companion.currentOrNull
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    /** Update the root DOM element (<html>) if it is {@link AUTOMATIC} with the user colour preference */
    public updateDomElement(): void {}

    //endregion -------------------- Methods --------------------

}

export namespace ColorThemes {// eslint-disable-line @typescript-eslint/no-namespace

    /** The companion instance of a {@link ColorThemes} */
    export const Companion = ColorThemes.CompanionEnum.get

    export const ALL = Companion.values

    export const LIGHT_MEDIA_QUERY = Companion.LIGHT_MEDIA_QUERY
    export const DARK_MEDIA_QUERY = Companion.DARK_MEDIA_QUERY

}
