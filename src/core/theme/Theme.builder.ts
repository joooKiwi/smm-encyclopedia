import type {Builder}                                   from '../../util/builder/Builder';
import type {CourseTheme}                               from './CourseTheme';
import type {CourseAndWorldTheme}                       from './Themes.types';
import type {Entity}                                    from '../entity/Entity';
import type {Name}                                      from '../../lang/name/Name';
import type {PossibleEffectInNightTheme, ThemeTemplate} from './Theme.template';

import {assert}                       from '../../util/utilitiesMethods';
import {CourseThemeContainer}         from './CourseTheme.container';
import {DelayedObjectHolderContainer} from '../../util/holder/DelayedObjectHolder.container';
import {EmptyCourseTheme}             from './EmptyCourseTheme';
import {EmptyWorldTheme}              from './EmptyWorldTheme';
import {GamePropertyContainer}        from '../entity/properties/GameProperty.container';
import {Games}                        from '../game/Games';
import {NightEffects}                 from './NightEffects';
import {TemplateWithNameBuilder}      from '../_template/TemplateWithName.builder';
import {Themes}                       from './Themes';
import {WorldThemeContainer}          from './WorldTheme.container';
import {Entities}                     from '../entity/Entities';

export class ThemeBuilder
    extends TemplateWithNameBuilder<ThemeTemplate, CourseAndWorldTheme>
    implements Builder<CourseAndWorldTheme> {

    public constructor(templateBuilder: Builder<ThemeTemplate>,) {
        super(templateBuilder, ({isIn: {game: {'1And3DS': isInSMM1And3DS,},},},) => isInSMM1And3DS ? 'all' : Games.SUPER_MARIO_MAKER_2, true,);
    }

    protected get _static() {
        return ThemeBuilder;
    }

    private __createCourseTheme(name: Name<string>,): CourseTheme {
        const template = this.template;
        const gameTemplate = template.isIn.game;

        return new CourseThemeContainer(
            name,
            GamePropertyContainer.get(gameTemplate['1And3DS'], gameTemplate['2'],),
            new DelayedObjectHolderContainer(() => ThemeBuilder.__whereEntityIs(name.english)),
            new DelayedObjectHolderContainer(() => ThemeBuilder.__whereNightEffectIs(name.english, template.effect,)),
        );
    }

    private static __whereEntityIs(englishName: string,): readonly Entity[] {
        const theme = Themes.getValue(englishName);
        assert(theme != null, `The english name "${englishName}" has no reference on the Themes class.`,);

        return Entities.values.map(({reference,}) => reference)
            .filter(reference => theme.get(reference));
    }

    private static __whereNightEffectIs(englishName: string, effect: PossibleEffectInNightTheme,): NightEffects {
        const nightEffect = NightEffects.getValue(effect);
        assert(nightEffect != null, `The effect on the course theme "${englishName}" Has no references in the NightEffects class.`,);

        return nightEffect;
    }


    protected _build(name: Name<string>,): CourseAndWorldTheme {
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