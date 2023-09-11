import './MiiCostumeApp.scss'

import type {AppInterpreterWithTable}                              from 'app/interpreter/AppInterpreterWithTable'
import type {PossibleDimensionOnCardList, PossibleDimensionOnList} from 'app/interpreter/DimensionOnList'
import type {EveryPossibleRouteNames}                              from 'route/everyRoutes.types'

import {MiiCostumeAppOption}    from 'app/options/MiiCostumeAppOption'
import Image                    from 'app/tools/images/Image'
import TextComponent            from 'app/tools/text/TextComponent'
import {unfinishedText}         from 'app/tools/text/UnfinishedText'
import {AbstractTableApp}       from 'app/withInterpreter/AbstractTableApp'
import {MiiCostumes}            from 'core/miiCostume/MiiCostumes'
import {OtherWordInTheGames}    from 'core/otherWordInTheGame/OtherWordInTheGames'
import {gameContentTranslation} from 'lang/components/translationMethods'

//region -------------------- Import from deconstruction --------------------

const {MII_COSTUME,} = OtherWordInTheGames

//endregion -------------------- Import from deconstruction --------------------

export default class MiiCostumeApp
    extends AbstractTableApp<AppInterpreterWithTable<MiiCostumes, MiiCostumeAppOption>> {

    //region -------------------- Create methods --------------------

    protected override _createKey() {
        return 'miiCostume'
    }


    protected override _createSimpleListRouteName(): EveryPossibleRouteNames {
        return 'everyMiiCostume (list)'
    }

    protected override _createCardListRouteName(): EveryPossibleRouteNames {
        return 'everyMiiCostume (card)'
    }

    protected override _createTableRouteName(): EveryPossibleRouteNames {
        return 'everyMiiCostume (table)'
    }


    protected override _createTitleContent(): ReactElementOrString {
        return gameContentTranslation('mii costume.all', {
            singularName: MII_COSTUME.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.singularEnglishName),
            pluralName: MII_COSTUME.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.pluralEnglishName),
        },)
    }

    protected override _createAppOptionInterpreter() {
        return new class MiiCostumeAppInterpreter implements AppInterpreterWithTable<MiiCostumes, MiiCostumeAppOption> {

            public get iterable() {
                return MiiCostumes[Symbol.iterator]()
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return {
                    small: 6,
                    medium: 4,
                    large: 3,
                    extraExtraLarge: 2,
                }
            }

            //endregion -------------------- List interpreter --------------------
            //region -------------------- Card list interpreter --------------------

            public createCardListDimension(): PossibleDimensionOnCardList {
                return 'list'
            }

            public createCardListContent({reference, imageFile,}: MiiCostumes,) {
                const category = reference.categoryEnglish === '' ? '' : `entityCategory-${reference.categoryEnglish}`//TODO move to the parent container className.
                return <div className={`${category}`}>
                    <Image file={imageFile}/>
                </div>
            }

            //endregion -------------------- Card list interpreter --------------------
            //region -------------------- Table interpreter --------------------

            public readonly tableHeadersColor = 'info' satisfies BootstrapThemeColor
            public readonly tableColor = 'primary' satisfies BootstrapThemeColor
            public readonly tableCaption = gameContentTranslation('mii costume.all', {
                singularName: <TextComponent key="miiCostume-singularName" content={MII_COSTUME.singularLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.singularEnglishName)} className="text-decoration-underline"/>,
                pluralName: <TextComponent key="miiCostume-pluralName" content={MII_COSTUME.pluralLowerCaseNameOnReferenceOrNull ?? unfinishedText(MII_COSTUME.pluralEnglishName)} className="text-decoration-underline"/>,
            },) satisfies ReactElementOrString

            public get tableOptions(): readonly MiiCostumeAppOption[] {
                return [
                    MiiCostumeAppOption.IMAGE,
                    MiiCostumeAppOption.NAME,
                    MiiCostumeAppOption.OFFICIAL_NOTIFICATION,
                    MiiCostumeAppOption.CATEGORY,
                ]
            }


            public createNewTableContent(content: MiiCostumes, option: MiiCostumeAppOption,) {
                return option.renderContent(content,)
            }

            public createTableHeader(option: MiiCostumeAppOption,) {
                return option.renderTableHeader()
            }

            //endregion -------------------- Table interpreter --------------------

        }()
    }

    //endregion -------------------- Create methods --------------------

}
