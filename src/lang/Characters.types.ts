import type {Characters}                       from './Characters';
import type {SimpleEnum as OriginalSimpleEnum} from '../util/enum/Enum.types';

export type PossibleSingleCharacter = | SpaceEvenCharacter | SpaceUnevenCharacter;
export type PossibleNonNullableValue = | Characters
                                       | Ordinals
                                       | PossibleStringValue;
export type PossibleStringValue = | Names | PossibleSingleCharacter;
export type PossibleValue = | PossibleNonNullableValue | string | number | null | undefined;

enum Enum {
    POINT, INTERROGATION_POINT, EXCLAMATION_POINT,
    COLON,SEMICOLON,
    COMMA,
    UNION_TRAIT,

    COMMERCIAL_AND,

    STARTING_PARENTHESIS, ENDING_PARENTHESIS,
    STARTING_BRACKET, ENDING_BRACKET,
    STARTING_BRACE, ENDING_BRACE,

    SLASH, VERTICAL_SLASH,

    LETTER_A, LETTER_B, LETTER_C, LETTER_D, LETTER_E,
    LETTER_F, LETTER_G, LETTER_H, LETTER_I, LETTER_J,
    LETTER_K, LETTER_L, LETTER_M, LETTER_N, LETTER_O,
    LETTER_P, LETTER_Q, LETTER_R, LETTER_S, LETTER_T,
    LETTER_U, LETTER_V, LETTER_W, LETTER_X, LETTER_Y,
    LETTER_Z,

    NUMBER_0, NUMBER_1, NUMBER_2, NUMBER_3, NUMBER_4,
    NUMBER_5, NUMBER_6, NUMBER_7, NUMBER_8, NUMBER_9,
}

//region -------------------- Utility types --------------------

/** @temporary */export type VariableValueByBoolean<B extends boolean, V1, V2, > = B extends true ? V1 : B extends false ? V2 : | V1 | V2;

export type VariableCharactersByBoolean<B extends boolean, > = VariableValueByBoolean<B, PossibleSpaceEvenCharacters, PossibleSpaceUnevenCharacters>
export type VariableCharacterByCharacter<B extends boolean, C extends PossibleSingleCharacter, > = VariableValueByBoolean<B, SpaceEvenCharacterFromEquivalenceMap<C>, SpaceUnevenCharacterFromEquivalenceMap<C>>
export type VariableCharacterByString<B extends boolean, C extends string, > = C extends PossibleSingleCharacter ? VariableCharacterByCharacter<B, C> : | PossibleSingleCharacter | null;

export type TextInParentheses<B extends boolean, S extends string, > = VariableValueByBoolean<B, `${SpaceUnevenCharacter_StartingParenthesis}${S}${SpaceUnevenCharacter_EndingParenthesis}`, `${SpaceEvenCharacter_StartingParenthesis}${S}${SpaceEvenCharacter_EndingParenthesis}`>;
export type TextInBrackets<B extends boolean, S extends string, > = VariableValueByBoolean<B, `${SpaceUnevenCharacter_StartingBrace}${S}${SpaceUnevenCharacter_EndingBrace}`, `${SpaceEvenCharacter_StartingBrace}${S}${SpaceEvenCharacter_EndingBrace}`>;
export type TextInBraces<B extends boolean, S extends string, > = VariableValueByBoolean<B, `${SpaceUnevenCharacter_StartingBracket}${S}${SpaceUnevenCharacter_EndingBracket}`, `${SpaceEvenCharacter_StartingBracket}${S}${SpaceEvenCharacter_EndingBracket}`>;

//endregion -------------------- Utility types --------------------
//region -------------------- Number types --------------------

export type Ordinals = typeof Enum[Names];

//endregion -------------------- Number types --------------------
//region -------------------- String types --------------------

export type Names = keyof typeof Enum;

export type SpaceEvenCharacter_Point = '．';
export type SpaceEvenCharacter_InterrogationPoint = '？';
export type SpaceEvenCharacter_ExclamationPoint = '！';
export type SpaceEvenCharacter_Colon = '：';
export type SpaceEvenCharacter_Semicolon = '；';
export type SpaceEvenCharacter_Points = | SpaceEvenCharacter_Point | SpaceEvenCharacter_InterrogationPoint | SpaceEvenCharacter_ExclamationPoint | SpaceEvenCharacter_Colon | SpaceEvenCharacter_Semicolon;
export type SpaceEvenCharacter_Comma = '，';
export type SpaceEvenCharacter_UnionTrait = '－';
export type SpaceEvenCharacter_Punctuation = | SpaceEvenCharacter_Points | SpaceEvenCharacter_Comma | SpaceEvenCharacter_UnionTrait;
export type SpaceEvenCharacter_CommercialAnd = '＆';
export type SpaceEvenCharacter_Slash = '／';
export type SpaceEvenCharacter_VerticalSlash = '｜';
export type SpaceEvenCharacter_Slashes = | SpaceEvenCharacter_Slash | SpaceEvenCharacter_VerticalSlash;
export type SpaceEvenCharacter_StartingParenthesis = '（';
export type SpaceEvenCharacter_EndingParenthesis = '）';
export type SpaceEvenCharacter_Parentheses = | SpaceEvenCharacter_StartingParenthesis | SpaceEvenCharacter_EndingParenthesis;
export type SpaceEvenCharacter_StartingBracket = '［';
export type SpaceEvenCharacter_EndingBracket = '］';
export type SpaceEvenCharacter_Brackets = | SpaceEvenCharacter_StartingBrace | SpaceEvenCharacter_EndingBrace;
export type SpaceEvenCharacter_StartingBrace = '｛';
export type SpaceEvenCharacter_EndingBrace = '｝';
export type SpaceEvenCharacter_Braces = | SpaceEvenCharacter_StartingBracket | SpaceEvenCharacter_EndingBracket;
export type SpaceEvenCharacter_RomainAlphabet = | 'Ａ' | 'Ｂ' | 'Ｃ' | 'Ｄ' | 'Ｅ' | 'Ｆ' | 'Ｇ' | 'Ｈ' | 'Ｉ' | 'Ｊ' | 'Ｋ' | 'Ｌ' | 'Ｍ' | 'Ｎ' | 'Ｏ' | 'Ｐ' | 'Ｑ' | 'Ｒ' | 'Ｓ' | 'Ｔ' | 'Ｕ' | 'Ｖ' | 'Ｗ' | 'Ｘ' | 'Ｙ' | 'Ｚ'
                                                | 'ａ' | 'ｂ' | 'ｃ' | 'ｄ' | 'ｅ' | 'ｆ' | 'ｇ' | 'ｈ' | 'ｉ' | 'ｊ' | 'ｋ' | 'ｌ' | 'ｍ' | 'ｎ' | 'ｏ' | 'ｐ' | 'ｑ' | 'ｒ' | 'ｓ' | 'ｔ' | 'ｕ' | 'ｖ' | 'ｗ' | 'ｘ' | 'ｙ' | 'ｚ';
export type SpaceEvenCharacter_Number = | '０' | '１' | '２' | '３' | '４' | '５' | '６' | '７' | '８' | '９';
export type SpaceEvenCharacter = | SpaceEvenCharacter_Punctuation | SpaceEvenCharacter_CommercialAnd
                                 | SpaceEvenCharacter_Slashes | SpaceEvenCharacter_Parentheses | SpaceEvenCharacter_Brackets | SpaceEvenCharacter_Braces
                                 | SpaceEvenCharacter_RomainAlphabet | SpaceEvenCharacter_Number;

export type SpaceUnevenCharacter_Point = '.';
export type SpaceUnevenCharacter_InterrogationPoint = '?';
export type SpaceUnevenCharacter_ExclamationPoint = '!';
export type SpaceUnevenCharacter_Colon = ':';
export type SpaceUnevenCharacter_Semicolon = ';';
export type SpaceUnevenCharacter_Points = | SpaceUnevenCharacter_Point | SpaceUnevenCharacter_InterrogationPoint | SpaceUnevenCharacter_ExclamationPoint | SpaceUnevenCharacter_Colon | SpaceUnevenCharacter_Semicolon;
export type SpaceUnevenCharacter_Comma = ',';
export type SpaceUnevenCharacter_UnionTrait = '-';
export type SpaceUnevenCharacter_Punctuation = | SpaceUnevenCharacter_Points | SpaceUnevenCharacter_Comma | SpaceUnevenCharacter_UnionTrait;
export type SpaceUnevenCharacter_CommercialAnd = '&';
export type SpaceUnevenCharacter_Slash = '/';
export type SpaceUnevenCharacter_VerticalSlash = '|';
export type SpaceUnevenCharacter_Slashes = | SpaceUnevenCharacter_Slash | SpaceUnevenCharacter_VerticalSlash;
export type SpaceUnevenCharacter_StartingParenthesis = '(';
export type SpaceUnevenCharacter_EndingParenthesis = ')';
export type SpaceUnevenCharacter_Parentheses = | SpaceUnevenCharacter_StartingParenthesis | SpaceUnevenCharacter_EndingParenthesis;
export type SpaceUnevenCharacter_StartingBracket = '[';
export type SpaceUnevenCharacter_EndingBracket = ']';
export type SpaceUnevenCharacter_Brackets = | SpaceUnevenCharacter_StartingBrace | SpaceUnevenCharacter_EndingBrace;
export type SpaceUnevenCharacter_StartingBrace = '{';
export type SpaceUnevenCharacter_EndingBrace = '}';
export type SpaceUnevenCharacter_Braces = | SpaceUnevenCharacter_StartingBracket | SpaceUnevenCharacter_EndingBracket;
export type SpaceUnevenCharacter_RomainAlphabet = | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z'
                                                  | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z';
export type SpaceUnevenCharacter_Number = `${| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`;
export type SpaceUnevenCharacter = | SpaceUnevenCharacter_Punctuation | SpaceUnevenCharacter_CommercialAnd
                                   | SpaceUnevenCharacter_Slashes | SpaceUnevenCharacter_Parentheses | SpaceUnevenCharacter_Brackets | SpaceUnevenCharacter_Braces
                                   | SpaceUnevenCharacter_RomainAlphabet | SpaceUnevenCharacter_Number;


export type PossiblePoint = | SpaceEvenCharacter_Point | SpaceUnevenCharacter_Point;
export type PossibleInterrogationPoint = | SpaceEvenCharacter_InterrogationPoint | SpaceUnevenCharacter_InterrogationPoint;
export type PossibleExclamationPoint = | SpaceEvenCharacter_ExclamationPoint | SpaceUnevenCharacter_ExclamationPoint;
export type PossibleColon = | SpaceEvenCharacter_Colon | SpaceUnevenCharacter_Colon;
export type PossibleSemicolon = | SpaceEvenCharacter_Semicolon | SpaceUnevenCharacter_Semicolon;
export type PossiblePoints = | SpaceEvenCharacter_Points | SpaceUnevenCharacter_Points;
export type PossibleComma = | SpaceEvenCharacter_Comma | SpaceUnevenCharacter_Comma;
export type PossibleUnionTrait = | SpaceEvenCharacter_UnionTrait | SpaceUnevenCharacter_UnionTrait;
export type PossiblePunctuation = | SpaceEvenCharacter_Punctuation | SpaceUnevenCharacter_Punctuation;
export type PossibleCommercialAnd = | SpaceEvenCharacter_CommercialAnd | SpaceUnevenCharacter_CommercialAnd;
export type PossibleStartingParentheses = | SpaceEvenCharacter_StartingParenthesis | SpaceUnevenCharacter_StartingParenthesis;
export type PossibleEndingParentheses = | SpaceEvenCharacter_EndingParenthesis | SpaceUnevenCharacter_EndingParenthesis;
export type PossibleParentheses = | SpaceEvenCharacter_Parentheses | SpaceUnevenCharacter_Parentheses;
export type PossibleStartingBracket = | SpaceEvenCharacter_StartingBracket | SpaceUnevenCharacter_StartingBracket;
export type PossibleEndingBracket = | SpaceEvenCharacter_EndingBracket | SpaceUnevenCharacter_EndingBracket;
export type PossibleBrackets = | SpaceEvenCharacter_Brackets | SpaceUnevenCharacter_Brackets;
export type PossibleStartingBrace = | SpaceEvenCharacter_StartingBrace | SpaceUnevenCharacter_StartingBrace;
export type PossibleEndingBrace = | SpaceEvenCharacter_EndingBrace | SpaceUnevenCharacter_EndingBrace;
export type PossibleBraces = | SpaceEvenCharacter_Braces | SpaceUnevenCharacter_Braces;
export type PossibleSlash = | SpaceEvenCharacter_Slash | SpaceUnevenCharacter_Slash;
export type PossibleVerticalSlash = | SpaceEvenCharacter_VerticalSlash | SpaceUnevenCharacter_VerticalSlash;
export type PossibleSlashes = | SpaceEvenCharacter_Slashes | SpaceUnevenCharacter_Slashes;
export type PossibleLowercaseRomainAlphabet = Lowercase<| SpaceEvenCharacter_RomainAlphabet | SpaceUnevenCharacter_RomainAlphabet>;
export type PossibleUppercaseRomainAlphabet = Uppercase<| SpaceEvenCharacter_RomainAlphabet | SpaceUnevenCharacter_RomainAlphabet>;

export type PossibleSingleSpaceUnevenCharacter_ExcludingRomainAlphabet = Exclude<SpaceUnevenCharacter, SpaceUnevenCharacter_RomainAlphabet>;
export type PossibleMixedSpaceUnevenCharacter_RomainAlphabet = `${Uppercase<SpaceUnevenCharacter_RomainAlphabet>}${Lowercase<SpaceUnevenCharacter_RomainAlphabet>}`;
export type PossibleSpaceUnevenCharacters = | [PossibleSingleSpaceUnevenCharacter_ExcludingRomainAlphabet,] | [Uppercase<SpaceUnevenCharacter_RomainAlphabet>, Lowercase<SpaceUnevenCharacter_RomainAlphabet>,];
export type PossibleSingleSpaceEvenCharacter_ExcludingRomainAlphabet = Exclude<SpaceEvenCharacter, SpaceEvenCharacter_RomainAlphabet>;
export type PossibleMixedSpaceEvenCharacter_RomainAlphabet = `${Uppercase<SpaceEvenCharacter_RomainAlphabet>}${Lowercase<SpaceEvenCharacter_RomainAlphabet>}`;
export type PossibleSpaceEvenCharacters = | [PossibleSingleSpaceEvenCharacter_ExcludingRomainAlphabet,] | [Uppercase<SpaceEvenCharacter_RomainAlphabet>, Lowercase<SpaceEvenCharacter_RomainAlphabet>,];

//endregion -------------------- String types --------------------
//region -------------------- Instance types --------------------

export type SimpleEnum<T extends Characters = Characters, > = OriginalSimpleEnum<Names, T>;

export type EnumByOrdinal<O extends Ordinals, E extends Characters = Characters, > = EnumArray<E>[O];
export type EnumByNumber<O extends number, E extends Characters = Characters, > = | NonNullable<EnumArray<E>[O]> | null;

export type EnumByName<N extends Names, E extends Characters = Characters, > = SimpleEnum<E>[N];
export type EnumByPossibleString<PS extends PossibleStringValue, E extends Characters = Characters, > = PS extends Names ? EnumByName<PS, E> : E;
export type EnumByString<S extends string, E extends Characters = Characters, > = S extends PossibleStringValue ? EnumByPossibleString<S, E> : | E | null;

//endregion -------------------- Instance types --------------------
//region -------------------- Array types --------------------

//region -------------------- Array types (points) --------------------

export type EnumArray_Points<T extends Characters = Characters, > = readonly [
    SimpleEnum<T>['POINT'], SimpleEnum<T>['INTERROGATION_POINT'], SimpleEnum<T>['EXCLAMATION_POINT'], SimpleEnum<T>['COLON'], SimpleEnum<T>['SEMICOLON'],
];

type _SinglePointsArray = readonly [point: string, interrogationPoint: string, exclamationPoint: string, doublePoints: string, pointComma: string,];
type _MergedPointsArray<A1 extends _SinglePointsArray, A2 extends _SinglePointsArray, > = [
    A1[0], A2[0],
    A1[1], A2[1],
    A1[2], A2[2],
    A1[3], A2[3],
    A1[4], A2[4],
];
export type Points_SpaceUneven_Array = readonly [SpaceUnevenCharacter_Point, SpaceUnevenCharacter_InterrogationPoint, SpaceUnevenCharacter_ExclamationPoint, SpaceUnevenCharacter_Colon, SpaceUnevenCharacter_Semicolon,];
export type Points_SpaceEven_Array = readonly [SpaceEvenCharacter_Point, SpaceEvenCharacter_InterrogationPoint, SpaceEvenCharacter_ExclamationPoint, SpaceEvenCharacter_Colon, SpaceUnevenCharacter_Semicolon,];
export type Points_Array = _MergedPointsArray<Points_SpaceUneven_Array, Points_SpaceEven_Array>;
export type PossiblePoints_Array = | Points_SpaceUneven_Array | Points_SpaceEven_Array;

//endregion -------------------- Array types (points) --------------------
//region -------------------- Array types (parentheses & brackets & braces) --------------------

type _SingleParenthesesOrBracketOrBrace = readonly [start: string, end: string,];
type _MixedParenthesesOrBracketOrBrace<A1 extends _SingleParenthesesOrBracketOrBrace, A2 extends _SingleParenthesesOrBracketOrBrace, > = readonly [
    A1[0], A2[0],
    A1[1], A1[1],
];

//region -------------------- Array types (parentheses) --------------------

export type EnumArray_Parentheses<T extends Characters = Characters, > = readonly [
    SimpleEnum<T>['STARTING_PARENTHESIS'], SimpleEnum<T>['ENDING_PARENTHESIS'],
];
export type Parentheses_SpaceUneven_Array = [SpaceUnevenCharacter_StartingParenthesis, SpaceUnevenCharacter_EndingParenthesis,];
export type Parentheses_SpaceEven_Array = [SpaceEvenCharacter_StartingParenthesis, SpaceEvenCharacter_EndingParenthesis,];
export type Parentheses_Array = _MixedParenthesesOrBracketOrBrace<Parentheses_SpaceUneven_Array, Parentheses_SpaceEven_Array>;
export type PossibleParentheses_Array = | Parentheses_SpaceUneven_Array | Parentheses_SpaceEven_Array;

//endregion -------------------- Array types (parentheses) --------------------
//region -------------------- Array types (brackets) --------------------

export type EnumArray_Brackets<T extends Characters = Characters, > = readonly [
    SimpleEnum<T>['STARTING_BRACKET'], SimpleEnum<T>['ENDING_BRACKET'],
];
export type Brackets_SpaceUneven_Array = [SpaceUnevenCharacter_StartingBracket, SpaceUnevenCharacter_EndingBracket,];
export type Brackets_SpaceEven_Array = [SpaceEvenCharacter_StartingBracket, SpaceEvenCharacter_EndingBracket,];
export type Brackets_Array = _MixedParenthesesOrBracketOrBrace<Brackets_SpaceUneven_Array, Brackets_SpaceEven_Array>;
export type PossibleBrackets_Array = | Brackets_SpaceUneven_Array | Brackets_SpaceEven_Array;

//endregion -------------------- Array types (brackets) --------------------
//region -------------------- Array types (braces) --------------------

export type EnumArray_Braces<T extends Characters = Characters, > = readonly [
    SimpleEnum<T>['STARTING_BRACE'], SimpleEnum<T>['ENDING_BRACE'],
];
export type Braces_SpaceUneven_Array = [SpaceUnevenCharacter_StartingBrace, SpaceUnevenCharacter_EndingBrace,];
export type Braces_SpaceEven_Array = [SpaceEvenCharacter_StartingBrace, SpaceEvenCharacter_EndingBrace,];
export type Braces_Array = _MixedParenthesesOrBracketOrBrace<Braces_SpaceUneven_Array, Braces_SpaceEven_Array>;
export type PossibleBraces_Array = | Braces_SpaceUneven_Array | Braces_SpaceEven_Array;

//endregion -------------------- Array types (braces) --------------------

//endregion -------------------- Array types (parentheses & brackets & braces) --------------------
//region -------------------- Array types (slashes) --------------------

export type EnumArray_Slashes<T extends Characters = Characters, > = readonly [
    SimpleEnum<T>['SLASH'], SimpleEnum<T>['VERTICAL_SLASH'],
];

type _SingleSlashesArray = readonly [slash: string, verticalSlash: string,];
type _MergedSlashesArray<A1 extends _SingleSlashesArray, A2 extends _SingleSlashesArray, > = [
    A1[0], A2[0],
    A1[1], A2[1],
];
export type Slashes_SpaceUneven_Array = readonly [SpaceUnevenCharacter_Slash, SpaceUnevenCharacter_VerticalSlash,];
export type Slashes_SpaceEven_Array = readonly [SpaceEvenCharacter_Slash, SpaceEvenCharacter_VerticalSlash,];
export type Slashes_Array = _MergedSlashesArray<Slashes_SpaceUneven_Array, Slashes_SpaceEven_Array>;
export type PossibleSlashes_Array = | Slashes_SpaceUneven_Array | Slashes_SpaceEven_Array;

//endregion -------------------- Array types (slashes) --------------------
//region -------------------- Array types (romain alphabet) --------------------

export type EnumArray_RomainAlphabet<T extends Characters = Characters, > = readonly [
    SimpleEnum<T>['LETTER_A'], SimpleEnum<T>['LETTER_B'], SimpleEnum<T>['LETTER_C'], SimpleEnum<T>['LETTER_D'], SimpleEnum<T>['LETTER_E'],
    SimpleEnum<T>['LETTER_F'], SimpleEnum<T>['LETTER_G'], SimpleEnum<T>['LETTER_H'], SimpleEnum<T>['LETTER_I'], SimpleEnum<T>['LETTER_J'],
    SimpleEnum<T>['LETTER_K'], SimpleEnum<T>['LETTER_L'], SimpleEnum<T>['LETTER_M'], SimpleEnum<T>['LETTER_N'], SimpleEnum<T>['LETTER_O'],
    SimpleEnum<T>['LETTER_P'], SimpleEnum<T>['LETTER_Q'], SimpleEnum<T>['LETTER_R'], SimpleEnum<T>['LETTER_S'], SimpleEnum<T>['LETTER_T'],
    SimpleEnum<T>['LETTER_U'], SimpleEnum<T>['LETTER_V'], SimpleEnum<T>['LETTER_W'], SimpleEnum<T>['LETTER_X'], SimpleEnum<T>['LETTER_Y'],
    SimpleEnum<T>['LETTER_Z'],
];

enum _RomainAlphabet {
    a, b, c, d, e, f, g, h, i, j,
    k, l, m, n, o, p, q, r, s, t,
    u, v, w, x, y, z,
}

type _SingleRomainAlphabetArray = readonly [a: string, b: string, c: string, d: string, e: string, f: string, g: string, h: string, i: string, j: string, k: string, l: string, m: string, n: string, o: string, p: string, q: string, r: string, s: string, t: string, u: string, v: string, w: string, x: string, y: string, z: string,];
type _MergedRomainAlphabetArray2<A1 extends _SingleRomainAlphabetArray, A2 extends _SingleRomainAlphabetArray, > = readonly [
    A1[_RomainAlphabet.a], A2[_RomainAlphabet.a],
    A1[_RomainAlphabet.b], A2[_RomainAlphabet.b],
    A1[_RomainAlphabet.c], A2[_RomainAlphabet.c],
    A1[_RomainAlphabet.d], A2[_RomainAlphabet.d],
    A1[_RomainAlphabet.e], A2[_RomainAlphabet.e],
    A1[_RomainAlphabet.f], A2[_RomainAlphabet.f],
    A1[_RomainAlphabet.g], A2[_RomainAlphabet.g],
    A1[_RomainAlphabet.h], A2[_RomainAlphabet.h],
    A1[_RomainAlphabet.i], A2[_RomainAlphabet.i],
    A1[_RomainAlphabet.j], A2[_RomainAlphabet.j],
    A1[_RomainAlphabet.k], A2[_RomainAlphabet.k],
    A1[_RomainAlphabet.l], A2[_RomainAlphabet.l],
    A1[_RomainAlphabet.m], A2[_RomainAlphabet.m],
    A1[_RomainAlphabet.n], A2[_RomainAlphabet.n],
    A1[_RomainAlphabet.o], A2[_RomainAlphabet.o],
    A1[_RomainAlphabet.p], A2[_RomainAlphabet.p],
    A1[_RomainAlphabet.q], A2[_RomainAlphabet.q],
    A1[_RomainAlphabet.r], A2[_RomainAlphabet.r],
    A1[_RomainAlphabet.s], A2[_RomainAlphabet.s],
    A1[_RomainAlphabet.t], A2[_RomainAlphabet.t],
    A1[_RomainAlphabet.u], A2[_RomainAlphabet.u],
    A1[_RomainAlphabet.v], A2[_RomainAlphabet.v],
    A1[_RomainAlphabet.w], A2[_RomainAlphabet.w],
    A1[_RomainAlphabet.x], A2[_RomainAlphabet.x],
    A1[_RomainAlphabet.y], A2[_RomainAlphabet.y],
    A1[_RomainAlphabet.z], A2[_RomainAlphabet.z],
];
type _MergedRomainAlphabetArray4<A1 extends _SingleRomainAlphabetArray, A2 extends _SingleRomainAlphabetArray, A3 extends _SingleRomainAlphabetArray, A4 extends _SingleRomainAlphabetArray, > = readonly [
    A1[_RomainAlphabet.a], A2[_RomainAlphabet.a], A3[_RomainAlphabet.a], A4[_RomainAlphabet.a],
    A1[_RomainAlphabet.b], A2[_RomainAlphabet.b], A3[_RomainAlphabet.b], A4[_RomainAlphabet.b],
    A1[_RomainAlphabet.c], A2[_RomainAlphabet.c], A3[_RomainAlphabet.c], A4[_RomainAlphabet.c],
    A1[_RomainAlphabet.d], A2[_RomainAlphabet.d], A3[_RomainAlphabet.d], A4[_RomainAlphabet.d],
    A1[_RomainAlphabet.e], A2[_RomainAlphabet.e], A3[_RomainAlphabet.e], A4[_RomainAlphabet.e],
    A1[_RomainAlphabet.f], A2[_RomainAlphabet.f], A3[_RomainAlphabet.f], A4[_RomainAlphabet.f],
    A1[_RomainAlphabet.g], A2[_RomainAlphabet.g], A3[_RomainAlphabet.g], A4[_RomainAlphabet.g],
    A1[_RomainAlphabet.h], A2[_RomainAlphabet.h], A3[_RomainAlphabet.h], A4[_RomainAlphabet.h],
    A1[_RomainAlphabet.i], A2[_RomainAlphabet.i], A3[_RomainAlphabet.i], A4[_RomainAlphabet.i],
    A1[_RomainAlphabet.j], A2[_RomainAlphabet.j], A3[_RomainAlphabet.j], A4[_RomainAlphabet.j],
    A1[_RomainAlphabet.k], A2[_RomainAlphabet.k], A3[_RomainAlphabet.k], A4[_RomainAlphabet.k],
    A1[_RomainAlphabet.l], A2[_RomainAlphabet.l], A3[_RomainAlphabet.l], A4[_RomainAlphabet.l],
    A1[_RomainAlphabet.m], A2[_RomainAlphabet.m], A3[_RomainAlphabet.m], A4[_RomainAlphabet.m],
    A1[_RomainAlphabet.n], A2[_RomainAlphabet.n], A3[_RomainAlphabet.n], A4[_RomainAlphabet.n],
    A1[_RomainAlphabet.o], A2[_RomainAlphabet.o], A3[_RomainAlphabet.o], A4[_RomainAlphabet.o],
    A1[_RomainAlphabet.p], A2[_RomainAlphabet.p], A3[_RomainAlphabet.p], A4[_RomainAlphabet.p],
    A1[_RomainAlphabet.q], A2[_RomainAlphabet.q], A3[_RomainAlphabet.q], A4[_RomainAlphabet.q],
    A1[_RomainAlphabet.r], A2[_RomainAlphabet.r], A3[_RomainAlphabet.r], A4[_RomainAlphabet.r],
    A1[_RomainAlphabet.s], A2[_RomainAlphabet.s], A3[_RomainAlphabet.s], A4[_RomainAlphabet.s],
    A1[_RomainAlphabet.t], A2[_RomainAlphabet.t], A3[_RomainAlphabet.t], A4[_RomainAlphabet.t],
    A1[_RomainAlphabet.u], A2[_RomainAlphabet.u], A3[_RomainAlphabet.u], A4[_RomainAlphabet.u],
    A1[_RomainAlphabet.v], A2[_RomainAlphabet.v], A3[_RomainAlphabet.v], A4[_RomainAlphabet.v],
    A1[_RomainAlphabet.w], A2[_RomainAlphabet.w], A3[_RomainAlphabet.w], A4[_RomainAlphabet.w],
    A1[_RomainAlphabet.x], A2[_RomainAlphabet.x], A3[_RomainAlphabet.x], A4[_RomainAlphabet.x],
    A1[_RomainAlphabet.y], A2[_RomainAlphabet.y], A3[_RomainAlphabet.y], A4[_RomainAlphabet.y],
    A1[_RomainAlphabet.z], A2[_RomainAlphabet.z], A3[_RomainAlphabet.z], A4[_RomainAlphabet.z],
];


export type LowercaseRomainAlphabet_SpaceUneven_Array = readonly ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
export type UppercaseRomainAlphabet_SpaceUneven_Array = readonly ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
export type LowercaseRomainAlphabet_SpaceEven_Array = readonly ['ａ', 'ｂ', 'ｃ', 'ｄ', 'ｅ', 'ｆ', 'ｇ', 'ｈ', 'ｉ', 'ｊ', 'ｋ', 'ｌ', 'ｍ', 'ｎ', 'ｏ', 'ｐ', 'ｑ', 'ｒ', 'ｓ', 'ｔ', 'ｕ', 'ｖ', 'ｗ', 'ｘ', 'ｙ', 'ｚ',];
export type UppercaseRomainAlphabet_SpaceEven_Array = readonly ['Ａ', 'Ｂ', 'Ｃ', 'Ｄ', 'Ｅ', 'Ｆ', 'Ｇ', 'Ｈ', 'Ｉ', 'Ｊ', 'Ｋ', 'Ｌ', 'Ｍ', 'Ｎ', 'Ｏ', 'Ｐ', 'Ｑ', 'Ｒ', 'Ｓ', 'Ｔ', 'Ｕ', 'Ｖ', 'Ｗ', 'Ｘ', 'Ｙ', 'Ｚ',];

export type RomainAlphabet_SpaceUneven_Array = _MergedRomainAlphabetArray2<UppercaseRomainAlphabet_SpaceUneven_Array, LowercaseRomainAlphabet_SpaceUneven_Array>;
export type PossibleRomainAlphabet_SpaceUneven_Array = | UppercaseRomainAlphabet_SpaceUneven_Array | LowercaseRomainAlphabet_SpaceUneven_Array;

export type Letters_SpaceEven_Array = _MergedRomainAlphabetArray2<UppercaseRomainAlphabet_SpaceEven_Array, LowercaseRomainAlphabet_SpaceEven_Array>;
export type PossibleRomainAlphabet_SpaceEven_Array = | UppercaseRomainAlphabet_SpaceEven_Array | LowercaseRomainAlphabet_SpaceEven_Array;

export type LowercaseLetters_Array = _MergedRomainAlphabetArray2<LowercaseRomainAlphabet_SpaceEven_Array, LowercaseRomainAlphabet_SpaceUneven_Array>;
export type PossibleLowercaseRomainAlphabet_Array = | LowercaseRomainAlphabet_SpaceEven_Array | LowercaseRomainAlphabet_SpaceUneven_Array;

export type UppercaseLetters_Array = _MergedRomainAlphabetArray2<UppercaseRomainAlphabet_SpaceEven_Array, UppercaseRomainAlphabet_SpaceUneven_Array>;
export type PossibleUppercaseRomainAlphabet_Array = | UppercaseRomainAlphabet_SpaceEven_Array | UppercaseRomainAlphabet_SpaceUneven_Array;

export type Letters_Array = _MergedRomainAlphabetArray4<UppercaseRomainAlphabet_SpaceUneven_Array, LowercaseRomainAlphabet_SpaceUneven_Array, UppercaseRomainAlphabet_SpaceEven_Array, LowercaseRomainAlphabet_SpaceEven_Array>;
export type PossibleRomainAlphabet_Array = | UppercaseRomainAlphabet_SpaceUneven_Array | LowercaseRomainAlphabet_SpaceUneven_Array | UppercaseRomainAlphabet_SpaceEven_Array | LowercaseRomainAlphabet_SpaceEven_Array;

//endregion -------------------- Array types (romain alphabet) --------------------
//region -------------------- Array types (numbers) --------------------

export type EnumArray_Number<T extends Characters = Characters, > = readonly [
    SimpleEnum<T>['NUMBER_0'], SimpleEnum<T>['NUMBER_1'], SimpleEnum<T>['NUMBER_2'], SimpleEnum<T>['NUMBER_3'], SimpleEnum<T>['NUMBER_4'],
    SimpleEnum<T>['NUMBER_5'], SimpleEnum<T>['NUMBER_6'], SimpleEnum<T>['NUMBER_7'], SimpleEnum<T>['NUMBER_8'], SimpleEnum<T>['NUMBER_9'],
];

type _SingleNumbersArray = readonly [string, string, string, string, string, string, string, string, string, string,];
type _MergedNumberArray<A1 extends _SingleNumbersArray, A2 extends _SingleNumbersArray, > = [
    A1[0], A2[0],
    A1[1], A2[1],
    A1[2], A2[2],
    A1[3], A2[3],
    A1[4], A2[4],
    A1[5], A2[5],
    A1[6], A2[6],
    A1[7], A2[7],
    A1[8], A2[8],
    A1[9], A2[9],
];
export type Numbers_SpaceUneven_Array = readonly ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];
export type Numbers_SpaceEven_Array = readonly ['０', '１', '２', '３', '４', '５', '６', '７', '８', '９',];
export type Numbers_Array = _MergedNumberArray<Numbers_SpaceUneven_Array, Numbers_SpaceEven_Array>;
export type PossibleNumbers_Array = | Numbers_SpaceUneven_Array | Numbers_SpaceEven_Array;

//endregion -------------------- Array types (numbers) --------------------

export type EnumArray<T extends Characters = Characters, > = readonly [
    ...EnumArray_Points<T>,
    SimpleEnum<T>['COMMA'],
    SimpleEnum<T>['UNION_TRAIT'],

    SimpleEnum<T>['COMMERCIAL_AND'],

    ...EnumArray_Parentheses<T>,
    ...EnumArray_Brackets<T>,
    ...EnumArray_Braces<T>,

    ...EnumArray_Slashes<T>,

    ...EnumArray_RomainAlphabet<T>,

    ...EnumArray_Number<T>,
];

//endregion -------------------- Array types --------------------
//region -------------------- Equivalence types --------------------

export interface CharactersEquivalencesMap {

    //region -------------------- Space-uneven characters → Space-even characters

    '.': '．'
    '?': '？'
    '!': '！'
    ':': '：'
    ';': '；'
    ',': '，'
    '-': '－'

    '&': '＆'

    '/': '／'
    '|':'｜'

    '(': '（'
    ')': '）'
    '[': '［'
    ']': '］'
    '{': '｛'
    '}': '｝'

    'a': 'ａ'
    'b': 'ｂ'
    'c': 'ｃ'
    'd': 'ｄ'
    'e': 'ｅ'
    'f': 'ｆ'
    'g': 'ｇ'
    'h': 'ｈ'
    'i': 'ｉ'
    'j': 'ｊ'
    'k': 'ｋ'
    'l': 'ｌ'
    'm': 'ｍ'
    'n': 'ｎ'
    'o': 'ｏ'
    'p': 'ｐ'
    'q': 'ｑ'
    'r': 'ｒ'
    's': 'ｓ'
    't': 'ｔ'
    'u': 'ｕ'
    'v': 'ｖ'
    'w': 'ｗ'
    'x': 'ｘ'
    'y': 'ｙ'
    'z': 'ｚ'

    'A': 'Ａ'
    'B': 'Ｂ'
    'C': 'Ｃ'
    'D': 'Ｄ'
    'E': 'Ｅ'
    'F': 'Ｆ'
    'G': 'Ｇ'
    'H': 'Ｈ'
    'I': 'Ｉ'
    'J': 'Ｊ'
    'K': 'Ｋ'
    'L': 'Ｌ'
    'M': 'Ｍ'
    'N': 'Ｎ'
    'O': 'Ｏ'
    'P': 'Ｐ'
    'Q': 'Ｑ'
    'R': 'Ｒ'
    'S': 'Ｓ'
    'T': 'Ｔ'
    'U': 'Ｕ'
    'V': 'Ｖ'
    'W': 'Ｗ'
    'X': 'Ｘ'
    'Y': 'Ｙ'
    'Z': 'Ｚ'

    '0': '０'
    '1': '１'
    '2': '２'
    '3': '３'
    '4': '４'
    '5': '５'
    '6': '６'
    '7': '７'
    '8': '８'
    '9': '９'

    //endregion -------------------- Space-uneven characters → Space-even characters
    //region -------------------- Space-even characters → Space-uneven characters

    '．': '.'
    '？': '?'
    '！': '!'
    '：': ':'
    '；': ';'
    '，': ','
    '－': '-'

    '（': '('
    '）': ')'
    '［': '['
    '］': ']'
    '｛': '{'
    '｝': '}'

    '＆': '&'

    '／': '/'
    '｜': '|'

    'ａ': 'a'
    'ｂ': 'b'
    'ｃ': 'c'
    'ｄ': 'd'
    'ｅ': 'e'
    'ｆ': 'f'
    'ｇ': 'g'
    'ｈ': 'h'
    'ｉ': 'i'
    'ｊ': 'j'
    'ｋ': 'k'
    'ｌ': 'l'
    'ｍ': 'm'
    'ｎ': 'n'
    'ｏ': 'o'
    'ｐ': 'p'
    'ｑ': 'q'
    'ｒ': 'r'
    'ｓ': 's'
    'ｔ': 't'
    'ｕ': 'u'
    'ｖ': 'v'
    'ｗ': 'w'
    'ｘ': 'x'
    'ｙ': 'y'
    'ｚ': 'z'


    'Ａ': 'A'
    'Ｂ': 'B'
    'Ｃ': 'C'
    'Ｄ': 'D'
    'Ｅ': 'E'
    'Ｆ': 'F'
    'Ｇ': 'G'
    'Ｈ': 'H'
    'Ｉ': 'I'
    'Ｊ': 'J'
    'Ｋ': 'K'
    'Ｌ': 'L'
    'Ｍ': 'M'
    'Ｎ': 'N'
    'Ｏ': 'O'
    'Ｐ': 'P'
    'Ｑ': 'Q'
    'Ｒ': 'R'
    'Ｓ': 'S'
    'Ｔ': 'T'
    'Ｕ': 'U'
    'Ｖ': 'V'
    'Ｗ': 'W'
    'Ｘ': 'X'
    'Ｙ': 'Y'
    'Ｚ': 'Z'

    '０': '0'
    '１': '1'
    '２': '2'
    '３': '3'
    '４': '4'
    '５': '5'
    '６': '6'
    '７': '7'
    '８': '8'
    '９': '9'

    //endregion -------------------- Space-even characters → Space-uneven characters

}

export type SpaceEvenCharacterFromEquivalenceMap<S extends PossibleSingleCharacter, > =   S extends SpaceEvenCharacter ? S :                            S extends SpaceUnevenCharacter ? CharactersEquivalencesMap[S] : | SpaceEvenCharacter | CharactersEquivalencesMap[S];
export type SpaceUnevenCharacterFromEquivalenceMap<S extends PossibleSingleCharacter, > = S extends SpaceEvenCharacter ? CharactersEquivalencesMap[S] : S extends SpaceUnevenCharacter ? S :                            | SpaceUnevenCharacter | CharactersEquivalencesMap[S];

//endregion -------------------- Equivalence types --------------------
