import type {AppInterpreterWithCardList}                           from 'app/interpreter/AppInterpreterWithCardList'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {EveryPossibleRouteNames}                              from 'route/everyRoutes.types'

import {AbstractCardListApp}    from 'app/withInterpreter/AbstractCardListApp'
import {Medals}                 from 'core/medal/Medals'
import {gameContentTranslation} from 'lang/components/translationMethods'
import Image                    from 'app/tools/images/Image'

export default class MedalApp
    extends AbstractCardListApp<AppInterpreterWithCardList<Medals>> {

    //region -------------------- Create methods --------------------

    protected override _createKey(): string {
        return 'medal'
    }

    protected override _createSimpleListRouteName(): EveryPossibleRouteNames {
        return 'everyMedal (list)'
    }

    protected override _createCardListRouteName(): EveryPossibleRouteNames {
        return 'everyMedal (card)'
    }

    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('medal.all',)
    }

    protected override _createAppOptionInterpreter() {
        return new class MedalAppInterpreter implements AppInterpreterWithCardList<Medals> {

            public get content() {
                return Medals.CompanionEnum.get.values.toArray()
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return {
                    default: 6,
                    small: 3,
                    medium: 2,
                    large: null,
                    extraExtraLarge: 1,
                }
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list'
            }

            public createCardListContent(enumerable: Medals,): ReactElement {
                return <Image file={enumerable.imageFile}/>
            }

            //endregion -------------------- Card list interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}
