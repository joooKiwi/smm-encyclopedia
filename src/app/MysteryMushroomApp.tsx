import './MysteryMushroomApp.scss'

import type {AppInterpreterWithTable}                              from 'app/interpreter/AppInterpreterWithTable'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {EveryPossibleRouteNames}                              from 'route/everyRoutes.types'

import {MysteryMushroomAppOption} from 'app/options/MysteryMushroomAppOption'
import {unfinishedText}           from 'app/tools/text/UnfinishedText'
import {AbstractTableApp}         from 'app/withInterpreter/AbstractTableApp'
import {MysteryMushrooms}         from 'core/mysteryMushroom/MysteryMushrooms'
import {OtherWordInTheGames}      from 'core/otherWordInTheGame/OtherWordInTheGames'
import {gameContentTranslation}   from 'lang/components/translationMethods'

//region -------------------- Import from deconstruction --------------------

const {MYSTERY_MUSHROOM,} = OtherWordInTheGames

//endregion -------------------- Import from deconstruction --------------------
export default class MysteryMushroomApp
    extends AbstractTableApp<AppInterpreterWithTable<MysteryMushrooms, MysteryMushroomAppOption>> {

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'mysteryMushroom'
    }


    protected override _createSimpleListRouteName(): EveryPossibleRouteNames {
        return 'everyMysteryMushroom (list)'
    }

    protected override _createCardListRouteName(): EveryPossibleRouteNames {
        return 'everyMysteryMushroom (card)'
    }

    protected override _createTableRouteName(): EveryPossibleRouteNames {
        return 'everyMysteryMushroom (table)'
    }


    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('mystery mushroom.all', {
            singularName: MYSTERY_MUSHROOM.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(MYSTERY_MUSHROOM.singularEnglishName).toLowerCase(),
            pluralName: MYSTERY_MUSHROOM.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(MYSTERY_MUSHROOM.pluralEnglishName).toLowerCase(),
        },)
    }

    protected override _createUniqueNameOnSimpleList(enumerable: MysteryMushrooms,): string {
        return enumerable.uniqueEnglishName
    }

    protected override _createUniqueNameOnCardList(enumerable: MysteryMushrooms,): string {
        return enumerable.uniqueEnglishName
    }

    protected override _createAppOptionInterpreter() {
        return new class MysteryMushroomAppInterpreter implements AppInterpreterWithTable<MysteryMushrooms, MysteryMushroomAppOption> {

            public get iterable() {
                return MysteryMushrooms[Symbol.iterator]()
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return {
                    small: 6,
                    medium: null,
                    large: 4,
                    extraLarge: 3,
                    extraExtraLarge: 2,
                }
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list'
            }

            public createCardListContent(enumerable: MysteryMushrooms,) {
                const amountOfImages = enumerable.imageFileNames.length
                const contains2Images = amountOfImages === 2

                return amountOfImages === 0
                    ? null
                    : <div className={`image-content-container ${contains2Images ? 'dual' : 'single'}-image-content-container`}>
                        {[
                            MysteryMushroomAppOption.WAITING,
                            MysteryMushroomAppOption.TAUNT,
                            MysteryMushroomAppOption.PRESSING_DOWN,
                            MysteryMushroomAppOption.WALK,
                            MysteryMushroomAppOption.RUNNING,
                            MysteryMushroomAppOption.SWIMMING,
                            MysteryMushroomAppOption.JUMP,
                            MysteryMushroomAppOption.FALLING_AFTER_A_JUMP,
                            MysteryMushroomAppOption.TURNING,
                            MysteryMushroomAppOption.CLIMBING,
                            MysteryMushroomAppOption.GOAL_POLE,
                        ].map(appOption => appOption.renderImageContent(enumerable, contains2Images,))}
                    </div>
            }

            //endregion -------------------- Card list interpreter --------------------
            //region -------------------- Table interpreter --------------------

            public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor
            public readonly tableColor = 'primary' satisfies BootstrapThemeColor
            public readonly tableCaption = gameContentTranslation('mystery mushroom.all', {
                singularName: MYSTERY_MUSHROOM.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(MYSTERY_MUSHROOM.singularEnglishName).toLowerCase(),
                pluralName: MYSTERY_MUSHROOM.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(MYSTERY_MUSHROOM.pluralEnglishName).toLowerCase(),
            },) satisfies ReactElementOrString

            public get tableOptions(): readonly MysteryMushroomAppOption[] {
                return [
                    MysteryMushroomAppOption.CONDITION_TO_UNLOCK_IT,
                    MysteryMushroomAppOption.GAME,
                    MysteryMushroomAppOption.NAME,

                    MysteryMushroomAppOption.POWER_UP_COLLECTED,
                    MysteryMushroomAppOption.WAITING,
                    MysteryMushroomAppOption.TAUNT,
                    MysteryMushroomAppOption.PRESSING_DOWN,
                    MysteryMushroomAppOption.WALK,
                    MysteryMushroomAppOption.RUNNING,
                    MysteryMushroomAppOption.SWIMMING,
                    MysteryMushroomAppOption.JUMP,
                    MysteryMushroomAppOption.FALLING_AFTER_A_JUMP,
                    MysteryMushroomAppOption.ON_GROUND_AFTER_A_JUMP,
                    MysteryMushroomAppOption.TURNING,
                    MysteryMushroomAppOption.CLIMBING,
                    MysteryMushroomAppOption.GOAL_POLE,
                    MysteryMushroomAppOption.LOST_A_LIFE,
                ]
            }


            public createNewTableContent(content: MysteryMushrooms, option: MysteryMushroomAppOption,) {
                return option.renderContent(content,)
            }

            public createTableHeader(option: MysteryMushroomAppOption) {
                return option.renderTableHeader()
            }

            //endregion -------------------- Table interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}
