import type {Builder}           from '../../util/Builder';
import type {Entity}            from '../entity/Entity';
import type {GameStyle}         from './GameStyle';
import type {GameStyleTemplate} from './GameStyle.template';

import {assert}                from '../../util/utilitiesMethods';
import {GamePropertyContainer} from '../entity/properties/GameProperty.container';
import {GameReferences}        from '../gameReference/GameReferences';
import {GameStyles}            from './GameStyles';
import {GameStyleContainer}    from './GameStyle.container';
import {TemplateBuilder}       from '../_template/Template.builder';

export class GameStyleBuilder
    extends TemplateBuilder<GameStyleTemplate, GameStyle>
    implements Builder<GameStyle> {

    //region -------------------- External object references --------------------

    public static entitiesMap: ReadonlyMap<string, Entity>;

    //endregion -------------------- External object references --------------------

    public constructor(templateBuilder: Builder<GameStyleTemplate>,) {
        super(templateBuilder,);
    }


    protected get _static() {
        return GameStyleBuilder;
    }

    private static __whereEntityIs(englishName: string,): readonly Entity[] {
        const gameStyle = GameStyles.getValue(englishName);
        assert(gameStyle != null, `The english name "${englishName}" has no reference on the Game Style class.`,);
        const everyEntities = [] as Entity[];
        for (const [, entity,] of this.entitiesMap)
            if (entity !== undefined && gameStyle.get(entity))
                everyEntities.push(entity);
        return everyEntities;
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
