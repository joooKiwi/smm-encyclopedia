import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppInterpreterWithCardList}   from 'app/interpreter/AppInterpreterWithCardList'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'

import SubMainContainer         from 'app/_SubMainContainer'
import Image                    from 'app/tools/images/Image'
import {unfinishedText}         from 'app/tools/text/UnfinishedText'
import CardList                 from 'app/withInterpreter/CardList'
import SimpleList               from 'app/withInterpreter/SimpleList'
import {ViewDisplays}           from 'app/withInterpreter/ViewDisplays'
import {MiiCostumeCategories}   from 'core/miiCostumeCategory/MiiCostumeCategories'
import {OtherWordInTheGames}    from 'core/otherWordInTheGame/OtherWordInTheGames'
import {gameContentTranslation} from 'lang/components/translationMethods'
import {assert}                 from 'util/utilitiesMethods'

class MiiCostumeCategoryAppInterpreter
    implements AppInterpreterWithCardList<MiiCostumeCategories> {

    public get content() {
        return MiiCostumeCategories.CompanionEnum.get.values.toArray()
    }

    //region -------------------- List interpreter --------------------

    public createListDimension(): DimensionOnList {
        return {
            default: 1,
            small: 2,
            medium: 4,
        }
    }

    //endregion -------------------- List interpreter --------------------
    //region -------------------- Card list interpreter --------------------

    public createCardListDimension() {
        return this.createListDimension()
    }

    public createCardListContent(enumerable: MiiCostumeCategories,) {
        return <Image file={enumerable.imageFile}/>
    }

    //endregion -------------------- Card list interpreter --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyMiiCostumeCategory (list)',],
    [ViewDisplays.CARD_LIST, 'everyMiiCostumeCategory (card)',],
] as const satisfies readonly ViewAndRouteName[]
const titleContent = gameContentTranslation('mii costume category.all', {
    singularName: OtherWordInTheGames.MII_COSTUME.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MII_COSTUME.singularEnglishName,),
    pluralName: OtherWordInTheGames.MII_COSTUME.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.MII_COSTUME.pluralEnglishName,),
},)
const appInterpreter = new MiiCostumeCategoryAppInterpreter()

/** @reactComponent */
export default function MiiCostumeCategoryApp({viewDisplay,}: AppWithInterpreterProperties,) {
    assert(viewDisplay !== ViewDisplays.TABLE, 'The MedalApp only handle the "simple list" or "card list" as a possible view display.',)

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SubMainContainer reactKey="miiCostumeCategory" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}>
            <SimpleList reactKey="miiCostumeCategory" interpreter={appInterpreter}/>
        </SubMainContainer>
    return <SubMainContainer reactKey="miiCostumeCategory" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}>
        <CardList reactKey="miiCostumeCategory" interpreter={appInterpreter}/>
    </SubMainContainer>
}
