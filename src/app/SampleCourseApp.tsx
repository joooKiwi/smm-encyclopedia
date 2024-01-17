import type {AppInterpreterWithTable} from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'
import type {PossibleRouteName}       from 'route/EveryRoutes.types'

import {SampleCourseAppOption}  from 'app/options/SampleCourseAppOption'
import {unfinishedText}         from 'app/tools/text/UnfinishedText'
import {AbstractTableApp}       from 'app/withInterpreter/AbstractTableApp'
import {OtherWordInTheGames}    from 'core/otherWordInTheGame/OtherWordInTheGames'
import {SampleCourses}          from 'core/sampleCourse/SampleCourses'
import {gameContentTranslation} from 'lang/components/translationMethods'

//region -------------------- Deconstruction imports --------------------

const {COURSE,} = OtherWordInTheGames

//endregion -------------------- Deconstruction imports --------------------

export default class SampleCourseApp
    extends AbstractTableApp<SampleCourses, AppInterpreterWithTable<SampleCourses>> {

    //region -------------------- Create methods --------------------

    protected override _createKey(): string {
        return 'sampleCourse'
    }


    protected override _createSimpleListRouteName(): PossibleRouteName {
        return 'everySampleCourse (list)'
    }

    protected override _createCardListRouteName(): PossibleRouteName {
        return 'everySampleCourse (card)'
    }

    protected override _createTableRouteName(): PossibleRouteName {
        return 'everySampleCourse (table)'
    }


    protected override _createTitleContent(): ReactElementOrString {
        const singularCourseName = COURSE.singularNameOnReferenceOrNull ?? unfinishedText(COURSE.singularEnglishName), singularCourseLowerCaseName = COURSE.singularLowerCaseNameOnReferenceOrNull ?? singularCourseName.toLowerCase()
        return gameContentTranslation('sample course.all', {SingularName: singularCourseName, singularName: singularCourseLowerCaseName,},)
    }


    protected override _createAppOptionInterpreter() {
        return new class SampleCourseInterpreter implements AppInterpreterWithTable<SampleCourses, SampleCourseAppOption> {

            public get content() {
                return SampleCourses.CompanionEnum.get.values.toArray()
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): DimensionOnList {
                return {
                    default: 1,
                    small: 2,
                    medium: 4,
                }
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension() {
                return this.createListDimension()
            }

            public createCardListContent(enumerable: SampleCourses,) {
                return <></>//TODO add card list content
            }

            //endregion -------------------- Card list interpreter --------------------
            //region -------------------- Table interpreter --------------------

            public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor
            public readonly tableColor = 'primary' satisfies BootstrapThemeColor

            public get tableCaption() {
                const singularCourseName = COURSE.singularNameOnReferenceOrNull ?? unfinishedText(COURSE.singularEnglishName), singularCourseLowerCaseName = COURSE.singularLowerCaseNameOnReferenceOrNull ?? singularCourseName.toLowerCase()
                return gameContentTranslation('sample course.all', {SingularName: singularCourseName, singularName: singularCourseLowerCaseName,},) satisfies ReactElementOrString
            }

            public get tableOptions(): readonly SampleCourseAppOption[] {
                return [
                    SampleCourseAppOption.NUMBER,
                    SampleCourseAppOption.NAME,
                    SampleCourseAppOption.GAME_STYLE_AND_AREAS,
                    SampleCourseAppOption.TIME,
                ]
            }

            public createTableContent(content: SampleCourses, option: SampleCourseAppOption,) {
                return option.renderContent(content,)
            }

            public createTableHeader(option: SampleCourseAppOption,) {
                return option.renderTableHeader()
            }

            //endregion -------------------- Table interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}
