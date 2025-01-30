declare const enum Enum {
    GOOMBA,
    KOOPA_TROOPA,
    PIRANHA_PLANT,
    SPINY,
    CHEEP_CHEEP,
    BLOOPER,
    LAKITU,
    BOWSER,
    TOAD,
    PRINCESS_PEACH,
}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

export type PossibleEnglishName = | 'Goomba' | 'Koopa Troopa'
                                  | 'Piranha Plant' | 'Spiny'
                                  | 'Cheep Cheep' | 'Blooper'
                                  | 'Lakitu' | 'Bowser'
                                  | 'Toad' | 'Princess Peach'


export type PossibleImageNumber = | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type PossibleImageName = `Honor_Medal_0${PossibleImageNumber}^l.bflim`
