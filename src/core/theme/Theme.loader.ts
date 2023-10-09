import file from 'resources/compiled/Theme.json'

import {lazy} from '@joookiwi/lazy'

import type {LanguageContent}                 from 'core/_template/LanguageContent'
import type {PossibleIsAvailableFromTheStart} from 'core/availableFromTheStart/loader.types'
import type {GameContentFrom1And2}            from 'core/game/Loader.types'
import type {CourseAndWorldTheme}             from 'core/theme/CourseAndWorldTheme'
import type {CourseTheme}                     from 'core/theme/CourseTheme'
import type {PossibleEnglishName}             from 'core/theme/Themes.types'
import type {PossibleEffectInNightTheme}      from 'core/theme/loader.types'
import type {WorldTheme}                      from 'core/theme/WorldTheme'
import type {Name}                            from 'lang/name/Name'
import type {Loader}                          from 'util/loader/Loader'

import {isInProduction}                           from 'variables'
import {ClassThatIsAvailableFromTheStartProvider} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart.provider'
import {Entities}                                 from 'core/entity/Entities'
import {GamePropertyProvider}                     from 'core/entity/properties/game/GameProperty.provider'
import {CourseAndWorldThemeContainer}             from 'core/theme/CourseAndWorldTheme.container'
import {CourseOnlyThemeContainer}                 from 'core/theme/CourseOnlyTheme.container'
import {CourseThemeContainer}                     from 'core/theme/CourseTheme.container'
import {Themes}                                   from 'core/theme/Themes'
import {WorldOnlyThemeContainer}                  from 'core/theme/WorldOnlyTheme.container'
import {WorldThemeContainer}                      from 'core/theme/WorldTheme.container'
import {NightEffects}                             from 'core/nightEffect/NightEffects'
import {NameFromContentBuilderContainer}          from 'lang/name/NameFromContent.builder.container'

/**
 * @dependsOn<{@link Entities}>
 * @indirectlyDependsOn<{@link EntityLoader}>
 * @dependsOn<{@link Themes}>
 * @singleton
 */
export class ThemeLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, CourseAndWorldTheme>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: ThemeLoader

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, CourseAndWorldTheme>

    public load(): ReadonlyMap<PossibleEnglishName, CourseAndWorldTheme> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, CourseAndWorldTheme>()
        let index = file.length
        while (index-- > 0) {
            const reference = createReference(file[index] as Content,)
            references.set(reference.english as PossibleEnglishName, reference,)
        }

        if (!isInProduction)
            console.info(
                '-------------------- "theme" has been loaded --------------------\n',
                references,
                '\n-------------------- "theme" has been loaded --------------------',
            )

        return this.#map = references
    }

}


interface Content
    extends LanguageContent, GameContentFrom1And2 {

    readonly isInCourseTheme: boolean
    readonly isInWorldTheme: boolean

    readonly isAvailableFromTheStart_SMM1: PossibleIsAvailableFromTheStart
    readonly effectInNightTheme: PossibleEffectInNightTheme

}

function createReference(content: Content,): CourseAndWorldTheme {
    const isInCourseTheme = content.isInCourseTheme
    const isInWorldTheme = content.isInWorldTheme

    const name = content.isInSuperMarioMaker1And3DS
        ? new NameFromContentBuilderContainer(content, 'all', true,).build()
        : new NameFromContentBuilderContainer(content, 2, true,).build()

    if (isInCourseTheme && isInWorldTheme)
        return createCourseAndWorldTheme(content, name,)
    if (isInCourseTheme)
        return new CourseOnlyThemeContainer(name, createCourseTheme(content, name,),)
    return new WorldOnlyThemeContainer(name, createWorldTheme(name,),)
}

function createCourseAndWorldTheme(content: Content, name: Name<string>,): CourseAndWorldTheme {
    return new CourseAndWorldThemeContainer(
        name,
        GamePropertyProvider.get.get(content.isInSuperMarioMaker1And3DS, content.isInSuperMarioMaker2,),
        ClassThatIsAvailableFromTheStartProvider.get.get(content.isAvailableFromTheStart_SMM1,),
        createCourseTheme(content, name,),
        createWorldTheme(name,),
    )
}

function createCourseTheme(content: Content, name: Name<string>,): CourseTheme {
    return new CourseThemeContainer(
        name,
        GamePropertyProvider.get.get(content.isInSuperMarioMaker1And3DS, content.isInSuperMarioMaker2,),
        ClassThatIsAvailableFromTheStartProvider.get.get(content.isAvailableFromTheStart_SMM1,),
        lazy(() => {
            const theme = Themes.CompanionEnum.get.getValueByName(name.english,)

            return Entities.CompanionEnum.get.values.map(it => it.reference,)
                .filter(reference => theme.get(reference,),)
                .toArray()
        },),
        NightEffects.CompanionEnum.get.getValueByName(content.effectInNightTheme,),
    )
}

function createWorldTheme(name: Name<string>,): WorldTheme {
    return new WorldThemeContainer(
        name,
        GamePropertyProvider.get.smm2Only,
        ClassThatIsAvailableFromTheStartProvider.get.get(null,),
    )
}
