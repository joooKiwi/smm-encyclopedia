import type {SMBSimplePowerUpPrioritiesInSMM3DS} from 'app/powerUp/priority/predefined/types'
import type {SimpleReactPropertiesWithChildren}  from 'util/react/ReactProperties'

import GroupOf2PowerUpPriority  from 'app/powerUp/group/GroupOf2PowerUpPriority'
import PowerUpPriorityComponent from 'app/powerUp/priority/PowerUpPriority.component'
import {Arrows}                 from 'app/tools/arrow/Arrows'

export function OtherSimplePowerUpPriorityInSMBInSMM3DS({children: [superMushroom, fireFlower,],}: SimpleReactPropertiesWithChildren<SMBSimplePowerUpPrioritiesInSMM3DS>,) {
    return <GroupOf2PowerUpPriority id="powerUpPriority-group-smm3ds-smb-others" arrow={Arrows.RIGHT}>
        <PowerUpPriorityComponent key="Power-up priority (SMM3DS - SMB - Super Mushroom)" id="powerUpPriority-smm3ds-smb-superMushroom" value={superMushroom} images={priority => priority.smbImages}/>
        <PowerUpPriorityComponent key="Power-up priority (SMM3DS - SMB - Fire Flower)"    id="powerUpPriority-smm3ds-smb-fireFlower"    value={fireFlower}    images={priority => priority.smbImages}/>
    </GroupOf2PowerUpPriority>
}