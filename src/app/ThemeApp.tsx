import './ThemeApp.scss';

import type {AppInterpreterWithTable, SimplifiedTableProperties} from './interpreter/AppInterpreterWithTable';
import type {ReactElement, ReactElementOrString}                 from '../util/react/ReactProperties';
import type {SingleHeaderContent}                                from './tools/table/SimpleHeader';
import type {ThemeAppStates}                                     from './AppStates.types';

import {AbstractTableApp}              from './withInterpreter/AbstractTableApp';
import {EMPTY_REACT_ELEMENT}           from '../util/emptyReactVariables';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import Image                           from './tools/images/Image';
import {ThemeAppOption}                from './options/ThemeAppOption';
import {Themes}                        from '../core/theme/Themes';
import {ViewDisplays}                  from './withInterpreter/ViewDisplays';
import {CommonOptions}                 from './options/CommonOptions';

/**
 * @reactComponent
 */
export default class ThemeApp
    extends AbstractTableApp<AppInterpreterWithTable<Themes, ThemeAppOption>, {}, ThemeAppStates> {


    public constructor(props: {},) {
        super(props,);
        this.state = {
            typeDisplayed: ViewDisplays.CARD_LIST,
        };
    }

    //region -------------------- Create methods --------------------

    protected override _createKey(): string {
        return 'theme';
    }

    protected override _createTitleContent(): ReactElementOrString {
        return <GameContentTranslationComponent translationKey="Every themes"/>;
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithTable<Themes, ThemeAppOption> {
        return new class implements AppInterpreterWithTable<Themes, ThemeAppOption> {

            public get iterable(): IterableIterator<Themes> {
                return Themes[Symbol.iterator]();
            }

            //region -------------------- Card list interpreter --------------------

            public createCardListContent(enumerable: Themes,): ReactElement {
                const {englishName, englishNameInHtml, endlessMarioImagePath,} = enumerable;

                return <div className="card-body" id={`theme-${englishNameInHtml}`}>
                    <div className="col-2">{CommonOptions.get.getGameContent(enumerable)}</div>
                    <div className="images-container col-7">
                        {enumerable.renderSingleComponent(true)}
                        {endlessMarioImagePath != null ? <Image source={endlessMarioImagePath} fallbackName={`${englishName} (Endless mario)`}/> : EMPTY_REACT_ELEMENT}
                    </div>
                    <div className="col-2">{CommonOptions.get.getThemeContent(enumerable)}</div>
                </div>;
            }

            //endregion -------------------- Card list interpreter --------------------
            //region -------------------- Table interpreter --------------------

            public set callbackToGetEnumerable(value: () => Themes,) {
                ThemeAppOption.CALLBACK_TO_GET_ENUMERATION = value;
            }

            public get tableOptions(): ThemeAppOption[] {
                return [
                    ThemeAppOption.IMAGE,
                    ThemeAppOption.NAME,
                    ThemeAppOption.NIGHT_EFFECT,
                ];
            }

            public get tableProperties(): SimplifiedTableProperties {
                return {
                    caption: <GameContentTranslationComponent translationKey="Every themes"/>,
                };
            }


            public createTableContent(option: ThemeAppOption,): readonly ReactElement[] {
                return option.renderContent;
            }

            public createTableHeader(option: ThemeAppOption,): | SingleHeaderContent | null {
                return option.renderTableHeader;
            }

            //endregion -------------------- Table interpreter --------------------

        }();
    }

    //endregion -------------------- Create methods --------------------

}
