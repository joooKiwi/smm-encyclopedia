import type {GroupOf6PowerUpPriorityArrowProperties} from 'app/powerUp/group/GroupPriority.types'
import type {SMBSimplePowerUpPrioritiesInSMM2}       from 'app/powerUp/priority/predefined/types'
import type {SimpleReactPropertiesWithChildren}      from 'util/react/ReactProperties'

import GroupOf6PowerUpPriority  from 'app/powerUp/group/GroupOf6PowerUpPriority'
import PowerUpPriorityComponent from 'app/powerUp/priority/PowerUpPriority.component'
import {Arrows}                 from 'app/tools/arrow/Arrows'

//region -------------------- Import from deconstruction --------------------

const {DOWN, RIGHT,} = Arrows

//endregion -------------------- Import from deconstruction --------------------

/**The properties applicable to the {@link OtherSimplePowerUpPriorityInSMBInSMM2} component */
const ARROW_PROPERTIES: GroupOf6PowerUpPriorityArrowProperties = {
    topLeftTo: {topRight: RIGHT, centerLeft: DOWN, centerRight: DOWN, bottomLeft: DOWN, bottomRight: DOWN,},
}

export function OtherSimplePowerUpPriorityInSMBInSMM2({children: [superMushroom, fireFlower, masterSword, bigMushroom, smb2Mushroom, superballFlower,],}: SimpleReactPropertiesWithChildren<SMBSimplePowerUpPrioritiesInSMM2>,) {
    return <GroupOf6PowerUpPriority id="powerUpPriority-group-smm2-smb-others" arrow={ARROW_PROPERTIES}>
        <PowerUpPriorityComponent key="Power-up priority (SMM2 - SMB - Super Mushroom)" id="powerUpPriority-smm2-smb-superMushroom" value={superMushroom}   images={priority => priority.smbImages}/>
        <PowerUpPriorityComponent key="Power-up priority (Master Sword)"                id="powerUpPriority-masterSword"            value={masterSword}/>
        <PowerUpPriorityComponent key="Power-up priority (Big Mushroom)"                id="powerUpPriority-bigMushroom"            value={bigMushroom}/>
        <PowerUpPriorityComponent key="Power-up priority (SMB2 Mushroom)"               id="powerUpPriority-smb2Mushroom"           value={smb2Mushroom}/>
        <PowerUpPriorityComponent key="Power-up priority (SMM2 - SMB - Fire Flower)"    id="powerUpPriority-smm2-smb-fireFlower"    value={fireFlower}      images={priority => priority.smbImages}/>
        <PowerUpPriorityComponent key="Power-up priority (Superball Flower)"            id="powerUpPriority-superballFlower"        value={superballFlower}/>
    </GroupOf6PowerUpPriority>
}