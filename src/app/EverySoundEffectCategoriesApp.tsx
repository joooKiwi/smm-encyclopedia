import './EverySoundEffectCategoriesApp.scss';

import type {AppInterpreterWithCardList}         from './interpreter/AppInterpreterWithCardList';
import type {ReactElement, ReactElementOrString} from '../util/react/ReactProperty';

import {AbstractCardListApp}           from './withInterpreter/AbstractCardListApp';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import Image                           from './tools/images/Image';
import {SoundEffectCategories}         from '../core/soundEffectCategory/SoundEffectCategories';
import {ViewDisplays}                  from './withInterpreter/ViewDisplays';

/**
 * @reactComponent
 */
export default class EverySoundEffectCategoriesApp
    extends AbstractCardListApp<AppInterpreterWithCardList<SoundEffectCategories>> {

    public constructor(props: {},) {
        super(props,);
        this.state = {typeDisplayed: ViewDisplays.CARD_LIST,};
    }

    //region -------------------- Create methods --------------------

    protected _createKey(): string {
        return 'soundEffectCategory';
    }

    protected _createTitleContent(): ReactElementOrString {
        return <GameContentTranslationComponent translationKey="Every sound effect categories"/>;
    }

    protected _createAppOptionInterpreter(): AppInterpreterWithCardList<SoundEffectCategories> {
        return new class implements AppInterpreterWithCardList<SoundEffectCategories> {

            public get iterable(): IterableIterator<SoundEffectCategories> {
                return SoundEffectCategories[Symbol.iterator]();
            }

            //region -------------------- Card list interpreter --------------------

            public createCardListContent(enumerable: SoundEffectCategories): ReactElement {
                return <Image source={enumerable.imagePath} fallbackName={`${enumerable.englishName} - image`}/>;
            }

            //endregion -------------------- Card list interpreter --------------------

        }();
    }

    //endregion -------------------- Create methods --------------------

}
