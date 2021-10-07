import BaseComponent, {ComponentOptions} from 'bootstrap/js/dist/base-component';

export abstract class BootstrapInstance<STATIC_INSTANCE extends StaticBootstrapInstance, INSTANCE extends BaseComponent, OPTION extends ComponentOptions, ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, > {

    static #referencesMaps: Map<StaticBootstrapInstance, Template> = new Map();

    readonly #element: ELEMENT;
    readonly #elementId: ID;
    readonly #instance: INSTANCE;

    protected constructor(instance: STATIC_INSTANCE, element: | ID | ELEMENT, options: Partial<OPTION>,) {
        if (typeof element === 'string') {
            const htmlElement = document.getElementById(element);
            if (htmlElement == null)
                throw new ReferenceError(`The element id "${element}" has no html reference.`);
            this.#element = htmlElement as ELEMENT;
            this.#elementId = element;
        } else {
            this.#element = element;
            this.#elementId = element.id as ID;
        }
        this.#instance = this._createInstance(options);
        BootstrapInstance.__addReference(instance, this);
    }

    protected abstract _createInstance(options: Partial<OPTION>,): INSTANCE


    public get id(): ID {
        return this.#elementId;
    }

    public get element(): ELEMENT {
        return this.#element;
    }

    public get instance(): INSTANCE {
        return this.#instance;
    }


    private static get __referencesMaps() {
        return this.#referencesMaps;
    }

    private static __addReference(staticInstance: StaticBootstrapInstance, instance: GenericBootstrapInstance,): void {
        if (!this.__referencesMaps.has(staticInstance))
            this.__referencesMaps.set(staticInstance, {id: new Map(), element: new Map(),});
        const template: Template = this.__referencesMaps.get(staticInstance)!;
        template.id.set(instance.id, instance,);
        template.element.set(instance.element, instance,);
    }

    protected static _getInstance<INSTANCE extends GenericBootstrapInstance<ELEMENT, ID>, ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, >(instance: StaticBootstrapInstance, element: | ELEMENT | ID,): INSTANCE {
        const template = this.__referencesMaps.get(instance) as Template<INSTANCE>;
        const instanceReturned = typeof element === 'string' ? template.id.get(element) : template.element.get(element);
        if (instanceReturned == null)
            throw new ReferenceError(`No reference can be used with this element "${typeof element === 'string' ? element : element.id}".`);
        return instanceReturned;
    }
}

interface Template<INSTANCE extends GenericBootstrapInstance = GenericBootstrapInstance, > {

    id: Map<string, INSTANCE>

    element: Map<HTMLElement, INSTANCE>

}

type StaticBootstrapInstance = object;
type GenericBootstrapInstance<ELEMENT extends HTMLElement = HTMLElement, ID extends string = string, > = BootstrapInstance<StaticBootstrapInstance, BaseComponent, ComponentOptions, ELEMENT, ID>;
