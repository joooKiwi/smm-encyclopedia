import './MiiCostumeApp.scss'

import type {Array} from '@joookiwi/type'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppInterpreterWithTable}      from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'

import SubMainContainer         from 'app/_SubMainContainer'
import {MiiCostumeAppOption}    from 'app/options/MiiCostumeAppOption'
import Image                    from 'app/tools/images/Image'
import Table                    from 'app/tools/table/Table'
import TextComponent            from 'app/tools/text/TextComponent'
import {unfinishedText}         from 'app/tools/text/UnfinishedText'
import CardList                 from 'app/withInterpreter/CardList'
import SimpleList               from 'app/withInterpreter/SimpleList'
import {ViewDisplays}           from 'app/withInterpreter/ViewDisplays'
import {MiiCostumes}            from 'core/miiCostume/MiiCostumes'
import {OtherWordInTheGames}    from 'core/otherWordInTheGame/OtherWordInTheGames'
import {gameContentTranslation} from 'lang/components/translationMethods'
import {Empty}                  from 'util/emptyVariables'

import EMPTY_STRING = Empty.EMPTY_STRING

class MiiCostumeAppInterpreter
    implements AppInterpreterWithTable<MiiCostumes, MiiCostumeAppOption> {

    public get content() {
        return MiiCostumes.CompanionEnum.get.values.toArray()
    }

    //region -------------------- List interpreter --------------------

    public createListDimension(): DimensionOnList {
        return {
            default: 1,
            small: 2,
            medium: 3,
            large: 4,
            extraLarge: 5,
            extraExtraLarge: 6,
        }
    }

    //endregion -------------------- List interpreter --------------------
    //region -------------------- Card list interpreter --------------------

    public createCardListDimension() {
        return this.createListDimension()
    }

    public createCardListContent({reference, imageFile,}: MiiCostumes,) {
        const category = reference.categoryEnglish === EMPTY_STRING ? EMPTY_STRING : `entityCategory-${reference.categoryEnglish}`//TODO move to the parent container className.
        return <div className={category}>
            <Image file={imageFile}/>
        </div>
    }

    //endregion -------------------- Card list interpreter --------------------
    //region -------------------- Table interpreter --------------------

    public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor
    public readonly tableColor = 'primary' satisfies BootstrapThemeColor
    public readonly tableCaption = gameContentTranslation('mii costume.all', {
        singularName: <TextComponent key="miiCostume-singularName" content={OtherWordInTheGames.MII_COSTUME.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MII_COSTUME.singularEnglishName,)} className="text-decoration-underline"/>,
        pluralName: <TextComponent key="miiCostume-pluralName" content={OtherWordInTheGames.MII_COSTUME.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MII_COSTUME.pluralEnglishName,)} className="text-decoration-underline"/>,
    },) satisfies ReactElementOrString

    public get tableOptions(): Array<MiiCostumeAppOption> {
        return [
            MiiCostumeAppOption.IMAGE,
            MiiCostumeAppOption.NAME,
            MiiCostumeAppOption.OFFICIAL_NOTIFICATION,
            MiiCostumeAppOption.CATEGORY,
        ]
    }


    public createTableContent(content: MiiCostumes, option: MiiCostumeAppOption,) {
        return option.renderContent(content,)
    }

    public createTableHeader(option: MiiCostumeAppOption,) {
        return option.renderTableHeader()
    }

    //endregion -------------------- Table interpreter --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyMiiCostume (list)',],
    [ViewDisplays.CARD_LIST, 'everyMiiCostume (card)',],
    [ViewDisplays.TABLE, 'everyMiiCostume (table)',],
] as const satisfies Array<ViewAndRouteName>
const appInterpreter = new MiiCostumeAppInterpreter()

/** @reactComponent */
export default function MiiCostumeApp({viewDisplay,}: AppWithInterpreterProperties,) {
    const miiCostume = OtherWordInTheGames.MII_COSTUME.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MII_COSTUME.singularEnglishName,)
    const miiCostumes = OtherWordInTheGames.MII_COSTUME.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MII_COSTUME.pluralEnglishName,)

    return <SubMainContainer reactKey="miiCostume" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('mii costume.all', {singularName: miiCostume, pluralName: miiCostumes,},)}>
        <SubContent viewDisplay={viewDisplay}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay,}: AppWithInterpreterProperties,) {
    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SimpleList reactKey="miiCostume" interpreter={appInterpreter}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="miiCostume" interpreter={appInterpreter}/>
    return <Table id="miiCostume-table" interpreter={appInterpreter}/>
}
