import type {ImagesCallbackByPriority, PowerUpPriority} from 'app/powerUp/priority/PowerUpPriority'
import type {GameStyles}                                from 'core/gameStyle/GameStyles'
import type {SimpleReactPropertiesWithChildren}         from 'util/react/ReactProperties'
import type {GameCollection}                            from 'util/collection/GameCollection'

import GroupOf4PowerUpPriority  from 'app/powerUp/group/GroupOf4PowerUpPriority'
import GroupOf5PowerUpPriority  from 'app/powerUp/group/GroupOf5PowerUpPriority'
import PowerUpPriorityComponent from 'app/powerUp/priority/PowerUpPriority.component'

type ShellAndShoeMountablePriority<T extends PowerUpPriority, > = readonly [
    buzzyShell: T,
    spimnyShell: T,

    dryBonesShell: T,
    shoe: T,
    stiletto: T,
]
interface ShellAndShoeMountablePriorityProperties<T extends PowerUpPriority,>
    extends SimpleReactPropertiesWithChildren<ShellAndShoeMountablePriority<T>> {

    readonly games: GameCollection

    readonly gameStyle: GameStyles

    readonly images: ImagesCallbackByPriority<T>

}

export default function ShellAndShoeMountablePriority<T extends PowerUpPriority, >({games: {hasSMM2,}, gameStyle: {acronym,}, images, children: [buzzyShell,spinyShell,dryBonesShell, shoe, stiletto,],}: ShellAndShoeMountablePriorityProperties<T>,) {
    const lowerCaseAcronym = acronym.toLowerCase()

    //TODO change the top & bottom on the group of 4 and other similar to the group of 5 to be in "- - - >" instead of "--->"
    //TODO change the group of 5 to have the single one at the bottom instead of the top
    return hasSMM2
        ? <GroupOf5PowerUpPriority id={`powerUpPriority-group-${lowerCaseAcronym}-shellAndMountable`}>
                <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Dry Bones Shell)`} id={`powerUpPriority-${lowerCaseAcronym}-dryBonesShell`} value={dryBonesShell} images={images}/>
                <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Buzzy Shell)`}     id={`powerUpPriority-${lowerCaseAcronym}-buzzyShell`}    value={buzzyShell} images={images}/>
                <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Spiny Shell)`}     id={`powerUpPriority-${lowerCaseAcronym}-spinyShell`}    value={spinyShell} images={images}/>
                <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Shoe)`}            id={`powerUpPriority-${lowerCaseAcronym}-shoe`}          value={shoe}          images={images}/>
                <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Stiletto)`}        id={`powerUpPriority-${lowerCaseAcronym}-stiletto`}      value={stiletto}      images={images}/>
            </GroupOf5PowerUpPriority>
        : <GroupOf4PowerUpPriority id={`powerUpPriority-group-${lowerCaseAcronym}-shellAndMountable`}>
                <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Buzzy Shell)`}     id={`powerUpPriority-${lowerCaseAcronym}-buzzyShell`}    value={buzzyShell} images={images}/>
                <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Spiny Shell)`}     id={`powerUpPriority-${lowerCaseAcronym}-spinyShell`}    value={spinyShell} images={images}/>
                <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Shoe)`}            id={`powerUpPriority-${lowerCaseAcronym}-shoe`}          value={shoe}          images={images}/>
                <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Stiletto)`}        id={`powerUpPriority-${lowerCaseAcronym}-stiletto`}      value={stiletto}      images={images}/>
            </GroupOf4PowerUpPriority>
}
