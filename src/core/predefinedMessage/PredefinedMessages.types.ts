enum Enum {

    THANKS, HERE_WE_GO, NICE_WORK,
    IM_DONE_FOR, SORRY, NO_WORRIES,
    NICE, HOW, GOTCHA,
    SO_TOUGH, OOPS, WAHOO,
    OH_NO, WE_VE_GOT_THIS, TEAMWORK,
    FOLLOW_ME, HELP, RUN_FOR_IT,
    JUUUUUMP, HOP_ON, THROW,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- English name --------------------

export type PossibleEnglishName =
    | 'Thanks!' | 'Here we go!' | 'Nice work.'
    | 'I’m done for...' | 'Sorry!' | 'No worries!'
    | 'Nice!' | 'How?!' | 'Gotcha.'
    | 'So tough!' | 'OOPS!' | 'WAHOO!'
    | 'Oh no...' | 'We’ve got this.' | 'Teamwork!'
    | 'Follow me.' | 'HELP!' | 'Run for it!'
    | 'Juuuuump!' | 'Hop on!' | 'Throw!'

//endregion -------------------- English name --------------------
