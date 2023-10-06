import type {MysteryMushroom, MysteryMushroomGames}            from 'core/mysteryMushroom/MysteryMushroom'
import type {MysteryMushroomTemplate, PokemonGeneration}       from 'core/mysteryMushroom/MysteryMushroom.template'
import type {PossibleAcronym as PossibleAcronym_GameReference} from 'core/gameReference/GameReferences.types'
import type {MysteryMushroomProperty}                          from 'core/mysteryMushroom/properties/MysteryMushroomProperty'

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
import {NameBuilderContainer}                 from 'lang/name/Name.builder.container'

export function createContent(template: MysteryMushroomTemplate,): MysteryMushroom {
    return new MysteryMushroomContainer(
        new NameBuilderContainer(template.name, 1, false,).build(),//TODO change the false to true since it is a complete SMM1 name
        retrieveGames(template.gameReference,),
        createProperty(template.properties,),
    )
}

function retrieveGames(value: | PossibleAcronym_GameReference | PokemonGeneration,): MysteryMushroomGames {
    switch (value) {
        case 'Pokémon gen 1':
            return [GameReferences.POKEMON_RED, GameReferences.POKEMON_GREEN, GameReferences.POKEMON_BLUE, GameReferences.POKEMON_YELLOW,]
        case 'Pokémon gen 4':
            return [GameReferences.POKEMON_DIAMOND, GameReferences.POKEMON_PEARL,]
        case 'Pokémon gen 6':
            return [GameReferences.POKEMON_X, GameReferences.POKEMON_Y,]
        default:
            return [GameReferences.CompanionEnum.get.getValueByAcronym(value,),]
    }
}

function createProperty(template: MysteryMushroomTemplate['properties'],): MysteryMushroomProperty {
    const unlockTemplate = template.unlock
    const collectedSoundTemplate = template.sound.hasSoundEffect.collected
    const tauntSoundTemplate = template.sound.hasSoundEffect.taunt
    const movementSound = template.sound.soundEffect.movement
    const jumpSoundTemplate = template.sound.hasSoundEffect.jump.value
    const groundAfterJumpSoundTemplate = template.sound.hasSoundEffect.jump.ground
    const turnAfterRunSound = template.sound.hasSoundEffect.turn
    const starModeSoundTemplate = template.sound.hasSpecialMusic.starMode
    const goalPoleSoundTemplate = template.sound.hasSoundEffect.goalPole
    const deathSoundTemplate = template.sound.hasSoundEffect.death

    return new MysteryMushroomPropertyContainer(
        UnlockPropertyProvider.get.get(unlockTemplate.condition, unlockTemplate.amiibo,),
        new SoundPropertyContainer(
            SoundEffectWhenCollectedProvider.get.get(collectedSoundTemplate.value, collectedSoundTemplate.game,),
            SoundEffectOnTauntProvider.get.get(tauntSoundTemplate.value, tauntSoundTemplate.game,),
            SoundEffectOnMovementProvider.get.get(movementSound,),
            SoundEffectOnJumpProvider.get.get(jumpSoundTemplate.value, jumpSoundTemplate.game,),
            SoundEffectOnGroundAfterJumpProvider.get.get(groundAfterJumpSoundTemplate.value, groundAfterJumpSoundTemplate.game,),
            SoundEffectOnTurnAfterRunProvider.get.get(turnAfterRunSound,),
            SpecialMusicInStarModeProvider.get.get(starModeSoundTemplate.value, starModeSoundTemplate.game,),
            SoundEffectOnGoalPoleProvider.get.get(goalPoleSoundTemplate.value, goalPoleSoundTemplate.type, goalPoleSoundTemplate.game, goalPoleSoundTemplate.smallDefinition,),
            SoundEffectOnDeathProvider.get.get(deathSoundTemplate.value, deathSoundTemplate.type, deathSoundTemplate.game, deathSoundTemplate.smallDefinition,),
        ),
    )
}
