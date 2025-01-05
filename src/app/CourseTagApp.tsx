import './CourseTagApp.scss'

import type {NullOrString}     from '@joookiwi/type'
import type {CollectionHolder} from '@joookiwi/collection'
import {Link}                  from 'react-router-dom'

import type {CourseTagAppProperties} from 'app/AppProperties.types'
import type {CourseTags}             from 'core/courseTag/CourseTags'
import type {PossibleRouteName}      from 'route/EveryRoutes.types'
import type {ReactProperties}        from 'util/react/ReactProperties'

import {CourseTagAppOption}                         from 'app/options/CourseTagAppOption'
import {CourseTagTypes}                             from 'app/property/CourseTagTypes'
import {unfinishedText}                             from 'app/tools/text/UnfinishedText'
import LinkButton                                   from 'app/tools/button/LinkButton'
import Table                                        from 'app/tools/table/Table'
import LinkText                                     from 'app/tools/text/LinkText'
import AppTitle                                     from 'app/util/AppTitle'
import CardList                                     from 'app/util/CardList'
import ContentBeingDisplayed                        from 'app/util/ContentBeingDisplayed'
import Description                                  from 'app/util/Description'
import List                                         from 'app/util/List'
import PageTitle                                    from 'app/util/PageTitle'
import PageViewChanger                              from 'app/util/PageViewChanger'
import SubMain                                      from 'app/util/SubMain'
import FirstAppearance                              from 'core/courseTag/component/FirstAppearance'
import {Games}                                      from 'core/game/Games'
import GameImage                                    from 'core/game/component/GameImage'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import DisplayButtonGroup                           from 'display/DisplayButtonGroup'
import {ViewDisplays}                               from 'display/ViewDisplays'
import {MAKER_CENTRAL_LEVEL_LINK}                   from 'external/MakerCentralLinks'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent                                from 'lang/name/component/Name.component'

import SMM2 = Games.SMM2

//region -------------------- Import from deconstruction --------------------

const {OFFICIAL, UNOFFICIAL, MAKER_CENTRAL,} = CourseTagTypes
const {COURSE, TAG,} = OtherWordInTheGames
const {LIST, CARD,} = ViewDisplays

//endregion -------------------- Import from deconstruction --------------------

const options = CourseTagAppOption.CompanionEnum.get.values

/** @reactComponent */
export default function CourseTagApp({viewDisplay, type,}: CourseTagAppProperties,) {
    const course = COURSE.singularNameOnReferenceOrNull ?? unfinishedText(COURSE.singularEnglishName,)
    const courseAsLowerCase = COURSE.singularLowerCaseNameOnReferenceOrNull ?? course.toLowerCase()
    const coursesAsLowerCase = COURSE.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(COURSE.pluralEnglishName,).toLowerCase()
    const tag = TAG.singularNameOnReference
    const tagAsLowerCase = TAG.singularLowerCaseNameOnReference
    const tagsAsLowerCase = TAG.pluralLowerCaseNameOnReference

    return <SubMain partial-id="courseTag" viewDisplay={viewDisplay}>
        <AppTitle>{gameContentTranslation('course tag.all', {course: courseAsLowerCase, courses: coursesAsLowerCase, tag: tagAsLowerCase, tags: tagsAsLowerCase,},)}</AppTitle>
        <PageTitle value={gameContentTranslation('course tag.singular', {Course: course, course: courseAsLowerCase, Tag: tag, tag: tagAsLowerCase,},)}/>
        <PageViewChanger>
            <CourseTagAsideContent type={type}/>
            <DisplayButtonGroup list={`${type.routeName} (list)`} card={`${type.routeName} (card)`} table={`${type.routeName} (table)`} current={viewDisplay}/>
        </PageViewChanger>
        <CourseTagDescription type={type} viewDisplay={viewDisplay}/>
        <section id="courseTag-app-content" className="app-content">
            <SubContent type={type} viewDisplay={viewDisplay}/>
        </section>
    </SubMain>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay, type,}: CourseTagAppProperties,) {
    const items = type.content

    if (viewDisplay === LIST)
        return <CourseTagList items={items}/>
    if (viewDisplay === CARD)
        return <CourseTagCardList items={items}/>
    return <CourseTagTable items={items}/>
}


interface CourseTag_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<CourseTags>

}

/** @reactComponent */
function CourseTagList({items,}: CourseTag_SubContentProperties,) {
    return <List partial-id="courseTag" items={items}>{({reference,},) =>
        <div className="d-flex">
            <NameComponent id="courseTag-name" name={reference} popoverOrientation="top"/>
            <FirstAppearance reference={reference}/>
        </div>
    }</List>
}

/** @reactComponent */
function CourseTagCardList({items,}: CourseTag_SubContentProperties,) {
    return <CardList partial-id="courseTag" items={items} default={1} small={2} medium={4} large={6}>{it => {
        const reference = it.reference
        const firstAppearance = reference.firstAppearance
        const makerCentralName = reference.makerCentralName

        return <>
            <NameComponent id="courseTag-name" name={reference} popoverOrientation="left"/>
            {firstAppearance == null ? null : <div><FirstAppearance reference={reference}/></div>}
            {makerCentralName == null ? null : <small lang="en">{unfinishedText(`MC: ${makerCentralName}`,)}</small>}
        </>
    }}</CardList>
}

/** @reactComponent */
function CourseTagTable({items,}: CourseTag_SubContentProperties,) {
    return <Table id="courseTag-table" items={items} options={options} caption={getCaption()} headersColor="info"/>
}

function getCaption() {
    const course = COURSE.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(COURSE.singularEnglishName,).toLowerCase()
    const courses = COURSE.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(COURSE.pluralEnglishName,).toLowerCase()
    const tag = TAG.singularLowerCaseNameOnReference
    const tags = TAG.pluralLowerCaseNameOnReference

    return gameContentTranslation('course tag.all', {
        course: course, courses: courses,
        tag: tag, tags: tags,
    },)
}

//endregion -------------------- Sub content --------------------
//region -------------------- Description content --------------------

interface CourseTagDescriptionProperties
    extends ReactProperties {

    readonly type: CourseTagTypes

    readonly viewDisplay: ViewDisplays

}

/** @reactComponent */
function CourseTagDescription({viewDisplay, type,}: CourseTagDescriptionProperties,) {
    const course = COURSE.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(COURSE.singularEnglishName,).toLowerCase()
    const courses = COURSE.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(COURSE.pluralEnglishName,).toLowerCase()
    const tag = TAG.singularLowerCaseNameOnReference
    const tags = TAG.pluralLowerCaseNameOnReference

    const officialLink = type === OFFICIAL ? null : type.officialRouteName satisfies NullOrString<PossibleRouteName>
    const unofficialLink = type === UNOFFICIAL ? null : type.unofficialRouteName satisfies NullOrString<PossibleRouteName>
    const makerCentralLink = type === MAKER_CENTRAL ? null : type.makerCentralRouteName satisfies NullOrString<PossibleRouteName>

    return <Description>
        <p>
            {gameContentTranslation(`course tag.description.intro page (${type.type})`, {
                official: <b key="official (singular)">{contentTranslation('Official.singular',).toLowerCase()}</b>,
                officials: <b key="official (plural)">{contentTranslation('Official.plural',).toLowerCase()}</b>,
                unofficial: <b key="unofficial (singular)">{contentTranslation('Unofficial.singular',).toLowerCase()}</b>,
                unofficials: <b key="unofficial (plural)">{contentTranslation('Unofficial.plural',).toLowerCase()}</b>,
                MakerCentralLink: <Link key="Maker Central link" to={MAKER_CENTRAL_LEVEL_LINK} id="makerCentralLink" className="link-primary fw-bold">Maker Central</Link>,
                course: course, courses: courses,
                tag: tag, tags: tags,
                smm2Image: <GameImage key="smm2 image" reference={SMM2}/>,
            },)}
            {gameContentTranslation('course tag.description.intro references', {
                course: course, courses: courses,
                officialLink: <LinkText key="official link (singular)" partial-id="officialLink" routeName={officialLink} color="primary">{contentTranslation('Official.singular',).toLowerCase()}</LinkText>,
                officialsLink: <LinkText key="official link (plural)" partial-id="officialLink" routeName={officialLink} color="primary">{contentTranslation('Official.plural',).toLowerCase()}</LinkText>,
                unofficialLink: <LinkText key="unofficial link (singular)" partial-id="unofficialLink" routeName={unofficialLink} color="primary">{contentTranslation('Unofficial.singular',).toLowerCase()}</LinkText>,
                unofficialsLink: <LinkText key="unofficial link (plural)" partial-id="unofficialLink" routeName={unofficialLink} color="primary">{contentTranslation('Unofficial.plural',).toLowerCase()}</LinkText>,
                MakerCentralLink: <LinkText key="Maker Central link" partial-id="makerCentralLink" routeName={makerCentralLink} color="primary">Maker Central</LinkText>,
            },)}
        </p>
        <ContentBeingDisplayed viewDisplay={viewDisplay} routeName={type.routeName}/>
    </Description>
}

//endregion -------------------- Description content --------------------
//region -------------------- Aside content --------------------

interface CourseTag_AsideContentProperties
    extends ReactProperties {

    readonly type: CourseTagTypes

}

/** @reactComponent */
function CourseTagAsideContent({type,}: CourseTag_AsideContentProperties,) {
    return <div id="courseTag-linkButtons-container" className="btn-group-vertical btn-group-sm">
        <LinkButton partial-id="everyCourseTag" routeName={type.allRouteName} color={type.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="courseTag-linkButton-officialAndUnofficial-container" className="btn-group btn-group-sm">
            <LinkButton partial-id="officialCourseTag" routeName={type.officialRouteName} color={type.officialColor}>{contentTranslation('Official.singular',)}</LinkButton>
            <LinkButton partial-id="unofficialCourseTag" routeName={type.unofficialRouteName} color={type.unofficialColor}>{contentTranslation('Unofficial.singular',)}</LinkButton>
        </div>
        <LinkButton partial-id="makerCentralCourseTag" routeName={type.makerCentralRouteName} color={type.makerCentralColor}>Maker Central</LinkButton>
    </div>
}

//endregion -------------------- Aside content --------------------
