import './SoundEffectApp.scss';

import type {AppInterpreterWithTable, SimplifiedTableProperties}   from './interpreter/AppInterpreterWithTable';
import type {AppProperties}                                        from './AppProperties.types';
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from './interpreter/DimensionOnList';
import type {ReactElement, ReactElementOrString}                   from '../util/react/ReactProperties';
import type {SingleHeaderContent}                                  from './tools/table/SimpleHeader';
import type {SoundEffectAppStates}                                 from './AppStates.types';

import {AbstractTableApp}              from './withInterpreter/AbstractTableApp';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {SoundEffects}                  from '../core/soundEffect/SoundEffects';
import {SoundEffectAppOption}          from './options/SoundEffectAppOption';
import {ViewDisplays}                  from './withInterpreter/ViewDisplays';

/**
 * @reactComponent
 */
export default class SoundEffectApp
    extends AbstractTableApp<AppInterpreterWithTable<SoundEffects, SoundEffectAppOption>, AppProperties, SoundEffectAppStates> {

    public constructor(props: AppProperties,) {
        super(props,);
        this.state = {
            typeDisplayed: ViewDisplays.TABLE,
        };
    }

    //region -------------------- Create methods --------------------

    protected override _createKey(): string {
        return 'soundEffect';
    }

    protected override _createTitleContent(): ReactElementOrString {
        return <GameContentTranslationComponent translationKey="Every sound effects"/>;
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithTable<SoundEffects, SoundEffectAppOption> {
        return new class implements AppInterpreterWithTable<SoundEffects, SoundEffectAppOption> {

            public get iterable(): IterableIterator<SoundEffects> {
                return SoundEffects[Symbol.iterator]();
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return null;
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list';
            }

            public createCardListContent(enumerable: SoundEffects,): ReactElement {
                return <div>
                    <div className="soundEffect-images-container">
                        {SoundEffectAppOption.renderSMM1And3DSImage(enumerable)}
                        {SoundEffectAppOption.renderSMM2Image(enumerable)}
                    </div>
                </div>;
            }

            //endregion -------------------- Card list interpreter --------------------
            //region -------------------- Table interpreter --------------------

            public set callbackToGetEnumerable(value: () => SoundEffects,) {
                SoundEffectAppOption.CALLBACK_TO_GET_ENUMERATION = value;
            }

            public get tableOptions(): readonly SoundEffectAppOption[] {
                return [
                    SoundEffectAppOption.GAME,
                    SoundEffectAppOption.NAME,
                    SoundEffectAppOption.CATEGORY,
                    SoundEffectAppOption.PLAYER_BEHAVIOUR,
                ];
            }

            public get tableProperties(): SimplifiedTableProperties {
                return {
                    caption: <GameContentTranslationComponent translationKey="Every sound effects"/>,
                };
            }

            public createTableContent(option: SoundEffectAppOption,): readonly ReactElement[] {
                return option.renderContent;
            }

            public createTableHeader(option: SoundEffectAppOption,): | SingleHeaderContent | null {
                return option.renderTableHeader;
            }

            //endregion -------------------- Table interpreter --------------------

        }();
    }

    //endregion -------------------- Create methods --------------------

}
