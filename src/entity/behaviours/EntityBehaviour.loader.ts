import everyBehaviours from '../../resources/Entity behaviours.csv';

import type {EntityBehaviour}                                                         from './EntityBehaviour';
import type {EntityBehaviourTemplate}                                                 from './EntityBehaviour.template';
import type {Loader}                                                                  from '../../util/loader/Loader';
import type {PossibleAcronymEntityBehaviours, PossibleTranslationKeyEntityBehaviours} from './EntityBehaviours.types';
import type {PossibleGroupName, SingleEntityName}                                     from '../entityTypes';

import {AbstractTemplateBuilder} from '../_template/AbstractTemplate.builder';
import {EntityLoader}            from '../simple/Entity.loader';
import {CSVLoader}               from '../../util/loader/CSVLoader';
import {EntityBehaviourBuilder}  from './EntityBehaviour.builder';
import {HeaderTypesForConvertor} from '../../util/loader/utility/HeaderTypesForConvertor';

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
    acronym: PossibleAcronymEntityBehaviours,
    translationKey: PossibleTranslationKeyEntityBehaviours,

    isOnlineOnly: boolean,
    isMultiplayerOnly: boolean,

    link_group: | PossibleGroupName | null,
    link_entity: | SingleEntityName | null,
];

//endregion -------------------- Properties --------------------

//endregion -------------------- CSV array related types --------------------

/**
 * @singleton
 * @recursiveReference<{@link EntityBehaviours}>
 */
export class EntityBehaviourLoader
    implements Loader<ReadonlyMap<PossibleTranslationKeyEntityBehaviours, EntityBehaviour>> {

    //region -------------------- Singleton usage --------------------

    static #instance?: EntityBehaviourLoader;

    private constructor() {
    }

    public static get get() {
        return this.#instance ??= new this();
    }

    //endregion -------------------- Singleton usage --------------------

    #map?: Map<PossibleTranslationKeyEntityBehaviours, EntityBehaviour>;

    public load(): ReadonlyMap<PossibleTranslationKeyEntityBehaviours, EntityBehaviour> {
        if (this.#map == null) {
            const references = new Map<PossibleTranslationKeyEntityBehaviours, EntityBehaviour>();

            //region -------------------- Builder initialisation --------------------

            EntityBehaviourBuilder.entitiesMap = EntityLoader.get.load();
            //TODO add group map

            //endregion -------------------- Builder initialisation --------------------
            //region -------------------- CSV Loader --------------------

            new CSVLoader<PropertiesArray, EntityBehaviour, keyof typeof Headers>(everyBehaviours, convertedContent => new EntityBehaviourBuilder(new TemplateBuilder(convertedContent)).build())
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