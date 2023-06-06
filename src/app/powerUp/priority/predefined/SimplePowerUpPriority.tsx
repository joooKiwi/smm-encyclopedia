import type {ReactProperties}                                  from 'util/react/ReactProperties'
import type {SimplePowerUpPriorityBySingleGameStyleProperties} from 'app/powerUp/priority/predefined/types'
import type {ImagesCallbackByPriority, PowerUpPriority}        from 'app/powerUp/priority/PowerUpPriority'
import type {GameStyles}                                       from 'core/gameStyle/GameStyles'

import GroupOf3PowerUpPriority  from 'app/powerUp/group/GroupOf3PowerUpPriority'
import GroupOf4PowerUpPriority  from 'app/powerUp/group/GroupOf4PowerUpPriority'
import PowerUpPriorityComponent from 'app/powerUp/priority/PowerUpPriority.component'
import {Arrows}                 from 'app/tools/arrow/Arrows'

export interface SimplePowerUpPriorityProperties<T extends PowerUpPriority, >
    extends ReactProperties, SimplePowerUpPriorityBySingleGameStyleProperties<T> {

    gameStyle: GameStyles

    images: ImagesCallbackByPriority<T>

}

export default function SimplePowerUpPriority<T extends PowerUpPriority, >({games: {hasSMM2,}, gameStyle, images, children: [superMushroom, fireFlower, specialPowerUp1, specialPowerUp2,],}: SimplePowerUpPriorityProperties<T>,) {
    const {acronym,} = gameStyle,
        lowerCasedAcronym = acronym.toLowerCase()

    return hasSMM2 ? <GroupOf4PowerUpPriority id={`powerUpPriority-group-${lowerCasedAcronym}-simplePowerUps`} topArrow={Arrows.RIGHT} leftArrow={Arrows.DOWN} firstDiagonalArrow={Arrows.DOWN}>
        <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Super Mushroom)`}     id={`powerUpPriority-${lowerCasedAcronym}-superMushroom`}   value={superMushroom}     images={images}/>
        <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Fire Flower)`}        id={`powerUpPriority-${lowerCasedAcronym}-fireFlower`}      value={fireFlower}        images={images}/>
        <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Special Power-up 1)`} id={`powerUpPriority-${lowerCasedAcronym}-specialPowerUp1`} value={specialPowerUp1}/>
        <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Special Power-up 2)`} id={`powerUpPriority-${lowerCasedAcronym}-specialPowerUp2`} value={specialPowerUp2}/>
    </GroupOf4PowerUpPriority>
        : <GroupOf3PowerUpPriority id={`powerUpPriority-group-${lowerCasedAcronym}-2ndTier`} leftArrow={Arrows.DOWN} rightArrow={Arrows.DOWN}>
            <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Super Mushroom)`}     id={`powerUpPriority-${lowerCasedAcronym}-superMushroom`}   value={superMushroom}     images={images}/>
            <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Fire Flower)`}        id={`powerUpPriority-${lowerCasedAcronym}-fireFlower`}      value={fireFlower}        images={images}/>
            <PowerUpPriorityComponent key={`Power-up priority (${acronym} - Special Power-up 1)`} id={`powerUpPriority-${lowerCasedAcronym}-specialPowerUp1`} value={specialPowerUp1}/>
        </GroupOf3PowerUpPriority>
}
