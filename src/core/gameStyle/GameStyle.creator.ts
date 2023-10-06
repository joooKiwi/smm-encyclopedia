import type {Lazy} from '@joookiwi/lazy'
import {lazy}      from '@joookiwi/lazy'

import type {ClassThatIsAvailableFromTheStart, PossibleIsAvailableFromTheStart} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart'
import type {GameStyle, PossibleNightDesertWindTranslationKey}                  from 'core/gameStyle/GameStyle'
import type {GameStyleTemplate, NightDesertWindTemplate}                        from 'core/gameStyle/GameStyle.template'

import {ClassThatIsAvailableFromTheStartProvider} from 'core/availableFromTheStart/ClassThatIsAvailableFromTheStart.provider'
import {GamePropertyProvider}                     from 'core/entity/properties/game/GameProperty.provider'
import {GameStyleContainer}                       from 'core/gameStyle/GameStyle.container'
import {GameReferences}                           from 'core/gameReference/GameReferences'
import {Import}                                   from 'util/DynamicImporter'

const GAME_PROPERTY_IN_ALL_GAMES = lazy(() => GamePropertyProvider.get.all,)
const GAME_PROPERTY_IN_SMM2 = lazy(() => GamePropertyProvider.get.smm2Only,)

const IS_NOT_APPLICABLE_ON_AVAILABLE_FROM_THE_START_IN_SMM1 = lazy(() => ClassThatIsAvailableFromTheStartProvider.get.null,)
const IS_AVAILABLE_FROM_THE_START_IN_SMM1 = lazy(() => ClassThatIsAvailableFromTheStartProvider.get.get(true,),)
const IS_NOT_AVAILABLE_FROM_THE_START_IN_SMM1 = lazy(() => ClassThatIsAvailableFromTheStartProvider.get.get(false,),)

export function createContent(template: GameStyleTemplate,): GameStyle {
    return new GameStyleContainer(
        GameReferences.CompanionEnum.get.getValueByAcronym(template.reference,).reference.nameContainer,
        template.is.in.game['1And3DS'] ? GAME_PROPERTY_IN_ALL_GAMES : GAME_PROPERTY_IN_SMM2,
        isAvailableFromTheStart(template.is.availableFromTheStart,),
        lazy(() => {
            const gameStyle = Import.GameStyles.CompanionEnum.get.getValueByAcronym(template.reference,)

            return Import.Entities.CompanionEnum.get.values.map(({reference,},) => reference,)
                .filter(reference => gameStyle.get(reference,),)
                .toArray()
        },),
        createNightDesertWindTranslationKey(template.nightDesertWind,),
    )
}

function isAvailableFromTheStart(value: PossibleIsAvailableFromTheStart,): Lazy<ClassThatIsAvailableFromTheStart> {
    if (value == null)
        return IS_NOT_APPLICABLE_ON_AVAILABLE_FROM_THE_START_IN_SMM1
    if (value)
        return IS_AVAILABLE_FROM_THE_START_IN_SMM1
    return IS_NOT_AVAILABLE_FROM_THE_START_IN_SMM1
}

function createNightDesertWindTranslationKey(template: NightDesertWindTemplate,): PossibleNightDesertWindTranslationKey {
    const direction = template.direction
    if (direction == null)
        return null
    return `${direction} ${template.frequency}` as PossibleNightDesertWindTranslationKey
}
