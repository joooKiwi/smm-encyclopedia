import './SampleCourseApp.scss'

import type {Array}            from '@joookiwi/type'
import type {CollectionHolder} from '@joookiwi/collection'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {ViewAndRouteName}             from 'app/withInterpreter/ViewDisplays.types'
import type {ReactProperties}              from 'util/react/ReactProperties'

import SubMainContainer         from 'app/_SubMainContainer'
import {SampleCourseAppOption}  from 'app/options/SampleCourseAppOption'
import Table                    from 'app/tools/table/Table'
import {unfinishedText}         from 'app/tools/text/UnfinishedText'
import CardList                 from 'app/util/CardList'
import List                     from 'app/util/List'
import {ViewDisplays}           from 'app/withInterpreter/ViewDisplays'
import LevelGameStyleAndTheme   from 'core/_component/LevelGameStyleAndTheme'
import {OtherWordInTheGames}    from 'core/otherWordInTheGame/OtherWordInTheGames'
import {SampleCourses}          from 'core/sampleCourse/SampleCourses'
import {gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent            from 'lang/name/component/Name.component'
import {ArrayAsCollection}      from 'util/collection/ArrayAsCollection'

import ALL = SampleCourses.ALL

const {COURSE,} = OtherWordInTheGames
const all = new ArrayAsCollection(ALL,)

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everySampleCourse (list)',],
    [ViewDisplays.CARD_LIST, 'everySampleCourse (card)',],
    [ViewDisplays.TABLE, 'everySampleCourse (table)',],
] as const satisfies Array<ViewAndRouteName>
const items = all
const options = SampleCourseAppOption.CompanionEnum.get.values

/** @reactComponent */
export default function SampleCourseApp({viewDisplay,}: AppWithInterpreterProperties,) {
    const course = COURSE.singularNameOnReferenceOrNull ?? unfinishedText(COURSE.singularEnglishName,)
    const courseAsLowerCase = COURSE.singularLowerCaseNameOnReferenceOrNull ?? course.toLowerCase()

    return <SubMainContainer reactKey="sampleCourse" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('sample course.all', {SingularName: course, singularName: courseAsLowerCase,},)}>
        <SubContent viewDisplay={viewDisplay}/>
    </SubMainContainer>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay,}: AppWithInterpreterProperties,) {
    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SampleCourseList items={items}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <SampleCourseCardList items={items}/>
    return <SampleCourseTable items={items}/>
}


interface SampleCourse_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<SampleCourses>

}

/** @reactComponent */
function SampleCourseList({items,}: SampleCourse_SubContentProperties,) {
    return <List partialId="sampleCourse" items={items} withSeparator>{it => {
        const reference = it.reference
        return <div className="d-flex justify-content-between">
            <NameComponent id="sampleCourse-name" name={it.reference} popoverOrientation="right"/>
            <LevelGameStyleAndTheme gameStyle={reference.gameStyle} mainArea={reference.themeInMainArea} subArea={reference.themeInSubArea}/>
        </div>
    }}</List>
}

/** @reactComponent */
function SampleCourseCardList({items,}: SampleCourse_SubContentProperties,) {
    return <CardList partial-id="sampleCourse" items={items} default={1} small={2} large={4}>{it => {
        const reference = it.reference

        return <>
            <NameComponent id="sampleCourse-name" name={reference} popoverOrientation="left"/>
            <LevelGameStyleAndTheme gameStyle={reference.gameStyle} mainArea={reference.themeInMainArea} subArea={reference.themeInSubArea}/>
        </>
    }}</CardList>
}

/** @reactComponent */
function SampleCourseTable({items,}: SampleCourse_SubContentProperties,) {
    return <Table id="sampleCourse-table" items={items} options={options} caption={getCaption()} headersColor="info"/>
}

function getCaption() {
    const course = COURSE.singularNameOnReferenceOrNull ?? unfinishedText(COURSE.singularEnglishName,)
    const courseAsLowerCase = COURSE.singularLowerCaseNameOnReferenceOrNull ?? course.toLowerCase()
    return gameContentTranslation('sample course.all', {SingularName: course, singularName: courseAsLowerCase,},)
}

//endregion -------------------- Sub content --------------------
