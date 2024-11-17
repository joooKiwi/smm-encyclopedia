import './OfficialCourseApp.scss'

import type {Array}              from '@joookiwi/type'
import {GenericCollectionHolder} from '@joookiwi/collection'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppInterpreterWithTable}      from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'

import SubMainContainer          from 'app/_SubMainContainer'
import {OfficialCourseAppOption} from 'app/options/OfficialCourseAppOption'
import Table                     from 'app/tools/table/Table'
import {unfinishedText}          from 'app/tools/text/UnfinishedText'
import CardList                  from 'app/withInterpreter/CardList'
import SimpleList                from 'app/withInterpreter/SimpleList'
import {ViewDisplays}            from 'app/withInterpreter/ViewDisplays'
import {OfficialCourses}         from 'core/officialCourse/OfficialCourses'
import {OtherWordInTheGames}     from 'core/otherWordInTheGame/OtherWordInTheGames'
import {gameContentTranslation}  from 'lang/components/translationMethods'

import ALL = OfficialCourses.ALL

class EventCourseAppInterpreter
    implements AppInterpreterWithTable<OfficialCourses, OfficialCourseAppOption> {

    public get content() {
        return new GenericCollectionHolder(ALL,)
    }

    //region -------------------- List interpreter --------------------

    public createListDimension(): DimensionOnList {
        return {
            default: 1,
            small: 2,
            medium: 3,
            large: 4,
            extraLarge: 5,
            extraExtraLarge: 6,
        }
    }

    //endregion -------------------- List interpreter --------------------
    //region -------------------- Card list interpreter --------------------

    public createCardListDimension(): DimensionOnList {
        return {
            default: 1,
            small: 2,
            large: 3,
            extraLarge: 4,
        }
    }

    public createCardListContent(enumerable: OfficialCourses,) {
        return <div className="text-center">
            {OfficialCourseAppOption.REWARD.renderContent(enumerable,)}
            <div className="w-100"/>
            <small className="text-body-secondary fst-italic">{OfficialCourseAppOption.AVAILABILITY.renderContent(enumerable,)}</small>
        </div>
    }

    //endregion -------------------- Card list interpreter --------------------
    //region -------------------- Table interpreter --------------------

    public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor
    public readonly tableCaption = gameContentTranslation('official course.all', {
        singularName: OtherWordInTheGames.COURSE.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.COURSE.singularEnglishName,).toLowerCase(),
        pluralName: OtherWordInTheGames.COURSE.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.COURSE.pluralEnglishName,).toLowerCase(),
    },) satisfies ReactElementOrString

    public get tableOptions(): Array<OfficialCourseAppOption> {
        return [
            OfficialCourseAppOption.REWARD,
            OfficialCourseAppOption.NAME,
            OfficialCourseAppOption.DESCRIPTION,
            OfficialCourseAppOption.GAME_STYLE_AND_THEMES,
            OfficialCourseAppOption.TIME,
            OfficialCourseAppOption.AVAILABILITY,
        ]
    }

    public getAdditionalClass(option: OfficialCourseAppOption,) {
        return option.additionalClasses
    }

    public createTableContent(content: OfficialCourses, option: OfficialCourseAppOption,) {
        return option.renderContent(content,)
    }

    public createTableHeader(option: OfficialCourseAppOption,) {
        return option.renderTableHeader()
    }


    //endregion -------------------- Table interpreter --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyOfficialCourse (list)',],
    [ViewDisplays.CARD_LIST, 'everyOfficialCourse (card)',],
    [ViewDisplays.TABLE, 'everyOfficialCourse (table)',],
] as const satisfies Array<ViewAndRouteName>
const appInterpreter = new EventCourseAppInterpreter()

/** @reactComponent */
export default function OfficialCourseApp({viewDisplay,}: AppWithInterpreterProperties,) {
    const course = OtherWordInTheGames.COURSE.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.COURSE.singularEnglishName.toLowerCase(),)
    const courses = OtherWordInTheGames.COURSE.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.COURSE.pluralEnglishName.toLowerCase(),)

    return <SubMainContainer reactKey="officialCourse" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('official course.all', {singularName: course, pluralName: courses,},)}>
        <SubContent viewDisplay={viewDisplay}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay,}: AppWithInterpreterProperties,) {
    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SimpleList reactKey="officialCourse" interpreter={appInterpreter}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="officialCourse" interpreter={appInterpreter}/>
    return <Table id="officialCourse-table" interpreter={appInterpreter}/>
}
