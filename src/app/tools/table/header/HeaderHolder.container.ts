import type {HeaderHolder}        from './HeaderHolder';
import type {SingleHeaderContent} from '../SimpleHeader';
import type {ReactElement}        from '../../../../util/react/ReactProperty';
import {EMPTY_REACT_ELEMENT}      from '../../../../util/emptyReactVariables';

export class HeaderHolderContainer
    implements HeaderHolder {

    readonly #header;
    #subLevel;
    #width;
    #height;
    #wasRendered;
    readonly #callbackToRenderHead: (headerHolder: this,) => ReactElement;
    readonly #callbackToRenderFoot: (headerHolder: this,) => ReactElement;

    public constructor(header: SingleHeaderContent, callbackToRenderHead: (headerHolder: HeaderHolder,) => ReactElement, callbackToRenderFoot: (headerHolder: HeaderHolder,) => ReactElement,) {
        this.#header = header;
        this.#width = this.#height = 1;
        this.#subLevel = 0;
        this.#wasRendered = false;
        this.#callbackToRenderHead = callbackToRenderHead;
        this.#callbackToRenderFoot = callbackToRenderFoot;
    }

    public get header(): SingleHeaderContent {
        return this.#header;
    }

    //region -------------------- Sub level --------------------

    public get subLevel(): number {
        return this.#subLevel;
    }

    public addSubLevel(): this {
        this.#subLevel++;
        return this;
    }

    //endregion -------------------- Sub level --------------------
    //region -------------------- Height --------------------

    public get height(): number {
        return this.#height;
    }

    public set height(value: number,) {
        this.setHeight(value);
    }

    public setHeight(value: number,): this {
        this.#height = value;
        return this;
    }

    //endregion -------------------- Height --------------------
    //region -------------------- Width --------------------

    public get width(): number {
        return this.#width;
    }

    public set width(value: number,) {
        this.setWidth(value);
    }

    public setWidth(value: number,): this {
        this.#width = value;
        return this;
    }

    //endregion -------------------- Width --------------------
    //region -------------------- Render --------------------

    public get wasRendered(): boolean {
        return this.#wasRendered;
    }

    public setRendered(value: boolean,): this {
        this.#wasRendered = value;
        return this;
    }

    public resetRendered(): this {
        return this.setRendered(false);
    }

    public render(isHead: boolean,): ReactElement {
        return isHead ? this.renderHead() : this.renderFoot();
    }

    public renderHead(): ReactElement {
        if (this.wasRendered)
            return EMPTY_REACT_ELEMENT;
        this.setRendered(true);
        return this.#callbackToRenderHead(this);
    }

    public renderFoot(): ReactElement {
        if (this.wasRendered)
            return EMPTY_REACT_ELEMENT;
        this.setRendered(true);
        return this.#callbackToRenderFoot(this);
    }

    //endregion -------------------- Render --------------------

}