import {Builder}               from '../../util/Builder';
import {CourseTheme}           from './CourseTheme';
import {DebugEntityReferences} from '../simple/EntityLoader';
import {EmptyCourseTheme}      from './EmptyCourseTheme';
import {EmptyWorldTheme}       from './EmptyWorldTheme';
import {Entity}                from '../simple/Entity';
import {GamePropertyContainer} from '../properties/GamePropertyContainer';
import {GenericCourseTheme}    from './GenericCourseTheme';
import {GenericWorldTheme}     from './GenericWorldTheme';
import {Name}                  from '../../lang/name/Name';
import {TemplateBuilder}       from '../TemplateBuilder';
import {Themes}                from './Themes';
import {ThemeTemplate}         from './ThemeTemplate';
import {WorldTheme}            from './WorldTheme';

export class ThemeBuilder
    extends TemplateBuilder<ThemeTemplate, readonly [CourseTheme, WorldTheme,]>
    implements Builder<readonly [CourseTheme, WorldTheme,]> {

    //region ---------- external object references ----------

    public static entitiesMap: Map<string, DebugEntityReferences>;

    //endregion ---------- external object references ----------
    //region -------------------- Attributes --------------------

    static readonly #templateMap: Map<string, ThemeTemplate> = new Map();

    //endregion -------------------- Attributes --------------------

    public constructor(template: ThemeTemplate,) {
        super(template);
    }

    protected /*static*/ get _templateMap() {
        return ThemeBuilder.#templateMap;
    }

    private __createCourseTheme(name: Name,): CourseTheme {
        return new GenericCourseTheme(
            name,
            GamePropertyContainer.get(this.template.isIn.game['1'], this.template.isIn.game['2'],),
            () => ThemeBuilder.__whereEntityIs(name.english),
        );
    }

    private static __whereEntityIs(englishName: string): Entity[] {
        const theme = Themes.getValue(englishName);
        if (theme === null)
            throw new ReferenceError(`The english name "${englishName}" has no reference on the Themes class.`);
        const everyEntities = [] as Entity[];
        for (const [, {entity}] of this.entitiesMap.entries())
            if (entity !== undefined && theme.get(entity))
                everyEntities.push(entity);
        return everyEntities;
    }


    protected _build(name: Name,): readonly [CourseTheme, WorldTheme,] {
        const isInCourseTheme = this.template.isIn.theme.course;
        const isInWorldTheme = this.template.isIn.theme.world;

        return isInCourseTheme && isInWorldTheme
            ? [this.__createCourseTheme(name), new GenericWorldTheme(name),]
            : isInCourseTheme
                ? [this.__createCourseTheme(name), EmptyWorldTheme.get,]
                : [EmptyCourseTheme.get, new GenericWorldTheme(name),];
    }


}