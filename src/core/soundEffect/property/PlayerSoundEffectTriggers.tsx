import type {CollectionHolder}                                  from '@joookiwi/collection'
import type {CompanionEnumSingleton, PossibleEnumerableValueBy} from '@joookiwi/enumerable'
import {CompanionEnum, Enum}                                    from '@joookiwi/enumerable'

import type {ClassWithTranslationKey}                 from 'lang/ClassWithTranslationKey'
import type {TranslationReplaceKeysMap}               from 'lang/components/TranslationProperty'
import type {Names, Ordinals, PossibleTranslationKey} from 'core/soundEffect/property/PlayerSoundEffectTriggers.types'
import type {PlayerSoundEffectTriggerProperty}        from 'core/soundEffect/property/PlayerSoundEffectTrigger.property'
import type {ReactElement}                            from 'util/react/ReactProperties'
import type {Nullable}                                from 'util/types/nullable'

import {OtherWordInTheGames}            from 'core/otherWordInTheGame/OtherWordInTheGames'
import UnfinishedText, {unfinishedText} from 'app/tools/text/UnfinishedText'
import Image                            from 'app/tools/images/Image'
import TextComponent                    from 'app/tools/text/TextComponent'
import {gameContentTranslation}         from 'lang/components/translationMethods'
import {assert}                         from 'util/utilitiesMethods'

//region -------------------- Import from deconstruction --------------------

const {PLAYER, POWER_UP,} = OtherWordInTheGames

//endregion -------------------- Import from deconstruction --------------------

export class PlayerSoundEffectTriggers
    extends Enum<Ordinals, Names>
    implements ClassWithTranslationKey<PossibleTranslationKey>,
        PlayerSoundEffectTriggerProperty {

    //region -------------------- Enum instances --------------------

    public static readonly JUMP_AFTER_LANDING =                    new class PlayerSoundEffectTriggers_JumpAfterLanding extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenJumpingAfterLanding() {
            return true
        }


        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addPlayerLink(key, keyMap,)
        }

    }('After land + jump',)
    public static readonly TURN_AROUND_AFTER_BEING_AT_FULL_SPEED = new class PlayerSoundEffectTriggers_TurnAroundAfterBeingAtFullSpeed extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed() {
            return true
        }


        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addPlayerLink(key, keyMap,)
        }

    }('Turn after full speed',)
    public static readonly ON_CROUCH =                             new class PlayerSoundEffectTriggers_OnCrouch extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenCrouching() {
            return true
        }


        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addPlayerLink(key, keyMap,)
        }

    }('Crouch',)
    public static readonly AFTER_3_SECONDS_OF_NON_MOVEMENT =       new class PlayerSoundEffectTriggers_After3SecondsOfNonMovement extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly() {
            return true
        }

    }('After 3 seconds → no movement (continuous)',)

    public static readonly COLLECT_POWER_UP =                      new class PlayerSoundEffectTriggers_CollectPowerUp extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenCollectingAPowerUp() {
            return true
        }


        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            keyMap.mushroomImages = <i key={`${key} (mushroom images)`} className="mushroom-images-container">
                <Image className="super-mushroom-image" variable="super-mushroom" isSquared/>
                <UnfinishedText>Weird Mushroom</UnfinishedText>{/*<Image className="weird-mushroom-image" variable="weird-mushroom" isSquared/>,*/}
                <Image className="mystery-mushroom-image" variable="mystery-mushroom" isSquared/>
                <UnfinishedText>Big Mushroom</UnfinishedText>{/*<Image className="big-mushroom-image" variable={'big-mushroom'} isSquared/>,*/}
                <UnfinishedText>Big Mushroom (classic)</UnfinishedText>{/*<Image className="big-mushroom-classic-image" variable={'big-mushroom-classic'} isSquared/>,*/}
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

        public override get doesTriggerOnPlayerWhenGettingIntoAEntity() {
            return true
        }


        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            keyMap.clownCarImage = <Image key={`${key} (Clown Car image)`} className="clown-car-image" variable="clown-car" isSquared/>
            keyMap.lakituCloudImage = <Image key={`${key} (Lakitu's Cloud image)`} className="lakitu-cloud-image" variable="lakitu-cloud" isSquared/>
            keyMap.shoeImages = <i key={`${key} (Shoe images)`} className="shoe-images-container">
                <Image className="shoe-image" variable="shoe" isSquared/>
                <UnfinishedText>Stiletto</UnfinishedText>{/*<Image className="stiletto-image" variable="stiletto" isSquared/>*/}
            </i>
            keyMap.yoshiImages = <i key={`${key} (Yoshi images)`} className="yoshi-images-container smm2-only">
                <UnfinishedText>Yoshi</UnfinishedText>{/*<Image className="yoshi-image" variable="yoshi" isSquared/>*/}
                <UnfinishedText>Red Yoshi</UnfinishedText>{/*<Image className="red-yoshi-image" variable="red-yoshi" isSquared/>*/}
            </i>
            keyMap.dryBonesShellImage = <Image key={`${key} (Dry Bones Shell image)`} className="dry-bones-shell-image smm2-only" variable="dry-bones-shell" isSquared/>
            keyMap.swingingClawImage = <UnfinishedText key={`${key} (Swinging Claw image)`}>Swinging Claw</UnfinishedText>//<Image key={`${key} (Swinging Claw image)`} className="swinging-claw-image smm2-only" variable="swinging-claw"/>
            return this._addPlayerLink(key, keyMap,)
        }

    }('Get in entity',)

    public static readonly AT_SPAWN =                              new class PlayerSoundEffectTriggers_AtSpawn extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerAtSpawn() {
            return true
        }


        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addPlayerLink(key, keyMap,)
        }

    }('Spawn',)
    public static readonly TAKE_DAMAGE =                           new class PlayerSoundEffectTriggers_TakeDamage extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenTakingDamage() {
            return true
        }


        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addPlayerLink(key, keyMap,)
        }

    }('Take damage',)
    public static readonly LOSE_A_LIFE =                           new class PlayerSoundEffectTriggers_LoseALife extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenLosingALife() {
            return true
        }


        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addPlayerLink(key, keyMap,)
        }

    }('Lose life',)
    public static readonly TAKE_DAMAGE_OR_LOSE_A_LIFE =            new class PlayerSoundEffectTriggers_TakeDamageOrLoseALife extends PlayerSoundEffectTriggers {

        public override get doesTriggerOnPlayerWhenTakingDamage() {
            return true
        }

        public override get doesTriggerOnPlayerWhenLosingALife() {
            return true
        }


        protected override _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,) {
            return this._addPlayerLink(key, keyMap,)
        }

    }('Take damage | Lose life',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: CompanionEnumSingleton<PlayerSoundEffectTriggers, typeof PlayerSoundEffectTriggers> = class CompanionEnum_PlayerSoundEffectTriggers
        extends CompanionEnum<PlayerSoundEffectTriggers, typeof PlayerSoundEffectTriggers> {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_PlayerSoundEffectTriggers

        private constructor() {
            super(PlayerSoundEffectTriggers,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_PlayerSoundEffectTriggers()
        }

        //endregion -------------------- Singleton usage --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #translationKey

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(translationKey: PossibleTranslationKey,) {
        super()
        this.#translationKey = translationKey
    }

    //endregion -------------------- Constructor --------------------
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
        keyMap.powerUp = <span key={`${key} - ${this.name} (power-up)`} className="text-decoration-underline">{
            POWER_UP.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(POWER_UP.singularEnglishName).toLowerCase()
        }</span>
        return keyMap
    }

    protected _addPlayerLink(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        keyMap.player = <span key={`${key} - ${this.name} (players)`} className="text-decoration-underline">{
            PLAYER.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(PLAYER.singularEnglishName).toLowerCase()
        }</span>
        return keyMap
    }

    protected _addArgumentTo(key: string, keyMap: TranslationReplaceKeysMap,): TranslationReplaceKeysMap {
        return keyMap
    }

    public createNewComponent(key: string,): ReactElement {
        const keyMap: TranslationReplaceKeysMap = {}

        return <TextComponent className="playerSoundEffectTrigger-container"
                              content={gameContentTranslation(`sound effect.trigger.${this.translationKey}`, this._addArgumentTo(key, keyMap,),)}/>
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


    // public static getValueByTranslation<T extends string, >(value: Nullable<| PlayerSoundEffectTriggers | T>,): PlayerSoundEffectTriggersByTranslation<T>
    public static getValueByTranslation(value: Nullable<| PlayerSoundEffectTriggers | string>,): PlayerSoundEffectTriggers {
        if (value == null)
            throw new TypeError(`No "${this.name}" could be found by a null value.`)
        if (value instanceof this)
            return value
        const valueFound = this.values.find(enumerable => enumerable.translationKey === value)
        if (valueFound == null)
            throw new ReferenceError(`No "${this.name}" could be found by this value "${value}".`)
        return valueFound
    }

    //endregion -------------------- Methods --------------------
    //region -------------------- Enum methods --------------------

    public static getValue(value: PossibleEnumerableValueBy<PlayerSoundEffectTriggers>,): PlayerSoundEffectTriggers {
        return PlayerSoundEffectTriggers.CompanionEnum.get.getValue(value,)
    }

    public static get values(): CollectionHolder<PlayerSoundEffectTriggers> {
        return PlayerSoundEffectTriggers.CompanionEnum.get.values
    }

    public static* [Symbol.iterator](): IterableIterator<PlayerSoundEffectTriggers> {
        yield* PlayerSoundEffectTriggers.CompanionEnum.get
    }

    //endregion -------------------- Enum methods --------------------

}
