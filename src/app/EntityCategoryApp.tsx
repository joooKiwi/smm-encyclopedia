import './EntityCategoryApp.scss'

import type {AppInterpreterWithCardList} from 'app/interpreter/AppInterpreterWithCardList'
import type {DimensionOnList}            from 'app/interpreter/DimensionOnList'
import type {PossibleRouteName}          from 'route/EveryRoutes.types'

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
    extends AbstractCardListApp<EntityCategories, AppInterpreterWithCardList<EntityCategories>> {

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'entityCategory'
    }


    protected override _createSimpleListRouteName(): PossibleRouteName {
        return 'everyEntityCategory (list)'
    }

    protected override _createCardListRouteName(): PossibleRouteName {
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

        }()
    }

    //region -------------------- Create methods --------------------

}
