import type {PossibleBraces_Array, PossibleBrackets_Array, PossibleChevrons_Array, PossibleColon, PossibleComma, PossibleCommercialAnd, PossibleEndingBrace, PossibleEndingBracket, PossibleEndingChevron, PossibleEndingParentheses, PossibleExclamationPoint, PossibleInterrogationPoint, PossibleLowercaseRomainAlphabet_Array, PossibleNumbers_Array, PossibleParentheses_Array, PossiblePoint, PossiblePoints_Array, PossibleSemicolon, PossibleSingleCharacter, PossibleSlash, PossibleSlashes_Array, PossibleStartingBrace, PossibleStartingBracket, PossibleStartingChevron, PossibleStartingParentheses, PossibleUnionTrait, PossibleUppercaseRomainAlphabet_Array, PossibleVerticalSlash, TextInBraces, TextInBrackets, TextInParentheses, VariableCharacterByCharacter, VariableCharacterByString} from 'lang/Characters.types'

export interface CharactersTrait<B extends boolean = boolean, > {

    //region -------------------- Getter methods --------------------

    get points(): PossiblePoints_Array

    get point(): PossiblePoint

    get interrogationPoint(): PossibleInterrogationPoint

    get exclamationPoint(): PossibleExclamationPoint

    get colon(): PossibleColon

    get semicolon(): PossibleSemicolon

    get comma(): PossibleComma

    get unionTrait(): PossibleUnionTrait


    get commercialAnd(): PossibleCommercialAnd


    get parentheses(): PossibleParentheses_Array

    get startingParenthesis(): PossibleStartingParentheses

    get endingParenthesis(): PossibleEndingParentheses


    get brackets(): PossibleBrackets_Array

    get startingBrackets(): PossibleStartingBracket

    get endingBrackets(): PossibleEndingBracket


    get braces(): PossibleBraces_Array

    get startingBraces(): PossibleStartingBrace

    get endingBraces(): PossibleEndingBrace


    get chevrons(): PossibleChevrons_Array

    get startingChevrons(): PossibleStartingChevron

    get endingChevrons(): PossibleEndingChevron


    get slashes(): PossibleSlashes_Array

    get slash(): PossibleSlash

    get verticalSlash(): PossibleVerticalSlash


    get romainLowercaseAlphabet(): PossibleLowercaseRomainAlphabet_Array

    get romainUppercaseAlphabet(): PossibleUppercaseRomainAlphabet_Array


    get numbers(): PossibleNumbers_Array


    character<C extends PossibleSingleCharacter, >(character: C,): VariableCharacterByCharacter<B, C>

    character<C extends string, >(character: C,): VariableCharacterByString<B, C>

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    textInParentheses<S extends string, >(text: S,): TextInParentheses<B, S>

    textInBrackets<S extends string, >(text: S,): TextInBrackets<B, S>

    textInBraces<S extends string, >(text: S,): TextInBraces<B, S>

    //endregion -------------------- Methods --------------------

}
