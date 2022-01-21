import type {Builder}           from '../../util/builder/Builder';
import type {Entity}            from '../entity/Entity';
import type {GameStyle}         from './GameStyle';
import type {GameStyleTemplate} from './GameStyle.template';
import type {PossibleAcronym}   from './GameStyles.types';

import {Entities}              from '../entity/Entities';
import {GamePropertyContainer} from '../entity/properties/GameProperty.container';
import {GameReferences}        from '../gameReference/GameReferences';
import {GameStyles}            from './GameStyles';
import {GameStyleContainer}    from './GameStyle.container';
import {TemplateBuilder}       from '../_template/Template.builder';

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

    public build(): GameStyle {
        const template = this.template;
        const gameTemplate = template.isIn.game;

        return new GameStyleContainer(
            () => GameReferences.getValue(template.reference).reference.nameContainer,
            GamePropertyContainer.get(gameTemplate['1'], gameTemplate['2'],),
            () => GameStyleBuilder.__whereEntityIs(template.reference),
        );
    }
}
