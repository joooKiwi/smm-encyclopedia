import {Enum} from '@joookiwi/enumerable'

import type {ClassWithTranslationKey}                 from 'lang/ClassWithTranslationKey'
import type {TranslationReplaceKeysMap}               from 'lang/components/TranslationProperty'
import type {Names, Ordinals, PossibleTranslationKey} from 'core/soundEffect/property/PlayerSoundEffectTriggers.types'
import type {PlayerSoundEffectTriggerProperty}        from 'core/soundEffect/property/PlayerSoundEffectTrigger.property'
import type {CompanionEnumByTranslationKeySingleton}  from 'util/enumerable/Singleton.types'

import {unfinishedText}                from 'app/tools/text/UnfinishedText'
import Image                           from 'app/tools/images/Image'
import TextComponent                   from 'app/tools/text/TextComponent'
import {OtherWordInTheGames}           from 'core/otherWordInTheGame/OtherWordInTheGames'
import {gameContentTranslation}        from 'lang/components/translationMethods'
import {CompanionEnumByTranslationKey} from 'util/enumerable/companion/CompanionEnumByTranslationKey'

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
            keyMap.mushroomImages = <em key={`${key} (mushroom images)`} className="mushroom-images-container">
                <Image className="super-mushroom-image" variable="super-mushroom" isSquared/>
                <Image className="weird-mushroom-image" variable="weird-mushroom" isSquared/>
                <Image className="mystery-mushroom-image" variable="mystery-mushroom" isSquared/>
                <Image className="big-mushroom-image" variable="big-mushroom" isSquared/>
                <Image className="big-mushroom-classic-image" variable="big-mushroom-classic" isSquared/>
            </em>
            keyMap.fireFlowerImages = <em key={`${key} (fire flower images)`} className="fire-flower-images-container">
                <Image className="fire-flower-image" variable="fire-flower" isSquared/>
                <Image className="superball-flower-image" variable="superball-flower" isSquared/>
            </em>
            keyMap.smbImages = <em key={`${key} (SMB images)`} className="smb-images-container">
                <Image className="master-sword-image" variable="master-sword" isSquared/>
                <Image className="smb2-mushroom-image" variable="smb2-mushroom" isSquared/>
            </em>
            keyMap.smb3Images = <em key={`${key} (SMB3 images)`} className="smb3-images-container">
                <Image className="super-leaf-image" variable="super-leaf" isSquared/>
                <Image className="frog-suit-image" variable="frog-suit" isSquared/>
            </em>
            keyMap.smwImages = <em key={`${key} (SMW images)`} className="smw-images-container">
                <Image className="cape-feather-image" variable="cape-feather" isSquared/>
                <Image className="power-balloon-image" variable="power-balloon" isSquared/>
            </em>
            keyMap.nsmbuImages = <em key={`${key} (NSMBU images)`} className="nsmbu-images-container">
                <Image className="propeller-mushroom-image" variable="propeller-mushroom" isSquared/>
                <Image className="super-acorn-image" variable="super-acorn" isSquared/>
            </em>
            keyMap.sm3dwImages = <em key={`${key} (SM3DW images)`} className="sm3dw-images-container">
                <Image className="super-bell-image" variable="super-bell" isSquared/>
                <Image className="super-hammer-image" variable="super-hammer" isSquared/>
                <Image className="boomerang-flower-image" variable="boomerang-flower" isSquared/>
            </em>
            keyMap.shellImages = <em key={`${key} (shell images)`}>
                <Image className="buzzy-shell-image" variable="buzzy-shell" isSquared/>
                <Image className="spiny-shell-image" variable="spiny-shell" isSquared/>
            </em>
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
            keyMap.shoeImages = <em key={`${key} (Shoe images)`} className="shoe-images-container">
                <Image className="shoe-image" variable="shoe" isSquared/>
                <Image className="stiletto-image" variable="stiletto"/>
            </em>
            keyMap.yoshiImages = <em key={`${key} (Yoshi images)`} className="yoshi-images-container smm2-only">
                <Image className="yoshi-image" variable="yoshi" isSquared/>
                <Image className="red-yoshi-image" variable="red-yoshi" isSquared/>
            </em>
            keyMap.dryBonesShellImage = <Image key={`${key} (Dry Bones Shell image)`} className="dry-bones-shell-image smm2-only" variable="dry-bones-shell" isSquared/>
            keyMap.swingingClawImage = <Image key={`${key} (Swinging Claw image)`} className="swinging-claw-image smm2-only" variable="swinging-claw" isSquared/>
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

    public static readonly CompanionEnum: CompanionEnumByTranslationKeySingleton<PlayerSoundEffectTriggers, typeof PlayerSoundEffectTriggers> = class CompanionEnum_PlayerSoundEffectTriggers
        extends CompanionEnumByTranslationKey<PlayerSoundEffectTriggers, typeof PlayerSoundEffectTriggers> {

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

    //endregion -------------------- Methods --------------------

}
