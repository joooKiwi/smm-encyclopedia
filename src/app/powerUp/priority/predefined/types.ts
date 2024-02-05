import type {NSMBUPowerUpPriority, PowerUpPriority, SM3DWPowerUpPriority, SMB3PowerUpPriority, SMBPowerUpPriority, SMWPowerUpPriority} from 'app/powerUp/priority/PowerUpPriority'
import type {GameStyles}                                                                                                               from 'core/gameStyle/GameStyles'
import type {GameCollection}                                                                                                           from 'util/collection/GameCollection'
import type {SimpleReactPropertiesWithChildren}                                                                                        from 'util/react/ReactProperties'

//region -------------------- Priority types --------------------

type NonPowerUpPriorityPropertiesBySingleGameStyle<T extends PowerUpPriority,> = readonly [
    superStar: T,

    lakituCloud: T,
    clownCar: T,
    fireClownCar: T,

    buzzyShell: T,
    spinyShell: T,

    dryBonesShell: T,
    shoeOrYoshi: T,
    stilettoOrRedYoshi: T,
]
type NonPowerUpPriorityPropertiesBySingleGameStyleAndShoe<T extends PowerUpPriority,> = readonly [
    superStar: T,

    lakituCloud: T,
    clownCar: T,
    fireClownCar: T,

    buzzyShell: T,
    spinyShell: T,

    dryBonesShell: T,
    shoe: T,
    stiletto: T,
]
type NonPowerUpPriorityPropertiesBySingleGameStyleAndYoshi<T extends PowerUpPriority,> = readonly [
    superStar: T,

    lakituCloud: T,
    clownCar: T,
    fireClownCar: T,

    buzzyShell: T,
    spinyShell: T,

    dryBonesShell: T,
    yoshi: T,
    redYoshi: T,
]

//endregion -------------------- Priority types --------------------

export interface NonPowerUpPriorityPropertiesBySingleGameStyleProperties<T extends PowerUpPriority, >
    extends SimpleReactPropertiesWithChildren<NonPowerUpPriorityPropertiesBySingleGameStyle<T>> {

    readonly games: GameCollection

}

export interface NonPowerUpPriorityPropertiesBySingleGameStyleAndShoeProperties<T extends PowerUpPriority, >
    extends NonPowerUpPriorityPropertiesBySingleGameStyleProperties<T>,
        SimpleReactPropertiesWithChildren<NonPowerUpPriorityPropertiesBySingleGameStyleAndShoe<T>> {

    readonly gameStyle: GameStyles

}

export interface NonPowerUpPriorityPropertiesBySingleGameStyleAndYoshiProperties<T extends PowerUpPriority, >
    extends NonPowerUpPriorityPropertiesBySingleGameStyleProperties<T>,
        SimpleReactPropertiesWithChildren<NonPowerUpPriorityPropertiesBySingleGameStyleAndYoshi<T>> {

    readonly gameStyle: GameStyles

}

export interface SimplePowerUpPriorityBySingleGameStyleProperties<T extends PowerUpPriority, >
    extends SimpleReactPropertiesWithChildren<readonly [superMushroom: T, fireFlower: T, specialPowerUp1: T, specialPowerUp2: T,]> {

    readonly games: GameCollection

}

export interface PropertiesWithGames<T extends readonly PowerUpPriority[], >
    extends SimpleReactPropertiesWithChildren<T> {

    readonly games: GameCollection

}


//region -------------------- Power-up priorities --------------------

//region -------------------- Power-up priorities (SMB) --------------------

export type SMBPowerUpPriorities = readonly [
    superStar: SMBPowerUpPriority,


    lakituCloud: SMBPowerUpPriority, koopaClownCar: SMBPowerUpPriority, fireKoopaClownCar: SMBPowerUpPriority,

    buzzyShell: SMBPowerUpPriority, spinyShell: SMBPowerUpPriority,

    dryBonesShell: SMBPowerUpPriority, shoe: SMBPowerUpPriority, stiletto: SMBPowerUpPriority,


    superMushroom: SMBPowerUpPriority, weirdMushroom: SMBPowerUpPriority,

    fireFlower: SMBPowerUpPriority,

    mysteryMushroom: SMBPowerUpPriority, bigMushroomClassic: SMBPowerUpPriority, bigMushroomModern: SMBPowerUpPriority,

    masterSword: SMBPowerUpPriority, bigMushroom: SMBPowerUpPriority, smb2Mushroom: SMBPowerUpPriority, superballFlower: SMBPowerUpPriority,
]

export type SMBSimplePowerUpPriorities = readonly [
    superMushroom: SMBPowerUpPriority, weirdMushroom: SMBPowerUpPriority,

    fireFlower: SMBPowerUpPriority,

    mysteryMushroom: SMBPowerUpPriority, bigMushroomClassic: SMBPowerUpPriority, bigMushroomModern: SMBPowerUpPriority,

    masterSword: SMBPowerUpPriority, bigMushroom: SMBPowerUpPriority, smb2Mushroom: SMBPowerUpPriority, superballFlower: SMBPowerUpPriority,
]
export type SMBSimplePowerUpPrioritiesInSMM1 = readonly [
    superMushroom: SMBPowerUpPriority, weirdMushroom: SMBPowerUpPriority,
    fireFlower: SMBPowerUpPriority,
    mysteryMushroom: SMBPowerUpPriority, bigMushroomClassic: SMBPowerUpPriority, bigMushroomModern: SMBPowerUpPriority,
]
export type SMBSimplePowerUpPrioritiesInSMM3DS = readonly [
    superMushroom: SMBPowerUpPriority, fireFlower: SMBPowerUpPriority,
]
export type SMBSimplePowerUpPrioritiesInSMM2 = readonly [
    superMushroom: SMBPowerUpPriority,
    fireFlower: SMBPowerUpPriority,
    masterSword: SMBPowerUpPriority, bigMushroom: SMBPowerUpPriority, smb2Mushroom: SMBPowerUpPriority, superballFlower: SMBPowerUpPriority,
]

//endregion -------------------- Power-up priorities (SMB) --------------------
//region -------------------- Power-up priorities (SMB3) --------------------

export type SMB3PowerUpPriorities = readonly [
    superStar: SMB3PowerUpPriority,


    lakituCloud: SMB3PowerUpPriority, koopaClownCar: SMB3PowerUpPriority, fireKoopaClownCar: SMB3PowerUpPriority,

    buzzyShell: SMB3PowerUpPriority, spinyShell: SMB3PowerUpPriority,

    dryBonesShell: SMB3PowerUpPriority, shoe: SMB3PowerUpPriority, stiletto: SMB3PowerUpPriority,


    superMushroom: SMB3PowerUpPriority, fireFlower: SMB3PowerUpPriority, superLeaf: SMB3PowerUpPriority, frogSuit: SMB3PowerUpPriority,
]

//endregion -------------------- Power-up priorities (SMB3) --------------------
//region -------------------- Power-up priorities (SMW) --------------------

export type SMWPowerUpPriorities = readonly [
    superStar: SMWPowerUpPriority,


    lakituCloud: SMWPowerUpPriority, koopaClownCar: SMWPowerUpPriority, fireKoopaClownCar: SMWPowerUpPriority,

    buzzyShell: SMWPowerUpPriority, spinyShell: SMWPowerUpPriority,

    dryBonesShell: SMWPowerUpPriority, yoshi: SMWPowerUpPriority, redYoshi: SMWPowerUpPriority,


    superMushroom: SMWPowerUpPriority, fireFlower: SMWPowerUpPriority, capeFeather: SMWPowerUpPriority, powerBalloon: SMWPowerUpPriority,
]

//endregion -------------------- Power-up priorities (SMW) --------------------
//region -------------------- Power-up priorities (NSMBU) --------------------

export type NSMBUPowerUpPriorities = readonly [
    superStar: NSMBUPowerUpPriority,


    lakituCloud: NSMBUPowerUpPriority, juniorClownCar: NSMBUPowerUpPriority, fireJuniorClownCar: NSMBUPowerUpPriority,

    buzzyShell: NSMBUPowerUpPriority, spinyShell: NSMBUPowerUpPriority,

    dryBonesShell: NSMBUPowerUpPriority, yoshi: NSMBUPowerUpPriority, redYoshi: NSMBUPowerUpPriority,


    superMushroom: NSMBUPowerUpPriority, fireFlower: NSMBUPowerUpPriority, propellerMushroom: NSMBUPowerUpPriority, superAcorn: NSMBUPowerUpPriority,
]

//endregion -------------------- Power-up priorities (NSMBU) --------------------
//region -------------------- Power-up priorities (SM3DW) --------------------

export type SM3DWPowerUpPriorities = readonly [
    superStar: SM3DWPowerUpPriority,


    car: SM3DWPowerUpPriority,

    cannonBox: SM3DWPowerUpPriority, propellerBox: SM3DWPowerUpPriority, goombaMask: SM3DWPowerUpPriority,
    bulletBillMask: SM3DWPowerUpPriority, redPowBox: SM3DWPowerUpPriority,


    superMushroom: SM3DWPowerUpPriority,

    fireFlower: SM3DWPowerUpPriority, superHammer: SM3DWPowerUpPriority, superBell: SM3DWPowerUpPriority, boomerangFlower: SM3DWPowerUpPriority,
]

export type SM3DWSimplePowerUpPriorities = readonly [
    superMushroom: SM3DWPowerUpPriority,

    fireFlower: SM3DWPowerUpPriority, superHammer: SM3DWPowerUpPriority, superBell: SM3DWPowerUpPriority, boomerangFlower: SM3DWPowerUpPriority,
]

export type SM3DWPowerUpPrioritiesAsWearableAndCar = readonly [
    car: SM3DWPowerUpPriority,

    cannonBox: SM3DWPowerUpPriority, propellerBox: SM3DWPowerUpPriority, goombaMask: SM3DWPowerUpPriority,
    bulletBillMask: SM3DWPowerUpPriority, redPowBox: SM3DWPowerUpPriority,
]

//endregion -------------------- Power-up priorities (SM3DW) --------------------

//endregion -------------------- Power-up priorities --------------------
