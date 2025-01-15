import type {NullableString} from '@joookiwi/type'

export {}

interface CustomMatchers<R = void, > {

    /** Check if the value is a {@link Boolean} (primitive only) or <b>null</b> */
    toBeBooleanOrNull(): R

    /** Check if the value is a {@link Boolean} (primitive only) or <b>N/A</b> */
    toBeBooleanOrNotApplicable(): R

    /** Check if the value is a {@link Boolean} (primitive only) or <b>?</b> */
    toBeBooleanOrUnknown(): R


    /** Check if the value is a {@link Boolean} (primitive only), <b>null</b> or <b>N/A</b> */
    toBeBooleanOrNullOrNotApplicable(): R

    /** Check if the value is a {@link Boolean} (primitive only), <b>null</b> or <b>?</b> */
    toBeBooleanOrNullOrUnknown(): R


    /** Check if the value is a {@link Boolean} (primitive only), <b>null</b>, <b>?</b> or <b>N/A</b> */
    toBeBooleanOrNullOrNotApplicableOrUnknown(): R


    /** Check if the value (as `null` or a {@link String}) is null whenever the {@link value} is <b>true</b> */
    toBeCoherentWith(value: boolean,): R

    /** Check if the value (as `null` or a {@link String}) is null whenever the {@link value} is not a null {@link String} */
    toBeCoherentWith(value: NullableString,): R

}

declare global {
    namespace jest {
        interface AsymmetricMatchers extends CustomMatchers {}

        interface Matchers<R, > extends CustomMatchers<R> {}

        interface Expect extends CustomMatchers {}
    }
}
