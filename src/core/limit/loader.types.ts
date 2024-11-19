export type PossibleLimitAmount_SMM1And3DS_Amount = | 1 | 2 | 3 | 4 | 5 | 6 | 8
                                                    | 10 | 50
                                                    | 100 | 200 | 300 | 400
                                                    | 2000

export type PossibleLimitAmount_SMM2_Amount = | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
                                              | 10 | 50
                                              | 100 | 200 | 300 | 400 | 401 | 483 | 500 | 999
                                              | 1500 | 2000 | 4000

export type PossibleLimitAmount_Comment = | 'Crash online if met'
                                          | 'Is pitch black if met'
                                          | 'In a single frame'
                                          | `Per ${| 'player' | 'pair' | 'section'}`

export type PossibleLimitDescription = | 'Most enemy and some blocks being present'
                                       | 'Power-up (in game code) being present'
                                       | 'Coin in a loose state'
                                       | `${| 'Sound effects'
                                            | 'Ground blocks' | 'Blocks'
                                            | 'Platforms, slopes, Conveyor Belt, Pipe, Clear Pipe, Vine'
                                            | 'Clear Pipe'
                                            | 'Checkpoint Flag'
                                            | 'Track' | 'Snake Block' | '! Block' | 'Track Block'
                                            | 'Icicle'
                                            | 'One-Way Wall, Arrow Sign, Dash Block'
                                            | '10-Coin, 30-Coin, 50-Coin'
                                            | 'Pink Coin'
                                            | 'Entity marked as a power-up (in game code)'
                                            | 'Most enemy and some blocks'
                                            | 'Charvaargh' | 'Piranha Creeper'
                                            | 'Bowser, Bowser Jr.' | 'Boom Boom, Pom Pom' | 'Koopaling'
                                            | 'Angry Sun, Moon'
                                            | 'Koopa Troopa Car'
                                            | 'Warp Doors' | 'Warp Boxes' | 'Warpable Pipes'} being placed`
                                       | 'Entity having corpse (animation in game code) being present (in 1 frame)'
                                       | 'Entity marked as projectile (in game code)'
                                       | 'Entity that can emit light source'
                                       | 'Vine growing or has grown'
                                       | 'Maximum entity held by 1 Twister'
                                       | 'Snowball thrown by 1 Spike'
                                       | 'Maximum clear condition amount in 1 level'
                                       | 'Entity having an animation (in game code) being rendered (in 1 frame)'
                                       | 'Coin (in loose state) collected in 1 frame'
                                       | 'Key held by 1 player'
                                       | `${| 'Fireball' | 'Superball' | 'Bomb' | 'Builder Box' | 'Boomerang' | 'Cannonball'} being thrown`
                                       | `${| 'Yoshi' | 'Phanto'} being present`
