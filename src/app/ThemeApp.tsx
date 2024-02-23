import 'app/_GameAsideContent.scss'
import './ThemeApp.scss'

import type {ThemeAppProperties}      from 'app/AppProperties.types'
import type {AppInterpreterWithTable} from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}        from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {ClassWithType}           from 'core/ClassWithType'
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
import CardList                                          from 'app/withInterpreter/CardList'
import SimpleList                                        from 'app/withInterpreter/SimpleList'
import {ViewDisplays}                                    from 'app/withInterpreter/ViewDisplays'
import {Games}                                           from 'core/game/Games'
import {contentTranslation, gameContentTranslation}      from 'lang/components/translationMethods'
import {filterGame}                                      from 'util/utilitiesMethods'

class ThemeAppInterpreter
    implements AppInterpreterWithTable<Themes, ThemeAppOption>,
        ClassWithType<ThemeTypes> {

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

    public get type(): ThemeTypes {
        return this.#type
    }

    public get content() {
        return filterGame(this.type.content, this.#games,)
    }

    //region -------------------- List interpreter --------------------

    public createListDimension(): DimensionOnList {
        const type = this.type
        if (type === ThemeTypes.COURSE)
            return {
                default: 1,
                small: 2,
                medium: 5,
            }
        if (type === ThemeTypes.WORLD)
            return {
                default: 1,
                small: 2,
                medium: 4,
            }
        return {
            default: 1,
            small: 2,
            medium: 3,
            large: 4,
            extraLarge: 6,
        }
    }

    //endregion -------------------- List interpreter --------------------
    //region -------------------- Card list interpreter --------------------

    public createCardListDimension() {
        return this.createListDimension()
    }

    public createCardListContent(enumerable: Themes,) {
        const {englishNameInHtml, endlessMarioImageFile,} = enumerable

        return <div className="card-body" id={`theme-${englishNameInHtml}`}>
            <div className="col-2">{CommonOptions.get.getGameContent(enumerable,)}</div>
            <div className="images-container col-7">
                {enumerable.renderSingleComponent(true,)}
                <Image file={endlessMarioImageFile}/>
            </div>
            <div className="col-2">{CommonOptions.get.getThemeContent(enumerable,)}</div>
        </div>
    }

    //endregion -------------------- Card list interpreter --------------------
    //region -------------------- Table interpreter --------------------

    public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor
    public readonly tableCaption = gameContentTranslation('theme.all.all',) satisfies ReactElementOrString

    public get tableOptions(): readonly ThemeAppOption[] {
        return [
            ThemeAppOption.ICON,
            ThemeAppOption.ENDLESS_MARIO_ICON,
            ThemeAppOption.NAME,
            ThemeAppOption.NIGHT_EFFECT,
        ]
    }


    public createTableContent(content: Themes, option: ThemeAppOption,) {
        return option.renderContent(content,)
    }

    public createTableHeader(option: ThemeAppOption,) {
        return option.renderTableHeader()
    }

    //endregion -------------------- Table interpreter --------------------

}

const titleContent = gameContentTranslation('theme.all.all',)

/** @reactComponent */
export default function ThemeApp({viewDisplay, type, games,}: ThemeAppProperties,) {
    const routeName = type.routeName
    const viewDisplayAndRouteName = [
        [ViewDisplays.SIMPLE_LIST, `${routeName} (list)`,],
        [ViewDisplays.CARD_LIST, `${routeName} (card)`,],
        [ViewDisplays.TABLE, `${routeName} (table)`,],
    ] as const satisfies readonly ViewAndRouteName[]
    const appInterpreter = new ThemeAppInterpreter(type, games,)

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SubMainContainer reactKey="theme" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                                 asideContent={<ThemeAsideContent viewDisplay={viewDisplay} type={type}/>}>
            <SimpleList reactKey="theme" interpreter={appInterpreter}/>
        </SubMainContainer>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <SubMainContainer reactKey="theme" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                                 asideContent={<ThemeAsideContent viewDisplay={viewDisplay} type={type}/>}>
            <CardList reactKey="theme" interpreter={appInterpreter}/>
        </SubMainContainer>
    return <SubMainContainer reactKey="theme" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                             asideContent={<ThemeAsideContent viewDisplay={viewDisplay} type={type}/>}>
        <Table id="theme-table" interpreter={appInterpreter}/>
    </SubMainContainer>
}

//region -------------------- Aside content --------------------

interface ThemeAsideContentProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly type: ThemeTypes

}

/** @reactComponent */
function ThemeAsideContent({viewDisplay, type,}: ThemeAsideContentProperties,) {
    return <div className="theme-asideContent-container">
        <TypeAsideContent viewDisplay={viewDisplay} type={type}/>
        <div className="d-inline mx-1"/>
        <GameAsideContent viewDisplay={viewDisplay} type={type}/>
    </div>
}

/** @reactComponent */
function TypeAsideContent({viewDisplay, type,}: ThemeAsideContentProperties,) {
    return <div id="theme-linkButton-container" className="btn-group btn-group-vertical btn-group-sm">
        <LinkButton partialId="allTheme" routeName={viewDisplay.getRoutePath(type.allRouteName,)} color={type.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="theme-linkButton-courseAndWorld-container" className="btn-group btn-group-sm">
            <LinkButton partialId="courseTheme" routeName={viewDisplay.getRoutePath(type.courseRouteName,)} color={type.courseColor}>
                <Image id="courseTheme-button-image" file={COURSE_THEME_IMAGE_FILE} className="theme-button-image"/>
            </LinkButton>
            <LinkButton partialId="worldTheme" routeName={viewDisplay.getRoutePath(type.worldRouteName,)} color={type.worldColor}>
                <Image id="worldTheme-button-image" file={WORLD_THEME_IMAGE_FILE} className="theme-button-image"/>
            </LinkButton>
        </div>
    </div>
}

const smm1 = Games.SUPER_MARIO_MAKER_1
const smm3ds = Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS
const smm2 = Games.SUPER_MARIO_MAKER_2

/** @reactComponent */
function GameAsideContent({viewDisplay, type,}: ThemeAsideContentProperties,) {
    const themeGame = smm2.isSelected
        ? ThemeGames.SUPER_MARIO_MAKER_2
        : ThemeGames.SUPER_MARIO_MAKER_OR_SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    return <div id="theme-gamesButton-singularGame-container" className="gameAsideContent-container btn-group btn-group-sm">
        <LinkButton partialId="smm1Or3dsGame" routeName={themeGame.getSmm1Or3dsRouteName(type, viewDisplay,)} color={themeGame.smm1Or3dsColor}>{smm1.renderSingleComponent}{smm3ds.renderSingleComponent}</LinkButton>
        <LinkButton partialId="smm2Game" routeName={themeGame.getSmm2RouteName(type, viewDisplay,)} color={themeGame.smm2Color}>{smm2.renderSingleComponent}</LinkButton>
    </div>
}

//endregion -------------------- Aside content --------------------
