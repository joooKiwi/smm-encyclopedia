import 'app/_GameAsideContent.scss'
import './SoundEffectApp.scss'

import type {Array, MutableArray} from '@joookiwi/type'

import type {SoundEffectProperties}   from 'app/AppProperties.types'
import type {AppInterpreterWithTable} from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}         from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}        from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {GameCollection}          from 'util/collection/GameCollection'
import type {GameStyleCollection}     from 'util/collection/GameStyleCollection'
import type {ReactProperties}         from 'util/react/ReactProperties'

import SubMainContainer                             from 'app/_SubMainContainer'
import {SoundEffectAppOption}                       from 'app/options/SoundEffectAppOption'
import LinkButton                                   from 'app/tools/button/LinkButton'
import Table                                        from 'app/tools/table/Table'
import {SoundEffectGames}                           from 'app/property/SoundEffectGames'
import CardList                                     from 'app/withInterpreter/CardList'
import SimpleList                                   from 'app/withInterpreter/SimpleList'
import {ViewDisplays}                               from 'app/withInterpreter/ViewDisplays'
import GameImage                                    from 'core/game/GameImage'
import {Games}                                      from 'core/game/Games'
import {SoundEffects}                               from 'core/soundEffect/SoundEffects'
import {contentTranslation, gameContentTranslation} from 'lang/components/translationMethods'
import {filterGame, intersect}                      from 'util/utilitiesMethods'

import ALL_GAMES =             Games.ALL
import renderSMM1And3DSImage = SoundEffectAppOption.renderSMM1And3DSImage
import renderSMM2Image =       SoundEffectAppOption.renderSMM2Image
import SMM1 =                  Games.SMM1
import SMM2 =                  Games.SMM2
import SMM3DS =                Games.SMM3DS

class SoundEffectAppInterpreter
    implements AppInterpreterWithTable<SoundEffects, SoundEffectAppOption> {

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
        return filterGame(SoundEffects.CompanionEnum.get.values, this.#games,)
    }

    //region -------------------- List interpreter --------------------

    public createListDimension(): DimensionOnList {
        return {
            default: 1,
            small: 3,
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

    public createCardListContent(enumerable: SoundEffects,) {
        return <div>
            <div className="soundEffect-images-container">
                {renderSMM1And3DSImage(enumerable,)}
                {renderSMM2Image(enumerable,)}
            </div>
        </div>
    }

    //endregion -------------------- Card list interpreter --------------------
    //region -------------------- Table interpreter --------------------

    public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor
    public readonly tableCaption = gameContentTranslation('sound effect.all',) satisfies ReactElementOrString

    public get tableOptions(): Array<SoundEffectAppOption> {
        const games = this.#games
        const hasSMM1Or3DS = games.hasSMM1Or3DS
        const hasSMM2 = games.hasSMM2

        const options: MutableArray<SoundEffectAppOption> = []
        if (hasSMM1Or3DS)
            options.push(SoundEffectAppOption.SMM1_AND_SMM3DS_ICON,)
        if (hasSMM2)
            options.push(SoundEffectAppOption.SMM2_ICON,)
        options.push(
            SoundEffectAppOption.NAME,
            SoundEffectAppOption.CATEGORY,
            SoundEffectAppOption.PLAYER_BEHAVIOUR,
        )
        if (games.hasAllGames)
            options.push(SoundEffectAppOption.SOUNDS,)
        else {
            if (hasSMM1Or3DS)
                options.push(SoundEffectAppOption.SOUNDS_IN_SMM1_AND_3DS_ONLY,)
            if (hasSMM2)
                options.push(SoundEffectAppOption.SOUNDS_IN_SMM2_ONLY,)
        }
        return options
    }


    public getAdditionalClass(option: SoundEffectAppOption,) {
        return option.additionalClasses
    }

    public createTableContent(content: SoundEffects, option: SoundEffectAppOption,) {
        //TODO add content based on the game style parameter
        return option.renderContent(content,)
    }

    public createTableHeader(option: SoundEffectAppOption,) {
        return option.renderTableHeader()
    }

    //endregion -------------------- Table interpreter --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everySoundEffect (list)',],
    [ViewDisplays.CARD_LIST, 'everySoundEffect (card)',],
    [ViewDisplays.TABLE, 'everySoundEffect (table)',],
] as const satisfies Array<ViewAndRouteName>

/** @reactComponent */
export default function SoundEffectApp({viewDisplay, games, gameStyles,}: SoundEffectProperties,) {
    return <SubMainContainer reactKey="soundEffect" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('sound effect.all',)}
                             asideContent={<SoundEffectAsideContent viewDisplay={viewDisplay} games={games}/>}>
        <SubContent viewDisplay={viewDisplay} games={games} gameStyles={gameStyles}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay, games, gameStyles,}: SoundEffectProperties,) {
    const appInterpreter = new SoundEffectAppInterpreter(games, gameStyles,)

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SimpleList reactKey="soundEffect" interpreter={appInterpreter}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="soundEffect" interpreter={appInterpreter}/>
    return <Table id="soundEffect-table" interpreter={appInterpreter}/>
}

//region -------------------- Aside content --------------------

interface SoundEffectAsideContentProperties
    extends ReactProperties {

    readonly viewDisplay: ViewDisplays

    readonly games: GameCollection

}

function SoundEffectAsideContent({viewDisplay, games,}: SoundEffectAsideContentProperties,) {
    const soundEffectGame = intersect(ALL_GAMES, games,).length === 3
        ? SoundEffectGames.ALL_GAMES
        : games.hasSMM2
            ? SoundEffectGames.SUPER_MARIO_MAKER_2
            : SoundEffectGames.SUPER_MARIO_MAKER_OR_SUPER_MARIO_MAKER_FOR_NINTENDO_3DS

    return <div id="soundEffect-gamesButton-container" className="gameAsideContent-container btn-group-vertical btn-group-sm">
        <LinkButton partialId="allGameLimit" routeName={soundEffectGame.getAllRouteName(viewDisplay,)} color={soundEffectGame.allColor}>{contentTranslation('All',)}</LinkButton>
        <div id="soundEffect-gamesButton-singularGame-container" className="btn-group btn-group-sm">
            <LinkButton partialId="smm1Or3dsGame" routeName={soundEffectGame.getSmm1Or3dsRouteName(viewDisplay,)} color={soundEffectGame.smm1Or3dsColor}>
                <GameImage reference={SMM1}/>
                <GameImage reference={SMM3DS}/>
            </LinkButton>
            <LinkButton partialId="smm2Game" routeName={soundEffectGame.getSmm2RouteName(viewDisplay,)} color={soundEffectGame.smm2Color}>
                <GameImage reference={SMM2}/>
            </LinkButton>
        </div>
    </div>
}

//endregion -------------------- Aside content --------------------
