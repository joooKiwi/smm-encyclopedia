import './EntityCategoryApp.scss'

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
import {EntityCategories}       from 'core/entityCategory/EntityCategories'
import {OtherWordInTheGames}    from 'core/otherWordInTheGame/OtherWordInTheGames'
import {gameContentTranslation} from 'lang/components/translationMethods'
import {assert}                 from 'util/utilitiesMethods'

class EntityCategoryAppInterpreter
    implements AppInterpreterWithCardList<EntityCategories> {

    public get content() {
        return EntityCategories.CompanionEnum.get.values.toArray()
    }

    //region -------------------- List interpreter --------------------

    public createListDimension(): DimensionOnList {
        return {
            default: 1,
            small: 2,
            large: 4,
        }
    }

    //endregion -------------------- List interpreter --------------------
    //region -------------------- Card list interpreter --------------------

    public createCardListDimension() {
        return this.createListDimension()
    }

    public createCardListContent(enumerable: EntityCategories,) {
        return <Image file={enumerable.imageFile}/>
    }

    //endregion -------------------- Card list interpreter --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyEntityCategory (list)',],
    [ViewDisplays.CARD_LIST, 'everyEntityCategory (card)',],
] as const satisfies readonly ViewAndRouteName[]
const appInterpreter = new EntityCategoryAppInterpreter()

/** @reactComponent */
export default function EntityCategoryApp({viewDisplay,}: AppWithInterpreterProperties,) {
    assert(viewDisplay !== ViewDisplays.TABLE, 'The EntityCategoryApp only handle the "simple list" or "card list" as a possible view display.',)

    const entity = OtherWordInTheGames.ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.ENTITY.singularEnglishName,)
    const entityAsLowerCase = OtherWordInTheGames.ENTITY.singularLowerCaseNameOnReferenceOrNull ?? entity.toLowerCase()

    const titleContent = gameContentTranslation('entity category.all', {Entity: entity, entity: entityAsLowerCase,},)

    return <SubMainContainer reactKey="entityCategory" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}>
        <SubContent viewDisplay={viewDisplay}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay,}: AppWithInterpreterProperties,) {
    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SimpleList reactKey="entityCategory" interpreter={appInterpreter}/>
    return <CardList reactKey="entityCategory" interpreter={appInterpreter}/>
}
