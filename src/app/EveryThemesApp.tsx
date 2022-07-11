import './EveryThemesApp.scss';

import type {AppInterpreterWithTable, SimplifiedTableProperties} from './interpreter/AppInterpreterWithTable';
import type {ReactElement, ReactElementOrString}                 from '../util/react/ReactProperty';
import type {SingleHeaderContent}                                from './tools/table/SimpleHeader';
import type {ThemeAppStates}                                     from './AppStates.types';

import {AbstractTableApp}              from './withInterpreter/AbstractTableApp';
import {EMPTY_REACT_ELEMENT}           from '../util/emptyReactVariables';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import Image                           from './tools/images/Image';
import {ThemeAppOption}                from './options/ThemeAppOption';
import {Themes}                        from '../core/theme/Themes';
import {ViewDisplays}                  from './withInterpreter/ViewDisplays';

/**
 * @reactComponent
 */
export default class EveryThemesApp
    extends AbstractTableApp<AppInterpreterWithTable<Themes, ThemeAppOption>, {}, ThemeAppStates> {


    constructor(props: {},) {
        super(props,);
        this.state = {
            typeDisplayed: ViewDisplays.TABLE,
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
                const {reference, englishName, endlessMarioImagePath,} = enumerable;
                return <div className="card-body" id={`theme-${reference.english}`}>
                    {enumerable.renderSingleComponent(true)}
                    {endlessMarioImagePath != null ? <Image source={endlessMarioImagePath} fallbackName={`${englishName} (Endless mario)`}/> : EMPTY_REACT_ELEMENT}
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
                    ThemeAppOption.COURSE_AND_WORLD_THEME,
                    ThemeAppOption.GAME,
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

            public createTableHeader(option: ThemeAppOption): | SingleHeaderContent | null {
                return option.renderTableHeader;
            }

            //endregion -------------------- Table interpreter --------------------

        }();
    }

    //endregion -------------------- Create methods --------------------

}
