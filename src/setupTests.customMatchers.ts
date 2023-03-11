export {}

interface CustomMatchers<R = void, > {

    /** Check if the value is a {@link Boolean} (primitive only) or <b>null</b> */
    toBeBooleanOrNull(): R

}

declare global {
    namespace jest {
        interface AsymmetricMatchers extends CustomMatchers {}

        interface Matchers<R, > extends CustomMatchers<R> {}

        interface Expect extends CustomMatchers {}
    }
}
