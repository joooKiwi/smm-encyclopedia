import type {Characters} from 'lang/Characters'

export type PossibleSingleCharacter = | SpaceEvenCharacter | SpaceUnevenCharacter

declare const enum Enum {// eslint-disable-line @typescript-eslint/no-unused-vars
    POINT, INTERROGATION_POINT, EXCLAMATION_POINT,
    COLON, SEMICOLON,
    COMMA,
    UNION_TRAIT,

    COMMERCIAL_AND,

    STARTING_PARENTHESIS, ENDING_PARENTHESIS,
    STARTING_BRACKET, ENDING_BRACKET,
    STARTING_BRACE, ENDING_BRACE,
    STARTING_CHEVRON, ENDING_CHEVRON,

    SLASH, VERTICAL_SLASH,

    UPPER_LETTER_A, LOWER_LETTER_A,
    UPPER_LETTER_B, LOWER_LETTER_B,
    UPPER_LETTER_C, LOWER_LETTER_C,
    UPPER_LETTER_D, LOWER_LETTER_D,
    UPPER_LETTER_E, LOWER_LETTER_E,
    UPPER_LETTER_F, LOWER_LETTER_F,
    UPPER_LETTER_G, LOWER_LETTER_G,
    UPPER_LETTER_H, LOWER_LETTER_H,
    UPPER_LETTER_I, LOWER_LETTER_I,
    UPPER_LETTER_J, LOWER_LETTER_J,
    UPPER_LETTER_K, LOWER_LETTER_K,
    UPPER_LETTER_L, LOWER_LETTER_L,
    UPPER_LETTER_M, LOWER_LETTER_M,
    UPPER_LETTER_N, LOWER_LETTER_N,
    UPPER_LETTER_O, LOWER_LETTER_O,
    UPPER_LETTER_P, LOWER_LETTER_P,
    UPPER_LETTER_Q, LOWER_LETTER_Q,
    UPPER_LETTER_R, LOWER_LETTER_R,
    UPPER_LETTER_S, LOWER_LETTER_S,
    UPPER_LETTER_T, LOWER_LETTER_T,
    UPPER_LETTER_U, LOWER_LETTER_U,
    UPPER_LETTER_V, LOWER_LETTER_V,
    UPPER_LETTER_W, LOWER_LETTER_W,
    UPPER_LETTER_X, LOWER_LETTER_X,
    UPPER_LETTER_Y, LOWER_LETTER_Y,
    UPPER_LETTER_Z, LOWER_LETTER_Z,

    NUMBER_0, NUMBER_1, NUMBER_2, NUMBER_3, NUMBER_4,
    NUMBER_5, NUMBER_6, NUMBER_7, NUMBER_8, NUMBER_9,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- Utility types --------------------

export type VariableValueByBoolean<B extends boolean, V1, V2, > = B extends true ? V1 : B extends false ? V2 : | V1 | V2

export type VariableCharacterByCharacter<B extends boolean, C extends PossibleSingleCharacter, > = VariableValueByBoolean<B, SpaceEvenCharacterFromEquivalenceMap<C>, SpaceUnevenCharacterFromEquivalenceMap<C>>
export type VariableCharacterByString<B extends boolean, C extends string, > = C extends PossibleSingleCharacter ? VariableCharacterByCharacter<B, C> : PossibleSingleCharacter

export type TextInParentheses<B extends boolean, S extends string, > = VariableValueByBoolean<B, `${SpaceEvenCharacter_StartingParenthesis}${S}${SpaceEvenCharacter_EndingParenthesis}`, `${SpaceUnevenCharacter_StartingParenthesis}${S}${SpaceUnevenCharacter_EndingParenthesis}`>
export type TextInBrackets<B extends boolean, S extends string, > =    VariableValueByBoolean<B, `${SpaceEvenCharacter_StartingBracket    }${S}${SpaceEvenCharacter_EndingBracket}`,     `${SpaceUnevenCharacter_StartingBracket    }${S}${SpaceUnevenCharacter_EndingBracket}`>
export type TextInBraces<B extends boolean, S extends string, > =      VariableValueByBoolean<B, `${SpaceEvenCharacter_StartingBrace      }${S}${SpaceEvenCharacter_EndingBrace}`,       `${SpaceUnevenCharacter_StartingBrace      }${S}${SpaceUnevenCharacter_EndingBrace}`>
export type TextInChevrons<B extends boolean, S extends string, > =    VariableValueByBoolean<B, `${SpaceEvenCharacter_StartingChevron    }${S}${SpaceEvenCharacter_EndingChevron}`,     `${SpaceUnevenCharacter_StartingChevron    }${S}${SpaceUnevenCharacter_EndingChevron}`>

//endregion -------------------- Utility types --------------------
//region -------------------- Character types --------------------

export type SpaceEvenCharacter = | '．' | '？' | '！' | '：' | '；' | '，' | '－' | '＆'
                                 | '／' | '｜' | '（' | '）' | '｛' | '｝' | '［' | '］' | '＜' | '＞'
                                 | 'Ａ' | 'Ｂ' | 'Ｃ' | 'Ｄ' | 'Ｅ' | 'Ｆ' | 'Ｇ' | 'Ｈ' | 'Ｉ' | 'Ｊ' | 'Ｋ' | 'Ｌ' | 'Ｍ' | 'Ｎ' | 'Ｏ' | 'Ｐ' | 'Ｑ' | 'Ｒ' | 'Ｓ' | 'Ｔ' | 'Ｕ' | 'Ｖ' | 'Ｗ' | 'Ｘ' | 'Ｙ' | 'Ｚ'
                                 | 'ａ' | 'ｂ' | 'ｃ' | 'ｄ' | 'ｅ' | 'ｆ' | 'ｇ' | 'ｈ' | 'ｉ' | 'ｊ' | 'ｋ' | 'ｌ' | 'ｍ' | 'ｎ' | 'ｏ' | 'ｐ' | 'ｑ' | 'ｒ' | 'ｓ' | 'ｔ' | 'ｕ' | 'ｖ' | 'ｗ' | 'ｘ' | 'ｙ' | 'ｚ'
                                 | '０' | '１' | '２' | '３' | '４' | '５' | '６' | '７' | '８' | '９'

export type SpaceUnevenCharacter = | '.' | '?' | '!' | ':' | ';' | ',' | '-' | '&'
                                   | '/' | '|' | '(' | ')' | '{' | '}' | '[' | ']' | '⟨' | '⟩'
                                   | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z'
                                   | 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z'
                                   | `${| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`


//endregion -------------------- Character types --------------------
//region -------------------- Single types --------------------

type SpaceEvenCharacter_StartingParenthesis =  typeof Characters['STARTING_PARENTHESIS']['spaceEvenCharacter']
type SpaceEvenCharacter_EndingParenthesis =    typeof Characters['ENDING_PARENTHESIS']  ['spaceEvenCharacter']
type SpaceEvenCharacter_StartingBracket =      typeof Characters['STARTING_BRACKET']    ['spaceEvenCharacter']
type SpaceEvenCharacter_EndingBracket =        typeof Characters['ENDING_BRACKET']      ['spaceEvenCharacter']
type SpaceEvenCharacter_StartingBrace =        typeof Characters['STARTING_BRACE']      ['spaceEvenCharacter']
type SpaceEvenCharacter_EndingBrace =          typeof Characters['ENDING_BRACE']        ['spaceEvenCharacter']
type SpaceEvenCharacter_StartingChevron =      typeof Characters['STARTING_CHEVRON']    ['spaceEvenCharacter']
type SpaceEvenCharacter_EndingChevron =        typeof Characters['ENDING_CHEVRON']      ['spaceEvenCharacter']

type SpaceUnevenCharacter_StartingParenthesis = typeof Characters['STARTING_PARENTHESIS']['spaceUnevenCharacter']
type SpaceUnevenCharacter_EndingParenthesis =   typeof Characters['ENDING_PARENTHESIS']  ['spaceUnevenCharacter']
type SpaceUnevenCharacter_StartingBracket =     typeof Characters['STARTING_BRACKET']    ['spaceUnevenCharacter']
type SpaceUnevenCharacter_EndingBracket =       typeof Characters['ENDING_BRACKET']      ['spaceUnevenCharacter']
type SpaceUnevenCharacter_StartingBrace =       typeof Characters['STARTING_BRACE']      ['spaceUnevenCharacter']
type SpaceUnevenCharacter_EndingBrace =         typeof Characters['ENDING_BRACE']        ['spaceUnevenCharacter']
type SpaceUnevenCharacter_StartingChevron =     typeof Characters['STARTING_CHEVRON']    ['spaceUnevenCharacter']
type SpaceUnevenCharacter_EndingChevron =       typeof Characters['ENDING_CHEVRON']      ['spaceUnevenCharacter']

//endregion -------------------- Single types --------------------
//region -------------------- Possible types --------------------

export type PossiblePoint =               typeof Characters['POINT']               [| 'spaceEvenCharacter' | 'spaceUnevenCharacter']
export type PossibleInterrogationPoint =  typeof Characters['INTERROGATION_POINT'] [| 'spaceEvenCharacter' | 'spaceUnevenCharacter']
export type PossibleExclamationPoint =    typeof Characters['EXCLAMATION_POINT']   [| 'spaceEvenCharacter' | 'spaceUnevenCharacter']
export type PossibleColon =               typeof Characters['COLON']               [| 'spaceEvenCharacter' | 'spaceUnevenCharacter']
export type PossibleSemicolon =           typeof Characters['SEMICOLON']           [| 'spaceEvenCharacter' | 'spaceUnevenCharacter']
export type PossibleComma =               typeof Characters['COMMA']               [| 'spaceEvenCharacter' | 'spaceUnevenCharacter']
export type PossibleUnionTrait =          typeof Characters['UNION_TRAIT']         [| 'spaceEvenCharacter' | 'spaceUnevenCharacter']
export type PossibleCommercialAnd =       typeof Characters['COMMERCIAL_AND']      [| 'spaceEvenCharacter' | 'spaceUnevenCharacter']
export type PossibleStartingParentheses = typeof Characters['STARTING_PARENTHESIS'][| 'spaceEvenCharacter' | 'spaceUnevenCharacter']
export type PossibleEndingParentheses =   typeof Characters['ENDING_PARENTHESIS']  [| 'spaceEvenCharacter' | 'spaceUnevenCharacter']
export type PossibleStartingBracket =     typeof Characters['STARTING_BRACKET']    [| 'spaceEvenCharacter' | 'spaceUnevenCharacter']
export type PossibleEndingBracket =       typeof Characters['ENDING_BRACKET']      [| 'spaceEvenCharacter' | 'spaceUnevenCharacter']
export type PossibleStartingBrace =       typeof Characters['STARTING_BRACE']      [| 'spaceEvenCharacter' | 'spaceUnevenCharacter']
export type PossibleEndingBrace =         typeof Characters['ENDING_BRACE']        [| 'spaceEvenCharacter' | 'spaceUnevenCharacter']
export type PossibleStartingChevron =     typeof Characters['STARTING_CHEVRON']    [| 'spaceEvenCharacter' | 'spaceUnevenCharacter']
export type PossibleEndingChevron =       typeof Characters['ENDING_CHEVRON']      [| 'spaceEvenCharacter' | 'spaceUnevenCharacter']
export type PossibleSlash =               typeof Characters['SLASH']               [| 'spaceEvenCharacter' | 'spaceUnevenCharacter']
export type PossibleVerticalSlash =       typeof Characters['VERTICAL_SLASH']      [| 'spaceEvenCharacter' | 'spaceUnevenCharacter']

//endregion -------------------- Possible types --------------------
//region -------------------- Array types --------------------

export type PossiblePoints_Collection =                  typeof Characters[| 'POINTS_SPACE_UNEVEN' | 'POINTS_SPACE_EVEN']
export type PossibleParentheses_Collection =             typeof Characters[| 'PARENTHESES_SPACE_UNEVEN' | 'PARENTHESES_SPACE_EVEN']
export type PossibleBrackets_Collection =                typeof Characters[| 'BRACKETS_SPACE_UNEVEN' | 'BRACKETS_SPACE_EVEN']
export type PossibleBraces_Collection =                  typeof Characters[| 'BRACES_SPACE_UNEVEN' | 'BRACES_SPACE_EVEN']
export type PossibleChevrons_Collection =                typeof Characters[| 'CHEVRONS_SPACE_UNEVEN' | 'CHEVRONS_SPACE_EVEN']
export type PossibleSlashes_Collection =                 typeof Characters[| 'SLASHES_SPACE_UNEVEN' | 'SLASHES_SPACE_EVEN']
export type PossibleRomainAlphabet_Collection =          typeof Characters[| 'LETTERS_SPACE_UNEVEN' | 'LETTERS_SPACE_EVEN']
export type PossibleLowercaseRomainAlphabet_Collection = typeof Characters[| 'LOWER_LETTERS_SPACE_UNEVEN' | 'LOWER_LETTERS_SPACE_EVEN']
export type PossibleUppercaseRomainAlphabet_Collection = typeof Characters[| 'UPPER_LETTERS_SPACE_UNEVEN' | 'UPPER_LETTERS_SPACE_EVEN']
export type PossibleNumbers_Collection =                 typeof Characters[| 'NUMBERS_SPACE_UNEVEN' | 'NUMBERS_SPACE_EVEN']

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
    '|': '｜'

    '(': '（'
    ')': '）'
    '[': '［'
    ']': '］'
    '{': '｛'
    '}': '｝'
    '⟨': '＜'
    '⟩': '＞'

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
    '＜': '⟨'
    '＞': '⟩'

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

export type SpaceEvenCharacterFromEquivalenceMap<S extends PossibleSingleCharacter, > = S extends SpaceEvenCharacter ? S : S extends SpaceUnevenCharacter ? CharactersEquivalencesMap[S] : | SpaceEvenCharacter | CharactersEquivalencesMap[S]
export type SpaceUnevenCharacterFromEquivalenceMap<S extends PossibleSingleCharacter, > = S extends SpaceEvenCharacter ? CharactersEquivalencesMap[S] : S extends SpaceUnevenCharacter ? S : | SpaceUnevenCharacter | CharactersEquivalencesMap[S]

//endregion -------------------- Equivalence types --------------------
