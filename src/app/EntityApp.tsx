import 'app/_GameAsideContent.scss'
import 'app/_GameStyleAsideContent.scss'
import 'app/_TimeAsideContent.scss'
import './EntityApp.scss'

import type {MutableArray, NullOr}     from '@joookiwi/type'
import type {CollectionHolder}         from '@joookiwi/collection'
import type {Dispatch, SetStateAction} from 'react'
import {useState}                      from 'react'

import type {EntityProperties}    from 'app/AppProperties.types'
import type {GameCollection}      from 'util/collection/GameCollection'
import type {GameStyleCollection} from 'util/collection/GameStyleCollection'
import type {ReactProperties}     from 'util/react/ReactProperties'

import {EntityAppOption}                            from 'app/options/EntityAppOption'
import {EntityGames}                                from 'app/property/EntityGames'
import {EntityGameStyles}                           from 'app/property/EntityGameStyles'
import {EntityTimes}                                from 'app/property/EntityTimes'
import LinkButton                                   from 'app/tools/button/LinkButton'
import Table                                        from 'app/tools/table/Table'
import UnfinishedText, {unfinishedText}             from 'app/tools/text/UnfinishedText'
import EntitySideContent                            from 'app/side/EntitySideContent'
import CardList                                     from 'app/util/CardList'
import List                                         from 'app/util/List'
import AppTitle                                     from 'app/util/PageTitle'
import PageViewChanger                              from 'app/util/PageViewChanger'
import SubMain                                      from 'app/util/SubMain'
import {BootstrapInstanceHandler}                   from 'bootstrap/BootstrapInstanceHandler'
import EditorVoiceSound                             from 'core/editorVoice/component/EditorVoiceSound'
import {Entities}                                   from 'core/entity/Entities'
import SingleEntityImage                            from 'core/entity/component/SingleEntityImage'
import {Games}                                      from 'core/game/Games'
import GameImage                                    from 'core/game/component/GameImage'
import {GameStyles}                                 from 'core/gameStyle/GameStyles'
import GameStyleImage                               from 'core/gameStyle/component/GameStyleImage'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import {Times}                                      from 'core/time/Times'
import TimeImage                                    from 'core/time/component/TimeImage'
import DisplayButtonGroup                           from 'display/DisplayButtonGroup'
import {ViewDisplays}                               from 'display/ViewDisplays'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent                                from 'lang/name/component/Name.component'
import {ENTITY_SIDE_CONTENT}                        from 'navigation/offcanvas ids'
import {Empty}                                      from 'util/emptyVariables'
import {intersect}                                  from 'util/utilitiesMethods'
import {ArrayAsCollection}                          from 'util/collection/ArrayAsCollection'
import {TimeCollection}                             from 'util/collection/TimeCollection'

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

//region -------------------- Import from deconstruction --------------------

const {ENTITY,} = OtherWordInTheGames
const {LIST, CARD,} = ViewDisplays

//endregion -------------------- Import from deconstruction --------------------

const all = new ArrayAsCollection(ALL,)

/** @reactComponent */
export default function EntityApp({viewDisplay, games, gameStyles, times,}: EntityProperties,) {
    const [sideEntity, setSideEntity,] = useState<NullOr<Entities>>(null,)
    const entity = ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(ENTITY.singularEnglishName,)
    const entityAsLowerCase = ENTITY.singularLowerCaseNameOnReferenceOrNull ?? entity.toLowerCase()
    const entities = ENTITY.pluralNameOnReferenceOrNull ?? unfinishedText(ENTITY.pluralEnglishName,)
    const entitiesAsLowerCase = ENTITY.pluralLowerCaseNameOnReferenceOrNull ?? entities.toLowerCase()

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

    return <SubMain partial-id="entity" viewDisplay={viewDisplay}>
        <AppTitle>{gameContentTranslation('entity.all', {
            Entity: entity, Entities: entities, entity: entityAsLowerCase, entities: entitiesAsLowerCase,
        },)}</AppTitle>
        <aside id="entity-side-content">
            {sideEntity == null ? null : <EntitySideContent reference={sideEntity}/>}
        </aside>
        <PageViewChanger>
            <GameAsideContent game={game} gameStyles={gameStyles} times={times}/>
            <GameStyleAsideContent gameStyle={gameStyle} games={games} gameStyles={gameStyles}/>
            <TimeAsideContent time={time}/>
            <DisplayButtonGroup list="everyEntity (list)" card="everyEntity (card)" table="everyEntity (table)" current={viewDisplay}/>
        </PageViewChanger>
        <UnfinishedText type="paragraph" isHidden>entity description</UnfinishedText>
        <section id="entity-app-content" className="app-content">
            <SubContent viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times} displaySideContent={it => displaySideContent(setSideEntity, it,)}/>
        </section>
    </SubMain>
}

function displaySideContent(action: Dispatch<SetStateAction<NullOr<Entities>>>, entity: Entities,) {
    action(entity,)
    BootstrapInstanceHandler.get.getOffcanvasInstanceOrNull(ENTITY_SIDE_CONTENT,)?.instance.show()
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay, games, gameStyles, times, displaySideContent,}: EntityProperties & {displaySideContent(entity: Entities,): void,},) {
    const items = all.filter(({reference,},) =>
        games.hasAnyIn(reference,)
        && gameStyles.hasAnyIn(reference,)
        && times.hasAnyIn(reference,),)

    if (viewDisplay === LIST)
        return <EntityList items={items} gameStyles={gameStyles}/>
    if (viewDisplay === CARD)
        return <EntityCardList items={items} gameStyles={gameStyles}/>
    return <EntityTable items={items} games={games} gameStyles={gameStyles} displaySideContent={displaySideContent}/>
}


interface Entity_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<Entities>

    readonly games: GameCollection

    readonly gameStyles: GameStyleCollection

    displaySideContent(entity: Entities,): void

}

/** @reactComponent */
function EntityList({items, gameStyles,}: Pick<Entity_SubContentProperties, | 'items' | 'gameStyles'>,) {
    return <List partial-id="entity" items={items} withSeparator>{it =>
        <div className="d-flex justify-content-between">
            <div className="d-flex">
                <NameComponent id="entity-name" name={it.reference} popoverOrientation="top"/>
                <SingleEntityImage reference={it} gameStyles={gameStyles}/>
            </div>
            <EditorVoiceSound editorVoice={it.editorVoiceReference} name={it.englishName}/>
        </div>
    }</List>
}

/** @reactComponent */
function EntityCardList({items, gameStyles,}: Pick<Entity_SubContentProperties, | 'items' | 'gameStyles'>,) {
    return <CardList partial-id="entity" items={items} default={1} small={2} medium={3} large={4} extra-large={5} extra-extra-large={6}>{it => {

        const reference = it.reference
        const categoryName = reference.categoryEnglish
        //TODO encapsulate the voiceSound into a sound interpreter.
        return <div className={categoryName === EMPTY_STRING ? EMPTY_STRING : `entityCategory-${categoryName}`}>
            <NameComponent id="entity-name" name={it.reference} popoverOrientation="left"/>
            <SingleEntityImage reference={it} gameStyles={gameStyles}/>
            <EditorVoiceSound editorVoice={it.editorVoiceReference} name={it.englishName}/>
        </div>
    }}</CardList>
}

/** @reactComponent */
function EntityTable({items, games, gameStyles, displaySideContent,}: Entity_SubContentProperties,) {
    return <Table id="entity-table" items={items} options={getOptions(games, gameStyles,)} caption={getCaption()} onRowClicked={displaySideContent} headersColor="secondary"/>
}

function getOptions(games: GameCollection, gameStyles: GameStyleCollection,): CollectionHolder<EntityAppOption> {
    const {hasSmm2,} = games
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
    return new ArrayAsCollection(options,)
}

function getCaption() {
    const {ENTITY,} = OtherWordInTheGames
    const entity = ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(ENTITY.singularEnglishName,)
    const entityAsLowerCase = ENTITY.singularLowerCaseNameOnReferenceOrNull ?? entity.toLowerCase()

    return gameContentTranslation('entity.all', {Entity: entity, entity: entityAsLowerCase,},)
}

//endregion -------------------- Sub content --------------------
//region -------------------- Aside content --------------------

interface EntityAsideContentProperties
    extends ReactProperties {

    readonly game: NullOr<EntityGames>
    readonly gameStyle: EntityGameStyles
    readonly time: NullOr<EntityTimes>

    readonly games: GameCollection
    readonly gameStyles: GameStyleCollection
    readonly times: TimeCollection

}

/** @reactComponent */
function GameAsideContent({game, gameStyles, times,}: Pick<EntityAsideContentProperties, | 'game' | 'gameStyles' | 'times'>,) {
    if (game == null)
        return null
    if (gameStyles.hasOnlySm3dw || times.hasOnlyNight)
        return <div id="entity-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
            <LinkButton partial-id="allGameLimit" routeName={game.allRouteName} color={game.allColor}>{contentTranslation('All',)}</LinkButton>
            <LinkButton partial-id="smm2Game" routeName={game.smm2RouteName} color={game.smm2Color}>
                <GameImage reference={SMM2}/>
            </LinkButton>
        </div>

    return <div id="entity-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partial-id="allGameLimit" routeName={game.allRouteName} color={game.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="entity-gamesButton-singularGame-container" className="btn-group btn-group-sm">
            <LinkButton partial-id="smm1Game" routeName={game.smm1RouteName} color={game.smm1Color}>
                <GameImage reference={SMM1}/>
            </LinkButton>
            <LinkButton partial-id="smm3dsGame" routeName={game.smm3dsRouteName} color={game.smm3dsColor}>
                <GameImage reference={SMM3DS}/>
            </LinkButton>
            <LinkButton partial-id="smm2Game" routeName={game.smm2RouteName} color={game.smm2Color}>
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
            <LinkButton partial-id="allGameStyleLimit" routeName={gameStyle.allRouteName} color={gameStyle.allColor}>{contentTranslation('All',)}</LinkButton>
            <div id="entity-gameStylesButton-singularGameStyle-top-container" className="btn-group btn-group-sm">
                <LinkButton partial-id="smbGameStyleLimit" routeName={gameStyle.smbRouteName} color={gameStyle.smbColor(gameStyles.hasSmb,)}>
                    <GameStyleImage reference={SMB}/>
                </LinkButton>
                <LinkButton partial-id="smb3GameStyleLimit" routeName={gameStyle.smb3RouteName} color={gameStyle.smb3Color(gameStyles.hasSmb3,)}>
                    <GameStyleImage reference={SMB3}/>
                </LinkButton>
                <LinkButton partial-id="smwGameStyleLimit" routeName={gameStyle.smwRouteName} color={gameStyle.smwColor(gameStyles.hasSmw,)}>
                    <GameStyleImage reference={SMW}/>
                </LinkButton>
            </div>
            <div id="entity-gameStylesButton-singularGameStyle-bottom-container" className="btn-group btn-group-sm">
                <LinkButton partial-id="nsmbuGameStyleLimit" routeName={gameStyle.nsmbuRouteName} color={gameStyle.nsmbuColor(gameStyles.hasNsmbu,)}>
                    <GameStyleImage reference={NSMBU}/>
                </LinkButton>
                <LinkButton partial-id="sm3dwGameStyleLimit" routeName={gameStyle.sm3dwRouteName} color={gameStyle.sm3dwColor(gameStyles.hasSm3dw,)}>
                    <GameStyleImage reference={SM3DW}/>
                </LinkButton>
            </div>
        </div>
    //The game styles are in SMM1 / SMM3DS
    return <div id="entity-gameStylesButton-container" className="gameStyleAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partial-id="allGameStyleLimit" routeName={gameStyle.allRouteName} color={gameStyle.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="entity-gameStylesButton-singularGameStyle-top-container" className="btn-group btn-group-sm">
            <LinkButton partial-id="smbGameStyleLimit" routeName={gameStyle.smbRouteName} color={gameStyle.smbColor(gameStyles.hasSmb,)}>
                <GameStyleImage reference={SMB}/>
            </LinkButton>
            <LinkButton partial-id="smb3GameStyleLimit" routeName={gameStyle.smb3RouteName} color={gameStyle.smb3Color(gameStyles.hasSmb3,)}>
                <GameStyleImage reference={SMB3}/>
            </LinkButton>
        </div>
        <div id="entity-gameStylesButton-singularGameStyle-bottom-container" className="btn-group btn-group-sm">
            <LinkButton partial-id="smwGameStyleLimit" routeName={gameStyle.smwRouteName} color={gameStyle.smwColor(gameStyles.hasSmw,)}>
                <GameStyleImage reference={SMW}/>
            </LinkButton>
            <LinkButton partial-id="nsmbuGameStyleLimit" routeName={gameStyle.nsmbuRouteName} color={gameStyle.nsmbuColor(gameStyles.hasNsmbu,)}>
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
        <LinkButton partial-id="allTime" routeName={time.allRouteName} color={time.allColor}>{contentTranslation('All',)}</LinkButton>
        <div className="btn-group btn-group-sm">
            <LinkButton partial-id="dayTime" routeName={time.dayRouteName} color={time.dayColor}>
                <TimeImage reference={Times.DAY}/>
            </LinkButton>
            <LinkButton partial-id="nightTime" routeName={time.nightRouteName} color={time.nightColor}>
                <TimeImage reference={Times.NIGHT}/>
            </LinkButton>
        </div>
    </div>
}

//endregion -------------------- Aside content --------------------
