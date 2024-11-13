import type {Singleton}                    from '@joookiwi/enumerable'
import type {Array, Nullable, StringArray} from '@joookiwi/type'
import {CompanionEnum, Enum}               from '@joookiwi/enumerable'

import type {Braces_Array, Braces_SpaceEven_Array, Braces_SpaceUneven_Array, Brackets_Array, Brackets_SpaceEven_Array, Brackets_SpaceUneven_Array, CharactersEquivalencesMap, Braces, Brackets, Numbers, Parentheses, Points, RomainAlphabet, Slashes, Letters_Array, LowercaseLetters_Array, LowercaseRomainAlphabet_SpaceEven_Array, LowercaseRomainAlphabet_SpaceUneven_Array, Names, Numbers_Array, Numbers_SpaceEven_Array, Numbers_SpaceUneven_Array, Ordinals, Parentheses_Array, Parentheses_SpaceEven_Array, Parentheses_SpaceUneven_Array, Points_Array, Points_SpaceEven_Array, Points_SpaceUneven_Array, PossibleBraces_Array, PossibleBrackets_Array, PossibleLowercaseRomainAlphabet_Array, PossibleMixedSpaceEvenCharacter_RomainAlphabet, PossibleMixedSpaceUnevenCharacter_RomainAlphabet, PossibleNumbers_Array, PossibleParentheses_Array, PossiblePoints_Array, PossibleSingleCharacter, PossibleSingleSpaceEvenCharacter_ExcludingRomainAlphabet, PossibleSingleSpaceUnevenCharacter_ExcludingRomainAlphabet, PossibleSlashes_Array, PossibleSpaceEvenCharacters, PossibleSpaceUnevenCharacters, PossibleUppercaseRomainAlphabet_Array, RomainAlphabet_SpaceEven_Array, RomainAlphabet_SpaceUneven_Array, Slashes_Array, Slashes_SpaceEven_Array, Slashes_SpaceUneven_Array, SpaceEvenCharacter_RomainAlphabet, SpaceUnevenCharacter_RomainAlphabet, TextInBraces, TextInBrackets, TextInParentheses, UppercaseLetters_Array, UppercaseRomainAlphabet_SpaceEven_Array, UppercaseRomainAlphabet_SpaceUneven_Array, VariableCharacterByCharacter, VariableCharacterByString, VariableCharactersByBoolean, VariableValueByBoolean} from 'lang/Characters.types'
import type {CompanionEnum_Characters as CompanionEnumDeclaration_Characters}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        from 'lang/Characters.companionEnumDeclaration'

export class Characters
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
    public static readonly STARTING_BRACKET =     new Characters('(',  '（',)
    public static readonly ENDING_BRACKET =       new Characters(')',  '）',)
    public static readonly STARTING_BRACE =       new Characters('(',  '（',)
    public static readonly ENDING_BRACE =         new Characters(')',  '）',)

    public static readonly SLASH =                new Characters('/',  '／',)
    public static readonly VERTICAL_SLASH =       new Characters('|',  '｜',)

    public static readonly LETTER_A =             new Characters('Aa', 'Ａａ',)
    public static readonly LETTER_B =             new Characters('Bb', 'Ｂｂ',)
    public static readonly LETTER_C =             new Characters('Cc', 'Ｃｃ',)
    public static readonly LETTER_D =             new Characters('Dd', 'Ｄｄ',)
    public static readonly LETTER_E =             new Characters('Ee', 'Ｅｅ',)
    public static readonly LETTER_F =             new Characters('Ff', 'Ｆｆ',)
    public static readonly LETTER_G =             new Characters('Gg', 'Ｇｇ',)
    public static readonly LETTER_H =             new Characters('Hh', 'Ｈｈ',)
    public static readonly LETTER_I =             new Characters('Ii', 'Ｉｉ',)
    public static readonly LETTER_J =             new Characters('Jj', 'Ｊｊ',)
    public static readonly LETTER_K =             new Characters('Kk', 'Ｋｋ',)
    public static readonly LETTER_L =             new Characters('Ll', 'Ｌｌ',)
    public static readonly LETTER_M =             new Characters('Mm', 'Ｍｍ',)
    public static readonly LETTER_N =             new Characters('Nn', 'Ｎｎ',)
    public static readonly LETTER_O =             new Characters('Oo', 'Ｏｏ',)
    public static readonly LETTER_P =             new Characters('Pp', 'Ｐｐ',)
    public static readonly LETTER_Q =             new Characters('Qq', 'Ｑｑ',)
    public static readonly LETTER_R =             new Characters('Rr', 'Ｒｒ',)
    public static readonly LETTER_S =             new Characters('Ss', 'Ｓｓ',)
    public static readonly LETTER_T =             new Characters('Tt', 'Ｔｔ',)
    public static readonly LETTER_U =             new Characters('Uu', 'Ｕｕ',)
    public static readonly LETTER_V =             new Characters('Vv', 'Ｖｖ',)
    public static readonly LETTER_W =             new Characters('Ww', 'Ｗｗ',)
    public static readonly LETTER_X =             new Characters('Xx', 'Ｘｘ',)
    public static readonly LETTER_Y =             new Characters('Yy', 'Ｙｙ',)
    public static readonly LETTER_Z =             new Characters('Zz', 'Ｚｚ',)

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
            const enumValue = this.getValueByCharacter(value,)
            const isUppercase = value === value.toUpperCase()
            const isLowercase = value === value.toLowerCase()
            if (!isUppercase && !isLowercase)//. ? ! , - & / | ( ) [ ] { } [0 to 9]
                return enumValue.getCharacters(isSpaceEven,)[0]

            const characters = enumValue.getCharacters(isSpaceEven,)//[a to z] [A to Z]
            return isUppercase ? characters[0] : characters[1]
        }

        public getValueByCharacter(value: Nullable<| Characters | string>,): Characters {
            if (value == null)
                throw new TypeError(`No "${this.instance.name}" could be found by a null character.`,)
            if (value instanceof this.instance)
                return value
            const valueFound = this.values.findFirstOrNull(it =>
                it.spaceEvenCharacters.includes(value as never,)
                || it.spaceUnevenCharacters.includes(value as never,),)
            if (valueFound == null)
                throw new ReferenceError(`No "${this.instance.name}" could be found by ths value "${value}".`,)
            return valueFound
        }

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    static readonly #POINTS: Points = [this.POINT, this.INTERROGATION_POINT, this.EXCLAMATION_POINT, this.COLON, this.SEMICOLON,] as const
    static #POINTS_STRING?: Points_Array
    static #POINTS_SPACE_EVEN?: Points_SpaceEven_Array
    static #POINTS_SPACE_UNEVEN?: Points_SpaceUneven_Array

    static readonly #PARENTHESES: Parentheses = [this.STARTING_PARENTHESIS, this.ENDING_PARENTHESIS,] as const
    static #PARENTHESES_STRING?: Parentheses_Array
    static #PARENTHESES_SPACE_EVEN?: Parentheses_SpaceEven_Array
    static #PARENTHESES_SPACE_UNEVEN?: Parentheses_SpaceUneven_Array

    static readonly #BRACKETS: Brackets = [this.STARTING_BRACKET, this.ENDING_BRACKET,] as const
    static #BRACKETS_STRING?: Brackets_Array
    static #BRACKETS_SPACE_EVEN?: Brackets_SpaceEven_Array
    static #BRACKETS_SPACE_UNEVEN?: Brackets_SpaceUneven_Array

    static readonly #BRACES: Braces = [this.STARTING_BRACE, this.ENDING_BRACE,] as const
    static #BRACES_STRING?: Braces_Array
    static #BRACES_SPACE_EVEN?: Braces_SpaceEven_Array
    static #BRACES_SPACE_UNEVEN?: Braces_SpaceUneven_Array

    static readonly #SLASHES: Slashes = [this.SLASH, this.VERTICAL_SLASH,] as const
    static #SLASHES_STRING?: Slashes_Array
    static #SLASHES_SPACE_EVEN?: Slashes_SpaceEven_Array
    static #SLASHES_SPACE_UNEVEN?: Slashes_SpaceUneven_Array

    static readonly #LETTERS: RomainAlphabet = [
        this.LETTER_A, this.LETTER_B, this.LETTER_C, this.LETTER_D, this.LETTER_E,
        this.LETTER_F, this.LETTER_G, this.LETTER_H, this.LETTER_I, this.LETTER_J,
        this.LETTER_K, this.LETTER_L, this.LETTER_M, this.LETTER_N, this.LETTER_O,
        this.LETTER_P, this.LETTER_Q, this.LETTER_R, this.LETTER_S, this.LETTER_T,
        this.LETTER_U, this.LETTER_V, this.LETTER_W, this.LETTER_X, this.LETTER_Y,
        this.LETTER_Z,
    ] as const
    static #LETTERS_STRING?: Letters_Array
    static #LETTERS_SPACE_EVEN?: RomainAlphabet_SpaceEven_Array
    static #LETTERS_SPACE_UNEVEN?: RomainAlphabet_SpaceUneven_Array
    static #LOWERCASE_LETTERS?: LowercaseLetters_Array
    static #LOWERCASE_LETTERS_SPACE_EVEN?: LowercaseRomainAlphabet_SpaceEven_Array
    static #LOWERCASE_LETTERS_SPACE_UNEVEN?: LowercaseRomainAlphabet_SpaceUneven_Array
    static #UPPERCASE_LETTERS?: UppercaseLetters_Array
    static #UPPERCASE_LETTERS_SPACE_EVEN?: UppercaseRomainAlphabet_SpaceEven_Array
    static #UPPERCASE_LETTERS_SPACE_UNEVEN?: UppercaseRomainAlphabet_SpaceUneven_Array

    static readonly #NUMBERS: Numbers = [
        this.NUMBER_0, this.NUMBER_1, this.NUMBER_2, this.NUMBER_3, this.NUMBER_4,
        this.NUMBER_5, this.NUMBER_6, this.NUMBER_7, this.NUMBER_8, this.NUMBER_9,
    ] as const
    static #NUMBERS_STRING?: Numbers_Array
    static #NUMBERS_SPACE_EVEN?: Numbers_SpaceEven_Array
    static #NUMBERS_SPACE_UNEVEN?: Numbers_SpaceUneven_Array


    static #SPACE_EVEN_OBJECT_MAP?: CharactersEquivalencesMap


    readonly #spaceEvenCharacters: PossibleSpaceEvenCharacters
    readonly #spaceUnevenCharacters: PossibleSpaceUnevenCharacters

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(spaceUnevenCharacter: PossibleSingleSpaceUnevenCharacter_ExcludingRomainAlphabet, spaceEvenCharacter: PossibleSingleSpaceEvenCharacter_ExcludingRomainAlphabet,)
    private constructor(spaceUnevenCharacters: PossibleMixedSpaceUnevenCharacter_RomainAlphabet, spaceEvenCharacters: PossibleMixedSpaceEvenCharacter_RomainAlphabet,)
    private constructor(spaceUnevenCharacter: SpaceUnevenCharacterReceived, spaceEvenCharacter: SpaceEvenCharacterReceived,) {
        super()
        if (spaceUnevenCharacter.length === 1) {
            this.#spaceEvenCharacters = [spaceEvenCharacter as PossibleSingleSpaceEvenCharacter_ExcludingRomainAlphabet]
            this.#spaceUnevenCharacters = [spaceUnevenCharacter as PossibleSingleSpaceUnevenCharacter_ExcludingRomainAlphabet]
        } else {
            this.#spaceEvenCharacters = [spaceEvenCharacter[0] as Uppercase<SpaceEvenCharacter_RomainAlphabet>, spaceEvenCharacter[1] as Lowercase<SpaceEvenCharacter_RomainAlphabet>,]
            this.#spaceUnevenCharacters = [spaceUnevenCharacter[0] as Uppercase<SpaceUnevenCharacter_RomainAlphabet>, spaceUnevenCharacter[1] as Lowercase<SpaceUnevenCharacter_RomainAlphabet>,]
        }
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get spaceEvenCharacters(): PossibleSpaceEvenCharacters {
        return this.#spaceEvenCharacters
    }

    public get spaceUnevenCharacters(): PossibleSpaceUnevenCharacters {
        return this.#spaceUnevenCharacters
    }

    //region -------------------- Specific characters --------------------

    static #getBothEvenAndUnevenCharacters<A extends StringArray, >(array: Array<Characters>, index: | 0 | 1,): A {
        return array.map(it => [it.spaceUnevenCharacters[index], it.spaceEvenCharacters[index],],).flat() as unknown as A
    }

    static #getOnlyUnevenCharacter<A extends StringArray, >(array: Array<Characters>, index: | 0 | 1,): A {
        return array.map(it => it.spaceUnevenCharacters[index],) as unknown as A
    }

    static #getOnlyEvenCharacter<A extends StringArray, >(array: Array<Characters>, index: | 0 | 1,): A {
        return array.map(it => it.spaceEvenCharacters[index],).flat() as unknown as A
    }

    //region -------------------- Specific characters (points) --------------------

    public static get points_enum(): Points {
        return this.#POINTS
    }

    public static get points(): Points_Array {
        return this.#POINTS_STRING ??= this.#getBothEvenAndUnevenCharacters(this.points_enum, 0,)
    }

    public static getPoints<B extends boolean, >(isSpaceEven: B,): VariableValueByBoolean<B, Points_SpaceEven_Array, Points_SpaceUneven_Array>
    public static getPoints(isSpaceEven: boolean,): PossiblePoints_Array {
        return isSpaceEven
            ? this.#POINTS_SPACE_EVEN ??= this.#getOnlyEvenCharacter(this.points_enum, 0,)
            : this.#POINTS_SPACE_UNEVEN ??= this.#getOnlyUnevenCharacter(this.points_enum, 0,)
    }

    //endregion -------------------- Specific characters (points) --------------------
    //region -------------------- Specific characters (parentheses) --------------------

    public static get parentheses_enum(): Parentheses {
        return this.#PARENTHESES
    }

    public static get parentheses(): Parentheses_Array {
        return this.#PARENTHESES_STRING ??= this.#getBothEvenAndUnevenCharacters(this.parentheses_enum, 0,)
    }

    public static getParentheses<B extends boolean, >(isSpaceEven: B,): VariableValueByBoolean<B, Parentheses_SpaceEven_Array, Parentheses_SpaceUneven_Array>
    public static getParentheses(isSpaceEven: boolean,): PossibleParentheses_Array {
        return isSpaceEven
            ? this.#PARENTHESES_SPACE_EVEN ??= this.#getOnlyEvenCharacter(this.parentheses_enum, 0,)
            : this.#PARENTHESES_SPACE_UNEVEN ??= this.#getOnlyUnevenCharacter(this.parentheses_enum, 0,)
    }

    //endregion -------------------- Specific characters (parentheses) --------------------
    //region -------------------- Specific characters (brackets) --------------------

    public static get brackets_enum(): Brackets {
        return this.#BRACKETS
    }

    public static get brackets(): Brackets_Array {
        return this.#BRACKETS_STRING ??= this.#getBothEvenAndUnevenCharacters(this.brackets_enum, 0,)
    }

    public static getBrackets<B extends boolean, >(isSpaceEven: B,): VariableValueByBoolean<B, Brackets_SpaceEven_Array, Brackets_SpaceUneven_Array>
    public static getBrackets(isSpaceEven: boolean,): PossibleBrackets_Array {
        return isSpaceEven
            ? this.#BRACKETS_SPACE_EVEN ??= this.#getOnlyEvenCharacter(this.brackets_enum, 0,)
            : this.#BRACKETS_SPACE_UNEVEN ??= this.#getOnlyUnevenCharacter(this.brackets_enum, 0,)
    }

    //endregion -------------------- Specific characters (brackets) --------------------
    //region -------------------- Specific characters (braces) --------------------

    public static get braces_enum(): Braces {
        return this.#BRACES
    }

    public static get braces(): Braces_Array {
        return this.#BRACES_STRING ??= this.#getBothEvenAndUnevenCharacters(this.braces_enum, 0,)
    }

    public static getBraces<B extends boolean, >(isSpaceEven: B,): VariableValueByBoolean<B, Braces_SpaceEven_Array, Braces_SpaceUneven_Array>
    public static getBraces(isSpaceEven: boolean,): PossibleBraces_Array {
        return isSpaceEven
            ? this.#BRACES_SPACE_EVEN ??= this.#getOnlyEvenCharacter(this.braces_enum, 0,)
            : this.#BRACES_SPACE_UNEVEN ??= this.#getOnlyUnevenCharacter(this.braces_enum, 0,)
    }

    //endregion -------------------- Specific characters (braces) --------------------
    //region -------------------- Specific characters (slashes) --------------------

    public static get slashes_enum(): Slashes {
        return this.#SLASHES
    }

    public static get slashes(): Slashes_Array {
        return this.#SLASHES_STRING ??= this.#getBothEvenAndUnevenCharacters(this.slashes_enum, 0,)
    }

    public static getSlashes<B extends boolean, >(isSpaceEven: B,): VariableValueByBoolean<B, Slashes_SpaceEven_Array, Slashes_SpaceUneven_Array>
    public static getSlashes(isSpaceEven: boolean,): PossibleSlashes_Array {
        return isSpaceEven
            ? this.#SLASHES_SPACE_EVEN ??= this.#getOnlyEvenCharacter(this.slashes_enum, 0,)
            : this.#SLASHES_SPACE_UNEVEN ??= this.#getOnlyUnevenCharacter(this.slashes_enum, 0,)
    }

    //endregion -------------------- Specific characters (slashes) --------------------
    //region -------------------- Specific characters (letters) --------------------

    public static get letters_enum(): RomainAlphabet {
        return this.#LETTERS
    }

    public static get letters(): Letters_Array {
        return this.#LETTERS_STRING ??= this.letters_enum.map(enumerable => [enumerable.spaceUnevenCharacters, enumerable.spaceEvenCharacters,]).flat(2) as unknown as Letters_Array
    }

    public static getLetters<B extends boolean, >(isSpaceEven: B,): VariableValueByBoolean<B, RomainAlphabet_SpaceEven_Array, RomainAlphabet_SpaceUneven_Array>
    public static getLetters(isSpaceEven: boolean,): | RomainAlphabet_SpaceUneven_Array | RomainAlphabet_SpaceEven_Array {
        return isSpaceEven
            ? this.#LETTERS_SPACE_EVEN ??= this.letters_enum.map(enumerable => enumerable.spaceEvenCharacters).flat() as unknown as RomainAlphabet_SpaceEven_Array
            : this.#LETTERS_SPACE_UNEVEN ??= this.letters_enum.map(enumerable => enumerable.spaceUnevenCharacters).flat() as unknown as RomainAlphabet_SpaceUneven_Array
    }


    public static get lowercaseLetters(): LowercaseLetters_Array {
        return this.#LOWERCASE_LETTERS ??= this.#getBothEvenAndUnevenCharacters(this.letters_enum, 1,)
    }

    public static getLowercaseLetters<B extends boolean, >(isSpaceEven: B,): VariableValueByBoolean<B, LowercaseRomainAlphabet_SpaceEven_Array, LowercaseRomainAlphabet_SpaceUneven_Array>
    public static getLowercaseLetters(isSpaceEven: boolean,): PossibleLowercaseRomainAlphabet_Array {
        return isSpaceEven
            ? this.#LOWERCASE_LETTERS_SPACE_EVEN ??= this.#getOnlyEvenCharacter(this.letters_enum, 1,)
            : this.#LOWERCASE_LETTERS_SPACE_UNEVEN ??= this.#getOnlyUnevenCharacter(this.letters_enum, 1,)
    }

    public static get uppercaseLetters(): UppercaseLetters_Array {
        return this.#UPPERCASE_LETTERS ??= this.#getBothEvenAndUnevenCharacters(this.letters_enum, 0,)
    }

    public static getUppercaseLetters<B extends boolean, >(isSpaceEven: B,): VariableValueByBoolean<B, UppercaseRomainAlphabet_SpaceEven_Array, UppercaseRomainAlphabet_SpaceUneven_Array>
    public static getUppercaseLetters(isSpaceEven: boolean,): PossibleUppercaseRomainAlphabet_Array {
        return isSpaceEven
            ? this.#UPPERCASE_LETTERS_SPACE_EVEN ??= this.#getOnlyEvenCharacter(this.letters_enum, 0,)
            : this.#UPPERCASE_LETTERS_SPACE_UNEVEN ??= this.#getOnlyUnevenCharacter(this.letters_enum, 0,)
    }

    //endregion -------------------- Specific characters (letters) --------------------
    //region -------------------- Specific characters (numbers) --------------------

    public static get numbers_enum(): Numbers {
        return this.#NUMBERS
    }

    public static get numbers(): Numbers_Array {
        return this.#NUMBERS_STRING ??= this.#getBothEvenAndUnevenCharacters(this.numbers_enum, 0,)
    }

    public static getNumbers<B extends boolean, >(isSpaceEven: B,): VariableValueByBoolean<B, Numbers_SpaceEven_Array, Numbers_SpaceUneven_Array>
    public static getNumbers(isSpaceEven: boolean,): PossibleNumbers_Array {
        return isSpaceEven
            ? this.#NUMBERS_SPACE_EVEN ??= this.#getOnlyEvenCharacter(this.numbers_enum, 0,)
            : this.#NUMBERS_SPACE_UNEVEN ??= this.#getOnlyUnevenCharacter(this.numbers_enum, 0,)
    }

    //endregion -------------------- Specific characters (numbers) --------------------

    //endregion -------------------- Specific characters --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public getCharacters<B extends boolean, >(isSpaceEven: B,): VariableCharactersByBoolean<B>
    public getCharacters(isSpaceEven: boolean,) {
        return isSpaceEven ? this.spaceEvenCharacters : this.spaceUnevenCharacters
    }

    /**
     * An equivalence {@link Object object map} of every character used in the {@link Characters} enum.
     */
    public static get equivalenceMapObject(): CharactersEquivalencesMap {
        if (this.#SPACE_EVEN_OBJECT_MAP != null)
            return this.#SPACE_EVEN_OBJECT_MAP

        const spaceEvenObjectMap: Partial<CharactersEquivalencesMap> = {}
        this.CompanionEnum.get.values.forEach(it => {
            const [spaceEvenCharacter1, spaceEvenCharacter2,] = it.spaceEvenCharacters
            const [spaceUnevenCharacter1, spaceUnevenCharacter2,] = it.spaceUnevenCharacters
            Reflect.set(spaceEvenObjectMap, spaceEvenCharacter1, spaceUnevenCharacter1,)
            Reflect.set(spaceEvenObjectMap, spaceUnevenCharacter1, spaceEvenCharacter1,)
            if (spaceUnevenCharacter2 != null) {
                Reflect.set(spaceEvenObjectMap, spaceEvenCharacter2!, spaceUnevenCharacter2,)
                Reflect.set(spaceEvenObjectMap, spaceUnevenCharacter2, spaceEvenCharacter2,)
            }
        },)
        return this.#SPACE_EVEN_OBJECT_MAP = spaceEvenObjectMap as CharactersEquivalencesMap
    }

    //region -------------------- Transformation methods --------------------

    static #textInBetween(isSpaceEven: boolean, startingCharacter: Characters, text: string, endingCharacter: Characters,) {
        return `${startingCharacter.getCharacters(isSpaceEven)}${text}${endingCharacter.getCharacters(isSpaceEven)}`
    }

    public static textInParentheses<B extends boolean, S extends string, >(isSpaceEven: B, text: S,): TextInParentheses<B, S>
    public static textInParentheses(isSpaceEven: boolean, text: string,) {
        return this.#textInBetween(isSpaceEven, this.STARTING_PARENTHESIS, text, this.ENDING_PARENTHESIS,)
    }

    public static textInBrackets<B extends boolean, S extends string, >(isSpaceEven: B, text: S,): TextInBrackets<B, S>
    public static textInBrackets(isSpaceEven: boolean, text: string,) {
        return this.#textInBetween(isSpaceEven, this.STARTING_BRACKET, text, this.ENDING_BRACKET,)
    }

    public static textInBraces<B extends boolean, S extends string, >(isSpaceEven: B, text: S,): TextInBraces<B, S>
    public static textInBraces(isSpaceEven: boolean, text: string,) {
        return this.#textInBetween(isSpaceEven, this.STARTING_BRACE, text, this.ENDING_BRACE,)
    }

    //endregion -------------------- Transformation methods --------------------

    //endregion -------------------- Methods --------------------

}

type SpaceUnevenCharacterReceived = | PossibleSingleSpaceUnevenCharacter_ExcludingRomainAlphabet | PossibleMixedSpaceUnevenCharacter_RomainAlphabet
type SpaceEvenCharacterReceived = | PossibleSingleSpaceEvenCharacter_ExcludingRomainAlphabet | PossibleMixedSpaceEvenCharacter_RomainAlphabet
