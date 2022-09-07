import {Fragment} from 'react';

import type {AppInterpreterWithSimpleList} from './interpreter/AppInterpreterWithSimpleList';
import type {AppProperties}                from './AppProperties.types';
import type {PossibleDimensionOnList}      from './interpreter/DimensionOnList';
import type {ReactElementOrString}         from '../util/react/ReactProperties';

import {AbstractSimpleListApp}         from './withInterpreter/AbstractSimpleListApp';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {PredefinedMessages}            from '../core/predefinedMessage/PredefinedMessages';
import {TranslationUtility}            from '../lang/components/TranslationUtility';
import {ViewDisplays}                  from './withInterpreter/ViewDisplays';

export default class PredefinedMessageApp
    extends AbstractSimpleListApp<AppInterpreterWithSimpleList<PredefinedMessages>> {

    public constructor(props: AppProperties,) {
        super(props,);
        this.state = {
            typeDisplayed: ViewDisplays.SIMPLE_LIST,
        };
    }

    //region -------------------- Create methods --------------------

    protected override _createKey(): string {
        return 'predefinedMessage';
    }

    protected override _createTitleContent(): ReactElementOrString {
        return <GameContentTranslationComponent>{translation => <>{TranslationUtility.replaceAndInterpretTranslation(
            translation,
            'Every predefined messages', {
                predefinedMessages: <Fragment key="predefined message title (plural predefined message)">--predefined messages--</Fragment>,//TODO add predefined message reference
            },
        )}</>
        }</GameContentTranslationComponent>;
    }

    protected override _createAppOptionInterpreter(): AppInterpreterWithSimpleList<PredefinedMessages> {
        return new class implements AppInterpreterWithSimpleList<PredefinedMessages> {

            public get iterable(): IterableIterator<PredefinedMessages> {
                return PredefinedMessages[Symbol.iterator]();
            }

            //region -------------------- List interpreter --------------------

            public createListDimension(): PossibleDimensionOnList {
                return null;
            }

            //endregion -------------------- List interpreter --------------------

        }();
    }

    //endregion -------------------- Create methods --------------------

}
