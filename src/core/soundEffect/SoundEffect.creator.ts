import type {Lazy} from '@joookiwi/lazy'
import {lazy}      from '@joookiwi/lazy'

import type {SoundEffect}                      from 'core/soundEffect/SoundEffect'
import type {SoundEffectTemplate}              from 'core/soundEffect/SoundEffect.template'
import type {PlayerSoundEffectTriggerTemplate} from 'core/soundEffect/property/PlayerSoundEffectTrigger.template'
import type {Name}                             from 'lang/name/Name'

import {TemplateWithNameCreator}      from 'core/_template/TemplateWithName.creator'
import {GamePropertyProvider}         from 'core/entity/properties/game/GameProperty.provider'
import {PlayerSoundEffectTriggers}    from 'core/soundEffect/property/PlayerSoundEffectTriggers'
import {SoundEffectContainer}         from 'core/soundEffect/SoundEffect.container'
import {SoundEffectPropertyContainer} from 'core/soundEffect/property/SoundEffectProperty.container'
import {EmptySoundEffectCategory}     from 'core/soundEffectCategory/EmptySoundEffectCategory'
import {SoundEffectCategories}        from 'core/soundEffectCategory/SoundEffectCategories'

export class SoundEffectCreator
    extends TemplateWithNameCreator<SoundEffectTemplate, SoundEffect> {

    public constructor(template: SoundEffectTemplate,) {
        super(template, 2, false,)
    }

    //region -------------------- Build helper methods --------------------

    #createCategory() {
        const category = this.template.properties.category
        return category == null ? EmptySoundEffectCategory.get
            : SoundEffectCategories.getValueByName(category).reference
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
