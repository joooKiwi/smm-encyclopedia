import type {GameStructure} from 'core/game/GameStructure'

import {SimpleNameBuilder} from 'lang/name/SimpleName.builder'

type MarioWikiLinkOnSMM1 = `${MarioWikiStartingUrl}.${MarioKiwiDomain}/Super_Mario_Maker`
type MarioWikiLinkOnSMM3DS = `${MarioWikiStartingUrl}.${Exclude<MarioKiwiDomain, 'net'>}/Super_Mario_Maker_for_Nintendo_3DS` | null
type MarioWikiLinkOnSMM2 = `${MarioWikiStartingUrl}.${MarioKiwiDomain}/Super_Mario_Maker_2`
type MarioWikiStartingUrl = 'https://www.mariowiki'
type MarioKiwiDomain = | 'com' | 'net' | 'it'
export const SUPER_MARIO_WIKI_LINK = new SimpleNameBuilder<GameStructure<MarioWikiLinkOnSMM1, MarioWikiLinkOnSMM3DS, MarioWikiLinkOnSMM2>>()
    .setEnglish({superMarioMaker: 'https://www.mariowiki.com/Super_Mario_Maker', superMarioMakerForNintendo3DS: 'https://www.mariowiki.com/Super_Mario_Maker_for_Nintendo_3DS', superMarioMaker2: 'https://www.mariowiki.com/Super_Mario_Maker_2',},)
    .setGerman({superMarioMaker: 'https://www.mariowiki.net/Super_Mario_Maker', superMarioMakerForNintendo3DS: null, superMarioMaker2: 'https://www.mariowiki.net/Super_Mario_Maker_2',},)
    .setItalian({superMarioMaker: 'https://www.mariowiki.it/Super_Mario_Maker', superMarioMakerForNintendo3DS: 'https://www.mariowiki.it/Super_Mario_Maker_for_Nintendo_3DS', superMarioMaker2: 'https://www.mariowiki.it/Super_Mario_Maker_2',},)
    .build()


type MarioWikiFandomOnSMM1 = 'https://supermariomaker.fandom.com'
type MarioWikiFandomOnSMM3DS = null
type MarioWikiFandomOnSMM2 = 'https://supermariomaker2.fandom.com'
export const MARIO_MAKER_2_WIKI_FANDOM_LINK: GameStructure<MarioWikiFandomOnSMM1, MarioWikiFandomOnSMM3DS, MarioWikiFandomOnSMM2> =
    {superMarioMaker: 'https://supermariomaker.fandom.com', superMarioMakerForNintendo3DS: null, superMarioMaker2: 'https://supermariomaker2.fandom.com',}


type TheCuttingFloorUrl = 'https://tcrf.net'
type TheCuttingFloorOnSMM1 = `${TheCuttingFloorUrl}/Super_Mario_Maker`
type TheCuttingFloorOnSMM3DS = `${TheCuttingFloorUrl}/Super_Mario_Maker_for_Nintendo_3DS`
type TheCuttingFloorOnSMM2 = `${TheCuttingFloorUrl}/Super_Mario_Maker_2`
export const THE_CUTTING_FLOOR_LINK: GameStructure<TheCuttingFloorOnSMM1, TheCuttingFloorOnSMM3DS, TheCuttingFloorOnSMM2> =
    {superMarioMaker: 'https://tcrf.net/Super_Mario_Maker', superMarioMakerForNintendo3DS: 'https://tcrf.net/Super_Mario_Maker_for_Nintendo_3DS', superMarioMaker2: 'https://tcrf.net/Super_Mario_Maker_2',}
