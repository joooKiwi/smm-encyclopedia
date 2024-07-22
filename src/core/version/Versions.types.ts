enum Enum {

    SMM_V1_00, SMM_V1_01,
    SMM_V1_10,
    SMM_V1_20, SMM_V1_21,
    SMM_V1_30, SMM_V1_31, SMM_V1_32,
    SMM_V1_40, SMM_V1_41, SMM_V1_42, SMM_V1_43, SMM_V1_44, SMM_V1_45, SMM_V1_46, SMM_V1_47,

    SMM3DS_V1_00, SMM3DS_V1_02, SMM3DS_V1_03, SMM3DS_V1_04, SMM3DS_V1_05,

    SMM2_V1_0_0, SMM2_V1_1_0,
    SMM2_V2_0_0,
    SMM2_V3_0_0, SMM2_SM3DW_V3_0_0, SMM2_V3_0_1, SMM2_V3_0_2, SMM2_V3_0_3,

}

export type Ordinals = typeof Enum[Names]
export type Names = keyof typeof Enum

//region -------------------- Name --------------------

export type PossibleName = | PossibleName_SMM1 | PossibleName_SMM3DS | PossibleName_SMM2
export type PossibleName_SMM1 = `v1.${| `${| 0 | 1 | 2 | 3 | 4}0` | `${| 0 | 2 | 3 | 4}1` | `${| 3 | 4}2` | `4${| 3 | 4 | 5 | 6 | 7}`}`
export type PossibleName_SMM3DS = `v1.0${| 0 | 2 | 3 | 4 | 5}`
export type PossibleName_SMM2 = | PossibleName_SMM2_Number | 'SM3DW v3.0.0'
export type PossibleName_SMM2_Number = `v${`1.${| 0 | 1}.0` | '2.0.0' | `3.0.${| 0 | 1 | 2 | 3}`}`

//endregion -------------------- Name --------------------
