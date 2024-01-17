import type {PropertiesWithGames, SMB3PowerUpPriorities}    from 'app/powerUp/priority/predefined/types'
import type {ImagesCallbackByPriority, SMB3PowerUpPriority} from 'app/powerUp/priority/PowerUpPriority'

import GroupOf4PowerUpPriority       from 'app/powerUp/group/GroupOf4PowerUpPriority'
import PowerUpPriorityComponent      from 'app/powerUp/priority/PowerUpPriority.component'
import MountableObjectPriority       from 'app/powerUp/priority/predefined/MountableObjectPriority'
import ShellAndShoeMountablePriority from 'app/powerUp/priority/predefined/ShellAndShoeMountablePriority'
import SimplePowerUpPriority         from 'app/powerUp/priority/predefined/SimplePowerUpPriority'
import {GameStyles}                  from 'core/gameStyle/GameStyles'

const GAME_STYLE = GameStyles.SUPER_MARIO_BROS_3
const IMAGE_CALLBACK: ImagesCallbackByPriority<SMB3PowerUpPriority> = priority => priority.smb3Images

export default function PowerUpPriorityInSMB3({children: [superStar, lakituCloud, koopaClownCar, fireKoopaClownCar, buzzyShell, spinyShell, dryBonesShell, shoe, stiletto, superMushroom, fireFlower, superLeaf, frogSuit,], games,}: PropertiesWithGames<SMB3PowerUpPriorities>,) {
    return <GroupOf4PowerUpPriority id="powerUpPriority-group-smb3" isTopArrowSeparated isFirstDiagonalArrowSeparated isSecondDiagonalArrowSeparated isRightArrowSeparated>
        <PowerUpPriorityComponent key="Power-up priority (SMB3 - Super Star)" id="powerUpPriority-smb3-superStar" value={superStar} images={IMAGE_CALLBACK}/>
        <SimplePowerUpPriority games={games} gameStyle={GAME_STYLE} images={IMAGE_CALLBACK}>{[superMushroom, fireFlower, superLeaf, frogSuit,]}</SimplePowerUpPriority>
        <MountableObjectPriority gameStyle={GAME_STYLE} images={IMAGE_CALLBACK}>{[lakituCloud, koopaClownCar, fireKoopaClownCar,]}</MountableObjectPriority>
        <ShellAndShoeMountablePriority games={games} gameStyle={GAME_STYLE} images={IMAGE_CALLBACK}>{[buzzyShell, spinyShell, dryBonesShell, shoe, stiletto,]}</ShellAndShoeMountablePriority>
    </GroupOf4PowerUpPriority>
}
