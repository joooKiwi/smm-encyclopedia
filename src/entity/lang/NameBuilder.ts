import {Builder}                            from '../../util/Builder';
import {SMM2NameTemplate}                   from './SMM2NameTemplate';
import {Name}                               from '../../lang/name/Name';
import {NameBuilder as OriginalNameBuilder} from '../../lang/name/NameBuilder';

export class NameBuilder
    implements Builder<Name> {
    readonly #template;

    public constructor(template: SMM2NameTemplate) {
        this.#template = template;
    }

    public get template() {
        return this.#template;
    }

    public build() {
        return new OriginalNameBuilder()
            .setEnglish(this.template.english.simple ?? [this.template.english.american, this.template.english.european,] as string | [string, string,])
            .setFrench(this.template.french.simple ?? [this.template.french.canadian, this.template.french.european,] as string | [string, string,])
            .setGerman(this.template.german as string)
            .setSpanish(this.template.spanish.simple ?? [this.template.spanish.american, this.template.spanish.european,] as string | [string, string,])
            .setItalian(this.template.italian as string)
            .setDutch(this.template.dutch as string)
            .setPortuguese(this.template.portuguese.simple ?? [this.template.portuguese.american, this.template.portuguese.european,] as string | [string, string,])
            .setRussian(this.template.russian as string)
            .setJapanese(this.template.japanese as string)
            .setChinese(this.template.chinese.simple ?? [this.template.chinese.simplified, this.template.chinese.traditional,] as string | [string, string,])
            .setKorean(this.template.korean as string)
            .build();
    }

}
