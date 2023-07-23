export class SoundSubElementsHolder {

    //region -------------------- Fields --------------------

    readonly #playElement
    readonly #pauseElement
    readonly #stopElement
    readonly #loadingElement
    readonly #exceptionElement

    //region -------------------- Fields --------------------

    public constructor(playElement: ReactCallback, pauseElement: ReactCallback, stopElement: ReactCallback, loadingElement: ReactCallback, exceptionElement: ReactCallback,) {
        this.#playElement = playElement
        this.#pauseElement = pauseElement
        this.#stopElement = stopElement
        this.#loadingElement = loadingElement
        this.#exceptionElement = exceptionElement
    }

    //region -------------------- Getter methods --------------------

    public get playElement(): ReactCallback {
        return this.#playElement
    }

    public get pauseElement(): ReactCallback {
        return this.#pauseElement
    }

    public get stopElement(): ReactCallback {
        return this.#stopElement
    }

    public get loadingElement(): ReactCallback {
        return this.#loadingElement
    }

    public get exceptionElement(): ReactCallback {
        return this.#exceptionElement
    }

    //endregion -------------------- Getter methods --------------------

}

type ReactCallback = () => ReactElement
