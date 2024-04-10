import 'app/_GameAsideContent.scss'
import 'app/_GameStyleAsideContent.scss'
import './EntityApp.scss'
import 'app/options/EntityAppOption.scss'

import type {EntityProperties}                               from 'app/AppProperties.types'
import type {AppInterpreterWithTable}                        from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}                                from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}                               from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {FullGroupUrlName as FullGroupUrlName_Game}      from 'core/game/Games.types'
import type {FullGroupUrlName as FullGroupUrlName_GameStyle} from 'core/gameStyle/GameStyles.types'
import type {GameCollection}                                 from 'util/collection/GameCollection'
import type {GameStyleCollection}                            from 'util/collection/GameStyleCollection'
import type {ReactProperties}                                from 'util/react/ReactProperties'

import SubMainContainer                             from 'app/_SubMainContainer'
import {EntityAppOption}                            from 'app/options/EntityAppOption'
import {EntityGames}                                from 'app/property/EntityGames'
import {EntityGameStyles}                           from 'app/property/EntityGameStyles'
import LinkButton                                   from 'app/tools/button/LinkButton'
import Table                                        from 'app/tools/table/Table'
import {unfinishedText}                             from 'app/tools/text/UnfinishedText'
import CardList                                     from 'app/withInterpreter/CardList'
import SimpleList                                   from 'app/withInterpreter/SimpleList'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import EditorVoiceSoundComponent                    from 'core/editorVoice/EditorVoiceSound.component'
import {Entities}                                   from 'core/entity/Entities'
import GameImage                                    from 'core/game/GameImage'
import {Games}                                      from 'core/game/Games'
import GameStyleImage                               from 'core/gameStyle/GameStyleImage'
import {GameStyles}                                 from 'core/gameStyle/GameStyles'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import {filterGame, filterGameStyle, intersect}     from 'util/utilitiesMethods'

class EntityAppInterpreter
    implements AppInterpreterWithTable<Entities, EntityAppOption> {

    //region -------------------- Fields --------------------

    readonly #games
    readonly #gameStyles

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(games: GameCollection, gameStyles: GameStyleCollection,) {
        this.#games = games
        this.#gameStyles = gameStyles
    }

    //endregion -------------------- Constructor --------------------

    public get content() {
        return filterGameStyle(filterGame(Entities.CompanionEnum.get.values, this.#games,), this.#gameStyles,)
    }

    //region -------------------- List interpreter --------------------

    public createListDimension(): DimensionOnList {
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

    public createCardListContent({englishName: name, reference, editorVoiceSoundFileHolder,}: Entities,) {
        //TODO encapsulate the voiceSound into a sound interpreter.
        const category = reference.categoryEnglish === '' ? '' : `entityCategory-${reference.categoryEnglish}`//TODO move to the parent container className.
        return <div className={`${category}`}>
            <EditorVoiceSoundComponent editorVoiceSound={editorVoiceSoundFileHolder} name={name}/>
        </div>
    }

    //endregion -------------------- Card list interpreter --------------------
    //region -------------------- Table interpreter --------------------

    public readonly tableHeadersColor = 'secondary' satisfies BootstrapThemeColor

    public get tableCaption() {
        const entity = OtherWordInTheGames.ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.ENTITY.singularEnglishName,)
        const entityAsLowerCase = OtherWordInTheGames.ENTITY.singularLowerCaseNameOnReferenceOrNull ?? entity.toLowerCase()
        return gameContentTranslation('entity.all', {Entity: entity, entity: entityAsLowerCase,},) satisfies ReactElementOrString
    }

    public get tableOptions(): readonly EntityAppOption[] {
        const games = this.#games
        const gameStyles = this.#gameStyles
        const hasSMM2 = games.hasSMM2

        const options: EntityAppOption[] = []
        if (gameStyles.hasSMB)
            options.push(EntityAppOption.IMAGE_IN_SMB,)
        if (gameStyles.hasSMB3)
            options.push(EntityAppOption.IMAGE_IN_SMB3,)
        if (gameStyles.hasSMW)
            options.push(EntityAppOption.IMAGE_IN_SMW,)
        if (gameStyles.hasNSMBU)
            options.push(EntityAppOption.IMAGE_IN_NSMBU,)
        if (gameStyles.hasSM3DW && hasSMM2) // The SMM2 validation is a fail-safe
            options.push(EntityAppOption.IMAGE_IN_SM3DW,)
        options.push(
            EntityAppOption.NAME,
            // EntityAppOption.GAME,
            // EntityAppOption.GAME_STYLE,
            // EntityAppOption.COURSE_THEME,
            // EntityAppOption.TIME,
            EntityAppOption.CATEGORY,
        )
        if (games.hasAllGames)
            options.push(EntityAppOption.EDITOR_LIMIT_IN_SMM1_AND_3DS, EntityAppOption.EDITOR_LIMIT_IN_SMM2,)
        else {
            if (games.hasSMM1Or3DS)
                options.push(EntityAppOption.EDITOR_LIMIT_IN_SMM1_AND_3DS_ONLY,)
            if (hasSMM2)
                options.push(EntityAppOption.EDITOR_LIMIT_IN_SMM2_ONLY,)
        }
        options.push(EntityAppOption.PLAY_LIMIT,)
        return options
    }


    public getAdditionalClass(option: EntityAppOption,) {
        return option.additionalClasses
    }

    public createTableContent(content: Entities, option: EntityAppOption,) {
        return option.renderContent(content,)
    }

    public createTableHeader(option: EntityAppOption,) {
        return option.renderTableHeader()
    }

    //endregion -------------------- Table interpreter --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyEntity (list)',],
    [ViewDisplays.CARD_LIST, 'everyEntity (card)',],
    [ViewDisplays.TABLE, 'everyEntity (table)',],
] as const satisfies readonly ViewAndRouteName[]

/** @reactComponent */
export default function EntityApp({viewDisplay, games, gameStyles,}: EntityProperties,) {
    const entity = OtherWordInTheGames.ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.ENTITY.singularEnglishName,)
    const entityAsLowerCase = OtherWordInTheGames.ENTITY.singularLowerCaseNameOnReferenceOrNull ?? entity.toLowerCase()
    const entities = OtherWordInTheGames.ENTITY.pluralNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.ENTITY.pluralEnglishName,)
    const entitiesAsLowerCase = OtherWordInTheGames.ENTITY.pluralLowerCaseNameOnReferenceOrNull ?? entities.toLowerCase()

    const titleContent = gameContentTranslation('entity.all', {Entity: entity, Entities: entities, entity: entityAsLowerCase, entities: entitiesAsLowerCase,},)
    const appInterpreter = new EntityAppInterpreter(games, gameStyles,)

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SubMainContainer reactKey="entity" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                                 asideContent={<EntityAsideContent viewDisplay={viewDisplay} games={games} gameStyles={gameStyles}/>}>
            <SimpleList reactKey="entity" interpreter={appInterpreter}/>
        </SubMainContainer>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <SubMainContainer reactKey="entity" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                                 asideContent={<EntityAsideContent viewDisplay={viewDisplay} games={games} gameStyles={gameStyles}/>}>
            <CardList reactKey="entity" interpreter={appInterpreter}/>
        </SubMainContainer>
    return <SubMainContainer reactKey="entity" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}
                             asideContent={<EntityAsideContent viewDisplay={viewDisplay} games={games} gameStyles={gameStyles}/>}>
        <Table id="entity-table" interpreter={appInterpreter}/>
    </SubMainContainer>
}

//region -------------------- Aside content --------------------

interface EntityAsideContentProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly games: GameCollection

    readonly gameStyles: GameStyleCollection

}

/** @reactComponent */
function EntityAsideContent({viewDisplay, games, gameStyles,}: EntityAsideContentProperties,) {
    return <div className="entity-asideContent-container">
        <GameAsideContent viewDisplay={viewDisplay} games={games} gameStyles={gameStyles}/>
        <div className="d-inline mx-1"/>
        <GameStyleAsideContent viewDisplay={viewDisplay} games={games} gameStyles={gameStyles}/>
    </div>
}

const GameCompanion = Games.CompanionEnum.get
const GameStyleCompanion = GameStyles.CompanionEnum.get

const GamePossibilities = Games.Possibilities.get
const allGames = GamePossibilities.ALL_GAMES
const smm1 = Games.SUPER_MARIO_MAKER_1
const smm3ds = Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS
const smm2 = Games.SUPER_MARIO_MAKER_2

/** @reactComponent */
function GameAsideContent({viewDisplay, games, gameStyles,}: EntityAsideContentProperties,) {
    const gameStyleName = `GameStyle=${GameStyleCompanion.getGroupUrlName(gameStyles,)}` as const satisfies FullGroupUrlName_GameStyle
    const entityGame = intersect(allGames, games,).length === 3
        ? EntityGames.ALL_GAMES
        : games.hasSMM2
            ? EntityGames.SUPER_MARIO_MAKER_2
            : games.hasSMM1
                ? EntityGames.SUPER_MARIO_MAKER
                : EntityGames.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    if (gameStyles.hasSM3DW) {
        const amountOfGameStyles = gameStyles.size
        if (!(amountOfGameStyles === 5 || amountOfGameStyles === 4))
            return <div id="entity-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
                <LinkButton partialId="allGameLimit" routeName={entityGame.getAllRouteName(viewDisplay, gameStyleName,)} color={entityGame.allColor}>{contentTranslation('All',)}</LinkButton>
                <LinkButton partialId="smm2Game" routeName={entityGame.getSmm2RouteName(viewDisplay, gameStyleName,)} color={entityGame.smm2Color}>
                    <GameImage reference={smm2}/>
                </LinkButton>
            </div>
    }

    return <div id="entity-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partialId="allGameLimit" routeName={entityGame.getAllRouteName(viewDisplay, gameStyleName,)} color={entityGame.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="entity-gamesButton-singularGame-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smm1Game" routeName={entityGame.getSmm1RouteName(viewDisplay, gameStyleName,)} color={entityGame.smm1Color}>
                <GameImage reference={smm1}/>
            </LinkButton>
            <LinkButton partialId="smm3dsGame" routeName={entityGame.getSmm3dsRouteName(viewDisplay, gameStyleName,)} color={entityGame.smm3dsColor}>
                <GameImage reference={smm3ds}/>
            </LinkButton>
            <LinkButton partialId="smm2Game" routeName={entityGame.getSmm2RouteName(viewDisplay, gameStyleName,)} color={entityGame.smm2Color}>
                <GameImage reference={smm2}/>
            </LinkButton>
        </div>
    </div>
}

const GameStylePossibilities = GameStyles.Possibilities.get
const allGameStyles = GameStylePossibilities.ALL_GAME_STYLES
const smb = GameStyles.SUPER_MARIO_BROS
const smb3 = GameStyles.SUPER_MARIO_BROS_3
const smw = GameStyles.SUPER_MARIO_WORLD
const nsmbu = GameStyles.NEW_SUPER_MARIO_BROS_U
const sm3dw = GameStyles.SUPER_MARIO_3D_WORLD

/** @reactComponent */
function GameStyleAsideContent({viewDisplay, games, gameStyles,}: EntityAsideContentProperties,) {
    const gameName = `Game=${GameCompanion.getGroupUrlName(games,)}` as const satisfies FullGroupUrlName_Game
    const amountOfSelectedGameStyles = intersect(allGameStyles, gameStyles,).length
    const isSmbSelected = gameStyles.hasSMB
    const isSmb3Selected = gameStyles.hasSMB3
    const isSmwSelected = gameStyles.hasSMW
    const isNsmbuSelected = gameStyles.hasNSMBU

    if (games.hasSMM2) {
        const isSm3dwSelected = gameStyles.hasSM3DW
        const entityGameStyle = amountOfSelectedGameStyles === 5
            ? EntityGameStyles.ALL_GAME_STYLES
            : amountOfSelectedGameStyles !== 1
                ? EntityGameStyles.NOT_INDIVIDUAL_GAME_STYLE
                : isSmbSelected
                    ? EntityGameStyles.SUPER_MARIO_BROS
                    : isSmb3Selected
                        ? EntityGameStyles.SUPER_MARIO_BROS_3
                        : isSmwSelected
                            ? EntityGameStyles.SUPER_MARIO_WORLD
                            : isNsmbuSelected
                                ? EntityGameStyles.NEW_SUPER_MARIO_BROS_U
                                : EntityGameStyles.SUPER_MARIO_3D_WORLD

        return <div id="entity-gameStylesButton-container" className="gameStyleAsideContent-container btn-group-vertical btn-group-sm">
            <LinkButton partialId="allGameStyleLimit" routeName={entityGameStyle.getAllRouteName(viewDisplay, gameName,)} color={entityGameStyle.allColor}>{contentTranslation('All',)}</LinkButton>
            <div id="entity-gameStylesButton-singularGameStyle-top-container" className="btn-group btn-group-sm">
                <LinkButton partialId="smbGameStyleLimit" routeName={entityGameStyle.getSmbRouteName(viewDisplay, gameName,)} color={entityGameStyle.smbColor(isSmbSelected,)}>
                    <GameStyleImage reference={smb}/>
                </LinkButton>
                <LinkButton partialId="smb3GameStyleLimit" routeName={entityGameStyle.getSmb3RouteName(viewDisplay, gameName,)} color={entityGameStyle.smb3Color(isSmb3Selected,)}>
                    <GameStyleImage reference={smb3}/>
                </LinkButton>
                <LinkButton partialId="smwGameStyleLimit" routeName={entityGameStyle.getSmwRouteName(viewDisplay, gameName,)} color={entityGameStyle.smwColor(isSmwSelected,)}>
                    <GameStyleImage reference={smw}/>
                </LinkButton>
            </div>
            <div id="entity-gameStylesButton-singularGameStyle-bottom-container" className="btn-group btn-group-sm">
                <LinkButton partialId="nsmbuGameStyleLimit" routeName={entityGameStyle.getNsmbuRouteName(viewDisplay, gameName,)} color={entityGameStyle.nsmbuColor(isNsmbuSelected,)}>
                    <GameStyleImage reference={nsmbu}/>
                </LinkButton>
                <LinkButton partialId="sm3dwGameStyleLimit" routeName={entityGameStyle.getSm3dwRouteName(viewDisplay, gameName,)} color={entityGameStyle.sm3dwColor(isSm3dwSelected,)}>
                    <GameStyleImage reference={sm3dw}/>
                </LinkButton>
            </div>
        </div>
    }

    const entityGameStyle = amountOfSelectedGameStyles === 5 || amountOfSelectedGameStyles === 4
        ? EntityGameStyles.ALL_GAME_STYLES
        : amountOfSelectedGameStyles !== 1
            ? EntityGameStyles.NOT_INDIVIDUAL_GAME_STYLE
            : isSmbSelected
                ? EntityGameStyles.SUPER_MARIO_BROS
                : isSmb3Selected
                    ? EntityGameStyles.SUPER_MARIO_BROS_3
                    : isSmwSelected
                        ? EntityGameStyles.SUPER_MARIO_WORLD
                        : EntityGameStyles.NEW_SUPER_MARIO_BROS_U

    return <div id="entity-gameStylesButton-container" className="gameStyleAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partialId="allGameStyleLimit" routeName={entityGameStyle.getAllRouteName(viewDisplay, gameName,)} color={entityGameStyle.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="entity-gameStylesButton-singularGameStyle-top-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smbGameStyleLimit" routeName={entityGameStyle.getSmbRouteName(viewDisplay, gameName,)} color={entityGameStyle.smbColor(isSmbSelected,)}>
                <GameStyleImage reference={smb}/>
            </LinkButton>
            <LinkButton partialId="smb3GameStyleLimit" routeName={entityGameStyle.getSmb3RouteName(viewDisplay, gameName,)} color={entityGameStyle.smb3Color(isSmb3Selected,)}>
                <GameStyleImage reference={smb3}/>
            </LinkButton>
        </div>
        <div id="entity-gameStylesButton-singularGameStyle-bottom-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smwGameStyleLimit" routeName={entityGameStyle.getSmwRouteName(viewDisplay, gameName,)} color={entityGameStyle.smwColor(isSmwSelected,)}>
                <GameStyleImage reference={smw}/>
            </LinkButton>
            <LinkButton partialId="nsmbuGameStyleLimit" routeName={entityGameStyle.getNsmbuRouteName(viewDisplay, gameName,)} color={entityGameStyle.nsmbuColor(isNsmbuSelected,)}>
                <GameStyleImage reference={nsmbu}/>
            </LinkButton>
        </div>
    </div>
}

//endregion -------------------- Aside content --------------------
