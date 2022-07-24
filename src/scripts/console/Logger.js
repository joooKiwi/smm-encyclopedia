const {reset, color: {text: {gray, red, yellow, green}}} = require("./consoleColors")

module.exports = class Logger {

    //region -------------------- Singleton usage --------------------

    static #instance

    constructor() {
        this.logColor = gray
        this.warnColor = yellow
        this.successColor = green
        this.errorColor = red
    }

    static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------
    //region -------------------- Fields --------------------

    #logColor
    #warnColor
    #successColor
    #errorColor

    //endregion -------------------- Fields --------------------
    //region -------------------- Getter & setter --------------------

    /**
     * The log color
     *
     * @returns {DualColor}
     */
    get logColor() {
        return this.#logColor
    }

    set logColor(value) {
        this.#logColor = value
    }

    /**
     * The warning color
     *
     * @returns {DualColor}
     */
    get warnColor() {
        return this.#warnColor
    }

    set warnColor(value) {
        this.#warnColor = value
    }

    /**
     * The success color
     *
     * @returns {DualColor}
     */
    get successColor() {
        return this.#successColor
    }

    set successColor(value) {
        this.#successColor = value
    }

    /**
     * The error color
     *
     * @returns {DualColor}
     */
    get errorColor() {
        return this.#errorColor
    }

    set errorColor(value) {
        this.#errorColor = value
    }

    //endregion -------------------- Getter & setter --------------------
    //region -------------------- Methods --------------------

    log(message) {
        console.log(`${this.logColor.regular}${message}${reset}`)
    }

    warn(message) {
        console.warn(`${this.warnColor.regular}${message}${reset}`)
    }

    success(message) {
        console.log(`${this.successColor.regular}${message}${reset}`)
    }

    error(error) {
        console.error(`${this.errorColor.regular}${error}${reset}`)
    }

    //endregion -------------------- Methods --------------------

}
