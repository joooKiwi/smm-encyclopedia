import './MysteryMushroomApp.scss'

import type {AppInterpreterWithTable, SimplifiedTableProperties}   from 'app/interpreter/AppInterpreterWithTable'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {EveryPossibleRouteNames}                              from 'routes/everyRoutes.types'
import type {ReactElementOrString}                                 from 'util/react/ReactProperties'

import {MysteryMushroomAppOption} from 'app/options/MysteryMushroomAppOption'
import {unfinishedText}           from 'app/tools/text/UnfinishedText'
import {AbstractTableApp}         from 'app/withInterpreter/AbstractTableApp'
import {MysteryMushrooms}         from 'core/mysteryMushroom/MysteryMushrooms'
import {gameContentTranslation}   from 'lang/components/translationMethods'

export default class MysteryMushroomApp
    extends AbstractTableApp<AppInterpreterWithTable<MysteryMushrooms, MysteryMushroomAppOption>> {

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'mysteryMushroom'
    }


    protected override _createSimpleListRouteName(): EveryPossibleRouteNames {
        return 'everyMysteryMushrooms (list)'
    }

    protected override _createCardListRouteName(): EveryPossibleRouteNames {
        return 'everyMysteryMushrooms (card)'
    }

    protected override _createTableRouteName(): EveryPossibleRouteNames {
        return 'everyMysteryMushrooms (table)'
    }


    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('mystery mushroom.all', {
            singularName: unfinishedText('Mystery Mushroom'),//TODO add Mystery Mushroom (singular form)
            pluralName: unfinishedText('Mystery Mushrooms'),//TODO add Mystery Mushroom (plural form)
        },)
    }

    protected override _createUniqueNameOnSimpleList(enumerable: MysteryMushrooms,): string {
        return enumerable.uniqueEnglishName
    }

    protected override _createUniqueNameOnCardList(enumerable: MysteryMushrooms,): string {
        return enumerable.uniqueEnglishName
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithTable<MysteryMushrooms, MysteryMushroomAppOption> {
        return new class implements AppInterpreterWithTable<MysteryMushrooms, MysteryMushroomAppOption> {

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

            public set callbackToGetEnumerable(value: () => MysteryMushrooms,) {
                MysteryMushroomAppOption.CALLBACK_TO_GET_ENUMERATION = value
            }

            public get tableOptions(): readonly MysteryMushroomAppOption[] {
                return [
                    MysteryMushroomAppOption.CONDITION_TO_UNLOCK_IT,
                    MysteryMushroomAppOption.GAME,
                    MysteryMushroomAppOption.NAME,
                    MysteryMushroomAppOption.IMAGES_AND_SOUNDS,
                ]
            }

            public get tableProperties(): SimplifiedTableProperties {
                return {
                    caption: gameContentTranslation('mystery mushroom.all', {
                        singularName: unfinishedText('Mystery Mushroom'),//TODO add Mystery Mushroom (singular form)
                        pluralName: unfinishedText('Mystery Mushrooms'),//TODO add Mystery Mushroom (plural form)
                    },),
                }
            }


            public createTableContent(option: MysteryMushroomAppOption,) {
                return option.renderContent
            }

            public createTableHeader(option: MysteryMushroomAppOption) {
                return option.renderTableHeader
            }

            //endregion -------------------- Table interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}
