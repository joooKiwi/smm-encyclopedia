import type {ProjectLanguages} from '../lang/ProjectLanguages';
import type {ReactProperty}    from '../util/react/ReactProperty';

import LanguageTranslationComponent from '../lang/components/LanguageTranslationComponent';

interface SingleTextLanguageTabProperty
    extends ReactProperty {

    language: ProjectLanguages

    isEnglishName: boolean

}

/**
 *
 * @reactComponent
 */
export default function SingleTextLanguageTab({language, isEnglishName,}: SingleTextLanguageTabProperty,) {
    return <LanguageTranslationComponent>{translation => <span className="nav-link disabled">{translation(isEnglishName ? language.englishName: language.differentWords)}</span>}</LanguageTranslationComponent>;
}