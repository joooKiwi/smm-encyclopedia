import type {PossibleSMM2NameTemplate} from './SMM2Name.template';

/**
 * A class made to help the {@link PossibleSMM2NameTemplate names templates}.
 */
export class NameCreator {

    private static __testName<N extends PossibleSMM2NameTemplate, >(name: N,): N {
        if (window.IS_IN_PRODUCTION)
            return name;

        //README since some references are still not complete, they are in comment
        if (name.english.simple == null && (name.english.american == null || name.english.european == null))
            throw new ReferenceError(`The english name ("${name.english.simple}") can either have a single english name or both "american"("${name.english.american}") and "european"("${name.english.european}") name separated.`);
        if (name.french.simple == null && (name.french.canadian == null || name.french.european == null))
            throw new ReferenceError(`The french name ("${name.french.simple}") can either have a single french name or both "canadian"("${name.french.canadian}") and "european"("${name.french.european}") name separated.`);
        // if (name.spanish.simple == null && (name.spanish.american == null || name.spanish.european == null))
        //     throw new ReferenceError(`The spanish name ("${name.spanish.simple}") can either have a single spanish name or both "american"("${name.spanish.american}") and "european"("${name.spanish.european}") name separated.`);
        // if (name.portuguese.simple == null && (name.portuguese.simplified == null || name.portuguese.traditional == null))
        //     throw new ReferenceError(`The portuguese name ("${name.portuguese.simple}") can either have a single portuguese name or both "american"("${name.portuguese.american}") and "european"("${name.portuguese.european}") name separated.`);
        // if (name.chinese.simple == null && (name.chinese.traditional == null || name.chinese.simplified == null))
        //     throw new ReferenceError(`The chinese name ("${name.chinese.simple}") can either have a single chinese name or both "traditional"("${name.chinese.traditional}") and "simplified"("${name.chinese.simplified}") name separated.`);
        return name;
    }

    private static __getEnglishName<N extends PossibleSMM2NameTemplate, T, >(name: N, templateMap: Map<string, T>,): string {
        const englishReferenceName = name.english.simple ?? name.english.american;
        if (window.IS_IN_PRODUCTION)
            return englishReferenceName!;

        if (englishReferenceName == null)
            throw new ReferenceError('No english name can be null since they are used as a key for the references.');
        if (templateMap.has(englishReferenceName))
            throw new ReferenceError(`The english name ("${englishReferenceName}") can't be used as a reference since there is already another value.`);
        return englishReferenceName;
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
     * @param name the template name to retrieve the english name (simple or american)
     * @param templateMap the template map reference
     * @param template the template to add to the map
     */
    public static addEnglishReference<N extends PossibleSMM2NameTemplate, T>(name: N, templateMap: Map<string, T>, template: T,): void {
        templateMap.set(this.__getEnglishName(this.__testName(name), templateMap,), template,);
    }

}
