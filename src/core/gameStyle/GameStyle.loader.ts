import file from 'resources/compiled/Game style.json'

import type {PossibleIsAvailableFromTheStart}                                    from 'core/availableFromTheStart/loader.types'
import type {GameContentFrom1And2}                                               from 'core/game/Loader.types'
import type {GameStyle}                                                          from 'core/gameStyle/GameStyle'
import type {PossibleAcronym, PossibleEnglishName}                               from 'core/gameStyle/GameStyles.types'
import type {GameStyleTemplate}                                                  from 'core/gameStyle/GameStyle.template'
import type {PossibleNightDesertWindDirection, PossibleNightDesertWindFrequency} from 'core/gameStyle/loader.types'
import type {Loader}                                                             from 'util/loader/Loader'

import {isInProduction}          from 'variables'
import {AbstractTemplateCreator} from 'core/_template/AbstractTemplate.creator'
import {GameStyleCreator}        from 'core/gameStyle/GameStyle.creator'

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
        if (this.#map == null) {
            const references = new Map<PossibleEnglishName, GameStyle>()

            file.map(it => new GameStyleCreator(new TemplateCreator(it as Content).create()).create())
                .forEach(it => references.set(it.english as PossibleEnglishName, it,))

            if (!isInProduction)
                console.info(
                    '-------------------- "game style" has been loaded --------------------\n',
                    references,
                    '\n-------------------- "game style" has been loaded --------------------',
                )

            this.#map = references
        }
        return this.#map
    }

}


interface Content
    extends GameContentFrom1And2 {

    isAvailableFromTheStart_SMM1: PossibleIsAvailableFromTheStart
    reference: PossibleAcronym
    nightDesertWindDirection: PossibleNightDesertWindDirection
    nightDesertWindFrequency: PossibleNightDesertWindFrequency

}

class TemplateCreator
    extends AbstractTemplateCreator<GameStyleTemplate, Content> {

    public constructor(content: Content,) {
        super(content,)
    }

    public override create(): GameStyleTemplate {
        const content = this._content

        return {
            is: {
                in: {game: this._createGameTemplateFrom1And2(),},
                availableFromTheStart: content.isAvailableFromTheStart_SMM1,
            },
            reference: content.reference,
            nightDesertWind: {
                direction: content.nightDesertWindDirection,
                frequency: content.nightDesertWindFrequency,
            },
        }
    }

}
