import type {Builder}             from '../../util/builder/Builder';
import type {Name}                from '../../lang/name/Name';
import type {SoundEffect}         from './SoundEffect';
import type {SoundEffectTemplate} from './SoundEffect.template';

import {EmptySoundEffectCategory}                  from '../soundEffectCategory/EmptySoundEffectCategory';
import {GamePropertyProvider}                      from '../entity/properties/game/GameProperty.provider';
import {Games}                                     from '../game/Games';
import {PlayerSoundEffectTriggerPropertyContainer} from './property/PlayerSoundEffectTriggerProperty.container';
import {SoundEffectContainer}                      from './SoundEffect.container';
import {SoundEffectPropertyContainer}              from './property/SoundEffectProperty.container';
import {SoundEffectCategories}                     from '../soundEffectCategory/SoundEffectCategories';
import {TemplateWithNameBuilder}                   from '../_template/TemplateWithName.builder';

export class SoundEffectBuilder
    extends TemplateWithNameBuilder<SoundEffectTemplate, SoundEffect> {

    public constructor(templateBuilder: Builder<SoundEffectTemplate>,) {
        super(templateBuilder, Games.SUPER_MARIO_MAKER_2, false,);
    }

    //region -------------------- Build helper methods --------------------

    protected /*static*/ override get _static() {
        return SoundEffectBuilder;
    }

    #createCategory() {
        return SoundEffectCategories.getValue(this.template.properties.category)?.reference
            ?? EmptySoundEffectCategory.get;
    }

    #createProperty() {
        const isInPropertiesTemplate = this.template.properties.isIn;
        const gameTemplate = isInPropertiesTemplate.game;
        const {movement: playerMovementTriggerTemplate, interaction: playerInteractionTriggerTemplate, environment: playerEnvironmentTriggerTemplate,} = isInPropertiesTemplate.trigger.player;

        return new SoundEffectPropertyContainer(
            GamePropertyProvider.get.get(gameTemplate['1And3DS'], gameTemplate['2'],),

            PlayerSoundEffectTriggerPropertyContainer.get(playerMovementTriggerTemplate.jumpAfterLanding, playerMovementTriggerTemplate.turnAroundAfterBeingAtFullSpeed, playerMovementTriggerTemplate.crouch, playerMovementTriggerTemplate.after3SecondsRepeatedly,
                playerInteractionTriggerTemplate.collectPowerUp, playerInteractionTriggerTemplate.getIntoAnEntity,
                playerEnvironmentTriggerTemplate.spawn, playerEnvironmentTriggerTemplate.damage, playerEnvironmentTriggerTemplate.lostALife,),
        );
    }

    //endregion -------------------- Build helper methods --------------------

    protected override _build(name: Name<string>,): SoundEffect {
        return new SoundEffectContainer(
            name,
            this.#createCategory(),
            this.#createProperty(),
        );
    }

}
