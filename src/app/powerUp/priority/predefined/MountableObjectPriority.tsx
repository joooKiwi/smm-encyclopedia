import type {ImagesCallbackByPriority, PowerUpPriority} from 'app/powerUp/priority/PowerUpPriority'
import type {GameStyles}                                from 'core/gameStyle/GameStyles'
import type {SimpleReactPropertiesWithChildren}         from 'util/react/ReactProperties'

import GroupOf3PowerUpPriority  from 'app/powerUp/group/GroupOf3PowerUpPriority'
import PowerUpPriorityComponent from 'app/powerUp/priority/PowerUpPriority.component'

interface MountableObjectPriorityProperties<T extends PowerUpPriority, >
    extends SimpleReactPropertiesWithChildren<readonly [lakituCloud: T, clownCar: T, fireClownCar: T,]> {

    readonly gameStyle: GameStyles

    readonly images: ImagesCallbackByPriority<T>

}

export default function MountableObjectPriority<T extends PowerUpPriority, >({gameStyle: {acronym,}, images, children: [lakituCloud, clownCar, fireClownCar,],}: MountableObjectPriorityProperties<T>,) {
    const lowerCaseAcronym = acronym.toLowerCase()

    return <GroupOf3PowerUpPriority id={`powerUpPriority-group-${lowerCaseAcronym}-nonPowerUps-mountable`}>
        <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Lakitu's Cloud)`} id={`powerUpPriority-${lowerCaseAcronym}-lakituCloud`}  value={lakituCloud}       images={images}/>
        <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Clown Car)`}      id={`powerUpPriority-${lowerCaseAcronym}-clownCar`}     value={clownCar}     images={images}/>
        <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Fire Clown Car)`} id={`powerUpPriority-${lowerCaseAcronym}-fireClownCar`} value={fireClownCar} images={images}/>
    </GroupOf3PowerUpPriority>
}
