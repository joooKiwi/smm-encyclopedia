import './MysteryMushroomApp.scss'

import type {Array}              from '@joookiwi/type'
import {GenericCollectionHolder} from '@joookiwi/collection'

import type {AppInterpreterWithTable}      from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'
import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'

import SubMainContainer           from 'app/_SubMainContainer'
import {MysteryMushroomAppOption} from 'app/options/MysteryMushroomAppOption'
import Table                      from 'app/tools/table/Table'
import {unfinishedText}           from 'app/tools/text/UnfinishedText'
import CardList                   from 'app/withInterpreter/CardList'
import SimpleList                 from 'app/withInterpreter/SimpleList'
import {ViewDisplays}             from 'app/withInterpreter/ViewDisplays'
import {MysteryMushrooms}         from 'core/mysteryMushroom/MysteryMushrooms'
import {OtherWordInTheGames}      from 'core/otherWordInTheGame/OtherWordInTheGames'
import {gameContentTranslation}   from 'lang/components/translationMethods'

import ALL = MysteryMushrooms.ALL

class MysteryMushroomAppInterpreter
    implements AppInterpreterWithTable<MysteryMushrooms, MysteryMushroomAppOption> {

    public get content() {
        return new GenericCollectionHolder(ALL,)
    }

    //region -------------------- List interpreter --------------------

    public createListDimension(): DimensionOnList {
        return {
            default: 1,
            small: 2,
            medium: 3,
            large: 4,
            extraLarge: 6,
        }
    }

    //endregion -------------------- List interpreter --------------------
    //region -------------------- Card list interpreter --------------------

    public createCardListDimension(): DimensionOnList {
        return {
            default: 1,
            small: 2,
            large: 3,
            extraLarge: 4,
            extraExtraLarge: 6,
        }
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

    //endregion -------------------- Card list interpreter --------------------
    //region -------------------- Table interpreter --------------------

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

    //endregion -------------------- Table interpreter --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyMysteryMushroom (list)',],
    [ViewDisplays.CARD_LIST, 'everyMysteryMushroom (card)',],
    [ViewDisplays.TABLE, 'everyMysteryMushroom (table)',],
] as const satisfies Array<ViewAndRouteName>
const appInterpreter = new MysteryMushroomAppInterpreter()
const keyRetriever: (mysteryMushroom: MysteryMushrooms,) => string = it => it.uniqueEnglishName

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
        return <SimpleList reactKey="mysteryMushroom" interpreter={appInterpreter} keyRetriever={keyRetriever}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="mysteryMushroom" interpreter={appInterpreter} keyRetriever={keyRetriever}/>
    return <Table id="mysteryMushroom-table" interpreter={appInterpreter}/>
}
