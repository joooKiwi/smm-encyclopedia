export interface UnlockProperty {

    get conditionToUnlockIt(): PossibleConditionToUnlockIt

    get canBeUnlockedByAnAmiibo(): boolean

}

export type PossibleConditionToUnlockIt = | 'Unlock Mystery Mushroom'
                                          | `100 Mario (${| 'easy' | 'normal' | 'expert' | 'super expert'})`
                                          | `Gnat Attack (${| 'normal' | 'hard'})`
                                          | 'Complete Event' | 'Complete 3 Events (by Arino)';
