import './SoundEffectCategoryApp.scss'

import type {Array}              from '@joookiwi/type'
import {GenericCollectionHolder} from '@joookiwi/collection'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppInterpreterWithTable}      from 'app/interpreter/AppInterpreterWithTable'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'

import SubMainContainer               from 'app/_SubMainContainer'
import {SoundEffectCategoryAppOption} from 'app/options/SoundEffectCategoryAppOption'
import Image                          from 'app/tools/images/Image'
import CardList                       from 'app/withInterpreter/CardList'
import SimpleList                     from 'app/withInterpreter/SimpleList'
import {ViewDisplays}                 from 'app/withInterpreter/ViewDisplays'
import Table                          from 'app/tools/table/Table'
import {SoundEffectCategories}        from 'core/soundEffectCategory/SoundEffectCategories'
import SoundEffectCategoryIcon        from 'core/soundEffectCategory/component/SoundEffectCategoryIcon'
import {gameContentTranslation}       from 'lang/components/translationMethods'

import ALL = SoundEffectCategories.ALL

class SoundEffectCategoryAppInterpreter
    implements AppInterpreterWithTable<SoundEffectCategories, SoundEffectCategoryAppOption> {

    public get content() {
        return new GenericCollectionHolder(ALL,)
    }

    //region -------------------- List interpreter --------------------

    public createListDimension(): DimensionOnList {
        return {
            default: 1,
            small: 2,
            medium: 3,
            large: 5,
        }
    }

    //endregion -------------------- List interpreter --------------------
    //region -------------------- Card list interpreter --------------------

    public createCardListDimension() {
        return this.createListDimension()
    }

    public createCardListContent(enumerable: SoundEffectCategories,) {
        return <SoundEffectCategoryIcon reference={enumerable} asWhiteImage/>
    }

    //endregion -------------------- Card list interpreter --------------------
    //region -------------------- Table interpreter --------------------

    public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor
    public readonly tableCaption = gameContentTranslation('sound effect category.all',) satisfies ReactElementOrString

    public get tableOptions(): Array<SoundEffectCategoryAppOption> {
        return [SoundEffectCategoryAppOption.ICON, SoundEffectCategoryAppOption.NAME,]
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

    //endregion -------------------- Table interpreter --------------------

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
        return <SimpleList reactKey="soundEffectCategory" interpreter={appInterpreter}/>
    if (viewDisplay === ViewDisplays.CARD_LIST)
        return <CardList reactKey="soundEffectCategory" interpreter={appInterpreter}/>
    return <Table id="soundEffectCategory-table" interpreter={appInterpreter}/>
}
