import 'app/_GameAsideContent.scss'
import 'app/_GameStyleAsideContent.scss'
import 'app/_TimeAsideContent.scss'
import './SoundEffectApp.scss'

import type {MutableArray, NullOr} from '@joookiwi/type'
import type {CollectionHolder}     from '@joookiwi/collection'

import type {SoundEffectProperties} from 'app/AppProperties.types'
import type {GameCollection}        from 'util/collection/GameCollection'
import type {GameStyleCollection}   from 'util/collection/GameStyleCollection'
import type {ReactProperties}       from 'util/react/ReactProperties'

import {SoundEffectAppOption}                       from 'app/options/SoundEffectAppOption'
import LinkButton                                   from 'app/tools/button/LinkButton'
import Table                                        from 'app/tools/table/Table'
import UnfinishedText                               from 'app/tools/text/UnfinishedText'
import {SoundEffectGames}                           from 'app/property/SoundEffectGames'
import {SoundEffectGameStyles}                      from 'app/property/SoundEffect.gameStyles'
import {SoundEffectTimes}                           from 'app/property/SoundEffect.times'
import CardList                                     from 'app/util/CardList'
import List                                         from 'app/util/List'
import AppTitle                                     from 'app/util/PageTitle'
import PageViewChanger                              from 'app/util/PageViewChanger'
import SubMain                                      from 'app/util/SubMain'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import {Games}                                      from 'core/game/Games'
import GameImage                                    from 'core/game/component/GameImage'
import {GameStyles}                                 from 'core/gameStyle/GameStyles'
import GameStyleImage                               from 'core/gameStyle/component/GameStyleImage'
import {SoundEffects}                               from 'core/soundEffect/SoundEffects'
import {Times}                                      from 'core/time/Times'
import TimeImage                                    from 'core/time/component/TimeImage'
import DisplayButtonGroup                           from 'display/DisplayButtonGroup'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent                                from 'lang/name/component/Name.component'
import {intersect}                                  from 'util/utilitiesMethods'
import {ArrayAsCollection}                          from 'util/collection/ArrayAsCollection'

import ALL =                   SoundEffects.ALL
import ALL_GAME_STYLES =       GameStyles.ALL
import NSMBU =                 GameStyles.NSMBU
import renderSMM1And3DSImage = SoundEffectAppOption.renderSMM1And3DSImage
import renderSMM2Image =       SoundEffectAppOption.renderSMM2Image
import SMB =                   GameStyles.SMB
import SMB3 =                  GameStyles.SMB3
import SMM1 =                  Games.SMM1
import SMM2 =                  Games.SMM2
import SMM3DS =                Games.SMM3DS
import SMW =                   GameStyles.SMW
import SM3DW =                 GameStyles.SM3DW

const all = new ArrayAsCollection(ALL,)

/** @reactComponent */
export default function SoundEffectApp({viewDisplay, games, gameStyles, times,}: SoundEffectProperties,) {
    //region -------------------- Game selection --------------------

    const game = games.hasAllGames
        ? SoundEffectGames.ALL_GAMES
        : games.hasSmm2
            ? SoundEffectGames.SUPER_MARIO_MAKER_2
            : SoundEffectGames.SUPER_MARIO_MAKER_OR_SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    //endregion -------------------- Game selection --------------------
    //region -------------------- Game style selection --------------------

    const amountOfSelectedGameStyles = intersect(ALL_GAME_STYLES, gameStyles,).length
    const gameStyle = games.hasSmm2
        ? amountOfSelectedGameStyles === 5
            ? SoundEffectGameStyles.ALL_GAME_STYLES
            : amountOfSelectedGameStyles !== 1
                ? SoundEffectGameStyles.MIXED_GAME_STYLE
                : gameStyles.hasSmb
                    ? SoundEffectGameStyles.SMB
                    : gameStyles.hasSmb3
                        ? SoundEffectGameStyles.SMB3
                        : gameStyles.hasSmw
                            ? SoundEffectGameStyles.SMW
                            : gameStyles.hasNsmbu
                                ? SoundEffectGameStyles.NSMBU
                                : SoundEffectGameStyles.SM3DW
        : amountOfSelectedGameStyles === 5 || amountOfSelectedGameStyles === 4
            ? SoundEffectGameStyles.ALL_GAME_STYLES
            : amountOfSelectedGameStyles !== 1
                ? SoundEffectGameStyles.MIXED_GAME_STYLE
                : gameStyles.hasSmb
                    ? SoundEffectGameStyles.SMB
                    : gameStyles.hasSmb3
                        ? SoundEffectGameStyles.SMB3
                        : gameStyles.hasSmw
                            ? SoundEffectGameStyles.SMW
                            : SoundEffectGameStyles.NSMBU

    //endregion -------------------- Game style selection --------------------
    //region -------------------- Time selection --------------------

    const time = games.hasNotSmm2AndSmm1Or3ds
        ? null
        : times.hasAllTimes
            ? SoundEffectTimes.ALL_TIMES
            : times.hasDay
                ? SoundEffectTimes.DAY
                : SoundEffectTimes.NIGHT

    //endregion -------------------- Time selection --------------------

    return <SubMain partial-id="soundEffect" viewDisplay={viewDisplay}>
        <AppTitle>{gameContentTranslation('sound effect.all',)}</AppTitle>
        <PageViewChanger>
            <GameAsideContent game={game} gameStyles={gameStyles}/>
            <GameStyleAsideContent gameStyle={gameStyle} games={games} gameStyles={gameStyles}/>
            <TimeAsideContent time={time}/>
            <DisplayButtonGroup list="everySoundEffect (list)" card="everySoundEffect (card)" table="everySoundEffect (table)" current={viewDisplay}/>
        </PageViewChanger>
        <UnfinishedText type="paragraph" isHidden>sound effect description</UnfinishedText>
        <section id="soundEffect-app-content" className="app-content">
            <SubContent viewDisplay={viewDisplay} games={games} gameStyles={gameStyles} times={times}/>
        </section>
    </SubMain>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay, games,}: SoundEffectProperties,) {
    const items = all.filter(({reference,},) =>
        games.hasAnyIn(reference,),)

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SoundEffectList items={items} games={games}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <SoundEffectCardList items={items} games={games}/>
    return <SoundEffectTable items={items} games={games}/>
}


interface SoundEffect_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<SoundEffects>

    readonly games: GameCollection

}

/** @reactComponent */
function SoundEffectList({items, games: {hasSmm1Or3ds, hasSmm2,},}: SoundEffect_SubContentProperties,) {
    return <List partialId="soundEffect" items={items} withSeparator>{it =>
        <div className="d-flex justify-content-between">
            <NameComponent id="soundEffect-name" name={it.reference} popoverOrientation="right"/>
            <div className="soundEffect-images-container">
                {hasSmm1Or3ds ? renderSMM1And3DSImage(it,) : null}
                {hasSmm2 ? renderSMM2Image(it,) : null}
            </div>
        </div>
    }</List>
}

/** @reactComponent */
function SoundEffectCardList({items, games: {hasSmm1Or3ds, hasSmm2,},}: SoundEffect_SubContentProperties,) {
    return <CardList partial-id="soundEffect" items={items} default={1} small={3} medium={4} large={5} extra-large={6}>{it =>
        <>
            <NameComponent id="soundEffect-name" name={it.reference} popoverOrientation="right"/>
            <div className="soundEffect-images-container">
                {hasSmm1Or3ds ? renderSMM1And3DSImage(it,) : null}
                {hasSmm2 ? renderSMM2Image(it,) : null}
            </div>
        </>
    }</CardList>
}

/** @reactComponent */
function SoundEffectTable({items, games,}: SoundEffect_SubContentProperties,) {
    return <Table id="soundEffect-table" items={items} options={getOptions(games,)} caption={gameContentTranslation('sound effect.all',)} headersColor="info"/>
}

function getOptions(games: GameCollection,): CollectionHolder<SoundEffectAppOption> {
    const {hasSmm2, hasSmm1Or3ds,} = games
    const options: MutableArray<SoundEffectAppOption> = []
    if (hasSmm1Or3ds)
        options.push(SoundEffectAppOption.SMM1_AND_SMM3DS_ICON,)
    if (hasSmm2)
        options.push(SoundEffectAppOption.SMM2_ICON,)
    options.push(
        SoundEffectAppOption.NAME,
        SoundEffectAppOption.CATEGORY,
        SoundEffectAppOption.PLAYER_BEHAVIOUR,
    )
    if (games.hasAllGames)
        options.push(SoundEffectAppOption.SOUNDS,)
    else {
        if (hasSmm1Or3ds)
            options.push(SoundEffectAppOption.SOUNDS_IN_SMM1_AND_3DS_ONLY,)
        if (hasSmm2)
            options.push(SoundEffectAppOption.SOUNDS_IN_SMM2_ONLY,)
    }
    return new ArrayAsCollection(options,)
}

//endregion -------------------- Sub content --------------------
//region -------------------- Aside content --------------------

interface SoundEffectAsideContentProperties
    extends ReactProperties {

    readonly game: NullOr<SoundEffectGames>
    readonly gameStyle: SoundEffectGameStyles
    readonly time: NullOr<SoundEffectTimes>

    readonly games: GameCollection
    readonly gameStyles: GameStyleCollection

}

/** @reactComponent */
function GameAsideContent({game, gameStyles,}: Pick<SoundEffectAsideContentProperties, | 'game' | 'gameStyles'>,) {
    if (game == null)
        return null
    if (gameStyles.hasSm3dwAndSizeOfNot4Or5)
        return <div id="soundEffect-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
            <LinkButton partialId="allGameLimit" routeName={game.allRouteName} color={game.allColor}>{contentTranslation('All',)}</LinkButton>
            <LinkButton partialId="smm2Game" routeName={game.smm2RouteName} color={game.smm2Color}>
                <GameImage reference={SMM2}/>
            </LinkButton>
        </div>

    return <div id="soundEffect-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partialId="allGameLimit" routeName={game.allRouteName} color={game.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="soundEffect-gamesButton-singularGame-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smm1Or3dsGame" routeName={game.smm1Or3dsRouteName} color={game.smm1Or3dsColor}>
                <GameImage reference={SMM1}/>
                <GameImage reference={SMM3DS}/>
            </LinkButton>
            <LinkButton partialId="smm2Game" routeName={game.smm2RouteName} color={game.smm2Color}>
                <GameImage reference={SMM2}/>
            </LinkButton>
        </div>
    </div>
}

/** @reactComponent */
function GameStyleAsideContent({gameStyle, games, gameStyles,}: Pick<SoundEffectAsideContentProperties, | 'gameStyle' | 'games' | 'gameStyles'>,) {
    if (games.hasSmm2)
        //The game styles are in SMM2
        return <div id="soundEffect-gameStylesButton-container" className="gameStyleAsideContent-container btn-group-vertical btn-group-sm">
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
    return <div id="soundEffect-gameStylesButton-container" className="gameStyleAsideContent-container btn-group-vertical btn-group-sm">
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
function TimeAsideContent({time,}: Pick<SoundEffectAsideContentProperties, 'time'>,) {
    if (time == null)
        return null
    return <div id="soundEffect-timesButton-container" className="timeAsideContent-container btn-group-vertical btn-group-sm">
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
