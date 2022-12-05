import type {AppOptionWithTable}  from 'app/options/component/AppOptionWithTable'
import type {SingleHeaderContent} from 'app/tools/table/SimpleHeader'

import {AbstractAppOptionWithSomething} from 'app/options/component/AbstractAppOptionWithSomething'

export class AppOptionWithTableComponent
    extends AbstractAppOptionWithSomething<SingleHeaderContent>
    implements AppOptionWithTable {

    public constructor(callbackToRender: () => SingleHeaderContent,) {
        super(callbackToRender,)
    }

    public get renderTableHeader(): SingleHeaderContent {
        return this._callbackToRender()
    }

}
