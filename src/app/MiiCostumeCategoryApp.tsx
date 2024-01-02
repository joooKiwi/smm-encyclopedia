import type {AppInterpreterWithCardList} from 'app/interpreter/AppInterpreterWithCardList'
import type {DimensionOnList}            from 'app/interpreter/DimensionOnList'
import type {PossibleRouteName}          from 'route/EveryRoutes.types'

import Image                    from 'app/tools/images/Image'
import {unfinishedText}         from 'app/tools/text/UnfinishedText'
import {AbstractCardListApp}    from 'app/withInterpreter/AbstractCardListApp'
import {MiiCostumeCategories}   from 'core/miiCostumeCategory/MiiCostumeCategories'
import {OtherWordInTheGames}    from 'core/otherWordInTheGame/OtherWordInTheGames'
import {gameContentTranslation} from 'lang/components/translationMethods'

//region -------------------- Import from deconstruction --------------------

const {MII_COSTUME,} = OtherWordInTheGames

//endregion -------------------- Import from deconstruction --------------------

export default class MiiCostumeCategoryApp
    extends AbstractCardListApp<AppInterpreterWithCardList<MiiCostumeCategories>> {

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'miiCostumeCategory'
    }


    protected override _createSimpleListRouteName(): PossibleRouteName {
        return 'everyMiiCostumeCategory (list)'
    }

    protected override _createCardListRouteName(): PossibleRouteName {
        return 'everyMiiCostumeCategory (card)'
    }


    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('mii costume category.all', {
            singularName: MII_COSTUME.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.singularEnglishName),
            pluralName: MII_COSTUME.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.pluralEnglishName),
        },)
    }

    protected override _createAppOptionInterpreter() {
        return new class MiiCostumeCategoryAppInterpreter implements AppInterpreterWithCardList<MiiCostumeCategories> {

            public get content() {
                return MiiCostumeCategories.CompanionEnum.get.values.toArray()
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): DimensionOnList {
                return {
                    default: 1,
                    small: 2,
                    medium: 4,
                }
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension() {
                return this.createListDimension()
            }

            public createCardListContent(enumerable: MiiCostumeCategories,) {
                return <Image file={enumerable.imageFile}/>
            }

            //endregion -------------------- Card list interpreter --------------------

        }()
    }

    //region -------------------- Create methods --------------------

}
