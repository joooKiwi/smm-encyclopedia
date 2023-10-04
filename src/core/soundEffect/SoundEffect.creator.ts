import type {Lazy} from '@joookiwi/lazy'
import {lazy}      from '@joookiwi/lazy'

import type {SoundEffect}                      from 'core/soundEffect/SoundEffect'
import type {SoundEffectTemplate}              from 'core/soundEffect/SoundEffect.template'
import type {SoundEffectCategory}              from 'core/soundEffectCategory/SoundEffectCategory'
import type {PlayerSoundEffectTriggerTemplate} from 'core/soundEffect/property/PlayerSoundEffectTrigger.template'
import type {Name}                             from 'lang/name/Name'

import {TemplateWithNameCreator}          from 'core/_template/TemplateWithName.creator'
import {GamePropertyProvider}             from 'core/entity/properties/game/GameProperty.provider'
import {PlayerSoundEffectTriggers}        from 'core/soundEffect/property/PlayerSoundEffectTriggers'
import {SoundEffectContainer}             from 'core/soundEffect/SoundEffect.container'
import {SoundEffectPropertyContainer}     from 'core/soundEffect/property/SoundEffectProperty.container'
import {LAZY_EMPTY_SOUND_EFFECT_CATEGORY} from 'core/soundEffectCategory/EmptySoundEffectCategory.lazy'
import {SoundEffectCategories}            from 'core/soundEffectCategory/SoundEffectCategories'

export class SoundEffectCreator
    extends TemplateWithNameCreator<SoundEffectTemplate, SoundEffect> {

    //region -------------------- Constructor --------------------

    public constructor(template: SoundEffectTemplate,) {
        super(template, 2, false,)
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Build helper methods --------------------

    #createCategory(): Lazy<SoundEffectCategory> {
        const category = this.template.properties.category
        if (category == null)
            return LAZY_EMPTY_SOUND_EFFECT_CATEGORY
        return lazy(() => SoundEffectCategories.CompanionEnum.get.getValueByName(category,).reference,)
    }

    static #getTrigger({movement, interaction, environment,}: PlayerSoundEffectTriggerTemplate,): Lazy<PlayerSoundEffectTriggers> {
        return lazy(() => PlayerSoundEffectTriggers.getValueByTrigger(//TODO replace PlayerSoundEffectTriggers by an indirect usage
            movement.jumpAfterLanding, movement.turnAroundAfterBeingAtFullSpeed, movement.crouch, movement.after3SecondsRepeatedly,
            interaction.collectPowerUp, interaction.getIntoAnEntity,
            environment.spawn, environment.damage, environment.lostALife,
        ),)
    }

    #createProperty() {
        const isInPropertiesTemplate = this.template.properties.isIn,
            gameTemplate = isInPropertiesTemplate.game

        return new SoundEffectPropertyContainer(
            GamePropertyProvider.get.get(gameTemplate['1And3DS'], gameTemplate['2'],),

            SoundEffectCreator.#getTrigger(isInPropertiesTemplate.trigger.player),
        )
    }

    //endregion -------------------- Build helper methods --------------------

    protected override _create(name: Name<string>,): SoundEffect {
        return new SoundEffectContainer(
            name,
            this.#createCategory(),
            this.#createProperty(),
        )
    }

}
