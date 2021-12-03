import type {SingleHeaderContent} from '../SimpleHeader';
import type {ReactElement}        from '../../../../util/react/ReactProperty';

export interface HeaderHolder {

    get header(): SingleHeaderContent

    //region -------------------- Sub level --------------------

    get subLevel(): number

    addSubLevel(): this

    //endregion -------------------- Sub level --------------------
    //region -------------------- Height --------------------

    get height(): number

    set height(value: number,)

    setHeight(value: number,): this

    //endregion -------------------- Height --------------------
    //region -------------------- Width --------------------

    get width(): number

    set width(value: number,)

    setWidth(value: number,): this

    //endregion -------------------- Width --------------------
    //region -------------------- Render --------------------

    get wasRendered(): boolean

    setRendered(value: boolean,): this

    resetRendered(): this

    render(isHead: boolean,): ReactElement

    renderHead(): ReactElement

    renderFoot(): ReactElement

    //endregion -------------------- Render --------------------


}
