import type {MysteryMushroom, MysteryMushroomGames} from 'core/mysteryMushroom/MysteryMushroom'
import type {MysteryMushroomTemplate}               from 'core/mysteryMushroom/MysteryMushroom.template'
import type {SoundProperty}                         from 'core/mysteryMushroom/properties/sound/SoundProperty'
import type {SoundPropertyTemplate}                 from 'core/mysteryMushroom/properties/sound/SoundProperty.template'
import type {Name}                                  from 'lang/name/Name'

import {TemplateWithNameCreator}              from 'core/_template/TemplateWithName.creator'
import {GameReferences}                       from 'core/gameReference/GameReferences'
import {MysteryMushroomContainer}             from 'core/mysteryMushroom/MysteryMushroom.container'
import {MysteryMushroomPropertyContainer}     from 'core/mysteryMushroom/properties/MysteryMushroomProperty.container'
import {UnlockPropertyProvider}               from 'core/mysteryMushroom/properties/UnlockProperty.provider'
import {SoundEffectOnDeathProvider}           from 'core/mysteryMushroom/properties/sound/SoundEffectOnDeath.provider'
import {SoundEffectOnGoalPoleProvider}        from 'core/mysteryMushroom/properties/sound/SoundEffectOnGoalPole.provider'
import {SoundEffectOnGroundAfterJumpProvider} from 'core/mysteryMushroom/properties/sound/SoundEffectOnGroundAfterJump.provider'
import {SoundEffectOnJumpProvider}            from 'core/mysteryMushroom/properties/sound/SoundEffectOnJump.provider'
import {SoundEffectOnMovementProvider}        from 'core/mysteryMushroom/properties/sound/SoundEffectOnMovement.provider'
import {SoundEffectOnTauntProvider}           from 'core/mysteryMushroom/properties/sound/SoundEffectOnTaunt.provider'
import {SoundEffectOnTurnAfterRunProvider}    from 'core/mysteryMushroom/properties/sound/SoundEffectOnTurnAfterRun.provider'
import {SoundEffectWhenCollectedProvider}     from 'core/mysteryMushroom/properties/sound/SoundEffectWhenCollected.provider'
import {SoundPropertyContainer}               from 'core/mysteryMushroom/properties/sound/SoundProperty.container'
import {SpecialMusicInStarModeProvider}       from 'core/mysteryMushroom/properties/sound/SpecialMusicInStarMode.provider'

//region -------------------- Import from deconstruction --------------------

const {POKEMON_RED, POKEMON_GREEN, POKEMON_BLUE, POKEMON_YELLOW, POKEMON_DIAMOND, POKEMON_PEARL, POKEMON_X, POKEMON_Y,} = GameReferences

//endregion -------------------- Import from deconstruction --------------------

export class MysteryMushroomCreator
    extends TemplateWithNameCreator<MysteryMushroomTemplate, MysteryMushroom> {

    public constructor(template: MysteryMushroomTemplate,) {
        super(template, 1, false,)//TODO change the false to true since it is a complete SMM1 name
    }

    //region -------------------- Build helper methods --------------------

    //region -------------------- Property helper methods --------------------

    #createSoundProperty(soundPropertyTemplate: SoundPropertyTemplate,): SoundProperty {
        const collectedTemplate = soundPropertyTemplate.hasSoundEffect.collected
        const tauntTemplate = soundPropertyTemplate.hasSoundEffect.taunt
        const movement = soundPropertyTemplate.soundEffect.movement
        const jumpTemplate = soundPropertyTemplate.hasSoundEffect.jump.value
        const groundAfterJumpTemplate = soundPropertyTemplate.hasSoundEffect.jump.ground
        const turnAfterRun = soundPropertyTemplate.hasSoundEffect.turn
        const starModeTemplate = soundPropertyTemplate.hasSpecialMusic.starMode
        const goalPoleTemplate = soundPropertyTemplate.hasSoundEffect.goalPole
        const deathTemplate = soundPropertyTemplate.hasSoundEffect.death

        return new SoundPropertyContainer(
            SoundEffectWhenCollectedProvider.get.get(collectedTemplate.value, collectedTemplate.game,),
            SoundEffectOnTauntProvider.get.get(tauntTemplate.value, tauntTemplate.game,),
            SoundEffectOnMovementProvider.get.get(movement,),
            SoundEffectOnJumpProvider.get.get(jumpTemplate.value, jumpTemplate.game,),
            SoundEffectOnGroundAfterJumpProvider.get.get(groundAfterJumpTemplate.value, groundAfterJumpTemplate.game,),
            SoundEffectOnTurnAfterRunProvider.get.get(turnAfterRun,),
            SpecialMusicInStarModeProvider.get.get(starModeTemplate.value, starModeTemplate.game,),
            SoundEffectOnGoalPoleProvider.get.get(goalPoleTemplate.value, goalPoleTemplate.type, goalPoleTemplate.game, goalPoleTemplate.smallDefinition,),
            SoundEffectOnDeathProvider.get.get(deathTemplate.value, deathTemplate.type, deathTemplate.game, deathTemplate.smallDefinition,),
        )
    }

    #createProperty() {
        const propertyTemplate = this.template.properties
        const unlockTemplate = propertyTemplate.unlock

        return new MysteryMushroomPropertyContainer(
            UnlockPropertyProvider.get.get(unlockTemplate.condition, unlockTemplate.amiibo,),
            this.#createSoundProperty(propertyTemplate.sound,),
        )
    }

    //endregion -------------------- Property helper methods --------------------

    protected _getGames(): MysteryMushroomGames {
        const reference = this.template.gameReference

        switch (reference) {
            case 'Pokémon gen 1':
                return [POKEMON_RED, POKEMON_GREEN, POKEMON_BLUE, POKEMON_YELLOW,]
            case 'Pokémon gen 4':
                return [POKEMON_DIAMOND, POKEMON_PEARL,]
            case 'Pokémon gen 6':
                return [POKEMON_X, POKEMON_Y,]
            default:
                return [GameReferences.CompanionEnum.get.getValueByName(reference,),]
        }
    }

    //endregion -------------------- Build helper methods --------------------

    protected _create(name: Name<string>,): MysteryMushroom {
        return new MysteryMushroomContainer(name, this._getGames(), this.#createProperty())
    }
}
