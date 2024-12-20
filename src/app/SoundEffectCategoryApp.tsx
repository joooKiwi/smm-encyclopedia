import './SoundEffectCategoryApp.scss'

import type {Array}              from '@joookiwi/type'
import type {CollectionHolder}   from '@joookiwi/collection'
import {GenericCollectionHolder} from '@joookiwi/collection'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppInterpreterWithTable}      from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'
import type {ReactProperties}              from 'util/react/ReactProperties'

import SubMainContainer               from 'app/_SubMainContainer'
import {SoundEffectCategoryAppOption} from 'app/options/SoundEffectCategoryAppOption'
import CardList                       from 'app/withInterpreter/CardList'
import {ViewDisplays}                 from 'app/withInterpreter/ViewDisplays'
import List                           from 'app/util/List'
import Table                          from 'app/tools/table/Table'
import {SoundEffectCategories}        from 'core/soundEffectCategory/SoundEffectCategories'
import SoundEffectCategoryIcon        from 'core/soundEffectCategory/component/SoundEffectCategoryIcon'
import {gameContentTranslation}       from 'lang/components/translationMethods'
import NameComponent                  from 'lang/name/component/Name.component'

import ALL = SoundEffectCategories.ALL

class SoundEffectCategoryAppInterpreter
    implements AppInterpreterWithTable<SoundEffectCategories, SoundEffectCategoryAppOption> {

    public get content() {
        return new GenericCollectionHolder(ALL,)
    }

    //region -------------------- Card --------------------

    public createCardListDimension() {
        return {
            default: 1,
            small: 2,
            medium: 3,
            large: 5,
        } as const satisfies DimensionOnList
    }

    public createCardListContent(enumerable: SoundEffectCategories,) {
        return <SoundEffectCategoryIcon reference={enumerable} asWhiteImage/>
    }

    //endregion -------------------- Card --------------------
    //region -------------------- Table --------------------

    public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor
    public readonly tableCaption = gameContentTranslation('sound effect category.all',) satisfies ReactElementOrString

    public get tableOptions(): Array<SoundEffectCategoryAppOption> {
        return [SoundEffectCategoryAppOption.NAME, SoundEffectCategoryAppOption.ICON,]
    }


    public getAdditionalClass(option: SoundEffectCategoryAppOption,) {
        return option.additionalClasses
    }

    public createTableContent(content: SoundEffectCategories, option: SoundEffectCategoryAppOption,) {
        return option.renderContent(content,)
    }

    public createTableHeader(option: SoundEffectCategoryAppOption,) {
        return option.renderTableHeader()
    }

    //endregion -------------------- Table --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everySoundEffectCategory (list)',],
    [ViewDisplays.CARD_LIST, 'everySoundEffectCategory (card)',],
    [ViewDisplays.TABLE, 'everySoundEffectCategory (table)',],
] as const satisfies Array<ViewAndRouteName>
const appInterpreter = new SoundEffectCategoryAppInterpreter()

/** @reactComponent */
export default function SoundEffectCategoryApp({viewDisplay,}: AppWithInterpreterProperties,) {
    return <SubMainContainer reactKey="soundEffectCategory" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay}
                             titleContent={gameContentTranslation('sound effect category.all',)}>
        <SubContent viewDisplay={viewDisplay}/>
    </SubMainContainer>
}

/** @reactComponent */
function SubContent({viewDisplay,}: AppWithInterpreterProperties,) {
    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SoundEffectCategoryList items={appInterpreter.content}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="soundEffectCategory" interpreter={appInterpreter}/>
    return <Table id="soundEffectCategory-table" interpreter={appInterpreter}/>
}

//region -------------------- List --------------------

interface SoundEffectCategory_ListProperties
    extends ReactProperties {

    readonly items: CollectionHolder<SoundEffectCategories>

}

/** @reactComponent */
function SoundEffectCategoryList({items,}: SoundEffectCategory_ListProperties,) {
    return <List partialId="soundEffectCategory" items={items}>{it =>
        <div className="d-flex justify-content-between align-items-center">
            <NameComponent id="soundEffectCategory-name" name={it.reference} popoverOrientation="right"/>
            <SoundEffectCategoryIcon reference={it}/>
        </div>
    }</List>
}

//endregion -------------------- List --------------------
