import type {Builder}                                                           from '../../util/builder/Builder';
import type {ClassThatIsAvailableFromTheStart, PossibleIsAvailableFromTheStart} from '../availableFromTheStart/ClassThatIsAvailableFromTheStart';
import type {CourseTheme}                                                       from './CourseTheme';
import type {CourseAndWorldTheme, PossibleEnglishName}                          from './Themes.types';
import type {Entity}                                                            from '../entity/Entity';
import type {GameProperty}                                                      from '../entity/properties/GameProperty';
import type {Name}                                                              from '../../lang/name/Name';
import type {ObjectHolder}                                                      from '../../util/holder/ObjectHolder';
import type {PossibleEnglishName as PossibleEnglishName_NightEffect}            from './NightEffects.types';
import type {SimpleGameFrom1And2Template}                                       from '../game/SimpleGame.template';
import type {ThemeTemplate}                                                     from './Theme.template';
import type {WorldTheme}                                                        from './WorldTheme';

import {ClassThatIsAvailableFromTheStartContainer} from '../availableFromTheStart/ClassThatIsAvailableFromTheStart.container';
import {CourseThemeContainer}                      from './CourseTheme.container';
import {DelayedObjectHolderContainer}              from '../../util/holder/DelayedObjectHolder.container';
import {EmptyCourseTheme}                          from './EmptyCourseTheme';
import {EmptyWorldTheme}                           from './EmptyWorldTheme';
import {Entities}                                  from '../entity/Entities';
import {GamePropertyContainer}                     from '../entity/properties/GameProperty.container';
import {Games}                                     from '../game/Games';
import {NightEffects}                              from './NightEffects';
import {TemplateWithNameBuilder}                   from '../_template/TemplateWithName.builder';
import {Themes}                                    from './Themes';
import {WorldThemeContainer}                       from './WorldTheme.container';

export class ThemeBuilder
    extends TemplateWithNameBuilder<ThemeTemplate, CourseAndWorldTheme>
    implements Builder<CourseAndWorldTheme> {

    //region -------------------- Attributes --------------------

    static readonly #WORLD_THEME_PROPERTY = GamePropertyContainer.get(false, true,);

    static readonly #IS_NOT_APPLICABLE_ON_AVAILABLE_FROM_THE_START_IN_SMM1: ObjectHolder<ClassThatIsAvailableFromTheStart<null, null, true>> = new DelayedObjectHolderContainer(() => ClassThatIsAvailableFromTheStartContainer.get(null,));
    static readonly #IS_AVAILABLE_FROM_THE_START_IN_SMM1: ObjectHolder<ClassThatIsAvailableFromTheStart<true, true, true>> = new DelayedObjectHolderContainer(() => ClassThatIsAvailableFromTheStartContainer.get(true,));
    static readonly #IS_NOT_AVAILABLE_FROM_THE_START_IN_SMM1: ObjectHolder<ClassThatIsAvailableFromTheStart<false, true, true>> = new DelayedObjectHolderContainer(() => ClassThatIsAvailableFromTheStartContainer.get(false,));

    //endregion -------------------- Attributes --------------------

    public constructor(templateBuilder: Builder<ThemeTemplate>,) {
        super(templateBuilder, ({is: {in: {game: {'1And3DS': isInSMM1And3DS,},},},},) => isInSMM1And3DS ? 'all' : Games.SUPER_MARIO_MAKER_2, true,);
    }

    //region -------------------- Builder helper methods --------------------

    protected get _static() {
        return ThemeBuilder;
    }

    //region -------------------- Course theme builder helper methods --------------------

    private static __createCourseTheme(name: Name<string>, template: ThemeTemplate,): CourseTheme {
        return new CourseThemeContainer(
            name,
            this.__getGameProperty(template.is.in.game),
            this.__getIsAvailableFromTheStart(template.is.availableFromTheStart,),
            this.__getWhereEntityIs(name.english as PossibleEnglishName),
            this.__getWhereNightEffectIs(template.effect as PossibleEnglishName_NightEffect,),
        );
    }

    private static __getGameProperty(gameTemplate: SimpleGameFrom1And2Template<boolean, boolean>,): GameProperty {
        return GamePropertyContainer.get(gameTemplate['1And3DS'], gameTemplate['2'],);
    }

    private static __getIsAvailableFromTheStart(value: PossibleIsAvailableFromTheStart,): ObjectHolder<ClassThatIsAvailableFromTheStart> {
        //TODO move this code elsewhere to remove duplicate code
        return value == null
            ? this.#IS_NOT_APPLICABLE_ON_AVAILABLE_FROM_THE_START_IN_SMM1
            : value
                ? this.#IS_AVAILABLE_FROM_THE_START_IN_SMM1
                : this.#IS_NOT_AVAILABLE_FROM_THE_START_IN_SMM1;
    }

    /**
     * Get the {@link Entity entities} where the theme is applied.
     *
     * @param name the english name to retrieve the {@link Themes}
     * @see Themes.get
     */
    private static __getWhereEntityIs(name: PossibleEnglishName,): ObjectHolder<readonly Entity[]> {
        return new DelayedObjectHolderContainer(() => {
            const theme = Themes.getValue(name);

            return Entities.values.map(({reference,}) => reference)
                .filter(reference => theme.get(reference));
        });
    }

    /**
     * Get the {@link NightEffects night effect} based on the name received.
     *
     * @param name the night effect
     */
    private static __getWhereNightEffectIs(name: PossibleEnglishName_NightEffect,): ObjectHolder<NightEffects> {
        return new DelayedObjectHolderContainer(() => NightEffects.getValue(name));
    }

    //endregion -------------------- Course theme builder helper methods --------------------
    //region -------------------- World theme builder helper methods --------------------

    private static __createWorldTheme(name: Name<string>,): WorldTheme {
        return new WorldThemeContainer(name,
            this.#WORLD_THEME_PROPERTY,
            this.#IS_NOT_APPLICABLE_ON_AVAILABLE_FROM_THE_START_IN_SMM1,
        );
    }

    //endregion -------------------- World theme builder helper methods --------------------

    //endregion -------------------- Builder helper methods --------------------

    protected _build(name: Name<string>,): CourseAndWorldTheme {
        const template = this.template;
        const {course: isInCourseTheme, world: isInWorldTheme,} = template.is.in.theme;

        return isInCourseTheme && isInWorldTheme
            ? [ThemeBuilder.__createCourseTheme(name, template,), ThemeBuilder.__createWorldTheme(name),]
            : isInCourseTheme
                ? [ThemeBuilder.__createCourseTheme(name, template,), EmptyWorldTheme.get,]
                : [EmptyCourseTheme.get, ThemeBuilder.__createWorldTheme(name),];
    }


}