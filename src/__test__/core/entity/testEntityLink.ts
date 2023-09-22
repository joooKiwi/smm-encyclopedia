import {EveryTypes} from '__test__/EveryTypes'

const ENTITY_LINK_SEPARATOR = ' / ',
    everyNamesWithThis = ['this', ...EveryTypes.get.everyPossibleName_entity,]

/**
 * Test the value to see if it is an {@link EntityLink} or <b>null</b>
 *
 * @param name The test name
 * @param value The value to test
 */
export function testEntityLink(name: string, value: NullOrString,): void {
    if (value == null)
        return
    if (!value.includes(ENTITY_LINK_SEPARATOR)) {
        test(name, () =>// eslint-disable-line jest/valid-title
            expect(value).toBeOneOf(everyNamesWithThis),)
        return
    }
    describe(name, () => {// eslint-disable-line jest/valid-title
        describe.each(value.split(ENTITY_LINK_SEPARATOR))('%s', it => {
            test(it, () =>// eslint-disable-line jest/valid-title
                expect(it).toBeOneOf(everyNamesWithThis),)
        },)
    },)
}
