import {lazy} from 'react'

import type {AppProperties}                                        from 'app/AppProperties.types'
import type {AppInterpreterWithCardList}                           from 'app/interpreter/AppInterpreterWithCardList'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {ReactElementOrString}                                 from 'util/react/ReactProperties'

import {unfinishedText}         from 'app/tools/text/UnfinishedText'
import {AbstractCardListApp}    from 'app/withInterpreter/AbstractCardListApp'
import {ViewDisplays}           from 'app/withInterpreter/ViewDisplays'
import {MiiCostumeCategories}   from 'core/miiCostumeCategory/MiiCostumeCategories'
import {gameContentTranslation} from 'lang/components/translationMethods'

const Image =         lazy(() => import('app/tools/images/Image'))
const TextComponent = lazy(() => import('app/tools/text/TextComponent'))

/**
 * @reactComponent
 */
export default class EveryEntityCategoriesApp
    extends AbstractCardListApp<AppInterpreterWithCardList<MiiCostumeCategories>> {

    public constructor(props: AppProperties,) {
        super(props,)
        this.state = {
            typeDisplayed: ViewDisplays.CARD_LIST,
        }
    }

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'miiCostumeCategory'
    }

    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('mii costume category.all', {
            singularName: <TextComponent key="miiCostume-singularName" classes={['text-decoration-underline',]} content={unfinishedText('Mii costume')}/>,//TODO add Mii costume (singular form)
            pluralName: <TextComponent key="miiCostume-pluralName" classes={['text-decoration-underline',]} content={unfinishedText('Mii costumes')}/>,//TODO add Mii costume (plural form)
        },)
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithCardList<MiiCostumeCategories> {
        return new class implements AppInterpreterWithCardList<MiiCostumeCategories> {

            public get iterable() {
                return MiiCostumeCategories[Symbol.iterator]()
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return {
                    default: 12,
                    small: 6,
                    medium: 3,
                    large: null,
                }
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list'
            }

            public createCardListContent(enumerable: MiiCostumeCategories,) {
                return <Image file={enumerable.imageFile}/>
            }

            //endregion -------------------- Card list interpreter --------------------

        }()
    }

    //region -------------------- Create methods --------------------

}
