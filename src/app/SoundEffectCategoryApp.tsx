import './SoundEffectCategoryApp.scss'

import type {AppWithInterpreterProperties} from 'app/AppProperties.types'
import type {AppInterpreterWithCardList}   from 'app/interpreter/AppInterpreterWithCardList'
import type {DimensionOnList}              from 'app/interpreter/DimensionOnList'
import type {ViewAndRouteName}             from 'app/withInterpreter/DisplayButtonGroup.properties'

import SubMainContainer         from 'app/_SubMainContainer'
import Image                    from 'app/tools/images/Image'
import CardList                 from 'app/withInterpreter/CardList'
import SimpleList               from 'app/withInterpreter/SimpleList'
import {ViewDisplays}           from 'app/withInterpreter/ViewDisplays'
import {SoundEffectCategories}  from 'core/soundEffectCategory/SoundEffectCategories'
import {gameContentTranslation} from 'lang/components/translationMethods'
import {assert}                 from 'util/utilitiesMethods'

class SoundEffectCategoryAppInterpreter
    implements AppInterpreterWithCardList<SoundEffectCategories> {

    public get content() {
        return SoundEffectCategories.CompanionEnum.get.values.toArray()
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
        return <Image file={enumerable.imageFile}/>
    }

    //endregion -------------------- Card list interpreter --------------------

}

const viewDisplayAndRouteName = [
    [ViewDisplays.SIMPLE_LIST, 'everySoundEffectCategory (list)',],
    [ViewDisplays.CARD_LIST, 'everySoundEffectCategory (card)',],
] as const satisfies readonly ViewAndRouteName[]
const appInterpreter = new SoundEffectCategoryAppInterpreter()

/** @reactComponent */
export default function SoundEffectCategoryApp({viewDisplay,}: AppWithInterpreterProperties,) {
    assert(viewDisplay !== ViewDisplays.TABLE, 'The SoundEffectCategoryApp only handle the "simple list" or "card list" as a possible view display.',)

    const titleContent = gameContentTranslation('sound effect category.all',)

    if (viewDisplay === ViewDisplays.SIMPLE_LIST)
        return <SubMainContainer reactKey="soundEffectCategory" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}>
            <SimpleList reactKey="soundEffectCategory" interpreter={appInterpreter}/>
        </SubMainContainer>
    return <SubMainContainer reactKey="soundEffectCategory" viewDisplayAndRouteName={viewDisplayAndRouteName} viewDisplay={viewDisplay} titleContent={titleContent}>
        <CardList reactKey="soundEffectCategory" interpreter={appInterpreter}/>
    </SubMainContainer>
}
