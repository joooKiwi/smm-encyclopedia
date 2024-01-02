import './SoundEffectCategoryApp.scss'

import type {AppInterpreterWithCardList} from 'app/interpreter/AppInterpreterWithCardList'
import type {DimensionOnList}            from 'app/interpreter/DimensionOnList'
import type {PossibleRouteName}          from 'route/EveryRoutes.types'

import Image                    from 'app/tools/images/Image'
import {AbstractCardListApp}    from 'app/withInterpreter/AbstractCardListApp'
import {SoundEffectCategories}  from 'core/soundEffectCategory/SoundEffectCategories'
import {gameContentTranslation} from 'lang/components/translationMethods'

export default class SoundEffectCategoryApp
    extends AbstractCardListApp<SoundEffectCategories, AppInterpreterWithCardList<SoundEffectCategories>> {

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'soundEffectCategory'
    }


    protected override _createSimpleListRouteName(): PossibleRouteName {
        return 'everySoundEffectCategory (list)'
    }

    protected override _createCardListRouteName(): PossibleRouteName {
        return 'everySoundEffectCategory (card)'
    }


    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('sound effect category.all')
    }

    protected override _createAppOptionInterpreter() {
        return new class SoundEffectCategoryAppInterpreter implements AppInterpreterWithCardList<SoundEffectCategories> {

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

        }()
    }

    //endregion -------------------- Create methods --------------------

}
