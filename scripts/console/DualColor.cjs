module.exports = class DualColor {

    //region -------------------- Fields --------------------

    #regular
    #light

    //endregion -------------------- Fields --------------------

    constructor(regular, light,) {
        this.#regular = regular
        this.#light = light
    }

    //region -------------------- Getter methods --------------------

    get regular() {
        return this.#regular
    }

    get light() {
        return this.#light
    }

    //endregion -------------------- Getter methods --------------------

}
