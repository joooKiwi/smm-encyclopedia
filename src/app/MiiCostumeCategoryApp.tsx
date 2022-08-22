import {lazy} from 'react';

import type {AppInterpreterWithCardList}                           from './interpreter/AppInterpreterWithCardList';
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from './interpreter/DimensionOnList';
import type {ReactElement, ReactElementOrString}                   from '../util/react/ReactProperties';

import {AbstractCardListApp}           from './withInterpreter/AbstractCardListApp';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {MiiCostumeCategories}          from '../core/miiCostumeCategory/MiiCostumeCategories';
import {TranslationUtility}            from '../lang/components/TranslationUtility';
import {ViewDisplays}                  from './withInterpreter/ViewDisplays';

const Image = lazy(() => import('./tools/images/Image'));

/**
 * @reactComponent
 */
export default class EveryEntityCategoriesApp
    extends AbstractCardListApp<AppInterpreterWithCardList<MiiCostumeCategories>> {

    public constructor(props: {},) {
        super(props,);
        this.state = {typeDisplayed: ViewDisplays.CARD_LIST,};
    }

    //region -------------------- Create methods --------------------

    protected override _createKey(): string {
        return 'miiCostumeCategory';
    }

    protected override _createTitleContent(): ReactElementOrString {
        return <GameContentTranslationComponent>{translation => TranslationUtility.replaceAndInterpretTranslation(translation, 'Every Mii costume categories', {
            MiiCostume: <span key="miiCostume-singularName" className="text-decoration-underline">--Mii costumes--</span>,//TODO add Mii costume reference
        })}</GameContentTranslationComponent>;
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithCardList<MiiCostumeCategories> {
        return new class implements AppInterpreterWithCardList<MiiCostumeCategories> {

            public get iterable(): IterableIterator<MiiCostumeCategories> {
                return MiiCostumeCategories[Symbol.iterator]();
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return {
                    default: 12,
                    small: 6,
                    medium: 3,
                    large: null,
                };
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list';
            }

            public createCardListContent(enumerable: MiiCostumeCategories,): ReactElement {
                return <Image source={enumerable.imagePath} fallbackName={`${enumerable.englishName} - image`}/>;
            }

            //endregion -------------------- Card list interpreter --------------------

        }();
    }

    //region -------------------- Create methods --------------------

}
