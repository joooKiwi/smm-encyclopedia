import {lazyOf} from '@joookiwi/lazy'

import type {Games}                     from 'core/game/Games'
import type {SoundEffect}               from 'core/soundEffect/SoundEffect'
import  {PlayerSoundEffectTriggers} from 'core/soundEffect/property/PlayerSoundEffectTriggers'
import type {PossibleTranslationKey}    from 'core/soundEffect/property/PlayerSoundEffectTriggers.types'
import type {SoundEffectCategory}       from 'core/soundEffectCategory/SoundEffectCategory'
import type {Name}                      from 'lang/name/Name'

import {ClassContainingANameAndACategory} from 'lang/name/ClassContainingANameAndACategory'
import {GameMap}                          from 'util/collection/GameMap'

export class SoundEffectContainer
    extends ClassContainingANameAndACategory<string, string, SoundEffectCategory>
    implements SoundEffect {

    //region -------------------- Fields --------------------

    readonly #isInSuperMarioMaker1And3DS
    readonly #isInSuperMarioMaker2
    readonly #playerSoundEffectTrigger
    #gameMap?: GameMap<boolean, SoundEffect>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(name: Name<string>,
                       isInSuperMarioMaker1And3DS: boolean, isInSuperMarioMaker2: boolean,
                       category: SoundEffectCategory,
                       playerSoundEffectTrigger: PlayerSoundEffectTriggers,) {
        super(name, lazyOf(category,),)
        this.#isInSuperMarioMaker1And3DS = isInSuperMarioMaker1And3DS
        this.#isInSuperMarioMaker2 = isInSuperMarioMaker2
        this.#playerSoundEffectTrigger = playerSoundEffectTrigger
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get isInSuperMarioMaker1(): boolean {
        return this.#isInSuperMarioMaker1And3DS
    }

    public get isInSuperMarioMakerFor3DS(): boolean {
        return this.#isInSuperMarioMaker1And3DS
    }

    public get isInSuperMarioMaker2(): boolean {
        return this.#isInSuperMarioMaker2
    }


    public get playerSoundEffectTrigger(): PlayerSoundEffectTriggers {
        return this.#playerSoundEffectTrigger
    }


    public get translationKey(): PossibleTranslationKey {
        return this.playerSoundEffectTrigger.translationKey
    }



    public get doesTriggerOnPlayerWhenJumpingAfterLanding(): boolean {
        return this.playerSoundEffectTrigger.doesTriggerOnPlayerWhenJumpingAfterLanding
    }

    public get doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed(): boolean {
        return this.playerSoundEffectTrigger.doesTriggerOnPlayerWhenTurningAroundAfterBeingAtFullSpeed
    }

    public get doesTriggerOnPlayerWhenCrouching(): boolean {
        return this.playerSoundEffectTrigger.doesTriggerOnPlayerWhenCrouching
    }

    public get doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly(): boolean {
        return this.playerSoundEffectTrigger.doesTriggerOnPlayerAfter3SecondsOfNonMovementRepeatedly
    }


    public get doesTriggerOnPlayerWhenCollectingAPowerUp(): boolean {
        return this.playerSoundEffectTrigger.doesTriggerOnPlayerWhenCollectingAPowerUp
    }

    public get doesTriggerOnPlayerWhenGettingIntoAEntity(): boolean {
        return this.playerSoundEffectTrigger.doesTriggerOnPlayerWhenGettingIntoAEntity
    }


    public get doesTriggerOnPlayerAtSpawn(): boolean {
        return this.playerSoundEffectTrigger.doesTriggerOnPlayerAtSpawn
    }

    public get doesTriggerOnPlayerWhenTakingDamage(): boolean {
        return this.playerSoundEffectTrigger.doesTriggerOnPlayerWhenTakingDamage
    }

    public get doesTriggerOnPlayerWhenLosingALife(): boolean {
        return this.playerSoundEffectTrigger.doesTriggerOnPlayerWhenLosingALife
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Convertor methods --------------------

    public toGameMap(): ReadonlyMap<Games, boolean> {
        return this.#gameMap ??= new GameMap(this,)
    }

    //endregion -------------------- Convertor methods --------------------

}
