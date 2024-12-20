import './SampleCourseApp.scss'

import type {Array}              from '@joookiwi/type'
import type {CollectionHolder}   from '@joookiwi/collection'
import {GenericCollectionHolder} from '@joookiwi/collection'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppInterpreterWithTable}      from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {ReactProperties}              from 'util/react/ReactProperties'

import SubMainContainer         from 'app/_SubMainContainer'
import {SampleCourseAppOption}  from 'app/options/SampleCourseAppOption'
import Table                    from 'app/tools/table/Table'
import {unfinishedText}         from 'app/tools/text/UnfinishedText'
import List                     from 'app/util/List'
import CardList                 from 'app/withInterpreter/CardList'
import {ViewDisplays}           from 'app/withInterpreter/ViewDisplays'
import LevelGameStyleAndTheme   from 'core/_component/LevelGameStyleAndTheme'
import {OtherWordInTheGames}    from 'core/otherWordInTheGame/OtherWordInTheGames'
import {SampleCourses}          from 'core/sampleCourse/SampleCourses'
import {gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent            from 'lang/name/component/Name.component'

import ALL = SampleCourses.ALL

class SampleCourseInterpreter
    implements AppInterpreterWithTable<SampleCourses, SampleCourseAppOption> {

    public get content() {
        return new GenericCollectionHolder(ALL,)
    }

    //region -------------------- Card list interpreter --------------------

    public createCardListDimension() {
        return {
            default: 1,
            small: 2,
            medium: 4,
        } as const satisfies DimensionOnList
    }

    public createCardListContent({reference,}: SampleCourses,) {
        return <LevelGameStyleAndTheme gameStyle={reference.gameStyle} mainArea={reference.themeInMainArea} subArea={reference.themeInSubArea}/>
    }

    //endregion -------------------- Card list interpreter --------------------
    //region -------------------- Table interpreter --------------------

    public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor

    public get tableCaption() {
        const course = OtherWordInTheGames.COURSE.singularNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.COURSE.singularEnglishName,)
        const courseAsLowerCase = OtherWordInTheGames.COURSE.singularLowerCaseNameOnReferenceOrNull ?? course.toLowerCase()
        return gameContentTranslation('sample course.all', {SingularName: course, singularName: courseAsLowerCase,},) satisfies ReactElementOrString
    }

    public get tableOptions(): Array<SampleCourseAppOption> {
        return [
            SampleCourseAppOption.LEVEL_NUMBER,
            SampleCourseAppOption.NAME,
            SampleCourseAppOption.GAME_STYLE_AND_AREAS,
            SampleCourseAppOption.TIME,
        ]
    }

    public getAdditionalClass(option: SampleCourseAppOption,) {
        return option.additionalClasses
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
] as const satisfies Array<ViewAndRouteName>
const appInterpreter = new SampleCourseInterpreter()

/** @reactComponent */
export default function SampleCourseApp({viewDisplay,}: AppWithInterpreterProperties,) {
    const course = OtherWordInTheGames.COURSE.singularNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.COURSE.singularEnglishName,)
    const courseAsLowerCase = OtherWordInTheGames.COURSE.singularLowerCaseNameOnReferenceOrNull ?? course.toLowerCase()

    return <SubMainContainer reactKey="sampleCourse" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('sample course.all', {SingularName: course, singularName: courseAsLowerCase,},)}>
        <SubContent viewDisplay={viewDisplay}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay,}: AppWithInterpreterProperties,) {
    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SampleCourseList items={appInterpreter.content}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="sampleCourse" interpreter={appInterpreter}/>
    return <Table id="sampleCourse-table" interpreter={appInterpreter}/>
}

//region -------------------- List --------------------

interface SampleCourse_ListProperties
    extends ReactProperties {

    readonly items: CollectionHolder<SampleCourses>

}

/** @reactComponent */
function SampleCourseList({items,}: SampleCourse_ListProperties,) {
    return <List partialId="sampleCourse" items={items} withSeparator>{it => {
        const reference = it.reference
        return <div className="d-flex justify-content-between">
            <NameComponent id="sampleCourse-name" name={it.reference} popoverOrientation="right"/>
            <LevelGameStyleAndTheme gameStyle={reference.gameStyle} mainArea={reference.themeInMainArea} subArea={reference.themeInSubArea}/>
        </div>
    }}</List>
}

//endregion -------------------- List --------------------
