import './EntityCategoryApp.scss'

import type {Array} from '@joookiwi/type'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppInterpreterWithTable}      from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'

import SubMainContainer          from 'app/_SubMainContainer'
import {EntityCategoryAppOption} from 'app/options/EntityCategoryAppOption'
import Image                     from 'app/tools/images/Image'
import Table                     from 'app/tools/table/Table'
import {unfinishedText}          from 'app/tools/text/UnfinishedText'
import CardList                  from 'app/withInterpreter/CardList'
import SimpleList                from 'app/withInterpreter/SimpleList'
import {ViewDisplays}            from 'app/withInterpreter/ViewDisplays'
import {EntityCategories}        from 'core/entityCategory/EntityCategories'
import {OtherWordInTheGames}     from 'core/otherWordInTheGame/OtherWordInTheGames'
import {gameContentTranslation}  from 'lang/components/translationMethods'

class EntityCategoryAppInterpreter
    implements AppInterpreterWithTable<EntityCategories, EntityCategoryAppOption> {

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
    //region -------------------- Table interpreter --------------------

    public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor

    public get tableCaption() {
        const entity = OtherWordInTheGames.ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(OtherWordInTheGames.ENTITY.singularEnglishName,)
        const entityAsLowerCase = OtherWordInTheGames.ENTITY.singularLowerCaseNameOnReferenceOrNull ?? entity.toLowerCase()

        return gameContentTranslation('entity category.all', {Entity: entity, entity: entityAsLowerCase,},) satisfies ReactElementOrString
    }

    public get tableOptions(): Array<EntityCategoryAppOption> {
        return [EntityCategoryAppOption.ICON, EntityCategoryAppOption.NAME,]
    }


    public getAdditionalClass(option: EntityCategoryAppOption,) {
        return option.additionalClasses
    }

    public createTableContent(content: EntityCategories, option: EntityCategoryAppOption,) {
        return option.renderContent(content,)
    }

    public createTableHeader(option: EntityCategoryAppOption,) {
        return option.renderTableHeader()
    }

    //endregion -------------------- Table interpreter --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everyEntityCategory (list)',],
    [ViewDisplays.CARD_LIST, 'everyEntityCategory (card)',],
    [ViewDisplays.TABLE, 'everyEntityCategory (table)',],
] as const satisfies Array<ViewAndRouteName>
const appInterpreter = new EntityCategoryAppInterpreter()

/** @reactComponent */
export default function EntityCategoryApp({viewDisplay,}: AppWithInterpreterProperties,) {
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
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="entityCategory" interpreter={appInterpreter}/>
    return <Table id="entityCategory-table" interpreter={appInterpreter}/>
}
