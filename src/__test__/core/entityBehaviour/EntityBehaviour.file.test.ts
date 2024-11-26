import file from 'resources/compiled/Entity behaviour.json' assert { type: 'json', }

import {EveryTypes} from '__test__/EveryTypes'

describe('Entity behaviour (file test)', () => {
    const types = EveryTypes.get
    const everyAcronym = types.everyPossibleAcronym_entityBehaviour
    const everyTranslationKey = types.everyPossibleTranslationKey_entityBehaviour
    const everyGroup = [null, ...types.everyPossibleName_entityGroup,] as const
    const everyEntity = [null, ...types.everyPossibleName_entity,] as const

    file.forEach(it => describe(it.translationKey, () => {// eslint-disable-line jest/valid-title
        describe('Type validations', () => {
            test('Acronym', () => expect(it.acronym).toBeOneOf(everyAcronym))
            test('Translation key', () => expect(it.translationKey).toBeOneOf(everyTranslationKey))

            test('Is online only', () => expect(it.isOnlineOnly).toBeBoolean())
            test('Is multiplayer only', () => expect(it.isMultiplayerOnly).toBeBoolean())

            test.skip('Group (link)', () => expect(it.link_group).toBeOneOf(everyGroup))//TODO add the entity group to the project
            test('Entity (link)', () => expect(it.link_entity).toBeOneOf(everyEntity))
        },)
    },),)
},)
