import type {PossibleBraces_Collection, PossibleBrackets_Collection, PossibleChevrons_Collection, PossibleColon, PossibleComma, PossibleCommercialAnd, PossibleEndingBrace, PossibleEndingBracket, PossibleEndingChevron, PossibleEndingParentheses, PossibleExclamationPoint, PossibleInterrogationPoint, PossibleLowercaseRomainAlphabet_Collection, PossibleNumbers_Collection, PossibleParentheses_Collection, PossiblePoint, PossiblePoints_Collection, PossibleSemicolon, PossibleSingleCharacter, PossibleSlash, PossibleSlashes_Collection, PossibleStartingBrace, PossibleStartingBracket, PossibleStartingChevron, PossibleStartingParentheses, PossibleUnionTrait, PossibleUppercaseRomainAlphabet_Collection, PossibleVerticalSlash, TextInBraces, TextInBrackets, TextInParentheses, VariableCharacterByCharacter, VariableCharacterByString} from 'lang/Characters.types'

export interface CharactersTrait<B extends boolean = boolean, > {

    //region -------------------- Getter methods --------------------

    get points(): PossiblePoints_Collection

    get point(): PossiblePoint

    get interrogationPoint(): PossibleInterrogationPoint

    get exclamationPoint(): PossibleExclamationPoint

    get colon(): PossibleColon

    get semicolon(): PossibleSemicolon

    get comma(): PossibleComma

    get unionTrait(): PossibleUnionTrait


    get commercialAnd(): PossibleCommercialAnd


    get parentheses(): PossibleParentheses_Collection

    get startingParenthesis(): PossibleStartingParentheses

    get endingParenthesis(): PossibleEndingParentheses


    get brackets(): PossibleBrackets_Collection

    get startingBrackets(): PossibleStartingBracket

    get endingBrackets(): PossibleEndingBracket


    get braces(): PossibleBraces_Collection

    get startingBraces(): PossibleStartingBrace

    get endingBraces(): PossibleEndingBrace


    get chevrons(): PossibleChevrons_Collection

    get startingChevrons(): PossibleStartingChevron

    get endingChevrons(): PossibleEndingChevron


    get slashes(): PossibleSlashes_Collection

    get slash(): PossibleSlash

    get verticalSlash(): PossibleVerticalSlash


    get romainLowercaseAlphabet(): PossibleLowercaseRomainAlphabet_Collection

    get romainUppercaseAlphabet(): PossibleUppercaseRomainAlphabet_Collection


    get numbers(): PossibleNumbers_Collection


    character<C extends PossibleSingleCharacter, >(character: C,): VariableCharacterByCharacter<B, C>

    character<C extends string, >(character: C,): VariableCharacterByString<B, C>

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    textInParentheses<S extends string, >(text: S,): TextInParentheses<B, S>

    textInBrackets<S extends string, >(text: S,): TextInBrackets<B, S>

    textInBraces<S extends string, >(text: S,): TextInBraces<B, S>

    //endregion -------------------- Methods --------------------

}
