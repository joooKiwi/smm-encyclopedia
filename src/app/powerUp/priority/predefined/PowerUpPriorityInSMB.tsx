import type {PropertiesWithGames, SMBPowerUpPriorities}    from 'app/powerUp/priority/predefined/types'
import type {ImagesCallbackByPriority, SMBPowerUpPriority} from 'app/powerUp/priority/PowerUpPriority'

import GroupOf4PowerUpPriority                   from 'app/powerUp/group/GroupOf4PowerUpPriority'
import GroupOf5PowerUpPriority                   from 'app/powerUp/group/GroupOf5PowerUpPriority'
import PowerUpPriorityComponent                  from 'app/powerUp/priority/PowerUpPriority.component'
import MountableObjectPriority                   from 'app/powerUp/priority/predefined/MountableObjectPriority'
import {OtherSimplePowerUpPriorityInSMBInSMM1}   from 'app/powerUp/priority/predefined/OtherSimplePowerUpPriorityInSMBInSMM1'
import {OtherSimplePowerUpPriorityInSMBInSMM2}   from 'app/powerUp/priority/predefined/OtherSimplePowerUpPriorityInSMBInSMM2'
import {OtherSimplePowerUpPriorityInSMBInSMM3DS} from 'app/powerUp/priority/predefined/OtherSimplePowerUpPriorityInSMBInSMM3DS'
import ShellAndShoeMountablePriority             from 'app/powerUp/priority/predefined/ShellAndShoeMountablePriority'
import {GameStyles}                              from 'core/gameStyle/GameStyles'

import SMB = GameStyles.SMB

const ID = 'powerUpPriority-group-smb'
const IMAGE_CALLBACK: ImagesCallbackByPriority<SMBPowerUpPriority> = priority => priority.smbImages

export default function PowerUpPriorityInSMB({games, children: [superStar, lakituCloud, koopaClownCar, fireKoopaClownCar, buzzyShell, spinyShell, dryBonesShell, shoe, stiletto, superMushroom, weirdMushroom, fireFlower, mysteryMushroom, bigMushroomClassic, bigMushroomModern, masterSword, bigMushroom, smb2Mushroom, superballFlower,],}: PropertiesWithGames<SMBPowerUpPriorities>,) {
    const {hasSMM1, hasSMM2, hasSMM3DS,} = games

    if (hasSMM1 && hasSMM2)
        return <GroupOf5PowerUpPriority id={ID}>
            <PowerUpPriorityComponent key="Power-up priority (SMB - Super Star)" id="powerUpPriority-smb-superStar" value={superStar} images={IMAGE_CALLBACK}/>
            <OtherSimplePowerUpPriorityInSMBInSMM1>{[superMushroom, weirdMushroom, fireFlower, mysteryMushroom, bigMushroomClassic, bigMushroomModern,]}</OtherSimplePowerUpPriorityInSMBInSMM1>
            <OtherSimplePowerUpPriorityInSMBInSMM2>{[superMushroom, fireFlower, masterSword, bigMushroom, smb2Mushroom, superballFlower,]}</OtherSimplePowerUpPriorityInSMBInSMM2>
            <MountableObjectPriority gameStyle={SMB} images={IMAGE_CALLBACK}>{[lakituCloud, koopaClownCar, fireKoopaClownCar,]}</MountableObjectPriority>
            <ShellAndShoeMountablePriority games={games} gameStyle={SMB} images={IMAGE_CALLBACK}>{[buzzyShell, spinyShell, dryBonesShell, shoe, stiletto,]}</ShellAndShoeMountablePriority>
        </GroupOf5PowerUpPriority>
    if (hasSMM1 && hasSMM3DS)
        return <GroupOf4PowerUpPriority id={ID} isTopArrowSeparated isSecondDiagonalArrowSeparated isRightArrowSeparated isBottomArrowSeparated>
            <PowerUpPriorityComponent key="Power-up priority (SMB - Super Star)" id="powerUpPriority-smb-superStar" value={superStar} images={IMAGE_CALLBACK}/>
            <OtherSimplePowerUpPriorityInSMBInSMM1>{[superMushroom, weirdMushroom, fireFlower, mysteryMushroom, bigMushroomClassic, bigMushroomModern,]}</OtherSimplePowerUpPriorityInSMBInSMM1>
            <MountableObjectPriority gameStyle={SMB} images={IMAGE_CALLBACK}>{[lakituCloud, koopaClownCar, fireKoopaClownCar,]}</MountableObjectPriority>
            <ShellAndShoeMountablePriority games={games} gameStyle={SMB} images={IMAGE_CALLBACK}>{[buzzyShell, spinyShell, dryBonesShell, shoe, stiletto,]}</ShellAndShoeMountablePriority>
        </GroupOf4PowerUpPriority>
    if (hasSMM3DS && hasSMM2)
        return <GroupOf5PowerUpPriority id={ID}>
            <PowerUpPriorityComponent key="Power-up priority (SMB - Super Star)" id="powerUpPriority-smb-superStar" value={superStar} images={IMAGE_CALLBACK}/>
            <OtherSimplePowerUpPriorityInSMBInSMM3DS>{[superMushroom, fireFlower,]}</OtherSimplePowerUpPriorityInSMBInSMM3DS>
            <OtherSimplePowerUpPriorityInSMBInSMM2>{[superMushroom, fireFlower, masterSword, bigMushroom, smb2Mushroom, superballFlower,]}</OtherSimplePowerUpPriorityInSMBInSMM2>
            <MountableObjectPriority gameStyle={SMB} images={IMAGE_CALLBACK}>{[lakituCloud, koopaClownCar, fireKoopaClownCar,]}</MountableObjectPriority>
            <ShellAndShoeMountablePriority games={games} gameStyle={SMB} images={IMAGE_CALLBACK}>{[buzzyShell, spinyShell, dryBonesShell, shoe, stiletto,]}</ShellAndShoeMountablePriority>
        </GroupOf5PowerUpPriority>
    return <GroupOf4PowerUpPriority id={ID} isTopArrowSeparated isFirstDiagonalArrowSeparated isSecondDiagonalArrowSeparated isRightArrowSeparated>
        <PowerUpPriorityComponent key="Power-up priority (SMB - Super Star)" id="powerUpPriority-smb-superStar" value={superStar} images={IMAGE_CALLBACK}/>
        {hasSMM2
            ? <OtherSimplePowerUpPriorityInSMBInSMM1>{[superMushroom, weirdMushroom, fireFlower, mysteryMushroom, bigMushroomClassic, bigMushroomModern,]}</OtherSimplePowerUpPriorityInSMBInSMM1>
            : hasSMM1
                ? <OtherSimplePowerUpPriorityInSMBInSMM1>{[superMushroom, weirdMushroom, fireFlower, mysteryMushroom, bigMushroomClassic, bigMushroomModern,]}</OtherSimplePowerUpPriorityInSMBInSMM1>
                : <OtherSimplePowerUpPriorityInSMBInSMM3DS>{[superMushroom, fireFlower,]}</OtherSimplePowerUpPriorityInSMBInSMM3DS>}
        <MountableObjectPriority gameStyle={SMB} images={IMAGE_CALLBACK}>{[lakituCloud, koopaClownCar, fireKoopaClownCar,]}</MountableObjectPriority>
        <ShellAndShoeMountablePriority games={games} gameStyle={SMB} images={IMAGE_CALLBACK}>{[buzzyShell, spinyShell, dryBonesShell, shoe, stiletto,]}</ShellAndShoeMountablePriority>
    </GroupOf4PowerUpPriority>
}
