import type {AppOptionWithContent, PossibleRenderReactElement} from 'app/options/component/AppOptionWithContent'

import {AbstractAppOptionWithSomething} from 'app/options/component/AbstractAppOptionWithSomething'

export class AppOptionWithContentComponent
    extends AbstractAppOptionWithSomething<PossibleRenderReactElement>
    implements AppOptionWithContent {

    public constructor(callbackToRender: () => PossibleRenderReactElement,) {
        super(callbackToRender,)
    }

    public get renderContent(): readonly ReactElement[] {
        const value = this._callbackToRender()
        return value instanceof Array ? value : [value]
    }

}
