import type {Builder}                                  from '../../../util/Builder';
import type {Name}                                     from '../../../lang/name/Name';
import type {PossibleSoundEffectCategoriesEnglishName} from '../category/SoundEffectCategories.types';
import type {PossibleSoundEffectsEnglishName}          from './SoundEffects.types';
import type {SoundEffect}                              from './SoundEffect';
import type {SoundEffectTemplate}                      from './SoundEffect.template';
import type {SoundEffectCategory}                      from '../category/SoundEffectCategory';

import {EmptySoundEffectCategory}     from '../category/EmptySoundEffectCategory';
import {Games}                        from '../../game/Games';
import {SoundEffectContainer}         from './SoundEffect.container';
import {SoundEffectPropertyContainer} from './properties/SoundEffectProperty.container';
import {TemplateWithNameBuilder}      from '../../_template/TemplateWithName.builder';

export class SoundEffectBuilder
    extends TemplateWithNameBuilder<SoundEffectTemplate, SoundEffect> {

    //region -------------------- external object references --------------------

    public static categoriesMap: ReadonlyMap<PossibleSoundEffectCategoriesEnglishName, SoundEffectCategory>;

    //endregion -------------------- external object references --------------------
    //region -------------------- Attributes --------------------

    static readonly #templateMap: Map<PossibleSoundEffectsEnglishName, SoundEffectTemplate> = new Map();

    //endregion -------------------- Attributes --------------------

    public constructor(templateBuilder: Builder<SoundEffectTemplate>,) {
        super(templateBuilder, Games.SUPER_MARIO_MAKER_2, false,);
    }

    //region -------------------- Build helper methods --------------------

    protected /*static*/ get _templateMap() {
        return SoundEffectBuilder.#templateMap;
    }

    private __createCategory() {
        const category = this.template.properties.category;

        return category == null
            ? EmptySoundEffectCategory.get
            : SoundEffectBuilder.categoriesMap.get(category)!;
    }

    private __createProperty() {
        const isInPropertiesTemplate = this.template.properties.isIn;
        const gameTemplate = isInPropertiesTemplate.game;
        const {movement: playerMovementTriggerTemplate, interaction: playerInteractionTriggerTemplate, environment: playerEnvironmentTriggerTemplate,} = isInPropertiesTemplate.trigger.player;

        return new SoundEffectPropertyContainer(
            gameTemplate['1'], gameTemplate['2'],

            playerMovementTriggerTemplate.jumpAfterLanding, playerMovementTriggerTemplate.turnAroundAfterBeingAtFullSpeed, playerMovementTriggerTemplate.crouch, playerMovementTriggerTemplate.after3SecondsRepeatedly,
            playerInteractionTriggerTemplate.collectPowerUp, playerInteractionTriggerTemplate.getIntoAnEntity,
            playerEnvironmentTriggerTemplate.spawn, playerEnvironmentTriggerTemplate.damage, playerEnvironmentTriggerTemplate.lostALife,
        );
    }

    //endregion -------------------- Build helper methods --------------------

    protected _build(name: Name,): SoundEffect {
        return new SoundEffectContainer(
            name,
            this.__createCategory(),
            this.__createProperty(),
        );
    }

}