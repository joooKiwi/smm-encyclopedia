import type {SoundEffect}                      from 'core/soundEffect/SoundEffect'
import type {SoundEffectTemplate}              from 'core/soundEffect/SoundEffect.template'
import type {PlayerSoundEffectTriggerTemplate} from 'core/soundEffect/property/PlayerSoundEffectTrigger.template'
import type {Name}                             from 'lang/name/Name'
import type {Builder}                          from 'util/builder/Builder'
import type {ObjectHolder}                     from 'util/holder/ObjectHolder'

import {TemplateWithNameBuilder}      from 'core/_template/TemplateWithName.builder'
import {GamePropertyProvider}         from 'core/entity/properties/game/GameProperty.provider'
import {Games}                        from 'core/game/Games'
import {PlayerSoundEffectTriggers}    from 'core/soundEffect/property/PlayerSoundEffectTriggers'
import {SoundEffectContainer}         from 'core/soundEffect/SoundEffect.container'
import {SoundEffectPropertyContainer} from 'core/soundEffect/property/SoundEffectProperty.container'
import {EmptySoundEffectCategory}     from 'core/soundEffectCategory/EmptySoundEffectCategory'
import {SoundEffectCategories}        from 'core/soundEffectCategory/SoundEffectCategories'
import {DelayedObjectHolderContainer} from 'util/holder/DelayedObjectHolder.container'

export class SoundEffectBuilder
    extends TemplateWithNameBuilder<SoundEffectTemplate, SoundEffect> {

    public constructor(templateBuilder: Builder<SoundEffectTemplate>,) {
        super(templateBuilder, Games.SUPER_MARIO_MAKER_2, false,)
    }

    //region -------------------- Build helper methods --------------------

    protected /*static*/ override get _static() {
        return SoundEffectBuilder
    }

    #createCategory() {
        const category = this.template.properties.category
        return category == null ? EmptySoundEffectCategory.get
            : SoundEffectCategories.getValueByName(category).reference
    }

    static #getTrigger({movement, interaction, environment,}: PlayerSoundEffectTriggerTemplate,): ObjectHolder<PlayerSoundEffectTriggers> {
        return new DelayedObjectHolderContainer(() => PlayerSoundEffectTriggers.getValueByTrigger(//TODO replace PlayerSoundEffectTriggers by an indirect usage
            movement.jumpAfterLanding, movement.turnAroundAfterBeingAtFullSpeed, movement.crouch, movement.after3SecondsRepeatedly,
            interaction.collectPowerUp, interaction.getIntoAnEntity,
            environment.spawn, environment.damage, environment.lostALife,
        ))
    }

    #createProperty() {
        const isInPropertiesTemplate = this.template.properties.isIn,
            gameTemplate = isInPropertiesTemplate.game

        return new SoundEffectPropertyContainer(
            GamePropertyProvider.get.get(gameTemplate['1And3DS'], gameTemplate['2'],),

            SoundEffectBuilder.#getTrigger(isInPropertiesTemplate.trigger.player),
        )
    }

    //endregion -------------------- Build helper methods --------------------

    protected override _build(name: Name<string>,): SoundEffect {
        return new SoundEffectContainer(
            name,
            this.#createCategory(),
            this.#createProperty(),
        )
    }

}
