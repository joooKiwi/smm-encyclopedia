import 'app/PowerUpRideAndHatPriorityApp.scss'

import type {Nullable, NullOr} from '@joookiwi/type'
import {Component}             from 'react'

import type {PowerUpAndRidePriorityProperties}                                                                                                                                         from 'app/AppProperties.types'
import type {NSMBUPowerUpPriority, PowerUpByAllGameStylesPriority, PowerUpBySMM1GameStylesPriority, SM3DWPowerUpPriority, SMB3PowerUpPriority, SMBPowerUpPriority, SMWPowerUpPriority} from 'app/powerUp/priority/PowerUpPriority'
import type {NSMBUPowerUpPriorities, SM3DWPowerUpPriorities, SMB3PowerUpPriorities, SMBPowerUpPriorities, SMWPowerUpPriorities}                                                        from 'app/powerUp/priority/predefined/types'
import type {PowerUpPriorityTypes}                                                                                                                                                     from 'app/property/PowerUpPriorityTypes'
import type {ClassWithType}                                                                                                                                                            from 'core/ClassWithType'
import type {ReactComponent}                                                                                                                                                           from 'util/react/ReactComponent'

import {ImageCallbacks}                             from 'app/powerUp/priority/ImageCallbacks'
import {AllGamesPowerUpPriority}                    from 'app/powerUp/priority/AllGamesPowerUpPriority'
import {SMM1PowerUpPriority}                        from 'app/powerUp/priority/SMM1PowerUpPriority'
import {SMM2PowerUpPriority}                        from 'app/powerUp/priority/SMM2PowerUpPriority'
import PowerUpPriorityInNSMBU                       from 'app/powerUp/priority/predefined/PowerUpPriorityInNSMBU'
import PowerUpPriorityInSM3DW                       from 'app/powerUp/priority/predefined/PowerUpPriorityInSM3DW'
import PowerUpPriorityInSMB                         from 'app/powerUp/priority/predefined/PowerUpPriorityInSMB'
import PowerUpPriorityInSMB3                        from 'app/powerUp/priority/predefined/PowerUpPriorityInSMB3'
import PowerUpPriorityInSMW                         from 'app/powerUp/priority/predefined/PowerUpPriorityInSMW'
import Arrow                                        from 'app/tools/arrow/Arrow'
import {Arrows}                                     from 'app/tools/arrow/Arrows'
import LinkButton                                   from 'app/tools/button/LinkButton'
import UnfinishedText, {unfinishedText}             from 'app/tools/text/UnfinishedText'
import {Entities}                                   from 'core/entity/Entities'
import {GameStyles}                                 from 'core/gameStyle/GameStyles'
import GameStyleImage                               from 'core/gameStyle/component/GameStyleImage'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'

import NOT_SM3DW =                                                 GameStyles.NOT_SM3DW
import NSMBU =                                                     GameStyles.NSMBU
import SMB =                                                       GameStyles.SMB
import SMB_AND_SMB3 =                                              GameStyles.SMB_AND_SMB3
import SMB_AND_SMB3_AND_SMW =                                      GameStyles.SMB_AND_SMB3_AND_SMW
import SMB3 =                                                      GameStyles.SMB3
import SMW =                                                       GameStyles.SMW
import SMW_AND_NSMBU =                                             GameStyles.SMW_AND_NSMBU
import SM3DW =                                                     GameStyles.SM3DW
import EDITOR_IMAGE_CALLBACK =                                     ImageCallbacks.EDITOR_IMAGE_CALLBACK
import FIRST_EDITOR_IMAGE_CALLBACK =                               ImageCallbacks.FIRST_EDITOR_IMAGE_CALLBACK
import FIRST_EDITOR_IN_NSMBU_AND_IN_GAME_IN_OTHER_IMAGE_CALLBACK = ImageCallbacks.FIRST_EDITOR_IN_NSMBU_AND_IN_GAME_IN_OTHER_IMAGE_CALLBACK
import FIRST_IN_GAME_IMAGE_CALLBACK =                              ImageCallbacks.FIRST_IN_GAME_IMAGE_CALLBACK
import IN_GAME_IMAGE_CALLBACK =                                    ImageCallbacks.IN_GAME_IMAGE_CALLBACK

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
    YOSHI, YOSHI_EGG, RED_YOSHI, RED_YOSHI_EGG,
    KOOPA_CLOWN_CAR, JUNIOR_CLOWN_CAR, FIRE_KOOPA_CLOWN_CAR, FIRE_JUNIOR_CLOWN_CAR,
    KOOPA_TROOPA_CAR, CAR,
    BUZZY_SHELL, SPINY_SHELL, DRY_BONES_SHELL,
    LAKITU_CLOUD,
} = Entities
const {POWER_UP,} = OtherWordInTheGames

//endregion -------------------- Import from deconstruction --------------------

/**
 * @reactComponent
 * @todo Replace the state with a property
 * @todo Replace to a functional-based component
 */
export default class PowerUpRideAndHatPriorityApp
    extends Component<PowerUpAndRidePriorityProperties, { gameStyle: NullOr<GameStyles>, }>
    implements ReactComponent, ClassWithType<PowerUpPriorityTypes> {

    //region -------------------- Power-up priority holders --------------------

    static readonly #SUPER_MUSHROOM: PowerUpByAllGameStylesPriority = new AllGamesPowerUpPriority(SUPER_MUSHROOM, NOT_SM3DW, EDITOR_IMAGE_CALLBACK,)
    static readonly #MYSTERY_MUSHROOM: SMBPowerUpPriority = new SMM1PowerUpPriority(MYSTERY_MUSHROOM, SMB, IN_GAME_IMAGE_CALLBACK,)
    static readonly #WEIRD_MUSHROOM: SMBPowerUpPriority = new SMM1PowerUpPriority(WEIRD_MUSHROOM, SMB, IN_GAME_IMAGE_CALLBACK,)
    static readonly #MASTER_SWORD: SMBPowerUpPriority = new SMM2PowerUpPriority(MASTER_SWORD, SMB, EDITOR_IMAGE_CALLBACK,)

    static readonly #FIRE_FLOWER: PowerUpByAllGameStylesPriority = new AllGamesPowerUpPriority(FIRE_FLOWER, NOT_SM3DW, FIRST_EDITOR_IMAGE_CALLBACK,)
    static readonly #SUPERBALL_FLOWER: SMBPowerUpPriority = new SMM2PowerUpPriority(SUPERBALL_FLOWER, SMB, FIRST_EDITOR_IMAGE_CALLBACK,)

    static readonly #BIG_MUSHROOM: SMBPowerUpPriority = new SMM2PowerUpPriority(BIG_MUSHROOM, SMB, FIRST_EDITOR_IMAGE_CALLBACK,)
    static readonly #BIG_MUSHROOM_CLASSIC: SMBPowerUpPriority = new SMM1PowerUpPriority(BIG_MUSHROOM_CLASSIC, SMB, IN_GAME_IMAGE_CALLBACK,)
    static readonly #BIG_MUSHROOM_MODERN: SMBPowerUpPriority = new SMM1PowerUpPriority(BIG_MUSHROOM_MODERN, SMB, IN_GAME_IMAGE_CALLBACK,)
    static readonly #SMB2_MUSHROOM: SMBPowerUpPriority = new SMM2PowerUpPriority(SMB2_MUSHROOM, SMB, FIRST_EDITOR_IMAGE_CALLBACK,)

    static readonly #SUPER_LEAF: SMB3PowerUpPriority = new AllGamesPowerUpPriority(SUPER_LEAF, SMB3, FIRST_EDITOR_IMAGE_CALLBACK,)
    static readonly #FROG_SUIT: SMB3PowerUpPriority = new SMM2PowerUpPriority(FROG_SUIT, SMB3, FIRST_EDITOR_IMAGE_CALLBACK,)

    static readonly #CAPE_FEATHER: SMWPowerUpPriority = new AllGamesPowerUpPriority(CAPE_FEATHER, SMW, FIRST_EDITOR_IMAGE_CALLBACK,)
    static readonly #POWER_BALLOON: SMWPowerUpPriority = new SMM2PowerUpPriority(POWER_BALLOON, SMW, FIRST_EDITOR_IMAGE_CALLBACK,)

    static readonly #PROPELLER_MUSHROOM: NSMBUPowerUpPriority = new AllGamesPowerUpPriority(PROPELLER_MUSHROOM, NSMBU, FIRST_EDITOR_IMAGE_CALLBACK,)
    static readonly #SUPER_ACORN: NSMBUPowerUpPriority = new SMM2PowerUpPriority(SUPER_ACORN, NSMBU, FIRST_EDITOR_IMAGE_CALLBACK,)

    static readonly #SUPER_BELL: SM3DWPowerUpPriority = new SMM2PowerUpPriority(SUPER_BELL, SM3DW, FIRST_EDITOR_IMAGE_CALLBACK,)
    static readonly #SUPER_HAMMER: SM3DWPowerUpPriority = new SMM2PowerUpPriority(SUPER_HAMMER, SM3DW, FIRST_EDITOR_IMAGE_CALLBACK,)
    static readonly #BOOMERANG_FLOWER: SM3DWPowerUpPriority = new SMM2PowerUpPriority(BOOMERANG_FLOWER, SM3DW, FIRST_EDITOR_IMAGE_CALLBACK,)

    static readonly #CANNON_BOX: SM3DWPowerUpPriority = new SMM2PowerUpPriority(CANNON_BOX, SM3DW, EDITOR_IMAGE_CALLBACK,)
    static readonly #PROPELLER_BOX: SM3DWPowerUpPriority = new SMM2PowerUpPriority(PROPELLER_BOX, SM3DW, EDITOR_IMAGE_CALLBACK,)
    static readonly #GOOMBA_MASK: SM3DWPowerUpPriority = new SMM2PowerUpPriority(GOOMBA_MASK, SM3DW, EDITOR_IMAGE_CALLBACK,)
    static readonly #BULLET_BILL_MASK: SM3DWPowerUpPriority = new SMM2PowerUpPriority(BULLET_BILL_MASK, SM3DW, EDITOR_IMAGE_CALLBACK,)
    static readonly #RED_POW_BOX: SM3DWPowerUpPriority = new SMM2PowerUpPriority(RED_POW_BOX, SM3DW, EDITOR_IMAGE_CALLBACK,)

    static readonly #SUPER_STAR: PowerUpByAllGameStylesPriority = new AllGamesPowerUpPriority(SUPER_STAR, NOT_SM3DW, EDITOR_IMAGE_CALLBACK,)

    static readonly #SHOE: PowerUpByAllGameStylesPriority = new AllGamesPowerUpPriority(SHOE, SMB_AND_SMB3, FIRST_IN_GAME_IMAGE_CALLBACK,)
    static readonly #STILETTO: PowerUpByAllGameStylesPriority = new AllGamesPowerUpPriority(STILETTO, SMB_AND_SMB3, FIRST_IN_GAME_IMAGE_CALLBACK,)

    static readonly #YOSHI: PowerUpByAllGameStylesPriority = new AllGamesPowerUpPriority(YOSHI, SMW_AND_NSMBU, (_, gameStyle,) => FIRST_EDITOR_IN_NSMBU_AND_IN_GAME_IN_OTHER_IMAGE_CALLBACK(YOSHI_EGG, gameStyle,),)
    static readonly #RED_YOSHI: PowerUpByAllGameStylesPriority = new SMM2PowerUpPriority(RED_YOSHI, SMW_AND_NSMBU, (_, gameStyle,) => FIRST_EDITOR_IN_NSMBU_AND_IN_GAME_IN_OTHER_IMAGE_CALLBACK(RED_YOSHI_EGG, gameStyle,),)

    static readonly #BUZZY_SHELL: PowerUpByAllGameStylesPriority = new AllGamesPowerUpPriority(BUZZY_SHELL, NOT_SM3DW, EDITOR_IMAGE_CALLBACK,)
    static readonly #SPINY_SHELL: PowerUpByAllGameStylesPriority = new AllGamesPowerUpPriority(SPINY_SHELL, NOT_SM3DW, EDITOR_IMAGE_CALLBACK,)
    static readonly #DRY_BONES_SHELL: PowerUpByAllGameStylesPriority = new SMM2PowerUpPriority(DRY_BONES_SHELL, NOT_SM3DW, EDITOR_IMAGE_CALLBACK,)

    // //TODO change to clown car group
    // static readonly #CLOWN_CAR: PowerUpBySMM1GameStylesPriority =       new AllGamesPowerUpPriority(KOOPA_CLOWN_CAR,        NOT_SM3DW, (_, gameStyle,) =>
    //     gameStyle === NSMBU
    //         ? AbstractPowerUpPriority.getEditorImages(JUNIOR_CLOWN_CAR, gameStyle,)
    //         : AbstractPowerUpPriority.getEditorImages(KOOPA_CLOWN_CAR, gameStyle,),)
    static readonly #KOOPA_CLOWN_CAR: PowerUpBySMM1GameStylesPriority = new AllGamesPowerUpPriority(KOOPA_CLOWN_CAR, NOT_SM3DW, EDITOR_IMAGE_CALLBACK,)
    static readonly #JUNIOR_CLOWN_CAR: NSMBUPowerUpPriority = new AllGamesPowerUpPriority(JUNIOR_CLOWN_CAR, NOT_SM3DW, EDITOR_IMAGE_CALLBACK,)
    // //TODO change to fire clown car group
    // static readonly #FIRE_CLOWN_CAR: PowerUpBySMM1GameStylesPriority =  new AllGamesPowerUpPriority(FIRE_KOOPA_CLOWN_CAR,   NOT_SM3DW, (_, gameStyle,) =>
    //     gameStyle === NSMBU
    //         ? AbstractPowerUpPriority.getEditorImages(FIRE_JUNIOR_CLOWN_CAR, gameStyle,)
    //         : AbstractPowerUpPriority.getEditorImages(FIRE_KOOPA_CLOWN_CAR, gameStyle,),)
    static readonly #FIRE_KOOPA_CLOWN_CAR: PowerUpBySMM1GameStylesPriority = new AllGamesPowerUpPriority(FIRE_KOOPA_CLOWN_CAR, SMB_AND_SMB3_AND_SMW, EDITOR_IMAGE_CALLBACK,)
    static readonly #FIRE_JUNIOR_CLOWN_CAR: NSMBUPowerUpPriority = new AllGamesPowerUpPriority(FIRE_JUNIOR_CLOWN_CAR, NSMBU, EDITOR_IMAGE_CALLBACK,)

    static readonly #CAR: SM3DWPowerUpPriority = new SMM2PowerUpPriority(CAR, SM3DW, (_, gameStyle,) => EDITOR_IMAGE_CALLBACK(KOOPA_TROOPA_CAR, gameStyle,),)
    static readonly #LAKITU_CLOUD: PowerUpBySMM1GameStylesPriority = new SMM2PowerUpPriority(LAKITU_CLOUD, NOT_SM3DW, EDITOR_IMAGE_CALLBACK,)


    static readonly #SMB_POWER_UPS: SMBPowerUpPriorities = [
        PowerUpRideAndHatPriorityApp.#SUPER_STAR,
        PowerUpRideAndHatPriorityApp.#LAKITU_CLOUD, PowerUpRideAndHatPriorityApp.#KOOPA_CLOWN_CAR, PowerUpRideAndHatPriorityApp.#FIRE_KOOPA_CLOWN_CAR,
        PowerUpRideAndHatPriorityApp.#BUZZY_SHELL, PowerUpRideAndHatPriorityApp.#SPINY_SHELL,
        PowerUpRideAndHatPriorityApp.#DRY_BONES_SHELL, PowerUpRideAndHatPriorityApp.#SHOE, PowerUpRideAndHatPriorityApp.#STILETTO,

        PowerUpRideAndHatPriorityApp.#SUPER_MUSHROOM, PowerUpRideAndHatPriorityApp.#WEIRD_MUSHROOM,
        PowerUpRideAndHatPriorityApp.#FIRE_FLOWER,
        PowerUpRideAndHatPriorityApp.#MYSTERY_MUSHROOM, PowerUpRideAndHatPriorityApp.#BIG_MUSHROOM_CLASSIC, PowerUpRideAndHatPriorityApp.#BIG_MUSHROOM_MODERN,
        PowerUpRideAndHatPriorityApp.#MASTER_SWORD, PowerUpRideAndHatPriorityApp.#BIG_MUSHROOM, PowerUpRideAndHatPriorityApp.#SMB2_MUSHROOM, PowerUpRideAndHatPriorityApp.#SUPERBALL_FLOWER,
    ]
    static readonly #SMB3_POWER_UPS: SMB3PowerUpPriorities = [
        PowerUpRideAndHatPriorityApp.#SUPER_STAR,
        PowerUpRideAndHatPriorityApp.#LAKITU_CLOUD, PowerUpRideAndHatPriorityApp.#KOOPA_CLOWN_CAR, PowerUpRideAndHatPriorityApp.#FIRE_KOOPA_CLOWN_CAR,
        PowerUpRideAndHatPriorityApp.#BUZZY_SHELL, PowerUpRideAndHatPriorityApp.#SPINY_SHELL,
        PowerUpRideAndHatPriorityApp.#DRY_BONES_SHELL, PowerUpRideAndHatPriorityApp.#SHOE, PowerUpRideAndHatPriorityApp.#STILETTO,

        PowerUpRideAndHatPriorityApp.#SUPER_MUSHROOM, PowerUpRideAndHatPriorityApp.#FIRE_FLOWER,
        PowerUpRideAndHatPriorityApp.#SUPER_LEAF, PowerUpRideAndHatPriorityApp.#FROG_SUIT,
    ]
    static readonly #SMW_POWER_UPS: SMWPowerUpPriorities = [
        PowerUpRideAndHatPriorityApp.#SUPER_STAR,
        PowerUpRideAndHatPriorityApp.#LAKITU_CLOUD, PowerUpRideAndHatPriorityApp.#KOOPA_CLOWN_CAR, PowerUpRideAndHatPriorityApp.#FIRE_KOOPA_CLOWN_CAR,
        PowerUpRideAndHatPriorityApp.#BUZZY_SHELL, PowerUpRideAndHatPriorityApp.#SPINY_SHELL,
        PowerUpRideAndHatPriorityApp.#DRY_BONES_SHELL, PowerUpRideAndHatPriorityApp.#YOSHI, PowerUpRideAndHatPriorityApp.#RED_YOSHI,

        PowerUpRideAndHatPriorityApp.#SUPER_MUSHROOM, PowerUpRideAndHatPriorityApp.#FIRE_FLOWER,
        PowerUpRideAndHatPriorityApp.#CAPE_FEATHER, PowerUpRideAndHatPriorityApp.#POWER_BALLOON,
    ]
    static readonly #NSMBU_POWER_UPS: NSMBUPowerUpPriorities = [
        PowerUpRideAndHatPriorityApp.#SUPER_STAR,
        PowerUpRideAndHatPriorityApp.#LAKITU_CLOUD, PowerUpRideAndHatPriorityApp.#JUNIOR_CLOWN_CAR, PowerUpRideAndHatPriorityApp.#FIRE_JUNIOR_CLOWN_CAR,
        PowerUpRideAndHatPriorityApp.#BUZZY_SHELL, PowerUpRideAndHatPriorityApp.#SPINY_SHELL,
        PowerUpRideAndHatPriorityApp.#DRY_BONES_SHELL, PowerUpRideAndHatPriorityApp.#YOSHI, PowerUpRideAndHatPriorityApp.#RED_YOSHI,

        PowerUpRideAndHatPriorityApp.#SUPER_MUSHROOM, PowerUpRideAndHatPriorityApp.#FIRE_FLOWER,
        PowerUpRideAndHatPriorityApp.#PROPELLER_MUSHROOM, PowerUpRideAndHatPriorityApp.#SUPER_ACORN,
    ]
    static readonly #SM3DW_POWER_UPS: SM3DWPowerUpPriorities = [
        PowerUpRideAndHatPriorityApp.#SUPER_STAR,
        PowerUpRideAndHatPriorityApp.#CAR,
        PowerUpRideAndHatPriorityApp.#CANNON_BOX, PowerUpRideAndHatPriorityApp.#PROPELLER_BOX, PowerUpRideAndHatPriorityApp.#GOOMBA_MASK, PowerUpRideAndHatPriorityApp.#BULLET_BILL_MASK, PowerUpRideAndHatPriorityApp.#RED_POW_BOX,
        PowerUpRideAndHatPriorityApp.#SUPER_MUSHROOM,
        PowerUpRideAndHatPriorityApp.#FIRE_FLOWER, PowerUpRideAndHatPriorityApp.#SUPER_HAMMER, PowerUpRideAndHatPriorityApp.#SUPER_BELL, PowerUpRideAndHatPriorityApp.#BOOMERANG_FLOWER,
    ]

    //endregion -------------------- Power-up priority holders --------------------
    //region -------------------- Constructor --------------------

    public constructor(props: PowerUpAndRidePriorityProperties,) {
        super(props,)
        this.state = {gameStyle: null,}
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter & setter methods --------------------

    public get type(): PowerUpPriorityTypes {
        return this.props.type
    }

    public get hasSmm2() {
        return this.props.games.hasSmm2
    }


    public get hasSmb(): boolean {
        return this.__gameStyle === SMB
    }

    public get hasSmb3(): boolean {
        return this.__gameStyle === SMB3
    }

    public get hasSmw(): boolean {
        return this.__gameStyle === SMW
    }

    public get hasNsmbu(): boolean {
        return this.__gameStyle === NSMBU
    }

    public get hasSm3dw(): boolean {
        return this.hasSmm2 && this.__gameStyle === SM3DW
    }


    private get __gameStyle(): NullOr<GameStyles> {
        return this.state.gameStyle
    }

    private set __gameStyle(value: Nullable<GameStyles>,) {
        this.setState({gameStyle: value ?? null,})
    }

    //endregion -------------------- Getter & setter methods --------------------

    #createTitleContent(): ReactElementOrString {
        const {type,} = this

        return <h1 key="title (power-up, ride & hat priority)" className="text-center">{gameContentTranslation(`power-up, ride & hat priority.${type.type}.all`, {
            powerUp: POWER_UP.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(POWER_UP.singularEnglishName,).toLowerCase(),
            powerUps: POWER_UP.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(POWER_UP.pluralNameOnReference,).toLowerCase(),
            ride: gameContentTranslation('ride.singular',).toLowerCase(),
            rides: gameContentTranslation('ride.plural',).toLowerCase(),
            hat: gameContentTranslation('hat.singular',).toLowerCase(),
            hats: gameContentTranslation('hat.plural',).toLowerCase(),
        },)}</h1>
    }

    /**
     * The {@link GameStyles} button switcher.
     *
     * Note that the implementation uses the state temporary until it is implemented in the route.
     */
    #createGameStyleContent(): NonNullReactElement {
        const gameStyle = this.__gameStyle

        //TODO replace the div by links (when changed from state to property)
        return <div id="powerUpRideAndHatPriority-gameStyle-buttonGroup-container" className="border rounded border-dark border-opacity-25">
            <div className="d-flex flex-wrap justify-content-center">
                <div className={`btn ${this.hasSmb ? 'btn-dark disabled' : 'btn-outline-dark'} m-1`} onClick={() => this.__gameStyle = SMB}>
                    <GameStyleImage reference={SMB}/>
                </div>
                <div className={`btn ${this.hasSmb3 ? 'btn-dark disabled' : 'btn-outline-dark'} m-1`} onClick={() => this.__gameStyle = SMB3}>
                    <GameStyleImage reference={SMB3}/>
                </div>
                <div className={`btn ${this.hasSmw ? 'btn-dark disabled' : 'btn-outline-dark'} m-1`} onClick={() => this.__gameStyle = SMW}>
                    <GameStyleImage reference={SMW}/>
                </div>
                <div className={`btn ${this.hasNsmbu ? 'btn-dark disabled' : 'btn-outline-dark'} m-1`} onClick={() => this.__gameStyle = NSMBU}>
                    <GameStyleImage reference={NSMBU}/>
                </div>
                {this.hasSmm2 ? <div className={`btn ${gameStyle === SM3DW ? 'btn-dark disabled' : 'btn-outline-dark'} m-1`} onClick={() => this.__gameStyle = SM3DW}>
                    <GameStyleImage reference={SM3DW}/>
                </div> : null}
            </div>
            <div className={`btn ${gameStyle == null ? 'btn-dark disabled' : 'btn-outline-dark'} rounded-0 rounded-bottom w-100`} onClick={() => this.__gameStyle = null}>{unfinishedText('None')}</div>
        </div>
    }

    #createOtherPathsContent(): NonNullReactElement {
        const type = this.type

        return <div id="powerUpRideAndHatPriority-otherPath-buttonGroup-container" className="btn-group-vertical btn-group-sm" role="group">
            <button className="btn disabled">{unfinishedText('Feature in progress',)}</button>
            <LinkButton partialId="everyPriority" routeName={type.allRouteName} color={type.allColor}>{contentTranslation('All',)}</LinkButton>
            <div className="btn-group btn-group-sm" role="group">
                <LinkButton partialId="powerUpPriority" routeName={type.powerUpRouteName} color={type.powerUpColor}>{gameContentTranslation('power-up.singular',)}</LinkButton>
                <LinkButton partialId="ridePriority" routeName={type.rideRouteName} color={type.rideColor}>{gameContentTranslation('ride.singular',)}</LinkButton>
                <LinkButton partialId="hatPriority" routeName={type.hatRouteName} color={type.hatColor}>{gameContentTranslation('hat.singular',)}</LinkButton>
            </div>
            <LinkButton partialId="noPriority" routeName={type.noneRouteName} color={type.noneColor}>{unfinishedText('None',)}</LinkButton>
        </div>
    }

    #createLegend(): NonNullReactElement {
        return <div id="powerUpRideAndHatPriority-legend-container" className="border rounded border-dark border-opacity-25 ms-auto">
            <h3 className="text-center border border-0 border-bottom border-dark border-opacity-25 pb-1 mb-0">{unfinishedText('Can be obtained …')}</h3>
            <div id="powerUpRideAndHatPriority-information-container" className="px-3 d-flex flex-column flex-sm-row flex-lg-column flex-xl-row">
                <ul className="list-unstyled m-0">
                    <li id="example-indirect" className="d-flex"><Arrow value={Arrows.RIGHT}/><UnfinishedText>Indirectly</UnfinishedText></li>
                    <li id="example-direct" className="d-flex"><Arrow value={Arrows.RIGHT}/><UnfinishedText>Directly</UnfinishedText></li>
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

    public override render() {
        const games = this.props.games

        return <>
            {this.#createTitleContent()}
            <nav id="navigationButtonGroup-container">
                <div className="d-flex flex-wrap justify-content-around align-items-center">
                    <div>{this.#createGameStyleContent()}</div>
                    <div className="mt-2 mt-md-0">{this.#createOtherPathsContent()}</div>
                    <div className="mt-2 mt-lg-0">{this.#createLegend()}</div>
                </div>
            </nav>
            <UnfinishedText type="paragraph" isHidden>description</UnfinishedText>{/*TODO add description*/}
            <div id="displayed-powerUpPriorityGroup">
                {this.hasSmb ? <PowerUpPriorityInSMB games={games}>{PowerUpRideAndHatPriorityApp.#SMB_POWER_UPS}</PowerUpPriorityInSMB> : null}
                {this.hasSmb3 ? <PowerUpPriorityInSMB3 games={games}>{PowerUpRideAndHatPriorityApp.#SMB3_POWER_UPS}</PowerUpPriorityInSMB3> : null}
                {this.hasSmw ? <PowerUpPriorityInSMW games={games}>{PowerUpRideAndHatPriorityApp.#SMW_POWER_UPS}</PowerUpPriorityInSMW> : null}
                {this.hasNsmbu ? <PowerUpPriorityInNSMBU games={games}>{PowerUpRideAndHatPriorityApp.#NSMBU_POWER_UPS}</PowerUpPriorityInNSMBU> : null}
                {this.hasSm3dw ? <PowerUpPriorityInSM3DW>{PowerUpRideAndHatPriorityApp.#SM3DW_POWER_UPS}</PowerUpPriorityInSM3DW> : null}
            </div>
        </>
    }

}
