const DualColor = require('./DualColor.cjs');

const RESET =                           '\x1b[0m'

const BOLD_STYLE =                      '\x1b[1m'
const ITALIC_STYLE =                    '\x1b[3m'
const UNDERLINED_STYLE =                '\x1b[4m'
const INVERSE_STYLE =                   '\x1b[7m'

//region -------------------- Colors --------------------

const BLACK_TEXT_COLOR =                '\x1b[30m'
const GRAY_TEXT_COLOR =                 '\x1b[90m'
const LIGHT_GRAY_TEXT_COLOR =           '\x1b[37m'
const WHITE_TEXT_COLOR =                '\x1b[97m'


const RED_TEXT_COLOR =                  '\x1b[31m'
const LIGHT_RED_TEXT_COLOR =            '\x1b[91m'

const YELLOW_TEXT_COLOR =               '\x1b[33m'
const LIGHT_YELLOW_TEXT_COLOR =         '\x1b[93m'

const GREEN_TEXT_COLOR =                '\x1b[32m'
const LIGHT_GREEN_TEXT_COLOR =          '\x1b[92m'

const CYAN_TEXT_COLOR =                 '\x1b[36m'
const LIGHT_CYAN_TEXT_COLOR =           '\x1b[96m'

const BLUE_TEXT_COLOR =                 '\x1b[34m'
const LIGHT_BLUE_TEXT_COLOR =           '\x1b[94m'

const PURPLE_TEXT_COLOR =               '\x1b[35m'
const LIGHT_PURPLE_TEXT_COLOR =         '\x1b[95m'


const BLACK_BACKGROUND_COLOR =          '\x1b[40m'
const GRAY_BACKGROUND_COLOR =           '\x1b[100m'
const LIGHT_GRAY_BACKGROUND_COLOR =     '\x1b[47m'
const WHITE_BACKGROUND_COLOR =          '\x1b[107m'

const RED_BACKGROUND_COLOR =            '\x1b[41m'
const LIGHT_RED_BACKGROUND_COLOR =      '\x1b[101m'

const YELLOW_BACKGROUND_COLOR =         '\x1b[43m'
const LIGHT_YELLOW_BACKGROUND_COLOR =   '\x1b[103m'

const GREEN_BACKGROUND_COLOR =          '\x1b[42m'
const LIGHT_GREEN_BACKGROUND_COLOR =    '\x1b[102m'

const CYAN_BACKGROUND_COLOR =           '\x1b[46m'
const LIGHT_CYAN_BACKGROUND_COLOR =     '\x1b[106m'

const BLUE_BACKGROUND_COLOR =           '\x1b[44m'
const LIGHT_BLUE_BACKGROUND_COLOR =     '\x1b[104m'

const PURPLE_BACKGROUND_COLOR =         '\x1b[45m'
const LIGHT_PURPLE_BACKGROUND_COLOR =   '\x1b[105m'

//endregion -------------------- Colors --------------------

//TODO move the console colors to a separate git repository
module.exports = {

    reset: RESET,

    style: {
        bold: BOLD_STYLE,
        italic: ITALIC_STYLE,
        underlined: UNDERLINED_STYLE,
        inverse: INVERSE_STYLE,
    },

    color: {
        text: {
            black: BLACK_TEXT_COLOR,
            gray: new DualColor(GRAY_TEXT_COLOR, LIGHT_GRAY_TEXT_COLOR,),
            white: WHITE_TEXT_COLOR,

            red: new DualColor(RED_TEXT_COLOR, LIGHT_RED_TEXT_COLOR,),
            yellow: new DualColor(YELLOW_TEXT_COLOR, LIGHT_YELLOW_TEXT_COLOR,),
            green: new DualColor(GREEN_TEXT_COLOR, LIGHT_GREEN_TEXT_COLOR,),
            cyan: new DualColor(CYAN_TEXT_COLOR, LIGHT_CYAN_TEXT_COLOR,),
            blue: new DualColor(BLUE_TEXT_COLOR, LIGHT_BLUE_TEXT_COLOR,),
            purple: new DualColor(PURPLE_TEXT_COLOR, LIGHT_PURPLE_TEXT_COLOR,),
        },
        background: {
            black: BLACK_BACKGROUND_COLOR,
            gray: new DualColor(GRAY_BACKGROUND_COLOR, LIGHT_GRAY_BACKGROUND_COLOR,),
            white: WHITE_BACKGROUND_COLOR,

            red: new DualColor(RED_BACKGROUND_COLOR, LIGHT_RED_BACKGROUND_COLOR,),
            yellow: new DualColor(YELLOW_BACKGROUND_COLOR, LIGHT_YELLOW_BACKGROUND_COLOR,),
            green: new DualColor(GREEN_BACKGROUND_COLOR, LIGHT_GREEN_BACKGROUND_COLOR,),
            cyan: new DualColor(CYAN_BACKGROUND_COLOR, LIGHT_CYAN_BACKGROUND_COLOR,),
            blue: new DualColor(BLUE_BACKGROUND_COLOR, LIGHT_BLUE_BACKGROUND_COLOR,),
            purple: new DualColor(PURPLE_BACKGROUND_COLOR, LIGHT_PURPLE_BACKGROUND_COLOR,),
        },
    },

}
