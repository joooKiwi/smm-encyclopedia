import {ModalInstance}     from 'bootstrap/modal/ModalInstance'
import {OffcanvasInstance} from 'bootstrap/offcanvas/OffcanvasInstance'
import {PopoverInstance}   from 'bootstrap/popover/PopoverInstance'
import {TooltipInstance}   from 'bootstrap/tooltip/TooltipInstance'

/** @singleton */
export class BootstrapInstanceHandler {

    //region -------------------- Singleton usage --------------------

    static #instance?: BootstrapInstanceHandler

    private constructor() {}

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #tooltipMap?: Map<TooltipInstance, Template>
    #popoverMap?: Map<PopoverInstance, Template>
    #offcanvasMap?: Map<OffcanvasInstance, Template>
    #modalMap?: Map<ModalInstance, Template>

    public getTooltipInstanceOrNull<const ELEMENT extends HTMLElement, const ID extends string = never, >(type: | ELEMENT | ID,): NullOr<TooltipInstance<ELEMENT, ID>>
    public getTooltipInstanceOrNull(type: StringOrHTMLElement,): NullOr<TooltipInstance> {
        return this._getValueFrom(type, this.#tooltipMap,)
    }

    public getPopoverInstanceOrNull<const ELEMENT extends HTMLElement, const ID extends string = never, >(type: | ELEMENT | ID,): NullOr<PopoverInstance<ELEMENT, ID>>
    public getPopoverInstanceOrNull(type: StringOrHTMLElement,): NullOr<PopoverInstance> {
        return this._getValueFrom(type, this.#popoverMap,)
    }

    public getOffcanvasInstanceOrNull<const ELEMENT extends HTMLElement, const ID extends string = never, >(type: | ELEMENT | ID,): NullOr<OffcanvasInstance<ELEMENT, ID>>
    public getOffcanvasInstanceOrNull(type: StringOrHTMLElement,): NullOr<OffcanvasInstance> {
        return this._getValueFrom(type, this.#offcanvasMap,)
    }

    public getModalInstanceOrNull<const ELEMENT extends HTMLElement, const ID extends string = never, >(type: | ELEMENT | ID,): NullOr<ModalInstance<ELEMENT, ID>>
    public getModalInstanceOrNull(type: StringOrHTMLElement,): NullOr<ModalInstance> {
        return this._getValueFrom(type, this.#modalMap,)
    }

    protected _getValueFrom<const INSTANCE, >(type: StringOrHTMLElement, map: Nullable<ReadonlyMap<INSTANCE, Template>>,): NullOr<INSTANCE> {
        if (map == null)
            return null

        const iterator = map.entries()
        let value = iterator.next()
        if (typeof type == 'string') {
            while (!value.done) {
                if (value.value[1].id === type)
                    return value.value[0]
                value = iterator.next()
            }
            return null
        }
        while (!value.done) {
            if (value.value[1].element === type)
                return value.value[0]
            value = iterator.next()
        }
        return null
    }


    public add<T extends TooltipInstance<any, any>, >(type: StringOrHTMLElement, instance: T,): T
    public add<T extends PopoverInstance<any, any>, >(type: StringOrHTMLElement, instance: T,): T
    public add<T extends OffcanvasInstance<any, any>, >(type: StringOrHTMLElement, instance: T,): T
    public add<T extends ModalInstance<any, any>, >(type: StringOrHTMLElement, instance: T,): T
    public add<T extends PossibleBootstrapInstance, >(type: StringOrHTMLElement, instance: T,): T {
        const template = typeof type == 'string'
            ? {id: type, element: document.getElementById(type,)!}
            : {id: type.id, element: type,} satisfies Template

        if (instance instanceof TooltipInstance)
            (this.#tooltipMap ??= new Map<TooltipInstance, Template>()).set(instance, template,)
        else if (instance instanceof PopoverInstance)
            (this.#popoverMap ??= new Map<PopoverInstance, Template>()).set(instance, template,)
        else if (instance instanceof OffcanvasInstance)
            (this.#offcanvasMap ??= new Map<OffcanvasInstance, Template>()).set(instance, template,)
        else
            (this.#modalMap ??= new Map<ModalInstance, Template>()).set(instance, template,)
        return instance
    }


    /**
     * Remove the {@link TooltipInstance} instance from the instance handled
     *
     * @param instance The instance to remove
     */
    public remove<T extends TooltipInstance<any, any>, >(instance: T,): T
    /**
     * Remove the {@link PopoverInstance} instance from the instance handled
     *
     * @param instance The instance to remove
     */
    public remove<T extends PopoverInstance<any, any>, >(instance: T,): T
    /**
     * Remove the {@link OffcanvasInstance} instance from the instance handled
     *
     * @param instance The instance to remove
     */
    public remove<T extends OffcanvasInstance<any, any>, >(instance: T,): T
    /**
     * Remove the {@link ModalInstance} instance from the instance handled
     *
     * @param instance The instance to remove
     */
    public remove<T extends ModalInstance<any, any>, >(instance: T,): T
    public remove<T extends PossibleBootstrapInstance, >(instance: T,): T {
        if (instance instanceof TooltipInstance)
            this.#tooltipMap?.delete(instance,)
        else if (instance instanceof PopoverInstance)
            this.#popoverMap?.delete(instance,)
        else if (instance instanceof OffcanvasInstance)
            this.#offcanvasMap?.delete(instance,)
        else
            this.#modalMap?.delete(instance,)
        return instance
    }

}

export interface Template {

    readonly id: string

    readonly element: HTMLElement

}

type PossibleBootstrapInstance = | TooltipInstance<any, any> | PopoverInstance<any, any> | OffcanvasInstance<any, any> | ModalInstance<any, any>
type StringOrHTMLElement = | string | HTMLElement
