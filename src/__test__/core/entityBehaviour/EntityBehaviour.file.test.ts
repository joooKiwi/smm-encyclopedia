import file from 'resources/compiled/Entity behaviour.json'

import {EveryTypes} from '__test__/EveryTypes'

describe('Entity behaviour (file test)', () => {
    const types = EveryTypes.get,
        everyAcronyms = types.everyPossibleAcronym_entityBehaviour,
        everyTranslationKeys = types.everyPossibleTranslationKey_entityBehaviour,
        everyGroups = [null, ...types.everyPossibleName_entityGroup,],
        everyEntities = [null, ...types.everyPossibleName_entity,]

    file.forEach(it => describe(it.translationKey, () => {// eslint-disable-line jest/valid-title
        describe('Type validations', () => {
            test('Acronym', () => expect(it.acronym).toBeOneOf(everyAcronyms))
            test('Translation key', () => expect(it.translationKey).toBeOneOf(everyTranslationKeys))

            test('Is online only', () => expect(it.isOnlineOnly).toBeBoolean())
            test('Is multiplayer only', () => expect(it.isMultiplayerOnly).toBeBoolean())

            test.skip('Group (link)', () => expect(it.link_group).toBeOneOf(everyGroups))//TODO add the entity group to the project
            test('Entity (link)', () => expect(it.link_entity).toBeOneOf(everyEntities))
        },)
    },),)
},)
