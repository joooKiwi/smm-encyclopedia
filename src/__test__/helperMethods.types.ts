export type PossibleExcludedLanguages =
    | `english${| '' | ` (${| 'america' | 'europe'})`}`
    | `french${| '' | ` (${| 'canada' | 'europe'})`}`
    | 'german'
    | `spanish${| '' | ` (${| 'america' | 'europe'})`}`
    | 'italian'
    | 'dutch'
    | `portuguese${| '' | ` (${| 'america' | 'europe'})`}`
    | 'russian'
    | 'japanese'
    | `${| '' | `${| 'traditional' | 'simplified'} `}chinese`
    | 'korean'
// | 'hebrew'
// | 'polish'
// | 'ukrainian'
// | 'greek'
