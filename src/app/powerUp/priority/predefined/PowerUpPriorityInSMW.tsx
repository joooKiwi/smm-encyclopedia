import type {PropertiesWithGames, SMWPowerUpPriorities}    from 'app/powerUp/priority/predefined/types'
import type {ImagesCallbackByPriority, SMWPowerUpPriority} from 'app/powerUp/priority/PowerUpPriority'

import GroupOf4PowerUpPriority        from 'app/powerUp/group/GroupOf4PowerUpPriority'
import PowerUpPriorityComponent       from 'app/powerUp/priority/PowerUpPriority.component'
import MountableObjectPriority        from 'app/powerUp/priority/predefined/MountableObjectPriority'
import ShellAndYoshiMountablePriority from 'app/powerUp/priority/predefined/ShellAndYoshiMountablePriority'
import SimplePowerUpPriority          from 'app/powerUp/priority/predefined/SimplePowerUpPriority'
import {GameStyles}                   from 'core/gameStyle/GameStyles'

const GAME_STYLE = GameStyles.SUPER_MARIO_WORLD,
    IMAGE_CALLBACK: ImagesCallbackByPriority<SMWPowerUpPriority> = priority => priority.smwImages

export default function PowerUpPriorityInSMW({children: [superStar, lakituCloud, koopaClownCar, fireKoopaClownCar, buzzyShell, spinyShell, dryBonesShell, yoshi, redYoshi, superMushroom, fireFlower, capeFeather, powerBalloon,], games,}: PropertiesWithGames<SMWPowerUpPriorities>,) {
    return <GroupOf4PowerUpPriority id="powerUpPriority-group-smw" isTopArrowSeparated isFirstDiagonalArrowSeparated isSecondDiagonalArrowSeparated isRightArrowSeparated>
        <PowerUpPriorityComponent key="Power-up priority (SMW - Super Star)" id="powerUpPriority-smw-superStar" value={superStar} images={IMAGE_CALLBACK}/>
        <SimplePowerUpPriority games={games} gameStyle={GAME_STYLE} images={IMAGE_CALLBACK}>{[superMushroom, fireFlower, capeFeather, powerBalloon,]}</SimplePowerUpPriority>
        <MountableObjectPriority gameStyle={GAME_STYLE} images={IMAGE_CALLBACK}>{[lakituCloud, koopaClownCar, fireKoopaClownCar,]}</MountableObjectPriority>
        <ShellAndYoshiMountablePriority games={games} gameStyle={GAME_STYLE} images={IMAGE_CALLBACK}>{[buzzyShell, spinyShell, dryBonesShell, yoshi, redYoshi,]}</ShellAndYoshiMountablePriority>
    </GroupOf4PowerUpPriority>
}
