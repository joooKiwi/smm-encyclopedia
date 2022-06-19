import './EveryMiiCostumeApp.scss';

import type {AppInterpreterWithTable, SimplifiedTableProperties} from './interpreter/AppInterpreterWithTable';
import type {MiiCostumeAppStates}                                from './AppStates.types';
import type {SingleHeaderContent}                                from './tools/table/SimpleHeader';
import type {ReactElement, ReactElementOrString}                 from '../util/react/ReactProperty';

import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {MiiCostumes}                   from '../core/miiCostume/MiiCostumes';
import {TranslationUtility}            from '../lang/components/TranslationUtility';
import {MiiCostumeAppOption}           from './options/MiiCostumeAppOption';
import {AbstractTableApp}              from './withInterpreter/AbstractTableApp';
import Image                           from './tools/images/Image';

export default class EveryMiiCostumeApp
    extends AbstractTableApp<AppInterpreterWithTable<MiiCostumes, MiiCostumeAppOption>, {}, MiiCostumeAppStates> {


    public constructor(props: {},) {
        super(props,);
        MiiCostumeAppOption.REFERENCE = this;
        this.state = MiiCostumeAppOption.createDefaultState;
    }

    //region -------------------- Create methods --------------------

    protected override _createKey(): string {
        return 'miiCostume';
    }

    protected override _createTitleContent(): ReactElementOrString {
        return <GameContentTranslationComponent>{translation => TranslationUtility.replaceAndInterpretTranslation(translation, 'Every Mii costumes', {
            pluralName: <span key="miiCostume-pluralName" className="text-decoration-underline">--Mii costumes--</span>,//TODO add Mii costumes, but the plural name
        })}</GameContentTranslationComponent>;
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithTable<MiiCostumes, MiiCostumeAppOption> {
        return new class implements AppInterpreterWithTable<MiiCostumes, MiiCostumeAppOption> {

            public get iterable(): IterableIterator<MiiCostumes> {
                return MiiCostumes[Symbol.iterator]();
            }

            //region -------------------- Card list interpreter --------------------

            public createCardListContent({reference, englishName, imagePath,}: MiiCostumes,): ReactElement {
                const category = reference.categoryEnglish === '' ? '' : `entityCategory-${reference.categoryEnglish}`;//TODO move to the parent container className.
                return <div className={`${category}`}>
                    <Image source={imagePath} fallbackName={englishName}/>
                </div>;
            }

            //endregion -------------------- Card list interpreter --------------------
            //region -------------------- Table interpreter --------------------

            public set callbackToGetEnumerable(value: () => MiiCostumes,) {
                MiiCostumeAppOption.CALLBACK_TO_GET_ENUMERATION = value;
            }

            public get tableOptions(): MiiCostumeAppOption[] {
                return [
                    MiiCostumeAppOption.IMAGE,
                    MiiCostumeAppOption.NAME,
                    MiiCostumeAppOption.OFFICIAL_NOTIFICATION,
                    MiiCostumeAppOption.CATEGORY,
                ];
            }

            public get tableProperties(): SimplifiedTableProperties {
                return {
                    caption: <GameContentTranslationComponent>{translation => TranslationUtility.replaceAndInterpretTranslation(translation, 'Every Mii costumes', {
                        pluralName: <span key="miiCostume-pluralName" className="text-decoration-underline">--Mii costumes--</span>,//TODO add Mii costumes, but the plural name
                    })}</GameContentTranslationComponent>,
                };
            }


            public createTableContent(option: MiiCostumeAppOption,): readonly ReactElement[] {
                return option.renderContent;
            }

            public createTableHeader(option: MiiCostumeAppOption,): | SingleHeaderContent | null {
                return option.renderTableHeader;
            }

            //endregion -------------------- Table interpreter --------------------

        }();
    }

    //endregion -------------------- Create methods --------------------

}
