import file from 'resources/compiled/Entity behaviour.json'

import {EveryTypes} from '__test__/EveryTypes'

describe('Entity behaviour (file test)', () => {
    const types = EveryTypes.get,
        everyAcronym = types.everyPossibleAcronym_entityBehaviour,
        everyTranslationKey = types.everyPossibleTranslationKey_entityBehaviour,
        everyGroup = [null, ...types.everyPossibleName_entityGroup,],
        everyEntity = [null, ...types.everyPossibleName_entity,]

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
