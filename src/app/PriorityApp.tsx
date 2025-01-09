import 'app/_GameAsideContent.scss'
import 'app/_GameStyleAsideContent.scss'
import './PriorityApp.scss'

import type {PriorityProperties}                                                             from 'app/AppProperties.types'
import type {GroupOf5PowerUpPriorityArrowProperties, GroupOf6PowerUpPriorityArrowProperties} from 'app/powerUp/group/GroupPriority.types'
import type {GameCollection}                                                                 from 'util/collection/GameCollection'
import type {ReactProperties}                                                                from 'util/react/ReactProperties'

import GroupOf2PowerUpPriority                      from 'app/powerUp/group/GroupOf2PowerUpPriority'
import GroupOf3PowerUpPriority                      from 'app/powerUp/group/GroupOf3PowerUpPriority'
import GroupOf4PowerUpPriority                      from 'app/powerUp/group/GroupOf4PowerUpPriority'
import GroupOf5PowerUpPriority                      from 'app/powerUp/group/GroupOf5PowerUpPriority'
import GroupOf6PowerUpPriority                      from 'app/powerUp/group/GroupOf6PowerUpPriority'
import Arrow                                        from 'app/tools/arrow/Arrow'
import {Arrows}                                     from 'app/tools/arrow/Arrows'
import GroupImages                                  from 'app/tools/images/GroupImages'
import LinkButton                                   from 'app/tools/button/LinkButton'
import UnfinishedText, {unfinishedText}             from 'app/tools/text/UnfinishedText'
import AppTitle                                     from 'app/util/AppTitle'
import PageTitle                                    from 'app/util/PageTitle'
import PageViewChanger                              from 'app/util/PageViewChanger'
import SubMain                                      from 'app/util/SubMain'
import {Entities}                                   from 'core/entity/Entities'
import {Games}                                      from 'core/game/Games'
import GameImage                                    from 'core/game/component/GameImage'
import {GameStyles}                                 from 'core/gameStyle/GameStyles'
import GameStyleImage                               from 'core/gameStyle/component/GameStyleImage'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import {ViewDisplays}                               from 'display/ViewDisplays'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'

import NSMBU =  GameStyles.NSMBU
import SMB =    GameStyles.SMB
import SMB3 =   GameStyles.SMB3
import SMM1 =   Games.SMM1
import SMM2 =   Games.SMM2
import SMM3DS = Games.SMM3DS
import SMW =    GameStyles.SMW
import SM3DW =  GameStyles.SM3DW

//region -------------------- Import from deconstruction --------------------

const {
    SUPER_MUSHROOM, FIRE_FLOWER, SUPERBALL_FLOWER,
    MYSTERY_MUSHROOM, WEIRD_MUSHROOM,
    MASTER_SWORD, BIG_MUSHROOM, BIG_MUSHROOM_CLASSIC, BIG_MUSHROOM_MODERN, SMB2_MUSHROOM,
    SUPER_LEAF, FROG_SUIT,
    CAPE_FEATHER, POWER_BALLOON,
    PROPELLER_MUSHROOM, SUPER_ACORN,
    SUPER_BELL, SUPER_HAMMER, BOOMERANG_FLOWER,
    CANNON_BOX, PROPELLER_BOX, GOOMBA_MASK, BULLET_BILL_MASK, RED_POW_BOX,
    SUPER_STAR,
    SHOE, STILETTO,
    YOSHI_EGG, RED_YOSHI_EGG,
    KOOPA_CLOWN_CAR, JUNIOR_CLOWN_CAR, FIRE_KOOPA_CLOWN_CAR, FIRE_JUNIOR_CLOWN_CAR,
    KOOPA_TROOPA_CAR,
    BUZZY_SHELL, SPINY_SHELL, DRY_BONES_SHELL,
    LAKITU_CLOUD,
} = Entities
const {POWER_UP,} = OtherWordInTheGames
const {DOWN, RIGHT,} = Arrows

//endregion -------------------- Import from deconstruction --------------------
//region -------------------- Helper constants --------------------

const superMushroom_smbImages =   SUPER_MUSHROOM.editorImage.get(SMB,)
const superMushroom_smb3Images =  SUPER_MUSHROOM.editorImage.get(SMB3,)
const superMushroom_smwImages =   SUPER_MUSHROOM.editorImage.get(SMW,)
const superMushroom_nsmbuImages = SUPER_MUSHROOM.editorImage.get(NSMBU,)
const superMushroom_sm3dwImages = SUPER_MUSHROOM.editorImage.get(SM3DW,)

const fireFlower_smbImages =   FIRE_FLOWER.editorImage.get(SMB,).take(1,)
const fireFlower_smb3Images =  FIRE_FLOWER.editorImage.get(SMB3,).take(1,)
const fireFlower_smwImages =   FIRE_FLOWER.editorImage.get(SMW,).take(1,)
const fireFlower_nsmbuImages = FIRE_FLOWER.editorImage.get(NSMBU,).take(1,)
const fireFlower_sm3dwImages = FIRE_FLOWER.editorImage.get(SM3DW,).take(1,)

const mysteryMushroom_images =    MYSTERY_MUSHROOM.inGameImage.get(SMB,)
const weirdMushroom_images =      WEIRD_MUSHROOM.inGameImage.get(SMB,)
const masterSword_images =        MASTER_SWORD.editorImage.get(SMB,)
const superballFlower_images =    SUPERBALL_FLOWER.editorImage.images.take(1,)
const bigMushroom_images =        BIG_MUSHROOM.editorImage.images.take(1,)
const bigMushroomClassic_images = BIG_MUSHROOM_CLASSIC.editorImage.images.take(1,)
const bigMushroomModern_images =  BIG_MUSHROOM_MODERN.editorImage.images.take(1,)
const smb2Mushroom_images =       SMB2_MUSHROOM.editorImage.images.take(1,)

const superLeaf_images = SUPER_LEAF.editorImage.images.take(1,)
const frogSuit_images =  FROG_SUIT.editorImage.images.take(1,)

const capeFeather_images =  CAPE_FEATHER.editorImage.images.take(1,)
const powerBalloon_images = POWER_BALLOON.editorImage.images.take(1,)

const propellerMushroom_images = PROPELLER_MUSHROOM.editorImage.images.take(1,)
const superAcorn_images =        SUPER_ACORN.editorImage.images.take(1,)

const superBell_images =       SUPER_BELL.editorImage.images.take(1,)
const superHammer_images =     SUPER_HAMMER.editorImage.images.take(1,)
const boomerangFlower_images = BOOMERANG_FLOWER.editorImage.images.take(1,)

const cannonBox_images =      CANNON_BOX.editorImage.images
const propellerBox_images =   PROPELLER_BOX.editorImage.images
const goombaMask_images =     GOOMBA_MASK.editorImage.images
const bulletBillMask_images = BULLET_BILL_MASK.editorImage.images
const redPowBox_images =      RED_POW_BOX.editorImage.images

const superStar_smbImages =   SUPER_STAR.editorImage.get(SMB,)
const superStar_smb3Images =  SUPER_STAR.editorImage.get(SMB3,)
const superStar_smwImages =   SUPER_STAR.editorImage.get(SMW,)
const superStar_nsmbuImages = SUPER_STAR.editorImage.get(NSMBU,)
const superStar_sm3dwImages = SUPER_STAR.editorImage.get(SM3DW,)

const shoe_smbImages =  SHOE.inGameImage.get(SMB,).take(1,)
const shoe_smb3Images = SHOE.inGameImage.get(SMB3,).take(1,)

const stiletto_smbImages =  STILETTO.inGameImage.get(SMB,).take(1,)
const stiletto_smb3Images = STILETTO.inGameImage.get(SMB3,).take(1,)

const yoshi_smwImages =   YOSHI_EGG.inGameImage.get(SMW,).take(1,)
const yoshi_nsmbuImages = YOSHI_EGG.editorImage.get(NSMBU,).take(1,)

const redYoshi_smwImages =   RED_YOSHI_EGG.inGameImage.get(SMW,).take(1,)
const redYoshi_nsmbuImages = RED_YOSHI_EGG.editorImage.get(NSMBU,).take(1,)

const buzzyShell_smbImages =   BUZZY_SHELL.editorImage.get(SMB,).take(1,)
const buzzyShell_smb3Images =  BUZZY_SHELL.editorImage.get(SMB3,).take(1,)
const buzzyShell_smwImages =   BUZZY_SHELL.editorImage.get(SMW,)
const buzzyShell_nsmbuImages = BUZZY_SHELL.editorImage.get(NSMBU,)

const spinyShell_smbImages =   SPINY_SHELL.editorImage.get(SMB,)
const spinyShell_smb3Images =  SPINY_SHELL.editorImage.get(SMB3,)
const spinyShell_smwImages =   SPINY_SHELL.editorImage.get(SMW,)
const spinyShell_nsmbuImages = SPINY_SHELL.editorImage.get(NSMBU,)

const dryBonesShell_smbImages =   DRY_BONES_SHELL.editorImage.get(SMB,)
const dryBonesShell_smb3Images =  DRY_BONES_SHELL.editorImage.get(SMB3,)
const dryBonesShell_smwImages =   DRY_BONES_SHELL.editorImage.get(SMW,)
const dryBonesShell_nsmbuImages = DRY_BONES_SHELL.editorImage.get(NSMBU,)

const clownCar_smbImages =   KOOPA_CLOWN_CAR.editorImage.get(SMB,)
const clownCar_smb3Images =  KOOPA_CLOWN_CAR.editorImage.get(SMB3,)
const clownCar_smwImages =   KOOPA_CLOWN_CAR.editorImage.get(SMW,)
const clownCar_nsmbuImages = JUNIOR_CLOWN_CAR.editorImage.images

const fireClownCar_smbImages =   FIRE_KOOPA_CLOWN_CAR.editorImage.get(SMB,)
const fireClownCar_smb3Images =  FIRE_KOOPA_CLOWN_CAR.editorImage.get(SMB3,)
const fireClownCar_smwImages =   FIRE_KOOPA_CLOWN_CAR.editorImage.get(SMW,)
const fireClownCar_nsmbuImages = FIRE_JUNIOR_CLOWN_CAR.editorImage.images

const car_images = KOOPA_TROOPA_CAR.editorImage.images

const lakituCloud_smbImages =  LAKITU_CLOUD.editorImage.get(SMB,)
const lakituCloud_smb3Images =  LAKITU_CLOUD.editorImage.get(SMB3,)
const lakituCloud_smwImages =   LAKITU_CLOUD.editorImage.get(SMW,)
const lakituCloud_nsmbuImages = LAKITU_CLOUD.editorImage.get(NSMBU,)

//endregion -------------------- Helper constants --------------------

/**
 * @TODO Restructure the application to have a re-designed visual approach
 * @TODO Replace the state with a property
 * @reactComponent
 */
export default function PriorityApp({type, games, gameStyles,}: PriorityProperties,) {
    return <SubMain partial-id="priority" viewDisplay={ViewDisplays.NONE}>
        <AppTitle>{gameContentTranslation(`power-up, ride & hat priority.${type.type}.all`, {
            powerUp: POWER_UP.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(POWER_UP.singularEnglishName,).toLowerCase(),
            powerUps: POWER_UP.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(POWER_UP.pluralNameOnReference,).toLowerCase(),
            ride: gameContentTranslation('ride.singular',).toLowerCase(),
            rides: gameContentTranslation('ride.plural',).toLowerCase(),
            hat: gameContentTranslation('hat.singular',).toLowerCase(),
            hats: gameContentTranslation('hat.plural',).toLowerCase(),
        },)}</AppTitle>
        <PageTitle value={unfinishedText('Priority',)}/>
        <PageViewChanger>
            <GameAsideContent type={type} games={games} gameStyles={gameStyles}/>
            <GameStyleAsideContent type={type} games={games} gameStyles={gameStyles}/>
            {/*<OtherPathAsideContent type={type}/>*/}
            <OtherPathAsideContent/>
        </PageViewChanger>
        <Legend/>
        <UnfinishedText type="paragraph" isHidden>priority description</UnfinishedText>{/*TODO add description*/}
        <div id="displayed-powerUpPriorityGroup" className="app-content">
            <PowerUpPriorityInSmb isDisplayed={gameStyles.hasOnlySmb} games={games}/>
            <PowerUpPriorityInSmb3 isDisplayed={gameStyles.hasOnlySmb3} games={games}/>
            <PowerUpPriorityInSmw isDisplayed={gameStyles.hasOnlySmw} games={games}/>
            <PowerUpPriorityInNsmbu isDisplayed={gameStyles.hasOnlyNsmbu} games={games}/>
            <PowerUpPriorityInSm3dw isDisplayed={gameStyles.hasOnlySm3dw} games={games}/>
        </div>
    </SubMain>
}

//region -------------------- Aside content --------------------

/** @reactComponent */
function GameAsideContent({type, games, gameStyles,}: Pick<PriorityProperties, | 'type' | 'games' | 'gameStyles'>, ) {
    const routeName = type.routeName
    const {hasAllGames,} = games
    const allRoute = hasAllGames ? null : `${routeName} (Game=all)` as const
    const smm1Route = hasAllGames ? `${routeName} (Game=1)` as const : games.hasSmm1 ? null : `${routeName} (Game=1)` as const
    const smm3dsRoute = hasAllGames ? `${routeName} (Game=3DS)` as const : games.hasSmm3ds ? null : `${routeName} (Game=3DS)` as const
    const smm2Route = hasAllGames ? `${routeName} (Game=2)` as const : games.hasSmm2 ? null : `${routeName} (Game=2)` as const

    if (gameStyles.hasOnlySm3dw)
        return <div id="priority-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
            <LinkButton partial-id="allGamePriority" routeName={allRoute} color="primary">{contentTranslation('All',)}</LinkButton>
            <LinkButton partial-id="smm2Game" routeName={smm2Route} color="primary"><GameImage reference={SMM2}/></LinkButton>
        </div>
    return <div id="priority-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partial-id="allGamePriority" routeName={allRoute} color="primary">{contentTranslation('All',)}</LinkButton>
        <div id="entity-gamesButton-singularGame-container" className="btn-group btn-group-sm">
            <LinkButton partial-id="smm1Game" routeName={smm1Route} color="primary"><GameImage reference={SMM1}/></LinkButton>
            <LinkButton partial-id="smm3dsGame" routeName={smm3dsRoute} color="primary"><GameImage reference={SMM3DS}/></LinkButton>
            <LinkButton partial-id="smm2Game" routeName={smm2Route} color="primary"><GameImage reference={SMM2}/></LinkButton>
        </div>
    </div>
}

/** @reactComponent */
function GameStyleAsideContent({type, games, gameStyles,}: Pick<PriorityProperties, | 'type' | 'games' | 'gameStyles'>,) {
    const routeName = type.routeName
    const {hasAllGameStyles,} = gameStyles
    const allRoute = hasAllGameStyles ? null : `${routeName} (GameStyle=all)` as const
    const smbRoute = hasAllGameStyles ? `${routeName} (GameStyle=1)` as const : gameStyles.hasSmb ? null : `${routeName} (GameStyle=1)` as const
    const smb3Route = hasAllGameStyles ? `${routeName} (GameStyle=3)` as const : gameStyles.hasSmb3 ? null : `${routeName} (GameStyle=3)` as const
    const smwRoute = hasAllGameStyles ? `${routeName} (GameStyle=W)` as const : gameStyles.hasSmw ? null : `${routeName} (GameStyle=W)` as const
    const nsmbuRoute = hasAllGameStyles ? `${routeName} (GameStyle=U)` as const : gameStyles.hasNsmbu ? null : `${routeName} (GameStyle=U)` as const
    const sm3dwRoute = hasAllGameStyles ? `${routeName} (GameStyle=3DW)` as const : gameStyles.hasSm3dw ? null : `${routeName} (GameStyle=3DW)` as const

    if (games.hasSmm2)
        return <div id="priority-gameStylesButton-container" className="gameStyleAsideContent-container btn-group-vertical btn-group-sm">
            <LinkButton partial-id="allGamePriority" routeName={allRoute} color="primary">{contentTranslation('All',)}</LinkButton>
            <div id="priority-gameStylesButton-singularGameStyle-top-container" className="btn-group btn-group-sm">
                <LinkButton partial-id="smbGameStylePriority" routeName={smbRoute} color="primary"><GameStyleImage reference={SMB}/></LinkButton>
                <LinkButton partial-id="smb3GameStylePriority" routeName={smb3Route} color="primary"><GameStyleImage reference={SMB3}/></LinkButton>
            </div>
            <div id="priority-gameStylesButton-singularGameStyle-center-container" className="btn-group btn-group-sm">
                <LinkButton partial-id="smwGameStylePriority" routeName={smwRoute} color="primary"><GameStyleImage reference={SMW}/></LinkButton>
                <LinkButton partial-id="nsmbuGameStylePriority" routeName={nsmbuRoute} color="primary"><GameStyleImage reference={NSMBU}/></LinkButton>
            </div>
            <div id="priority-gameStylesButton-singularGameStyle-bottom-container" className="btn-group btn-group-sm">
                <LinkButton partial-id="sm3dwGameStylePriority" routeName={sm3dwRoute} color="primary"><GameStyleImage reference={SM3DW}/></LinkButton>
            </div>
        </div>
    return <div id="priority-gameStylesButton-container" className="gameStyleAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partial-id="allGamePriority" routeName={allRoute} color="primary">{contentTranslation('All',)}</LinkButton>
        <div id="priority-gameStylesButton-singularGameStyle-top-container" className="btn-group btn-group-sm">
            <LinkButton partial-id="smbGameStylePriority" routeName={smbRoute} color="primary"><GameStyleImage reference={SMB}/></LinkButton>
            <LinkButton partial-id="smb3GameStylePriority" routeName={smb3Route} color="primary"><GameStyleImage reference={SMB3}/></LinkButton>
        </div>
        <div id="priority-gameStylesButton-singularGameStyle-bottom-container" className="btn-group btn-group-sm">
            <LinkButton partial-id="smwGameStylePriority" routeName={smwRoute} color="primary"><GameStyleImage reference={SMW}/></LinkButton>
            <LinkButton partial-id="nsmbuGameStylePriority" routeName={nsmbuRoute} color="primary"><GameStyleImage reference={NSMBU}/></LinkButton>
        </div>
    </div>
}

/** @reactComponent */
// function OtherPathAsideContent({type,}: Pick<PriorityProperties, 'type'>,) {
function OtherPathAsideContent() {
    return <div id="powerUpRideAndHatPriority-otherPath-buttonGroup-container" className="btn-group-vertical btn-group-sm" role="group">
        <button className="btn" disabled>{contentTranslation('All',)}</button>
        <div className="btn-group btn-group-sm" role="group">
            <button className="btn" disabled>{gameContentTranslation('power-up.singular',)}</button>
            <button className="btn" disabled>{gameContentTranslation('ride.singular',)}</button>
            <button className="btn" disabled>{gameContentTranslation('hat.singular',)}</button>
        </div>
    </div>
    // return <div id="powerUpRideAndHatPriority-otherPath-buttonGroup-container" className="btn-group-vertical btn-group-sm" role="group">
    //     <LinkButton partial-id="everyPriority" routeName={type.allRouteName} color={type.allColor}>{contentTranslation('All',)}</LinkButton>
    //     <LinkButton partial-id="powerUpPriority" routeName={type.powerUpRouteName} color={type.powerUpColor}>{gameContentTranslation('power-up.singular',)}</LinkButton>
    //     <LinkButton partial-id="ridePriority" routeName={type.rideRouteName} color={type.rideColor}>{gameContentTranslation('ride.singular',)}</LinkButton>
    //     <LinkButton partial-id="hatPriority" routeName={type.hatRouteName} color={type.hatColor}>{gameContentTranslation('hat.singular',)}</LinkButton>
    // </div>
}

//endregion -------------------- Aside content --------------------

//region -------------------- Legend --------------------

/** @reactComponent */
function Legend() {
    return <div id="powerUpRideAndHatPriority-legend-container" className="border rounded border-dark border-opacity-25 mt-2 ms-auto">
        <h3 className="text-center border border-0 border-bottom border-dark border-opacity-25 pb-1 mb-0">{unfinishedText('Can be obtained …')}</h3>
        <div id="powerUpRideAndHatPriority-information-container" className="px-3 d-flex flex-column flex-sm-row flex-lg-column flex-xl-row">
            <ul className="list-unstyled m-0">
                <li id="example-indirect" className="d-flex"><Arrow value={RIGHT}/><UnfinishedText>Indirectly</UnfinishedText></li>
                <li id="example-direct" className="d-flex"><Arrow value={RIGHT}/><UnfinishedText>Directly</UnfinishedText></li>
            </ul>
            <ul className="list-unstyled m-0">
                <li id="example-withLag" className="d-flex">
                    <div className="color rounded my-auto"/>
                    <UnfinishedText>With lag</UnfinishedText></li>
                <li id="example-withoutLag" className="d-flex">
                    <div className="color rounded my-auto"/>
                    <UnfinishedText>Without lag</UnfinishedText></li>
            </ul>
        </div>
    </div>
}

//endregion -------------------- Legend --------------------
//region -------------------- Power-up priority --------------------

const SMB_SMM1_ARROW_PROPERTIES = {
    topLeftTo: {topRight: RIGHT, centerLeft: DOWN, centerRight: DOWN, bottomLeft: DOWN, bottomRight: DOWN,},
    topRightTo: {centerLeft: DOWN, centerRight: DOWN, bottomLeft: DOWN, bottomRight: DOWN,},
} as const satisfies GroupOf6PowerUpPriorityArrowProperties
const SMB_SMM2_ARROW_PROPERTIES = {
    topLeftTo: {topRight: RIGHT, centerLeft: DOWN, centerRight: DOWN, bottomLeft: DOWN, bottomRight: DOWN,},
} as const satisfies GroupOf6PowerUpPriorityArrowProperties
const SM3DW_ARROW_PROPERTIES = {topTo: {centerLeft: DOWN, centerRight: DOWN, bottomLeft: DOWN, bottomRight: DOWN,},} as const satisfies GroupOf5PowerUpPriorityArrowProperties

interface PowerUpPriorityProperties
    extends ReactProperties {

    readonly isDisplayed: boolean

    readonly games: GameCollection

}

/** @reactComponent */
function PowerUpPriorityInSmb({isDisplayed, games,}: PowerUpPriorityProperties,) {
    if (!isDisplayed)
        return null

    const {hasSmm1, hasSmm2, hasSmm3ds,} = games
    if (games.hasOnlySmm2)
        return <GroupOf4PowerUpPriority id="powerUpPriority-group-smb" isTopArrowSeparated isFirstDiagonalArrowSeparated isSecondDiagonalArrowSeparated isRightArrowSeparated>
            <GroupImages key="Power-up priority (SMB - Super Star)" id="powerUpPriority-smb-superStar" images={superStar_smbImages}/>
            <GroupOf6PowerUpPriority id="powerUpPriority-group-smm2-smb-others" arrow={SMB_SMM2_ARROW_PROPERTIES}>
                <GroupImages id="powerUpPriority-smm2-smb-superMushroom" images={superMushroom_smbImages}/>
                <GroupImages id="powerUpPriority-masterSword"            images={masterSword_images}/>
                <GroupImages id="powerUpPriority-bigMushroom"            images={bigMushroom_images}/>
                <GroupImages id="powerUpPriority-smb2Mushroom"           images={smb2Mushroom_images}/>
                <GroupImages id="powerUpPriority-smm2-smb-fireFlower"    images={fireFlower_smbImages}/>
                <GroupImages id="powerUpPriority-superballFlower"        images={superballFlower_images}/>
            </GroupOf6PowerUpPriority>
            <GroupOf3PowerUpPriority id="powerUpPriority-group-smb-mountableObject">
                <GroupImages id="powerUpPriority-smb-lakituCloud"  images={lakituCloud_smbImages}/>
                <GroupImages id="powerUpPriority-smb-clownCar"     images={clownCar_smbImages}/>
                <GroupImages id="powerUpPriority-smb-fireClownCar" images={fireClownCar_smbImages}/>
            </GroupOf3PowerUpPriority>
            <GroupOf5PowerUpPriority id="powerUpPriority-group-smb-shellAndShoe">
                <GroupImages id="powerUpPriority-smb-dryBonesShell" images={dryBonesShell_smbImages}/>
                <GroupImages id="powerUpPriority-smb-buzzyShell"    images={buzzyShell_smbImages}/>
                <GroupImages id="powerUpPriority-smb-spinyShell"    images={spinyShell_smbImages}/>
                <GroupImages id="powerUpPriority-smb-shoe"          images={shoe_smbImages}/>
                <GroupImages id="powerUpPriority-smb-stiletto"      images={stiletto_smbImages}/>
            </GroupOf5PowerUpPriority>
        </GroupOf4PowerUpPriority>
    if (games.hasOnlySmm1)
        return <GroupOf4PowerUpPriority id="powerUpPriority-group-smb" isTopArrowSeparated isFirstDiagonalArrowSeparated isSecondDiagonalArrowSeparated isRightArrowSeparated>
            <GroupImages key="Power-up priority (SMB - Super Star)" id="powerUpPriority-smb-superStar" images={superStar_smbImages}/>
            <GroupOf6PowerUpPriority id="powerUpPriority-group-smm-smb-others" arrow={SMB_SMM1_ARROW_PROPERTIES}>
                <GroupImages id="powerUpPriority-smm1-smb-superMushroom" images={superMushroom_smbImages}/>
                <GroupImages id="powerUpPriority-weirdMushroom"          images={weirdMushroom_images}/>
                <GroupImages id="powerUpPriority-mysteryMushroom"        images={mysteryMushroom_images}/>
                <GroupImages id="powerUpPriority-bigMushroomClassic"     images={bigMushroomClassic_images}/>
                <GroupImages id="powerUpPriority-smm1-smb-fireFlower"    images={fireFlower_smbImages}/>
                <GroupImages id="powerUpPriority-bigMushroomModern"      images={bigMushroomModern_images}/>
            </GroupOf6PowerUpPriority>
            <GroupOf3PowerUpPriority id="powerUpPriority-group-smb-mountableObject">
                <GroupImages id="powerUpPriority-smb-lakituCloud"  images={lakituCloud_smbImages}/>
                <GroupImages id="powerUpPriority-smb-clownCar"     images={clownCar_smbImages}/>
                <GroupImages id="powerUpPriority-smb-fireClownCar" images={fireClownCar_smbImages}/>
            </GroupOf3PowerUpPriority>
            <GroupOf4PowerUpPriority id="powerUpPriority-group-smb-shellAndShoe">
                <GroupImages id="powerUpPriority-smb-buzzyShell" images={buzzyShell_smbImages}/>
                <GroupImages id="powerUpPriority-smb-spinyShell" images={spinyShell_smbImages}/>
                <GroupImages id="powerUpPriority-smb-shoe"       images={shoe_smbImages}/>
                <GroupImages id="powerUpPriority-smb-stiletto"   images={stiletto_smbImages}/>
            </GroupOf4PowerUpPriority>
        </GroupOf4PowerUpPriority>
    if (games.hasOnlySmm3ds)
        return <GroupOf4PowerUpPriority id="powerUpPriority-group-smb" isTopArrowSeparated isFirstDiagonalArrowSeparated isSecondDiagonalArrowSeparated isRightArrowSeparated>
            <GroupImages key="Power-up priority (SMB - Super Star)" id="powerUpPriority-smb-superStar" images={superStar_smbImages}/>
            <GroupOf2PowerUpPriority id="powerUpPriority-group-smm3ds-smb-others" arrow={RIGHT}>
                <GroupImages id="powerUpPriority-smm3ds-smb-superMushroom" images={superMushroom_smbImages}/>
                <GroupImages id="powerUpPriority-smm3ds-smb-fireFlower"    images={fireFlower_smbImages}/>
            </GroupOf2PowerUpPriority>
            <GroupOf3PowerUpPriority id="powerUpPriority-group-smb-mountableObject">
                <GroupImages id="powerUpPriority-smb-lakituCloud"  images={lakituCloud_smbImages}/>
                <GroupImages id="powerUpPriority-smb-clownCar"     images={clownCar_smbImages}/>
                <GroupImages id="powerUpPriority-smb-fireClownCar" images={fireClownCar_smbImages}/>
            </GroupOf3PowerUpPriority>
            <GroupOf4PowerUpPriority id="powerUpPriority-group-smb-shellAndShoe">
                <GroupImages id="powerUpPriority-smb-buzzyShell" images={buzzyShell_smbImages}/>
                <GroupImages id="powerUpPriority-smb-spinyShell" images={spinyShell_smbImages}/>
                <GroupImages id="powerUpPriority-smb-shoe"       images={shoe_smbImages}/>
                <GroupImages id="powerUpPriority-smb-stiletto"   images={stiletto_smbImages}/>
            </GroupOf4PowerUpPriority>
        </GroupOf4PowerUpPriority>

    if (hasSmm1 && hasSmm2)
        return <GroupOf5PowerUpPriority id="powerUpPriority-group-smb">
            <GroupImages id="powerUpPriority-smb-superStar" images={superStar_smbImages}/>
            <GroupOf6PowerUpPriority id="powerUpPriority-group-smm-smb-others" arrow={SMB_SMM1_ARROW_PROPERTIES}>
                <GroupImages id="powerUpPriority-smm1-smb-superMushroom" images={superMushroom_smbImages}/>
                <GroupImages id="powerUpPriority-weirdMushroom"          images={weirdMushroom_images}/>
                <GroupImages id="powerUpPriority-mysteryMushroom"        images={mysteryMushroom_images}/>
                <GroupImages id="powerUpPriority-bigMushroomClassic"     images={bigMushroomClassic_images}/>
                <GroupImages id="powerUpPriority-smm1-smb-fireFlower"    images={fireFlower_smbImages}/>
                <GroupImages id="powerUpPriority-bigMushroomModern"      images={bigMushroomModern_images}/>
            </GroupOf6PowerUpPriority>
            <GroupOf6PowerUpPriority id="powerUpPriority-group-smm2-smb-others" arrow={SMB_SMM2_ARROW_PROPERTIES}>
                <GroupImages id="powerUpPriority-smm2-smb-superMushroom" images={superMushroom_smbImages}/>
                <GroupImages id="powerUpPriority-masterSword"            images={masterSword_images}/>
                <GroupImages id="powerUpPriority-bigMushroom"            images={bigMushroom_images}/>
                <GroupImages id="powerUpPriority-smb2Mushroom"           images={smb2Mushroom_images}/>
                <GroupImages id="powerUpPriority-smm2-smb-fireFlower"    images={fireFlower_smbImages}/>
                <GroupImages id="powerUpPriority-superballFlower"        images={superballFlower_images}/>
            </GroupOf6PowerUpPriority>
            <GroupOf3PowerUpPriority id="powerUpPriority-group-smb-mountableObject">
                <GroupImages id="powerUpPriority-smb-lakituCloud"  images={lakituCloud_smbImages}/>
                <GroupImages id="powerUpPriority-smb-clownCar"     images={clownCar_smbImages}/>
                <GroupImages id="powerUpPriority-smb-fireClownCar" images={fireClownCar_smbImages}/>
            </GroupOf3PowerUpPriority>
            <GroupOf5PowerUpPriority id="powerUpPriority-group-smb-shellAndShoe">
                <GroupImages id="powerUpPriority-smb-dryBonesShell" images={dryBonesShell_smbImages}/>
                <GroupImages id="powerUpPriority-smb-buzzyShell"    images={buzzyShell_smbImages}/>
                <GroupImages id="powerUpPriority-smb-spinyShell"    images={spinyShell_smbImages}/>
                <GroupImages id="powerUpPriority-smb-shoe"          images={shoe_smbImages}/>
                <GroupImages id="powerUpPriority-smb-stiletto"      images={stiletto_smbImages}/>
            </GroupOf5PowerUpPriority>
        </GroupOf5PowerUpPriority>
    if (hasSmm1 && hasSmm3ds)
        return <GroupOf4PowerUpPriority id="powerUpPriority-group-smb" isTopArrowSeparated isSecondDiagonalArrowSeparated isRightArrowSeparated isBottomArrowSeparated>
            <GroupImages id="powerUpPriority-smb-superStar" images={superStar_smbImages}/>
            <GroupOf6PowerUpPriority id="powerUpPriority-group-smm-smb-others" arrow={SMB_SMM1_ARROW_PROPERTIES}>
                <GroupImages id="powerUpPriority-smm1-smb-superMushroom" images={superMushroom_smbImages}/>
                <GroupImages id="powerUpPriority-weirdMushroom"          images={weirdMushroom_images}/>
                <GroupImages id="powerUpPriority-mysteryMushroom"        images={mysteryMushroom_images}/>
                <GroupImages id="powerUpPriority-bigMushroomClassic"     images={bigMushroomClassic_images}/>
                <GroupImages id="powerUpPriority-smm1-smb-fireFlower"    images={fireFlower_smbImages}/>
                <GroupImages id="powerUpPriority-bigMushroomModern"      images={bigMushroomModern_images}/>
            </GroupOf6PowerUpPriority>
            <GroupOf3PowerUpPriority id="powerUpPriority-group-smb-mountableObject">
                <GroupImages id="powerUpPriority-smb-lakituCloud"  images={lakituCloud_smbImages}/>
                <GroupImages id="powerUpPriority-smb-clownCar"     images={clownCar_smbImages}/>
                <GroupImages id="powerUpPriority-smb-fireClownCar" images={fireClownCar_smbImages}/>
            </GroupOf3PowerUpPriority>
            <GroupOf4PowerUpPriority id="powerUpPriority-group-smb-shellAndShoe">
                <GroupImages id="powerUpPriority-smb-buzzyShell" images={buzzyShell_smbImages}/>
                <GroupImages id="powerUpPriority-smb-spinyShell" images={spinyShell_smbImages}/>
                <GroupImages id="powerUpPriority-smb-shoe"       images={shoe_smbImages}/>
                <GroupImages id="powerUpPriority-smb-stiletto"   images={stiletto_smbImages}/>
            </GroupOf4PowerUpPriority>
        </GroupOf4PowerUpPriority>
    if (hasSmm3ds && hasSmm2)
        return <GroupOf4PowerUpPriority id="powerUpPriority-group-smb">
            <GroupImages id="powerUpPriority-smb-superStar" images={superStar_smbImages}/>
            <GroupOf6PowerUpPriority id="powerUpPriority-group-smm2-smb-others" arrow={SMB_SMM2_ARROW_PROPERTIES}>
                <GroupImages id="powerUpPriority-smm2-smb-superMushroom" images={superMushroom_smbImages}/>
                <GroupImages id="powerUpPriority-masterSword"            images={masterSword_images}/>
                <GroupImages id="powerUpPriority-bigMushroom"            images={bigMushroom_images}/>
                <GroupImages id="powerUpPriority-smb2Mushroom"           images={smb2Mushroom_images}/>
                <GroupImages id="powerUpPriority-smm2-smb-fireFlower"    images={fireFlower_smbImages}/>
                <GroupImages id="powerUpPriority-superballFlower"        images={superballFlower_images}/>
            </GroupOf6PowerUpPriority>
            <GroupOf3PowerUpPriority id="powerUpPriority-group-smb-mountableObject">
                <GroupImages id="powerUpPriority-smb-lakituCloud"  images={lakituCloud_smbImages}/>
                <GroupImages id="powerUpPriority-smb-clownCar"     images={clownCar_smbImages}/>
                <GroupImages id="powerUpPriority-smb-fireClownCar" images={fireClownCar_smbImages}/>
            </GroupOf3PowerUpPriority>
            <GroupOf5PowerUpPriority id="powerUpPriority-group-smb-shellAndShoe">
                <GroupImages id="powerUpPriority-smb-dryBonesShell" images={dryBonesShell_smbImages}/>
                <GroupImages id="powerUpPriority-smb-buzzyShell"    images={buzzyShell_smbImages}/>
                <GroupImages id="powerUpPriority-smb-spinyShell"    images={spinyShell_smbImages}/>
                <GroupImages id="powerUpPriority-smb-shoe"          images={shoe_smbImages}/>
                <GroupImages id="powerUpPriority-smb-stiletto"      images={stiletto_smbImages}/>
            </GroupOf5PowerUpPriority>
        </GroupOf4PowerUpPriority>

    //has all games
    return <GroupOf5PowerUpPriority id="powerUpPriority-group-smb">
        <GroupImages id="powerUpPriority-smb-superStar" images={superStar_smbImages}/>
        <GroupOf6PowerUpPriority id="powerUpPriority-group-smm-smb-others" arrow={SMB_SMM1_ARROW_PROPERTIES}>
            <GroupImages id="powerUpPriority-smm1-smb-superMushroom" images={superMushroom_smbImages}/>
            <GroupImages id="powerUpPriority-weirdMushroom"          images={weirdMushroom_images}/>
            <GroupImages id="powerUpPriority-mysteryMushroom"        images={mysteryMushroom_images}/>
            <GroupImages id="powerUpPriority-bigMushroomClassic"     images={bigMushroomClassic_images}/>
            <GroupImages id="powerUpPriority-smm1-smb-fireFlower"    images={fireFlower_smbImages}/>
            <GroupImages id="powerUpPriority-bigMushroomModern"      images={bigMushroomModern_images}/>
        </GroupOf6PowerUpPriority>
        <GroupOf6PowerUpPriority id="powerUpPriority-group-smm2-smb-others" arrow={SMB_SMM2_ARROW_PROPERTIES}>
            <GroupImages id="powerUpPriority-smm2-smb-superMushroom" images={superMushroom_smbImages}/>
            <GroupImages id="powerUpPriority-masterSword"            images={masterSword_images}/>
            <GroupImages id="powerUpPriority-bigMushroom"            images={bigMushroom_images}/>
            <GroupImages id="powerUpPriority-smb2Mushroom"           images={smb2Mushroom_images}/>
            <GroupImages id="powerUpPriority-smm2-smb-fireFlower"    images={fireFlower_smbImages}/>
            <GroupImages id="powerUpPriority-superballFlower"        images={superballFlower_images}/>
        </GroupOf6PowerUpPriority>
        <GroupOf3PowerUpPriority id="powerUpPriority-group-smb-mountableObject">
            <GroupImages id="powerUpPriority-smb-lakituCloud"  images={lakituCloud_smbImages}/>
            <GroupImages id="powerUpPriority-smb-clownCar"     images={clownCar_smbImages}/>
            <GroupImages id="powerUpPriority-smb-fireClownCar" images={fireClownCar_smbImages}/>
        </GroupOf3PowerUpPriority>
        <GroupOf5PowerUpPriority id="powerUpPriority-group-smb-shellAndShoe">
            <GroupImages id="powerUpPriority-smb-dryBonesShell" images={dryBonesShell_smbImages}/>
            <GroupImages id="powerUpPriority-smb-buzzyShell"    images={buzzyShell_smbImages}/>
            <GroupImages id="powerUpPriority-smb-spinyShell"    images={spinyShell_smbImages}/>
            <GroupImages id="powerUpPriority-smb-shoe"          images={shoe_smbImages}/>
            <GroupImages id="powerUpPriority-smb-stiletto"      images={stiletto_smbImages}/>
        </GroupOf5PowerUpPriority>
    </GroupOf5PowerUpPriority>
}

/** @reactComponent */
function PowerUpPriorityInSmb3({isDisplayed, games,}: PowerUpPriorityProperties,) {
    if (!isDisplayed)
        return null

    const {hasSmm2,} = games
    if (hasSmm2)
        return <GroupOf4PowerUpPriority id="powerUpPriority-group-smb3" isTopArrowSeparated isFirstDiagonalArrowSeparated isSecondDiagonalArrowSeparated isRightArrowSeparated>
            <GroupImages id="powerUpPriority-smb3-superStar" images={superStar_smb3Images}/>
            <GroupOf4PowerUpPriority id="powerUpPriority-group-smb3-powerUp" topArrow={RIGHT} leftArrow={DOWN} firstDiagonalArrow={DOWN}>
                <GroupImages id="powerUpPriority-smb3-superMushroom"   images={superMushroom_smb3Images}/>
                <GroupImages id="powerUpPriority-smb3-fireFlower"      images={fireFlower_smb3Images}/>
                <GroupImages id="powerUpPriority-smb3-specialPowerUp1" images={superLeaf_images}/>
                <GroupImages id="powerUpPriority-smb3-specialPowerUp2" images={frogSuit_images}/>
            </GroupOf4PowerUpPriority>
            <GroupOf3PowerUpPriority id="powerUpPriority-group-smb3-mountableObject">
                <GroupImages id="powerUpPriority-smb3-lakituCloud"  images={lakituCloud_smb3Images}/>
                <GroupImages id="powerUpPriority-smb3-clownCar"     images={clownCar_smb3Images}/>
                <GroupImages id="powerUpPriority-smb3-fireClownCar" images={fireClownCar_smb3Images}/>
            </GroupOf3PowerUpPriority>
            <GroupOf5PowerUpPriority id="powerUpPriority-group-smb3-shellAndShoe">
                <GroupImages id="powerUpPriority-smb3-dryBonesShell" images={dryBonesShell_smb3Images}/>
                <GroupImages id="powerUpPriority-smb3-buzzyShell"    images={buzzyShell_smb3Images}/>
                <GroupImages id="powerUpPriority-smb3-spinyShell"    images={spinyShell_smb3Images}/>
                <GroupImages id="powerUpPriority-smb3-shoe"          images={shoe_smb3Images}/>
                <GroupImages id="powerUpPriority-smb3-stiletto"      images={stiletto_smb3Images}/>
            </GroupOf5PowerUpPriority>
        </GroupOf4PowerUpPriority>
    return <GroupOf4PowerUpPriority id="powerUpPriority-group-smb3" isTopArrowSeparated isFirstDiagonalArrowSeparated isSecondDiagonalArrowSeparated isRightArrowSeparated>
        <GroupImages id="powerUpPriority-smb3-superStar" images={superStar_smb3Images}/>
        <GroupOf3PowerUpPriority id="powerUpPriority-group-smb3-powerUp" leftArrow={DOWN} rightArrow={DOWN}>
            <GroupImages id="powerUpPriority-smb3-superMushroom"  images={superMushroom_smb3Images}/>
            <GroupImages id="powerUpPriority-smb3-fireFlower"     images={fireFlower_smb3Images}/>
            <GroupImages id="powerUpPriority-smb3-specialPowerUp" images={superLeaf_images}/>
        </GroupOf3PowerUpPriority>
        <GroupOf3PowerUpPriority id="powerUpPriority-group-smb3-mountableObject">
            <GroupImages id="powerUpPriority-smb3-lakituCloud"  images={lakituCloud_smb3Images}/>
            <GroupImages id="powerUpPriority-smb3-clownCar"     images={clownCar_smb3Images}/>
            <GroupImages id="powerUpPriority-smb3-fireClownCar" images={fireClownCar_smb3Images}/>
        </GroupOf3PowerUpPriority>
        <GroupOf4PowerUpPriority id="powerUpPriority-group-smb3-shellAndShoe">
            <GroupImages id="powerUpPriority-smb3-buzzyShell" images={buzzyShell_smb3Images}/>
            <GroupImages id="powerUpPriority-smb3-spinyShell" images={spinyShell_smb3Images}/>
            <GroupImages id="powerUpPriority-smb3-shoe"       images={shoe_smb3Images}/>
            <GroupImages id="powerUpPriority-smb3-stiletto"   images={stiletto_smb3Images}/>
        </GroupOf4PowerUpPriority>
    </GroupOf4PowerUpPriority>
}

/** @reactComponent */
function PowerUpPriorityInSmw({isDisplayed, games,}: PowerUpPriorityProperties,) {
    if (!isDisplayed)
        return null

    const {hasSmm2,} = games
    if (hasSmm2)
        return <GroupOf4PowerUpPriority id="powerUpPriority-group-smw" isTopArrowSeparated isFirstDiagonalArrowSeparated isSecondDiagonalArrowSeparated isRightArrowSeparated>
            <GroupImages id="powerUpPriority-smw-superStar" images={superStar_smwImages}/>
            <GroupOf4PowerUpPriority id="powerUpPriority-group-smw-powerUp" topArrow={RIGHT} leftArrow={DOWN} firstDiagonalArrow={DOWN}>
                <GroupImages id="powerUpPriority-smw-superMushroom"   images={superMushroom_smwImages}/>
                <GroupImages id="powerUpPriority-smw-fireFlower"      images={fireFlower_smwImages}/>
                <GroupImages id="powerUpPriority-smw-specialPowerUp1" images={capeFeather_images}/>
                <GroupImages id="powerUpPriority-smw-specialPowerUp2" images={powerBalloon_images}/>
            </GroupOf4PowerUpPriority>
            <GroupOf3PowerUpPriority id="powerUpPriority-group-smw-mountableObject">
                <GroupImages id="powerUpPriority-smw-lakituCloud"  images={lakituCloud_smwImages}/>
                <GroupImages id="powerUpPriority-smw-clownCar"     images={clownCar_smwImages}/>
                <GroupImages id="powerUpPriority-smw-fireClownCar" images={fireClownCar_smwImages}/>
            </GroupOf3PowerUpPriority>
            <GroupOf5PowerUpPriority id="powerUpPriority-group-smw-shellAndYoshi">
                <GroupImages id="powerUpPriority-smw-dryBonesShell" images={dryBonesShell_smwImages}/>
                <GroupImages id="powerUpPriority-smw-buzzyShell"    images={buzzyShell_smwImages}/>
                <GroupImages id="powerUpPriority-smw-spinyShell"    images={spinyShell_smwImages}/>
                <GroupImages id="powerUpPriority-smw-yoshi"         images={yoshi_smwImages}/>
                <GroupImages id="powerUpPriority-smw-redYoshi"      images={redYoshi_smwImages}/>
            </GroupOf5PowerUpPriority>
        </GroupOf4PowerUpPriority>
    return <GroupOf4PowerUpPriority id="powerUpPriority-group-smw" isTopArrowSeparated isFirstDiagonalArrowSeparated isSecondDiagonalArrowSeparated isRightArrowSeparated>
        <GroupImages id="powerUpPriority-smw-superStar" images={superStar_smwImages}/>
        <GroupOf3PowerUpPriority id="powerUpPriority-group-smw-powerUp" leftArrow={DOWN} rightArrow={DOWN}>
            <GroupImages id="powerUpPriority-smw-superMushroom"  images={superMushroom_smwImages}/>
            <GroupImages id="powerUpPriority-smw-fireFlower"     images={fireFlower_smwImages}/>
            <GroupImages id="powerUpPriority-smw-specialPowerUp" images={capeFeather_images}/>
        </GroupOf3PowerUpPriority>
        <GroupOf3PowerUpPriority id="powerUpPriority-group-smw-mountableObject">
            <GroupImages id="powerUpPriority-smw-lakituCloud"  images={lakituCloud_smwImages}/>
            <GroupImages id="powerUpPriority-smw-clownCar"     images={clownCar_smwImages}/>
            <GroupImages id="powerUpPriority-smw-fireClownCar" images={fireClownCar_smwImages}/>
        </GroupOf3PowerUpPriority>
        <GroupOf3PowerUpPriority id="powerUpPriority-group-smw-shellAndYoshi">
            <GroupImages id="powerUpPriority-smw-buzzyShell" images={buzzyShell_smwImages}/>
            <GroupImages id="powerUpPriority-smw-spinyShell" images={spinyShell_smwImages}/>
            <GroupImages id="powerUpPriority-smw-yoshi"      images={yoshi_smwImages}/>
        </GroupOf3PowerUpPriority>
    </GroupOf4PowerUpPriority>
}

/** @reactComponent */
function PowerUpPriorityInNsmbu({isDisplayed, games,}: PowerUpPriorityProperties,) {
    if (!isDisplayed)
        return null

    const {hasSmm2,} = games
    if (hasSmm2)
        return <GroupOf4PowerUpPriority id="powerUpPriority-group-nsmbu" isTopArrowSeparated isFirstDiagonalArrowSeparated isSecondDiagonalArrowSeparated isRightArrowSeparated>
            <GroupImages id="powerUpPriority-nsmbu-superStar" images={superStar_nsmbuImages}/>
            <GroupOf4PowerUpPriority id="powerUpPriority-group-nsmbu-powerUp" topArrow={RIGHT} leftArrow={DOWN} firstDiagonalArrow={DOWN}>
                <GroupImages id="powerUpPriority-nsmbu-superMushroom"   images={superMushroom_nsmbuImages}/>
                <GroupImages id="powerUpPriority-nsmbu-fireFlower"      images={fireFlower_nsmbuImages}/>
                <GroupImages id="powerUpPriority-nsmbu-specialPowerUp1" images={propellerMushroom_images}/>
                <GroupImages id="powerUpPriority-nsmbu-specialPowerUp2" images={superAcorn_images}/>
            </GroupOf4PowerUpPriority>
            <GroupOf3PowerUpPriority id="powerUpPriority-group-nsmbu-mountableObject">
                <GroupImages id="powerUpPriority-nsmbu-lakituCloud"  images={lakituCloud_nsmbuImages}/>
                <GroupImages id="powerUpPriority-nsmbu-clownCar"     images={clownCar_nsmbuImages}/>
                <GroupImages id="powerUpPriority-nsmbu-fireClownCar" images={fireClownCar_nsmbuImages}/>
            </GroupOf3PowerUpPriority>
            <GroupOf5PowerUpPriority id="powerUpPriority-group-nsmbu-shellAndYoshi">
                <GroupImages id="powerUpPriority-nsmbu-dryBonesShell" images={dryBonesShell_nsmbuImages}/>
                <GroupImages id="powerUpPriority-nsmbu-buzzyShell"    images={buzzyShell_nsmbuImages}/>
                <GroupImages id="powerUpPriority-nsmbu-spinyShell"    images={spinyShell_nsmbuImages}/>
                <GroupImages id="powerUpPriority-nsmbu-yoshi"         images={yoshi_nsmbuImages}/>
                <GroupImages id="powerUpPriority-nsmbu-redYoshi"      images={redYoshi_nsmbuImages}/>
            </GroupOf5PowerUpPriority>
        </GroupOf4PowerUpPriority>
    return <GroupOf4PowerUpPriority id="powerUpPriority-group-nsmbu" isTopArrowSeparated isFirstDiagonalArrowSeparated isSecondDiagonalArrowSeparated isRightArrowSeparated>
        <GroupImages id="powerUpPriority-nsmbu-superStar" images={superStar_nsmbuImages}/>
        <GroupOf3PowerUpPriority id="powerUpPriority-group-nsmbu-powerUp" leftArrow={DOWN} rightArrow={DOWN}>
            <GroupImages id="powerUpPriority-nsmbu-superMushroom"  images={superMushroom_nsmbuImages}/>
            <GroupImages id="powerUpPriority-nsmbu-fireFlower"     images={fireFlower_nsmbuImages}/>
            <GroupImages id="powerUpPriority-nsmbu-specialPowerUp" images={propellerMushroom_images}/>
        </GroupOf3PowerUpPriority>
        <GroupOf3PowerUpPriority id="powerUpPriority-group-nsmbu-mountableObject">
            <GroupImages id="powerUpPriority-nsmbu-lakituCloud"  images={lakituCloud_nsmbuImages}/>
            <GroupImages id="powerUpPriority-nsmbu-clownCar"     images={clownCar_nsmbuImages}/>
            <GroupImages id="powerUpPriority-nsmbu-fireClownCar" images={fireClownCar_nsmbuImages}/>
        </GroupOf3PowerUpPriority>
        <GroupOf3PowerUpPriority id="powerUpPriority-group-nsmbu-shellAndYoshi">
            <GroupImages id="powerUpPriority-nsmbu-buzzyShell" images={buzzyShell_nsmbuImages}/>
            <GroupImages id="powerUpPriority-nsmbu-spinyShell" images={spinyShell_nsmbuImages}/>
            <GroupImages id="powerUpPriority-nsmbu-yoshi"      images={yoshi_nsmbuImages}/>
        </GroupOf3PowerUpPriority>
    </GroupOf4PowerUpPriority>
}

/** @reactComponent */
function PowerUpPriorityInSm3dw({isDisplayed, games,}: PowerUpPriorityProperties,) {
    if (!games.hasSmm2)
        return null
    if (!isDisplayed)
        return null

    return <GroupOf3PowerUpPriority id="powerUpPriority-group-sm3dw" isRightArrowSeparated isBottomArrowSeparated>
        <GroupImages key="Power-up priority (SM3DW - Super Star)" id="powerUpPriority-sm3dw-superStar" images={superStar_sm3dwImages}/>
        <GroupOf6PowerUpPriority id="powerUpPriority-group-sm3dw-wearableAndCar">
            <GroupImages id="powerUpPriority-car"            images={car_images}/>
            <GroupImages id="powerUpPriority-cannonBox"      images={cannonBox_images}/>
            <GroupImages id="powerUpPriority-propellerBox"   images={propellerBox_images}/>
            <GroupImages id="powerUpPriority-goombaMask"     images={goombaMask_images}/>
            <GroupImages id="powerUpPriority-bulletBillMask" images={bulletBillMask_images}/>
            <GroupImages id="powerUpPriority-redPowBox"      images={redPowBox_images}/>
        </GroupOf6PowerUpPriority>
        <GroupOf5PowerUpPriority id="powerUpPriority-group-sm3dw-powerUp" arrow={SM3DW_ARROW_PROPERTIES}>
            <GroupImages id="powerUpPriority-sm3dw-superMushroom"   images={superMushroom_sm3dwImages}/>
            <GroupImages id="powerUpPriority-sm3dw-fireFlower"      images={fireFlower_sm3dwImages}/>
            <GroupImages id="powerUpPriority-sm3dw-superHammer"     images={superHammer_images}/>
            <GroupImages id="powerUpPriority-sm3dw-superBell"       images={superBell_images}/>
            <GroupImages id="powerUpPriority-sm3dw-boomerangFlower" images={boomerangFlower_images}/>
        </GroupOf5PowerUpPriority>
    </GroupOf3PowerUpPriority>
}

//endregion -------------------- Power-up priority --------------------
