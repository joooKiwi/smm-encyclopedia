import './MysteryMushroomApp.scss';

import type {AppInterpreterWithTable, SimplifiedTableProperties}   from './interpreter/AppInterpreterWithTable';
import type {AppProperties}                                        from './AppProperties.types';
import type {MysteryMushroomAppStates}                             from './AppStates.types';
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from './interpreter/DimensionOnList';
import type {ReactElement, ReactElementOrString}                   from '../util/react/ReactProperties';

import {AbstractTableApp}              from './withInterpreter/AbstractTableApp';
import {EMPTY_REACT_ELEMENT}           from '../util/emptyReactVariables';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {MysteryMushroomAppOption}      from './options/MysteryMushroomAppOption';
import {MysteryMushrooms}              from '../core/mysteryMushroom/MysteryMushrooms';
import {SingleHeaderContent}           from './tools/table/SimpleHeader';
import {ViewDisplays}                  from './withInterpreter/ViewDisplays';

/**
 * @reactComponent
 */
export default class MysteryMushroomApp
    extends AbstractTableApp<AppInterpreterWithTable<MysteryMushrooms, MysteryMushroomAppOption>, AppProperties, MysteryMushroomAppStates> {

    public constructor(props: AppProperties,) {
        super(props,);
        this.state = {
            typeDisplayed: ViewDisplays.CARD_LIST,
        };
    }

    //region -------------------- Create methods --------------------

    protected override _createKey(): string {
        return 'mysteryMushroom';
    }

    protected override _createTitleContent(): ReactElementOrString {
        return <GameContentTranslationComponent>{translation => translation('Every Mystery Mushrooms', {pluralName: '--Mystery Mushrooms--'})}</GameContentTranslationComponent>;
    }

    protected override _createUniqueNameOnSimpleList(enumerable: MysteryMushrooms,): string {
        return enumerable.uniqueEnglishName;
    }

    protected override _createUniqueNameOnCardList(enumerable: MysteryMushrooms,): string {
        return enumerable.uniqueEnglishName;
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithTable<MysteryMushrooms, MysteryMushroomAppOption> {
        return new class implements AppInterpreterWithTable<MysteryMushrooms, MysteryMushroomAppOption> {

            public get iterable(): IterableIterator<MysteryMushrooms> {
                return MysteryMushrooms[Symbol.iterator]();
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return {
                    small: 6,
                    medium: null,
                    large: 4,
                    extraLarge: 3,
                    extraExtraLarge: 2,
                };
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list';
            }

            public createCardListContent(enumerable: MysteryMushrooms,): ReactElement {
                const amountOfImages = enumerable.englishNameOnFile.length;
                const contains2Images = amountOfImages === 2;

                return amountOfImages === 0
                    ? EMPTY_REACT_ELEMENT
                    : <div className={`image-content-container ${contains2Images ? 'dual' : 'single'}-image-content-container`}>
                        {[
                            MysteryMushroomAppOption.WAITING,
                            MysteryMushroomAppOption.TAUNT,
                            MysteryMushroomAppOption.PRESSING_DOWN,
                            MysteryMushroomAppOption.WALK,
                            MysteryMushroomAppOption.RUNNING,
                            MysteryMushroomAppOption.SWIMMING,
                            MysteryMushroomAppOption.JUMP,
                            MysteryMushroomAppOption.FALLING_AFTER_JUMP,
                            MysteryMushroomAppOption.TURNING,
                            MysteryMushroomAppOption.CLIMBING,
                            MysteryMushroomAppOption.GOAL_POLE,
                        ].map(appOption => appOption.renderImageContent(enumerable, contains2Images,))}
                    </div>;
            }

            //endregion -------------------- Card list interpreter --------------------
            //region -------------------- Table interpreter --------------------

            public set callbackToGetEnumerable(value: () => MysteryMushrooms,) {
                MysteryMushroomAppOption.CALLBACK_TO_GET_ENUMERATION = value;
            }

            public get tableOptions(): readonly MysteryMushroomAppOption[] {
                return [
                    MysteryMushroomAppOption.CONDITION_TO_UNLOCK_IT,
                    MysteryMushroomAppOption.GAME,
                    MysteryMushroomAppOption.NAME,
                    MysteryMushroomAppOption.IMAGES_AND_SOUNDS,
                ];
            }

            public get tableProperties(): SimplifiedTableProperties {
                return {
                    caption: <GameContentTranslationComponent>{translation => translation('Every Mystery Mushrooms', {pluralName: 'Mystery Mushrooms'})}</GameContentTranslationComponent>,
                };
            }


            public createTableContent(option: MysteryMushroomAppOption,): readonly ReactElement[] {
                return option.renderContent;
            }

            public createTableHeader(option: MysteryMushroomAppOption): | SingleHeaderContent | null {
                return option.renderTableHeader;
            }

            //endregion -------------------- Table interpreter --------------------

        }();
    }

    //endregion -------------------- Create methods --------------------

}
