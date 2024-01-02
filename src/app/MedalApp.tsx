import type {AppInterpreterWithCardList} from 'app/interpreter/AppInterpreterWithCardList'
import type {DimensionOnList}            from 'app/interpreter/DimensionOnList'
import type {PossibleRouteName}          from 'route/EveryRoutes.types'

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

    protected override _createSimpleListRouteName(): PossibleRouteName {
        return 'everyMedal (list)'
    }

    protected override _createCardListRouteName(): PossibleRouteName {
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

            public createListDimension(): DimensionOnList {
                return {
                    default: 2,
                    small: 4,
                    medium: 5,
                }
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension() {
                return this.createListDimension()
            }

            public createCardListContent(enumerable: Medals,): ReactElement {
                return <Image file={enumerable.imageFile}/>
            }

            //endregion -------------------- Card list interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}
