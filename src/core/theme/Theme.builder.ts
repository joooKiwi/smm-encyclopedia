import type {ClassThatIsAvailableFromTheStart, PossibleIsAvailableFromTheStart} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart'
import type {Entity}                                                            from 'core/entity/Entity'
import type {GameProperty}                                                      from 'core/entity/properties/game/GameProperty'
import type {SimpleGameFrom1And2Template}                                       from 'core/game/SimpleGame.template'
import type {PossibleEnglishName as PossibleEnglishName_NightEffect}            from 'core/nightEffect/NightEffects.types'
import type {CourseAndWorldTheme}                                               from 'core/theme/CourseAndWorldTheme'
import type {CourseTheme}                                                       from 'core/theme/CourseTheme'
import type {PossibleEnglishName}                                               from 'core/theme/Themes.types'
import type {ThemeTemplate}                                                     from 'core/theme/Theme.template'
import type {WorldTheme}                                                        from 'core/theme/WorldTheme'
import type {Name}                                                              from 'lang/name/Name'
import type {ObjectHolder}                                                      from 'util/holder/ObjectHolder'
import type {Builder}                                                           from 'util/builder/Builder'

import {TemplateWithNameBuilder}                  from 'core/_template/TemplateWithName.builder'
import {ClassThatIsAvailableFromTheStartProvider} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart.provider'
import {Entities}                                 from 'core/entity/Entities'
import {GamePropertyProvider}                     from 'core/entity/properties/game/GameProperty.provider'
import {NightEffects}                             from 'core/nightEffect/NightEffects'
import {CourseThemeContainer}                     from 'core/theme/CourseTheme.container'
import {CourseAndWorldThemeContainer}             from 'core/theme/CourseAndWorldTheme.container'
import {CourseOnlyThemeContainer}                 from 'core/theme/CourseOnlyTheme.container'
import {Themes}                                   from 'core/theme/Themes'
import {WorldThemeContainer}                      from 'core/theme/WorldTheme.container'
import {WorldOnlyThemeContainer}                  from 'core/theme/WorldOnlyTheme.container'
import {DelayedObjectHolderContainer}             from 'util/holder/DelayedObjectHolder.container'

export class ThemeBuilder
    extends TemplateWithNameBuilder<ThemeTemplate, CourseAndWorldTheme>
    implements Builder<CourseAndWorldTheme> {

    //region -------------------- Fields --------------------

    static readonly #WORLD_THEME_PROPERTY = GamePropertyProvider.get.smm2Only

    static readonly #IS_NOT_APPLICABLE_ON_AVAILABLE_FROM_THE_START_IN_SMM1: ObjectHolder<ClassThatIsAvailableFromTheStart<null, null, true>> = new DelayedObjectHolderContainer(() => ClassThatIsAvailableFromTheStartProvider.get.get(null,))
    static readonly #IS_AVAILABLE_FROM_THE_START_IN_SMM1: ObjectHolder<ClassThatIsAvailableFromTheStart<true, true, true>> = new DelayedObjectHolderContainer(() => ClassThatIsAvailableFromTheStartProvider.get.get(true,))
    static readonly #IS_NOT_AVAILABLE_FROM_THE_START_IN_SMM1: ObjectHolder<ClassThatIsAvailableFromTheStart<false, true, true>> = new DelayedObjectHolderContainer(() => ClassThatIsAvailableFromTheStartProvider.get.get(false,))

    //endregion -------------------- Fields --------------------

    public constructor(templateBuilder: Builder<ThemeTemplate>,) {
        super(templateBuilder, ({is: {in: {game: {'1And3DS': isInSMM1And3DS,},},},},) => isInSMM1And3DS ? 'all' : 2, true,)
    }

    //region -------------------- Builder helper methods --------------------

    protected /*static*/ override get _static() {
        return ThemeBuilder
    }

    //region -------------------- Course theme builder helper methods --------------------

    static #createCourseTheme(name: Name<string>, template: ThemeTemplate,): CourseTheme {
        return new CourseThemeContainer(
            name,
            this.#getGameProperty(template.is.in.game,),
            this.#getIsAvailableFromTheStart(template.is.availableFromTheStart,),
            this.#getWhereEntityIs(name.english as PossibleEnglishName,),
            this.#getWhereNightEffectIs(template.effect as PossibleEnglishName_NightEffect,),
        )
    }

    static #getGameProperty(gameTemplate: SimpleGameFrom1And2Template<boolean, boolean>,): GameProperty {
        return GamePropertyProvider.get.get(gameTemplate['1And3DS'], gameTemplate['2'],)
    }

    static #getIsAvailableFromTheStart(value: PossibleIsAvailableFromTheStart,): ObjectHolder<ClassThatIsAvailableFromTheStart> {
        //TODO move this code elsewhere to remove duplicate code
        return value == null
            ? this.#IS_NOT_APPLICABLE_ON_AVAILABLE_FROM_THE_START_IN_SMM1
            : value
                ? this.#IS_AVAILABLE_FROM_THE_START_IN_SMM1
                : this.#IS_NOT_AVAILABLE_FROM_THE_START_IN_SMM1
    }

    /**
     * Get the {@link Entity entities} where the theme is applied.
     *
     * @param name the english name to retrieve the {@link Themes}
     * @see Themes.get
     */
    static #getWhereEntityIs(name: PossibleEnglishName,): ObjectHolder<readonly Entity[]> {
        return new DelayedObjectHolderContainer(() => {
            const theme = Themes.getValueByName(name)

            return Entities.values.map(({reference,}) => reference)
                .filter(reference => theme.get(reference))
                .toArray()
        })
    }

    /**
     * Get the {@link NightEffects night effect} based on the name received.
     *
     * @param name the night effect
     */
    static #getWhereNightEffectIs(name: PossibleEnglishName_NightEffect,): ObjectHolder<NightEffects> {
        return new DelayedObjectHolderContainer(() => NightEffects.getValueByName(name))
    }

    //endregion -------------------- Course theme builder helper methods --------------------
    //region -------------------- World theme builder helper methods --------------------

    static #createWorldTheme(name: Name<string>,): WorldTheme {
        return new WorldThemeContainer(name,
            this.#WORLD_THEME_PROPERTY,
            this.#IS_NOT_APPLICABLE_ON_AVAILABLE_FROM_THE_START_IN_SMM1,
        )
    }

    //endregion -------------------- World theme builder helper methods --------------------
    //region -------------------- Course & world theme builder helper methods --------------------

    static #createCourseAndWorldTheme(name: Name<string>, template: ThemeTemplate,): CourseAndWorldTheme {
        const courseTheme = this.#createCourseTheme(name, template,)
        const worldTheme = this.#createWorldTheme(name,)

        return new CourseAndWorldThemeContainer(
            name,
            this.#getGameProperty2(courseTheme, worldTheme,),
            this.#getIsAvailableFromTheStart2(template,),
            courseTheme,
            worldTheme,
        )
    }

    static #getGameProperty2(courseTheme: CourseTheme, worldTheme: WorldTheme,): ObjectHolder<GameProperty> {
        return new DelayedObjectHolderContainer(() => GamePropertyProvider.get.get(
            courseTheme.isInSuperMarioMaker1 || worldTheme.isInSuperMarioMaker1,
            courseTheme.isInSuperMarioMaker2 || worldTheme.isInSuperMarioMaker2,
        ))
    }

    static #getIsAvailableFromTheStart2(template: ThemeTemplate,): ObjectHolder<ClassThatIsAvailableFromTheStart> {
        //TODO since getIsAvailableFromTheStart needs to be moved, this one ("getIsAvailableFromTheStart2") too
        return this.#getIsAvailableFromTheStart(template.is.availableFromTheStart)
    }

    //endregion -------------------- Course & world theme builder helper methods --------------------

    //endregion -------------------- Builder helper methods --------------------

    protected override _build(name: Name<string>,): CourseAndWorldTheme {
        const template = this.template
        const {course: isInCourseTheme, world: isInWorldTheme,} = template.is.in.theme

        return isInCourseTheme && isInWorldTheme
            ? ThemeBuilder.#createCourseAndWorldTheme(name, template,)
            : isInCourseTheme
                ? new CourseOnlyThemeContainer(name, ThemeBuilder.#createCourseTheme(name, template,),)
                : new WorldOnlyThemeContainer(name, ThemeBuilder.#createWorldTheme(name,),)
    }


}
