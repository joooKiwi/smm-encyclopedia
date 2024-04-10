export type PossibleLimitAmount_SMM1And3DS_Amount = | 1 | 2 | 3 | 4 | 5 | 6 | 8
                                                    | 10 | 50
                                                    | 100 | 200 | 300 | 400
                                                    | 2000

export type PossibleLimitAmount_SMM2_Amount = | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
                                              | 10 | 50
                                              | 100 | 200 | 300 | 400 | 483 | 500 | 999
                                              | 1500 | 2000 | 4000

export type PossibleLimitAmount_Comment = | 'Crash online if met' | 'In a single frame' | `Per ${| 'player' | 'pair' | 'section'}`
