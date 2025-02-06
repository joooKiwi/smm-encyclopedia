import type CustomMatchers from 'jest-extended'
import 'vitest'

declare module 'vitest' {

    /* eslint-disable */
    interface Assertion<out T = any, > extends CustomMatchers<T> {}

    interface AsymmetricMatchersContaining<out R = void, > extends CustomMatchers<R> {}

    interface ExpectStatic extends CustomMatchers<void> {}
    /* eslint-enable */

}
