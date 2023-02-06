// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import 'jest-extended/all'

expect.extend({
    toBeBooleanOrNull(content) {
        if (Object.is(content, null,) || Object.is(content, true,) || Object.is(content, false,))
            return {
                message: () => `expected "${content}" to not be a boolean or null`,
                pass: true,
            }
        else
            return {
                message: () => `expected "${content}" to be a boolean or null`,
                pass: false,
            }
    },
})
