import 'app/_GameAsideContent.scss'
import 'app/_TimeAsideContent.scss'
import './EditorVoiceApp.scss'

import type {NullOr, NullOrString} from '@joookiwi/type'
import type {CollectionHolder}     from '@joookiwi/collection'

import type {EditorVoiceProperties} from 'app/AppProperties.types'
import type {ReactProperties}       from 'util/react/ReactProperties'
import type {PossibleRouteName}     from 'route/EveryRoutes.types'

import {EditorVoiceAppOption}                       from 'app/options/EditorVoiceAppOption'
import {EditorVoiceGames}                           from 'app/property/EditorVoiceGames'
import {EditorVoiceTimes}                           from 'app/property/EditorVoiceTimes'
import LinkButton                                   from 'app/tools/button/LinkButton'
import Table                                        from 'app/tools/table/Table'
import LinkText                                     from 'app/tools/text/LinkText'
import TextOrLink                                   from 'app/tools/text/TextOrLink'
import {unfinishedText}                             from 'app/tools/text/UnfinishedText'
import AppTitle                                     from 'app/util/AppTitle'
import CardList                                     from 'app/util/CardList'
import ContentBeingDisplayed                        from 'app/util/ContentBeingDisplayed'
import Description                                  from 'app/util/Description'
import List                                         from 'app/util/List'
import PageViewChanger                              from 'app/util/PageViewChanger'
import SubMain                                      from 'app/util/SubMain'
import {EditorVoices}                               from 'core/editorVoice/EditorVoices'
import EditorVoiceSound                             from 'core/editorVoice/component/EditorVoiceSound'
import {Games}                                      from 'core/game/Games'
import GameImage                                    from 'core/game/component/GameImage'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import {Times}                                      from 'core/time/Times'
import TimeImage                                    from 'core/time/component/TimeImage'
import {Themes}                                     from 'core/theme/Themes'
import ThemeImage                                   from 'core/theme/component/ThemeImage'
import DisplayButtonGroup                           from 'display/DisplayButtonGroup'
import {ViewDisplays}                               from 'display/ViewDisplays'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent                                from 'lang/name/component/Name.component'
import {ArrayAsCollection}                          from 'util/collection/ArrayAsCollection'

import ALL =    EditorVoices.ALL
import SMM1 =   Games.SMM1
import SMM2 =   Games.SMM2
import SMM3DS = Games.SMM3DS

//region -------------------- Import from deconstruction --------------------

const {ENTITY,} = OtherWordInTheGames
const {LIST, CARD,} = ViewDisplays

//endregion -------------------- Import from deconstruction --------------------

const all = new ArrayAsCollection(ALL,)
const options = EditorVoiceAppOption.CompanionEnum.get.values

/** @reactComponent */
export default function EditorVoiceApp({viewDisplay, games, times,}: EditorVoiceProperties,) {
    //region -------------------- Game selection --------------------

    const game = games.hasAllGames
        ? EditorVoiceGames.ALL_GAMES
        : games.hasSmm2
            ? EditorVoiceGames.SUPER_MARIO_MAKER_2
            : games.hasSmm1
                ? EditorVoiceGames.SUPER_MARIO_MAKER
                : EditorVoiceGames.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    //endregion -------------------- Game selection --------------------
    //region -------------------- Time selection --------------------

    const time = games.hasNotSmm2AndSmm1Or3ds
        ? null
        : times.hasAllTimes
            ? EditorVoiceTimes.ALL_TIMES
            : times.hasDay
                ? EditorVoiceTimes.DAY
                : EditorVoiceTimes.NIGHT

    //endregion -------------------- Time selection --------------------

    return <SubMain partial-id="editorVoice" viewDisplay={viewDisplay}>
        <AppTitle>{gameContentTranslation('editor voice.all',)}</AppTitle>
        <PageViewChanger>
            <GameAsideContent game={game}/>
            <TimeAsideContent time={time}/>
            <DisplayButtonGroup list="everyEditorVoice (list)" card="everyEditorVoice (card)" table="everyEditorVoice (table)" current={viewDisplay}/>
        </PageViewChanger>
        <EditorVoiceDescription viewDisplay={viewDisplay} game={game}/>
        <section id="editorVoice-app-content" className="app-content">
            <SubContent viewDisplay={viewDisplay} games={games} times={times}/>
        </section>
    </SubMain>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay, games, times,}: Omit<EditorVoiceProperties, 'gameStyles'>,) {
    const items = all.filter(({reference,},) =>
        games.hasAnyIn(reference,)
        && (times.hasAllTimes || times.hasAnyIn(reference,)),)

    if (viewDisplay === LIST)
        return <EditorVoiceList items={items}/>
    if (viewDisplay === CARD)
        return <EditorVoiceCardList items={items}/>
    return <EditorVoiceTable items={items}/>
}


interface EditorVoice_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<EditorVoices>

}

/** @reactComponent */
function EditorVoiceList({items,}: EditorVoice_SubContentProperties,) {
    return <List partial-id="editorVoice" items={items} withSeparator>{it =>
        <div className="d-flex justify-content-between">
            <NameComponent id="editorVoice-name" name={it.reference} popoverOrientation="top"/>
            <EditorVoiceSound editorVoice={it}/>
        </div>
    }</List>
}

/** @reactComponent */
function EditorVoiceCardList({items,}: EditorVoice_SubContentProperties,) {
    return <CardList partial-id="editorVoice" items={items} default={1} small={3} medium={4} large={6}>{it =>
        <>
            <NameComponent id="editorVoice-name" name={it.reference} popoverOrientation="left"/>
            <EditorVoiceSound editorVoice={it}/>
        </>
    }</CardList>
}

/** @reactComponent */
function EditorVoiceTable({items,}: EditorVoice_SubContentProperties,) {
    return <Table id="editorVoice-table" items={items} options={options} caption={gameContentTranslation('editor voice.all',)} headersColor="info"/>
}

//endregion -------------------- Sub content --------------------
//region -------------------- Description content --------------------

interface EditorVoiceDescriptionProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly game: EditorVoiceGames

}

/** @reactComponent */
function EditorVoiceDescription({viewDisplay, game,}: EditorVoiceDescriptionProperties,) {
    const entity = ENTITY.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(ENTITY.singularEnglishName.toLowerCase(),)

    const smm1Link = game.smm1RouteName satisfies NullOrString<PossibleRouteName>
    const smm3dsLink = game.smm3dsRouteName satisfies NullOrString<PossibleRouteName>
    const smm2Link = game.smm2RouteName satisfies NullOrString<PossibleRouteName>

    return <Description>
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
                entityLink: <LinkText key="entityLink" partial-id="entityLink" routeName="everyEntity" color="primary">{entity}</LinkText>,
                underwaterLink: <LinkText key="underwaterLink" partial-id="underwaterEntityLink" routeName="everyEntity" color="primary"><ThemeImage reference={Themes.UNDERWATER}
                                                                                                                                                    isSmallPath/></LinkText>,
                europeanVariantLink: <LinkText key="europeanVariantLink" partial-id="europeanEntityLink" routeName="everyEntity" color="primary">{contentTranslation('variant.European',)}</LinkText>,
            },)}
        </p>
        <ContentBeingDisplayed viewDisplay={viewDisplay} routeName="everyEditorVoice"/>
    </Description>
}

//endregion -------------------- Description content --------------------
//region -------------------- Aside content --------------------

interface EditorVoice_AsideContentProperties
    extends ReactProperties {

    readonly game: NullOr<EditorVoiceGames>
    readonly time: NullOr<EditorVoiceTimes>

}

/** @reactComponent */
function GameAsideContent({game,}: Pick<EditorVoice_AsideContentProperties, 'game'>,) {
    if (game == null)
        return null
    return <div id="editorVoice-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partial-id="allGameLimit" routeName={game.allRouteName} color={game.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="editorVoice-gamesButton-singularGame-container" className="btn-group btn-group-sm">
            <LinkButton partial-id="smm1Game" routeName={game.smm1RouteName} color={game.smm1Color}><GameImage reference={SMM1}/></LinkButton>
            <LinkButton partial-id="smm3dsGame" routeName={game.smm3dsRouteName} color={game.smm3dsColor}><GameImage reference={SMM3DS}/></LinkButton>
            <LinkButton partial-id="smm2Game" routeName={game.smm2RouteName} color={game.smm2Color}><GameImage reference={SMM2}/></LinkButton>
        </div>
    </div>
}

/** @reactComponent */
function TimeAsideContent({time,}: Pick<EditorVoice_AsideContentProperties, 'time'>,) {
    if (time == null)
        return null
    return <div id="editorVoice-timesButton-container" className="timeAsideContent-container btn-group-vertical btn-group-sm">
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
