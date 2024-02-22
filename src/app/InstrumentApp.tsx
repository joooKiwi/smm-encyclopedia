import 'core/game/GameAsideContent.scss'

import type {InstrumentAppProperties}    from 'app/AppProperties.types'
import type {AppInterpreterWithCardList} from 'app/interpreter/AppInterpreterWithCardList'
import type {DimensionOnList}            from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}           from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {GameCollection}             from 'util/collection/GameCollection'
import type {ReactProperties}            from 'util/react/ReactProperties'

import SubMainContainer         from 'app/_SubMainContainer'
import CardList                 from 'app/withInterpreter/CardList'
import SimpleList               from 'app/withInterpreter/SimpleList'
import {ViewDisplays}           from 'app/withInterpreter/ViewDisplays'
import LinkButton               from 'app/tools/button/LinkButton'
import {Games}                  from 'core/game/Games'
import {Instruments}            from 'core/instrument/Instruments'
import {gameContentTranslation} from 'lang/components/translationMethods'
import SimpleSoundComponent     from 'util/file/sound/component/SimpleSound.component'
import {assert, filterGame}     from 'util/utilitiesMethods'

class InstrumentAppInterpreter
    implements AppInterpreterWithCardList<Instruments> {

    //region -------------------- Fields --------------------

    readonly #games

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    public constructor(games: GameCollection,) {
        this.#games = games
    }

    //endregion -------------------- Constructor --------------------

    public get content() {
        return filterGame(Instruments.CompanionEnum.get.values.toArray(), this.#games,)
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

    public createCardListContent(enumerable: Instruments,) {
        const name = enumerable.name
        const englishName = enumerable.englishName

        return <div className="instrument-sounds">{enumerable.sounds.map((sound, index,) =>
            <SimpleSoundComponent key={`instrument sounds #${index} (${englishName})`} file={sound} title={`${name} (instrument #${index})`}/>
        )}</div>
    }

    //endregion -------------------- Card list interpreter --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyInstrument (list)',],
    [ViewDisplays.CARD_LIST, 'everyInstrument (card)',],
] as const satisfies readonly ViewAndRouteName[]
const titleContent = gameContentTranslation('instrument.all',)

/** @reactComponent */
export default function InstrumentApp({viewDisplay, games,}: InstrumentAppProperties,) {
    const appInterpreter = new InstrumentAppInterpreter(games,)
    assert(viewDisplay !== ViewDisplays.TABLE, 'The InstrumentApp only handle the "simple list" or "card list" as a possible view display.',)

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SubMainContainer reactKey="instrument" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}>
            <SimpleList reactKey="instrument" interpreter={appInterpreter}/>
        </SubMainContainer>
    return <SubMainContainer reactKey="instrument" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}>
        <CardList reactKey="instrument" interpreter={appInterpreter}/>
    </SubMainContainer>
}
