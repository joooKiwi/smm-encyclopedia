import 'app/_GameAsideContent.scss'
import 'app/_TimeAsideContent.scss'
import './CharacterNameApp.scss'

import type {NullOr, NullOrString} from '@joookiwi/type'
import type {CollectionHolder}     from '@joookiwi/collection'
import {Fragment}                  from 'react'

import type {CharacterNameProperties} from 'app/AppProperties.types'
import type {PossibleRouteName}       from 'route/EveryRoutes.types'
import type {ReactProperties}         from 'util/react/ReactProperties'

import {CharacterNameAppOption}                     from 'app/options/CharacterNameAppOption'
import {CharacterNameGames}                         from 'app/property/CharacterNameGames'
import {CharacterNameTimes}                         from 'app/property/CharacterNameTimes'
import LinkButton                                   from 'app/tools/button/LinkButton'
import Table                                        from 'app/tools/table/Table'
import TextOrLink                                   from 'app/tools/text/TextOrLink'
import {unfinishedText}                             from 'app/tools/text/UnfinishedText'
import AppTitle                                     from 'app/util/AppTitle'
import CardList                                     from 'app/util/CardList'
import ContentBeingDisplayed                        from 'app/util/ContentBeingDisplayed'
import Description                                  from 'app/util/Description'
import List                                         from 'app/util/List'
import PageTitle                                    from 'app/util/PageTitle'
import PageViewChanger                              from 'app/util/PageViewChanger'
import SubMain                                      from 'app/util/SubMain'
import {CharacterNames}                             from 'core/characterName/CharacterNames'
import EditorVoiceSound                             from 'core/editorVoice/component/EditorVoiceSound'
import GameImage                                    from 'core/game/component/GameImage'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import {Games}                                      from 'core/game/Games'
import {Times}                                      from 'core/time/Times'
import TimeImage                                    from 'core/time/component/TimeImage'
import DisplayButtonGroup                           from 'display/DisplayButtonGroup'
import {ViewDisplays}                               from 'display/ViewDisplays'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent                                from 'lang/name/component/Name.component'
import {ArrayAsCollection}                          from 'util/collection/ArrayAsCollection'

import ALL =    CharacterNames.ALL
import SMM1 =   Games.SMM1
import SMM2 =   Games.SMM2
import SMM3DS = Games.SMM3DS

//region -------------------- Import from deconstruction --------------------

const {MYSTERY_MUSHROOM, STORY_MODE,} = OtherWordInTheGames
const {LIST, CARD,} = ViewDisplays

//endregion -------------------- Import from deconstruction --------------------

const all = new ArrayAsCollection(ALL,)
const options = CharacterNameAppOption.CompanionEnum.get.values

/** @reactComponent */
export default function CharacterNameApp({viewDisplay, games, times,}: CharacterNameProperties,) {
    //region -------------------- Game selection --------------------

    const game = games.hasAllGames
        ? CharacterNameGames.ALL_GAMES
        : games.hasSmm2
            ? CharacterNameGames.SUPER_MARIO_MAKER_2
            : games.hasSmm1
                ? CharacterNameGames.SUPER_MARIO_MAKER
                : CharacterNameGames.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    //endregion -------------------- Game selection --------------------
    //region -------------------- Time selection --------------------

    const time = games.hasNotSmm2AndSmm1Or3ds
        ? null
        : times.hasAllTimes
            ? CharacterNameTimes.ALL_TIMES
            : times.hasDay
                ? CharacterNameTimes.DAY
                : CharacterNameTimes.NIGHT

    //endregion -------------------- Time selection --------------------

    return <SubMain partial-id="characterName" viewDisplay={viewDisplay}>
        <AppTitle>{gameContentTranslation('character name.all',)}</AppTitle>
        <PageTitle value={gameContentTranslation('character name.singular',)}/>
        <PageViewChanger>
            <GameAsideContent game={game}/>
            <TimeAsideContent time={time}/>
            <DisplayButtonGroup list="everyCharacterName (list)" card="everyCharacterName (card)" table="everyCharacterName (table)" current={viewDisplay}/>
        </PageViewChanger>
        <CharacterNameDescription viewDisplay={viewDisplay} game={game}/>
        <section id="characterName-app-content" className="app-content">
            <SubContent viewDisplay={viewDisplay} games={games} times={times}/>
        </section>
    </SubMain>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay, games, times,}: Omit<CharacterNameProperties, 'gameStyles'>,) {
    const items = all.filter(({reference,},) =>
        games.hasAnyIn(reference,)
        && (times.hasAllTimes || times.hasAnyIn(reference,)),)

    if (viewDisplay === LIST)
        return <CharacterNameList items={items}/>
    if (viewDisplay === CARD)
        return <CharacterNameCardList items={items}/>
    return <CharacterNameTable items={items}/>
}


interface CharacterName_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<CharacterNames>

}

/** @reactComponent */
function CharacterNameList({items,}: CharacterName_SubContentProperties,) {
    return <List partial-id="characterName" items={items} withSeparator>{it =>
        <div key={`Character name list (${it.name})`} className="d-flex justify-content-between">
            <NameComponent id="characterName-name" name={it.reference} popoverOrientation="top"/>
            <EditorVoiceSound editorVoice={it.editorVoice} name={it.uniqueEnglishName}/>
        </div>
    }</List>
}

/** @reactComponent */
function CharacterNameCardList({items,}: CharacterName_SubContentProperties,) {
    return <CardList partial-id="characterName" items={items} default={1} small={2} medium={4} large={6}>{it =>
        <Fragment key={`Character name card list (${it.name})`}>
            <NameComponent id="characterName-name" name={it.reference} popoverOrientation="left"/>
            <EditorVoiceSound editorVoice={it.editorVoice} name={it.uniqueEnglishName}/>
        </Fragment>
    }</CardList>
}

/** @reactComponent */
function CharacterNameTable({items,}: CharacterName_SubContentProperties,) {
    return <Table id="characterName-table" items={items} options={options} caption={gameContentTranslation('character name.all',)} headersColor="info"/>
}

//endregion -------------------- Sub content --------------------
//region -------------------- Description content --------------------

interface CharacterNameDescriptionProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly game: CharacterNameGames

}

/** @reactComponent */
function CharacterNameDescription({viewDisplay, game,}: CharacterNameDescriptionProperties,) {
    const smm1Link = game.smm1RouteName satisfies NullOrString<PossibleRouteName>
    const smm3dsLink = game.smm3dsRouteName satisfies NullOrString<PossibleRouteName>
    const smm2Link = game.smm2RouteName satisfies NullOrString<PossibleRouteName>

    const mysteryMushroom = MYSTERY_MUSHROOM.singularNameOnReferenceOrNull ?? unfinishedText(MYSTERY_MUSHROOM.singularEnglishName,)
    const mysteryMushroomAsLowerCase = MYSTERY_MUSHROOM.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(MYSTERY_MUSHROOM.singularEnglishName,)

    return <Description>
        <p>
            {gameContentTranslation('character name.description.intro page', {
                smm1Link: <TextOrLink key="smm1Link" id="smm1Game-description" routeName={smm1Link}><GameImage reference={SMM1}/></TextOrLink>,
                smm3dsLink: <TextOrLink key="smm3dsLink" id="smm3dsGame-description" routeName={smm3dsLink}><GameImage reference={SMM3DS}/></TextOrLink>,
                smm2Link: <TextOrLink key="smm2Link" id="smm2Game-description" routeName={smm2Link}><GameImage reference={SMM2}/></TextOrLink>,
            },)}
            {gameContentTranslation('character name.description.intro references', {
                //TODO: Add a editor "character name" link
                StoryMode: <em key="StoryMode">{STORY_MODE.singularNameOnReference}</em>,//TODO: Add a mystery mushroom "character name" link
                mysteryMushroom: <em key="mysteryMushroom (lowercase)" className="mystery-mushroom-image">{mysteryMushroomAsLowerCase}</em>,
                MysteryMushroom: <em key="mysteryMushroom" className="mystery-mushroom-image">{mysteryMushroom}</em>,
                smm1Link: <span key="smm1Link" id="smm1Game-mysteryMushroom-description"><GameImage reference={SMM1}/></span>,
                smm2Link: <span key="smm2Link" id="smm2Game-storyMode-description"><GameImage reference={SMM2}/></span>,
            },)}
        </p>
        <ContentBeingDisplayed viewDisplay={viewDisplay} routeName="everyCharacterName"/>
    </Description>
}

//endregion -------------------- Description content --------------------
//region -------------------- Aside content --------------------

interface CharacterName_AsideContentProperties
    extends ReactProperties {

    readonly game: NullOr<CharacterNameGames>
    readonly time: NullOr<CharacterNameTimes>

}

/** @reactComponent */
function GameAsideContent({game,}: Pick<CharacterName_AsideContentProperties, 'game'>,) {
    if (game == null)
        return null
    return <div id="characterName-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partial-id="allGameLimit" routeName={game.allRouteName} color={game.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="characterName-gamesButton-singularGame-container" className="btn-group btn-group-sm">
            <LinkButton partial-id="smm1Game" routeName={game.smm1RouteName} color={game.smm1Color}><GameImage reference={SMM1}/></LinkButton>
            <LinkButton partial-id="smm3dsGame" routeName={game.smm3dsRouteName} color={game.smm3dsColor}><GameImage reference={SMM3DS}/></LinkButton>
            <LinkButton partial-id="smm2Game" routeName={game.smm2RouteName} color={game.smm2Color}><GameImage reference={SMM2}/></LinkButton>
        </div>
    </div>
}

/** @reactComponent */
function TimeAsideContent({time,}: Pick<CharacterName_AsideContentProperties, 'time'>,) {
    if (time == null)
        return null
    return <div id="characterName-timesButton-container" className="timeAsideContent-container btn-group-vertical btn-group-sm">
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
