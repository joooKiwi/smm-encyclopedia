import './MysteryMushroomApp.scss'

import type {Array}              from '@joookiwi/type'
import type {CollectionHolder}   from '@joookiwi/collection'
import {GenericCollectionHolder} from '@joookiwi/collection'

import type {AppInterpreterWithTable}      from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'
import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {ReactProperties}              from 'util/react/ReactProperties'

import SubMainContainer           from 'app/_SubMainContainer'
import {MysteryMushroomAppOption} from 'app/options/MysteryMushroomAppOption'
import Table                      from 'app/tools/table/Table'
import {unfinishedText}           from 'app/tools/text/UnfinishedText'
import List                       from 'app/util/List'
import CardList                   from 'app/withInterpreter/CardList'
import {ViewDisplays}             from 'app/withInterpreter/ViewDisplays'
import {MysteryMushrooms}         from 'core/mysteryMushroom/MysteryMushrooms'
import {OtherWordInTheGames}      from 'core/otherWordInTheGame/OtherWordInTheGames'
import {gameContentTranslation}   from 'lang/components/translationMethods'
import NameComponent              from 'lang/name/component/Name.component'

import ALL = MysteryMushrooms.ALL

class MysteryMushroomAppInterpreter
    implements AppInterpreterWithTable<MysteryMushrooms, MysteryMushroomAppOption> {

    public get content() {
        return new GenericCollectionHolder(ALL,)
    }

    //region -------------------- Card --------------------

    public createCardListDimension() {
        return {
            default: 1,
            small: 2,
            large: 3,
            extraLarge: 4,
            extraExtraLarge: 6,
        } as const satisfies DimensionOnList
    }

    public createCardListContent(enumerable: MysteryMushrooms,) {
        const amountOfImages = enumerable.imageFileNames.length
        const contains2Images = amountOfImages === 2

        return amountOfImages === 0
            ? null
            : <div key={`image content container (${enumerable.englishName})`} className={`image-content-container ${contains2Images ? 'dual' : 'single'}-image-content-container`}>
                <>{MysteryMushroomAppOption.WAITING.renderImageContent(enumerable, contains2Images,)}</>
                <>{MysteryMushroomAppOption.TAUNT.renderImageContent(enumerable, contains2Images,)}</>
                <>{MysteryMushroomAppOption.PRESSING_DOWN.renderImageContent(enumerable, contains2Images,)}</>
                <>{MysteryMushroomAppOption.WALK.renderImageContent(enumerable, contains2Images,)}</>
                <>{MysteryMushroomAppOption.WALK.renderImageContent(enumerable, contains2Images,)}</>
                <>{MysteryMushroomAppOption.RUNNING.renderImageContent(enumerable, contains2Images,)}</>
                <>{MysteryMushroomAppOption.SWIMMING.renderImageContent(enumerable, contains2Images,)}</>
                <>{MysteryMushroomAppOption.JUMP.renderImageContent(enumerable, contains2Images,)}</>
                <>{MysteryMushroomAppOption.FALLING_AFTER_A_JUMP.renderImageContent(enumerable, contains2Images,)}</>
                <>{MysteryMushroomAppOption.TURNING.renderImageContent(enumerable, contains2Images,)}</>
                <>{MysteryMushroomAppOption.CLIMBING.renderImageContent(enumerable, contains2Images,)}</>
                <>{MysteryMushroomAppOption.GOAL_POLE.renderImageContent(enumerable, contains2Images,)}</>
            </div>
    }

    //endregion -------------------- Card --------------------
    //region -------------------- Table --------------------

    public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor
    public readonly tableColor = 'primary' satisfies BootstrapThemeColor
    public readonly tableCaption = gameContentTranslation('mystery mushroom.all', {
        singularName: OtherWordInTheGames.MYSTERY_MUSHROOM.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MYSTERY_MUSHROOM.singularEnglishName,).toLowerCase(),
        pluralName: OtherWordInTheGames.MYSTERY_MUSHROOM.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MYSTERY_MUSHROOM.pluralEnglishName,).toLowerCase(),
    },) satisfies ReactElementOrString

    public get tableOptions(): Array<MysteryMushroomAppOption> {
        return [
            MysteryMushroomAppOption.CONDITION_TO_UNLOCK_IT,
            MysteryMushroomAppOption.GAME,
            MysteryMushroomAppOption.NAME,

            MysteryMushroomAppOption.POWER_UP_COLLECTED,
            MysteryMushroomAppOption.WAITING,
            MysteryMushroomAppOption.TAUNT,
            MysteryMushroomAppOption.PRESSING_DOWN,
            MysteryMushroomAppOption.WALK,
            MysteryMushroomAppOption.RUNNING,
            MysteryMushroomAppOption.SWIMMING,
            MysteryMushroomAppOption.JUMP,
            MysteryMushroomAppOption.FALLING_AFTER_A_JUMP,
            MysteryMushroomAppOption.ON_GROUND_AFTER_A_JUMP,
            MysteryMushroomAppOption.TURNING,
            MysteryMushroomAppOption.CLIMBING,
            MysteryMushroomAppOption.GOAL_POLE,
            MysteryMushroomAppOption.LOST_A_LIFE,
        ]
    }


    public createTableContent(content: MysteryMushrooms, option: MysteryMushroomAppOption,) {
        return option.renderContent(content,)
    }

    public createTableHeader(option: MysteryMushroomAppOption) {
        return option.renderTableHeader()
    }

    //endregion -------------------- Table --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyMysteryMushroom (list)',],
    [ViewDisplays.CARD_LIST, 'everyMysteryMushroom (card)',],
    [ViewDisplays.TABLE, 'everyMysteryMushroom (table)',],
] as const satisfies Array<ViewAndRouteName>
const appInterpreter = new MysteryMushroomAppInterpreter()
const uniqueEnglishNameRetriever: (mysteryMushroom: MysteryMushrooms,) => string = it => it.uniqueEnglishName

/** @reactComponent */
export default function MysteryMushroomApp({viewDisplay,}: AppWithInterpreterProperties,) {
    const mysteryMushroom = OtherWordInTheGames.MYSTERY_MUSHROOM.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MYSTERY_MUSHROOM.singularEnglishName.toLowerCase(),)
    const mysteryMushrooms = OtherWordInTheGames.MYSTERY_MUSHROOM.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MYSTERY_MUSHROOM.pluralEnglishName.toLowerCase(),)

    return <SubMainContainer reactKey="mysteryMushroom" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('mystery mushroom.all', {singularName: mysteryMushroom, pluralName: mysteryMushrooms,},)}>
        <SubContent viewDisplay={viewDisplay}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay,}: AppWithInterpreterProperties,) {
    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <MysteryMushroomList items={appInterpreter.content}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="mysteryMushroom" interpreter={appInterpreter} keyRetriever={uniqueEnglishNameRetriever}/>
    return <Table id="mysteryMushroom-table" interpreter={appInterpreter}/>
}

//region -------------------- List --------------------

interface MysteryMushroom_ListProperties
    extends ReactProperties {

    readonly items: CollectionHolder<MysteryMushrooms>

}

function MysteryMushroomList({items,}:MysteryMushroom_ListProperties,) {
    return <List partialId="mysteryMushroom" items={items} nameRetriever={uniqueEnglishNameRetriever}>{it =>
        <div className="d-flex justify-content-between">
            <NameComponent id="mysteryMushroom-name" name={it.reference} popoverOrientation="right"/>
            <div className="images-container">
                {MysteryMushroomAppOption.WAITING.renderImageContent(it,)}
            </div>
        </div>
    }</List>
}

//endregion -------------------- List --------------------
