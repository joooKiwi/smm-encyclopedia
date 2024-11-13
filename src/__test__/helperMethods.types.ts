export type PossibleExcludedLanguages =
    | `english${| EmptyString | ` (${| 'america' | 'europe'})`}`
    | `french${| EmptyString | ` (${| 'canada' | 'europe'})`}`
    | 'german'
    | `spanish${| EmptyString | ` (${| 'america' | 'europe'})`}`
    | 'italian'
    | 'dutch'
    | `portuguese${| EmptyString | ` (${| 'america' | 'europe'})`}`
    | 'russian'
    | 'japanese'
    | `${| EmptyString | `${| 'traditional' | 'simplified'} `}chinese`
    | 'korean'
// | 'hebrew'
// | 'polish'
// | 'ukrainian'
// | 'greek'
