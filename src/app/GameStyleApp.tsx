import 'app/_GameAsideContent.scss'
import './GameStyleApp.scss'

import type {Array, NullOrString} from '@joookiwi/type'
import type {CollectionHolder}    from '@joookiwi/collection'

import type {GameStyleProperties}     from 'app/AppProperties.types'
import type {AppInterpreterWithTable} from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}        from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {GameCollection}          from 'util/collection/GameCollection'
import type {ReactProperties}         from 'util/react/ReactProperties'
import type {PossibleRouteName}       from 'route/EveryRoutes.types'

import SubMainContainer                             from 'app/_SubMainContainer'
import {GameStyleAppOption}                         from 'app/options/GameStyleAppOption'
import {GameStyleGames}                             from 'app/property/GameStyleGames'
import LinkButton                                   from 'app/tools/button/LinkButton'
import Table                                        from 'app/tools/table/Table'
import LinkText                                     from 'app/tools/text/LinkText'
import TextOrLink                                   from 'app/tools/text/TextOrLink'
import {unfinishedText}                             from 'app/tools/text/UnfinishedText'
import List                                         from 'app/util/List'
import CardList                                     from 'app/withInterpreter/CardList'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import {Games}                                      from 'core/game/Games'
import GameImage                                    from 'core/game/component/GameImage'
import {GameStyles}                                 from 'core/gameStyle/GameStyles'
import GameStyleImage                               from 'core/gameStyle/component/GameStyleImage'
import {OtherWordInTheGames}                        from 'core/otherWordInTheGame/OtherWordInTheGames'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import NameComponent                                from 'lang/name/component/Name.component'

import ALL =    GameStyles.ALL
import SMM1 =   Games.SMM1
import SMM2 =   Games.SMM2
import SMM3DS = Games.SMM3DS
import NSMBU =  GameStyles.NSMBU
import SMB =    GameStyles.SMB
import SMB3 =   GameStyles.SMB3
import SMW =    GameStyles.SMW
import SM3DW =  GameStyles.SM3DW

class GameStyleAppInterpreter
    implements AppInterpreterWithTable<GameStyles, GameStyleAppOption> {

    //region -------------------- Fields --------------------

    readonly #games

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(games: GameCollection,) {
        this.#games = games
    }

    //endregion -------------------- Constructor --------------------

    public get content() {
        const games = this.#games
        return ALL.filter(({reference,},) =>
            games.hasAnyIn(reference,),)
    }

    //region -------------------- Card --------------------

    public createCardListDimension() {
        return {
            default: 1,
            small: 2,
            medium: 3,
            extraLarge: 5,
        } as const satisfies DimensionOnList
    }

    public createCardListContent(enumerable: GameStyles,) {
        return <div className="card-body" id={`gameStyle-${enumerable.englishNameInHtml}`}>
            <GameStyleImage reference={enumerable}/>
        </div>
    }

    //endregion -------------------- Card --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyGameStyle (list)',],
    [ViewDisplays.CARD_LIST, 'everyGameStyle (card)',],
    [ViewDisplays.TABLE, 'everyGameStyle (table)',],
] as const satisfies Array<ViewAndRouteName>
const options = GameStyleAppOption.CompanionEnum.get.values

/** @reactComponent */
export default function GameStyleApp({viewDisplay, games,}: GameStyleProperties,) {
    const game = games.hasSmm2
        ? GameStyleGames.SUPER_MARIO_MAKER_2
        : GameStyleGames.SUPER_MARIO_MAKER_OR_SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    return <SubMainContainer reactKey="gameStyle" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('game style.all',)}
                             description={<GameStyleDescription viewDisplay={viewDisplay} game={game}/>}
                             asideContent={<GameStyleAsideContent game={game}/>}>
        <SubContent viewDisplay={viewDisplay} games={games}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay, games,}: Omit<GameStyleProperties, | 'gameStyles' | 'times'>,) {
    const appInterpreter = new GameStyleAppInterpreter(games,)
    const items = appInterpreter.content

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <GameStyleList items={items}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="gameStyle" interpreter={appInterpreter}/>
    return <Table id="gameStyle-table" items={items} options={options} caption={gameContentTranslation('game style.all',)} headersColor="info"/>
}

//region -------------------- List --------------------

interface GameStyle_ListProperties
    extends ReactProperties {

    readonly items: CollectionHolder<GameStyles>

}

/** @reactComponent */
function GameStyleList({items,}:GameStyle_ListProperties,) {
    return <List partialId="gameStyle" items={items} withSeparator>{it =>
        <div className="d-flex justify-content-between">
            <NameComponent id="gameStyle-name" name={it.reference} popoverOrientation="top"/>
            <GameStyleImage reference={it}/>
        </div>
    }</List>
}

//endregion -------------------- List --------------------
//region -------------------- Description content --------------------

interface GameStyleDescriptionProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly game: GameStyleGames

}

/** @reactComponent */
function GameStyleDescription({viewDisplay, game,}: GameStyleDescriptionProperties,) {
    const entity = OtherWordInTheGames.ENTITY.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.ENTITY.singularEnglishName.toLowerCase(),)
    const entities = OtherWordInTheGames.ENTITY.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.ENTITY.pluralEnglishName.toLowerCase(),)

    const smm1OrSmm3dsLink = game.smm1Or3dsRouteName satisfies NullOrString<PossibleRouteName>
    const smm2Link = game.smm2RouteName satisfies NullOrString<PossibleRouteName>

    const listLink = viewDisplay === ViewDisplays.SIMPLE_LIST ? null : 'everyGameStyle (list)' satisfies PossibleRouteName
    const cardLink = viewDisplay === ViewDisplays.CARD_LIST ? null : 'everyGameStyle (card)' satisfies PossibleRouteName
    const tableLink = viewDisplay === ViewDisplays.TABLE ? null : 'everyGameStyle (table)' satisfies PossibleRouteName

    return <>
        <p>
            {gameContentTranslation('game style.description.intro page', {
                gameStyles: <em key="gameStyles">{gameContentTranslation('game style.plural',).toLowerCase()}</em>,
                smm1Link: <TextOrLink key="smm1Link" id="smm1Game-description" routeName={smm1OrSmm3dsLink}><GameImage reference={SMM1}/></TextOrLink>,
                smm3dsLink: <TextOrLink key="smm3dsLink" id="smm3dsGame-description" routeName={smm1OrSmm3dsLink}><GameImage reference={SMM3DS}/></TextOrLink>,
                smm2Link: <TextOrLink key="smm2Link" id="smm2Game-description" routeName={smm2Link}><GameImage reference={SMM2}/></TextOrLink>,
            },)}
            {gameContentTranslation('game style.description.intro sm3dw', {
                sm3dwLink: <LinkText key="sm3dwLink" partialId="sm3dwLink" routeName="everyEntity (card GameStyle=3DW)" color="primary"><GameStyleImage reference={SM3DW}/></LinkText>,
                smm2Link: <TextOrLink key="smm2Link" id="smm2Game-sm3dw-description" routeName={smm2Link}><GameImage reference={SMM2}/></TextOrLink>,
            },)}
            {gameContentTranslation('game style.description.intro entity', {
                entityLink: <LinkText key="entityLink"  partialId="entityLink" routeName="everyEntity" color="primary">{entity}</LinkText>,
                entitiesLink: <LinkText key="entitiesLink" partialId="entityLink" routeName="everyEntity" color="primary">{entities}</LinkText>,
                smbLink: <LinkText key="smbLink" partialId="smbLink" routeName="everyEntity (card GameStyle=1)" color="primary"><GameStyleImage reference={SMB}/></LinkText>,
                smb3Link: <LinkText key="smb3Link" partialId="smb3Link" routeName="everyEntity (card GameStyle=3)" color="primary"><GameStyleImage reference={SMB3}/></LinkText>,
                smwLink: <LinkText key="smwLink" partialId="smwLink" routeName="everyEntity (card GameStyle=W)" color="primary"><GameStyleImage reference={SMW}/></LinkText>,
                nsmbuLink: <LinkText key="nsmbuLink" partialId="nsmbuLink" routeName="everyEntity (card GameStyle=U)" color="primary"><GameStyleImage reference={NSMBU}/></LinkText>,
                sm3dwLink: <LinkText key="sm3dwLink" partialId="sm3dwLink" routeName="everyEntity (card GameStyle=3DW)" color="primary"><GameStyleImage reference={SM3DW}/></LinkText>,
            },)}
        </p>
        <p>{gameContentTranslation('game style.description.viewable', {
            listLink: <LinkText key="listLink" partialId="listLink" routeName={listLink} color="primary">{contentTranslation('view type.list.singular',).toLowerCase()}</LinkText>,
            cardLink: <LinkText key="cardLink" partialId="cardLink" routeName={cardLink} color="primary">{contentTranslation('view type.card.singular',).toLowerCase()}</LinkText>,
            cardsLink: <LinkText key="cardsLink" partialId="cardsLink" routeName={cardLink} color="primary">{contentTranslation('view type.card.plural',).toLowerCase()}</LinkText>,
            tableLink: <LinkText key="tableLink" partialId="tableLink" routeName={tableLink} color="primary">{contentTranslation('view type.table.singular',).toLowerCase()}</LinkText>,
        },)}</p>
    </>
}

//endregion -------------------- Description content --------------------
//region -------------------- Aside content --------------------

interface GameStyleAsideContentProperties
    extends ReactProperties {

    readonly game: GameStyleGames

}

/** @reactComponent */
function GameStyleAsideContent({game,}: GameStyleAsideContentProperties,) {
    return <div id="gameStyle-gamesButton-singularGame-container" className="gameAsideContent-container btn-group btn-group-sm">
        <LinkButton partialId="smm1Or3dsGame" routeName={game.smm1Or3dsRouteName} color={game.smm1Or3dsColor}>
            <GameImage reference={SMM1}/>
            <GameImage reference={SMM3DS}/>
        </LinkButton>
        <LinkButton partialId="smm2Game" routeName={game.smm2RouteName} color={game.smm2Color}>
            <GameImage reference={SMM2}/>
        </LinkButton>
    </div>
}

//endregion -------------------- Aside content --------------------
