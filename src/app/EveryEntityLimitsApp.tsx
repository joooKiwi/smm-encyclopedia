import './EveryEntityLimitsApp.scss';

import type {AppInterpreterWithTable, SimplifiedTableProperties} from './interpreter/AppInterpreterWithTable';
import type {EntityLimitAppStates}                               from './AppStates.types';
import type {ReactElement, ReactElementOrString}                 from '../util/react/ReactProperty';
import type {SingleHeaderContent}                                from './tools/table/SimpleHeader';

import {AbstractTableApp}              from './withInterpreter/AbstractTableApp';
import {EntityLimitAppOption}          from './options/EntityLimitAppOption';
import {EntityLimits}                  from '../core/entityLimit/EntityLimits';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import TextComponent                   from './tools/text/TextComponent';
import {ViewDisplays}                  from './withInterpreter/ViewDisplays';

/**
 * @reactComponent
 */
export default class EveryEntityLimitsApp
    extends AbstractTableApp<AppInterpreterWithTable<EntityLimits, EntityLimitAppOption>, {}, EntityLimitAppStates> {


    public constructor(props: {},) {
        super(props,);
        this.state = {
            typeDisplayed: ViewDisplays.TABLE,
        };
    }

    //region -------------------- Create methods --------------------

    protected override _createKey(): string {
        return 'entityLimit';
    }

    protected override _createTitleContent(): ReactElementOrString {
        return <GameContentTranslationComponent translationKey="Every entity limits"/>;
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithTable<EntityLimits, EntityLimitAppOption> {
        return new class implements AppInterpreterWithTable<EntityLimits, EntityLimitAppOption> {

            public get iterable(): IterableIterator<EntityLimits> {
                return EntityLimits[Symbol.iterator]();
            }

            //region -------------------- Card list interpreter --------------------

            public createCardListContent(enumeration: EntityLimits,): ReactElement {
                EntityLimitAppOption.CALLBACK_TO_GET_ENUMERATION = () => enumeration;
                const {reference: {limitAmountInSMM1AndSMM3DS, limitAmountInSMM2, isUnknownLimitInSMM2,}, englishNameInHtml,} = enumeration;

                return <div className="card-body" id={`entityLimit-${englishNameInHtml}`}>
                    {limitAmountInSMM1AndSMM3DS === limitAmountInSMM2
                        ? <TextComponent content={limitAmountInSMM2} isUnknown={isUnknownLimitInSMM2}/>
                        : EntityLimitAppOption.AMOUNT.renderContent}
                </div>;
            }

            //endregion -------------------- Card list interpreter --------------------
            //region -------------------- Table interpreter --------------------
            //endregion -------------------- Table interpreter --------------------

            public set callbackToGetEnumerable(value: () => EntityLimits,) {
                EntityLimitAppOption.CALLBACK_TO_GET_ENUMERATION = value;
            }

            public get tableOptions(): EntityLimitAppOption[] {
                return [
                    EntityLimitAppOption.ACRONYM,
                    EntityLimitAppOption.NAME,
                    EntityLimitAppOption.AMOUNT,
                    EntityLimitAppOption.TYPE,
                ];
            }

            public get tableProperties(): SimplifiedTableProperties {
                return {
                    caption: <GameContentTranslationComponent translationKey="Every entity limits"/>,
                };
            }


            public createTableContent(option: EntityLimitAppOption,): readonly ReactElement[] {
                return option.renderContent;
            }

            public createTableHeader(option: EntityLimitAppOption,): | SingleHeaderContent | null {
                return option.renderTableHeader;
            }

        }();
    }

    //endregion -------------------- Create methods --------------------
}
