import './OfficialCourseApp.scss'

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

class EventCourseAppInterpreter
    implements AppInterpreterWithTable<OfficialCourses, OfficialCourseAppOption> {

    public get content() {
        return OfficialCourses.CompanionEnum.get.values.toArray()
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

    public get tableOptions(): readonly OfficialCourseAppOption[] {
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
] as const satisfies readonly ViewAndRouteName[]
const titleContent = gameContentTranslation('official course.all', {
    singularName: OtherWordInTheGames.COURSE.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.COURSE.singularEnglishName,).toLowerCase(),
    pluralName: OtherWordInTheGames.COURSE.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.COURSE.pluralEnglishName,).toLowerCase(),
},)
const appInterpreter = new EventCourseAppInterpreter()

/** @reactComponent */
export default function OfficialCourseApp({viewDisplay,}: AppWithInterpreterProperties,) {
    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SubMainContainer reactKey="officialCourse" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                                 alert={<OfficialCourseAlertContent/>}>
            <SimpleList reactKey="officialCourse" interpreter={appInterpreter}/>
        </SubMainContainer>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <SubMainContainer reactKey="officialCourse" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                                 alert={<OfficialCourseAlertContent/>}>
            <CardList reactKey="officialCourse" interpreter={appInterpreter}/>
        </SubMainContainer>
    return <SubMainContainer reactKey="officialCourse" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                             alert={<OfficialCourseAlertContent/>}>
        <Table id="officialCourse-table" interpreter={appInterpreter}/>
    </SubMainContainer>
}

/** @reactComponent */
function OfficialCourseAlertContent() {
    return <div className="container-md alert alert-danger" role="alert">
        <small className="fst-italic text-body-secondary">(Due to a specific condition, this warning will not be translated)</small>
        <p>
            <span>Some data are missing and cannot be retrieved from me personally since I only have an american account and the levels are not inside the game. </span>
            <br className="d-none d-xl-block"/>
            <span>They are only from Nintendo server. </span>
            <br className="d-none d-lg-block"/>
            <span>So, please, help us complete the missing data from <a href="https://discord.gg/r8AGYXtExy">Geitje</a>, <a href="https://discord.gg/UZTJxHM">Psycrow</a> or <a href="https://discord.gg/kEnbJ9GDtZ">my</a> <span className="bi bi-discord">Discord</span> server. </span>
            <br className="d-none d-lg-block"/>
            <span>Don't hesitate to <em>ping me</em> on <span className="bi bi-discord">Discord</span> if you have any informations regarding the official levels.</span>
        </p>
        <p>
            <span>We have until <strong className="text-decoration-underline">April 2024</strong> to play to Super Mario Maker with its online functionality. </span>
            <br className="d-none d-md-block"/>
            <span>The missing data are mostly from the European game, but also in the Japanese version. </span>
            <br className="d-none d-md-block"/>
            <span>The things we need is the levels <em>(for those that we can retrieve)</em> is the level title with its description. </span>
            <br className="d-none d-lg-block"/>
            <span>It can be a screenshot or a video in order to complete the informations.</span>
        </p>
        <p>
            <span>Most of the missing translations don't have <em>(for the most part)</em> the title, but none of them have any description from within the game. </span>
            <br className="d-none d-xl-block"/>
            <span>They are in <span className="text-decoration-line-through">american english, french and spanish</span>, european english, french and spanish, german, italian, dutch, portuguese, russian and finally japanese.</span>
        </p>
    </div>
}
