import './EntityCategoryApp.scss'

import type {AppInterpreterWithCardList}                           from 'app/interpreter/AppInterpreterWithCardList'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {ReactElementOrString}                                 from 'util/react/ReactProperties'

import Image                    from 'app/tools/images/Image'
import {AbstractCardListApp}    from 'app/withInterpreter/AbstractCardListApp'
import {EntityCategories}       from 'core/entityCategory/EntityCategories'
import {gameContentTranslation} from 'lang/components/translationMethods'

export default class EntityCategoryApp
    extends AbstractCardListApp<AppInterpreterWithCardList<EntityCategories>> {

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'entityCategory'
    }

    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('entity category.all')
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithCardList<EntityCategories> {
        return new class implements AppInterpreterWithCardList<EntityCategories> {

            public get iterable() {
                return EntityCategories[Symbol.iterator]()
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return {
                    small: 6,
                    medium: null,
                    large: 3,
                }
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list'
            }

            public createCardListContent(enumerable: EntityCategories,) {
                return <Image file={enumerable.imageFile}/>
            }

            //endregion -------------------- Card list interpreter --------------------

        }()
    }

    //region -------------------- Create methods --------------------

}
