import './_GameAsideContent.scss'
import './GameStyleApp.scss'

import type {CollectionHolder} from '@joookiwi/collection'
import type {NullOrString}     from '@joookiwi/type'

import type {AppProperties}     from 'app/AppProperties.types'
import type {ReactProperties}   from 'util/react/ReactProperties'
import type {PossibleRouteName} from 'route/EveryRoutes.types'

import {GameStyleAppOption}     from 'app/options/GameStyleAppOption'
import {GameStyleGames}         from 'app/property/GameStyleGames'
import LinkButton               from 'app/tools/button/LinkButton'
import Table                    from 'app/tools/table/Table'
import LinkText                 from 'app/tools/text/LinkText'
import TextOrLink               from 'app/tools/text/TextOrLink'
import {unfinishedText}         from 'app/tools/text/UnfinishedText'
import AppTitle                 from 'app/util/AppTitle'
import CardList                 from 'app/util/CardList'
import ContentBeingDisplayed    from 'app/util/ContentBeingDisplayed'
import Description              from 'app/util/Description'
import List                     from 'app/util/List'
import PageTitle                from 'app/util/PageTitle'
import PageViewChanger          from 'app/util/PageViewChanger'
import SubMain                  from 'app/util/SubMain'
import {Games}                  from 'core/game/Games'
import GameImage                from 'core/game/component/GameImage'
import {GameStyles}             from 'core/gameStyle/GameStyles'
import GameStyleImage           from 'core/gameStyle/component/GameStyleImage'
import {OtherWordInTheGames}    from 'core/otherWordInTheGame/OtherWordInTheGames'
import DisplayButtonGroup       from 'display/DisplayButtonGroup'
import {ViewDisplays}           from 'display/ViewDisplays'
import {gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent            from 'lang/name/component/Name.component'

import ALL =    GameStyles.ALL
import SMM1 =   Games.SMM1
import SMM2 =   Games.SMM2
import SMM3DS = Games.SMM3DS
import NSMBU =  GameStyles.NSMBU
import SMB =    GameStyles.SMB
import SMB3 =   GameStyles.SMB3
import SMW =    GameStyles.SMW
import SM3DW =  GameStyles.SM3DW

//region -------------------- Import from deconstruction --------------------

const {ENTITY,} = OtherWordInTheGames
const {LIST, CARD,} = ViewDisplays

//endregion -------------------- Import from deconstruction --------------------

const options = GameStyleAppOption.CompanionEnum.get.values

type GameStyleAppProperties = AppProperties

/** @reactComponent */
export default function GameStyleApp({viewDisplay, games,}: GameStyleAppProperties,) {
    const game = games.hasSmm2
        ? GameStyleGames.SUPER_MARIO_MAKER_2
        : GameStyleGames.SUPER_MARIO_MAKER_OR_SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    return <SubMain partial-id="gameStyle" viewDisplay={viewDisplay}>
        <AppTitle>{gameContentTranslation('game style.all',)}</AppTitle>
        <PageTitle value={gameContentTranslation('game.singular',)}/>
        <PageViewChanger>
            <GameAsideContent game={game}/>
            <DisplayButtonGroup list="everyGameStyle (list)" card="everyGameStyle (card)" table="everyGameStyle (table)" current={viewDisplay}/>
        </PageViewChanger>
        <GameStyleDescription viewDisplay={viewDisplay} game={game}/>
        <section id="gameStyle-app-content" className="app-content">
            <SubContent viewDisplay={viewDisplay} games={games}/>
        </section>
    </SubMain>
}

//region -------------------- Sub content --------------------

/** @reactComponent */
function SubContent({viewDisplay, games,}: Omit<GameStyleAppProperties, | 'gameStyles' | 'times'>,) {
    const items = ALL.filter(({reference,},) =>
        games.hasAnyIn(reference,),)

    if (viewDisplay === LIST)
        return <GameStyleList items={items}/>
    if (viewDisplay === CARD)
        return <GameStyleCardList items={items}/>
    return <GameStyleTable items={items}/>
}


interface GameStyle_SubContentProperties
    extends ReactProperties {

    readonly items: CollectionHolder<GameStyles>

}

/** @reactComponent */
function GameStyleList({items,}: GameStyle_SubContentProperties,) {
    return <List partial-id="gameStyle" items={items} withSeparator>{it =>
        <div className="d-flex justify-content-between">
            <NameComponent id="gameStyle-name" name={it.reference} popoverOrientation="top"/>
            <GameStyleImage reference={it}/>
        </div>
    }</List>
}

/** @reactComponent */
function GameStyleCardList({items,}: GameStyle_SubContentProperties,) {
    return <CardList partial-id="gameStyle" items={items} default={1} small={2} medium={3} extra-large={5}>{it =>
        <>
            <NameComponent id="gameStyle-name" name={it.reference} popoverOrientation="left"/>
            <GameStyleImage reference={it}/>
        </>
    }</CardList>
}

/** @reactComponent */
function GameStyleTable({items,}: GameStyle_SubContentProperties,) {
    return <Table id="gameStyle-table" items={items} options={options} caption={gameContentTranslation('game style.all',)} headersColor="info"/>
}

//endregion -------------------- Sub content --------------------
//region -------------------- Description content --------------------

interface GameStyleDescriptionProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly game: GameStyleGames

}

/** @reactComponent */
function GameStyleDescription({viewDisplay, game,}: GameStyleDescriptionProperties,) {
    const entity = ENTITY.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(ENTITY.singularEnglishName.toLowerCase(),)
    const entities = ENTITY.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(ENTITY.pluralEnglishName.toLowerCase(),)

    const smm1OrSmm3dsLink = game.smm1Or3dsRouteName satisfies NullOrString<PossibleRouteName>
    const smm2Link = game.smm2RouteName satisfies NullOrString<PossibleRouteName>

    return <Description>
        <p>
            {gameContentTranslation('game style.description.intro page', {
                gameStyles: <em key="gameStyles">{gameContentTranslation('game style.plural',).toLowerCase()}</em>,
                smm1Link: <TextOrLink key="smm1Link" id="smm1Game-description" routeName={smm1OrSmm3dsLink}><GameImage reference={SMM1}/></TextOrLink>,
                smm3dsLink: <TextOrLink key="smm3dsLink" id="smm3dsGame-description" routeName={smm1OrSmm3dsLink}><GameImage reference={SMM3DS}/></TextOrLink>,
                smm2Link: <TextOrLink key="smm2Link" id="smm2Game-description" routeName={smm2Link}><GameImage reference={SMM2}/></TextOrLink>,
            },)}
            {gameContentTranslation('game style.description.intro sm3dw', {
                sm3dwLink: <LinkText key="sm3dwLink" partial-id="sm3dwLink" routeName="everyEntity (card GameStyle=3DW)" color="primary"><GameStyleImage reference={SM3DW}/></LinkText>,
                smm2Link: <TextOrLink key="smm2Link" id="smm2Game-sm3dw-description" routeName={smm2Link}><GameImage reference={SMM2}/></TextOrLink>,
            },)}
            {gameContentTranslation('game style.description.intro entity', {
                entityLink: <LinkText key="entityLink" partial-id="entityLink" routeName="everyEntity" color="primary">{entity}</LinkText>,
                entitiesLink: <LinkText key="entitiesLink" partial-id="entityLink" routeName="everyEntity" color="primary">{entities}</LinkText>,
                smbLink: <LinkText key="smbLink" partial-id="smbLink" routeName="everyEntity (card GameStyle=1)" color="primary"><GameStyleImage reference={SMB}/></LinkText>,
                smb3Link: <LinkText key="smb3Link" partial-id="smb3Link" routeName="everyEntity (card GameStyle=3)" color="primary"><GameStyleImage reference={SMB3}/></LinkText>,
                smwLink: <LinkText key="smwLink" partial-id="smwLink" routeName="everyEntity (card GameStyle=W)" color="primary"><GameStyleImage reference={SMW}/></LinkText>,
                nsmbuLink: <LinkText key="nsmbuLink" partial-id="nsmbuLink" routeName="everyEntity (card GameStyle=U)" color="primary"><GameStyleImage reference={NSMBU}/></LinkText>,
                sm3dwLink: <LinkText key="sm3dwLink" partial-id="sm3dwLink" routeName="everyEntity (card GameStyle=3DW)" color="primary"><GameStyleImage reference={SM3DW}/></LinkText>,
            },)}
        </p>
        <ContentBeingDisplayed viewDisplay={viewDisplay} routeName="everyGameStyle"/>
    </Description>
}

//endregion -------------------- Description content --------------------
//region -------------------- Aside content --------------------

interface GameStyleAsideContentProperties
    extends ReactProperties {

    readonly game: GameStyleGames

}

/** @reactComponent */
function GameAsideContent({game,}: GameStyleAsideContentProperties,) {
    return <div id="gameStyle-gamesButton-singularGame-container" className="gameAsideContent-container btn-group btn-group-sm">
        <LinkButton partial-id="smm1Or3dsGame" routeName={game.smm1Or3dsRouteName} color={game.smm1Or3dsColor}>
            <GameImage reference={SMM1}/>
            <GameImage reference={SMM3DS}/>
        </LinkButton>
        <LinkButton partial-id="smm2Game" routeName={game.smm2RouteName} color={game.smm2Color}>
            <GameImage reference={SMM2}/>
        </LinkButton>
    </div>
}

//endregion -------------------- Aside content --------------------
