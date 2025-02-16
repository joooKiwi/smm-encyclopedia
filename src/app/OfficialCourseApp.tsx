import './OfficialCourseApp.scss'

import type {CollectionHolder} from '@joookiwi/collection'

import type {AppProperties}   from 'app/AppProperties.types'
import type {ReactProperties} from 'util/react/ReactProperties'

import {OfficialCourseAppOption}        from 'app/options/OfficialCourseAppOption'
import Table                            from 'app/tools/table/Table'
import UnfinishedText, {unfinishedText} from 'app/tools/text/UnfinishedText'
import AppTitle                         from 'app/util/AppTitle'
import CardList                         from 'app/util/CardList'
import List                             from 'app/util/List'
import PageTitle                        from 'app/util/PageTitle'
import PageViewChanger                  from 'app/util/PageViewChanger'
import SubMain                          from 'app/util/SubMain'
import LevelGameStyleAndTheme           from 'core/_component/LevelGameStyleAndTheme'
import {OfficialCourses}                from 'core/officialCourse/OfficialCourses'
import OfficialCourseAvailability       from 'core/officialCourse/component/OfficialCourseAvailability'
import OfficialCourseReward             from 'core/officialCourse/component/OfficialCourseReward'
import {OtherWordInTheGames}            from 'core/otherWordInTheGame/OtherWordInTheGames'
import DisplayButtonGroup               from 'display/DisplayButtonGroup'
import {ViewDisplays}                   from 'display/ViewDisplays'
import {gameContentTranslation}         from 'lang/components/translationMethods'
import NameComponent                    from 'lang/name/component/Name.component'
import {ArrayAsCollection}              from 'util/collection/ArrayAsCollection'

import ALL = OfficialCourses.ALL

//region -------------------- Import from deconstruction --------------------

const {COURSE,} = OtherWordInTheGames
const {LIST, CARD,} = ViewDisplays

//endregion -------------------- Import from deconstruction --------------------

const all = new ArrayAsCollection(ALL,)

const items = all
const options = OfficialCourseAppOption.CompanionEnum.get.values

type OfficialCourseAppProperties = AppProperties

/** @reactComponent */
export default function OfficialCourseApp({viewDisplay,}: OfficialCourseAppProperties,) {
    const course = COURSE.singularNameOnReferenceOrNull ?? unfinishedText(COURSE.singularEnglishName,)
    const courseAsLowerCase = COURSE.singularLowerCaseNameOnReferenceOrNull ?? course.toLowerCase()
    const coursesAsLowerCase = COURSE.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(COURSE.pluralEnglishName.toLowerCase(),)

    return <SubMain partial-id="officialCourse" viewDisplay={viewDisplay}>
        <AppTitle>{gameContentTranslation('official course.all', {singularName: courseAsLowerCase, pluralName: coursesAsLowerCase,},)}</AppTitle>
        <PageTitle value={gameContentTranslation('official course.singular', {singularName: courseAsLowerCase, SingularName: course,})}/>
        <PageViewChanger>
            <DisplayButtonGroup list="everyOfficialCourse (list)" card="everyOfficialCourse (card)" table="everyOfficialCourse (table)" current={viewDisplay}/>
        </PageViewChanger>
        <UnfinishedText type="paragraph" isHidden>Official course description</UnfinishedText>{/*TODO add description*/}
        <section id="officialCourse-app-content" className="app-content">
            <SubContent viewDisplay={viewDisplay}/>
        </section>
    </SubMain>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay,}: Pick<OfficialCourseAppProperties, 'viewDisplay'>,) {
    if (viewDisplay === LIST)
        return <OfficialCourseList items={items}/>
    if (viewDisplay === CARD)
        return <OfficialCourseCardList items={items}/>
    return <OfficialCourseTable items={items}/>
}


interface OfficialCourse_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<OfficialCourses>

}

/** @reactComponent */
function OfficialCourseList({items,}: OfficialCourse_SubContentProperties,) {
    return <List partial-id="officialCourse" items={items} withSeparator>{it => {
        const reference = it.reference
        return <div className="d-flex justify-content-between">
            <NameComponent id="officialCourse-name" name={reference} popoverOrientation="right"/>
            <div className="d-flex">
                <OfficialCourseReward reference={it}/>
                <LevelGameStyleAndTheme gameStyle={reference.gameStyle} mainArea={reference.courseThemeInTheMainArea} subArea={reference.courseThemeInTheSubArea}/>
            </div>
        </div>
    }}</List>
}

/** @reactComponent */
function OfficialCourseCardList({items}: OfficialCourse_SubContentProperties,) {
    return <CardList partial-id="offialCourse" items={items} default={1} small={2} large={3} extra-large={4}>{it => {
        const reference = it.reference

        return <>
            <NameComponent id="officialCourse-name" name={reference} popoverOrientation="left"/>
            <OfficialCourseReward reference={it}/>
            <LevelGameStyleAndTheme gameStyle={reference.gameStyle} mainArea={reference.courseThemeInTheMainArea} subArea={reference.courseThemeInTheSubArea}/>
            <small className="text-body-secondary fst-italic"><OfficialCourseAvailability reference={it}/></small>
        </>
    }}</CardList>
}

/** @reactComponent */
function OfficialCourseTable({items,}: OfficialCourse_SubContentProperties,) {
    return <Table id="officialCourse-table" items={items} options={options} caption={getCaption()} headersColor="info"/>
}

function getCaption() {
    const course = COURSE.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(COURSE.singularEnglishName.toLowerCase(),)
    const courses = COURSE.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(COURSE.pluralEnglishName.toLowerCase(),)

    return gameContentTranslation('official course.all', {singularName: course, pluralName: courses,},)
}

//endregion -------------------- Sub content --------------------
