import {Builder}               from '../../util/Builder';
import {DebugEntityReferences} from '../simple/EntityLoader';
import {Entity}                from '../simple/Entity';
import {GamePropertyContainer} from '../properties/GamePropertyContainer';
import {GameStyle}             from './GameStyle';
import {GameStyles}            from './GameStyles';
import {GameStyleTemplate}     from './GameStyleTemplate';
import {GenericGameStyle}      from './GenericGameStyle';
import {Name}                  from '../../lang/name/Name';
import {TemplateBuilder}       from '../TemplateBuilder';

export class GameStyleBuilder
    extends TemplateBuilder<GameStyleTemplate, GameStyle>
    implements Builder<GameStyle> {

    //region ---------- external object references ----------

    public static entitiesMap: Map<string, DebugEntityReferences>;
    //endregion ---------- external object references ----------
    //region -------------------- Attributes --------------------

    static readonly #templateMap: Map<string, GameStyleTemplate> = new Map();

    //endregion -------------------- Attributes --------------------

    public constructor(template: GameStyleTemplate,) {
        super(template);
    }


    protected /*static*/ get _templateMap() {
        return GameStyleBuilder.#templateMap;
    }

    private static __whereEntityIs(englishName: string): Entity[] {
        const gameStyle = GameStyles.getValue(englishName);
        if (gameStyle === null)
            throw new ReferenceError(`The english name "${englishName}" has no reference on the Game Style class.`);
        const everyEntities = [] as Entity[];
        for (const [, {entity}] of this.entitiesMap.entries())
            if (entity !== undefined && gameStyle.get(entity))
                everyEntities.push(entity);
        return everyEntities;
    }

    protected _build(name: Name): GameStyle {
        return new GenericGameStyle(
            name,
            GamePropertyContainer.get(this.template.isIn.game['1'], this.template.isIn.game['2'],),
            () => GameStyleBuilder.__whereEntityIs(name.english),
        );
    }
}