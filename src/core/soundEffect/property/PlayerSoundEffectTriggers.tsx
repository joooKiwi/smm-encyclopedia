import {Fragment, lazy} from 'react'

import type {ClassWithTranslationKey}                                                                                                                                                                       from '../../../lang/ClassWithTranslationKey'
import type {EnumArray, EnumByName, EnumByNumber, EnumByOrdinal, EnumByPossibleString, EnumByString, Names, Ordinals, PossibleNonNullableValue, PossibleStringValue, PossibleTranslationKey, PossibleValue} from './PlayerSoundEffectTriggers.types'
import type {PlayerSoundEffectTriggerProperty}                                                                                                                                                              from './PlayerSoundEffectTriggerProperty'
import type {ReactElement}                                                                                                                                                                                  from '../../../util/react/ReactProperties'
import type {StaticReference}                                                                                                                                                                               from '../../../util/enum/Enum.types'
import type {TranslationReplaceKeysMap}                                                                                                                                                                     from '../../../lang/components/TranslationProperty'

import {assert}                 from '../../../util/utilitiesMethods'
import {Enum}                   from '../../../util/enum/Enum'
import {gameContentTranslation} from '../../../lang/components/translationMethods'

//region -------------------- dynamic imports --------------------

const Image =         lazy(() => import('../../../app/tools/images/Image'))
const TextComponent = lazy(() => import('../../../app/tools/text/TextComponent'))

//endregion -------------------- dynamic imports --------------------

export class PlayerSoundEffectTriggers
    extends Enum<Ordinals, Names>
    implements ClassWithTranslationKey<PossibleTranslationKey>,
        PlayerSoundEffectTriggerProperty {

    //region -------------------- Enum instances --------------------

    public static readonly JUMP_AFTER_LANDING =                    new class PlayerSoundEffectTriggers_JumpAfterLanding extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenJumpingAfterLanding(): boolean {
            return true
        }


        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
            return this._addPlayerLink(key, keyMap,)
        }

    }('After land + jump',)
    public static readonly TURN_AROUND_AFTER_BEING_AT_FULL_SPEED = new class PlayerSoundEffectTriggers_TurnAroundAfterBeingAtFullSpeed extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed(): boolean {
            return true
        }


        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
            return this._addPlayerLink(key, keyMap,)
        }

    }('Turn after full speed',)
    public static readonly ON_CROUCH =                             new class PlayerSoundEffectTriggers_OnCrouch extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenCrouching(): boolean {
            return true
        }


        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
            return this._addPlayerLink(key, keyMap,)
        }

    }('Crouch',)
    public static readonly AFTER_3_SECONDS_OF_NON_MOVEMENT =       new class PlayerSoundEffectTriggers_After3SecondsOfNonMovement extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly(): boolean {
            return true
        }

    }('After 3 seconds → no movement (continuous)',)

    public static readonly COLLECT_POWER_UP =                      new class PlayerSoundEffectTriggers_CollectPowerUp extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenCollectingAPowerUp(): boolean {
            return true
        }


        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
            keyMap.mushroomImages = <i key={`${key} (mushroom images)`} className="mushroom-images-container">
                <Image className="super-mushroom-image" variable="super-mushroom" isSquared/>
                <>--Weird Mushroom--</>{/*<Image className="weird-mushroom-image" variable="weird-mushroom" isSquared/>,*/}
                <Image className="mystery-mushroom-image" variable="mystery-mushroom" isSquared/>
                <>--Big Mushroom--</>{/*<Image className="big-mushroom-image" variable={'big-mushroom'} isSquared/>,*/}
                <>--Big Mushroom (classic)--</>{/*<Image className="big-mushroom-classic-image" variable={'big-mushroom-classic'} isSquared/>,*/}
            </i>
            keyMap.fireFlowerImages = <i key={`${key} (fire flower images)`} className="fire-flower-images-container">
                <Image className="fire-flower-image" variable="fire-flower" isSquared/>
                <Image className="superball-flower-image" variable="superball-flower" isSquared/>
            </i>
            keyMap.smbImages = <i key={`${key} (SMB images)`} className="smb-images-container">
                <Image className="master-sword-image" variable="master-sword" isSquared/>
                <Image className="smb2-mushroom-image" variable="smb2-mushroom" isSquared/>
            </i>
            keyMap.smb3Images = <i key={`${key} (SMB3 images)`} className="smb3-images-container">
                <Image className="super-leaf-image" variable="super-leaf" isSquared/>
                <Image className="frog-suit-image" variable="frog-suit" isSquared/>
            </i>
            keyMap.smwImages = <i key={`${key} (SMW images)`} className="smw-images-container">
                <Image className="cape-feather-image" variable="cape-feather" isSquared/>
                <Image className="power-balloon-image" variable="power-balloon" isSquared/>
            </i>
            keyMap.nsmbuImages = <i key={`${key} (NSMBU images)`} className="nsmbu-images-container">
                <Image className="propeller-mushroom-image" variable="propeller-mushroom" isSquared/>
                <Image className="super-acorn-image" variable="super-acorn" isSquared/>
            </i>
            keyMap.sm3dwImages = <i key={`${key} (SM3DW images)`} className="sm3dw-images-container">
                <Image className="super-bell-image" variable="super-bell" isSquared/>
                <Image className="super-hammer-image" variable="super-hammer" isSquared/>
                <Image className="boomerang-flower-image" variable="boomerang-flower" isSquared/>
            </i>
            keyMap.shellImages = <i key={`${key} (shell images)`}>
                <Image className="buzzy-shell-image" variable="buzzy-shell" isSquared/>
                <Image className="spiny-shell-image" variable="spiny-shell" isSquared/>
            </i>
            return this._addPowerUpLink(key, keyMap,)
        }

    }('Power-up collected',)
    public static readonly GET_INTO_AN_ENTITY =                    new class PlayerSoundEffectTriggers_GetIntoAnEntity extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenGettingIntoAEntity(): boolean {
            return true
        }


        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
            keyMap.clownCarImage = <Image key={`${key} (Clown Car image)`} className="clown-car-image" variable="clown-car" isSquared/>
            keyMap.lakituCloudImage = <Image key={`${key} (Lakitu's Cloud image)`} className="lakitu-cloud-image" variable="lakitu-cloud" isSquared/>
            keyMap.shoeImages = <i key={`${key} (Shoe images)`} className="shoe-images-container">
                <Image className="shoe-image" variable="shoe" isSquared/>
                <>--Stiletto--</>{/*<Image className="stiletto-image" variable="stiletto" isSquared/>*/}
            </i>
            keyMap.yoshiImages = <i key={`${key} (Yoshi images)`} className="yoshi-images-container smm2-only">
                <>--Yoshi--</>{/*<Image className="yoshi-image" variable="yoshi" isSquared/>*/}
                <>--Red Yoshi--</>{/*<Image className="red-yoshi-image" variable="red-yoshi" isSquared/>*/}
            </i>
            keyMap.dryBonesShellImage = <Image key={`${key} (Dry Bones Shell image)`} className="dry-bones-shell-image smm2-only" variable="dry-bones-shell" isSquared/>
            keyMap.swingingClawImage = <Fragment key={`${key} (Swinging Claw image)`}>--Swinging Claw--</Fragment>//<Image key={`${key} (Swinging Claw image)`} className="swinging-claw-image smm2-only" variable="swinging-claw"/>
            return this._addPlayerLink(key, keyMap,)
        }

    }('Get in entity',)

    public static readonly AT_SPAWN =                              new class PlayerSoundEffectTriggers_AtSpawn extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerAtSpawn(): boolean {
            return true
        }


        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
            return this._addPlayerLink(key, keyMap,)
        }

    }('Spawn',)
    public static readonly TAKE_DAMAGE =                           new class PlayerSoundEffectTriggers_TakeDamage extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenTakingDamage(): boolean {
            return true
        }


        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
            return this._addPlayerLink(key, keyMap,)
        }

    }('Take damage',)
    public static readonly LOSE_A_LIFE =                           new class PlayerSoundEffectTriggers_LoseALife extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenLosingALife(): boolean {
            return true
        }


        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
            return this._addPlayerLink(key, keyMap,)
        }

    }('Lose life',)
    public static readonly TAKE_DAMAGE_OR_LOSE_A_LIFE =            new class PlayerSoundEffectTriggers_TakeDamageOrLoseALife extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenTakingDamage(): boolean {
            return true
        }

        public override get doesTriggerOnPlayerWhenLosingALife(): boolean {
            return true
        }


        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
            return this._addPlayerLink(key, keyMap,)
        }

    }('Take damage | Lose life',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Enum fields --------------------

    static [index: number]: PlayerSoundEffectTriggers

    //endregion -------------------- Enum fields --------------------
    //region -------------------- Fields --------------------

    readonly #translationKey

    //endregion -------------------- Fields --------------------

    private constructor(translationKey: PossibleTranslationKey,) {
        super()
        this.#translationKey = translationKey
    }

    //region -------------------- Getter methods --------------------

    public get translationKey(): PossibleTranslationKey {
        return this.#translationKey
    }

    //region -------------------- Triggers --------------------

    //region -------------------- Movement triggers --------------------

    public get doesTriggerOnPlayerWhenJumpingAfterLanding(): boolean {
        return false
    }

    public get doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed(): boolean {
        return false
    }

    public get doesTriggerOnPlayerWhenCrouching(): boolean {
        return false
    }

    public get doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly(): boolean {
        return false
    }

    //endregion -------------------- Movement triggers --------------------
    //region -------------------- Interaction triggers --------------------

    public get doesTriggerOnPlayerWhenCollectingAPowerUp(): boolean {
        return false
    }

    public get doesTriggerOnPlayerWhenGettingIntoAEntity(): boolean {
        return false
    }

    //endregion -------------------- Interaction triggers --------------------
    //region -------------------- Environment triggers --------------------

    public get doesTriggerOnPlayerAtSpawn(): boolean {
        return false
    }

    public get doesTriggerOnPlayerWhenTakingDamage(): boolean {
        return false
    }

    public get doesTriggerOnPlayerWhenLosingALife(): boolean {
        return false
    }

    //endregion -------------------- Environment triggers --------------------

    //endregion -------------------- Triggers --------------------

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    //region -------------------- Component methods --------------------

    protected _addPowerUpLink(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        //TODO add power-up translation
        keyMap.powerUp = <span key={`${key} - ${this.name} (power-up)`} className="text-decoration-underline">--power-up--</span>
        return keyMap
    }

    protected _addPlayerLink(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        //TODO add players translation
        keyMap.player = <span key={`${key} - ${this.name} (players)`} className="text-decoration-underline">--player--</span>
        return keyMap
    }

    protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        return keyMap
    }

    public createNewComponent(key: string,): ReactElement {
        const keyMap: TranslationReplaceKeysMap = {}

        return <TextComponent classes={['playerSoundEffectTrigger-container']}
                           content={gameContentTranslation(`soundEffect.${this.translationKey}`, this._addArgumentTo(key, keyMap,),)}/>
    }

    //endregion -------------------- Component methods --------------------

    /**
     * Return only one possible instance based on the boolean received.
     * It cannot receive any dual true since only the first boolean will be considered.
     *
     * Note that only the arguments (<b>onDamageTaken</b> & <b>whenLosingALife</b>) can be both true.
     *
     * @param onJumpAfterLanding
     * @param onTurnAroundAfterBeingAtFullSpeed
     * @param onCrouch
     * @param after3SecondsOfNonMovementRepeatedly
     * @param onPowerUpCollected
     * @param whenGettingIntoAEntity
     * @param atSpawn
     * @param onDamageTaken
     * @param whenLosingALife
     */
    public static getValueByTrigger(onJumpAfterLanding: boolean, onTurnAroundAfterBeingAtFullSpeed: boolean, onCrouch: boolean, after3SecondsOfNonMovementRepeatedly: boolean, onPowerUpCollected: boolean, whenGettingIntoAEntity: boolean, atSpawn: boolean, onDamageTaken: boolean, whenLosingALife: boolean,): PlayerSoundEffectTriggers {
        if (onJumpAfterLanding)
            return this.JUMP_AFTER_LANDING
        if (onTurnAroundAfterBeingAtFullSpeed)
            return this.TURN_AROUND_AFTER_BEING_AT_FULL_SPEED
        if (onCrouch)
            return this.ON_CROUCH
        if (after3SecondsOfNonMovementRepeatedly)
            return this.AFTER_3_SECONDS_OF_NON_MOVEMENT

        if (onPowerUpCollected)
            return this.COLLECT_POWER_UP
        if (whenGettingIntoAEntity)
            return this.GET_INTO_AN_ENTITY

        if (atSpawn)
            return this.AT_SPAWN
        if (onDamageTaken)
            return whenLosingALife ? this.TAKE_DAMAGE_OR_LOSE_A_LIFE : this.TAKE_DAMAGE
        if (whenLosingALife)
            return this.LOSE_A_LIFE

        assert(false, 'There is no player sound effect trigger usable with no possible property.',)
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    protected override get _static(): StaticReference<PlayerSoundEffectTriggers> {
        return PlayerSoundEffectTriggers
    }

    //region -------------------- Enum value methods --------------------

    protected static override _getValueByString(value: string,) {
        return this.values.find(enumerable => enumerable.translationKey === value)
            ?? null
    }

    public static getValue(nullValue: | null | undefined,): null
    public static getValue<O extends Ordinals = Ordinals, >(ordinal: O,): EnumByOrdinal<O>
    public static getValue<O extends number = number, >(ordinal: O,): EnumByNumber<O>
    public static getValue<N extends Names = Names, >(name: N,): EnumByName<N>
    public static getValue<S extends PossibleStringValue = PossibleStringValue, >(name: S,): EnumByPossibleString<S>
    public static getValue<S extends string = string, >(name: S,): EnumByString<S>
    public static getValue<I extends PlayerSoundEffectTriggers = PlayerSoundEffectTriggers, >(instance: I,): I
    public static getValue(value: PossibleNonNullableValue,): PlayerSoundEffectTriggers
    public static getValue(value: PossibleValue,): | PlayerSoundEffectTriggers | null
    public static getValue(value: PossibleValue,) {
        return Enum.getValueOn(this, value,)
    }

    public static get values(): EnumArray {
        return Enum.getValuesOn(this)
    }

    //endregion -------------------- Enum value methods --------------------

    public static [Symbol.iterator]() {
        return this.values[Symbol.iterator]()
    }

    //endregion -------------------- Enum methods --------------------

}
