import './EveryPowerUpAndRidePriorityApp.scss';

import type {PowerUpByAllGameStylesPriority, PowerUpBySMM1GameStylesPriority, PowerUpPriority} from './powerUp/priority/PowerUpPriority';
import type {ReactElement}                                                                     from '../util/react/ReactProperty';

import AbstractApp                     from './AbstractApp';
import {AbstractPowerUpPriority}       from './powerUp/priority/AbstractPowerUpPriority';
import {AllGamesPowerUpPriority}       from './powerUp/priority/AllGamesPowerUpPriority';
import Accordion                       from '../bootstrap/accordion/Accordion';
import {Entities}                      from '../core/entity/Entities';
import {GameStyles}                    from '../core/gameStyle/GameStyles';
import GroupOf2PowerUpPriority         from './powerUp/group/GroupOf2PowerUpPriority';
import GroupOf3PowerUpPriority         from './powerUp/group/GroupOf3PowerUpPriority';
import GroupOf4PowerUpPriority         from './powerUp/group/GroupOf4PowerUpPriority';
import GroupOf5PowerUpPriority         from './powerUp/group/GroupOf5PowerUpPriority';
import PowerUpPriorityComponent        from './powerUp/priority/PowerUpPriority.component';
import {SMM1PowerUpPriority}           from './powerUp/priority/SMM1PowerUpPriority';
import {SMM2PowerUpPriority}           from './powerUp/priority/SMM2PowerUpPriority';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {TranslationUtility}            from '../lang/components/TranslationUtility';

//region -------------------- Import from deconstruction --------------------

const {SMB_AND_SMB3, SMW_AND_NSMBU, SMB_SMB3_AND_SMW, SMB_SMB3_SMW_AND_NSMBU, EDITOR_IMAGE_CALLBACK, FIRST_EDITOR_IMAGE_CALLBACK, IN_GAME_IMAGE_CALLBACK, CLEAR_CONDITION_IMAGE_CALLBACK} = AbstractPowerUpPriority;
const {FIRE_FLOWER, BIG_MUSHROOM_MODERN, RED_YOSHI, BUZZY_SHELL, PROPELLER_BOX, RED_POW_BOX, MASTER_SWORD, BIG_MUSHROOM_CLASSIC, CANNON_BOX, SUPER_ACORN, CAR, SUPER_LEAF, SUPER_HAMMER, JUNIOR_CLOWN_CAR, SUPERBALL_FLOWER, FROG_SUIT, FIRE_JUNIOR_CLOWN_CAR, BOOMERANG_FLOWER, SHOE, BIG_MUSHROOM, KOOPA_CLOWN_CAR, KOOPA_TROOPA_CAR, BULLET_BILL_MASK, SPINY_SHELL, SMB2_MUSHROOM, FIRE_KOOPA_CLOWN_CAR, YOSHI, DRY_BONES_SHELL, STILETTO, POWER_BALLOON, LAKITU_CLOUD, MYSTERY_MUSHROOM, GOOMBA_MASK, SUPER_MUSHROOM, CAPE_FEATHER, SUPER_BELL, SUPER_STAR, PROPELLER_MUSHROOM, WEIRD_MUSHROOM} = Entities;
const {SUPER_MARIO_BROS, SUPER_MARIO_BROS_3, SUPER_MARIO_WORLD, NEW_SUPER_MARIO_BROS_U, SUPER_MARIO_3D_WORLD} = GameStyles;

//endregion -------------------- Import from deconstruction --------------------

export default class EveryPowerUpAndRidePriorityApp
    extends AbstractApp {

    //region -------------------- Power-up priority holders --------------------

    static readonly #SUPER_MUSHROOM: PowerUpByAllGameStylesPriority =               new AllGamesPowerUpPriority(SUPER_MUSHROOM,         SMB_SMB3_SMW_AND_NSMBU, EDITOR_IMAGE_CALLBACK,);
    static readonly #MYSTERY_MUSHROOM: PowerUpPriority =                            new SMM1PowerUpPriority(MYSTERY_MUSHROOM,           SUPER_MARIO_BROS,       IN_GAME_IMAGE_CALLBACK,);
    static readonly #WEIRD_MUSHROOM: PowerUpPriority =                              new SMM1PowerUpPriority(WEIRD_MUSHROOM,             SUPER_MARIO_BROS,       IN_GAME_IMAGE_CALLBACK,);
    static readonly #MASTER_SWORD: PowerUpPriority =                                new SMM2PowerUpPriority(MASTER_SWORD,               SUPER_MARIO_BROS,       EDITOR_IMAGE_CALLBACK,);

    static readonly #FIRE_FLOWER: PowerUpByAllGameStylesPriority =                  new AllGamesPowerUpPriority(FIRE_FLOWER,            SMB_SMB3_SMW_AND_NSMBU, FIRST_EDITOR_IMAGE_CALLBACK,);
    static readonly #SUPERBALL_FLOWER: PowerUpPriority =                            new SMM2PowerUpPriority(SUPERBALL_FLOWER,           SUPER_MARIO_BROS,       FIRST_EDITOR_IMAGE_CALLBACK,);

    static readonly #BIG_MUSHROOM: PowerUpPriority =                                new SMM2PowerUpPriority(BIG_MUSHROOM,               SUPER_MARIO_BROS,       FIRST_EDITOR_IMAGE_CALLBACK,);
    static readonly #BIG_MUSHROOM_CLASSIC: PowerUpPriority =                        new SMM1PowerUpPriority(BIG_MUSHROOM_CLASSIC,       SUPER_MARIO_BROS,       IN_GAME_IMAGE_CALLBACK,);
    static readonly #BIG_MUSHROOM_MODERN: PowerUpPriority =                         new SMM1PowerUpPriority(BIG_MUSHROOM_MODERN,        SUPER_MARIO_BROS,       IN_GAME_IMAGE_CALLBACK,);
    static readonly #SMB2_MUSHROOM: PowerUpPriority =                               new SMM2PowerUpPriority(SMB2_MUSHROOM,              SUPER_MARIO_BROS,       FIRST_EDITOR_IMAGE_CALLBACK,);

    static readonly #SUPER_LEAF: PowerUpPriority =                                  new AllGamesPowerUpPriority(SUPER_LEAF,             SUPER_MARIO_BROS_3,     FIRST_EDITOR_IMAGE_CALLBACK,);
    static readonly #FROG_SUIT: PowerUpByAllGameStylesPriority =                    new SMM2PowerUpPriority(FROG_SUIT,                  SUPER_MARIO_BROS_3,     FIRST_EDITOR_IMAGE_CALLBACK,);

    static readonly #CAPE_FEATHER: PowerUpPriority =                                new AllGamesPowerUpPriority(CAPE_FEATHER,           SUPER_MARIO_WORLD,      FIRST_EDITOR_IMAGE_CALLBACK,);
    static readonly #POWER_BALLOON: PowerUpPriority =                               new SMM2PowerUpPriority(POWER_BALLOON,              SUPER_MARIO_WORLD,      FIRST_EDITOR_IMAGE_CALLBACK,);

    static readonly #PROPELLER_MUSHROOM: PowerUpPriority =                          new AllGamesPowerUpPriority(PROPELLER_MUSHROOM,     NEW_SUPER_MARIO_BROS_U, FIRST_EDITOR_IMAGE_CALLBACK,);
    static readonly #SUPER_ACORN: PowerUpPriority =                                 new SMM2PowerUpPriority(SUPER_ACORN,                NEW_SUPER_MARIO_BROS_U, FIRST_EDITOR_IMAGE_CALLBACK,);

    static readonly #SUPER_BELL: PowerUpPriority =                                  new SMM2PowerUpPriority(SUPER_BELL,                 SUPER_MARIO_3D_WORLD,   FIRST_EDITOR_IMAGE_CALLBACK,);
    static readonly #SUPER_HAMMER: PowerUpPriority =                                new SMM2PowerUpPriority(SUPER_HAMMER,               SUPER_MARIO_3D_WORLD,   FIRST_EDITOR_IMAGE_CALLBACK,);
    static readonly #BOOMERANG_FLOWER: PowerUpPriority =                            new SMM2PowerUpPriority(BOOMERANG_FLOWER,           SUPER_MARIO_3D_WORLD,   FIRST_EDITOR_IMAGE_CALLBACK,);

    static readonly #CANNON_BOX: PowerUpPriority =                                  new SMM2PowerUpPriority(CANNON_BOX,                 SUPER_MARIO_3D_WORLD,   EDITOR_IMAGE_CALLBACK,);
    static readonly #PROPELLER_BOX: PowerUpPriority =                               new SMM2PowerUpPriority(PROPELLER_BOX,              SUPER_MARIO_3D_WORLD,   EDITOR_IMAGE_CALLBACK,);
    static readonly #GOOMBA_MASK: PowerUpPriority =                                 new SMM2PowerUpPriority(GOOMBA_MASK,                SUPER_MARIO_3D_WORLD,   EDITOR_IMAGE_CALLBACK,);
    static readonly #BULLET_BILL_MASK: PowerUpPriority =                            new SMM2PowerUpPriority(BULLET_BILL_MASK,           SUPER_MARIO_3D_WORLD,   EDITOR_IMAGE_CALLBACK,);
    static readonly #RED_POW_BOX: PowerUpPriority =                                 new SMM2PowerUpPriority(RED_POW_BOX,                SUPER_MARIO_3D_WORLD,   EDITOR_IMAGE_CALLBACK,);

    static readonly #SUPER_STAR: PowerUpByAllGameStylesPriority =                   new AllGamesPowerUpPriority(SUPER_STAR,             SMB_SMB3_SMW_AND_NSMBU, EDITOR_IMAGE_CALLBACK,);

    static readonly #SHOE: PowerUpByAllGameStylesPriority =                         new AllGamesPowerUpPriority(SHOE,                   SMB_AND_SMB3,           CLEAR_CONDITION_IMAGE_CALLBACK,);
    static readonly #STILETTO: PowerUpByAllGameStylesPriority =                     new AllGamesPowerUpPriority(STILETTO,               SMB_AND_SMB3,           () => [],);//TODO add stiletto images

    static readonly #YOSHI: PowerUpByAllGameStylesPriority =                        new AllGamesPowerUpPriority(YOSHI,                  SMW_AND_NSMBU,          () => [],);//TODO add yoshi image (SMW) & change to yoshi egg image (NSMBU)
    static readonly #RED_YOSHI: PowerUpByAllGameStylesPriority =                    new SMM2PowerUpPriority(RED_YOSHI,                  SMW_AND_NSMBU,          () => [],);//TODO add yoshi image (SMW) & change to yoshi egg image (NSMBU)

    static readonly #BUZZY_SHELL: PowerUpByAllGameStylesPriority =                  new AllGamesPowerUpPriority(BUZZY_SHELL,            SMB_SMB3_SMW_AND_NSMBU, EDITOR_IMAGE_CALLBACK,);
    static readonly #SPINY_SHELL: PowerUpByAllGameStylesPriority =                  new AllGamesPowerUpPriority(SPINY_SHELL,            SMB_SMB3_SMW_AND_NSMBU, EDITOR_IMAGE_CALLBACK,);
    static readonly #DRY_BONES_SHELL: PowerUpByAllGameStylesPriority =              new SMM2PowerUpPriority(DRY_BONES_SHELL,            SMB_SMB3_SMW_AND_NSMBU, EDITOR_IMAGE_CALLBACK,);

    // //TODO change to clown car group
    // static readonly #CLOWN_CAR: PowerUpBySMM1GameStylesPriority =       new AllGamesPowerUpPriority(KOOPA_CLOWN_CAR,        SMB_SMB3_SMW_AND_NSMBU, (_, gameStyle,) =>
    //     gameStyle === NEW_SUPER_MARIO_BROS_U
    //         ? AbstractPowerUpPriority.getEditorImages(JUNIOR_CLOWN_CAR, gameStyle,)
    //         : AbstractPowerUpPriority.getEditorImages(KOOPA_CLOWN_CAR, gameStyle,),);
    static readonly #KOOPA_CLOWN_CAR: PowerUpBySMM1GameStylesPriority =             new AllGamesPowerUpPriority(KOOPA_CLOWN_CAR,        SMB_SMB3_SMW_AND_NSMBU, EDITOR_IMAGE_CALLBACK,);
    static readonly #JUNIOR_CLOWN_CAR: PowerUpBySMM1GameStylesPriority =            new AllGamesPowerUpPriority(JUNIOR_CLOWN_CAR,       SMB_SMB3_SMW_AND_NSMBU, EDITOR_IMAGE_CALLBACK,);
    // //TODO change to fire clown car group
    // static readonly #FIRE_CLOWN_CAR: PowerUpBySMM1GameStylesPriority =  new AllGamesPowerUpPriority(FIRE_KOOPA_CLOWN_CAR,   SMB_SMB3_SMW_AND_NSMBU, (_, gameStyle,) =>
    //     gameStyle === NEW_SUPER_MARIO_BROS_U
    //         ? AbstractPowerUpPriority.getEditorImages(FIRE_JUNIOR_CLOWN_CAR, gameStyle,)
    //         : AbstractPowerUpPriority.getEditorImages(FIRE_KOOPA_CLOWN_CAR, gameStyle,),);
    static readonly #FIRE_KOOPA_CLOWN_CAR: PowerUpBySMM1GameStylesPriority =        new AllGamesPowerUpPriority(FIRE_KOOPA_CLOWN_CAR,   SMB_SMB3_AND_SMW,       EDITOR_IMAGE_CALLBACK,);
    static readonly #FIRE_JUNIOR_CLOWN_CAR: PowerUpBySMM1GameStylesPriority =       new AllGamesPowerUpPriority(FIRE_JUNIOR_CLOWN_CAR,  NEW_SUPER_MARIO_BROS_U, EDITOR_IMAGE_CALLBACK,);

    static readonly #CAR: PowerUpPriority =                                         new SMM2PowerUpPriority(CAR,                        SUPER_MARIO_3D_WORLD,   (_, gameStyle,) =>
        AbstractPowerUpPriority.getEditorImages(KOOPA_TROOPA_CAR, gameStyle,),);
    static readonly #LAKITU_CLOUD: PowerUpBySMM1GameStylesPriority =                new SMM2PowerUpPriority(LAKITU_CLOUD,               SMB_SMB3_SMW_AND_NSMBU, EDITOR_IMAGE_CALLBACK,);

    //endregion -------------------- Power-up priority holders --------------------

    protected override _mainContent(): ReactElement {
        return <>
            <GameContentTranslationComponent>{translation =>
                <h1>{TranslationUtility.replaceAndInterpretTranslation(translation, 'Every power-ups & rides priority', {powerUps: '--power-up--', rides: '--rides--',},)}</h1>
            }</GameContentTranslationComponent>
            <p>--description--{/*TODO add description*/}</p>
            {/*TODO add legend for the colors & styles*/}
            <div key="Power-up priority (container)" id="powerUpPriority-container" className="container-fluid">
                <Accordion alignCenter>
                    {[
                        ['Power-up priority group (SMB)', 'powerUpPriority-accordionGroup-smb', false,
                            {buttonContent: GameStyles.SUPER_MARIO_BROS.renderSingleComponent,},
                            {bodyContent: <GroupOf2PowerUpPriority id="powerUpPriority-group-smb" arrow="UP">
                                    <GroupOf3PowerUpPriority id="powerUpPriority-group-smb-nonPowerUps">
                                        <PowerUpPriorityComponent         key="Power-up priority (SMB - Super Star)"                    id="powerUpPriority-smb-superStar"                          value={EveryPowerUpAndRidePriorityApp.#SUPER_STAR}              images={priority => priority.smbImages}/>
                                        <GroupOf3PowerUpPriority id="powerUpPriority-group-smb-nonPowerUps-mountable">
                                            <PowerUpPriorityComponent     key="Power-up priority (SMB - Lakitu's Cloud)"                id="powerUpPriority-smb-lakituCloud"                        value={EveryPowerUpAndRidePriorityApp.#LAKITU_CLOUD}            images={priority => priority.smbImages}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (SMB - Clown Car)"                     id="powerUpPriority-smb-clownCar"                           value={EveryPowerUpAndRidePriorityApp.#KOOPA_CLOWN_CAR}         images={priority => priority.smbImages}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (SMB - Fire Clown Car)"                id="powerUpPriority-smb-fireClownCar"                       value={EveryPowerUpAndRidePriorityApp.#FIRE_KOOPA_CLOWN_CAR}    images={priority => priority.smbImages}/>
                                        </GroupOf3PowerUpPriority>
                                        <GroupOf2PowerUpPriority id="powerUpPriority-group-smb-shells" arrow="VERTICAL_SEPARATED">
                                            <GroupOf2PowerUpPriority id="powerUpPriority-group-smb-top-shells" arrow="HORIZONTAL_SEPARATED">
                                                <PowerUpPriorityComponent key="Power-up priority (SMB - Buzzy Shell)"                   id="powerUpPriority-smb-buzzyShell"                         value={EveryPowerUpAndRidePriorityApp.#BUZZY_SHELL}             images={priority => priority.smbImages}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMB - Spiny Shell)"                   id="powerUpPriority-smb-spinyShell"                         value={EveryPowerUpAndRidePriorityApp.#SPINY_SHELL}             images={priority => priority.smbImages}/>
                                            </GroupOf2PowerUpPriority>
                                            <GroupOf3PowerUpPriority id="powerUpPriority-group-smb-mountable">
                                                <PowerUpPriorityComponent key="Power-up priority (SMB - Dry Bones Shell)"               id="powerUpPriority-smb-dryBonesShell"                      value={EveryPowerUpAndRidePriorityApp.#DRY_BONES_SHELL}         images={priority => priority.smbImages}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMB - Shoe)"                          id="powerUpPriority-smb-shoe"                               value={EveryPowerUpAndRidePriorityApp.#SHOE}                    images={priority => priority.smbImages}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMB - Stiletto)"                      id="powerUpPriority-smb-stiletto"                           value={EveryPowerUpAndRidePriorityApp.#STILETTO}                images={priority => priority.smbImages} displayName/>
                                            </GroupOf3PowerUpPriority>
                                        </GroupOf2PowerUpPriority>
                                    </GroupOf3PowerUpPriority>
                                    <GroupOf2PowerUpPriority id="powerUpPriority-group-smb-simplePowerUps" arrow="RIGHT">
                                        <GroupOf2PowerUpPriority id="powerUpPriority-group-smb-mushrooms" arrow="DOWN">
                                            <PowerUpPriorityComponent     key="Power-up priority (SMB - Super Mushroom)"                id="powerUpPriority-superMushroom"                          value={EveryPowerUpAndRidePriorityApp.#SUPER_MUSHROOM}          images={priority => priority.smbImages}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Weird Mushroom)"                      id="powerUpPriority-weirdMushroom"                          value={EveryPowerUpAndRidePriorityApp.#WEIRD_MUSHROOM}/>
                                        </GroupOf2PowerUpPriority>
                                        <div id="powerUpPriority-group-smb-others">
                                            <GroupOf4PowerUpPriority id="powerUpPriority-group-smm-smb-others">
                                                <PowerUpPriorityComponent key="Power-up priority (Mystery Mushroom)"                    id="powerUpPriority-mysteryMushroom"                        value={EveryPowerUpAndRidePriorityApp.#MYSTERY_MUSHROOM}/>
                                                <PowerUpPriorityComponent key="Power-up priority (Big Mushroom (classic))"              id="powerUpPriority-bigMushroomClassic"                     value={EveryPowerUpAndRidePriorityApp.#BIG_MUSHROOM_CLASSIC}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMM1 - SMB - Fire Flower)"            id="powerUpPriority-smm2-smb-fireFlower"                    value={EveryPowerUpAndRidePriorityApp.#FIRE_FLOWER}             images={priority => priority.smbImages}/>
                                                <PowerUpPriorityComponent key="Power-up priority (Big Mushroom (modern))"               id="powerUpPriority-bigMushroomModern"                      value={EveryPowerUpAndRidePriorityApp.#BIG_MUSHROOM_MODERN}/>
                                            </GroupOf4PowerUpPriority>
                                            <GroupOf5PowerUpPriority id="powerUpPriority-group-smm2-smb-others">
                                                <PowerUpPriorityComponent key="Power-up priority (Master Sword)"                        id="powerUpPriority-masterSword"                            value={EveryPowerUpAndRidePriorityApp.#MASTER_SWORD}/>
                                                <PowerUpPriorityComponent key="Power-up priority (Big Mushroom)"                        id="powerUpPriority-bigMushroom"                            value={EveryPowerUpAndRidePriorityApp.#BIG_MUSHROOM}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMB2 Mushroom)"                       id="powerUpPriority-smb2Mushroom"                           value={EveryPowerUpAndRidePriorityApp.#SMB2_MUSHROOM}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMM2 - SMB - Fire Flower)"            id="powerUpPriority-smm2-smb-fireFlower"                    value={EveryPowerUpAndRidePriorityApp.#FIRE_FLOWER}             images={priority => priority.smbImages}/>
                                                <PowerUpPriorityComponent key="Power-up priority (Superball Flower)"                    id="powerUpPriority-superballFlower"                        value={EveryPowerUpAndRidePriorityApp.#SUPERBALL_FLOWER}/>
                                            </GroupOf5PowerUpPriority>
                                        </div>
                                    </GroupOf2PowerUpPriority>
                                </GroupOf2PowerUpPriority>},
                        ],
                        ['Power-up priority group (SMB3)', 'powerUpPriority-accordionGroup-smb3', false,
                            {buttonContent: GameStyles.SUPER_MARIO_BROS_3.renderSingleComponent,},
                            {bodyContent: <GroupOf2PowerUpPriority id="powerUpPriority-group-smb3" arrow="UP">
                                    <GroupOf3PowerUpPriority id="powerUpPriority-group-smb3-nonPowerUps">
                                        <PowerUpPriorityComponent         key="Power-up priority (SMB3 - Super Star)"                   id="powerUpPriority-smb3-superStar"                         value={EveryPowerUpAndRidePriorityApp.#SUPER_STAR}              images={priority => priority.smb3Images}/>
                                        <GroupOf3PowerUpPriority id="powerUpPriority-group-smb3-nonPowerUps-mountable">
                                            <PowerUpPriorityComponent     key="Power-up priority (SMB3 - Lakitu's Cloud)"               id="powerUpPriority-smb3-lakituCloud"                       value={EveryPowerUpAndRidePriorityApp.#LAKITU_CLOUD}            images={priority => priority.smb3Images}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (SMB3 - Clown Car)"                    id="powerUpPriority-smb3-clownCar"                          value={EveryPowerUpAndRidePriorityApp.#KOOPA_CLOWN_CAR}         images={priority => priority.smb3Images}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (SMB3 - Fire Clown Car)"               id="powerUpPriority-smb3-fireClownCar"                      value={EveryPowerUpAndRidePriorityApp.#FIRE_KOOPA_CLOWN_CAR}    images={priority => priority.smb3Images}/>
                                        </GroupOf3PowerUpPriority>
                                        <GroupOf2PowerUpPriority id="powerUpPriority-group-smb3-shells" arrow="VERTICAL_SEPARATED">
                                            <GroupOf2PowerUpPriority id="powerUpPriority-group-smb3-top-shells" arrow="HORIZONTAL_SEPARATED">
                                                <PowerUpPriorityComponent key="Power-up priority (SMB3 - Buzzy Shell)"                  id="powerUpPriority-smb3-buzzyShell"                        value={EveryPowerUpAndRidePriorityApp.#BUZZY_SHELL}             images={priority => priority.smb3Images}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMB3 - Spiny Shell)"                  id="powerUpPriority-smb3-spinyShell"                        value={EveryPowerUpAndRidePriorityApp.#SPINY_SHELL}             images={priority => priority.smb3Images}/>
                                            </GroupOf2PowerUpPriority>
                                            <GroupOf3PowerUpPriority id="powerUpPriority-group-smb3-mountable">
                                                <PowerUpPriorityComponent key="Power-up priority (SMB3 - Dry Bones Shell)"              id="powerUpPriority-smb3-dryBonesShell"                     value={EveryPowerUpAndRidePriorityApp.#DRY_BONES_SHELL}         images={priority => priority.smb3Images}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMB3 - Shoe)"                         id="powerUpPriority-smb3-shoe"                              value={EveryPowerUpAndRidePriorityApp.#SHOE}                    images={priority => priority.smb3Images}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMB3 - Stiletto)"                     id="powerUpPriority-smb3-stiletto"                          value={EveryPowerUpAndRidePriorityApp.#STILETTO}                images={priority => priority.smb3Images} displayName/>
                                            </GroupOf3PowerUpPriority>
                                        </GroupOf2PowerUpPriority>
                                    </GroupOf3PowerUpPriority>
                                    <GroupOf2PowerUpPriority id="powerUpPriority-group-smb3-simplePowerUps" arrow="RIGHT">
                                        <PowerUpPriorityComponent         key="Power-up priority (SMB3 - Super Mushroom)"               id="powerUpPriority-smb3-superMushroom"                     value={EveryPowerUpAndRidePriorityApp.#SUPER_MUSHROOM}          images={priority => priority.smb3Images}/>
                                        <GroupOf3PowerUpPriority id="powerUpPriority-group-smb3-2ndTier">
                                            <PowerUpPriorityComponent     key="Power-up priority (SMB3 - Fire Flower)"                  id="powerUpPriority-smb3-fireFlower"                        value={EveryPowerUpAndRidePriorityApp.#FIRE_FLOWER}             images={priority => priority.smb3Images}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Super Leaf)"                          id="powerUpPriority-superLeaf"                              value={EveryPowerUpAndRidePriorityApp.#SUPER_LEAF}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Frog Suit)"                           id="powerUpPriority-frogSuit"                               value={EveryPowerUpAndRidePriorityApp.#FROG_SUIT}/>
                                        </GroupOf3PowerUpPriority>
                                    </GroupOf2PowerUpPriority>
                                </GroupOf2PowerUpPriority>},
                        ],
                        ['Power-up priority group (SMW)', 'powerUpPriority-accordionGroup-smw', false,
                            {buttonContent: GameStyles.SUPER_MARIO_WORLD.renderSingleComponent,},
                            {bodyContent: <GroupOf2PowerUpPriority id="powerUpPriority-group-smw" arrow="UP">
                                    <GroupOf3PowerUpPriority id="powerUpPriority-group-smw-nonPowerUps">
                                        <PowerUpPriorityComponent         key="Power-up priority (SMW - Super Star)"                    id="powerUpPriority-smw-superStar"                          value={EveryPowerUpAndRidePriorityApp.#SUPER_STAR}              images={priority => priority.smwImages}/>
                                        <GroupOf3PowerUpPriority id="powerUpPriority-group-smw-nonPowerUps-mountable">
                                            <PowerUpPriorityComponent     key="Power-up priority (SMW - Lakitu's Cloud)"                id="powerUpPriority-smw-lakituCloud"                        value={EveryPowerUpAndRidePriorityApp.#LAKITU_CLOUD}            images={priority => priority.smwImages}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (SMW - Clown Car)"                     id="powerUpPriority-smw-clownCar"                           value={EveryPowerUpAndRidePriorityApp.#KOOPA_CLOWN_CAR}         images={priority => priority.smwImages}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (SMW - Fire Clown Car)"                id="powerUpPriority-smw-fireClownCar"                       value={EveryPowerUpAndRidePriorityApp.#FIRE_KOOPA_CLOWN_CAR}    images={priority => priority.smwImages}/>
                                        </GroupOf3PowerUpPriority>
                                        <GroupOf2PowerUpPriority id="powerUpPriority-group-smw-shells" arrow="VERTICAL_SEPARATED">
                                            <GroupOf2PowerUpPriority id="powerUpPriority-group-smw-top-shells" arrow="HORIZONTAL_SEPARATED">
                                                <PowerUpPriorityComponent key="Power-up priority (SMW - Buzzy Shell)"                   id="powerUpPriority-smw-buzzyShell"                         value={EveryPowerUpAndRidePriorityApp.#BUZZY_SHELL}             images={priority => priority.smwImages}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMW - Spiny Shell)"                   id="powerUpPriority-smw-spinyShell"                         value={EveryPowerUpAndRidePriorityApp.#SPINY_SHELL}             images={priority => priority.smwImages
                                                }/>
                                            </GroupOf2PowerUpPriority>
                                            <GroupOf3PowerUpPriority id="powerUpPriority-group-smw-mountable">
                                                <PowerUpPriorityComponent key="Power-up priority (SMW - Dry Bones Shell)"               id="powerUpPriority-smw-dryBonesShell"                      value={EveryPowerUpAndRidePriorityApp.#DRY_BONES_SHELL}         images={priority => priority.smwImages}/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMW - Yoshi)"                         id="powerUpPriority-smw-yoshi"                              value={EveryPowerUpAndRidePriorityApp.#YOSHI}                   images={priority => priority.smwImages} displayName/>
                                                <PowerUpPriorityComponent key="Power-up priority (SMW - Red Yoshi)"                     id="powerUpPriority-smw-redYoshi"                           value={EveryPowerUpAndRidePriorityApp.#RED_YOSHI}               images={priority => priority.smwImages} displayName/>
                                            </GroupOf3PowerUpPriority>
                                        </GroupOf2PowerUpPriority>
                                    </GroupOf3PowerUpPriority>
                                    <GroupOf2PowerUpPriority id="powerUpPriority-group-smw-simplePowerUps" arrow="RIGHT">
                                        <PowerUpPriorityComponent         key="Power-up priority (SMW - Super Mushroom)"                id="powerUpPriority-smw-superMushroom"                      value={EveryPowerUpAndRidePriorityApp.#SUPER_MUSHROOM}          images={priority => priority.smwImages}/>
                                        <GroupOf3PowerUpPriority id="powerUpPriority-group-smw-2ndTier">
                                            <PowerUpPriorityComponent     key="Power-up priority (SMW - Fire Flower)"                   id="powerUpPriority-smw-fireFlower"                         value={EveryPowerUpAndRidePriorityApp.#FIRE_FLOWER}             images={priority => priority.smwImages}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Cape Feather)"                        id="powerUpPriority-capeFeather"                            value={EveryPowerUpAndRidePriorityApp.#CAPE_FEATHER}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Power Balloon)"                        id="powerUpPriority-powerBalloon"                          value={EveryPowerUpAndRidePriorityApp.#POWER_BALLOON}/>
                                        </GroupOf3PowerUpPriority>
                                    </GroupOf2PowerUpPriority>
                                </GroupOf2PowerUpPriority>},
                        ],
                        ['Power-up priority group (NSMBU)', 'powerUpPriority-accordionGroup-nsmbu', false,
                            {buttonContent: GameStyles.NEW_SUPER_MARIO_BROS_U.renderSingleComponent},
                            {bodyContent: <GroupOf2PowerUpPriority id="powerUpPriority-group-nsmbu" arrow="UP">
                                    <GroupOf3PowerUpPriority id="powerUpPriority-group-nsmbu-nonPowerUps">
                                        <PowerUpPriorityComponent         key="Power-up priority (NSMBU - Super Star)"                  id="powerUpPriority-nsmbu-superStar"                        value={EveryPowerUpAndRidePriorityApp.#SUPER_STAR}              images={priority => priority.nsmbuImages}/>
                                        <GroupOf3PowerUpPriority id="powerUpPriority-group-nsmbu-nonPowerUps-mountable">
                                            <PowerUpPriorityComponent     key="Power-up priority (NSMBU - Lakitu's Cloud)"              id="powerUpPriority-nsmbu-lakituCloud"                      value={EveryPowerUpAndRidePriorityApp.#LAKITU_CLOUD}            images={priority => priority.nsmbuImages}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (NSMBU - Clown Car)"                   id="powerUpPriority-nsmbu-clownCar"                         value={EveryPowerUpAndRidePriorityApp.#JUNIOR_CLOWN_CAR}        images={priority => priority.nsmbuImages}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (NSMBU - Fire Clown Car)"              id="powerUpPriority-nsmbu-fireClownCar"                     value={EveryPowerUpAndRidePriorityApp.#FIRE_JUNIOR_CLOWN_CAR}   images={priority => priority.nsmbuImages}/>
                                        </GroupOf3PowerUpPriority>
                                        <GroupOf2PowerUpPriority id="powerUpPriority-group-nsmbu-shells" arrow="VERTICAL_SEPARATED">
                                            <GroupOf2PowerUpPriority id="powerUpPriority-group-nsmbu-top-shells" arrow="HORIZONTAL_SEPARATED">
                                                <PowerUpPriorityComponent key="Power-up priority (NSMBU - Buzzy Shell)"                 id="powerUpPriority-nsmbu-buzzyShell"                       value={EveryPowerUpAndRidePriorityApp.#BUZZY_SHELL}             images={priority => priority.nsmbuImages}/>
                                                <PowerUpPriorityComponent key="Power-up priority (NSMBU - Spiny Shell)"                 id="powerUpPriority-nsmbu-spinyShell"                       value={EveryPowerUpAndRidePriorityApp.#SPINY_SHELL}             images={priority => priority.nsmbuImages}/>
                                            </GroupOf2PowerUpPriority>
                                            <GroupOf3PowerUpPriority id="powerUpPriority-group-nsmbu-mountable">
                                                <PowerUpPriorityComponent key="Power-up priority (NSMBU - Dry Bones Shell)"             id="powerUpPriority-nsmbu-dryBonesShell"                    value={EveryPowerUpAndRidePriorityApp.#DRY_BONES_SHELL}         images={priority => priority.nsmbuImages}/>
                                                <PowerUpPriorityComponent key="Power-up priority (NSMBU - Yoshi)"                       id="powerUpPriority-nsmbu-yoshi"                            value={EveryPowerUpAndRidePriorityApp.#YOSHI}                   images={priority => priority.nsmbuImages} displayName/>
                                                <PowerUpPriorityComponent key="Power-up priority (NSMBU - Red Yoshi)"                   id="powerUpPriority-nsmbu-redYoshi"                         value={EveryPowerUpAndRidePriorityApp.#RED_YOSHI}               images={priority => priority.nsmbuImages} displayName/>
                                            </GroupOf3PowerUpPriority>
                                        </GroupOf2PowerUpPriority>
                                    </GroupOf3PowerUpPriority>
                                    <GroupOf2PowerUpPriority id="powerUpPriority-group-nsmbu-simplePowerUps" arrow="RIGHT">
                                        <PowerUpPriorityComponent         key="Power-up priority (NSMBU - Super Mushroom)"              id="powerUpPriority-nsmbu-superMushroom"                    value={EveryPowerUpAndRidePriorityApp.#SUPER_MUSHROOM}          images={priority => priority.nsmbuImages}/>
                                        <GroupOf3PowerUpPriority id="powerUpPriority-group-nsmbu-2ndTier">
                                            <PowerUpPriorityComponent     key="Power-up priority (NSMBU - Fire Flower)"                 id="powerUpPriority-nsmbu-fireFlower"                       value={EveryPowerUpAndRidePriorityApp.#FIRE_FLOWER}             images={priority => priority.nsmbuImages}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Propeller Mushroom)"                  id="powerUpPriority-propellerMushroom"                      value={EveryPowerUpAndRidePriorityApp.#PROPELLER_MUSHROOM}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Super Acorn)"                         id="powerUpPriority-superAcorn"                             value={EveryPowerUpAndRidePriorityApp.#SUPER_ACORN}/>
                                        </GroupOf3PowerUpPriority>
                                    </GroupOf2PowerUpPriority>
                                </GroupOf2PowerUpPriority>},
                        ],
                        ['Power-up priority group (SM3DW)', 'powerUpPriority-accordionGroup-sm3dw', false,
                            {buttonContent: GameStyles.SUPER_MARIO_3D_WORLD.renderSingleComponent,},
                            {bodyContent: <GroupOf2PowerUpPriority id="powerUpPriority-group-sm3dw" arrow="UP">
                                    <GroupOf3PowerUpPriority id="powerUpPriority-group-sm3dw-superStarAndWearable">
                                        <PowerUpPriorityComponent         key="Power-up priority (SM3DW - Super Star)"                  id="powerUpPriority-sm3dw-superStar"                        value={EveryPowerUpAndRidePriorityApp.#SUPER_STAR}              images={priority => priority.sm3dwImages}/>
                                        <PowerUpPriorityComponent         key="Power-up priority (Car)"                                 id="powerUpPriority-car"                                    value={EveryPowerUpAndRidePriorityApp.#CAR}/>
                                        <GroupOf5PowerUpPriority id="powerUpPriority-group-sm3dw-wearable">
                                            <PowerUpPriorityComponent     key="Power-up priority (Cannon Box)"                          id="powerUpPriority-cannonBox"                              value={EveryPowerUpAndRidePriorityApp.#CANNON_BOX}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Propeller Box)"                       id="powerUpPriority-propellerBox"                           value={EveryPowerUpAndRidePriorityApp.#PROPELLER_BOX}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Goomba Mask)"                         id="powerUpPriority-goombaMask"                             value={EveryPowerUpAndRidePriorityApp.#GOOMBA_MASK}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Bullet Bill Mask)"                    id="powerUpPriority-bulletBillMask"                         value={EveryPowerUpAndRidePriorityApp.#BULLET_BILL_MASK}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Red POW Box)"                         id="powerUpPriority-redPowBox"                              value={EveryPowerUpAndRidePriorityApp.#RED_POW_BOX}/>
                                        </GroupOf5PowerUpPriority>
                                    </GroupOf3PowerUpPriority>
                                    <GroupOf2PowerUpPriority id="powerUpPriority-group-sm3dw-simplePowerUps" arrow="RIGHT">
                                        <PowerUpPriorityComponent         key="Power-up priority (SM3DW - Super Mushroom)"              id="powerUpPriority-sm3dw-superMushroom"                    value={EveryPowerUpAndRidePriorityApp.#SUPER_MUSHROOM}          images={priority => priority.sm3dwImages}/>
                                        <GroupOf4PowerUpPriority id="powerUpPriority-group-sm3dw-2ndTier">
                                            <PowerUpPriorityComponent     key="Power-up priority (SM3DW - Fire Flower)"                 id="powerUpPriority-sm3dw-fireFlower"                       value={EveryPowerUpAndRidePriorityApp.#FIRE_FLOWER}             images={priority => priority.sm3dwImages}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Super Hammer)"                        id="powerUpPriority-superHammer"                            value={EveryPowerUpAndRidePriorityApp.#SUPER_HAMMER}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Super Bell)"                          id="powerUpPriority-superBell"                              value={EveryPowerUpAndRidePriorityApp.#SUPER_BELL}/>
                                            <PowerUpPriorityComponent     key="Power-up priority (Boomerang Flower)"                    id="powerUpPriority-boomerangFlower"                        value={EveryPowerUpAndRidePriorityApp.#BOOMERANG_FLOWER}/>
                                        </GroupOf4PowerUpPriority>
                                    </GroupOf2PowerUpPriority>
                                </GroupOf2PowerUpPriority>,},
                        ],
                    ]}
                </Accordion>
            </div>
        </>;
    }

}
