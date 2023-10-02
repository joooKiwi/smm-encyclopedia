import file from 'resources/compiled/Theme.json'

import type {LanguageContent}                           from 'core/_template/LanguageContent'
import type {PossibleIsAvailableFromTheStart}           from 'core/availableFromTheStart/loader.types'
import type {GameContentFrom1And2}                      from 'core/game/Loader.types'
import type {CourseAndWorldTheme}                       from 'core/theme/CourseAndWorldTheme'
import type {PossibleEnglishName}                       from 'core/theme/Themes.types'
import type {PossibleEffectInNightTheme, ThemeTemplate} from 'core/theme/Theme.template'
import type {Loader}                                    from 'util/loader/Loader'

import {isInProduction}     from 'variables'
import * as TemplateMethods from 'core/_template/templateMethods'
import {ThemeCreator}       from 'core/theme/Theme.creator'

/** @singleton */
export class ThemeLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, CourseAndWorldTheme>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: ThemeLoader

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, CourseAndWorldTheme>

    public load(): ReadonlyMap<PossibleEnglishName, CourseAndWorldTheme> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, CourseAndWorldTheme>()

        file.map(it => new ThemeCreator(createTemplate(it as Content,),).create(),)
            .forEach(it => references.set(it.english as PossibleEnglishName, it,))

        if (!isInProduction)
            console.info(
                '-------------------- theme has been loaded --------------------\n',
                references,
                '\n-------------------- theme has been loaded --------------------',
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

function createTemplate(content: Content,): ThemeTemplate {
    return {
        is: {
            in: {
                game: TemplateMethods.createGameTemplateFrom1And2(content,),
                theme: {
                    course: content.isInCourseTheme,
                    world: content.isInWorldTheme,
                },
            },
            availableFromTheStart: content.isAvailableFromTheStart_SMM1,
        },
        effect: content.effectInNightTheme,
        name: TemplateMethods.createNameTemplate(content,),
    }
}
