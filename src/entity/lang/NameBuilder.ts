import type {Builder}          from '../../util/Builder';
import type {SMM2NameTemplate} from './SMM2Name.template';
import type {Name}             from '../../lang/name/Name';

import {NameBuilder as OriginalNameBuilder} from '../../lang/name/NameBuilder';

export class NameBuilder
    implements Builder<Name> {

    //region -------------------- Attributes --------------------

    readonly #template;
    readonly #isACompleteName;

    //endregion -------------------- Attributes --------------------

    public constructor(template: SMM2NameTemplate, isACompleteName: boolean,) {
        this.#template = template;
        this.#isACompleteName = isACompleteName;
    }

    public get template() {
        return this.#template;
    }

    public get isACompleteName() {
        return this.#isACompleteName;
    }

    private static __interpretEnglishTranslation(canBeNullable: false, value: | string | null,): |string
    private static __interpretEnglishTranslation(canBeNullable: boolean, value: | string | null,): | string | null
    private static __interpretEnglishTranslation(canBeNullable: false, value1: | string | null, value2: | string | null, value3: | string | null,): | string | [string, string,]
    private static __interpretEnglishTranslation(canBeNullable: boolean, value1: | string | null, value2: | string | null, value3: | string | null,): | string | [string, string,] | null
    private static __interpretEnglishTranslation(canBeNullable: boolean, value1: | string | null, value2?: | string | null, value3?: | string | null,): | string | [string, string,] | null {
        if (value2 === undefined) {
            if (!canBeNullable && value1 == null)
                throw new ReferenceError('The value cannot be null');
            return value1;
        }
        if (!canBeNullable && value1 == null && value2 == null && value3 == null)
            throw new ReferenceError('The values received cannot be null.');
        return value1 ?? [value2!, value3!,];
    }

    public build() {
        return new OriginalNameBuilder()
            .setEnglish(NameBuilder.__interpretEnglishTranslation(false, this.template.english.simple, this.template.english.american, this.template.english.european,))
            .setFrench(NameBuilder.__interpretEnglishTranslation(false, this.template.french.simple, this.template.french.canadian, this.template.french.european,))
            .setGerman(NameBuilder.__interpretEnglishTranslation(!this.isACompleteName, this.template.german,))
            .setSpanish(NameBuilder.__interpretEnglishTranslation(!this.isACompleteName, this.template.spanish.simple, this.template.spanish.american, this.template.spanish.european,))
            .setItalian(NameBuilder.__interpretEnglishTranslation(!this.isACompleteName, this.template.italian,))
            .setDutch(NameBuilder.__interpretEnglishTranslation(!this.isACompleteName, this.template.dutch,))
            .setPortuguese(NameBuilder.__interpretEnglishTranslation(!this.isACompleteName, this.template.portuguese.simple, this.template.portuguese.american, this.template.portuguese.european,))
            .setRussian(NameBuilder.__interpretEnglishTranslation(!this.isACompleteName, this.template.russian,))
            .setJapanese(NameBuilder.__interpretEnglishTranslation(!this.isACompleteName, this.template.japanese,))
            .setChinese(NameBuilder.__interpretEnglishTranslation(!this.isACompleteName, this.template.chinese.simple, this.template.chinese.simplified, this.template.chinese.traditional,))
            .setKorean(NameBuilder.__interpretEnglishTranslation(!this.isACompleteName, this.template.korean,))
            .build();
    }

}
