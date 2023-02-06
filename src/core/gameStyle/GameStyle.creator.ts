import type {ClassThatIsAvailableFromTheStart, PossibleIsAvailableFromTheStart} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart'
import type {Entity}                                                            from 'core/entity/Entity'
import type {GameProperty}                                                      from 'core/entity/properties/game/GameProperty'
import type {GameStyle, PossibleNightDesertWindTranslationKey}                  from 'core/gameStyle/GameStyle'
import type {PossibleAcronym}                                                   from 'core/gameStyle/GameStyles.types'
import type {GameStyleTemplate, NightDesertWindTemplate}                        from 'core/gameStyle/GameStyle.template'
import type {SimpleGameFrom1And2Template}                                       from 'core/game/SimpleGame.template'
import type {Name}                                                              from 'lang/name/Name'
import type {ObjectHolder}                                                      from 'util/holder/ObjectHolder'

import {TemplateCreator}      from 'core/_template/Template.creator'
import {GamePropertyProvider} from 'core/entity/properties/game/GameProperty.provider'
import {GameStyleContainer}           from 'core/gameStyle/GameStyle.container'
import {Import}                       from 'util/DynamicImporter'
import {DelayedObjectHolderContainer} from 'util/holder/DelayedObjectHolder.container'

/**
 * @classWithDynamicImport {@link Entities}, {@link GameReferences}, {@link GameStyles}, {@link ClassThatIsAvailableFromTheStartProvider}
 */
export class GameStyleCreator
    extends TemplateCreator<GameStyleTemplate, GameStyle> {

    //region -------------------- Fields --------------------

    static readonly #GAME_PROPERTY_IN_ALL_GAMES: ObjectHolder<GameProperty<true, true, true>> = new DelayedObjectHolderContainer(() => GamePropertyProvider.get.all)
    static readonly #GAME_PROPERTY_IN_SMM2: ObjectHolder<GameProperty<false, false, true>> = new DelayedObjectHolderContainer(() => GamePropertyProvider.get.smm2Only)

    static readonly #IS_NOT_APPLICABLE_ON_AVAILABLE_FROM_THE_START_IN_SMM1: ObjectHolder<ClassThatIsAvailableFromTheStart<null, null, true>> = new DelayedObjectHolderContainer(() => Import.ClassThatIsAvailableFromTheStartProvider.get.get(null,))
    static readonly #IS_AVAILABLE_FROM_THE_START_IN_SMM1: ObjectHolder<ClassThatIsAvailableFromTheStart<true, true, true>> = new DelayedObjectHolderContainer(() => Import.ClassThatIsAvailableFromTheStartProvider.get.get(true,))
    static readonly #IS_NOT_AVAILABLE_FROM_THE_START_IN_SMM1: ObjectHolder<ClassThatIsAvailableFromTheStart<false, true, true>> = new DelayedObjectHolderContainer(() => Import.ClassThatIsAvailableFromTheStartProvider.get.get(false,))

    //endregion -------------------- Fields --------------------

    public constructor(template: GameStyleTemplate,) {
        super(template,)
    }

    //region -------------------- Builder helper methods --------------------

    static #getNameBy(reference: PossibleAcronym,): () => Name<string> {
        return () => Import.GameReferences.getValueByNameOrAcronym(reference).reference.nameContainer
    }

    static #getGameProperty({'1And3DS': isInSMM1And3DS,}: SimpleGameFrom1And2Template<boolean, boolean>,): ObjectHolder<GameProperty> {
        return isInSMM1And3DS
            ? this.#GAME_PROPERTY_IN_ALL_GAMES
            : this.#GAME_PROPERTY_IN_SMM2
    }

    static #getIsAvailableFromTheStart(value: PossibleIsAvailableFromTheStart,): ObjectHolder<ClassThatIsAvailableFromTheStart> {
        //TODO move this code elsewhere to remove duplicate code
        return value == null
            ? this.#IS_NOT_APPLICABLE_ON_AVAILABLE_FROM_THE_START_IN_SMM1
            : value
                ? this.#IS_AVAILABLE_FROM_THE_START_IN_SMM1
                : this.#IS_NOT_AVAILABLE_FROM_THE_START_IN_SMM1
    }

    static #getEntityBy(englishName: PossibleAcronym,): ObjectHolder<readonly Entity[]> {
        return new DelayedObjectHolderContainer(() => {
            const gameStyle = Import.GameStyles.getValue(englishName)

            return Import.Entities.values.map(({reference,}) => reference)
                .filter(reference => gameStyle.get(reference))
                .toArray()
        })
    }

    static #getNightDesertWindTranslationKey({direction, frequency,}: NightDesertWindTemplate,): PossibleNightDesertWindTranslationKey {
        return direction == null
            ? null
            : `${direction} ${frequency}` as PossibleNightDesertWindTranslationKey
    }

    //endregion -------------------- Builder helper methods --------------------

    public create(): GameStyle {
        const template = this.template

        return new GameStyleContainer(
            GameStyleCreator.#getNameBy(template.reference),
            GameStyleCreator.#getGameProperty(template.is.in.game),
            GameStyleCreator.#getIsAvailableFromTheStart(template.is.availableFromTheStart),
            GameStyleCreator.#getEntityBy(template.reference),
            GameStyleCreator.#getNightDesertWindTranslationKey(template.nightDesertWind),
        )
    }
}
