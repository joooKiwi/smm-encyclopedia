import './EveryPredefinedMessagesApp.scss';

import {Fragment} from 'react';

import type {ReactElement} from '../util/react/ReactProperty';

import AbstractApp                     from './AbstractApp';
import GameContentTranslationComponent from '../lang/components/GameContentTranslationComponent';
import NameComponent                   from '../lang/name/component/Name.component';
import {PredefinedMessages}            from '../core/predefinedMessage/PredefinedMessages';
import {TranslationUtility}            from '../lang/components/TranslationUtility';

export default class EveryPredefinedMessagesApp
    extends AbstractApp {

    //region -------------------- Methods --------------------

    protected get header() {
        return <GameContentTranslationComponent>{translation => <h1
            className="text-center text-decoration-underline pb-3">{TranslationUtility.replaceAndInterpretTranslation(translation, 'Every predefined messages', {
            predefinedMessages: <Fragment key="predefined message title (plural predefined message)">--predefined messages--</Fragment>,//TODO add predefined message reference
        },)}</h1>
        }</GameContentTranslationComponent>;
    }

    protected get content() {
        return PredefinedMessages.values
            .map(enumerable => ([enumerable.englishName, enumerable.reference,] as const))
            .map(([name, predefinedMessage,]) =>//TODO move the popover to be on the span instead of the nameComponent only.
                <div key={`${name} - main container`} className="predefinedMessage-container col-12 col-sm-4 col-lg-2">
                    <span key={`${name} - main text container`} className="rounded-pill">
                            <NameComponent key={`${name} - text container`} id="name" name={predefinedMessage} popoverOrientation="left"/>
                    </span>
                </div>);
    }

    //endregion -------------------- Methods --------------------

    protected _mainContent(): ReactElement {
        return <div id="predefinedMessage-container">
            {this.header}
            <div className="container-fluid">{this.content}</div>
        </div>;
    }
}
