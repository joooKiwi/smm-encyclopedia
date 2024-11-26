import 'app/_GameAsideContent.scss'
import 'app/_GameStyleAsideContent.scss'
import 'app/_TimeAsideContent.scss'
import './EntityApp.scss'
import 'app/options/EntityAppOption.scss'

import type {Array, MutableArray, NullOr} from '@joookiwi/type'
import type {CollectionHolder}            from '@joookiwi/collection'
import {filterByArray}                    from '@joookiwi/collection'

import type {EntityProperties}        from 'app/AppProperties.types'
import type {AppInterpreterWithTable} from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}        from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {GameCollection}          from 'util/collection/GameCollection'
import type {GameStyleCollection}     from 'util/collection/GameStyleCollection'
import type {TimeCollection}          from 'util/collection/TimeCollection'
import type {ReactProperties}         from 'util/react/ReactProperties'

import SubMainContainer                             from 'app/_SubMainContainer'
import {EntityAppOption}                            from 'app/options/EntityAppOption'
import {EntityGames}                                from 'app/property/EntityGames'
import {EntityGameStyles}                           from 'app/property/EntityGameStyles'
import {EntityTimes}                                from 'app/property/EntityTimes'
import LinkButton                                   from 'app/tools/button/LinkButton'
import Table                                        from 'app/tools/table/Table'
import {unfinishedText}                             from 'app/tools/text/UnfinishedText'
import List                                         from 'app/util/List'
import CardList                                     from 'app/withInterpreter/CardList'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import EditorVoiceSoundComponent                    from 'core/editorVoice/EditorVoiceSound.component'
import {Entities}                                   from 'core/entity/Entities'
import SingleEntityImage                            from 'core/entity/component/SingleEntityImage'
import {Games}                                      from 'core/game/Games'
import GameImage                                    from 'core/game/component/GameImage'
import {GameStyles}                                 from 'core/gameStyle/GameStyles'
import GameStyleImage                               from 'core/gameStyle/component/GameStyleImage'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import {Times}                                      from 'core/time/Times'
import TimeImage                                    from 'core/time/component/TimeImage'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent                                from 'lang/name/component/Name.component'
import {Empty}                                      from 'util/emptyVariables'
import {intersect}                                  from 'util/utilitiesMethods'

import ALL =             Entities.ALL
import ALL_GAME_STYLES = GameStyles.ALL
import EMPTY_STRING =    Empty.EMPTY_STRING
import NSMBU =           GameStyles.NSMBU
import SMB =             GameStyles.SMB
import SMB3 =            GameStyles.SMB3
import SMM1 =            Games.SMM1
import SMM2 =            Games.SMM2
import SMM3DS =          Games.SMM3DS
import SMW =             GameStyles.SMW
import SM3DW =           GameStyles.SM3DW

class EntityAppInterpreter
    implements AppInterpreterWithTable<Entities, EntityAppOption> {

    //region -------------------- Fields --------------------

    readonly #games
    readonly #gameStyles
    readonly #times

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(games: GameCollection, gameStyles: GameStyleCollection, times: TimeCollection) {
        this.#games = games
        this.#gameStyles = gameStyles
        this.#times = times
    }

    //endregion -------------------- Constructor --------------------

    public get content() {
        const games = this.#games
        const gameStyles = this.#gameStyles
        const times = this.#times
        return filterByArray(ALL, ({reference,},) =>
            games.hasAnyIn(reference,)
            && gameStyles.hasAnyIn(reference,)
            && times.hasAnyIn(reference,),)
    }

    //region -------------------- Card --------------------

    public createCardListDimension() {
        return {
            default: 1,
            small: 2,
            medium: 3,
            large: 4,
            extraLarge: 6,
        } as const satisfies DimensionOnList
    }

    public createCardListContent(entity: Entities,) {
        const reference = entity.reference
        const category = reference.categoryEnglish === EMPTY_STRING ? EMPTY_STRING : `entityCategory-${reference.categoryEnglish}`//TODO move to the parent container className.
        //TODO encapsulate the voiceSound into a sound interpreter.
        return <div className={`${category}`}>
            <SingleEntityImage reference={entity} gameStyles={this.#gameStyles}/>
            <EditorVoiceSoundComponent editorVoiceSound={entity.editorVoiceSoundFileHolder} name={entity.englishName}/>
        </div>
    }

    //endregion -------------------- Card --------------------
    //region -------------------- Table --------------------

    public readonly tableHeadersColor = 'secondary' satisfies BootstrapThemeColor

    public get tableCaption() {
        const entity = OtherWordInTheGames.ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.ENTITY.singularEnglishName,)
        const entityAsLowerCase = OtherWordInTheGames.ENTITY.singularLowerCaseNameOnReferenceOrNull ?? entity.toLowerCase()
        return gameContentTranslation('entity.all', {Entity: entity, entity: entityAsLowerCase,},) satisfies ReactElementOrString
    }

    public get tableOptions(): Array<EntityAppOption> {
        const games = this.#games
        const gameStyles = this.#gameStyles
        const hasSmm2 = games.hasSmm2

        const options: MutableArray<EntityAppOption> = []
        if (gameStyles.hasSmb)
            options.push(EntityAppOption.IMAGE_IN_SMB,)
        if (gameStyles.hasSmb3)
            options.push(EntityAppOption.IMAGE_IN_SMB3,)
        if (gameStyles.hasSmw)
            options.push(EntityAppOption.IMAGE_IN_SMW,)
        if (gameStyles.hasNsmbu)
            options.push(EntityAppOption.IMAGE_IN_NSMBU,)
        if (gameStyles.hasSm3dw && hasSmm2) // The SMM2 validation is a fail-safe
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
            if (games.hasSmm1Or3ds)
                options.push(EntityAppOption.EDITOR_LIMIT_IN_SMM1_AND_3DS_ONLY,)
            if (hasSmm2)
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

    //endregion -------------------- Table --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyEntity (list)',],
    [ViewDisplays.CARD_LIST, 'everyEntity (card)',],
    [ViewDisplays.TABLE, 'everyEntity (table)',],
] as const satisfies Array<ViewAndRouteName>

/** @reactComponent */
export default function EntityApp({viewDisplay, games, gameStyles, times,}: EntityProperties,) {
    const entity = OtherWordInTheGames.ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.ENTITY.singularEnglishName,)
    const entityAsLowerCase = OtherWordInTheGames.ENTITY.singularLowerCaseNameOnReferenceOrNull ?? entity.toLowerCase()
    const entities = OtherWordInTheGames.ENTITY.pluralNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.ENTITY.pluralEnglishName,)
    const entitiesAsLowerCase = OtherWordInTheGames.ENTITY.pluralLowerCaseNameOnReferenceOrNull ?? entities.toLowerCase()

    //region -------------------- Game selection --------------------

    const game = games.hasAllGames
        ? EntityGames.ALL_GAMES
        : games.hasSmm2
            ? EntityGames.SUPER_MARIO_MAKER_2
            : games.hasSmm1
                ? EntityGames.SUPER_MARIO_MAKER
                : EntityGames.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    //endregion -------------------- Game selection --------------------
    //region -------------------- Game style selection --------------------

    const amountOfSelectedGameStyles = intersect(ALL_GAME_STYLES, gameStyles,).length
    const gameStyle = games.hasSmm2
        ? amountOfSelectedGameStyles === 5
            ? EntityGameStyles.ALL_GAME_STYLES
            : amountOfSelectedGameStyles !== 1
                ? EntityGameStyles.NOT_INDIVIDUAL_GAME_STYLE
                : gameStyles.hasSmb
                    ? EntityGameStyles.SUPER_MARIO_BROS
                    : gameStyles.hasSmb3
                        ? EntityGameStyles.SUPER_MARIO_BROS_3
                        : gameStyles.hasSmw
                            ? EntityGameStyles.SUPER_MARIO_WORLD
                            : gameStyles.hasNsmbu
                                ? EntityGameStyles.NEW_SUPER_MARIO_BROS_U
                                : EntityGameStyles.SUPER_MARIO_3D_WORLD
        : amountOfSelectedGameStyles === 5 || amountOfSelectedGameStyles === 4
            ? EntityGameStyles.ALL_GAME_STYLES
            : amountOfSelectedGameStyles !== 1
                ? EntityGameStyles.NOT_INDIVIDUAL_GAME_STYLE
                : gameStyles.hasSmb
                    ? EntityGameStyles.SUPER_MARIO_BROS
                    : gameStyles.hasSmb3
                        ? EntityGameStyles.SUPER_MARIO_BROS_3
                        : gameStyles.hasSmw
                            ? EntityGameStyles.SUPER_MARIO_WORLD
                            : EntityGameStyles.NEW_SUPER_MARIO_BROS_U

    //endregion -------------------- Game style selection --------------------
    //region -------------------- Time selection --------------------

    const time = games.hasNotSmm2AndSmm1Or3ds
        ? null
        : times.hasAllTimes
            ? EntityTimes.ALL_TIMES
            : times.hasDay
                ? EntityTimes.DAY
                : EntityTimes.NIGHT

    //endregion -------------------- Time selection --------------------

    return <SubMainContainer reactKey="entity" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('entity.all', {
                                 Entity: entity, Entities: entities, entity: entityAsLowerCase, entities: entitiesAsLowerCase,
                             },)}
                             asideContent={<EntityAsideContent game={game} gameStyle={gameStyle} time={time} games={games} gameStyles={gameStyles}/>}>
        <SubContent viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay, games, gameStyles, times,}: EntityProperties,) {
    const appInterpreter = new EntityAppInterpreter(games, gameStyles, times,)

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <EntityList items={appInterpreter.content} gameStyles={gameStyles}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="entity" interpreter={appInterpreter}/>
    return <Table id="entity-table" interpreter={appInterpreter}/>
}

//region -------------------- List --------------------

interface Entity_ListProperties
    extends ReactProperties {

    readonly items: CollectionHolder<Entities>

    readonly gameStyles: GameStyleCollection

}

/** @reactComponent */
function EntityList({items, gameStyles,}: Entity_ListProperties,) {
    return <List partialId="entity" items={items} withSeparator>{it =>
        <div className="d-flex justify-content-between">
            <div className="d-flex">
                <NameComponent id="entity-name" name={it.reference} popoverOrientation="top"/>
                <SingleEntityImage reference={it} gameStyles={gameStyles}/>
            </div>
            <EditorVoiceSoundComponent editorVoiceSound={it.editorVoiceSoundFileHolder} name={it.englishName}/>
        </div>
    }</List>
}

//endregion -------------------- List --------------------
//region -------------------- Aside content --------------------

interface EntityAsideContentProperties
    extends ReactProperties {

    readonly game: NullOr<EntityGames>
    readonly gameStyle: EntityGameStyles
    readonly time: NullOr<EntityTimes>

    readonly games: GameCollection
    readonly gameStyles: GameStyleCollection

}

/** @reactComponent */
function EntityAsideContent({games, gameStyles, time, game, gameStyle,}: EntityAsideContentProperties,) {
    return <div className="entity-asideContent-container">
        <GameAsideContent game={game} gameStyles={gameStyles}/>
        {game == null ? null : <div className="d-inline mx-1"/>}
        <GameStyleAsideContent gameStyle={gameStyle} games={games} gameStyles={gameStyles}/>
        {time == null ? null : <div className="d-inline mx-1"/>}
        <TimeAsideContent time={time}/>
    </div>
}

/** @reactComponent */
function GameAsideContent({game, gameStyles,}: Pick<EntityAsideContentProperties, | 'game' | 'gameStyles'>,) {
    if (game == null)
        return null
    if (gameStyles.hasSm3dwAndSizeOfNot4Or5)
        return <div id="entity-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
            <LinkButton partialId="allGameLimit" routeName={game.allRouteName} color={game.allColor}>{contentTranslation('All',)}</LinkButton>
            <LinkButton partialId="smm2Game" routeName={game.smm2RouteName} color={game.smm2Color}>
                <GameImage reference={SMM2}/>
            </LinkButton>
        </div>

    return <div id="entity-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partialId="allGameLimit" routeName={game.allRouteName} color={game.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="entity-gamesButton-singularGame-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smm1Game" routeName={game.smm1RouteName} color={game.smm1Color}>
                <GameImage reference={SMM1}/>
            </LinkButton>
            <LinkButton partialId="smm3dsGame" routeName={game.smm3dsRouteName} color={game.smm3dsColor}>
                <GameImage reference={SMM3DS}/>
            </LinkButton>
            <LinkButton partialId="smm2Game" routeName={game.smm2RouteName} color={game.smm2Color}>
                <GameImage reference={SMM2}/>
            </LinkButton>
        </div>
    </div>
}

/** @reactComponent */
function GameStyleAsideContent({gameStyle, games, gameStyles,}: Pick<EntityAsideContentProperties, | 'gameStyle' | 'games' | 'gameStyles'>,) {
    if (games.hasSmm2)
        //The game styles are in SMM2
        return <div id="entity-gameStylesButton-container" className="gameStyleAsideContent-container btn-group-vertical btn-group-sm">
            <LinkButton partialId="allGameStyleLimit" routeName={gameStyle.allRouteName} color={gameStyle.allColor}>{contentTranslation('All',)}</LinkButton>
            <div id="entity-gameStylesButton-singularGameStyle-top-container" className="btn-group btn-group-sm">
                <LinkButton partialId="smbGameStyleLimit" routeName={gameStyle.smbRouteName} color={gameStyle.smbColor(gameStyles.hasSmb,)}>
                    <GameStyleImage reference={SMB}/>
                </LinkButton>
                <LinkButton partialId="smb3GameStyleLimit" routeName={gameStyle.smb3RouteName} color={gameStyle.smb3Color(gameStyles.hasSmb3,)}>
                    <GameStyleImage reference={SMB3}/>
                </LinkButton>
                <LinkButton partialId="smwGameStyleLimit" routeName={gameStyle.smwRouteName} color={gameStyle.smwColor(gameStyles.hasSmw,)}>
                    <GameStyleImage reference={SMW}/>
                </LinkButton>
            </div>
            <div id="entity-gameStylesButton-singularGameStyle-bottom-container" className="btn-group btn-group-sm">
                <LinkButton partialId="nsmbuGameStyleLimit" routeName={gameStyle.nsmbuRouteName} color={gameStyle.nsmbuColor(gameStyles.hasNsmbu,)}>
                    <GameStyleImage reference={NSMBU}/>
                </LinkButton>
                <LinkButton partialId="sm3dwGameStyleLimit" routeName={gameStyle.sm3dwRouteName} color={gameStyle.sm3dwColor(gameStyles.hasSm3dw,)}>
                    <GameStyleImage reference={SM3DW}/>
                </LinkButton>
            </div>
        </div>
    //The game styles are in SMM1 / SMM3DS
    return <div id="entity-gameStylesButton-container" className="gameStyleAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partialId="allGameStyleLimit" routeName={gameStyle.allRouteName} color={gameStyle.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="entity-gameStylesButton-singularGameStyle-top-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smbGameStyleLimit" routeName={gameStyle.smbRouteName} color={gameStyle.smbColor(gameStyles.hasSmb,)}>
                <GameStyleImage reference={SMB}/>
            </LinkButton>
            <LinkButton partialId="smb3GameStyleLimit" routeName={gameStyle.smb3RouteName} color={gameStyle.smb3Color(gameStyles.hasSmb3,)}>
                <GameStyleImage reference={SMB3}/>
            </LinkButton>
        </div>
        <div id="entity-gameStylesButton-singularGameStyle-bottom-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smwGameStyleLimit" routeName={gameStyle.smwRouteName} color={gameStyle.smwColor(gameStyles.hasSmw,)}>
                <GameStyleImage reference={SMW}/>
            </LinkButton>
            <LinkButton partialId="nsmbuGameStyleLimit" routeName={gameStyle.nsmbuRouteName} color={gameStyle.nsmbuColor(gameStyles.hasNsmbu,)}>
                <GameStyleImage reference={NSMBU}/>
            </LinkButton>
        </div>
    </div>
}

/** @reactComponent */
function TimeAsideContent({time,}: Pick<EntityAsideContentProperties, 'time'>,) {
    if (time == null)
        return null
    return <div id="entity-timesButton-container" className="timeAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partialId="allTime" routeName={time.allRouteName} color={time.allColor}>{contentTranslation('All',)}</LinkButton>
        <div className="btn-group btn-group-sm">
            <LinkButton partialId="dayTime" routeName={time.dayRouteName} color={time.dayColor}>
                <TimeImage reference={Times.DAY}/>
            </LinkButton>
            <LinkButton partialId="nightTime" routeName={time.nightRouteName} color={time.nightColor}>
                <TimeImage reference={Times.NIGHT}/>
            </LinkButton>
        </div>
    </div>
}

//endregion -------------------- Aside content --------------------
