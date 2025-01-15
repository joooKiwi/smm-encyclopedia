// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import 'jest-extended/all'

import type {Nullable, StringOrBoolean} from '@joookiwi/type'

expect.extend({
    toBeBooleanOrNull(content: unknown,) {
        if (Object.is(content, null,) || Object.is(content, true,) || Object.is(content, false,))
            return {message: () => `expected “${content}” not to be a boolean or null`, pass: true,}
        return {message: () => `expected “${content}” to be a boolean or null`, pass: false,}
    },
    toBeBooleanOrNotApplicable(content: unknown,) {
        if (Object.is(content, true,) || Object.is(content, false,) || Object.is(content, 'N/A',))
            return {message: () => `expected “${content}” not to be a boolean or N/A`, pass: true,}
        return {message: () => `expected “${content}” to be a boolean or N/A`, pass: false,}
    },
    toBeBooleanOrUnknown(content: unknown,) {
        if (Object.is(content, true,) || Object.is(content, false,) || Object.is(content, '?',))
            return {message: () => `expected “${content}” not to be a boolean or ?`, pass: true,}
        return {message: () => `expected “${content}” to be a boolean or ?`, pass: false,}
    },

    toBeBooleanOrNullOrNotApplicable(content: unknown,) {
        if (Object.is(content, null,) || Object.is(content, true,) || Object.is(content, false,) || Object.is(content, 'N/A',))
            return {message: () => `expected “${content}” not to be a boolean, null or N/A`, pass: true,}
        return {message: () => `expected “${content}” to be a boolean, null or N/A`, pass: false,}
    },
    toBeBooleanOrNullOrUnknown(content: unknown,) {
        if (Object.is(content, null,) || Object.is(content, true,) || Object.is(content, false,) || Object.is(content, '?',))
            return {message: () => `expected “${content}” not to be a boolean, null or ?`, pass: true,}
        return {message: () => `expected “${content}” to be a boolean, null or ?`, pass: false,}
    },

    toBeBooleanOrNullOrNotApplicableOrUnknown(content: unknown,) {
        if (Object.is(content, null,) || Object.is(content, true,) || Object.is(content, false,) || Object.is(content, '?',) || Object.is(content, 'N/A',))
            return {message: () => `expected “${content}” not to be a boolean, null, N/A or ?`, pass: true,}
        return {message: () => `expected “${content}” to be a boolean, null, N/A or ?`, pass: false,}
    },

    toBeCoherentWith(content: unknown, value: Nullable<StringOrBoolean>,) {
        if (!(content === null || typeof content == 'string'))
            throw new TypeError('The comment was expected to be null or a string.',)

        if (typeof value == 'boolean') {
            if (value)
                return {message: () => `expected “${content}” not to be null or a string when the value is true`, pass: true,}
            if (content == null)
                return {message: () => `expected “${content}” not to be null when the value is false`, pass: true,}
            return {message: () => `expected “${content}” to be null when the value is false`, pass: false,}
        }

        if (value != null)
            return {message: () => `expected “${content}” not to be null or a string when the value is not null`, pass: true,}
        if (content == null)
            return {message: () => `expected “${content}” not to be null when the value is null`, pass: true,}
        return {message: () => `expected “${content}” to be null when the value is null`, pass: false,}
    },
},)
