import './LimitApp.scss'
import 'core/game/GameAsideContent.scss'

import type {LimitAppProperties}      from 'app/AppProperties.types'
import type {AppInterpreterWithTable} from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'
import type {LimitTypes}              from 'app/property/LimitTypes'
import type {ViewAndRouteName}        from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {ClassWithType}           from 'core/ClassWithType'
import type {Limits}                  from 'core/limit/Limits'
import type {GameCollection}          from 'util/collection/GameCollection'
import type {ReactProperties}         from 'util/react/ReactProperties'

import SubMainContainer                             from 'app/_SubMainContainer'
import {LimitAppOption}                             from 'app/options/LimitAppOption'
import {COURSE_THEME_IMAGE_FILE}                    from 'app/options/file/themeImageFiles'
import {LimitGames}                                 from 'app/property/LimitGames'
import LinkButton                                   from 'app/tools/button/LinkButton'
import Image                                        from 'app/tools/images/Image'
import Table                                        from 'app/tools/table/Table'
import CardList                                     from 'app/withInterpreter/CardList'
import SimpleList                                   from 'app/withInterpreter/SimpleList'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import {Games}                                      from 'core/game/Games'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import {filterGame}                                 from 'util/utilitiesMethods'

class LimitAppInterpreter
    implements AppInterpreterWithTable<Limits, LimitAppOption>,
        ClassWithType<LimitTypes> {

    //region -------------------- Fields --------------------

    readonly #type
    readonly #games

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(type: LimitTypes, games: GameCollection,) {
        this.#type = type
        this.#games = games
    }

    //endregion -------------------- Constructor --------------------

    public get type(): LimitTypes {
        return this.#type
    }

    public get content() {
        return filterGame(this.type.content, this.#games,)
    }

    //region -------------------- List interpreter --------------------

    public createListDimension(): DimensionOnList {
        return {
            default: 1,
            small: 2,
            medium: 4,
            large: 5,
            extraLarge: 6,
        }
    }

    //endregion -------------------- List interpreter --------------------
    //region -------------------- Card list interpreter --------------------

    public createCardListDimension() {
        return this.createListDimension()
    }

    public createCardListContent(enumeration: Limits,) {
        if (enumeration.isEditorLimit)
            return <div className="card-bodyWithEditor-container">
                <Image file={COURSE_THEME_IMAGE_FILE} className="course-theme-image position-absolute start-0 bottom-0"/>
                <div className="card-body" id={`limit-${enumeration.englishNameInHtml}`}>
                    {LimitAppOption.AMOUNT_IN_ALL_GAMES.renderContent(enumeration,)}
                </div>
            </div>
        return <div className="card-body" id={`limit-${enumeration.englishNameInHtml}`}>
            {LimitAppOption.AMOUNT_IN_ALL_GAMES.renderContent(enumeration,)}
        </div>
    }

    //endregion -------------------- Card list interpreter --------------------
    //region -------------------- Table interpreter --------------------

    public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor

    public get tableCaption() {
        return gameContentTranslation(`limit.${this.type.type}.all`,) satisfies ReactElementOrString
    }

    public get tableOptions(): readonly LimitAppOption[] {
        const games = this.#games
        const hasSMM1Or3DSGames = games.hasSMM1Or3DS
        const hasSMM2Games = games.hasSMM2

        const options: LimitAppOption[] = [
            LimitAppOption.ACRONYM,
            LimitAppOption.NAME,
        ]
        if (hasSMM1Or3DSGames && hasSMM2Games)
            options.push(LimitAppOption.AMOUNT_IN_ALL_GAMES,)
        else {
            if (hasSMM1Or3DSGames)
                options.push(LimitAppOption.AMOUNT_IN_SMM1_AND_SMM3DS,)
            if (hasSMM2Games)
                options.push(LimitAppOption.AMOUNT_IN_SMM2,)
        }
        return options
    }


    public createTableContent(content: Limits, option: LimitAppOption,) {
        return option.renderContent(content,)
    }

    public createTableHeader(option: LimitAppOption,) {
        return option.renderTableHeader()
    }

    //endregion -------------------- Table interpreter --------------------

}

/** @reactComponent */
export default function LimitApp({viewDisplay, type, games,}: LimitAppProperties,) {
    const routeName = type.routeName
    const viewDisplayAndRouteName = [
        [ViewDisplays.SIMPLE_LIST, `${routeName} (list)`,],
        [ViewDisplays.CARD_LIST, `${routeName} (card)`,],
        [ViewDisplays.TABLE, `${routeName} (table)`,],
    ] as const satisfies readonly ViewAndRouteName[]
    const titleContent = gameContentTranslation(`limit.${type.type}.all`,)
    const appInterpreter = new LimitAppInterpreter(type, games,)

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SubMainContainer reactKey="limit" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                                 asideContent={<LimitAsideContent viewDisplay={viewDisplay} type={type}/>}>
            <SimpleList reactKey="limit" interpreter={appInterpreter}/>
        </SubMainContainer>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <SubMainContainer reactKey="limit" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                                 asideContent={<LimitAsideContent viewDisplay={viewDisplay} type={type}/>}>
            <CardList reactKey="limit" interpreter={appInterpreter}/>
        </SubMainContainer>
    return <SubMainContainer reactKey="limit" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                             asideContent={<LimitAsideContent viewDisplay={viewDisplay} type={type}/>}>
        <Table id="limit-table" interpreter={appInterpreter}/>
    </SubMainContainer>
}

//region -------------------- Aside content --------------------

interface LimitAsideContentProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly type: LimitTypes

}

/** @reactComponent */
function LimitAsideContent({viewDisplay, type,}: LimitAsideContentProperties,) {
    return <div id="limit-asideContent-container">
        <TypeAsideContent viewDisplay={viewDisplay} type={type}/>
        <div className="d-inline mx-1"/>
        <GameAsideContent viewDisplay={viewDisplay} type={type}/>
    </div>
}

/** @reactComponent */
function TypeAsideContent({viewDisplay, type,}: LimitAsideContentProperties,) {
    return <div id="limit-linkButton-container" className="btn-group-vertical btn-group-sm">
        <LinkButton partialId="allLimit" routeName={viewDisplay.getRoutePath(type.allRouteName,)} color={type.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="limit-linkButton-playAndEditor-container" className="btn-group btn-group-sm">
            <LinkButton partialId="playLimit" routeName={viewDisplay.getRoutePath(type.playRouteName,)} color={type.playColor}>{gameContentTranslation('limit.play.simple',)}</LinkButton>
            <LinkButton partialId="editorLimit" routeName={viewDisplay.getRoutePath(type.editorRouteName,)} color={type.editorColor}>{gameContentTranslation('limit.editor.simple',)}</LinkButton>
        </div>
    </div>
}

const GamePossibilities = Games.Possibilities.get
const allGames = GamePossibilities.ALL_GAMES
const smm1 = Games.SUPER_MARIO_MAKER_1
const smm3ds = Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS
const smm2 = Games.SUPER_MARIO_MAKER_2

/** @reactComponent */
function GameAsideContent({viewDisplay, type,}: LimitAsideContentProperties,) {
    const limitGame = allGames.reduce((isSelected, it) => isSelected && it.isSelected, true,)
        ? LimitGames.ALL_GAMES
        : smm2.isSelected
            ? LimitGames.SUPER_MARIO_MAKER_2
            : LimitGames.SUPER_MARIO_MAKER_OR_SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    return <div id="limit-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partialId="allGameLimit" routeName={limitGame.getAllRouteName(type, viewDisplay,)} color={limitGame.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="limit-gamesButton-singularGame-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smm1Or3dsGame" routeName={limitGame.getSmm1Or3dsRouteName(type, viewDisplay,)} color={limitGame.smm1Or3dsColor}>{smm1.renderSingleComponent}{smm3ds.renderSingleComponent}</LinkButton>
            <LinkButton partialId="smm2Game" routeName={limitGame.getSmm2RouteName(type, viewDisplay,)} color={limitGame.smm2Color}>{smm2.renderSingleComponent}</LinkButton>
        </div>
    </div>
}

//endregion -------------------- Aside content --------------------
