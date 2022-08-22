import './SoundEffectCategoryApp.scss';

import type {AppInterpreterWithCardList}                           from './interpreter/AppInterpreterWithCardList';
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from './interpreter/DimensionOnList';
import type {ReactElement, ReactElementOrString}                   from '../util/react/ReactProperties';

import {AbstractCardListApp}           from './withInterpreter/AbstractCardListApp';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import Image                           from './tools/images/Image';
import {SoundEffectCategories}         from '../core/soundEffectCategory/SoundEffectCategories';
import {ViewDisplays}                  from './withInterpreter/ViewDisplays';

/**
 * @reactComponent
 */
export default class SoundEffectCategoryApp
    extends AbstractCardListApp<AppInterpreterWithCardList<SoundEffectCategories>> {

    public constructor(props: {},) {
        super(props,);
        this.state = {typeDisplayed: ViewDisplays.CARD_LIST,};
    }

    //region -------------------- Create methods --------------------

    protected override _createKey(): string {
        return 'soundEffectCategory';
    }

    protected override _createTitleContent(): ReactElementOrString {
        return <GameContentTranslationComponent translationKey="Every sound effect categories"/>;
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithCardList<SoundEffectCategories> {
        return new class implements AppInterpreterWithCardList<SoundEffectCategories> {

            public get iterable(): IterableIterator<SoundEffectCategories> {
                return SoundEffectCategories[Symbol.iterator]();
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return {
                    small: 6,
                    medium: null,
                    large: null,
                };
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list';
            }

            public createCardListContent(enumerable: SoundEffectCategories,): ReactElement {
                return <Image source={enumerable.imagePath} fallbackName={`${enumerable.englishName} - image`}/>;
            }

            //endregion -------------------- Card list interpreter --------------------

        }();
    }

    //endregion -------------------- Create methods --------------------

}
