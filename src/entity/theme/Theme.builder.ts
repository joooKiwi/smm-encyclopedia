import type {Builder}               from '../../util/Builder';
import type {CourseTheme}           from './CourseTheme';
import type {DebugEntityReferences} from '../simple/Entity.loader';
import type {Entity}                from '../simple/Entity';
import type {Name}                  from '../../lang/name/Name';
import type {ThemeTemplate}         from './Theme.template';
import type {WorldTheme}            from './WorldTheme';

import {CourseThemeContainer}    from './CourseTheme.container';
import {EmptyCourseTheme}        from './EmptyCourseTheme';
import {EmptyWorldTheme}         from './EmptyWorldTheme';
import {GamePropertyContainer}   from '../properties/GameProperty.container';
import {Games}                   from '../game/Games';
import {TemplateWithNameBuilder} from '../_template/TemplateWithName.builder';
import {Themes}                  from './Themes';
import {WorldThemeContainer}     from './WorldTheme.container';

export class ThemeBuilder
    extends TemplateWithNameBuilder<ThemeTemplate, readonly [CourseTheme, WorldTheme,]>
    implements Builder<readonly [CourseTheme, WorldTheme,]> {

    //region -------------------- external object references --------------------

    public static entitiesMap: ReadonlyMap<string, DebugEntityReferences>;

    //endregion -------------------- external object references --------------------
    //region -------------------- Attributes --------------------

    static readonly #templateMap: Map<string, ThemeTemplate> = new Map();

    //endregion -------------------- Attributes --------------------

    public constructor(templateBuilder: Builder<ThemeTemplate>,) {
        super(templateBuilder, template => template.isIn.game['1'] ? 'all' : Games.SUPER_MARIO_MAKER_2, true,);
    }

    protected /*static*/ get _templateMap() {
        return ThemeBuilder.#templateMap;
    }

    private __createCourseTheme(name: Name,): CourseTheme {
        const template = this.template;
        const gameTemplate = template.isIn.game;


        return new CourseThemeContainer(
            name,
            GamePropertyContainer.get(gameTemplate['1'], gameTemplate['2'],),
            () => ThemeBuilder.__whereEntityIs(name.english),
            template.effect,
        );
    }

    private static __whereEntityIs(englishName: string,): Entity[] {
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
        const themeTemplate = this.template.isIn.theme;
        const isInCourseTheme = themeTemplate.course;
        const isInWorldTheme = themeTemplate.world;

        return isInCourseTheme && isInWorldTheme
            ? [this.__createCourseTheme(name), new WorldThemeContainer(name),]
            : isInCourseTheme
                ? [this.__createCourseTheme(name), EmptyWorldTheme.get,]
                : [EmptyCourseTheme.get, new WorldThemeContainer(name),];
    }


}