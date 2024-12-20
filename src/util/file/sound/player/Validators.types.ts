enum Enum {
    ALL_YES,
    ALL_NO,
    ON_PLAY_ONLY,
    ON_CREATE_ONLY,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum


export type EnglishName = | `all ${| 'yes' | 'no'}` | `on ${| 'play' | 'create'} only`

export type IsSourceFoundCallback = (value?: boolean,) => void
