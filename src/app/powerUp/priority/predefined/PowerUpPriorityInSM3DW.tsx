import type {SM3DWPowerUpPriorities, SM3DWPowerUpPrioritiesAsWearableAndCar, SM3DWSimplePowerUpPriorities} from 'app/powerUp/priority/predefined/types'
import type {SimpleReactPropertiesWithChildren}                                                            from 'util/react/ReactProperties'
import type {GroupOf5PowerUpPriorityArrowProperties}                                                       from 'app/powerUp/group/GroupPriority.types'
import type {ImagesCallbackByPriority, SM3DWPowerUpPriority}                                               from 'app/powerUp/priority/PowerUpPriority'

import GroupOf3PowerUpPriority  from 'app/powerUp/group/GroupOf3PowerUpPriority'
import GroupOf5PowerUpPriority  from 'app/powerUp/group/GroupOf5PowerUpPriority'
import GroupOf6PowerUpPriority  from 'app/powerUp/group/GroupOf6PowerUpPriority'
import PowerUpPriorityComponent from 'app/powerUp/priority/PowerUpPriority.component'
import {Arrows}                 from 'app/tools/arrow/Arrows'

//region -------------------- Import from deconstruction --------------------

const {DOWN,} = Arrows

//endregion -------------------- Import from deconstruction --------------------

const ARROW_PROPERTIES: GroupOf5PowerUpPriorityArrowProperties = {
        topTo: {centerLeft: DOWN, centerRight: DOWN, bottomLeft: DOWN, bottomRight: DOWN,},
    },
    IMAGE_CALLBACK: ImagesCallbackByPriority<SM3DWPowerUpPriority> = priority => priority.sm3dwImages


export default function PowerUpPriorityInSM3DW({children: [superStar, car, cannonBox, propellerBox, goombaMask, bulletBillMask, redPowBox, superMushroom, fireFlower, superHammer, superBell, boomerangFlower,],}: SimpleReactPropertiesWithChildren<SM3DWPowerUpPriorities>,) {
    return <GroupOf3PowerUpPriority id="powerUpPriority-group-sm3dw" isRightArrowSeparated isBottomArrowSeparated>
        <PowerUpPriorityComponent key="Power-up priority (SM3DW - Super Star)" id="powerUpPriority-sm3dw-superStar" value={superStar} images={IMAGE_CALLBACK}/>
        <WearableAndCarInSM3DWPriority>{[car, cannonBox, propellerBox, goombaMask, bulletBillMask, redPowBox,]}</WearableAndCarInSM3DWPriority>
        <SimplePowerUpPriorityInSM3DW>{[superMushroom, fireFlower, superHammer, superBell, boomerangFlower,]}</SimplePowerUpPriorityInSM3DW>
    </GroupOf3PowerUpPriority>
}

function SimplePowerUpPriorityInSM3DW({children: [superMushroom, fireFlower, superHammer, superBell, boomerangFlower,],}:SimpleReactPropertiesWithChildren<SM3DWSimplePowerUpPriorities>,){
    return <GroupOf5PowerUpPriority id="powerUpPriority-group-sm3dw-simplePowerUps" arrow={ARROW_PROPERTIES}>
        <PowerUpPriorityComponent key="Power-up priority (SM3DW - Super Mushroom)"   id="powerUpPriority-sm3dw-superMushroom"   value={superMushroom}   images={IMAGE_CALLBACK}/>
        <PowerUpPriorityComponent key="Power-up priority (SM3DW - Fire Flower)"      id="powerUpPriority-sm3dw-fireFlower"      value={fireFlower}      images={IMAGE_CALLBACK}/>
        <PowerUpPriorityComponent key="Power-up priority (SM3DW - Super Hammer)"     id="powerUpPriority-sm3dw-superHammer"     value={superHammer}/>
        <PowerUpPriorityComponent key="Power-up priority (SM3DW - Super Bell)"       id="powerUpPriority-sm3dw-superBell"       value={superBell}/>
        <PowerUpPriorityComponent key="Power-up priority (SM3DW - Boomerang Flower)" id="powerUpPriority-sm3dw-boomerangFlower" value={boomerangFlower}/>
    </GroupOf5PowerUpPriority>
}

function WearableAndCarInSM3DWPriority({children: [car, cannonBox, propellerBox, goombaMask, bulletBillMask, redPowBox,],}: SimpleReactPropertiesWithChildren<SM3DWPowerUpPrioritiesAsWearableAndCar>,) {
    return <GroupOf6PowerUpPriority id="powerUpPriority-group-sm3dw-wearableAndCar">
        <PowerUpPriorityComponent key="Power-up priority (Car)"              id="powerUpPriority-car"            value={car}/>
        <PowerUpPriorityComponent key="Power-up priority (Cannon Box)"       id="powerUpPriority-cannonBox"      value={cannonBox}/>
        <PowerUpPriorityComponent key="Power-up priority (Propeller Box)"    id="powerUpPriority-propellerBox"   value={propellerBox}/>
        <PowerUpPriorityComponent key="Power-up priority (Goomba Mask)"      id="powerUpPriority-goombaMask"     value={goombaMask}/>
        <PowerUpPriorityComponent key="Power-up priority (Bullet Bill Mask)" id="powerUpPriority-bulletBillMask" value={bulletBillMask}/>
        <PowerUpPriorityComponent key="Power-up priority (Red POW Box)"      id="powerUpPriority-redPowBox"      value={redPowBox}/>
    </GroupOf6PowerUpPriority>
}
