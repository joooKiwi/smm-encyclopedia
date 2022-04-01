import {Fragment} from 'react';

import type {ReactElementOrString}         from '../util/react/ReactProperty';
import type {AppInterpreterWithSimpleList} from './interpreter/AppInterpreterWithSimpleList';

import {AbstractSimpleListApp}         from './withInterpreter/AbstractSimpleListApp';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import {PredefinedMessages}            from '../core/predefinedMessage/PredefinedMessages';
import {TranslationUtility}            from '../lang/components/TranslationUtility';
import {ViewDisplays}                  from './withInterpreter/ViewDisplays';

export default class EveryPredefinedMessagesApp
    extends AbstractSimpleListApp<AppInterpreterWithSimpleList<PredefinedMessages>> {

    public constructor(props: {},) {
        super(props,);
        this.state = {typeDisplayed: ViewDisplays.SIMPLE_LIST,};
    }

    //region -------------------- Create methods --------------------

    protected _createKey(): string {
        return 'predefinedMessage';
    }

    protected _createAppOptionInterpreter(): AppInterpreterWithSimpleList<PredefinedMessages> {
        return new class implements AppInterpreterWithSimpleList<PredefinedMessages> {

            public get iterable(): IterableIterator<PredefinedMessages> {
                return PredefinedMessages[Symbol.iterator]();
            }

            //region -------------------- List interpreter --------------------

            public get createListTitleContent(): ReactElementOrString {
                return <GameContentTranslationComponent>{translation => <>{TranslationUtility.replaceAndInterpretTranslation(
                    translation,
                    'Every predefined messages', {
                        predefinedMessages: <Fragment key="predefined message title (plural predefined message)">--predefined messages--</Fragment>,//TODO add predefined message reference
                    },
                )}</>
                }</GameContentTranslationComponent>;
            }

            //endregion -------------------- List interpreter --------------------

        }();
    }

    //endregion -------------------- Create methods --------------------

}
