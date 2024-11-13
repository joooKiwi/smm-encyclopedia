import 'app/_GameAsideContent.scss'
import './EditorVoiceApp.scss'

import type {Array} from '@joookiwi/type'

import type {EditorVoiceProperties}   from 'app/AppProperties.types'
import type {AppInterpreterWithTable} from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}        from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {GameCollection}          from 'util/collection/GameCollection'
import type {ReactProperties}         from 'util/react/ReactProperties'
import type {PossibleRouteName}       from 'route/EveryRoutes.types'

import SubMainContainer                             from 'app/_SubMainContainer'
import {EditorVoiceGames}                           from 'app/property/EditorVoiceGames'
import Table                                        from 'app/tools/table/Table'
import CardList                                     from 'app/withInterpreter/CardList'
import SimpleList                                   from 'app/withInterpreter/SimpleList'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import LinkButton                                   from 'app/tools/button/LinkButton'
import {EditorVoices}                               from 'core/editorVoice/EditorVoices'
import EditorVoiceSoundComponent                    from 'core/editorVoice/EditorVoiceSound.component'
import {GamePossibility}                            from 'core/game/Game.possibility'
import GameImage                                    from 'core/game/GameImage'
import {Games}                                      from 'core/game/Games'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import ThemeImage                                   from 'core/theme/ThemeImage'
import {Themes}                                     from 'core/theme/Themes'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import {filterGame, intersect}                      from 'util/utilitiesMethods'
import LinkText                                     from 'app/tools/text/LinkText'
import TextOrLink                                   from 'app/tools/text/TextOrLink'
import {unfinishedText}                             from 'app/tools/text/UnfinishedText'
import {EditorVoiceAppOption}                       from 'app/options/EditorVoiceAppOption'

import ALL_GAMES = GamePossibility.ALL_GAMES
import SMM1 =      Games.SMM1
import SMM2 =      Games.SMM2
import SMM3DS =    Games.SMM3DS

class EditorVoiceAppInterpreter
    implements AppInterpreterWithTable<EditorVoices, EditorVoiceAppOption> {

    //region -------------------- Fields --------------------

    readonly #games

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(games: GameCollection,) {
        this.#games = games
    }

    //endregion -------------------- Constructor --------------------

    public get content() {
        return filterGame(EditorVoices.CompanionEnum.get.values, this.#games,)
    }

    //region -------------------- List interpreter --------------------

    public createListDimension(): DimensionOnList {
        return {
            default: 1,
            small: 3,
            medium: 4,
            large: 6,
        }
    }

    //endregion -------------------- List interpreter --------------------
    //region -------------------- Card list interpreter --------------------

    public createCardListDimension() {
        return this.createListDimension()
    }

    public createCardListContent(enumerable: EditorVoices,) {
        return <div className="editorVoices-container">
            <EditorVoiceSoundComponent editorVoiceSound={enumerable.editorVoiceSoundFileHolder} name={enumerable.englishName}/>
        </div>
    }

    //endregion -------------------- Card list interpreter --------------------
    //region -------------------- Table interpreter --------------------

    public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor
    public readonly tableCaption = gameContentTranslation('editor voice.all',) satisfies ReactElementOrString

    public get tableOptions(): Array<EditorVoiceAppOption> {
        return [EditorVoiceAppOption.NAME, EditorVoiceAppOption.EDITOR_VOICE,]
    }


    public getAdditionalClass(option: EditorVoiceAppOption,) {
        return option.additionalClasses
    }

    public createTableContent(content: EditorVoices, option: EditorVoiceAppOption,) {
        return option.renderContent(content,)
    }

    public createTableHeader(option: EditorVoiceAppOption,) {
        return option.renderTableHeader()
    }

    //endregion -------------------- Table interpreter --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyEditorVoice (list)',],
    [ViewDisplays.CARD_LIST, 'everyEditorVoice (card)',],
    [ViewDisplays.TABLE, 'everyEditorVoice (table)',],
] as const satisfies Array<ViewAndRouteName>

/** @reactComponent */
export default function EditorVoiceApp({viewDisplay, games,}: EditorVoiceProperties,) {
    const game = intersect(ALL_GAMES, games,).length === 3
        ? EditorVoiceGames.ALL_GAMES
        : games.hasSMM2
            ? EditorVoiceGames.SUPER_MARIO_MAKER_2
            : games.hasSMM1
                ? EditorVoiceGames.SUPER_MARIO_MAKER
                : EditorVoiceGames.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    return <SubMainContainer reactKey="editorVoice" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('editor voice.all',)}
                             description={<EditorVoiceDescription viewDisplay={viewDisplay} game={game}/>}
                             asideContent={<EditorVoiceAsideContent viewDisplay={viewDisplay} game={game}/>}>
        <SubContent viewDisplay={viewDisplay} games={games}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay, games,}: EditorVoiceProperties,) {
    const appInterpreter = new EditorVoiceAppInterpreter(games,)

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SimpleList reactKey="editorVoice" interpreter={appInterpreter}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="editorVoice" interpreter={appInterpreter}/>
    return <Table id="editorVoice-table" interpreter={appInterpreter}/>
}

//region -------------------- Description content --------------------

interface EditorVoiceDescriptionProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly game: EditorVoiceGames

}

/** @reactComponent */
function EditorVoiceDescription({viewDisplay, game,}: EditorVoiceDescriptionProperties,) {
    const entity = OtherWordInTheGames.ENTITY.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.ENTITY.singularEnglishName.toLowerCase(),)

    const smm1Link = game.getSmm1RouteName(viewDisplay,)
    const smm3dsLink = game.getSmm3dsRouteName(viewDisplay,)
    const smm2Link = game.getSmm2RouteName(viewDisplay,)

    const listLink = viewDisplay === ViewDisplays.SIMPLE_LIST ? null : 'everyEditorVoice (list)' satisfies PossibleRouteName
    const cardLink = viewDisplay === ViewDisplays.CARD_LIST ? null : 'everyEditorVoice (card)' satisfies PossibleRouteName
    const tableLink = viewDisplay === ViewDisplays.TABLE ? null : 'everyEditorVoice (table)' satisfies PossibleRouteName

    return <>
        <p>
            {gameContentTranslation('editor voice.description.intro page',)}
            {gameContentTranslation('editor voice.description.intro games', {
                smm1Link: <TextOrLink key="smm1Link" id="smm1Game-description" routeName={smm1Link}><GameImage reference={SMM1}/></TextOrLink>,
                smm3dsLink: <TextOrLink key="smm3dsLink" id="smm3dsGame-description" routeName={smm3dsLink}><GameImage reference={SMM3DS}/></TextOrLink>,
                smm2Link: <TextOrLink key="smm2Link" id="smm2Game-description" routeName={smm2Link}><GameImage reference={SMM2}/></TextOrLink>,
            },)}
            {gameContentTranslation('editor voice.description.intro smm1', {
                smm1Link: <TextOrLink key="smm1Link" id="smm1Game-references-description" routeName={smm1Link}><GameImage reference={SMM1}/></TextOrLink>,
                smm2Link: <TextOrLink key="smm2Link" id="smm2Game-references-description" routeName={smm2Link}><GameImage reference={SMM2}/></TextOrLink>,
            },)}
            {gameContentTranslation('editor voice.description.intro characters',)}
            {gameContentTranslation('editor voice.description.intro variants', {
                //TODO change the underwater link to a different link
                //TODO change the european link to a different link
                entityLink: <LinkText key="entityLink" partialId="entityLink" routeName="everyEntity" color="primary">{entity}</LinkText>,
                underwaterLink: <LinkText key="underwaterLink" partialId="underwaterEntityLink" routeName="everyEntity" color="primary"><ThemeImage reference={Themes.UNDERWATER}
                                                                                                                                                    isSmallPath/></LinkText>,
                europeanVariantLink: <LinkText key="europeanVariantLink" partialId="europeanEntityLink" routeName="everyEntity" color="primary">{contentTranslation('variant.European',)}</LinkText>,
            },)}
        </p>
        <p>{gameContentTranslation('editor voice.description.viewable', {
            listLink: <LinkText key="listLink" partialId="listLink" routeName={listLink} color="primary">{contentTranslation('view type.list.singular',).toLowerCase()}</LinkText>,
            cardLink: <LinkText key="cardLink" partialId="cardLink" routeName={cardLink} color="primary">{contentTranslation('view type.card.singular',).toLowerCase()}</LinkText>,
            cardsLink: <LinkText key="cardsLink" partialId="cardsLink" routeName={cardLink} color="primary">{contentTranslation('view type.card.plural',).toLowerCase()}</LinkText>,
            tableLink: <LinkText key="tableLink" partialId="tableLink" routeName={tableLink} color="primary">{contentTranslation('view type.table.singular',).toLowerCase()}</LinkText>,
        },)}</p>
    </>
}

//endregion -------------------- Description content --------------------
//region -------------------- Aside content --------------------

interface EditorVoiceAsideContentProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly game: EditorVoiceGames

}

/** @reactComponent */
function EditorVoiceAsideContent({viewDisplay, game,}: EditorVoiceAsideContentProperties,) {
    return <div id="editorVoice-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partialId="allGameLimit" routeName={game.getAllRouteName(viewDisplay,)} color={game.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="editorVoice-gamesButton-singularGame-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smm1Game" routeName={game.getSmm1RouteName(viewDisplay,)} color={game.smm1Color}><GameImage reference={SMM1}/></LinkButton>
            <LinkButton partialId="smm3dsGame" routeName={game.getSmm3dsRouteName(viewDisplay,)} color={game.smm3dsColor}><GameImage reference={SMM3DS}/></LinkButton>
            <LinkButton partialId="smm2Game" routeName={game.getSmm2RouteName(viewDisplay,)} color={game.smm2Color}><GameImage reference={SMM2}/></LinkButton>
        </div>
    </div>
}

//endregion -------------------- Aside content --------------------
