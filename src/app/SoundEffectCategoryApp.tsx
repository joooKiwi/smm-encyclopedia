import './SoundEffectCategoryApp.scss'

import type {AppInterpreterWithCardList}                           from 'app/interpreter/AppInterpreterWithCardList'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {EveryPossibleRouteNames}                              from 'route/everyRoutes.types'

import Image                    from 'app/tools/images/Image'
import {AbstractCardListApp}    from 'app/withInterpreter/AbstractCardListApp'
import {SoundEffectCategories}  from 'core/soundEffectCategory/SoundEffectCategories'
import {gameContentTranslation} from 'lang/components/translationMethods'

export default class SoundEffectCategoryApp
    extends AbstractCardListApp<AppInterpreterWithCardList<SoundEffectCategories>> {

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'soundEffectCategory'
    }


    protected override _createSimpleListRouteName(): EveryPossibleRouteNames {
        return 'everySoundEffect (list)'
    }

    protected override _createCardListRouteName(): EveryPossibleRouteNames {
        return 'everySoundEffect (card)'
    }


    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('sound effect category.all')
    }

    protected override _createAppOptionInterpreter() {
        return new class SoundEffectCategoryAppInterpreter implements AppInterpreterWithCardList<SoundEffectCategories> {

            public get content() {
                return SoundEffectCategories.values.toArray()
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return {
                    small: 6,
                    medium: null,
                    large: null,
                }
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list'
            }

            public createCardListContent(enumerable: SoundEffectCategories,) {
                return <Image file={enumerable.imageFile}/>
            }

            //endregion -------------------- Card list interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}
