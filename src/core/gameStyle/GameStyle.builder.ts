import type {ClassThatIsAvailableFromTheStart, PossibleIsAvailableFromTheStart} from '../availableFromTheStart/ClassThatIsAvailableFromTheStart';
import type {Builder}                                                           from '../../util/builder/Builder';
import type {Entity}                                                            from '../entity/Entity';
import type {GameProperty}                                                      from '../entity/properties/GameProperty';
import type {GameStyle, PossibleNightDesertWindTranslationKey}                  from './GameStyle';
import type {GameStyleTemplate, NightDesertWindTemplate}                        from './GameStyle.template';
import type {Name}                                                              from '../../lang/name/Name';
import type {ObjectHolder}                                                      from '../../util/holder/ObjectHolder';
import type {PossibleAcronym}                                                   from './GameStyles.types';
import type {SimpleGameFrom1And2Template}                                       from '../game/SimpleGame.template';

import {DelayedObjectHolderContainer} from '../../util/holder/DelayedObjectHolder.container';
import {GamePropertyContainer}        from '../entity/properties/GameProperty.container';
import {GameStyleContainer}           from './GameStyle.container';
import {Import}                       from '../../util/DynamicImporter';
import {TemplateBuilder}              from '../_template/Template.builder';

/**
 * @classWithDynamicImport {@link Entities}m {@link GameReferences}, {@link GameStyles}, {@link ClassThatIsAvailableFromTheStartContainer}
 */
export class GameStyleBuilder
    extends TemplateBuilder<GameStyleTemplate, GameStyle>
    implements Builder<GameStyle> {

    //region -------------------- Attributes --------------------

    static readonly #GAME_PROPERTY_IN_ALL_GAMES: ObjectHolder<GameProperty<true, true, true>> = new DelayedObjectHolderContainer(() => GamePropertyContainer.get(true, true,));
    static readonly #GAME_PROPERTY_IN_SMM2: ObjectHolder<GameProperty<false, false, true>> = new DelayedObjectHolderContainer(() => GamePropertyContainer.get(false, true,));

    static readonly #IS_NOT_APPLICABLE_ON_AVAILABLE_FROM_THE_START_IN_SMM1: ObjectHolder<ClassThatIsAvailableFromTheStart<null, null, true>> = new DelayedObjectHolderContainer(() => Import.ClassThatIsAvailableFromTheStartContainer.get(null,));
    static readonly #IS_AVAILABLE_FROM_THE_START_IN_SMM1: ObjectHolder<ClassThatIsAvailableFromTheStart<true, true, true>> = new DelayedObjectHolderContainer(() => Import.ClassThatIsAvailableFromTheStartContainer.get(true,));
    static readonly #IS_NOT_AVAILABLE_FROM_THE_START_IN_SMM1: ObjectHolder<ClassThatIsAvailableFromTheStart<false, true, true>> = new DelayedObjectHolderContainer(() => Import.ClassThatIsAvailableFromTheStartContainer.get(false,));

    //endregion -------------------- Attributes --------------------

    public constructor(templateBuilder: Builder<GameStyleTemplate>,) {
        super(templateBuilder,);
    }

    //region -------------------- Dynamic imports attributes --------------------

    //region -------------------- Builder helper methods --------------------

    private static __getNameBy(reference: PossibleAcronym,): () => Name<string> {
        return () => Import.GameReferences.getValue(reference).reference.nameContainer;
    }

    private static __getGameProperty({'1And3DS': isInSMM1And3DS,}: SimpleGameFrom1And2Template<boolean, boolean>,): ObjectHolder<GameProperty> {
        return isInSMM1And3DS
            ? this.#GAME_PROPERTY_IN_ALL_GAMES
            : this.#GAME_PROPERTY_IN_SMM2;
    }

    private static __getIsAvailableFromTheStart(value: PossibleIsAvailableFromTheStart,): ObjectHolder<ClassThatIsAvailableFromTheStart> {
        //TODO move this code elsewhere to remove duplicate code
        return value == null
            ? this.#IS_NOT_APPLICABLE_ON_AVAILABLE_FROM_THE_START_IN_SMM1
            : value
                ? this.#IS_AVAILABLE_FROM_THE_START_IN_SMM1
                : this.#IS_NOT_AVAILABLE_FROM_THE_START_IN_SMM1;
    }

    private static __getEntityBy(englishName: PossibleAcronym,): ObjectHolder<readonly Entity[]> {
        return new DelayedObjectHolderContainer(() => {
            const gameStyle = Import.GameStyles.getValue(englishName);

            return Import.Entities.values.map(({reference,}) => reference)
                .filter(reference => gameStyle.get(reference));
        });
    }

    private static __getNightDesertWindTranslationKey({direction, frequency,}: NightDesertWindTemplate,): PossibleNightDesertWindTranslationKey {
        return direction == null
            ? null
            : `${direction} ${frequency}` as PossibleNightDesertWindTranslationKey;
    }

    //endregion -------------------- Builder helper methods --------------------

    public build(): GameStyle {
        const template = this.template;

        return new GameStyleContainer(
            GameStyleBuilder.__getNameBy(template.reference),
            GameStyleBuilder.__getGameProperty(template.is.in.game),
            GameStyleBuilder.__getIsAvailableFromTheStart(template.is.availableFromTheStart),
            GameStyleBuilder.__getEntityBy(template.reference),
            GameStyleBuilder.__getNightDesertWindTranslationKey(template.nightDesertWind),
        );
    }
}
