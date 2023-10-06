import type {Lazy} from '@joookiwi/lazy'
import {lazy}      from '@joookiwi/lazy'

import type {SoundEffect}         from 'core/soundEffect/SoundEffect'
import type {SoundEffectTemplate} from 'core/soundEffect/SoundEffect.template'
import type {SoundEffectProperty} from 'core/soundEffect/property/SoundEffectProperty'
import type {SoundEffectCategory} from 'core/soundEffectCategory/SoundEffectCategory'

import {GamePropertyProvider}             from 'core/entity/properties/game/GameProperty.provider'
import {SoundEffectContainer}             from 'core/soundEffect/SoundEffect.container'
import {PlayerSoundEffectTriggers}        from 'core/soundEffect/property/PlayerSoundEffectTriggers'
import {SoundEffectPropertyContainer}     from 'core/soundEffect/property/SoundEffectProperty.container'
import {LAZY_EMPTY_SOUND_EFFECT_CATEGORY} from 'core/soundEffectCategory/EmptySoundEffectCategory.lazy'
import {SoundEffectCategories}            from 'core/soundEffectCategory/SoundEffectCategories'
import {NameBuilderContainer}             from 'lang/name/Name.builder.container'

export function createContent(template: SoundEffectTemplate,): SoundEffect {
    return new SoundEffectContainer(
        new NameBuilderContainer(template.name, 2, false,).build(),
        createCategory(template.properties.category,),
        createProperty(template.properties.isIn,),
    )
}

function createCategory(value: NullOrString,): Lazy<SoundEffectCategory> {
    if (value == null)
        return LAZY_EMPTY_SOUND_EFFECT_CATEGORY
    return lazy(() => SoundEffectCategories.CompanionEnum.get.getValueByName(value,).reference,)
}

function createProperty(template: SoundEffectTemplate['properties']['isIn'],): SoundEffectProperty {
    const isInGame = template.game
    const movementPlayerTrigger = template.trigger.player.movement
    const interactionPlayerTrigger = template.trigger.player.interaction
    const environmentPlayerTrigger = template.trigger.player.environment

    return new SoundEffectPropertyContainer(
        GamePropertyProvider.get.get(isInGame['1And3DS'], isInGame['2'],),
        lazy(() => PlayerSoundEffectTriggers.getValueByTrigger(//TODO replace PlayerSoundEffectTriggers by an indirect usage
            movementPlayerTrigger.jumpAfterLanding, movementPlayerTrigger.turnAroundAfterBeingAtFullSpeed, movementPlayerTrigger.crouch, movementPlayerTrigger.after3SecondsRepeatedly,
            interactionPlayerTrigger.collectPowerUp, interactionPlayerTrigger.getIntoAnEntity,
            environmentPlayerTrigger.spawn, environmentPlayerTrigger.damage, environmentPlayerTrigger.lostALife,
        ),),
    )
}
