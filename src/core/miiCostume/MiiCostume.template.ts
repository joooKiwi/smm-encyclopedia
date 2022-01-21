import type {NameTemplate}                                                      from '../../lang/name/Name.template';
import type {PossibleName_SMM2_Number as PossibleMarioMakerVersion_SMM2_Number} from '../version/Versions.types';
import type {TemplateWithNameTemplate}                                          from '../_template/TemplateWithName.template';

export interface MiiCostumeTemplate
    extends TemplateWithNameTemplate<NameTemplate> {

    conditionToUnlockIt: {
        value: PossibleConditionToUnlockIt
        mode: PossibleMode
    }

    version: | PossibleMarioMakerVersion_SMM2_Number | null

    category: PossibleCategory

}

export type PossibleConditionToUnlockIt =
    | '1 stamp' | `${| 4 | 7 | 10 | 11 | 14 | 17 | 20} stamps`
    | `${| '1st' | '2nd' | '3rd'} place` | `${| 'Bronze' | 'Silver' | 'Gold'} medal`
    | 'All jobs' | `Finish all 3 jobs (${| 'Partrick' | 'Purple Toad' | 'Soundfrog' | 'Undodog' | 'Yamamura'})`
    | `Finish ${| '1st' | '2nd' | '3rd'} job (Peach)` | 'Finish all 3 jobs (Purple Toad) + Hit Middle ? Block'
    | 'Finish all jobs' | 'Finish rebuilding castle'
    | `Clear ${| 1 | 2 | 3 | 4 | 5 | 10 | 100}`
    | `Course → ${| `1st clear → ${| 1 | 10 | 100}`
                  | `Clear ${| 1 | 10 | 100 | 500 | 1000 | 3000 | 5000 | 10000}`
                  | 'Like' | 'Upload'
                  | `Play ${10 | 100 | 500 | 1000 | 3000}`
                  | `Receive ${| `${| 100 | 500 | 1000 | 2000 | 5000} play` | 'feedback'}`}`
    | `High score → ${| 10 | 100 | 300 | 500 | 1000}`
    | `Maker Point → Earn ${2000 | 5000 | 7000}`
    | `${| 'Post' | 'Receive'} a comment`
    | `Receive ${| 'feedback (a lot)' | 'like'}`
    | 'Upload a level'
    | `Rank ${| 'A' | 'B' | 'C' | 'S' | 'S+'}`
    | `Win ${| 2 | 5 | 10} consecutive match` | 'Win match'
    | `World Record → ${| `Hold ${| 10 | 100 | 500}` | `Set ${|1}`}`
    | null;

export type PossibleMode = | `Endless Mario${| '' | ` (${| 'easy' | 'normal' | 'expert' | 'super expert'})`}`
                           | 'Story Mode'
                           | `Multiplayer ${| 'VS' | 'Co-op'}`
                           | 'Leaderboard' | 'Super World' | 'Ninji Speedrun'
                           | null;

export type PossibleCategory = | 'Top' | 'Headgear' | 'Costume' | 'Bottom';
