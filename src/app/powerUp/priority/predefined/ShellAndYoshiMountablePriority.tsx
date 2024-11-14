import type {ImagesCallbackByPriority, PowerUpPriority} from 'app/powerUp/priority/PowerUpPriority'
import type {GameStyles}                                from 'core/gameStyle/GameStyles'
import type {GameCollection}                            from 'util/collection/GameCollection'
import type {SimpleReactPropertiesWithChildren}         from 'util/react/ReactProperties'

import GroupOf4PowerUpPriority  from 'app/powerUp/group/GroupOf4PowerUpPriority'
import GroupOf5PowerUpPriority  from 'app/powerUp/group/GroupOf5PowerUpPriority'
import PowerUpPriorityComponent from 'app/powerUp/priority/PowerUpPriority.component'

type ShellAndYoshiMountablePriorities<T extends PowerUpPriority, > = readonly [
    buzzyShell: T,
    spinyShell: T,

    dryBonesShell: T,
    yoshi: T,
    redYoshi: T,
]
interface ShellAndYoshiMountablePriorityProperties<T extends PowerUpPriority, >
    extends SimpleReactPropertiesWithChildren<ShellAndYoshiMountablePriorities<T>> {

    readonly games: GameCollection

    readonly gameStyle: GameStyles

    readonly images: ImagesCallbackByPriority<T>

}

export default function ShellAndYoshiMountablePriority<T extends PowerUpPriority, >({games: {hasSMM2,}, gameStyle: {acronym,}, images, children: [buzzyShell, spinyShell, dryBonesShell, yoshi, redYoshi,],}: ShellAndYoshiMountablePriorityProperties<T>,) {
    const lowerCaseAcronym = acronym.toLowerCase()

    //TODO change the top & bottom on the group of 4 and other similar to the group of 5 to be in "- - - >" instead of "--->"
    //TODO change the group of 5 to have the single one at the bottom instead of the top
    return hasSMM2
        ? <GroupOf5PowerUpPriority id={`powerUpPriority-group-${lowerCaseAcronym}-shellAndMountable`}>
            <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Dry Bones Shell)`} id={`powerUpPriority-${lowerCaseAcronym}-dryBonesShell`} value={dryBonesShell} images={images}/>
            <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Buzzy Shell)`}     id={`powerUpPriority-${lowerCaseAcronym}-buzzyShell`}    value={buzzyShell}    images={images}/>
            <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Spiny Shell)`}     id={`powerUpPriority-${lowerCaseAcronym}-spinyShell`}    value={spinyShell}    images={images}/>
            <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Yoshi)`}           id={`powerUpPriority-${lowerCaseAcronym}-yoshi`}         value={yoshi}         images={images}/>
            <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Red Yoshi)`}       id={`powerUpPriority-${lowerCaseAcronym}-redYoshi`}      value={redYoshi}      images={images}/>
        </GroupOf5PowerUpPriority>
        : <GroupOf4PowerUpPriority id={`powerUpPriority-group-${lowerCaseAcronym}-shellAndMountable`}>
            <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Buzzy Shell)`}      id={`powerUpPriority-${lowerCaseAcronym}-buzzyShell`}   value={buzzyShell}    images={images}/>
            <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Spiny Shell)`}      id={`powerUpPriority-${lowerCaseAcronym}-spinyShell`}   value={spinyShell}    images={images}/>
            <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Yoshi)`}            id={`powerUpPriority-${lowerCaseAcronym}-yoshi`}        value={yoshi}         images={images}/>
            <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Red Yoshi)`}        id={`powerUpPriority-${lowerCaseAcronym}-redYoshi`}     value={redYoshi}      images={images}/>
        </GroupOf4PowerUpPriority>
}
