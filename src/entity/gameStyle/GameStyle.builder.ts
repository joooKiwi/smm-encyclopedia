import type {Builder}               from '../../util/Builder';
import type {DebugEntityReferences} from '../simple/Entity.loader';
import type {Entity}                from '../simple/Entity';
import type {GameStyle}             from './GameStyle';
import type {GameStyleTemplate}     from './GameStyle.template';
import type {Name}                  from '../../lang/name/Name';

import {GamePropertyContainer}   from '../properties/GameProperty.container';
import {GameStyles}              from './GameStyles';
import {GameStyleContainer}      from './GameStyle.container';
import {TemplateWithNameBuilder} from '../_template/TemplateWithName.builder';

export class GameStyleBuilder
    extends TemplateWithNameBuilder<GameStyleTemplate, GameStyle>
    implements Builder<GameStyle> {

    //region -------------------- External object references --------------------

    public static entitiesMap: ReadonlyMap<string, DebugEntityReferences>;

    //endregion -------------------- External object references --------------------

    public constructor(templateBuilder: Builder<GameStyleTemplate>,) {
        super(templateBuilder, 'all', true,);
    }


    protected get _static() {
        return GameStyleBuilder;
    }

    private static __whereEntityIs(englishName: string,): Entity[] {
        const gameStyle = GameStyles.getValue(englishName);
        if (gameStyle === null)
            throw new ReferenceError(`The english name "${englishName}" has no reference on the Game Style class.`);
        const everyEntities = [] as Entity[];
        for (const [, {entity}] of this.entitiesMap.entries())
            if (entity !== undefined && gameStyle.get(entity))
                everyEntities.push(entity);
        return everyEntities;
    }

    protected _build(name: Name,): GameStyle {
        const gameTemplate = this.template.isIn.game;

        return new GameStyleContainer(
            name,
            GamePropertyContainer.get(gameTemplate['1'], gameTemplate['2'],),
            () => GameStyleBuilder.__whereEntityIs(name.english),
        );
    }
}
