import type {PossibleEnglishName} from 'core/miiCostume/MiiCostumes.types'
import type {ImageFile}           from 'util/file/image/ImageFile'

export interface MiiCostumeImageFile
    extends ImageFile<ImageFilePath, PossibleImageFileName, ImageFileExtension, PossibleEnglishName> {
}

export type ImageFilePath = 'Mii costume'

export type PossibleImageFileName =
    | `All_${`${| 'BuilderMario' | 'ClimbMario' | 'Dossun' | 'DrMario' | 'Kameck'
                | 'King' | 'Kinopio' | 'Koopa' | 'Nokonoko' | 'OnePiece'
                | `Peach${| '' | 'Tennis'}` | 'PropellerMario' | 'Robot' | 'Rocket'
                | 'Rompers' | 'Rosetta' | 'Splus' | 'SuperBall' | 'Tuxedo'
                | 'WhiteDress' | 'Yoshi'}_Normal`
             | `Mario_${| 'Luigi' | 'Mario'}`
             | 'Cheetah' | 'Frog' | 'Hakkun' | 'MapWorld'}`
    | `Bottoms_${| `${| 'Hacchin' | 'Jugemu' | 'KoopaClown' | 'Kutsu'
                      | `Skirt${| 'Burner' | 'Dokan' | 'Gesso' | 'KillerHoudai'}`}_Normal`
                 | `Pants_${| 'Default' | 'Arrow' | 'Door' | 'Jeans'}`
                 | `Shorts_${| 'Coin' | 'Dot' | 'Lift'}`
                 | `Skirt${| 'L_Wrap' | 'M_Marumaru' | 'S_Jeans'}`
                 | 'WidePants_Star'
                 | 'Cheetah' | 'Hakkun'}`
    | `Headwear_${| 'Dummy_Default'
                  | `${| 'BuilderMario' | 'Cheetah' | 'ClimbMario' | 'Dokan' | 'Donguri'
                       | 'DrMario' | 'Edamame' | 'Hakkun' | 'Kameck' | 'Karaage'
                       | 'King' | 'Kinopio' | `Koopa${| '' | 'Jr'}` | 'Luigi'
                       | 'Otogaeru' | 'Packun' | 'Peach' | 'Poo' | 'PropellerMario'
                       | 'Pukupuku' | 'Robot' | 'Rosetta' | `Sambo${| '' | 'Snow'}`
                       | 'Star' | 'SuperBall' | 'Teresa' | 'Tuxedo' | 'Yoshi'}_Normal`
                  | 'KinokoMini_Red'
                  | 'Mario_Mario'}`
    | `Tops_${`${| 'BlockDash' | 'CheetahTanktop' | 'Firebar' | 'Fishbone' | 'Hatena'
                 | 'Karaage' | 'KoopaJrScarf' | 'NokoTanktop' | 'OneUp' | 'Partskun'
                 | 'Pyonchu'}_Normal`
              | 'Aloha_Sun'
              | 'AnimShirt_Wanwan'
              | 'Boss'
              | `Camisole_${| 'Edamame' | 'Nice'}`
              | 'Hakkun'
              | 'Nosleeve_Yamamura'
              | 'Phanto'
              | `Shirt_${| 'Default' | 'Border' | 'Gesso' | 'Hanabi' | 'Keshigom'
                         | 'Killer' | 'Kinoko' | 'Nintendo' | 'Warai'}`
              | `Skin${| '3W' | 'M1' | 'M3' | 'MW' | 'MU'}`}`

export type ImageFileExtension = 'tiff'
