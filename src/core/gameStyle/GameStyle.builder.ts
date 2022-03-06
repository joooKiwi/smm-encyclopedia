import type {Builder}                                          from '../../util/builder/Builder';
import type {Entity}                                           from '../entity/Entity';
import type {GameStyle, PossibleNightDesertWindTranslationKey} from './GameStyle';
import type {GameStyleTemplate}                                from './GameStyle.template';
import type {PossibleAcronym}                                  from './GameStyles.types';

import {DelayedObjectHolderContainer} from '../../util/holder/DelayedObjectHolder.container';
import {Entities}                     from '../entity/Entities';
import {GamePropertyContainer}        from '../entity/properties/GameProperty.container';
import {GameReferences}               from '../gameReference/GameReferences';
import {GameStyles}                   from './GameStyles';
import {GameStyleContainer}           from './GameStyle.container';
import {TemplateBuilder}              from '../_template/Template.builder';

export class GameStyleBuilder
    extends TemplateBuilder<GameStyleTemplate, GameStyle>
    implements Builder<GameStyle> {

    public constructor(templateBuilder: Builder<GameStyleTemplate>,) {
        super(templateBuilder,);
    }


    protected get _static() {
        return GameStyleBuilder;
    }

    private static __whereEntityIs(englishName: PossibleAcronym,): readonly Entity[] {
        const gameStyle = GameStyles.getValue(englishName);

        return Entities.values.map(({reference,}) => reference)
            .filter(reference => gameStyle.get(reference));
    }

    private __getNightDesertWindTranslationKey(): PossibleNightDesertWindTranslationKey {
        const {direction, frequency,} = this.template.nightDesertWind;

        return direction == null || frequency == null
            ? null
            : `${direction} ${frequency}` as PossibleNightDesertWindTranslationKey;
    }

    public build(): GameStyle {
        const {reference, isIn: {game: gameTemplate,},} = this.template;

        return new GameStyleContainer(
            () => GameReferences.getValue(reference).reference.nameContainer,
            GamePropertyContainer.get(gameTemplate['1And3DS'], gameTemplate['2'],),
            new DelayedObjectHolderContainer(() => GameStyleBuilder.__whereEntityIs(reference)),
            this.__getNightDesertWindTranslationKey(),
        );
    }
}
