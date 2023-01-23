import './PowerUpAndRidePriorityApp.scss'

import type {PowerUpByAllGameStylesPriority, PowerUpBySMM1GameStylesPriority, PowerUpPriority} from 'app/powerUp/priority/PowerUpPriority'
import type {ReactElement}                                                                     from 'util/react/ReactProperties'

import AbstractApp                      from 'app/AbstractApp'
import {default as GroupOf2}            from 'app/powerUp/group/GroupOf2PowerUpPriority'
import {default as GroupOf3}            from 'app/powerUp/group/GroupOf3PowerUpPriority'
import {default as GroupOf4}            from 'app/powerUp/group/GroupOf4PowerUpPriority'
import {default as GroupOf5}            from 'app/powerUp/group/GroupOf5PowerUpPriority'
import {AbstractPowerUpPriority}        from 'app/powerUp/priority/AbstractPowerUpPriority'
import {AllGamesPowerUpPriority}        from 'app/powerUp/priority/AllGamesPowerUpPriority'
import PowerUpPriorityComponent         from 'app/powerUp/priority/PowerUpPriority.component'
import {SMM1PowerUpPriority}            from 'app/powerUp/priority/SMM1PowerUpPriority'
import {SMM2PowerUpPriority}            from 'app/powerUp/priority/SMM2PowerUpPriority'
import UnfinishedText, {unfinishedText} from 'app/tools/text/UnfinishedText'
import Accordion                        from 'bootstrap/accordion/Accordion'
import {Entities}                       from 'core/entity/Entities'
import {GameStyles}                     from 'core/gameStyle/GameStyles'
import {gameContentTranslation}         from 'lang/components/translationMethods'

//region -------------------- Import from deconstruction --------------------

const {SMB_AND_SMB3, SMW_AND_NSMBU, SMB_SMB3_AND_SMW, SMB_SMB3_SMW_AND_NSMBU, EDITOR_IMAGE_CALLBACK, FIRST_EDITOR_IMAGE_CALLBACK, IN_GAME_IMAGE_CALLBACK, CLEAR_CONDITION_IMAGE_CALLBACK} = AbstractPowerUpPriority
const {FIRE_FLOWER, BIG_MUSHROOM_MODERN, RED_YOSHI, BUZZY_SHELL, PROPELLER_BOX, RED_POW_BOX, MASTER_SWORD, BIG_MUSHROOM_CLASSIC, CANNON_BOX, SUPER_ACORN, CAR, SUPER_LEAF, SUPER_HAMMER, JUNIOR_CLOWN_CAR, SUPERBALL_FLOWER, FROG_SUIT, FIRE_JUNIOR_CLOWN_CAR, BOOMERANG_FLOWER, SHOE, BIG_MUSHROOM, KOOPA_CLOWN_CAR, KOOPA_TROOPA_CAR, BULLET_BILL_MASK, SPINY_SHELL, SMB2_MUSHROOM, FIRE_KOOPA_CLOWN_CAR, YOSHI, DRY_BONES_SHELL, STILETTO, POWER_BALLOON, LAKITU_CLOUD, MYSTERY_MUSHROOM, GOOMBA_MASK, SUPER_MUSHROOM, CAPE_FEATHER, SUPER_BELL, SUPER_STAR, PROPELLER_MUSHROOM, WEIRD_MUSHROOM} = Entities
const {SUPER_MARIO_BROS, SUPER_MARIO_BROS_3, SUPER_MARIO_WORLD, NEW_SUPER_MARIO_BROS_U, SUPER_MARIO_3D_WORLD} = GameStyles

//endregion -------------------- Import from deconstruction --------------------

export default class PowerUpAndRidePriorityApp
    extends AbstractApp {

    //region -------------------- Power-up priority holders --------------------

    static readonly #SUPER_MUSHROOM: PowerUpByAllGameStylesPriority =               new AllGamesPowerUpPriority(SUPER_MUSHROOM,         SMB_SMB3_SMW_AND_NSMBU, EDITOR_IMAGE_CALLBACK,)
    static readonly #MYSTERY_MUSHROOM: PowerUpPriority =                            new SMM1PowerUpPriority(MYSTERY_MUSHROOM,           SUPER_MARIO_BROS,       IN_GAME_IMAGE_CALLBACK,)
    static readonly #WEIRD_MUSHROOM: PowerUpPriority =                              new SMM1PowerUpPriority(WEIRD_MUSHROOM,             SUPER_MARIO_BROS,       IN_GAME_IMAGE_CALLBACK,)
    static readonly #MASTER_SWORD: PowerUpPriority =                                new SMM2PowerUpPriority(MASTER_SWORD,               SUPER_MARIO_BROS,       EDITOR_IMAGE_CALLBACK,)

    static readonly #FIRE_FLOWER: PowerUpByAllGameStylesPriority =                  new AllGamesPowerUpPriority(FIRE_FLOWER,            SMB_SMB3_SMW_AND_NSMBU, FIRST_EDITOR_IMAGE_CALLBACK,)
    static readonly #SUPERBALL_FLOWER: PowerUpPriority =                            new SMM2PowerUpPriority(SUPERBALL_FLOWER,           SUPER_MARIO_BROS,       FIRST_EDITOR_IMAGE_CALLBACK,)

    static readonly #BIG_MUSHROOM: PowerUpPriority =                                new SMM2PowerUpPriority(BIG_MUSHROOM,               SUPER_MARIO_BROS,       FIRST_EDITOR_IMAGE_CALLBACK,)
    static readonly #BIG_MUSHROOM_CLASSIC: PowerUpPriority =                        new SMM1PowerUpPriority(BIG_MUSHROOM_CLASSIC,       SUPER_MARIO_BROS,       IN_GAME_IMAGE_CALLBACK,)
    static readonly #BIG_MUSHROOM_MODERN: PowerUpPriority =                         new SMM1PowerUpPriority(BIG_MUSHROOM_MODERN,        SUPER_MARIO_BROS,       IN_GAME_IMAGE_CALLBACK,)
    static readonly #SMB2_MUSHROOM: PowerUpPriority =                               new SMM2PowerUpPriority(SMB2_MUSHROOM,              SUPER_MARIO_BROS,       FIRST_EDITOR_IMAGE_CALLBACK,)

    static readonly #SUPER_LEAF: PowerUpPriority =                                  new AllGamesPowerUpPriority(SUPER_LEAF,             SUPER_MARIO_BROS_3,     FIRST_EDITOR_IMAGE_CALLBACK,)
    static readonly #FROG_SUIT: PowerUpByAllGameStylesPriority =                    new SMM2PowerUpPriority(FROG_SUIT,                  SUPER_MARIO_BROS_3,     FIRST_EDITOR_IMAGE_CALLBACK,)

    static readonly #CAPE_FEATHER: PowerUpPriority =                                new AllGamesPowerUpPriority(CAPE_FEATHER,           SUPER_MARIO_WORLD,      FIRST_EDITOR_IMAGE_CALLBACK,)
    static readonly #POWER_BALLOON: PowerUpPriority =                               new SMM2PowerUpPriority(POWER_BALLOON,              SUPER_MARIO_WORLD,      FIRST_EDITOR_IMAGE_CALLBACK,)

    static readonly #PROPELLER_MUSHROOM: PowerUpPriority =                          new AllGamesPowerUpPriority(PROPELLER_MUSHROOM,     NEW_SUPER_MARIO_BROS_U, FIRST_EDITOR_IMAGE_CALLBACK,)
    static readonly #SUPER_ACORN: PowerUpPriority =                                 new SMM2PowerUpPriority(SUPER_ACORN,                NEW_SUPER_MARIO_BROS_U, FIRST_EDITOR_IMAGE_CALLBACK,)

    static readonly #SUPER_BELL: PowerUpPriority =                                  new SMM2PowerUpPriority(SUPER_BELL,                 SUPER_MARIO_3D_WORLD,   FIRST_EDITOR_IMAGE_CALLBACK,)
    static readonly #SUPER_HAMMER: PowerUpPriority =                                new SMM2PowerUpPriority(SUPER_HAMMER,               SUPER_MARIO_3D_WORLD,   FIRST_EDITOR_IMAGE_CALLBACK,)
    static readonly #BOOMERANG_FLOWER: PowerUpPriority =                            new SMM2PowerUpPriority(BOOMERANG_FLOWER,           SUPER_MARIO_3D_WORLD,   FIRST_EDITOR_IMAGE_CALLBACK,)

    static readonly #CANNON_BOX: PowerUpPriority =                                  new SMM2PowerUpPriority(CANNON_BOX,                 SUPER_MARIO_3D_WORLD,   EDITOR_IMAGE_CALLBACK,)
    static readonly #PROPELLER_BOX: PowerUpPriority =                               new SMM2PowerUpPriority(PROPELLER_BOX,              SUPER_MARIO_3D_WORLD,   EDITOR_IMAGE_CALLBACK,)
    static readonly #GOOMBA_MASK: PowerUpPriority =                                 new SMM2PowerUpPriority(GOOMBA_MASK,                SUPER_MARIO_3D_WORLD,   EDITOR_IMAGE_CALLBACK,)
    static readonly #BULLET_BILL_MASK: PowerUpPriority =                            new SMM2PowerUpPriority(BULLET_BILL_MASK,           SUPER_MARIO_3D_WORLD,   EDITOR_IMAGE_CALLBACK,)
    static readonly #RED_POW_BOX: PowerUpPriority =                                 new SMM2PowerUpPriority(RED_POW_BOX,                SUPER_MARIO_3D_WORLD,   EDITOR_IMAGE_CALLBACK,)

    static readonly #SUPER_STAR: PowerUpByAllGameStylesPriority =                   new AllGamesPowerUpPriority(SUPER_STAR,             SMB_SMB3_SMW_AND_NSMBU, EDITOR_IMAGE_CALLBACK,)

    static readonly #SHOE: PowerUpByAllGameStylesPriority =                         new AllGamesPowerUpPriority(SHOE,                   SMB_AND_SMB3,           CLEAR_CONDITION_IMAGE_CALLBACK,)
    static readonly #STILETTO: PowerUpByAllGameStylesPriority =                     new AllGamesPowerUpPriority(STILETTO,               SMB_AND_SMB3,           () => [],)//TODO add stiletto images

    static readonly #YOSHI: PowerUpByAllGameStylesPriority =                        new AllGamesPowerUpPriority(YOSHI,                  SMW_AND_NSMBU,          () => [],)//TODO add yoshi image (SMW) & change to yoshi egg image (NSMBU)
    static readonly #RED_YOSHI: PowerUpByAllGameStylesPriority =                    new SMM2PowerUpPriority(RED_YOSHI,                  SMW_AND_NSMBU,          () => [],)//TODO add yoshi image (SMW) & change to yoshi egg image (NSMBU)

    static readonly #BUZZY_SHELL: PowerUpByAllGameStylesPriority =                  new AllGamesPowerUpPriority(BUZZY_SHELL,            SMB_SMB3_SMW_AND_NSMBU, EDITOR_IMAGE_CALLBACK,)
    static readonly #SPINY_SHELL: PowerUpByAllGameStylesPriority =                  new AllGamesPowerUpPriority(SPINY_SHELL,            SMB_SMB3_SMW_AND_NSMBU, EDITOR_IMAGE_CALLBACK,)
    static readonly #DRY_BONES_SHELL: PowerUpByAllGameStylesPriority =              new SMM2PowerUpPriority(DRY_BONES_SHELL,            SMB_SMB3_SMW_AND_NSMBU, EDITOR_IMAGE_CALLBACK,)

    // //TODO change to clown car group
    // static readonly #CLOWN_CAR: PowerUpBySMM1GameStylesPriority =       new AllGamesPowerUpPriority(KOOPA_CLOWN_CAR,        SMB_SMB3_SMW_AND_NSMBU, (_, gameStyle,) =>
    //     gameStyle === NEW_SUPER_MARIO_BROS_U
    //         ? AbstractPowerUpPriority.getEditorImages(JUNIOR_CLOWN_CAR, gameStyle,)
    //         : AbstractPowerUpPriority.getEditorImages(KOOPA_CLOWN_CAR, gameStyle,),)
    static readonly #KOOPA_CLOWN_CAR: PowerUpBySMM1GameStylesPriority =             new AllGamesPowerUpPriority(KOOPA_CLOWN_CAR,        SMB_SMB3_SMW_AND_NSMBU, EDITOR_IMAGE_CALLBACK,)
    static readonly #JUNIOR_CLOWN_CAR: PowerUpBySMM1GameStylesPriority =            new AllGamesPowerUpPriority(JUNIOR_CLOWN_CAR,       SMB_SMB3_SMW_AND_NSMBU, EDITOR_IMAGE_CALLBACK,)
    // //TODO change to fire clown car group
    // static readonly #FIRE_CLOWN_CAR: PowerUpBySMM1GameStylesPriority =  new AllGamesPowerUpPriority(FIRE_KOOPA_CLOWN_CAR,   SMB_SMB3_SMW_AND_NSMBU, (_, gameStyle,) =>
    //     gameStyle === NEW_SUPER_MARIO_BROS_U
    //         ? AbstractPowerUpPriority.getEditorImages(FIRE_JUNIOR_CLOWN_CAR, gameStyle,)
    //         : AbstractPowerUpPriority.getEditorImages(FIRE_KOOPA_CLOWN_CAR, gameStyle,),)
    static readonly #FIRE_KOOPA_CLOWN_CAR: PowerUpBySMM1GameStylesPriority =        new AllGamesPowerUpPriority(FIRE_KOOPA_CLOWN_CAR,   SMB_SMB3_AND_SMW,       EDITOR_IMAGE_CALLBACK,)
    static readonly #FIRE_JUNIOR_CLOWN_CAR: PowerUpBySMM1GameStylesPriority =       new AllGamesPowerUpPriority(FIRE_JUNIOR_CLOWN_CAR,  NEW_SUPER_MARIO_BROS_U, EDITOR_IMAGE_CALLBACK,)

    static readonly #CAR: PowerUpPriority =                                         new SMM2PowerUpPriority(CAR,                        SUPER_MARIO_3D_WORLD,   (_, gameStyle,) =>
        AbstractPowerUpPriority.getEditorImages(KOOPA_TROOPA_CAR, gameStyle,),)
    static readonly #LAKITU_CLOUD: PowerUpBySMM1GameStylesPriority =                new SMM2PowerUpPriority(LAKITU_CLOUD,               SMB_SMB3_SMW_AND_NSMBU, EDITOR_IMAGE_CALLBACK,)

    //endregion -------------------- Power-up priority holders --------------------

    protected override _mainContent(): ReactElement {
        return <>
            <h1>{gameContentTranslation('power-up & ride priority.all.all', {powerUp: unfinishedText('power-up'), powerUps: unfinishedText('power-ups'), ride: unfinishedText('ride'), rides: unfinishedText('rides'),},)}</h1>
            <UnfinishedText type="paragraph" isHidden>description</UnfinishedText>{/*TODO add description*/}
            {/*TODO add legend for the colors & styles*/}
            <div key="Power-up priority (container)" id="powerUpPriority-container" className="container-fluid">
                <Accordion alignCenter>
                    {[
                        ['Power-up priority group (SMB)', 'powerUpPriority-accordionGroup-smb', false,
                            {buttonContent: GameStyles.SUPER_MARIO_BROS.renderSingleComponent,},
                            {bodyContent: <GroupOf2 id="powerUpPriority-group-smb" arrow="UP">
                                    <GroupOf3 id="powerUpPriority-group-smb-nonPowerUps" isRightArrowSeparated>
                                        <PowerUpPriorityComponent         key="Power-up priority (SMB - Super Star)"                    id="powerUpPriority-smb-superStar"                          value={PowerUpAndRidePriorityApp.#SUPER_STAR}              images={priority => priority.smbImages}/>
                                        <GroupOf3 id="powerUpPriority-group-smb-nonPowerUps-mountable">
                                            <PowerUpPriorityComponent     key="Power-up priority (SMB - Lakitu's Cloud)"                id="powerUpPriority-smb-lakituCloud"                        value={PowerUpAndRidePriorityApp.#LAKITU_CLOUD}            images={priority => priority.smbImages}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (SMB - Clown Car)"                     id="powerUpPriority-smb-clownCar"                           value={PowerUpAndRidePriorityApp.#KOOPA_CLOWN_CAR}         images={priority => priority.smbImages}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (SMB - Fire Clown Car)"                id="powerUpPriority-smb-fireClownCar"                       value={PowerUpAndRidePriorityApp.#FIRE_KOOPA_CLOWN_CAR}    images={priority => priority.smbImages}/>
                                        </GroupOf3>
                                        <GroupOf2 id="powerUpPriority-group-smb-shells" arrow="VERTICAL_JOINED">
                                            <GroupOf2 id="powerUpPriority-group-smb-top-shells" arrow="HORIZONTAL_JOINED">
                                                <PowerUpPriorityComponent key="Power-up priority (SMB - Buzzy Shell)"                   id="powerUpPriority-smb-buzzyShell"                         value={PowerUpAndRidePriorityApp.#BUZZY_SHELL}             images={priority => priority.smbImages}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMB - Spiny Shell)"                   id="powerUpPriority-smb-spinyShell"                         value={PowerUpAndRidePriorityApp.#SPINY_SHELL}             images={priority => priority.smbImages}/>
                                            </GroupOf2>
                                            <GroupOf3 id="powerUpPriority-group-smb-mountable">
                                                <PowerUpPriorityComponent key="Power-up priority (SMB - Dry Bones Shell)"               id="powerUpPriority-smb-dryBonesShell"                      value={PowerUpAndRidePriorityApp.#DRY_BONES_SHELL}         images={priority => priority.smbImages}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMB - Shoe)"                          id="powerUpPriority-smb-shoe"                               value={PowerUpAndRidePriorityApp.#SHOE}                    images={priority => priority.smbImages}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMB - Stiletto)"                      id="powerUpPriority-smb-stiletto"                           value={PowerUpAndRidePriorityApp.#STILETTO}                images={priority => priority.smbImages} displayName/>
                                            </GroupOf3>
                                        </GroupOf2>
                                    </GroupOf3>
                                    <GroupOf2 id="powerUpPriority-group-smb-simplePowerUps" arrow="RIGHT">
                                        <GroupOf2 id="powerUpPriority-group-smb-mushrooms" arrow="DOWN">
                                            <PowerUpPriorityComponent     key="Power-up priority (SMB - Super Mushroom)"                id="powerUpPriority-superMushroom"                          value={PowerUpAndRidePriorityApp.#SUPER_MUSHROOM}          images={priority => priority.smbImages}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Weird Mushroom)"                      id="powerUpPriority-weirdMushroom"                          value={PowerUpAndRidePriorityApp.#WEIRD_MUSHROOM}/>
                                        </GroupOf2>
                                        <div id="powerUpPriority-group-smb-others">
                                            <GroupOf4 id="powerUpPriority-group-smm-smb-others">
                                                <PowerUpPriorityComponent key="Power-up priority (Mystery Mushroom)"                    id="powerUpPriority-mysteryMushroom"                        value={PowerUpAndRidePriorityApp.#MYSTERY_MUSHROOM}/>
                                                <PowerUpPriorityComponent key="Power-up priority (Big Mushroom (classic))"              id="powerUpPriority-bigMushroomClassic"                     value={PowerUpAndRidePriorityApp.#BIG_MUSHROOM_CLASSIC}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMM1 - SMB - Fire Flower)"            id="powerUpPriority-smm2-smb-fireFlower"                    value={PowerUpAndRidePriorityApp.#FIRE_FLOWER}             images={priority => priority.smbImages}/>
                                                <PowerUpPriorityComponent key="Power-up priority (Big Mushroom (modern))"               id="powerUpPriority-bigMushroomModern"                      value={PowerUpAndRidePriorityApp.#BIG_MUSHROOM_MODERN}/>
                                            </GroupOf4>
                                            <GroupOf5 id="powerUpPriority-group-smm2-smb-others">
                                                <PowerUpPriorityComponent key="Power-up priority (Master Sword)"                        id="powerUpPriority-masterSword"                            value={PowerUpAndRidePriorityApp.#MASTER_SWORD}/>
                                                <PowerUpPriorityComponent key="Power-up priority (Big Mushroom)"                        id="powerUpPriority-bigMushroom"                            value={PowerUpAndRidePriorityApp.#BIG_MUSHROOM}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMB2 Mushroom)"                       id="powerUpPriority-smb2Mushroom"                           value={PowerUpAndRidePriorityApp.#SMB2_MUSHROOM}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMM2 - SMB - Fire Flower)"            id="powerUpPriority-smm2-smb-fireFlower"                    value={PowerUpAndRidePriorityApp.#FIRE_FLOWER}             images={priority => priority.smbImages}/>
                                                <PowerUpPriorityComponent key="Power-up priority (Superball Flower)"                    id="powerUpPriority-superballFlower"                        value={PowerUpAndRidePriorityApp.#SUPERBALL_FLOWER}/>
                                            </GroupOf5>
                                        </div>
                                    </GroupOf2>
                                </GroupOf2>},
                        ],
                        ['Power-up priority group (SMB3)', 'powerUpPriority-accordionGroup-smb3', false,
                            {buttonContent: GameStyles.SUPER_MARIO_BROS_3.renderSingleComponent,},
                            {bodyContent: <GroupOf2 id="powerUpPriority-group-smb3" arrow="UP">
                                    <GroupOf3 id="powerUpPriority-group-smb3-nonPowerUps" isRightArrowSeparated>
                                        <PowerUpPriorityComponent         key="Power-up priority (SMB3 - Super Star)"                   id="powerUpPriority-smb3-superStar"                         value={PowerUpAndRidePriorityApp.#SUPER_STAR}              images={priority => priority.smb3Images}/>
                                        <GroupOf3 id="powerUpPriority-group-smb3-nonPowerUps-mountable">
                                            <PowerUpPriorityComponent     key="Power-up priority (SMB3 - Lakitu's Cloud)"               id="powerUpPriority-smb3-lakituCloud"                       value={PowerUpAndRidePriorityApp.#LAKITU_CLOUD}            images={priority => priority.smb3Images}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (SMB3 - Clown Car)"                    id="powerUpPriority-smb3-clownCar"                          value={PowerUpAndRidePriorityApp.#KOOPA_CLOWN_CAR}         images={priority => priority.smb3Images}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (SMB3 - Fire Clown Car)"               id="powerUpPriority-smb3-fireClownCar"                      value={PowerUpAndRidePriorityApp.#FIRE_KOOPA_CLOWN_CAR}    images={priority => priority.smb3Images}/>
                                        </GroupOf3>
                                        <GroupOf2 id="powerUpPriority-group-smb3-shells" arrow="VERTICAL_JOINED">
                                            <GroupOf2 id="powerUpPriority-group-smb3-top-shells" arrow="HORIZONTAL_JOINED">
                                                <PowerUpPriorityComponent key="Power-up priority (SMB3 - Buzzy Shell)"                  id="powerUpPriority-smb3-buzzyShell"                        value={PowerUpAndRidePriorityApp.#BUZZY_SHELL}             images={priority => priority.smb3Images}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMB3 - Spiny Shell)"                  id="powerUpPriority-smb3-spinyShell"                        value={PowerUpAndRidePriorityApp.#SPINY_SHELL}             images={priority => priority.smb3Images}/>
                                            </GroupOf2>
                                            <GroupOf3 id="powerUpPriority-group-smb3-mountable">
                                                <PowerUpPriorityComponent key="Power-up priority (SMB3 - Dry Bones Shell)"              id="powerUpPriority-smb3-dryBonesShell"                     value={PowerUpAndRidePriorityApp.#DRY_BONES_SHELL}         images={priority => priority.smb3Images}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMB3 - Shoe)"                         id="powerUpPriority-smb3-shoe"                              value={PowerUpAndRidePriorityApp.#SHOE}                    images={priority => priority.smb3Images}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMB3 - Stiletto)"                     id="powerUpPriority-smb3-stiletto"                          value={PowerUpAndRidePriorityApp.#STILETTO}                images={priority => priority.smb3Images} displayName/>
                                            </GroupOf3>
                                        </GroupOf2>
                                    </GroupOf3>
                                    <GroupOf2 id="powerUpPriority-group-smb3-simplePowerUps" arrow="RIGHT">
                                        <PowerUpPriorityComponent         key="Power-up priority (SMB3 - Super Mushroom)"               id="powerUpPriority-smb3-superMushroom"                     value={PowerUpAndRidePriorityApp.#SUPER_MUSHROOM}          images={priority => priority.smb3Images}/>
                                        <GroupOf3 id="powerUpPriority-group-smb3-2ndTier">
                                            <PowerUpPriorityComponent     key="Power-up priority (SMB3 - Fire Flower)"                  id="powerUpPriority-smb3-fireFlower"                        value={PowerUpAndRidePriorityApp.#FIRE_FLOWER}             images={priority => priority.smb3Images}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Super Leaf)"                          id="powerUpPriority-superLeaf"                              value={PowerUpAndRidePriorityApp.#SUPER_LEAF}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Frog Suit)"                           id="powerUpPriority-frogSuit"                               value={PowerUpAndRidePriorityApp.#FROG_SUIT}/>
                                        </GroupOf3>
                                    </GroupOf2>
                                </GroupOf2>},
                        ],
                        ['Power-up priority group (SMW)', 'powerUpPriority-accordionGroup-smw', false,
                            {buttonContent: GameStyles.SUPER_MARIO_WORLD.renderSingleComponent,},
                            {bodyContent: <GroupOf2 id="powerUpPriority-group-smw" arrow="UP">
                                    <GroupOf3 id="powerUpPriority-group-smw-nonPowerUps" isRightArrowSeparated>
                                        <PowerUpPriorityComponent         key="Power-up priority (SMW - Super Star)"                    id="powerUpPriority-smw-superStar"                          value={PowerUpAndRidePriorityApp.#SUPER_STAR}              images={priority => priority.smwImages}/>
                                        <GroupOf3 id="powerUpPriority-group-smw-nonPowerUps-mountable">
                                            <PowerUpPriorityComponent     key="Power-up priority (SMW - Lakitu's Cloud)"                id="powerUpPriority-smw-lakituCloud"                        value={PowerUpAndRidePriorityApp.#LAKITU_CLOUD}            images={priority => priority.smwImages}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (SMW - Clown Car)"                     id="powerUpPriority-smw-clownCar"                           value={PowerUpAndRidePriorityApp.#KOOPA_CLOWN_CAR}         images={priority => priority.smwImages}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (SMW - Fire Clown Car)"                id="powerUpPriority-smw-fireClownCar"                       value={PowerUpAndRidePriorityApp.#FIRE_KOOPA_CLOWN_CAR}    images={priority => priority.smwImages}/>
                                        </GroupOf3>
                                        <GroupOf2 id="powerUpPriority-group-smw-shells" arrow="VERTICAL_JOINED">
                                            <GroupOf2 id="powerUpPriority-group-smw-top-shells" arrow="HORIZONTAL_JOINED">
                                                <PowerUpPriorityComponent key="Power-up priority (SMW - Buzzy Shell)"                   id="powerUpPriority-smw-buzzyShell"                         value={PowerUpAndRidePriorityApp.#BUZZY_SHELL}             images={priority => priority.smwImages}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMW - Spiny Shell)"                   id="powerUpPriority-smw-spinyShell"                         value={PowerUpAndRidePriorityApp.#SPINY_SHELL}             images={priority => priority.smwImages
                                                }/>
                                            </GroupOf2>
                                            <GroupOf3 id="powerUpPriority-group-smw-mountable">
                                                <PowerUpPriorityComponent key="Power-up priority (SMW - Dry Bones Shell)"               id="powerUpPriority-smw-dryBonesShell"                      value={PowerUpAndRidePriorityApp.#DRY_BONES_SHELL}         images={priority => priority.smwImages}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMW - Yoshi)"                         id="powerUpPriority-smw-yoshi"                              value={PowerUpAndRidePriorityApp.#YOSHI}                   images={priority => priority.smwImages} displayName/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMW - Red Yoshi)"                     id="powerUpPriority-smw-redYoshi"                           value={PowerUpAndRidePriorityApp.#RED_YOSHI}               images={priority => priority.smwImages} displayName/>
                                            </GroupOf3>
                                        </GroupOf2>
                                    </GroupOf3>
                                    <GroupOf2 id="powerUpPriority-group-smw-simplePowerUps" arrow="RIGHT">
                                        <PowerUpPriorityComponent         key="Power-up priority (SMW - Super Mushroom)"                id="powerUpPriority-smw-superMushroom"                      value={PowerUpAndRidePriorityApp.#SUPER_MUSHROOM}          images={priority => priority.smwImages}/>
                                        <GroupOf3 id="powerUpPriority-group-smw-2ndTier">
                                            <PowerUpPriorityComponent     key="Power-up priority (SMW - Fire Flower)"                   id="powerUpPriority-smw-fireFlower"                         value={PowerUpAndRidePriorityApp.#FIRE_FLOWER}             images={priority => priority.smwImages}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Cape Feather)"                        id="powerUpPriority-capeFeather"                            value={PowerUpAndRidePriorityApp.#CAPE_FEATHER}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Power Balloon)"                        id="powerUpPriority-powerBalloon"                          value={PowerUpAndRidePriorityApp.#POWER_BALLOON}/>
                                        </GroupOf3>
                                    </GroupOf2>
                                </GroupOf2>},
                        ],
                        ['Power-up priority group (NSMBU)', 'powerUpPriority-accordionGroup-nsmbu', false,
                            {buttonContent: GameStyles.NEW_SUPER_MARIO_BROS_U.renderSingleComponent},
                            {bodyContent: <GroupOf2 id="powerUpPriority-group-nsmbu" arrow="UP">
                                    <GroupOf3 id="powerUpPriority-group-nsmbu-nonPowerUps" isRightArrowSeparated>
                                        <PowerUpPriorityComponent         key="Power-up priority (NSMBU - Super Star)"                  id="powerUpPriority-nsmbu-superStar"                        value={PowerUpAndRidePriorityApp.#SUPER_STAR}              images={priority => priority.nsmbuImages}/>
                                        <GroupOf3 id="powerUpPriority-group-nsmbu-nonPowerUps-mountable">
                                            <PowerUpPriorityComponent     key="Power-up priority (NSMBU - Lakitu's Cloud)"              id="powerUpPriority-nsmbu-lakituCloud"                      value={PowerUpAndRidePriorityApp.#LAKITU_CLOUD}            images={priority => priority.nsmbuImages}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (NSMBU - Clown Car)"                   id="powerUpPriority-nsmbu-clownCar"                         value={PowerUpAndRidePriorityApp.#JUNIOR_CLOWN_CAR}        images={priority => priority.nsmbuImages}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (NSMBU - Fire Clown Car)"              id="powerUpPriority-nsmbu-fireClownCar"                     value={PowerUpAndRidePriorityApp.#FIRE_JUNIOR_CLOWN_CAR}   images={priority => priority.nsmbuImages}/>
                                        </GroupOf3>
                                        <GroupOf2 id="powerUpPriority-group-nsmbu-shells" arrow="VERTICAL_JOINED">
                                            <GroupOf2 id="powerUpPriority-group-nsmbu-top-shells" arrow="HORIZONTAL_JOINED">
                                                <PowerUpPriorityComponent key="Power-up priority (NSMBU - Buzzy Shell)"                 id="powerUpPriority-nsmbu-buzzyShell"                       value={PowerUpAndRidePriorityApp.#BUZZY_SHELL}             images={priority => priority.nsmbuImages}/>
                                                <PowerUpPriorityComponent key="Power-up priority (NSMBU - Spiny Shell)"                 id="powerUpPriority-nsmbu-spinyShell"                       value={PowerUpAndRidePriorityApp.#SPINY_SHELL}             images={priority => priority.nsmbuImages}/>
                                            </GroupOf2>
                                            <GroupOf3 id="powerUpPriority-group-nsmbu-mountable">
                                                <PowerUpPriorityComponent key="Power-up priority (NSMBU - Dry Bones Shell)"             id="powerUpPriority-nsmbu-dryBonesShell"                    value={PowerUpAndRidePriorityApp.#DRY_BONES_SHELL}         images={priority => priority.nsmbuImages}/>
                                                <PowerUpPriorityComponent key="Power-up priority (NSMBU - Yoshi)"                       id="powerUpPriority-nsmbu-yoshi"                            value={PowerUpAndRidePriorityApp.#YOSHI}                   images={priority => priority.nsmbuImages} displayName/>
                                                <PowerUpPriorityComponent key="Power-up priority (NSMBU - Red Yoshi)"                   id="powerUpPriority-nsmbu-redYoshi"                         value={PowerUpAndRidePriorityApp.#RED_YOSHI}               images={priority => priority.nsmbuImages} displayName/>
                                            </GroupOf3>
                                        </GroupOf2>
                                    </GroupOf3>
                                    <GroupOf2 id="powerUpPriority-group-nsmbu-simplePowerUps" arrow="RIGHT">
                                        <PowerUpPriorityComponent         key="Power-up priority (NSMBU - Super Mushroom)"              id="powerUpPriority-nsmbu-superMushroom"                    value={PowerUpAndRidePriorityApp.#SUPER_MUSHROOM}          images={priority => priority.nsmbuImages}/>
                                        <GroupOf3 id="powerUpPriority-group-nsmbu-2ndTier">
                                            <PowerUpPriorityComponent     key="Power-up priority (NSMBU - Fire Flower)"                 id="powerUpPriority-nsmbu-fireFlower"                       value={PowerUpAndRidePriorityApp.#FIRE_FLOWER}             images={priority => priority.nsmbuImages}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Propeller Mushroom)"                  id="powerUpPriority-propellerMushroom"                      value={PowerUpAndRidePriorityApp.#PROPELLER_MUSHROOM}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Super Acorn)"                         id="powerUpPriority-superAcorn"                             value={PowerUpAndRidePriorityApp.#SUPER_ACORN}/>
                                        </GroupOf3>
                                    </GroupOf2>
                                </GroupOf2>},
                        ],
                        ['Power-up priority group (SM3DW)', 'powerUpPriority-accordionGroup-sm3dw', false,
                            {buttonContent: GameStyles.SUPER_MARIO_3D_WORLD.renderSingleComponent,},
                            {bodyContent: <GroupOf2 id="powerUpPriority-group-sm3dw" arrow="UP">
                                    <GroupOf3 id="powerUpPriority-group-sm3dw-superStarAndWearable">
                                        <PowerUpPriorityComponent         key="Power-up priority (SM3DW - Super Star)"                  id="powerUpPriority-sm3dw-superStar"                        value={PowerUpAndRidePriorityApp.#SUPER_STAR}              images={priority => priority.sm3dwImages}/>
                                        <PowerUpPriorityComponent         key="Power-up priority (Car)"                                 id="powerUpPriority-car"                                    value={PowerUpAndRidePriorityApp.#CAR}/>
                                        <GroupOf5 id="powerUpPriority-group-sm3dw-wearable">
                                            <PowerUpPriorityComponent     key="Power-up priority (Cannon Box)"                          id="powerUpPriority-cannonBox"                              value={PowerUpAndRidePriorityApp.#CANNON_BOX}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Propeller Box)"                       id="powerUpPriority-propellerBox"                           value={PowerUpAndRidePriorityApp.#PROPELLER_BOX}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Goomba Mask)"                         id="powerUpPriority-goombaMask"                             value={PowerUpAndRidePriorityApp.#GOOMBA_MASK}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Bullet Bill Mask)"                    id="powerUpPriority-bulletBillMask"                         value={PowerUpAndRidePriorityApp.#BULLET_BILL_MASK}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Red POW Box)"                         id="powerUpPriority-redPowBox"                              value={PowerUpAndRidePriorityApp.#RED_POW_BOX}/>
                                        </GroupOf5>
                                    </GroupOf3>
                                    <GroupOf2 id="powerUpPriority-group-sm3dw-simplePowerUps" arrow="RIGHT">
                                        <PowerUpPriorityComponent         key="Power-up priority (SM3DW - Super Mushroom)"              id="powerUpPriority-sm3dw-superMushroom"                    value={PowerUpAndRidePriorityApp.#SUPER_MUSHROOM}          images={priority => priority.sm3dwImages}/>
                                        <GroupOf4 id="powerUpPriority-group-sm3dw-2ndTier">
                                            <PowerUpPriorityComponent     key="Power-up priority (SM3DW - Fire Flower)"                 id="powerUpPriority-sm3dw-fireFlower"                       value={PowerUpAndRidePriorityApp.#FIRE_FLOWER}             images={priority => priority.sm3dwImages}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Super Hammer)"                        id="powerUpPriority-superHammer"                            value={PowerUpAndRidePriorityApp.#SUPER_HAMMER}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Super Bell)"                          id="powerUpPriority-superBell"                              value={PowerUpAndRidePriorityApp.#SUPER_BELL}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Boomerang Flower)"                    id="powerUpPriority-boomerangFlower"                        value={PowerUpAndRidePriorityApp.#BOOMERANG_FLOWER}/>
                                        </GroupOf4>
                                    </GroupOf2>
                                </GroupOf2>,},
                        ],
                    ]}
                </Accordion>
            </div>
        </>
    }

}
