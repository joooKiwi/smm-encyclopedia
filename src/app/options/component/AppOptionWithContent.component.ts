import type {AppOptionWithContent, PossibleRenderReactElement} from './AppOptionWithContent';
import type {ReactElement}                                     from '../../../util/react/ReactProperties';

import {AbstractAppOptionWithSomething} from './AbstractAppOptionWithSomething';

export class AppOptionWithContentComponent
    extends AbstractAppOptionWithSomething<PossibleRenderReactElement>
    implements AppOptionWithContent {

    public constructor(callbackToRender: () => PossibleRenderReactElement,) {
        super(callbackToRender,);
    }

    public get renderContent(): readonly ReactElement[] {
        const value = this._callbackToRender();
        return value instanceof Array ? value : [value];
    }

}
