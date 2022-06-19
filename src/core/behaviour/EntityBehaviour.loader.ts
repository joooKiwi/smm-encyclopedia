import resource from '../../resources/compiled/Entity behaviour.json';

import type {EntityBehaviour}                          from './EntityBehaviour';
import type {EntityBehaviourTemplate}                  from './EntityBehaviour.template';
import type {Loader}                                   from '../../util/loader/Loader';
import type {PossibleAcronym, PossibleTranslationKeys} from './EntityBehaviours.types';
import type {PossibleEnglishName as EntityName}        from '../entity/Entities.types';
import type {PossibleGroupName}                        from '../entityTypes';

import {AbstractTemplateBuilder} from '../_template/AbstractTemplate.builder';
import {CSVLoader}               from '../../util/loader/CSVLoader';
import {EntityBehaviourBuilder}  from './EntityBehaviour.builder';
import {HeaderTypesForConvertor} from '../_util/loader/HeaderTypesForConvertor';

//region -------------------- CSV array related types --------------------

enum Headers {

    acronym,
    translationKey,

    isOnlineOnly,
    isMultiplayerOnly,

    link_group,
    link_entity,

}

//region -------------------- Properties --------------------

type PropertiesArray = [
    acronym: PossibleAcronym,
    translationKey: PossibleTranslationKeys,

    isOnlineOnly: boolean,
    isMultiplayerOnly: boolean,

    link_group: | PossibleGroupName | null,
    link_entity: | EntityName | null,
];

//endregion -------------------- Properties --------------------

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 * @recursiveReference<{@link EntityBehaviours}>
 */
export class EntityBehaviourLoader
    implements Loader<ReadonlyMap<PossibleTranslationKeys, EntityBehaviour>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EntityBehaviourLoader;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleTranslationKeys, EntityBehaviour>;

    public load(): ReadonlyMap<PossibleTranslationKeys, EntityBehaviour> {
        if (this.#map == null) {
            const references = new Map<PossibleTranslationKeys, EntityBehaviour>();

            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, EntityBehaviour, keyof typeof Headers>(resource, convertedContent => new EntityBehaviourBuilder(new TemplateBuilder(convertedContent)).build())
                .setDefaultConversion('boolean')

                .convertTo(HeaderTypesForConvertor.everyPossibleBehavioursAcronyms, 'acronym',)
                .convertTo(HeaderTypesForConvertor.everyPossibleBehavioursTranslationKeys, 'translationKey',)

                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleGroupNames, 'link_group',)
                .convertToEmptyableStringAnd(HeaderTypesForConvertor.everyPossibleEntityNames, 'link_entity',)

                .onAfterFinalObjectCreated(finalContent => references.set(finalContent.translationKey, finalContent,))
                .load();

            //endregion -------------------- CSV Loader --------------------

            console.log('-------------------- "game style" has been loaded --------------------');// temporary console.log
            console.log(references);// temporary console.log
            console.log('-------------------- "game style" has been loaded --------------------');// temporary console.log

            this.#map = references;
        }
        return this.#map;
    }

}

class TemplateBuilder
    extends AbstractTemplateBuilder<EntityBehaviourTemplate, PropertiesArray, typeof Headers> {

    public constructor(content: PropertiesArray,) {
        super(content);
    }

    protected get _headersIndexMap() {
        return Headers;
    }

    public build(): EntityBehaviourTemplate {
        return {
            acronym: this._getContent(this._headersIndexMap.acronym),
            translationKey: this._getContent(this._headersIndexMap.translationKey),
            isOnly: {
                online: this._getContent(this._headersIndexMap.isOnlineOnly),
                multiplayer: this._getContent(this._headersIndexMap.isMultiplayerOnly),
            },
            links: {
                group: this._getContent(this._headersIndexMap.link_group),
                entity: this._getContent(this._headersIndexMap.link_entity),
            },
        };
    }

}
