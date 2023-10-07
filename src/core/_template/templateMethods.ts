import type {GameContentFromAllGames}        from 'core/game/Loader.types'
import type {SimpleGameFromAllGamesTemplate} from 'core/game/SimpleGame.template'
import type {LanguageContent}                from 'core/_template/LanguageContent'
import type {NameTemplate}                   from 'lang/name/Name.template'


/**
 * Create a {@link NameTemplate name template} from a {@link content}
 *
 * @param content The {@link LanguageContent} to reorganize and fill the missing fields
 * @return {NameTemplate} A new template prepared for the {@link NameContainer}
 */
export function createNameTemplate(content: LanguageContent,): NameTemplate {
    return {
        english: {simple: content.english, american: content.americanEnglish, european: content.europeanEnglish,},
        french: {simple: content.french, canadian: content.canadianFrench, european: content.europeanFrench,},
        german: content.german,
        spanish: {simple: content.spanish, american: content.americanSpanish, european: content.europeanSpanish,},
        italian: content.italian,
        dutch: content.dutch,
        portuguese: {simple: content.portuguese, american: content.americanPortuguese, european: content.europeanPortuguese,},
        russian: content.russian,
        chinese: {simple: content.chinese, traditional: content.traditionalChinese, simplified: content.simplifiedChinese,},
        japanese: content.japanese,
        korean: content.korean,
        hebrew: content?.hebrew ?? null,
        polish: content?.polish ?? null,
        ukrainian: content?.ukrainian ?? null,
        greek: content?.greek ?? null,
    }
}


/**
 * Create a game template from a {@link content}
 *
 * It implied that has properties that are {@link boolean}.
 *  1. {@link Games.SUPER_MARIO_MAKER_1 SMM1}
 *  1. {@link Games.SUPER_MARIO_MAKER_FOR_NINTENDO_3DS SMM3DS}
 *  1. {@link Games.SUPER_MARIO_MAKER_2 SMM2}
 *
 * @param content The {@link GameContentFrom1And2} applicable to a {@link Games} from three arguments
 */
export function createGameTemplateFromAllGames(content: GameContentFromAllGames,): SimpleGameFromAllGamesTemplate<boolean, boolean, boolean> {
    return {1: content.isInSuperMarioMaker1, '3DS': content.isInSuperMarioMakerFor3DS, 2: content.isInSuperMarioMaker2,}
}
