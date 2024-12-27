import 'app/_GameAsideContent.scss'
import './ThemeApp.scss'

import type {CollectionHolder} from '@joookiwi/collection'

import type {ThemeAppProperties}      from 'app/AppProperties.types'
import type {Themes}                  from 'core/theme/Themes'
import type {GameCollection}          from 'util/collection/GameCollection'
import type {ReactProperties}         from 'util/react/ReactProperties'

import {CommonOptions}                                   from 'app/options/CommonOptions'
import {ThemeAppOption}                                  from 'app/options/ThemeAppOption'
import {COURSE_THEME_IMAGE_FILE, WORLD_THEME_IMAGE_FILE} from 'app/options/file/themeImageFiles'
import {ThemeGames}                                      from 'app/property/ThemeGames'
import {ThemeTypes}                                      from 'app/property/ThemeTypes'
import LinkButton                                        from 'app/tools/button/LinkButton'
import Image                                             from 'app/tools/images/Image'
import UnfinishedText                                    from 'app/tools/text/UnfinishedText'
import Table                                             from 'app/tools/table/Table'
import CardList                                          from 'app/util/CardList'
import List                                              from 'app/util/List'
import AppTitle                                          from 'app/util/PageTitle'
import PageViewChanger                                   from 'app/util/PageViewChanger'
import SubMain                                           from 'app/util/SubMain'
import {Games}                                           from 'core/game/Games'
import GameImage                                         from 'core/game/component/GameImage'
import EndlessMarioImage                                 from 'core/theme/component/EndlessMarioImage'
import ThemeImage                                        from 'core/theme/component/ThemeImage'
import ThemeTypeImages                                   from 'core/theme/component/ThemeTypeImages'
import DisplayButtonGroup                                from 'display/DisplayButtonGroup'
import {ViewDisplays}                                    from 'display/ViewDisplays'
import {contentTranslation, gameContentTranslation}      from 'lang/components/translationMethods'
import NameComponent                                     from 'lang/name/component/Name.component'

import SMM1 =   Games.SMM1
import SMM2 =   Games.SMM2
import SMM3DS = Games.SMM3DS

//region -------------------- Import from deconstruction --------------------

const {LIST, CARD,} = ViewDisplays

//endregion -------------------- Import from deconstruction --------------------

const options = ThemeAppOption.CompanionEnum.get.values

/** @reactComponent */
export default function ThemeApp({viewDisplay, type, games,}: ThemeAppProperties,) {
    const routeName = type.routeName

    return <SubMain partial-id="theme" viewDisplay={viewDisplay}>
        <AppTitle>{gameContentTranslation('theme.all.all',)}</AppTitle>
        <PageViewChanger>
            <TypeAsideContent type={type}/>
            <GameAsideContent type={type} games={games}/>
            <DisplayButtonGroup list={`${routeName} (list)`} card={`${routeName} (card)`} table={`${routeName} (table)`} current={viewDisplay}/>
        </PageViewChanger>
        <UnfinishedText type="paragraph" isHidden>theme description</UnfinishedText>
        <section id="theme-app-content" className="app-content">
            <SubContent viewDisplay={viewDisplay} type={type} games={games}/>
        </section>
    </SubMain>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay, type, games,}: Omit<ThemeAppProperties, | 'gameStyles' | 'times'>,) {
    const items = type.content.filter(({reference,},) =>
        games.hasAnyIn(reference,),)

    if (viewDisplay === LIST)
        return <ThemeList items={items}/>
    if (viewDisplay === CARD)
        return <ThemeCardList items={items} type={type}/>
    return <ThemeTable items={items}/>
}


interface Theme_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<Themes>

    readonly type: ThemeTypes

}

/** @reactComponent */
function ThemeList({items,}: Pick<Theme_SubContentProperties, 'items'>,) {
    return <List partial-id="theme" items={items} withSeparator>{it =>
        <div className="d-flex justify-content-between align-items-center">
            <NameComponent id="theme-name" name={it.reference} popoverOrientation="right"/>
            <div className="images-container ms-1">
                <ThemeImage reference={it}/>
                <ThemeTypeImages reference={it}/>
                <EndlessMarioImage reference={it}/>
            </div>
        </div>
    }</List>
}

/** @reactComponent */
function ThemeCardList({items, type,}: Theme_SubContentProperties,){
    if (type === ThemeTypes.COURSE)
        return <CardList partial-id="courseTheme" items={items} default={1} small={2} medium={5}>{it =>
            <>
                <NameComponent id="course-theme-name" name={it.reference} popoverOrientation="left"/>
                {CommonOptions.get.getGameContent(it,)}
                <div className="d-flex flex-row flex-md-column flex-lg-row">
                    <ThemeImage reference={it} isSmallPath/>
                    <EndlessMarioImage reference={it}/>
                </div>
            </>
        }</CardList>

    if (type === ThemeTypes.WORLD)
        return <CardList partial-id="worldTheme" items={items} default={1} small={2} medium={4}>{it =>
            <>
                <NameComponent id="world-theme-name" name={it.reference} popoverOrientation="left"/>
                {CommonOptions.get.getGameContent(it,)}
                <ThemeImage reference={it} isSmallPath/>
            </>
        }</CardList>

    return <CardList partial-id="theme" items={items} default={1} small={2} medium={3} large={4} extra-extra-large={6}>{it =>
        <>
            <NameComponent id="theme-name" name={it.reference} popoverOrientation="left"/>
            <div className="d-flex align-items-center justify-content-between">
                <div className="col-2">{CommonOptions.get.getGameContent(it,)}</div>
                <div className="col-7 d-flex flex-row flex-sm-column align-items-center justify-content-center">
                    <ThemeImage reference={it} isSmallPath/>
                    <EndlessMarioImage reference={it}/>
                </div>
                <div className="col-2"><ThemeTypeImages reference={it}/></div>
            </div>
        </>
    }</CardList>
}

/** @reactComponent */
function ThemeTable({items,}: Pick<Theme_SubContentProperties, 'items'>,) {
    return <Table id="theme-table" items={items} options={options} caption={gameContentTranslation('theme.all.all',)} headersColor="info"/>
}

//endregion -------------------- Sub content --------------------
//region -------------------- Aside content --------------------

interface ThemeAsideContentProperties
    extends ReactProperties {

    readonly type: ThemeTypes

    readonly games: GameCollection

}

/** @reactComponent */
function TypeAsideContent({type,}: Pick<ThemeAsideContentProperties, 'type'>,) {
    return <div id="theme-linkButton-container" className="btn-group-vertical btn-group-sm">
        <LinkButton partial-id="allTheme" routeName={type.allRouteName} color={type.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="theme-linkButton-courseAndWorld-container" className="btn-group btn-group-sm">
            <LinkButton partial-id="courseTheme" routeName={type.courseRouteName} color={type.courseColor}>
                <Image id="courseTheme-button-image" file={COURSE_THEME_IMAGE_FILE} className="theme-button-image"/>
            </LinkButton>
            <LinkButton partial-id="worldTheme" routeName={type.worldRouteName} color={type.worldColor}>
                <Image id="worldTheme-button-image" file={WORLD_THEME_IMAGE_FILE} className="theme-button-image"/>
            </LinkButton>
        </div>
    </div>
}

/** @reactComponent */
function GameAsideContent({type, games,}: ThemeAsideContentProperties,) {
    const themeGame = games.hasSmm2
        ? ThemeGames.SUPER_MARIO_MAKER_2
        : ThemeGames.SUPER_MARIO_MAKER_OR_SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    return <div id="theme-gamesButton-singularGame-container" className="gameAsideContent-container btn-group btn-group-sm">
        <LinkButton partial-id="smm1Or3dsGame" routeName={themeGame.getSmm1Or3dsRouteName(type,)} color={themeGame.smm1Or3dsColor}>
            <GameImage reference={SMM1}/>
            <GameImage reference={SMM3DS}/>
        </LinkButton>
        <LinkButton partial-id="smm2Game" routeName={themeGame.getSmm2RouteName(type,)} color={themeGame.smm2Color}>
            <GameImage reference={SMM2}/>
        </LinkButton>
    </div>
}

//endregion -------------------- Aside content --------------------
