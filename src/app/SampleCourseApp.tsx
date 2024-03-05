import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppInterpreterWithTable}      from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'

import SubMainContainer         from 'app/_SubMainContainer'
import {SampleCourseAppOption}  from 'app/options/SampleCourseAppOption'
import Table                    from 'app/tools/table/Table'
import {unfinishedText}         from 'app/tools/text/UnfinishedText'
import CardList                 from 'app/withInterpreter/CardList'
import SimpleList               from 'app/withInterpreter/SimpleList'
import {ViewDisplays}           from 'app/withInterpreter/ViewDisplays'
import {OtherWordInTheGames}    from 'core/otherWordInTheGame/OtherWordInTheGames'
import {SampleCourses}          from 'core/sampleCourse/SampleCourses'
import {gameContentTranslation} from 'lang/components/translationMethods'

class SampleCourseInterpreter
    implements AppInterpreterWithTable<SampleCourses, SampleCourseAppOption> {

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
        const singularCourseName = OtherWordInTheGames.COURSE.singularNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.COURSE.singularEnglishName,)
        const singularCourseLowerCaseName = OtherWordInTheGames.COURSE.singularLowerCaseNameOnReferenceOrNull ?? singularCourseName.toLowerCase()
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

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everySampleCourse (list)',],
    [ViewDisplays.CARD_LIST, 'everySampleCourse (card)',],
    [ViewDisplays.TABLE, 'everySampleCourse (table)',],
] as const satisfies readonly ViewAndRouteName[]
const appInterpreter = new SampleCourseInterpreter()

/** @reactComponent */
export default function SampleCourseApp({viewDisplay,}: AppWithInterpreterProperties,) {
    const course = OtherWordInTheGames.COURSE.singularNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.COURSE.singularEnglishName,)
    const courseAsLowerCase = OtherWordInTheGames.COURSE.singularLowerCaseNameOnReferenceOrNull ?? course.toLowerCase()

    const titleContent = gameContentTranslation('sample course.all', {SingularName: course, singularName: courseAsLowerCase,},)

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SubMainContainer reactKey="sampleCourse" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}>
            <SimpleList reactKey="sampleCourse" interpreter={appInterpreter}/>
        </SubMainContainer>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <SubMainContainer reactKey="sampleCourse" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}>
            <CardList reactKey="sampleCourse" interpreter={appInterpreter}/>
        </SubMainContainer>
    return <SubMainContainer reactKey="sampleCourse" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}>
        <Table id="sampleCourse-table" interpreter={appInterpreter}/>
    </SubMainContainer>
}
