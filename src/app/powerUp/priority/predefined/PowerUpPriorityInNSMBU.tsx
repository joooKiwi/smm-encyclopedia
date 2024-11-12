import type {NSMBUPowerUpPriorities, PropertiesWithGames}    from 'app/powerUp/priority/predefined/types'
import type {ImagesCallbackByPriority, NSMBUPowerUpPriority} from 'app/powerUp/priority/PowerUpPriority'

import GroupOf4PowerUpPriority        from 'app/powerUp/group/GroupOf4PowerUpPriority'
import PowerUpPriorityComponent       from 'app/powerUp/priority/PowerUpPriority.component'
import MountableObjectPriority        from 'app/powerUp/priority/predefined/MountableObjectPriority'
import ShellAndYoshiMountablePriority from 'app/powerUp/priority/predefined/ShellAndYoshiMountablePriority'
import SimplePowerUpPriority          from 'app/powerUp/priority/predefined/SimplePowerUpPriority'
import {GameStyles}                   from 'core/gameStyle/GameStyles'

import NSMBU = GameStyles.NSMBU

const IMAGE_CALLBACK: ImagesCallbackByPriority<NSMBUPowerUpPriority> = priority => priority.nsmbuImages

export default function PowerUpPriorityInNSMBU({children: [superStar, lakituCloud, juniorClownCar, fireJuniorClownCar, buzzyShell, spinyShell, dryBonesShell, yoshi, redYoshi, superMushroom, fireFlower, propellerMushroom, superAcorn,], games,}: PropertiesWithGames<NSMBUPowerUpPriorities>,) {
    return <GroupOf4PowerUpPriority id="powerUpPriority-group-nsmbu" isTopArrowSeparated isFirstDiagonalArrowSeparated isSecondDiagonalArrowSeparated isRightArrowSeparated>
        <PowerUpPriorityComponent key="Power-up priority (NSMBU - Super Star)" id="powerUpPriority-nsmbu-superStar" value={superStar} images={IMAGE_CALLBACK}/>
        <SimplePowerUpPriority games={games} gameStyle={NSMBU} images={IMAGE_CALLBACK}>{[superMushroom, fireFlower, propellerMushroom, superAcorn,]}</SimplePowerUpPriority>
        <MountableObjectPriority gameStyle={NSMBU} images={IMAGE_CALLBACK}>{[lakituCloud, juniorClownCar, fireJuniorClownCar,]}</MountableObjectPriority>
        <ShellAndYoshiMountablePriority games={games} gameStyle={NSMBU} images={IMAGE_CALLBACK}>{[buzzyShell, spinyShell, dryBonesShell, yoshi, redYoshi,]}</ShellAndYoshiMountablePriority>
    </GroupOf4PowerUpPriority>
}
