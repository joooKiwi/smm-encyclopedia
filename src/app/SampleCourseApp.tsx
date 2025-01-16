import './SampleCourseApp.scss'

import type {CollectionHolder} from '@joookiwi/collection'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {ReactProperties}              from 'util/react/ReactProperties'

import {SampleCourseAppOption}          from 'app/options/SampleCourseAppOption'
import Table                            from 'app/tools/table/Table'
import UnfinishedText, {unfinishedText} from 'app/tools/text/UnfinishedText'
import AppTitle                         from 'app/util/AppTitle'
import CardList                         from 'app/util/CardList'
import List                             from 'app/util/List'
import PageTitle                        from 'app/util/PageTitle'
import PageViewChanger                  from 'app/util/PageViewChanger'
import SubMain                          from 'app/util/SubMain'
import LevelGameStyleAndTheme           from 'core/_component/LevelGameStyleAndTheme'
import {OtherWordInTheGames}            from 'core/otherWordInTheGame/OtherWordInTheGames'
import {SampleCourses}                  from 'core/sampleCourse/SampleCourses'
import DisplayButtonGroup               from 'display/DisplayButtonGroup'
import {ViewDisplays}                   from 'display/ViewDisplays'
import {gameContentTranslation}         from 'lang/components/translationMethods'
import NameComponent                    from 'lang/name/component/Name.component'
import {ArrayAsCollection}              from 'util/collection/ArrayAsCollection'

import ALL = SampleCourses.ALL

//region -------------------- Import from deconstruction --------------------

const {LIST, CARD,} = ViewDisplays
const {COURSE,} = OtherWordInTheGames

//endregion -------------------- Import from deconstruction --------------------

const all = new ArrayAsCollection(ALL,)

const items = all
const options = SampleCourseAppOption.CompanionEnum.get.values

/** @reactComponent */
export default function SampleCourseApp({viewDisplay,}: AppWithInterpreterProperties,) {
    const course = COURSE.singularNameOnReferenceOrNull ?? unfinishedText(COURSE.singularEnglishName,)
    const courseAsLowerCase = COURSE.singularLowerCaseNameOnReferenceOrNull ?? course.toLowerCase()

    return <SubMain partial-id="sampleCourse" viewDisplay={viewDisplay}>
        <AppTitle>{gameContentTranslation('sample course.all', {SingularName: course, singularName: courseAsLowerCase,},)}</AppTitle>
        <PageTitle value={gameContentTranslation('sample course.singular', {SingularName: course, singularName: courseAsLowerCase,},)}/>
        <PageViewChanger>
            <DisplayButtonGroup list="everySampleCourse (list)" card="everySampleCourse (card)" table="everySampleCourse (table)" current={viewDisplay}/>
        </PageViewChanger>
        <UnfinishedText type="paragraph" isHidden>sample course description</UnfinishedText>{/*TODO add description*/}
        <section id="sampleCourse-app-content" className="app-content">
            <SubContent viewDisplay={viewDisplay}/>
        </section>
    </SubMain>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay,}: AppWithInterpreterProperties,) {
    if (viewDisplay === LIST)
        return <SampleCourseList items={items}/>
    if (viewDisplay === CARD)
        return <SampleCourseCardList items={items}/>
    return <SampleCourseTable items={items}/>
}


interface SampleCourse_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<SampleCourses>

}

/** @reactComponent */
function SampleCourseList({items,}: SampleCourse_SubContentProperties,) {
    return <List partial-id="sampleCourse" items={items} withSeparator>{it => {
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
