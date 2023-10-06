import type {Lazy} from '@joookiwi/lazy'
import {lazy}      from '@joookiwi/lazy'

import type {ClassThatIsAvailableFromTheStart, PossibleIsAvailableFromTheStart} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart'
import type {Entity}                                                            from 'core/entity/Entity'
import type {CourseAndWorldTheme}                                               from 'core/theme/CourseAndWorldTheme'
import type {CourseTheme}                                                       from 'core/theme/CourseTheme'
import type {ThemeTemplate}                                                     from 'core/theme/Theme.template'
import type {WorldTheme}                                                        from 'core/theme/WorldTheme'
import type {Name}                                                              from 'lang/name/Name'

import {ClassThatIsAvailableFromTheStartProvider} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart.provider'
import {GamePropertyProvider}                     from 'core/entity/properties/game/GameProperty.provider'
import {NightEffects}                             from 'core/nightEffect/NightEffects'
import {CourseThemeContainer}                     from 'core/theme/CourseTheme.container'
import {CourseAndWorldThemeContainer}             from 'core/theme/CourseAndWorldTheme.container'
import {CourseOnlyThemeContainer}                 from 'core/theme/CourseOnlyTheme.container'
import {Themes}                                   from 'core/theme/Themes'
import {WorldThemeContainer}                      from 'core/theme/WorldTheme.container'
import {WorldOnlyThemeContainer}                  from 'core/theme/WorldOnlyTheme.container'
import {NameBuilderContainer}                     from 'lang/name/Name.builder.container'
import {Import}                                   from 'util/DynamicImporter'

const IS_NOT_APPLICABLE_ON_AVAILABLE_FROM_THE_START_IN_SMM1 = lazy(() => ClassThatIsAvailableFromTheStartProvider.get.get(null,),)
const IS_AVAILABLE_FROM_THE_START_IN_SMM1 = lazy(() => ClassThatIsAvailableFromTheStartProvider.get.get(true,),)
const IS_NOT_AVAILABLE_FROM_THE_START_IN_SMM1 = lazy(() => ClassThatIsAvailableFromTheStartProvider.get.get(false,),)

export function createContent(template: ThemeTemplate,): CourseAndWorldTheme {
    const isInCourseTheme = template.is.in.theme.course
    const isInWorldTheme = template.is.in.theme.world

    const name = template.is.in.game['1And3DS']
        ? new NameBuilderContainer(template.name, 'all', true,).build()
        : new NameBuilderContainer(template.name, 2, true,).build()

    if (isInCourseTheme && isInWorldTheme)
        return createCourseAndWorldTheme(template, name,)
    if (isInCourseTheme)
        return new CourseOnlyThemeContainer(name, createCourseTheme(template, name,),)
    return new WorldOnlyThemeContainer(name, createWorldTheme(name,),)
}

function createCourseAndWorldTheme(template: ThemeTemplate, name: Name<string>,): CourseAndWorldTheme {
    const courseTheme = createCourseTheme(template, name,)
    const worldTheme = createWorldTheme(name,)

    return new CourseAndWorldThemeContainer(
        name,
        lazy(() => GamePropertyProvider.get.get(
            courseTheme.isInSuperMarioMaker1 || worldTheme.isInSuperMarioMaker1,
            courseTheme.isInSuperMarioMaker2 || worldTheme.isInSuperMarioMaker2,
        ),),
        isAvailableFromTheStart(template.is.availableFromTheStart,),
        courseTheme,
        worldTheme,
    )
}

function createCourseTheme(template: ThemeTemplate, name: Name<string>,): CourseTheme {
    const isInGame = template.is.in.game

    return new CourseThemeContainer(
        name,
        GamePropertyProvider.get.get(isInGame['1And3DS'], isInGame['2'],),
        isAvailableFromTheStart(template.is.availableFromTheStart,),
        whereEntityIs(name.english,),
        lazy(() => NightEffects.CompanionEnum.get.getValueByName(template.effect,),),
    )
}

function createWorldTheme(name: Name<string>,): WorldTheme {
    return new WorldThemeContainer(
        name,
        GamePropertyProvider.get.smm2Only,
        IS_NOT_APPLICABLE_ON_AVAILABLE_FROM_THE_START_IN_SMM1,
    )
}


function isAvailableFromTheStart(value: PossibleIsAvailableFromTheStart,): Lazy<ClassThatIsAvailableFromTheStart> {
    //TODO move this code elsewhere to remove duplicate code
    if (value == null)
        return IS_NOT_APPLICABLE_ON_AVAILABLE_FROM_THE_START_IN_SMM1
    if (value)
        return IS_AVAILABLE_FROM_THE_START_IN_SMM1
    return IS_NOT_AVAILABLE_FROM_THE_START_IN_SMM1
}

/**
 * Get the {@link Entity entities} where the theme is applied.
 *
 * @param name The {@link import('core/theme/Themes.types').PossibleEnglishName english name} to retrieve the {@link Themes}
 * @see Themes.get
 */
function whereEntityIs(name: string,): Lazy<readonly Entity[]> {
    return lazy(() => {
        const theme = Themes.CompanionEnum.get.getValueByName(name,)

        return Import.Entities.CompanionEnum.get.values.map(({reference,},) => reference,)
            .filter(reference => theme.get(reference,),)
            .toArray()
    })
}
