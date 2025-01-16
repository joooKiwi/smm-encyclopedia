import type {CollectionHolder} from '@joookiwi/collection'
import type {Singleton}        from '@joookiwi/enumerable'
import type {Nullable}         from '@joookiwi/type'
import {CompanionEnum, Enum}   from '@joookiwi/enumerable'

import type {CharactersEquivalencesMap, Names, Ordinals, PossibleSingleCharacter, TextInBraces, TextInBrackets, TextInParentheses, VariableCharacterByCharacter, VariableCharacterByString, VariableValueByBoolean, SpaceUnevenCharacter, SpaceEvenCharacter, TextInChevrons} from 'lang/Characters.types'
import type {CompanionEnum_Characters as CompanionEnumDeclaration_Characters}                                                                                                                                                                                                 from 'lang/Characters.companionEnumDeclaration'

import {ArrayAsCollection} from 'util/collection/ArrayAsCollection'

export class Characters<const SPACE_UNEVEN_CHARACTER extends SpaceUnevenCharacter = SpaceUnevenCharacter,
    const SPACE_EVEN_CHARACTER extends SpaceEvenCharacter = SpaceEvenCharacter,>
    extends Enum<Ordinals, Names> {

    //region -------------------- Enum instances --------------------

    public static readonly POINT =                new Characters('.',  '．',)
    public static readonly INTERROGATION_POINT =  new Characters('?',  '？',)
    public static readonly EXCLAMATION_POINT =    new Characters('!',  '！',)
    public static readonly COLON =                new Characters(':',  '：',)
    public static readonly SEMICOLON =            new Characters(';',  '；',)
    public static readonly COMMA =                new Characters(',',  '，',)
    public static readonly UNION_TRAIT =          new Characters('-',  '－',)

    public static readonly COMMERCIAL_AND =       new Characters('&',  '＆',)

    public static readonly STARTING_PARENTHESIS = new Characters('(',  '（',)
    public static readonly ENDING_PARENTHESIS =   new Characters(')',  '）',)
    public static readonly STARTING_BRACKET =     new Characters('[',  '［',)
    public static readonly ENDING_BRACKET =       new Characters(']',  '］',)
    public static readonly STARTING_BRACE =       new Characters('{',  '｛',)
    public static readonly ENDING_BRACE =         new Characters('}',  '｝',)
    public static readonly STARTING_CHEVRON =     new Characters('⟨',  '＜',)
    public static readonly ENDING_CHEVRON =       new Characters('⟩',  '＞',)

    public static readonly SLASH =                new Characters('/',  '／',)
    public static readonly VERTICAL_SLASH =       new Characters('|',  '｜',)

    public static readonly UPPER_LETTER_A =       new Characters('A', 'Ａ',)
    public static readonly LOWER_LETTER_A =       new Characters('a', 'ａ',)
    public static readonly UPPER_LETTER_B =       new Characters('B', 'Ｂ',)
    public static readonly LOWER_LETTER_B =       new Characters('b', 'ｂ',)
    public static readonly UPPER_LETTER_C =       new Characters('C', 'Ｃ',)
    public static readonly LOWER_LETTER_C =       new Characters('c', 'ｃ',)
    public static readonly UPPER_LETTER_D =       new Characters('D', 'Ｄ',)
    public static readonly LOWER_LETTER_D =       new Characters('d', 'ｄ',)
    public static readonly UPPER_LETTER_E =       new Characters('E', 'Ｅ',)
    public static readonly LOWER_LETTER_E =       new Characters('e', 'ｅ',)
    public static readonly UPPER_LETTER_F =       new Characters('F', 'Ｆ',)
    public static readonly LOWER_LETTER_F =       new Characters('f', 'ｆ',)
    public static readonly UPPER_LETTER_G =       new Characters('G', 'Ｇ',)
    public static readonly LOWER_LETTER_G =       new Characters('g', 'ｇ',)
    public static readonly UPPER_LETTER_H =       new Characters('H', 'Ｈ',)
    public static readonly LOWER_LETTER_H =       new Characters('h', 'ｈ',)
    public static readonly UPPER_LETTER_I =       new Characters('I', 'Ｉ',)
    public static readonly LOWER_LETTER_I =       new Characters('i', 'ｉ',)
    public static readonly UPPER_LETTER_J =       new Characters('J', 'Ｊ',)
    public static readonly LOWER_LETTER_J =       new Characters('j', 'ｊ',)
    public static readonly UPPER_LETTER_K =       new Characters('K', 'Ｋ',)
    public static readonly LOWER_LETTER_K =       new Characters('k', 'ｋ',)
    public static readonly UPPER_LETTER_L =       new Characters('L', 'Ｌ',)
    public static readonly LOWER_LETTER_L =       new Characters('l', 'ｌ',)
    public static readonly UPPER_LETTER_M =       new Characters('M', 'Ｍ',)
    public static readonly LOWER_LETTER_M =       new Characters('m', 'ｍ',)
    public static readonly UPPER_LETTER_N =       new Characters('N', 'Ｎ',)
    public static readonly LOWER_LETTER_N =       new Characters('n', 'ｎ',)
    public static readonly UPPER_LETTER_O =       new Characters('O', 'Ｏ',)
    public static readonly LOWER_LETTER_O =       new Characters('o', 'ｏ',)
    public static readonly UPPER_LETTER_P =       new Characters('P', 'Ｐ',)
    public static readonly LOWER_LETTER_P =       new Characters('p', 'ｐ',)
    public static readonly UPPER_LETTER_Q =       new Characters('Q', 'Ｑ',)
    public static readonly LOWER_LETTER_Q =       new Characters('q', 'ｑ',)
    public static readonly UPPER_LETTER_R =       new Characters('R', 'Ｒ',)
    public static readonly LOWER_LETTER_R =       new Characters('r', 'ｒ',)
    public static readonly UPPER_LETTER_S =       new Characters('S', 'Ｓ',)
    public static readonly LOWER_LETTER_S =       new Characters('s', 'ｓ',)
    public static readonly UPPER_LETTER_T =       new Characters('T', 'Ｔ',)
    public static readonly LOWER_LETTER_T =       new Characters('t', 'ｔ',)
    public static readonly UPPER_LETTER_U =       new Characters('U', 'Ｕ',)
    public static readonly LOWER_LETTER_U =       new Characters('u', 'ｕ',)
    public static readonly UPPER_LETTER_V =       new Characters('V', 'Ｖ',)
    public static readonly LOWER_LETTER_V =       new Characters('v', 'ｖ',)
    public static readonly UPPER_LETTER_W =       new Characters('W', 'Ｗ',)
    public static readonly LOWER_LETTER_W =       new Characters('w', 'ｗ',)
    public static readonly UPPER_LETTER_X =       new Characters('X', 'Ｘ',)
    public static readonly LOWER_LETTER_X =       new Characters('x', 'ｘ',)
    public static readonly UPPER_LETTER_Y =       new Characters('Y', 'Ｙ',)
    public static readonly LOWER_LETTER_Y =       new Characters('y', 'ｙ',)
    public static readonly UPPER_LETTER_Z =       new Characters('Z', 'Ｚ',)
    public static readonly LOWER_LETTER_Z =       new Characters('z', 'ｚ',)

    public static readonly NUMBER_0 =             new Characters('0',  '０',)
    public static readonly NUMBER_1 =             new Characters('1',  '１',)
    public static readonly NUMBER_2 =             new Characters('2',  '２',)
    public static readonly NUMBER_3 =             new Characters('3',  '３',)
    public static readonly NUMBER_4 =             new Characters('4',  '４',)
    public static readonly NUMBER_5 =             new Characters('5',  '５',)
    public static readonly NUMBER_6 =             new Characters('6',  '６',)
    public static readonly NUMBER_7 =             new Characters('7',  '７',)
    public static readonly NUMBER_8 =             new Characters('8',  '８',)
    public static readonly NUMBER_9 =             new Characters('9',  '９',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<CompanionEnumDeclaration_Characters> = class CompanionEnum_Characters
        extends CompanionEnum<Characters, typeof Characters>
        implements CompanionEnumDeclaration_Characters {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Characters

        private constructor() {
            super(Characters,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Characters()
        }

        //endregion -------------------- Singleton usage --------------------


        public getCharacter<const B extends boolean, const C extends PossibleSingleCharacter, >(isSpaceEven: B, value: C,): VariableCharacterByCharacter<B, C>
        public getCharacter<const B extends boolean, const C extends string, >(isSpaceEven: B, value: C,): VariableCharacterByString<B, C>
        public getCharacter(isSpaceEven: boolean, value: string,) {
            return this.getValueByCharacter(value,).getCharacter(isSpaceEven,)
        }

        public getValueByCharacter(value: Nullable<| Characters | string>,): Characters {
            if (value == null)
                throw new TypeError(`No "${this.instance.name}" could be found by a null character.`,)
            if (value instanceof this.instance)
                return value
            const valueFound = this.values.findFirstOrNull(it =>
                it.spaceEvenCharacter === value
                || it.spaceUnevenCharacter === value,)
            if (valueFound == null)
                throw new ReferenceError(`No "${this.instance.name}" could be found by ths value "${value}".`,)
            return valueFound
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static #SPACE_EVEN_OBJECT_MAP?: CharactersEquivalencesMap

    readonly #spaceEvenCharacter: SPACE_EVEN_CHARACTER
    readonly #spaceUnevenCharacter: SPACE_UNEVEN_CHARACTER

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(spaceUnevenCharacter: SPACE_UNEVEN_CHARACTER, spaceEvenCharacter: SPACE_EVEN_CHARACTER,) {
        super()
        this.#spaceEvenCharacter = spaceEvenCharacter
        this.#spaceUnevenCharacter = spaceUnevenCharacter
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get spaceEvenCharacter(): SPACE_EVEN_CHARACTER {
        return this.#spaceEvenCharacter
    }

    public get spaceUnevenCharacter(): SPACE_UNEVEN_CHARACTER {
        return this.#spaceUnevenCharacter
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public getCharacter<B extends boolean, >(isSpaceEven: B,): VariableValueByBoolean<B, SPACE_EVEN_CHARACTER, SPACE_UNEVEN_CHARACTER>
    public getCharacter(isSpaceEven: boolean,) {
        return isSpaceEven ? this.spaceEvenCharacter : this.spaceUnevenCharacter
    }

    /**
     * An equivalence {@link Object object map} of every character used in the {@link Characters} enum.
     */
    public static get equivalenceMapObject(): CharactersEquivalencesMap {
        if (this.#SPACE_EVEN_OBJECT_MAP != null)
            return this.#SPACE_EVEN_OBJECT_MAP

        const spaceEvenObjectMap: Partial<CharactersEquivalencesMap> = {}
        Characters.Companion.values.forEach(it => {
            const spaceEvenCharacter = it.spaceEvenCharacter
            const spaceUnevenCharacter = it.spaceUnevenCharacter
            Reflect.set(spaceEvenObjectMap, spaceEvenCharacter, spaceUnevenCharacter,)
            Reflect.set(spaceEvenObjectMap, spaceUnevenCharacter, spaceEvenCharacter,)
        },)
        return this.#SPACE_EVEN_OBJECT_MAP = spaceEvenObjectMap as CharactersEquivalencesMap
    }

    //endregion -------------------- Methods --------------------

}

export namespace Characters {

    /** The companion instance of a {@link Characters} */
    export const Companion = Characters.CompanionEnum.get

    //region -------------------- Utility methods --------------------

    function __getBothEvenAndUnevenCharacters<const T extends Characters, >(characters: CollectionHolder<T>,): CollectionHolder<T[| 'spaceEvenCharacter' | 'spaceUnevenCharacter']>
    function __getBothEvenAndUnevenCharacters(characters: CollectionHolder<Characters>,): CollectionHolder<PossibleSingleCharacter> {
        return new ArrayAsCollection(characters.map(it => [it.spaceUnevenCharacter, it.spaceEvenCharacter,],).toArray().flat(),)
    }

    function __getOnlyUnevenCharacter<const T extends Characters, >(characters: CollectionHolder<T>,): CollectionHolder<T['spaceUnevenCharacter']>
    function __getOnlyUnevenCharacter(characters: CollectionHolder<Characters>,): CollectionHolder<SpaceUnevenCharacter> {
        return characters.map(it => it.spaceUnevenCharacter,)
    }

    function __getOnlyEvenCharacter<const T extends Characters, >(characters: CollectionHolder<T>,): CollectionHolder<T['spaceEvenCharacter']>
    function __getOnlyEvenCharacter(characters: CollectionHolder<Characters>,): CollectionHolder<SpaceEvenCharacter> {
        return characters.map(it => it.spaceEvenCharacter,)
    }


    function __textInBetween<const B extends boolean, const START extends Characters, const TEXT extends string, const END extends Characters, >(isSpaceEven: B, start: START, text: TEXT, end: END,): VariableValueByBoolean<B, `${START['spaceEvenCharacter']}${TEXT}${END['spaceEvenCharacter']}`, `${START['spaceUnevenCharacter']}${TEXT}${END['spaceUnevenCharacter']}`>
    function __textInBetween(isSpaceEven: boolean, start: Characters, text: string, end: Characters,) {
        return `${start.getCharacter(isSpaceEven,)}${text}${end.getCharacter(isSpaceEven,)}`
    }

    //endregion -------------------- Utility methods --------------------

    //region -------------------- Specific characters (point) --------------------

    export const POINTS = new ArrayAsCollection([Characters.POINT, Characters.INTERROGATION_POINT, Characters.EXCLAMATION_POINT, Characters.COLON, Characters.SEMICOLON,],)
    export const ALL_POINTS =          __getBothEvenAndUnevenCharacters(POINTS,)
    export const POINTS_SPACE_EVEN =   __getOnlyEvenCharacter(POINTS,)
    export const POINTS_SPACE_UNEVEN = __getOnlyUnevenCharacter(POINTS,)

    export function getPoints<const B extends boolean, >(isSpaceEven: B,): VariableValueByBoolean<B, typeof POINTS_SPACE_EVEN, typeof POINTS_SPACE_UNEVEN>
    export function getPoints(isSpaceEven: boolean,) {
        return isSpaceEven ? POINTS_SPACE_EVEN : POINTS_SPACE_UNEVEN
    }

    //endregion -------------------- Specific characters (point) --------------------
    //region -------------------- Specific characters (parentheses) --------------------

    export const PARENTHESES = new ArrayAsCollection([Characters.STARTING_PARENTHESIS, Characters.ENDING_PARENTHESIS,],)
    export const ALL_PARENTHESES =          __getBothEvenAndUnevenCharacters(PARENTHESES,)
    export const PARENTHESES_SPACE_EVEN =   __getOnlyEvenCharacter(PARENTHESES,)
    export const PARENTHESES_SPACE_UNEVEN = __getOnlyUnevenCharacter(PARENTHESES,)

    export function getParentheses<const B extends boolean, >(isSpaceEven: B,): VariableValueByBoolean<B, typeof PARENTHESES_SPACE_EVEN, typeof PARENTHESES_SPACE_UNEVEN>
    export function getParentheses(isSpaceEven: boolean,) {
        return isSpaceEven ? PARENTHESES_SPACE_EVEN : PARENTHESES_SPACE_UNEVEN
    }

    //endregion -------------------- Specific characters (parentheses) --------------------
    //region -------------------- Specific characters (bracket) --------------------

    export const BRACKETS = new ArrayAsCollection([Characters.STARTING_BRACKET, Characters.ENDING_BRACKET,],)
    export const ALL_BRACKETS =          __getBothEvenAndUnevenCharacters(BRACKETS,)
    export const BRACKETS_SPACE_EVEN =   __getOnlyEvenCharacter(BRACKETS,)
    export const BRACKETS_SPACE_UNEVEN = __getOnlyUnevenCharacter(BRACKETS,)

    export function getBrackets<const B extends boolean, >(isSpaceEven: B,): VariableValueByBoolean<B, typeof BRACKETS_SPACE_EVEN, typeof BRACKETS_SPACE_UNEVEN>
    export function getBrackets(isSpaceEven: boolean,) {
        return isSpaceEven ? BRACKETS_SPACE_EVEN : BRACKETS_SPACE_UNEVEN
    }

    //endregion -------------------- Specific characters (bracket) --------------------
    //region -------------------- Specific characters (brace) --------------------

    export const BRACES = new ArrayAsCollection([Characters.STARTING_BRACE, Characters.ENDING_BRACE,],)
    export const ALL_BRACES =          __getBothEvenAndUnevenCharacters(BRACES,)
    export const BRACES_SPACE_EVEN =   __getOnlyEvenCharacter(BRACES,)
    export const BRACES_SPACE_UNEVEN = __getOnlyUnevenCharacter(BRACES,)

    export function getBraces<const B extends boolean, >(isSpaceEven: B,): VariableValueByBoolean<B, typeof BRACES_SPACE_EVEN, typeof BRACES_SPACE_UNEVEN>
    export function getBraces(isSpaceEven: boolean,) {
        return isSpaceEven ? BRACES_SPACE_EVEN : BRACES_SPACE_UNEVEN
    }

    //endregion -------------------- Specific characters (brace) --------------------
    //region -------------------- Specific characters (chevron) --------------------

    export const CHEVRONS = new ArrayAsCollection([Characters.STARTING_CHEVRON, Characters.ENDING_CHEVRON,],)
    export const ALL_CHEVRONS =          __getBothEvenAndUnevenCharacters(CHEVRONS,)
    export const CHEVRONS_SPACE_EVEN =   __getOnlyEvenCharacter(CHEVRONS,)
    export const CHEVRONS_SPACE_UNEVEN = __getOnlyUnevenCharacter(CHEVRONS,)

    export function getChevrons<const B extends boolean, >(isSpaceEven: B,): VariableValueByBoolean<B, typeof CHEVRONS_SPACE_EVEN, typeof CHEVRONS_SPACE_UNEVEN>
    export function getChevrons(isSpaceEven: boolean,) {
        return isSpaceEven ? CHEVRONS_SPACE_EVEN : CHEVRONS_SPACE_UNEVEN
    }

    //endregion -------------------- Specific characters (chevron) --------------------
    //region -------------------- Specific characters (slash) --------------------

    export const SLASHES = new ArrayAsCollection([Characters.SLASH, Characters.VERTICAL_SLASH,],)
    export const ALL_SLASHES =          __getBothEvenAndUnevenCharacters(SLASHES,)
    export const SLASHES_SPACE_EVEN =   __getOnlyEvenCharacter(SLASHES,)
    export const SLASHES_SPACE_UNEVEN = __getOnlyUnevenCharacter(SLASHES,)

    export function getSlashes<const B extends boolean, >(isSpaceEven: B,): VariableValueByBoolean<B, typeof SLASHES_SPACE_EVEN, typeof SLASHES_SPACE_UNEVEN>
    export function getSlashes(isSpaceEven: boolean,) {
        return isSpaceEven ? SLASHES_SPACE_EVEN : SLASHES_SPACE_UNEVEN
    }

    //endregion -------------------- Specific characters (slash) --------------------
    //region -------------------- Specific characters (letter) --------------------

    export const LETTERS = new ArrayAsCollection([
        Characters.UPPER_LETTER_A, Characters.LOWER_LETTER_A,
        Characters.UPPER_LETTER_B, Characters.LOWER_LETTER_B,
        Characters.UPPER_LETTER_C, Characters.LOWER_LETTER_C,
        Characters.UPPER_LETTER_D, Characters.LOWER_LETTER_D,
        Characters.UPPER_LETTER_E, Characters.LOWER_LETTER_E,
        Characters.UPPER_LETTER_F, Characters.LOWER_LETTER_F,
        Characters.UPPER_LETTER_G, Characters.LOWER_LETTER_G,
        Characters.UPPER_LETTER_H, Characters.LOWER_LETTER_H,
        Characters.UPPER_LETTER_I, Characters.LOWER_LETTER_I,
        Characters.UPPER_LETTER_J, Characters.LOWER_LETTER_J,
        Characters.UPPER_LETTER_K, Characters.LOWER_LETTER_K,
        Characters.UPPER_LETTER_L, Characters.LOWER_LETTER_L,
        Characters.UPPER_LETTER_M, Characters.LOWER_LETTER_M,
        Characters.UPPER_LETTER_N, Characters.LOWER_LETTER_N,
        Characters.UPPER_LETTER_O, Characters.LOWER_LETTER_O,
        Characters.UPPER_LETTER_P, Characters.LOWER_LETTER_P,
        Characters.UPPER_LETTER_Q, Characters.LOWER_LETTER_Q,
        Characters.UPPER_LETTER_R, Characters.LOWER_LETTER_R,
        Characters.UPPER_LETTER_S, Characters.LOWER_LETTER_S,
        Characters.UPPER_LETTER_T, Characters.LOWER_LETTER_T,
        Characters.UPPER_LETTER_U, Characters.LOWER_LETTER_U,
        Characters.UPPER_LETTER_V, Characters.LOWER_LETTER_V,
        Characters.UPPER_LETTER_W, Characters.LOWER_LETTER_W,
        Characters.UPPER_LETTER_X, Characters.LOWER_LETTER_X,
        Characters.UPPER_LETTER_Y, Characters.LOWER_LETTER_Y,
        Characters.UPPER_LETTER_Z, Characters.LOWER_LETTER_Z,
    ],)
    export const ALL_LETTERS =          __getBothEvenAndUnevenCharacters(LETTERS,)
    export const LETTERS_SPACE_EVEN =   __getOnlyEvenCharacter(LETTERS,)
    export const LETTERS_SPACE_UNEVEN = __getOnlyUnevenCharacter(LETTERS,)

    export function getLetters<const B extends boolean, >(isSpaceEven: B,): VariableValueByBoolean<B, typeof LETTERS_SPACE_EVEN, typeof LETTERS_SPACE_UNEVEN>
    export function getLetters(isSpaceEven: boolean,) {
        return isSpaceEven ? LETTERS_SPACE_EVEN : LETTERS_SPACE_UNEVEN
    }

    export const UPPER_LETTERS = new ArrayAsCollection([
        Characters.UPPER_LETTER_A, Characters.UPPER_LETTER_B, Characters.UPPER_LETTER_C, Characters.UPPER_LETTER_D, Characters.UPPER_LETTER_E,
        Characters.UPPER_LETTER_F, Characters.UPPER_LETTER_G, Characters.UPPER_LETTER_H, Characters.UPPER_LETTER_I, Characters.UPPER_LETTER_J,
        Characters.UPPER_LETTER_K, Characters.UPPER_LETTER_L, Characters.UPPER_LETTER_M, Characters.UPPER_LETTER_N, Characters.UPPER_LETTER_O,
        Characters.UPPER_LETTER_P, Characters.UPPER_LETTER_Q, Characters.UPPER_LETTER_R, Characters.UPPER_LETTER_S, Characters.UPPER_LETTER_T,
        Characters.UPPER_LETTER_U, Characters.UPPER_LETTER_V, Characters.UPPER_LETTER_W, Characters.UPPER_LETTER_X, Characters.UPPER_LETTER_Y,
        Characters.UPPER_LETTER_Z,
    ],)
    export const ALL_UPPER_LETTERS =          __getBothEvenAndUnevenCharacters(UPPER_LETTERS,)
    export const UPPER_LETTERS_SPACE_EVEN =   __getOnlyEvenCharacter(UPPER_LETTERS,)
    export const UPPER_LETTERS_SPACE_UNEVEN = __getOnlyUnevenCharacter(UPPER_LETTERS,)

    export function getUppercaseLetters<const B extends boolean, >(isSpaceEven: B,): VariableValueByBoolean<B, typeof UPPER_LETTERS_SPACE_EVEN, typeof UPPER_LETTERS_SPACE_UNEVEN>
    export function getUppercaseLetters(isSpaceEven: boolean,) {
        return isSpaceEven ? UPPER_LETTERS_SPACE_EVEN : UPPER_LETTERS_SPACE_UNEVEN
    }

    export const LOWER_LETTERS = new ArrayAsCollection([
        Characters.LOWER_LETTER_A, Characters.LOWER_LETTER_B, Characters.LOWER_LETTER_C, Characters.LOWER_LETTER_D, Characters.LOWER_LETTER_E,
        Characters.LOWER_LETTER_F, Characters.LOWER_LETTER_G, Characters.LOWER_LETTER_H, Characters.LOWER_LETTER_I, Characters.LOWER_LETTER_J,
        Characters.LOWER_LETTER_K, Characters.LOWER_LETTER_L, Characters.LOWER_LETTER_M, Characters.LOWER_LETTER_N, Characters.LOWER_LETTER_O,
        Characters.LOWER_LETTER_P, Characters.LOWER_LETTER_Q, Characters.LOWER_LETTER_R, Characters.LOWER_LETTER_S, Characters.LOWER_LETTER_T,
        Characters.LOWER_LETTER_U, Characters.LOWER_LETTER_V, Characters.LOWER_LETTER_W, Characters.LOWER_LETTER_X, Characters.LOWER_LETTER_Y,
        Characters.LOWER_LETTER_Z,
    ],)
    export const ALL_LOWER_LETTERS =          __getBothEvenAndUnevenCharacters(LOWER_LETTERS,)
    export const LOWER_LETTERS_SPACE_EVEN =   __getOnlyEvenCharacter(LOWER_LETTERS,)
    export const LOWER_LETTERS_SPACE_UNEVEN = __getOnlyUnevenCharacter(LOWER_LETTERS,)

    export function getLowercaseLetters<const B extends boolean, >(isSpaceEven: B,): VariableValueByBoolean<B, typeof LOWER_LETTERS_SPACE_EVEN, typeof LOWER_LETTERS_SPACE_UNEVEN>
    export function getLowercaseLetters(isSpaceEven: boolean,) {
        return isSpaceEven ? LOWER_LETTERS_SPACE_EVEN : LOWER_LETTERS_SPACE_UNEVEN
    }

    //endregion -------------------- Specific characters (letter) --------------------
    //region -------------------- Specific characters (number) --------------------

    export const NUMBERS = new ArrayAsCollection([
        Characters.NUMBER_0, Characters.NUMBER_1, Characters.NUMBER_2, Characters.NUMBER_3, Characters.NUMBER_4,
        Characters.NUMBER_5, Characters.NUMBER_6, Characters.NUMBER_7, Characters.NUMBER_8, Characters.NUMBER_9,
    ],)
    export const NUMBERS_ARRAY =        __getBothEvenAndUnevenCharacters(NUMBERS,)
    export const NUMBERS_SPACE_EVEN =   __getOnlyEvenCharacter(NUMBERS,)
    export const NUMBERS_SPACE_UNEVEN = __getOnlyUnevenCharacter(NUMBERS,)

    export function getNumbers<const B extends boolean, >(isSpaceEven: B,): VariableValueByBoolean<B, typeof NUMBERS_SPACE_EVEN, typeof NUMBERS_SPACE_UNEVEN>
    export function getNumbers(isSpaceEven: boolean,) {
        return isSpaceEven ? NUMBERS_SPACE_EVEN : NUMBERS_SPACE_UNEVEN
    }

    //endregion -------------------- Specific characters (number) --------------------
    //region -------------------- Transformation methods --------------------

    export function textInParentheses<const B extends boolean, const S extends string, >(isSpaceEven: B, text: S,): TextInParentheses<B, S>
    export function textInParentheses(isSpaceEven: boolean, text: string,) {
        return __textInBetween(isSpaceEven, Characters.STARTING_PARENTHESIS, text, Characters.ENDING_PARENTHESIS,)
    }

    export function textInBrackets<const B extends boolean, const S extends string, >(isSpaceEven: B, text: S,): TextInBrackets<B, S>
    export function textInBrackets(isSpaceEven: boolean, text: string,) {
        return __textInBetween(isSpaceEven, Characters.STARTING_BRACKET, text, Characters.ENDING_BRACKET,)
    }

    export function textInBraces<const B extends boolean, const S extends string, >(isSpaceEven: B, text: S,): TextInBraces<B, S>
    export function textInBraces(isSpaceEven: boolean, text: string,) {
        return __textInBetween(isSpaceEven, Characters.STARTING_BRACE, text, Characters.ENDING_BRACE,)
    }

    export function textInChevrons<const B extends boolean, const S extends string, >(isSpaceEven: B, text: S,): TextInChevrons<B, S>
    export function textInChevrons(isSpaceEven: boolean, text: string,) {
        return __textInBetween(isSpaceEven, Characters.STARTING_CHEVRON, text, Characters.ENDING_CHEVRON,)
    }

    //endregion -------------------- Transformation methods --------------------

}
