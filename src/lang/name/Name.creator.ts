import type {PossibleNameTemplate} from './Name.template'

import {assert} from '../../util/utilitiesMethods'

/**
 * A class made to help the {@link PossibleNameTemplate names templates}.
 */
export class NameCreator {

    static readonly #INSTANCE_MAP = new Map<object, Set<string>>()

    static #testName(name: PossibleNameTemplate,): PossibleNameTemplate {
        //README since some references are still not complete, they are in comment
        assert(name.english.simple != null || !(name.english.american == null || name.english.european == null), `The english name ("${name.english.simple}") can either have a single english name or both "american"("${name.english.american}") and "european"("${name.english.european}") name separated.`,)
        assert(name.french.simple != null || !(name.french.canadian == null || name.french.european == null), `The french name ("${name.french.simple}") can either have a single french name or both "canadian"("${name.french.canadian}") and "european"("${name.french.european}") name separated.`,)
        // assert(name.spanish.simple != null || !(name.spanish.american == null || name.spanish.european == null), `The spanish name ("${name.spanish.simple}") can either have a single spanish name or both "american"("${name.spanish.american}") and "european"("${name.spanish.european}") name separated.`,)
        // assert(name.portuguese.simple != null || !(name.portuguese.american == null || name.portuguese.european == null), `The portuguese name ("${name.portuguese.simple}") can either have a single portuguese name or both "american"("${name.portuguese.american}") and "european"("${name.portuguese.european}") name separated.`,)
        // assert(name.chinese.simple != null || !(name.chinese.traditional == null || name.chinese.simplified == null), `The chinese name ("${name.chinese.simple}") can either have a single chinese name or both "traditional"("${name.chinese.traditional}") and "simplified"("${name.chinese.simplified}") name separated.`,)

        return name
    }

    static #testEnglishNameInSet(set: Set<string>, name: PossibleNameTemplate, uniqueName: | string | null,): string {
        const englishReferenceName = uniqueName ?? name.english.simple ?? name.english.american

        assert(englishReferenceName != null, 'No english name can be null since they are used as a key for the references.',)
        assert(!set.has(englishReferenceName), `The english name ("${englishReferenceName}") can't be used as a reference since there is already another value.`,)
        return englishReferenceName
    }

    /**
     * <p>
     *  Add the english reference used by the <b>name</b> received into the <b>templateMap</b> reference.
     *  It also add the <b>template</b> received into the <b>templateMap</b>.
     * </p>
     *
     * <p>
     *  The possible ways that it can fail (only in development, not in production)
     *  is when the english name (simple or american) don't have either a value
     *  or when the reference is already existing in the <b>templateMap</b>.
     * </p>
     *
     * @param name the template name to retrieve the english name (simple or american) or a simple unique name
     * @param instance instance to verify the name
     * @param uniqueName the unique name to set the name
     */
    public static addEnglishReference(name: PossibleNameTemplate, instance: object, uniqueName: | string | null = null,): void {
        const map = this.#INSTANCE_MAP
        if (!map.has(instance))
            map.set(instance, new Set())
        const set = map.get(instance)!
        this.#testEnglishNameInSet(set, this.#testName(name), uniqueName,)
    }

}
