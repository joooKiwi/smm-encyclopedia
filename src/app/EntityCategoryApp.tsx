import './EntityCategoryApp.scss'

import type {AppInterpreterWithCardList}                           from 'app/interpreter/AppInterpreterWithCardList'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {EveryPossibleRouteNames}                              from 'route/everyRoutes.types'

import Image                    from 'app/tools/images/Image'
import {AbstractCardListApp}    from 'app/withInterpreter/AbstractCardListApp'
import {EntityCategories}       from 'core/entityCategory/EntityCategories'
import {OtherWordInTheGames}    from 'core/otherWordInTheGame/OtherWordInTheGames'
import {gameContentTranslation} from 'lang/components/translationMethods'
import {unfinishedText}         from 'app/tools/text/UnfinishedText'

//region -------------------- Deconstruction imports --------------------

const {ENTITY,} = OtherWordInTheGames

//endregion -------------------- Deconstruction imports --------------------

export default class EntityCategoryApp
    extends AbstractCardListApp<AppInterpreterWithCardList<EntityCategories>> {

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'entityCategory'
    }


    protected override _createSimpleListRouteName(): EveryPossibleRouteNames {
        return 'everyEntityCategory (list)'
    }

    protected override _createCardListRouteName(): EveryPossibleRouteNames {
        return 'everyEntityCategory (card)'
    }


    protected override _createTitleContent(): ReactElementOrString {
        const singularEntityName = ENTITY.singularNameOnReferenceOrNull ?? unfinishedText(ENTITY.singularEnglishName), singularEntityLowerCaseName = ENTITY.singularLowerCaseNameOnReferenceOrNull ?? singularEntityName.toLowerCase()
        return gameContentTranslation('entity category.all', {Entity: singularEntityName, entity: singularEntityLowerCaseName,},)
    }

    protected override _createAppOptionInterpreter() {
        return new class EntityCategoryAppInterpreter implements AppInterpreterWithCardList<EntityCategories> {

            public get content() {
                return EntityCategories.CompanionEnum.get.values.toArray()
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
