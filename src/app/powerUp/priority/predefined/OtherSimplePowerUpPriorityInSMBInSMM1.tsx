import type {SimpleReactPropertiesWithChildren}      from 'util/react/ReactProperties'
import type {GroupOf6PowerUpPriorityArrowProperties} from 'app/powerUp/group/GroupPriority.types'
import type {SMBSimplePowerUpPrioritiesInSMM1}       from 'app/powerUp/priority/predefined/types'

import GroupOf6PowerUpPriority  from 'app/powerUp/group/GroupOf6PowerUpPriority'
import PowerUpPriorityComponent from 'app/powerUp/priority/PowerUpPriority.component'
import {Arrows}                 from 'app/tools/arrow/Arrows'

//region -------------------- Import from deconstruction --------------------

const {DOWN, RIGHT,} = Arrows

//endregion -------------------- Import from deconstruction --------------------

/**The properties applicable to the {@link OtherSimplePowerUpPriorityInSMBInSMM1} component */
const ARROW_PROPERTIES: GroupOf6PowerUpPriorityArrowProperties = {
    topLeftTo: {topRight: RIGHT, centerLeft: DOWN, centerRight: DOWN, bottomLeft: DOWN, bottomRight: DOWN,},
    topRightTo: {centerLeft: DOWN, centerRight: DOWN, bottomLeft: DOWN, bottomRight: DOWN,},
}

export function OtherSimplePowerUpPriorityInSMBInSMM1({children: [superMushroom, weirdMushroom, fireFlower, mysteryMushroom, bigMushroomClassic, bigMushroomModern,],}: SimpleReactPropertiesWithChildren<SMBSimplePowerUpPrioritiesInSMM1>,) {
    return <GroupOf6PowerUpPriority id="powerUpPriority-group-smm-smb-others" arrow={ARROW_PROPERTIES}>
        <PowerUpPriorityComponent key="Power-up priority (SMM1 - SMB - Super Mushroom)" id="powerUpPriority-smm1-smb-superMushroom" value={superMushroom}       images={priority => priority.smbImages}/>
        <PowerUpPriorityComponent key="Power-up priority (Weird Mushroom)"              id="powerUpPriority-weirdMushroom"          value={weirdMushroom}/>
        <PowerUpPriorityComponent key="Power-up priority (Mystery Mushroom)"            id="powerUpPriority-mysteryMushroom"        value={mysteryMushroom}/>
        <PowerUpPriorityComponent key="Power-up priority (Big Mushroom (classic))"      id="powerUpPriority-bigMushroomClassic"     value={bigMushroomClassic}/>
        <PowerUpPriorityComponent key="Power-up priority (SMM1 - SMB - Fire Flower)"    id="powerUpPriority-smm1-smb-fireFlower"    value={fireFlower}          images={priority => priority.smbImages}/>
        <PowerUpPriorityComponent key="Power-up priority (Big Mushroom (modern))"       id="powerUpPriority-bigMushroomModern"      value={bigMushroomModern}/>
    </GroupOf6PowerUpPriority>
}