import file from 'resources/compiled/Game style.json'

import type {PossibleIsAvailableFromTheStart}                                    from 'core/availableFromTheStart/loader.types'
import type {GameContentFrom1And2}                                               from 'core/game/Loader.types'
import type {GameStyle}                                                          from 'core/gameStyle/GameStyle'
import type {PossibleAcronym, PossibleEnglishName}                               from 'core/gameStyle/GameStyles.types'
import type {GameStyleTemplate}                                                  from 'core/gameStyle/GameStyle.template'
import type {PossibleNightDesertWindDirection, PossibleNightDesertWindFrequency} from 'core/gameStyle/loader.types'
import type {Loader}                                                             from 'util/loader/Loader'

import {isInProduction}     from 'variables'
import * as TemplateMethods from 'core/_template/templateMethods'
import {GameStyleCreator}   from 'core/gameStyle/GameStyle.creator'

/** @singleton */
export class GameStyleLoader
    implements Loader<ReadonlyMap<PossibleEnglishName, GameStyle>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: GameStyleLoader

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this()
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleEnglishName, GameStyle>

    public load(): ReadonlyMap<PossibleEnglishName, GameStyle> {
        if (this.#map != null)
            return this.#map

        const references = new Map<PossibleEnglishName, GameStyle>()

        file.map(it => new GameStyleCreator(createTemplate(it as Content,),).create(),)
            .forEach(it => references.set(it.english as PossibleEnglishName, it,))

        if (!isInProduction)
            console.info(
                '-------------------- "game style" has been loaded --------------------\n',
                references,
                '\n-------------------- "game style" has been loaded --------------------',
            )

        return this.#map = references
    }

}


interface Content
    extends GameContentFrom1And2 {

    readonly isAvailableFromTheStart_SMM1: PossibleIsAvailableFromTheStart
    readonly reference: PossibleAcronym
    readonly nightDesertWindDirection: PossibleNightDesertWindDirection
    readonly nightDesertWindFrequency: PossibleNightDesertWindFrequency

}

function createTemplate(content: Content,): GameStyleTemplate {
    return {
        is: {
            in: {game: TemplateMethods.createGameTemplateFrom1And2(content,),},
            availableFromTheStart: content.isAvailableFromTheStart_SMM1,
        },
        reference: content.reference,
        nightDesertWind: {
            direction: content.nightDesertWindDirection,
            frequency: content.nightDesertWindFrequency,
        },
    }
}
