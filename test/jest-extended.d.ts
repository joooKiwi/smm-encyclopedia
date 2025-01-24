import type CustomMatchers from 'jest-extended'
import 'vitest'

declare module 'vitest' {
    interface Assertion<out T = any, > extends CustomMatchers<T> {}

    interface AsymmetricMatchersContaining<out R = void, > extends CustomMatchers<R> {}

    interface ExpectStatic extends CustomMatchers<void> {}
}
