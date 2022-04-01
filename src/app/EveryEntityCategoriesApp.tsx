import './EveryEntityCategoriesApp.scss';

import type {AppInterpreterWithCardList}         from './interpreter/AppInterpreterWithCardList';
import type {ReactElement, ReactElementOrString} from '../util/react/ReactProperty';

import {AbstractCardListApp}           from './withInterpreter/AbstractCardListApp';
import {EntityCategories}              from '../core/entityCategory/EntityCategories';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import Image                           from './tools/images/Image';
import {ViewDisplays}                  from './withInterpreter/ViewDisplays';

/**
 * @reactComponent
 */
export default class EveryEntityCategoriesApp
    extends AbstractCardListApp<AppInterpreterWithCardList<EntityCategories>> {

    public constructor(props: {},) {
        super(props,);
        this.state = {typeDisplayed: ViewDisplays.CARD_LIST,};
    }

    //region -------------------- Create methods --------------------

    protected _createKey(): string {
        return 'entityCategory';
    }

    protected _createAppOptionInterpreter(): AppInterpreterWithCardList<EntityCategories> {
        return new class implements AppInterpreterWithCardList<EntityCategories> {

            public get iterable(): IterableIterator<EntityCategories> {
                return EntityCategories[Symbol.iterator]();
            }

            //region -------------------- List interpreter --------------------

            public get createListTitleContent(): ReactElementOrString {
                return <GameContentTranslationComponent translationKey="Every entity categories"/>;
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListContent(enumerable: EntityCategories): ReactElement {
                return <Image source={enumerable.imagePath} fallbackName={`${enumerable.englishName} - image`}/>;
            }

            //endregion -------------------- Card list interpreter --------------------

        }();
    }

    //region -------------------- Create methods --------------------

}
