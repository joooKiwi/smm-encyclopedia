import 'app/_GameAsideContent.scss'
import './ThemeApp.scss'

import type {Array}            from '@joookiwi/type'
import type {CollectionHolder} from '@joookiwi/collection'

import type {ThemeAppProperties}      from 'app/AppProperties.types'
import type {AppInterpreterWithTable} from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}        from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {Themes}                  from 'core/theme/Themes'
import type {GameCollection}          from 'util/collection/GameCollection'
import type {ReactProperties}         from 'util/react/ReactProperties'

import SubMainContainer                                  from 'app/_SubMainContainer'
import {CommonOptions}                                   from 'app/options/CommonOptions'
import {ThemeAppOption}                                  from 'app/options/ThemeAppOption'
import {COURSE_THEME_IMAGE_FILE, WORLD_THEME_IMAGE_FILE} from 'app/options/file/themeImageFiles'
import {ThemeGames}                                      from 'app/property/ThemeGames'
import {ThemeTypes}                                      from 'app/property/ThemeTypes'
import LinkButton                                        from 'app/tools/button/LinkButton'
import Image                                             from 'app/tools/images/Image'
import Table                                             from 'app/tools/table/Table'
import List                                              from 'app/util/List'
import CardList                                          from 'app/withInterpreter/CardList'
import {ViewDisplays}                                    from 'app/withInterpreter/ViewDisplays'
import {Games}                                           from 'core/game/Games'
import GameImage                                         from 'core/game/component/GameImage'
import EndlessMarioImage                                 from 'core/theme/component/EndlessMarioImage'
import ThemeImage                                        from 'core/theme/component/ThemeImage'
import ThemeTypeImages                                   from 'core/theme/component/ThemeTypeImages'
import {contentTranslation, gameContentTranslation}      from 'lang/components/translationMethods'
import NameComponent                                     from 'lang/name/component/Name.component'
import {ArrayAsCollection}                               from 'util/collection/ArrayAsCollection'

import SMM1 =   Games.SMM1
import SMM2 =   Games.SMM2
import SMM3DS = Games.SMM3DS

class ThemeAppInterpreter
    implements AppInterpreterWithTable<Themes, ThemeAppOption> {

    //region -------------------- Fields --------------------

    readonly #type
    readonly #games

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(type: ThemeTypes, games: GameCollection,) {
        this.#type = type
        this.#games = games
    }

    //endregion -------------------- Constructor --------------------

    public get content() {
        const games = this.#games
        return new ArrayAsCollection(this.#type.content,).filter(({reference,},) =>
            games.hasAnyIn(reference,),)
    }

    //region -------------------- Card --------------------

    public createCardListDimension() {
        const type = this.#type
        if (type === ThemeTypes.COURSE)
            return {
                default: 1,
                small: 2,
                medium: 5,
            } as const satisfies DimensionOnList
        if (type === ThemeTypes.WORLD)
            return {
                default: 1,
                small: 2,
                medium: 4,
            } as const satisfies DimensionOnList
        return {
            default: 1,
            small: 2,
            medium: 3,
            large: 4,
            extraLarge: 6,
        } as const satisfies DimensionOnList
    }

    public createCardListContent(enumerable: Themes,) {
        return <div className="card-body" id={`theme-${enumerable.englishNameInHtml}`}>
            <div className="col-2">{CommonOptions.get.getGameContent(enumerable,)}</div>
            <div className="images-container col-7">
                <ThemeImage reference={enumerable} isSmallPath/>
                <EndlessMarioImage reference={enumerable}/>
            </div>
            <div className="col-2"><ThemeTypeImages reference={enumerable}/></div>
        </div>
    }

    //endregion -------------------- Card  --------------------

}

const options = ThemeAppOption.CompanionEnum.get.values

/** @reactComponent */
export default function ThemeApp({viewDisplay, type, games,}: ThemeAppProperties,) {
    const routeName = type.routeName
    const viewDisplayAndRouteName = [
        [ViewDisplays.SIMPLE_LIST, `${routeName} (list)`,],
        [ViewDisplays.CARD_LIST, `${routeName} (card)`,],
        [ViewDisplays.TABLE, `${routeName} (table)`,],
    ] as const satisfies Array<ViewAndRouteName>

    return <SubMainContainer reactKey="theme" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('theme.all.all',)}
                             asideContent={<ThemeAsideContent type={type} games={games}/>}>
        <SubContent viewDisplay={viewDisplay} type={type} games={games}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay, type, games,}: Omit<ThemeAppProperties, | 'gameStyles' | 'times'>,) {
    const appInterpreter = new ThemeAppInterpreter(type, games,)
    const items = appInterpreter.content

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <ThemeList items={items}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="theme" interpreter={appInterpreter}/>
    return <Table id="theme-table" items={items} options={options} caption={gameContentTranslation('theme.all.all',)} headersColor="info"/>
}

//region -------------------- List --------------------

interface Theme_ListProperties
    extends ReactProperties {

    readonly items: CollectionHolder<Themes>

}

/** @reactComponent */
function ThemeList({items,}: Theme_ListProperties,) {
    return <List partialId="theme" items={items} withSeparator>{it =>
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

//endregion -------------------- List --------------------
//region -------------------- Aside content --------------------

interface ThemeAsideContentProperties
    extends ReactProperties {

    readonly type: ThemeTypes

    readonly games: GameCollection

}

/** @reactComponent */
function ThemeAsideContent({type, games,}: ThemeAsideContentProperties,) {
    return <div className="theme-asideContent-container">
        <TypeAsideContent type={type}/>
        <div className="d-inline mx-1"/>
        <GameAsideContent type={type} games={games}/>
    </div>
}

/** @reactComponent */
function TypeAsideContent({type,}: Pick<ThemeAsideContentProperties, 'type'>,) {
    return <div id="theme-linkButton-container" className="btn-group btn-group-vertical btn-group-sm">
        <LinkButton partialId="allTheme" routeName={type.allRouteName} color={type.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="theme-linkButton-courseAndWorld-container" className="btn-group btn-group-sm">
            <LinkButton partialId="courseTheme" routeName={type.courseRouteName} color={type.courseColor}>
                <Image id="courseTheme-button-image" file={COURSE_THEME_IMAGE_FILE} className="theme-button-image"/>
            </LinkButton>
            <LinkButton partialId="worldTheme" routeName={type.worldRouteName} color={type.worldColor}>
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
        <LinkButton partialId="smm1Or3dsGame" routeName={themeGame.getSmm1Or3dsRouteName(type,)} color={themeGame.smm1Or3dsColor}>
            <GameImage reference={SMM1}/>
            <GameImage reference={SMM3DS}/>
        </LinkButton>
        <LinkButton partialId="smm2Game" routeName={themeGame.getSmm2RouteName(type,)} color={themeGame.smm2Color}>
            <GameImage reference={SMM2}/>
        </LinkButton>
    </div>
}

//endregion -------------------- Aside content --------------------
