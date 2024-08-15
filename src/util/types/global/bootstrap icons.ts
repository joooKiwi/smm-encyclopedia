export {}

declare global {

    export type PossibleBootstrapIcon = PossibleBootstrapIconV1_11

    //region -------------------- 1.0 --------------------

    /**
     * The possible Boostrap icons that were released in the **version 1.0**.
     *
     * @note There is 1120 icons
     *
     * @see https://blog.getbootstrap.com/2020/08/28/bootstrap-icons-stable Bootstrap 1.0 (August 28th, 2020)
     * @see https://www.figma.com/design/9YmlUAwhMv99G4yP4yN7Jy/Bootstrap-Icons-v1.0 Figma Link
     */
    export type PossibleBootstrapIconV1 = | PossibleBootstrapIconV1_Bootstrap
                                          | PossibleBootstrapIconV1_Arrow | PossibleBootstrapIconV1_ShapeArrow | PossibleBootstrapIconV1_BoxArrow
                                          | PossibleBootstrapIconV1_AlertWarningAndSign | PossibleBootstrapIconV1_FileAndFolder
                                          | PossibleBootstrapIconV1_UiAndKeyboard | PossibleBootstrapIconV1_SortAndFilter
                                          | PossibleBootstrapIconV1_Caret | PossibleBootstrapIconV1_Chevron | PossibleBootstrapIconV1_Shape
                                          | PossibleBootstrapIconV1_Typography | PossibleBootstrapIconV1_Media
                                          | PossibleBootstrapIconV1_Device | PossibleBootstrapIconV1_Commerce
                                          | PossibleBootstrapIconV1_DateAndTime
                                          | PossibleBootstrapIconV1_Communication | PossibleBootstrapIconV1_Tool
                                          | PossibleBootstrapIconV1_Application
                                          | PossibleBootstrapIconV1_RealWorld | PossibleBootstrapIconV1_Geography
                                          | PossibleBootstrapIconV1_Layout | PossibleBootstrapIconV1_Graphic
                                          | PossibleBootstrapIconV1_Emoji | PossibleBootstrapIconV1_Hand
                                          | PossibleBootstrapIconV1_Control
                                          | PossibleBootstrapIconV1_Person | PossibleBootstrapIconV1_Security
                                          | PossibleBootstrapIconV1_Data | PossibleBootstrapIconV1_Cloud
                                          | PossibleBootstrapIconV1_Badge
                                          | PossibleBootstrapIconV1_Entertainment
                                          | PossibleBootstrapIconV1_Misc

    //#region -------------------- 1.0 (bootstrap) --------------------

    /**
     * The possible Boostrap icons (bootstrap) that were released in the **version 1.0**
     *
     * @see https://blog.getbootstrap.com/2020/08/28/bootstrap-icons-stable
     */
    type PossibleBootstrapIconV1_Bootstrap = | 'bootstrap' | 'bootstrap-fill' | 'bootstrap-reboot'

    //#endregion -------------------- 1.0 (bootstrap) --------------------

    //region -------------------- 1.0 (1st column) --------------------

    //region -------------------- 1.0 (arrow) --------------------

    /**
     * The possible Boostrap icons (arrows ~ *by themselves*) that were released in the **version 1.0**
     *
     * @see https://blog.getbootstrap.com/2020/08/28/bootstrap-icons-stable
     */
    type PossibleBootstrapIconV1_Arrow = | 'arrow-down' | 'arrow-up' | 'arrow-left' | 'arrow-right'
                                         | 'arrow-down-up' | 'arrow-left-right'
                                         | 'arrow-down-left' | 'arrow-down-right' | 'arrow-up-left' | 'arrow-up-right'
                                         | 'arrow-down-short' | 'arrow-up-short' | 'arrow-left-short' | 'arrow-right-short'
                                         | 'arrows-angle-expand' | 'arrows-angle-contract' | 'arrows-fullscreen'
                                         | 'arrow-bar-down' | 'arrow-bar-up' | 'arrow-bar-left' | 'arrow-bar-right'
                                         | 'arrow-90deg-down' | 'arrow-90deg-up' | 'arrow-90deg-left' | 'arrow-90deg-right'
                                         | 'arrow-clockwise' | 'arrow-counterclockwise'
                                         | 'arrow-repeat' | 'shuffle'
                                         | 'arrow-return-left' | 'arrow-return-right'
                                         | 'arrows-move' | 'arrows-expand' | 'arrows-collapse'

    //endregion -------------------- 1.0 (arrow) --------------------
    //region -------------------- 1.0 (shape arrow) --------------------

    /**
     * The possible Boostrap icons (shape arrows ~ *circle* & *square*) that were released in the **version 1.0**
     *
     * @see https://blog.getbootstrap.com/2020/08/28/bootstrap-icons-stable
     */
    type PossibleBootstrapIconV1_ShapeArrow = | 'arrow-down-circle' | 'arrow-down-circle-fill' | 'arrow-down-square' | 'arrow-down-square-fill'
                                              | 'arrow-up-circle' | 'arrow-up-circle-fill' | 'arrow-up-square' | 'arrow-up-square-fill'
                                              | 'arrow-left-circle' | 'arrow-left-circle-fill' | 'arrow-left-square' | 'arrow-left-square-fill'
                                              | 'arrow-right-circle' | 'arrow-right-circle-fill' | 'arrow-right-square' | 'arrow-right-square-fill'
                                              | 'arrow-down-left-circle' | 'arrow-down-left-circle-fill' | 'arrow-down-left-square' | 'arrow-down-left-square-fill'
                                              | 'arrow-down-right-circle' | 'arrow-down-right-circle-fill' | 'arrow-down-right-square' | 'arrow-down-right-square-fill'
                                              | 'arrow-up-left-circle' | 'arrow-up-left-circle-fill' | 'arrow-up-left-square' | 'arrow-up-left-square-fill'
                                              | 'arrow-up-right-circle' | 'arrow-up-right-circle-fill' | 'arrow-up-right-square' | 'arrow-up-right-square-fill'

    //endregion -------------------- 1.0 (shape arrow) --------------------
    //region -------------------- 1.0 (box arrow) --------------------

    /**
     * The possible Boostrap icons (box arrows ~ *in* & *out*) that were released in the **version 1.0**
     *
     * @see https://blog.getbootstrap.com/2020/08/28/bootstrap-icons-stable
     */
    type PossibleBootstrapIconV1_BoxArrow = | 'box-arrow-down' | 'box-arrow-in-down'
                                            | 'box-arrow-up' | 'box-arrow-in-up'
                                            | 'box-arrow-left' | 'box-arrow-in-left'
                                            | 'box-arrow-right' | 'box-arrow-in-right'
                                            | 'box-arrow-down-left' | 'box-arrow-in-down-left'
                                            | 'box-arrow-down-right' | 'box-arrow-in-down-right'
                                            | 'box-arrow-up-left' | 'box-arrow-in-up-left'
                                            | 'box-arrow-up-right' | 'box-arrow-in-up-right'

    //endregion -------------------- 1.0 (box arrow) --------------------

    //endregion -------------------- 1.0 (1st column) --------------------
    //region -------------------- 1.0 (2nd column) --------------------

    //region -------------------- 1.0 (alert warning & sign) --------------------

    type PossibleBootstrapIconV1_AlertWarningAndSign = | 'dash'
                                                       | 'dash-circle' | 'dash-circle-fill'
                                                       | 'dash-square' | 'dash-square-fill'
                                                       | 'plus'
                                                       | 'plus-circle' | 'plus-circle-fill'
                                                       | 'plus-square' | 'plus-square-fill'
                                                       | 'slash'
                                                       | 'slash-circle' | 'slash-circle-fill'
                                                       | 'slash-square' | 'slash-square-fill'
                                                       | 'x'
                                                       | 'x-circle' | 'x-circle-fill'
                                                       | 'x-square' | 'x-square-fill'
                                                       | 'x-octagon' | 'x-octagon-fill'
                                                       | 'x-diamond' | 'x-diamond-fill'
                                                       | 'info'
                                                       | 'info-circle' | 'info-circle-fill'
                                                       | 'info-square' | 'info-square-fill'
                                                       | 'question'
                                                       | 'question-circle' | 'question-circle-fill'
                                                       | 'question-square' | 'question-square-fill'
                                                       | 'question-octagon' | 'question-octagon-fill'
                                                       | 'question-diamond' | 'question-diamond-fill'
                                                       | 'exclamation'
                                                       | 'exclamation-circle' | 'exclamation-circle-fill'
                                                       | 'exclamation-square' | 'exclamation-square-fill'
                                                       | 'exclamation-octagon' | 'exclamation-octagon-fill'
                                                       | 'exclamation-diamond' | 'exclamation-diamond-fill'
                                                       | 'exclamation-triangle' | 'exclamation-triangle-fill'
                                                       | 'check' | 'check-circle' | 'check-circle-fill' | 'check-square' | 'check-square-fill'
                                                       | 'check-all'

    //endregion -------------------- 1.0 (alert warning & sign) --------------------
    //region -------------------- 1.0 (file & folder) --------------------

    type PossibleBootstrapIconV1_FileAndFolder = | 'file' | 'file-fill' | 'file-earmark' | 'file-earmark-fill' | 'journal'
                                                 | 'file-text' | 'file-text-fill' | 'file-earmark-text' | 'file-earmark-text-fill' | 'journal-text'
                                                 | 'file-richtext' | 'file-richtext-fill' | 'file-earmark-richtext' | 'file-earmark-richtext-fill' | 'journal-richtext'
                                                 | 'file-post' | 'file-post-fill' | 'file-earmark-post' | 'file-earmark-post-fill'
                                                 | 'journal-album'
                                                 | 'file-zip' | 'file-zip-fill' | 'file-earmark-zip' | 'file-earmark-zip-fill'
                                                 | 'file-code' | 'file-code-fill' | 'file-earmark-code' | 'file-earmark-code-fill' | 'journal-code'
                                                 | 'file-diff' | 'file-diff-fill' | 'file-earmark-diff' | 'file-earmark-diff-fill'
                                                 | 'file-spreadsheet' | 'file-spreadsheet-fill' | 'file-earmark-spreadsheet' | 'file-earmark-spreadsheet-fill'
                                                 | 'file-ruled' | 'file-ruled-fill' | 'file-earmark-ruled' | 'file-earmark-ruled-fill'
                                                 | 'file-medical' | 'file-medical-fill' | 'file-earmark-medical' | 'file-earmark-medical-fill' | 'journal-medical'
                                                 | 'file-music' | 'file-music-fill' | 'file-earmark-music' | 'file-earmark-music-fill'
                                                 | 'file-binary' | 'file-binary-fill' | 'file-earmark-binary' | 'file-earmark-binary-fill'
                                                 | 'file-person' | 'file-person-fill' | 'file-earmark-person' | 'file-earmark-person-fill'
                                                 | 'file-image' | 'file-image-fill' | 'file-earmark-image' | 'file-earmark-image-fill'
                                                 | 'file-plus' | 'file-plus-fill' | 'file-earmark-plus' | 'file-earmark-plus-fill' | 'journal-plus'
                                                 | 'file-minus' | 'file-minus-fill' | 'file-earmark-minus' | 'file-earmark-minus-fill' | 'journal-minus'
                                                 | 'file-check' | 'file-check-fill' | 'file-earmark-check' | 'file-earmark-check-fill' | 'journal-check'
                                                 | 'file-x' | 'file-x-fill' | 'file-earmark-x' | 'file-earmark-x-fill' | 'journal-x'
                                                 | 'file-break' | 'file-break-fill' | 'file-earmark-break' | 'file-earmark-break-fill'
                                                 | 'file-arrow-down' | 'file-arrow-down-fill' | 'file-earmark-arrow-down' | 'file-earmark-arrow-down-fill' | 'journal-arrow-down'
                                                 | 'file-arrow-up' | 'file-arrow-up-fill' | 'file-earmark-arrow-up' | 'file-earmark-arrow-up-fill' | 'journal-arrow-up'
                                                 | 'file-lock' | 'file-lock-fill' | 'file-earmark-lock' | 'file-earmark-lock-fill'
                                                 | 'file-lock2' | 'file-lock2-fill' | 'file-earmark-lock2' | 'file-earmark-lock2-fill'
                                                 | 'file-play' | 'file-play-fill' | 'file-earmark-play' | 'file-earmark-play-fill'
                                                 | 'file-easel' | 'file-easel-fill' | 'file-earmark-easel' | 'file-earmark-easel-fill'
                                                 | 'file-slides' | 'file-slides-fill' | 'file-earmark-slides' | 'file-earmark-slides-fill'
                                                 | 'file-font' | 'file-font-fill' | 'file-earmark-font' | 'file-earmark-font-fill'
                                                 | 'files' | 'files-alt' | 'journals'
                                                 | 'folder' | 'folder-symlink' | 'folder-plus' | 'folder-minus' | 'folder-check' | 'folder-x' | 'folder2' | 'folder2-open'
                                                 | 'folder-fill' | 'folder-symlink-fill'
                                                 | 'image' | 'image-fill' | 'image-alt' | 'images' | 'table'
                                                 | 'card-text' | 'card-heading' | 'card-list' | 'card-checklist' | 'card-image'

    //endregion -------------------- 1.0 (file & folder) --------------------
    //region -------------------- 1.0 (ui & keyboard) --------------------

    type PossibleBootstrapIconV1_UiAndKeyboard = | 'brightness-low' | 'brightness-low-fill' | 'brightness-alt-low' | 'brightness-alt-low-fill'
                                                 | 'brightness-high' | 'brightness-high-fill' | 'brightness-alt-high' | 'brightness-alt-high-fill'
                                                 | 'power'
                                                 | 'view-stacked' | 'view-list'
                                                 | 'command' | 'option' | 'alt'
                                                 | 'shift' | 'shift-fill'
                                                 | 'capslock' | 'capslock-fill'
                                                 | 'eject' | 'eject-fill'
                                                 | 'backspace' | 'backspace-fill'
                                                 | 'backspace-reverse' | 'backspace-reverse-fill'
                                                 | 'trash' | 'trash-fill'
                                                 | 'check2' | 'check2-all' | 'check2-square' | 'check2-circle'
                                                 | 'dot'
                                                 | 'fullscreen' | 'fullscreen-exit'
                                                 | 'link' | 'link-45deg'
                                                 | 'grip-horizontal' | 'grip-vertical'

    //endregion -------------------- 1.0 (ui & keyboard) --------------------
    //region -------------------- 1.0 (sort & filter) --------------------

    type PossibleBootstrapIconV1_SortAndFilter = | 'filter' | 'filter-circle' | 'filter-circle-fill' | 'filter-square' | 'filter-square-fill'
                                                 | 'filter-left' | 'filter-right'
                                                 | 'sort-up' | 'sort-up-alt' | 'sort-down' | 'sort-down-alt'
                                                 | 'sort-alpha-up' | 'sort-alpha-up-alt' | 'sort-alpha-down' | 'sort-alpha-down-alt'
                                                 | 'sort-numeric-up' | 'sort-numeric-up-alt' | 'sort-numeric-down' | 'sort-numeric-down-alt'

    //endregion -------------------- 1.0 (sort & filter) --------------------

    //endregion -------------------- 1.0 (2nd column) --------------------
    //region -------------------- 1.0 (3rd column) --------------------

    //region -------------------- 1.0 (caret) --------------------

    type PossibleBootstrapIconV1_Caret = | 'caret-down' | 'caret-down-fill' | 'caret-down-square' | 'caret-down-square-fill'
                                         | 'caret-up' | 'caret-up-fill' | 'caret-up-square' | 'caret-up-square-fill'
                                         | 'caret-left' | 'caret-left-fill' | 'caret-left-square' | 'caret-left-square-fill'
                                         | 'caret-right' | 'caret-right-fill' | 'caret-right-square' | 'caret-right-square-fill'

    //endregion -------------------- 1.0 (caret) --------------------
    //region -------------------- 1.0 (chevron) --------------------

    type PossibleBootstrapIconV1_Chevron = | 'chevron-down' | 'chevron-compact-down' | 'chevron-double-down' | 'chevron-bar-down'
                                           | 'chevron-up' | 'chevron-compact-up' | 'chevron-double-up' | 'chevron-bar-up'
                                           | 'chevron-left' | 'chevron-compact-left' | 'chevron-double-left' | 'chevron-bar-left'
                                           | 'chevron-right' | 'chevron-compact-right' | 'chevron-double-right' | 'chevron-bar-right'
                                           | 'chevron-expand' | 'chevron-bar-expand'
                                           | 'chevron-contract' | 'chevron-bar-contract'

    //endregion -------------------- 1.0 (chevron) --------------------
    //region -------------------- 1.0 (shape) --------------------

    type PossibleBootstrapIconV1_Shape = | 'circle' | 'circle-fill' | 'circle-half'
                                         | 'square' | 'square-fill' | 'square-half'
                                         | 'triangle' | 'triangle-fill' | 'triangle-half'
                                         | 'diamond' | 'diamond-fill' | 'diamond-half'
                                         | 'star' | 'star-fill' | 'star-half'
                                         | 'heart' | 'heart-fill' | 'heart-half'
                                         | 'pentagon' | 'pentagon-fill' | 'pentagon-half'
                                         | 'hexagon' | 'hexagon-fill' | 'hexagon-half'
                                         | 'heptagon' | 'heptagon-fill' | 'heptagon-half'
                                         | 'octagon' | 'octagon-fill' | 'octagon-half'

    //endregion -------------------- 1.0 (shape) --------------------
    //region -------------------- 1.0 (typography) --------------------

    type PossibleBootstrapIconV1_Typography = | 'justify-left' | 'justify' | 'justify-right'
                                              | 'text-left' | 'text-center' | 'text-right' | 'text-paragraph'
                                              | 'list' | 'list-ul' | 'list-ol' | 'list-task' | 'list-check' | 'list-nested' | 'list-stars'
                                              | 'fonts' | 'type' | 'type-bold' | 'type-italic' | 'type-underline' | 'type-strikethrough'
                                              | 'type-h1' | 'type-h2' | 'type-h3'
                                              | 'text-indent-left' | 'text-indent-right' | 'blockquote-left' | 'blockquote-right'
                                              | 'code' | 'code-slash' | 'code-square'
                                              | 'hash' | 'braces' | 'asterisk' | 'percent' | 'paragraph'
                                              | 'cursor-text' | 'hr' | 'vr'
                                              | 'spellcheck' | 'border-style' | 'border-width'


    //endregion -------------------- 1.0 (typography) --------------------
    //region -------------------- 1.0 (media) --------------------

    type PossibleBootstrapIconV1_Media = | 'play' | 'play-fill'
                                         | 'pause' | 'pause-fill'
                                         | 'stop' | 'stop-fill'
                                         | 'skip-start' | 'skip-start-fill'
                                         | 'skip-end' | 'skip-end-fill'
                                         | 'skip-backward' | 'skip-backward-fill'
                                         | 'skip-forward' | 'skip-forward-fill'
                                         | 'volume-down' | 'volume-down-fill'
                                         | 'volume-up' | 'volume-up-fill'
                                         | 'volume-mute' | 'volume-mute-fill'
                                         | 'volume-off' | 'volume-off-fill'
                                         | 'mic' | 'mic-fill'
                                         | 'mic-mute' | 'mic-mute-fill'
                                         | 'camera-video' | 'camera-video-fill'
                                         | 'camera-video-off' | 'camera-video-off-fill'
                                         | 'camera-reels' | 'camera-reels-fill'
                                         | 'film' | 'soundwave' | 'music-note' | 'music-note-beamed' | 'music-note-list'
                                         | 'collection' | 'collection-fill'
                                         | 'collection-play' | 'collection-play-fill'
                                         | 'aspect-ratio' | 'aspect-ratio-fill'
                                         | 'pip' | 'pip-fill'
                                         | 'cast'

    //endregion -------------------- 1.0 (media) --------------------
    //region -------------------- 1.0 (device) --------------------

    type PossibleBootstrapIconV1_Device = | 'phone' | 'phone-fill'
                                          | 'phone-landscape' | 'phone-landscape-fill'
                                          | 'tablet' | 'tablet-fill'
                                          | 'tablet-landscape' | 'tablet-landscape-fill'
                                          | 'display' | 'display-fill'
                                          | 'tv' | 'tv-fill'
                                          | 'laptop' | 'laptop-fill'
                                          | 'printer' | 'printer-fill'
                                          | 'music-player' | 'music-player-fill'
                                          | 'camera' | 'camera2' | 'camera-fill'
                                          | 'controller' | 'watch' | 'smartwatch'
                                          | 'battery' | 'battery-half' | 'battery-full' | 'battery-charging'
                                          | 'server'
                                          | 'headphones' | 'headset' | 'earbuds'
                                          | 'hdd' | 'hdd-fill'
                                          | 'hdd-stack' | 'hdd-stack-fill'
                                          | 'hdd-rack' | 'hdd-rack-fill'
                                          | 'hdd-network' | 'hdd-network-fill'
                                          | 'keyboard' | 'keyboard-fill'
                                          | 'calculator' | 'calculator-fill'
                                          | 'sim' | 'sim-fill'
                                          | 'mouse' | 'mouse2' | 'mouse3'
                                          | 'phone-vibrate'

    //endregion -------------------- 1.0 (device) --------------------
    //region -------------------- 1.0 (commerce) --------------------

    type PossibleBootstrapIconV1_Commerce = | 'bag' | 'bag-fill'
                                            | 'bag-plus' | 'bag-plus-fill'
                                            | 'bag-dash' | 'bag-dash-fill'
                                            | 'bag-check' | 'bag-check-fill'
                                            | 'bag-x' | 'bag-x-fill'
                                            | 'cart' | 'cart-fill'
                                            | 'cart-plus' | 'cart-plus-fill'
                                            | 'cart-dash' | 'cart-dash-fill'
                                            | 'cart-check' | 'cart-check-fill'
                                            | 'cart-x' | 'cart-x-fill'
                                            | 'cart2' | 'cart3' | 'cart4'
                                            | 'basket' | 'basket-fill'
                                            | 'basket2' | 'basket2-fill'
                                            | 'basket3' | 'basket3-fill'
                                            | 'wallet' | 'wallet2'
                                            | 'shop' | 'shop-window'
                                            | 'receipt' | 'receipt-cutoff'
                                            | 'upc' | 'upc-scan'
                                            | 'truck' | 'truck-flatbed'
                                            | 'cash' | 'cash-stack'

    //endregion -------------------- 1.0 (commerce) --------------------
    //region -------------------- 1.0 (date & time) --------------------

    type PossibleBootstrapIconV1_DateAndTime = | 'clock' | 'clock-fill' | 'clock-history'
                                               | 'stopwatch' | 'stopwatch-fill'
                                               | 'alarm' | 'alarm-fill'
                                               | 'calendar' | 'calendar-fill' | 'calendar2' | 'calendar2-fill' | 'calendar3' | 'calendar3-fill' | 'calendar4'
                                               | 'calendar-plus' | 'calendar-plus-fill' | 'calendar2-plus' | 'calendar2-plus-fill'
                                               | 'calendar-minus' | 'calendar-minus-fill' | 'calendar2-minus' | 'calendar2-minus-fill'
                                               | 'calendar-check' | 'calendar-check-fill' | 'calendar2-check' | 'calendar2-check-fill'
                                               | 'calendar-x' | 'calendar-x-fill' | 'calendar2-x' | 'calendar2-x-fill'
                                               | 'calendar-day' | 'calendar-day-fill' | 'calendar2-day' | 'calendar2-day-fill'
                                               | 'calendar-month' | 'calendar-month-fill' | 'calendar2-month' | 'calendar2-month-fill'
                                               | 'calendar-date' | 'calendar-date-fill' | 'calendar2-date' | 'calendar2-date-fill'
                                               | 'calendar-event' | 'calendar-event-fill' | 'calendar2-event' | 'calendar2-event-fill' | 'calendar3-event' | 'calendar3-event-fill' | 'calendar4-event'
                                               | 'calendar-week' | 'calendar-week-fill' | 'calendar2-week' | 'calendar2-week-fill' | 'calendar3-week' | 'calendar3-week-fill' | 'calendar4-week'
                                               | 'calendar-range' | 'calendar-range-fill' | 'calendar2-range' | 'calendar2-range-fill' | 'calendar3-range' | 'calendar3-range-fill' | 'calendar4-range'

    //endregion -------------------- 1.0 (date & time) --------------------

    //endregion -------------------- 1.0 (3rd column) --------------------
    //region -------------------- 1.0 (4th column) --------------------

    //region -------------------- 1.0 (communication) --------------------

    type PossibleBootstrapIconV1_Communication = | 'chat' | 'chat-fill' | 'chat-square' | 'chat-square-fill' | 'chat-left' | 'chat-left-fill' | 'chat-right' | 'chat-right-fill'
                                                 | 'chat-dots' | 'chat-dots-fill' | 'chat-square-dots' | 'chat-square-dots-fill' | 'chat-left-dots' | 'chat-left-dots-fill' | 'chat-right-dots' | 'chat-right-dots-fill'
                                                 | 'chat-text' | 'chat-text-fill' | 'chat-square-text' | 'chat-square-text-fill' | 'chat-left-text' | 'chat-left-text-fill' | 'chat-right-text' | 'chat-right-text-fill'
                                                 | 'chat-quote' | 'chat-quote-fill' | 'chat-square-quote' | 'chat-square-quote-fill' | 'chat-left-quote' | 'chat-left-quote-fill' | 'chat-right-quote' | 'chat-right-quote-fill'
                                                 | 'bell' | 'bell-fill'
                                                 | 'flag' | 'flag-fill'
                                                 | 'reply' | 'reply-fill'
                                                 | 'reply-all' | 'reply-all-fill'
                                                 | 'forward' | 'forward-fill'
                                                 | 'inbox' | 'inbox-fill'
                                                 | 'inboxes' | 'inboxes-fill'
                                                 | 'archive' | 'archive-fill'
                                                 | 'envelope' | 'envelope-fill'
                                                 | 'envelope-open' | 'envelope-open-fill'
                                                 | 'rss' | 'rss-fill'
                                                 | 'broadcast' | 'broadcast-pin'
                                                 | 'globe' | 'globe2'
                                                 | 'voicemail' | 'at' | 'search'
                                                 | 'wifi' | 'wifi-1' | 'wifi-2' | 'wifi-off'
                                                 | 'reception-0' | 'reception-1' | 'reception-2' | 'reception-3' | 'reception-4'
                                                 | 'telephone' | 'telephone-fill'
                                                 | 'telephone-plus' | 'telephone-plus-fill'
                                                 | 'telephone-minus' | 'telephone-minus-fill'
                                                 | 'telephone-x' | 'telephone-x-fill'
                                                 | 'telephone-outbound' | 'telephone-outbound-fill'
                                                 | 'telephone-inbound' | 'telephone-inbound-fill'
                                                 | 'telephone-forward' | 'telephone-forward-fill'

    //endregion -------------------- 1.0 (communication) --------------------
    //region -------------------- 1.0 (tool) --------------------

    type PossibleBootstrapIconV1_Tool = | 'pencil' | 'pencil-fill' | 'pencil-square'
                                        | 'pen' | 'pen-fill'
                                        | 'wrench' | 'hammer' | 'screwdriver' | 'tools'
                                        | 'gear' | 'gear-fill' | 'gear-wide' | 'gear-wide-connected'
                                        | 'bucket' | 'bucket-fill'
                                        | 'brush' | 'brush-fill'

    //endregion -------------------- 1.0 (tool) --------------------
    //region -------------------- 1.0 (application) --------------------

    type PossibleBootstrapIconV1_Application = | 'terminal' | 'terminal-fill'
                                               | 'window'
                                               | 'app' | 'app-indicator'


    //endregion -------------------- 1.0 (application) --------------------
    //region -------------------- 1.0 (real world) --------------------

    type PossibleBootstrapIconV1_RealWorld = | 'house' | 'house-fill'
                                             | 'house-door' | 'house-door-fill'
                                             | 'eye' | 'eye-fill'
                                             | 'eye-slash' | 'eye-slash-fill'
                                             | 'gift' | 'gift-fill'
                                             | 'trash2' | 'trash2-fill'
                                             | 'tag' | 'tag-fill'
                                             | 'tags' | 'tags-fill'
                                             | 'award' | 'award-fill'
                                             | 'briefcase' | 'briefcase-fill'
                                             | 'funnel' | 'funnel-fill'
                                             | 'handbag' | 'handbag-fill'
                                             | 'door-open' | 'door-open-fill'
                                             | 'door-closed' | 'door-closed-fill'
                                             | 'egg' | 'egg-fill'
                                             | 'egg-fried'
                                             | 'tree' | 'tree-fill'
                                             | 'signpost' | 'signpost-fill'
                                             | 'signpost-2' | 'signpost-2-fill'
                                             | 'signpost-split' | 'signpost-split-fill'
                                             | 'easel' | 'easel-fill'
                                             | 'sticky' | 'sticky-fill'
                                             | 'stickies' | 'stickies-fill'
                                             | 'stoplights' | 'stoplights-fill'
                                             | 'nut' | 'nut-fill'
                                             | 'lamp' | 'lamp-fill'
                                             | 'binoculars' | 'binoculars-fill'
                                             | 'credit-card' | 'credit-card-fill'
                                             | 'credit-card-2-front' | 'credit-card-2-front-fill'
                                             | 'credit-card-2-back' | 'credit-card-2-back-fill'
                                             | 'wallet' | 'wallet-fill'
                                             | 'book' | 'book-half' | 'book-fill'
                                             | 'sun' | 'moon'
                                             | 'minecart' | 'minecart-loaded'
                                             | 'box' | 'box-seam'
                                             | 'cone' | 'cone-striped'
                                             | 'cup' | 'cup-fill'
                                             | 'trophy' | 'trophy-fill'
                                             | 'bug' | 'bug-fill'
                                             | 'plug' | 'plug-fill'
                                             | 'cpu' | 'cpu-fill'
                                             | 'key' | 'key-fill'
                                             | 'bicycle'
                                             | 'bricks'
                                             | 'bookshelf'
                                             | 'ladder'
                                             | 'cup-straw'
                                             | 'eyeglasses' | 'sunglasses'
                                             | 'thermometer' | 'thermometer-half'
                                             | 'life-preserver'
                                             | 'scissors'
                                             | 'paperclip'
                                             | 'newspaper'
                                             | 'outlet'
                                             | 'gem'
                                             | 'flower1' | 'flower2' | 'flower3'
                                             | 'mailbox' | 'mailbox2'
                                             | 'hourglass' | 'hourglass-bottom' | 'hourglass-top' | 'hourglass-split'

    //endregion -------------------- 1.0 (real world) --------------------
    //region -------------------- 1.0 (geography) --------------------

    type PossibleBootstrapIconV1_Geography = | 'map' | 'map-fill'
                                             | 'geo' | 'geo-fill'
                                             | 'cursor' | 'cursor-fill'
                                             | 'compass' | 'compass-fill'
                                             | 'geo-alt' | 'geo-alt-fill'
                                             | 'bullseye'

    //endregion -------------------- 1.0 (geography) --------------------
    //region -------------------- 1.0 (layout) --------------------

    type PossibleBootstrapIconV1_Layout = | 'layout-sidebar' | 'layout-sidebar-reverse'
                                          | 'layout-split' | 'layout-three-columns'
                                          | 'layout-sidebar-inset' | 'layout-sidebar-inset-reverse'
                                          | 'layout-wtf'
                                          | 'layout-text-sidebar' | 'layout-text-sidebar-reverse'
                                          | 'layout-text-window' | 'layout-text-window-reverse'
                                          | 'grid' | 'grid-fill'
                                          | 'grid-1x2' | 'grid-1x2-fill'
                                          | 'grid-3x3' | 'grid-3x3-gap' | 'grid-3x3-gap-fill'
                                          | 'grid-3x2' | 'grid-3x2-gap' | 'grid-3x2-gap-fill'
                                          | 'columns' | 'columns-gap'

    //endregion -------------------- 1.0 (layout) --------------------
    //region -------------------- 1.0 (graphic) --------------------

    type PossibleBootstrapIconV1_Graphic = | 'subtract' | 'union' | 'intersect' | 'exclude'
                                           | 'circle-square'
                                           | 'layers' | 'layers-half' | 'layers-fill'
                                           | 'crop'
                                           | 'bounding-box' | 'bounding-box-circles'
                                           | 'textarea' | 'textarea-t'
                                           | 'back' | 'front'
                                           | 'vector-pen'
                                           | 'sliders'
                                           | 'droplet' | 'droplet-half' | 'droplet-fill'
                                           | 'node-plus' | 'node-plus-fill'
                                           | 'node-minus' | 'node-minus-fill'
                                           | 'diagram-2' | 'diagram-2-fill'
                                           | 'diagram-3' | 'diagram-3-fill'
                                           | 'input-cursor' | 'input-cursor-text'
                                           | 'bezier' | 'bezier2'
                                           | 'zoom-in' | 'zoom-out'
                                           | 'align-start' | 'align-end' | 'align-center' | 'align-bottom' | 'align-top' | 'align-middle'
                                           | 'distribute-vertical' | 'distribute-horizontal'

    //endregion -------------------- 1.0 (graphic) --------------------
    //region -------------------- 1.0 (emoji) --------------------

    type PossibleBootstrapIconV1_Emoji = | 'emoji-smile'
                                         | 'emoji-smile-upside-down'
                                         | 'emoji-frown'
                                         | 'emoji-neutral'
                                         | 'emoji-laughing'
                                         | 'emoji-sunglasses'
                                         | 'emoji-angry'
                                         | 'emoji-dizzy'
                                         | 'emoji-expressionless'

    //endregion -------------------- 1.0 (emoji) --------------------
    //region -------------------- 1.0 (hand) --------------------

    type PossibleBootstrapIconV1_Hand = | 'hand-index' | 'hand-index-thumb'
                                        | 'hand-thumbs-down' | 'hand-thumbs-up'

    //endregion -------------------- 1.0 (hand) --------------------

    //endregion -------------------- 1.0 (4th column) --------------------
    //region -------------------- 1.0 (5th column) --------------------

    //region -------------------- 1.0 (control) --------------------

    type PossibleBootstrapIconV1_Control = | 'toggle-on' | 'toggle-off' | 'toggles'
                                           | 'toggle2-on' | 'toggle2-off' | 'toggles2'
                                           | 'menu-app' | 'menu-app-fill'
                                           | 'menu-button' | 'menu-button-fill'
                                           | 'menu-button-wide' | 'menu-button-wide-fill'
                                           | 'menu-down' | 'menu-up'
                                           | 'ui-checks' | 'ui-checks-grid'
                                           | 'ui-radios' | 'ui-radios-grid'
                                           | 'textarea-resize'
                                           | 'segmented-nav'
                                           | 'three-dots' | 'three-dots-vertical'

    //endregion -------------------- 1.0 (control) --------------------
    //region -------------------- 1.0 (person) --------------------

    type PossibleBootstrapIconV1_Person = | 'person' | 'person-fill'
                                          | 'people' | 'people-fill'
                                          | 'person-plus' | 'person-plus-fill'
                                          | 'person-dash' | 'person-dash-fill'
                                          | 'person-check' | 'person-check-fill'
                                          | 'person-x' | 'person-x-fill'
                                          | 'building'
                                          | 'person-circle' | 'person-lines-fill'
                                          | 'person-square' | 'person-bounding-box'
                                          | 'person-badge' | 'person-badge-fill'

    //endregion -------------------- 1.0 (person) --------------------
    //region -------------------- 1.0 (security) --------------------

    type PossibleBootstrapIconV1_Security = | 'shield' | 'shield-fill'
                                            | 'shield-plus' | 'shield-fill-plus'
                                            | 'shield-minus' | 'shield-fill-minus'
                                            | 'shield-check' | 'shield-fill-check'
                                            | 'shield-x' | 'shield-fill-x'
                                            | 'shield-exclamation' | 'shield-fill-exclamation'
                                            | 'shield-lock' | 'shield-lock-fill'
                                            | 'shield-slash' | 'shield-slash-fill'
                                            | 'shield-shaded'
                                            | 'lock' | 'lock-fill'
                                            | 'unlock' | 'unlock-fill'

    //endregion -------------------- 1.0 (security) --------------------
    //region -------------------- 1.0 (data) --------------------

    type PossibleBootstrapIconV1_Data = | 'bar-chart' | 'bar-chart-fill'
                                        | 'bar-chart-line' | 'bar-chart-line-fill'
                                        | 'graph-up' | 'graph-down'
                                        | 'pie-chart' | 'pie-chart-fill'
                                        | 'bar-chart-steps'

    //endregion -------------------- 1.0 (data) --------------------
    //region -------------------- 1.0 (cloud) --------------------

    type PossibleBootstrapIconV1_Cloud = | 'cloud' | 'cloud-fill'
                                         | 'cloud-plus' | 'cloud-plus-fill'
                                         | 'cloud-minus' | 'cloud-minus-fill'
                                         | 'cloud-check' | 'cloud-check-fill'
                                         | 'cloud-arrow-down' | 'cloud-arrow-down-fill'
                                         | 'cloud-arrow-up' | 'cloud-arrow-up-fill'
                                         | 'cloud-slash' | 'cloud-slash-fill'
                                         | 'cloud-upload' | 'cloud-upload-fill'
                                         | 'cloud-download' | 'cloud-download-fill'
    // | 'weather-lightning' //FIXME those are added later-on
    // | 'weather-rain'

    //endregion -------------------- 1.0 (cloud) --------------------
    //region -------------------- 1.0 (badge) --------------------

    type PossibleBootstrapIconV1_Badge = | 'patch-plus' | 'patch-plus-fll'
                                         | 'patch-minus' | 'patch-minus-fll'
                                         | 'patch-check' | 'patch-check-fll'
                                         | 'patch-question' | 'patch-question-fll'
                                         | 'patch-exclamation' | 'patch-exclamation-fll'
                                         | 'markdown' | 'markdown-fill'
                                         | 'badge-hd' | 'badge-hd-fill'
                                         | 'badge-4k' | 'badge-4k-fill'
                                         | 'badge-8k' | 'badge-8k-fill'
                                         | 'badge-cc' | 'badge-cc-fill'
                                         | 'badge-vo' | 'badge-vo-fill'
                                         | 'badge-tm' | 'badge-tm-fill'
                                         | 'badge-ad' | 'badge-ad-fill'

    //endregion -------------------- 1.0 (badge) --------------------
    //region -------------------- 1.0 (entertainment) --------------------

    type PossibleBootstrapIconV1_Entertainment = | 'dice-1' | 'dice-1-fill'
                                                 | 'dice-2' | 'dice-2-fill'
                                                 | 'dice-3' | 'dice-3-fill'
                                                 | 'dice-4' | 'dice-4-fill'
                                                 | 'dice-5' | 'dice-5-fill'
                                                 | 'dice-6' | 'dice-6-fill'
                                                 | 'suit-diamond' | 'suit-diamond-fill'
                                                 | 'suit-club' | 'suit-club-fill'
                                                 | 'suit-heart' | 'suit-heart-fill'
                                                 | 'suit-spade' | 'suit-spade-fill'
                                                 | 'joystick'

    //endregion -------------------- 1.0 (entertainment) --------------------
    //region -------------------- 1.0 (misc) --------------------

    type PossibleBootstrapIconV1_Misc = | 'bookmark' | 'bookmark-fill'
                                        | 'bookmarks' | 'bookmarks-fill'
                                        | 'bookmark-plus' | 'bookmark-plus-fill'
                                        | 'bookmark-dash' | 'bookmark-dash-fill'
                                        | 'bookmark-check' | 'bookmark-check-fill'
                                        | 'bookmark-x' | 'bookmark-x-fill'
                                        | 'bookmark-heart' | 'bookmark-heart-fill'
                                        | 'bookmark-star' | 'bookmark-star-fill'
                                        | 'clipboard' | 'clipboard-data' | 'clipboard-plus' | 'clipboard-minus' | 'clipboard-check' | 'clipboard-x'
                                        | 'kanban' | 'kanban-fill'
                                        | 'lightning' | 'lightning-fill'
                                        | 'puzzle' | 'puzzle-fill'
                                        | 'peace' | 'peace-fill'
                                        | 'share' | 'share-fill'
                                        | 'speaker' | 'speaker-fill'
                                        | 'download' | 'upload'

    //endregion -------------------- 1.0 (misc) --------------------

    //endregion -------------------- 1.0 (5th column) --------------------

    //endregion -------------------- 1.0 --------------------
    //region -------------------- 1.1 --------------------

    /**
     * The possible Boostrap icons that were released in the **version 1.1**.
     *
     * @note There is 1151 icons (31 more than the version **1.0**)
     *
     * @see https://blog.getbootstrap.com/2020/10/28/bootstrap-icons-1-1-0 Bootstrap 1.1 (October 28th, 2020)
     * @see https://www.figma.com/design/6jIgJymnRpMjGSMG2BKNRe/Bootstrap-Icons-v1.1 Figma Link
     * @see PossibleBootstrapIconV1
     */
    export type PossibleBootstrapIconV1_1 = | PossibleBootstrapIconV1_1_Bootstrap
                                            | PossibleBootstrapIconV1_1_Arrow | PossibleBootstrapIconV1_1_ShapeArrow | PossibleBootstrapIconV1_1_BoxArrow
                                            | PossibleBootstrapIconV1_1_AlertWarningAndSign | PossibleBootstrapIconV1_1_FileAndFolder
                                            | PossibleBootstrapIconV1_1_UiAndKeyboard | PossibleBootstrapIconV1_1_SortAndFilter
                                            | PossibleBootstrapIconV1_1_Caret | PossibleBootstrapIconV1_1_Chevron | PossibleBootstrapIconV1_1_Shape
                                            | PossibleBootstrapIconV1_1_Typography | PossibleBootstrapIconV1_1_Media
                                            | PossibleBootstrapIconV1_1_Device | PossibleBootstrapIconV1_1_Commerce
                                            | PossibleBootstrapIconV1_1_DateAndTime
                                            | PossibleBootstrapIconV1_1_Communication | PossibleBootstrapIconV1_1_Tool
                                            | PossibleBootstrapIconV1_1_Application
                                            | PossibleBootstrapIconV1_1_RealWorld | PossibleBootstrapIconV1_1_Geography
                                            | PossibleBootstrapIconV1_1_Layout | PossibleBootstrapIconV1_1_Graphic
                                            | PossibleBootstrapIconV1_1_Emoji | PossibleBootstrapIconV1_1_Hand
                                            | PossibleBootstrapIconV1_1_Control
                                            | PossibleBootstrapIconV1_1_Person | PossibleBootstrapIconV1_1_Security
                                            | PossibleBootstrapIconV1_1_Data | PossibleBootstrapIconV1_1_Cloud
                                            | PossibleBootstrapIconV1_1_Badge
                                            | PossibleBootstrapIconV1_1_Entertainment
                                            | PossibleBootstrapIconV1_1_Misc


    type PossibleBootstrapIconV1_1_Bootstrap = PossibleBootstrapIconV1_Bootstrap

    //region -------------------- 1.1 (1st column) --------------------

    type PossibleBootstrapIconV1_1_Arrow = PossibleBootstrapIconV1_Arrow
    type PossibleBootstrapIconV1_1_ShapeArrow = PossibleBootstrapIconV1_ShapeArrow
    type PossibleBootstrapIconV1_1_BoxArrow = PossibleBootstrapIconV1_BoxArrow

    //endregion -------------------- 1.1 (1st column) --------------------
    //region -------------------- 1.1 (2nd column) --------------------

    type PossibleBootstrapIconV1_1_AlertWarningAndSign = PossibleBootstrapIconV1_AlertWarningAndSign

    //region -------------------- 1.1 (file & folder) --------------------

    type PossibleBootstrapIconV1_1_FileAndFolder = | PossibleBootstrapIconV1_FileAndFolder
                                                   | 'file-word' | 'file-word-fill' | 'file-earmark-word' | 'file-earmark-word-fill'
                                                   | 'file-excel' | 'file-excel-fill' | 'file-earmark-excel' | 'file-earmark-excel-fill'
                                                   | 'file-ppt' | 'file-ppt-fill' | 'file-earmark-ppt' | 'file-earmark-ppt-fill'
                                                   | 'file-bar-graph' | 'file-bar-graph-fill' | 'file-earmark-bar-graph' | 'file-earmark-bar-graph-fill'
                                                   | 'journal-bookmark' | 'journal-bookmark-fill'

    //endregion -------------------- 1.1 (file & folder) --------------------

    type PossibleBootstrapIconV1_1_UiAndKeyboard = PossibleBootstrapIconV1_UiAndKeyboard
    type PossibleBootstrapIconV1_1_SortAndFilter = PossibleBootstrapIconV1_SortAndFilter

    //endregion -------------------- 1.1 (2nd column) --------------------
    //region -------------------- 1.1 (3rd column) --------------------

    type PossibleBootstrapIconV1_1_Caret = PossibleBootstrapIconV1_Caret
    type PossibleBootstrapIconV1_1_Chevron = PossibleBootstrapIconV1_Chevron
    type PossibleBootstrapIconV1_1_Shape = PossibleBootstrapIconV1_Shape
    type PossibleBootstrapIconV1_1_Typography = PossibleBootstrapIconV1_Typography
    type PossibleBootstrapIconV1_1_Media = PossibleBootstrapIconV1_Media
    type PossibleBootstrapIconV1_1_Device = PossibleBootstrapIconV1_Device
    type PossibleBootstrapIconV1_1_Commerce = PossibleBootstrapIconV1_Commerce
    type PossibleBootstrapIconV1_1_DateAndTime = PossibleBootstrapIconV1_DateAndTime

    //endregion -------------------- 1.1 (3rd column) --------------------
    //region -------------------- 1.1 (4th column) --------------------

    type PossibleBootstrapIconV1_1_Communication = PossibleBootstrapIconV1_Communication
    type PossibleBootstrapIconV1_1_Tool = PossibleBootstrapIconV1_Tool
    type PossibleBootstrapIconV1_1_Application = PossibleBootstrapIconV1_Application
    type PossibleBootstrapIconV1_1_RealWorld = PossibleBootstrapIconV1_RealWorld
    type PossibleBootstrapIconV1_1_Geography = PossibleBootstrapIconV1_Geography
    type PossibleBootstrapIconV1_1_Layout = PossibleBootstrapIconV1_Layout
    type PossibleBootstrapIconV1_1_Graphic = PossibleBootstrapIconV1_Graphic

    //region -------------------- 1.0 (emoji) --------------------

    type PossibleBootstrapIconV1_1_Emoji = | PossibleBootstrapIconV1_Emoji
                                           | 'emoji-smile-fill'
                                           | 'emoji-smile-upside-down-fill'
                                           | 'emoji-frown-fill'
                                           | 'emoji-neutral-fill'
                                           | 'emoji-laughing-fill'
                                           | 'emoji-sunglasses-fill'
                                           | 'emoji-angry-fill'
                                           | 'emoji-dizzy-fill'
                                           | 'emoji-expressionless-fill'
                                           | 'emoji-wink' | 'emoji-wink-fill'
                                           | 'emoji-heart-eyes' | 'emoji-heart-eyes-fill'

    //endregion -------------------- 1.0 (emoji) --------------------

    type PossibleBootstrapIconV1_1_Hand = PossibleBootstrapIconV1_Hand

    //endregion -------------------- 1.1 (4th column) --------------------
    //region -------------------- 1.1 (5th column) --------------------

    type PossibleBootstrapIconV1_1_Control = PossibleBootstrapIconV1_Control
    type PossibleBootstrapIconV1_1_Person = PossibleBootstrapIconV1_Person
    type PossibleBootstrapIconV1_1_Security = PossibleBootstrapIconV1_Security
    type PossibleBootstrapIconV1_1_Data = PossibleBootstrapIconV1_Data
    type PossibleBootstrapIconV1_1_Cloud = PossibleBootstrapIconV1_Cloud
    type PossibleBootstrapIconV1_1_Badge = PossibleBootstrapIconV1_Badge
    type PossibleBootstrapIconV1_1_Entertainment = PossibleBootstrapIconV1_Entertainment
    type PossibleBootstrapIconV1_1_Misc = PossibleBootstrapIconV1_Misc

    //endregion -------------------- 1.1 (5th column) --------------------

    //endregion -------------------- 1.1 --------------------
    //region -------------------- 1.2 --------------------

    /**
     * The possible Boostrap icons that were released in the **version 1.2**.
     *
     * @note There is 1201 icons (50 more than the version **1.1**)
     *
     * @see https://blog.getbootstrap.com/2020/12/11/bootstrap-icons-1-2-0 Bootstrap 1.2 (December 11th, 2020)
     * @see https://www.figma.com/design/JeBqM2fRcfIe7wMDgNZG6d/Bootstrap-Icons-v1.2 Figma Link
     * @see PossibleBootstrapIconV1_1
     */
    export type PossibleBootstrapIconV1_2 = | PossibleBootstrapIconV1_2_Bootstrap
                                            | PossibleBootstrapIconV1_2_Arrow | PossibleBootstrapIconV1_2_ShapeArrow | PossibleBootstrapIconV1_2_BoxArrow
                                            | PossibleBootstrapIconV1_2_AlertWarningAndSign | PossibleBootstrapIconV1_2_FileAndFolder
                                            | PossibleBootstrapIconV1_2_UiAndKeyboard | PossibleBootstrapIconV1_2_SortAndFilter
                                            | PossibleBootstrapIconV1_2_Social
                                            | PossibleBootstrapIconV1_2_Caret | PossibleBootstrapIconV1_2_Chevron | PossibleBootstrapIconV1_2_Shape
                                            | PossibleBootstrapIconV1_2_Typography | PossibleBootstrapIconV1_2_Media
                                            | PossibleBootstrapIconV1_2_Device | PossibleBootstrapIconV1_2_Commerce
                                            | PossibleBootstrapIconV1_2_DateAndTime
                                            | PossibleBootstrapIconV1_2_Communication | PossibleBootstrapIconV1_2_Tool
                                            | PossibleBootstrapIconV1_2_Application
                                            | PossibleBootstrapIconV1_2_RealWorld | PossibleBootstrapIconV1_2_Geography
                                            | PossibleBootstrapIconV1_2_Layout | PossibleBootstrapIconV1_2_Graphic
                                            | PossibleBootstrapIconV1_2_Emoji | PossibleBootstrapIconV1_2_Hand
                                            | PossibleBootstrapIconV1_2_Control
                                            | PossibleBootstrapIconV1_2_Person | PossibleBootstrapIconV1_2_Security
                                            | PossibleBootstrapIconV1_2_Data | PossibleBootstrapIconV1_2_Cloud
                                            | PossibleBootstrapIconV1_2_Badge
                                            | PossibleBootstrapIconV1_2_Entertainment
                                            | PossibleBootstrapIconV1_2_Misc


    type PossibleBootstrapIconV1_2_Bootstrap = PossibleBootstrapIconV1_1_Bootstrap

    //region -------------------- 1.2 (1st column) --------------------

    type PossibleBootstrapIconV1_2_Arrow = PossibleBootstrapIconV1_1_Arrow
    type PossibleBootstrapIconV1_2_ShapeArrow = PossibleBootstrapIconV1_1_ShapeArrow
    type PossibleBootstrapIconV1_2_BoxArrow = PossibleBootstrapIconV1_1_BoxArrow

    //endregion -------------------- 1.2 (1st column) --------------------
    //region -------------------- 1.2 (2nd column) --------------------

    type PossibleBootstrapIconV1_2_AlertWarningAndSign = PossibleBootstrapIconV1_1_AlertWarningAndSign
    type PossibleBootstrapIconV1_2_FileAndFolder = PossibleBootstrapIconV1_1_FileAndFolder
    type PossibleBootstrapIconV1_2_UiAndKeyboard = PossibleBootstrapIconV1_1_UiAndKeyboard
    type PossibleBootstrapIconV1_2_SortAndFilter = PossibleBootstrapIconV1_1_SortAndFilter

    //region -------------------- 1.2 (social) --------------------

    type PossibleBootstrapIconV1_2_Social = | 'github'
                                            | 'google'
                                            | 'linkedin'
                                            | 'slack'
                                            | 'instagram'
                                            | 'facebook'
                                            | 'twitter'
                                            | 'twitch'
                                            | 'youtube'
                                            | 'discord'

    //endregion -------------------- 1.2 (social) --------------------

    //endregion -------------------- 1.2 (2nd column) --------------------
    //region -------------------- 1.2 (3rd column) --------------------

    type PossibleBootstrapIconV1_2_Caret = PossibleBootstrapIconV1_1_Caret
    type PossibleBootstrapIconV1_2_Chevron = PossibleBootstrapIconV1_1_Chevron
    type PossibleBootstrapIconV1_2_Shape = PossibleBootstrapIconV1_1_Shape
    type PossibleBootstrapIconV1_2_Typography = PossibleBootstrapIconV1_1_Typography

    //region -------------------- 1.2 (media) --------------------

    type PossibleBootstrapIconV1_2_Media = | PossibleBootstrapIconV1_1_Media
                                           | 'record-btn' | 'record-btn-fill' | 'record-circle' | 'record-circle-fill'
                                           | 'play-btn' | 'play-btn-fill' | 'play-circle' | 'play-circle-fill'
                                           | 'pause-btn' | 'pause-btn-fill' | 'pause-circle' | 'pause-circle-fill'
                                           | 'stop-btn' | 'stop-btn-fill' | 'stop-circle' | 'stop-circle-fill'
                                           | 'skip-start-btn' | 'skip-start-btn-fill' | 'skip-start-circle' | 'skip-start-circle-fill'
                                           | 'skip-end-btn' | 'skip-end-btn-fill' | 'skip-end-circle' | 'skip-end-circle-fill'
                                           | 'skip-backward-btn' | 'skip-backward-btn-fill' | 'skip-backward-circle' | 'skip-backward-circle-fill'
                                           | 'skip-forward-btn' | 'skip-forward-btn-fill' | 'skip-forward-circle' | 'skip-forward-circle-fill'
                                           | 'disc' | 'disc-fill'
                                           | 'vinyl' | 'vinyl-fill'
                                           | 'record' | 'record-fill'
                                           | 'record2' | 'record2-fill'

    //endregion -------------------- 1.2 (media) --------------------

    type PossibleBootstrapIconV1_2_Device = PossibleBootstrapIconV1_1_Device
    type PossibleBootstrapIconV1_2_Commerce = PossibleBootstrapIconV1_1_Commerce
    type PossibleBootstrapIconV1_2_DateAndTime = PossibleBootstrapIconV1_1_DateAndTime

    //endregion -------------------- 1.2 (3rd column) --------------------
    //region -------------------- 1.2 (4th column) --------------------

    type PossibleBootstrapIconV1_2_Communication = PossibleBootstrapIconV1_1_Communication
    type PossibleBootstrapIconV1_2_Tool = PossibleBootstrapIconV1_1_Tool
    type PossibleBootstrapIconV1_2_Application = PossibleBootstrapIconV1_1_Application
    type PossibleBootstrapIconV1_2_RealWorld = PossibleBootstrapIconV1_1_RealWorld
    type PossibleBootstrapIconV1_2_Geography = PossibleBootstrapIconV1_1_Geography
    type PossibleBootstrapIconV1_2_Layout = PossibleBootstrapIconV1_1_Layout
    type PossibleBootstrapIconV1_2_Graphic = PossibleBootstrapIconV1_1_Graphic
    type PossibleBootstrapIconV1_2_Emoji = PossibleBootstrapIconV1_1_Emoji
    type PossibleBootstrapIconV1_2_Hand = PossibleBootstrapIconV1_1_Hand

    //endregion -------------------- 1.2 (4th column) --------------------
    //region -------------------- 1.2 (5th column) --------------------

    type PossibleBootstrapIconV1_2_Control = PossibleBootstrapIconV1_1_Control
    type PossibleBootstrapIconV1_2_Person = PossibleBootstrapIconV1_1_Person
    type PossibleBootstrapIconV1_2_Security = PossibleBootstrapIconV1_1_Security
    type PossibleBootstrapIconV1_2_Data = PossibleBootstrapIconV1_1_Data
    type PossibleBootstrapIconV1_2_Cloud = PossibleBootstrapIconV1_1_Cloud

    //region -------------------- 1.2 (badge) --------------------

    type PossibleBootstrapIconV1_2_Badge =
        | Exclude<PossibleBootstrapIconV1_1_Badge, | 'patch-plus-fll' | 'patch-minus-fll' | 'patch-check-fll' | 'patch-question-fll' | 'patch-exclamation-fll'>
        | 'patch-plus-fill'
        | 'patch-minus-fill'
        | 'patch-check-fill'
        | 'patch-question-fill'
        | 'patch-exclamation-fill'

    //endregion -------------------- 1.2 (badge) --------------------

    type PossibleBootstrapIconV1_2_Entertainment = PossibleBootstrapIconV1_1_Entertainment
    type PossibleBootstrapIconV1_2_Misc = PossibleBootstrapIconV1_1_Misc

    //endregion -------------------- 1.2 (5th column) --------------------

    //endregion -------------------- 1.2 --------------------
    //region -------------------- 1.3 --------------------

    /**
     * The possible Boostrap icons that were released in the **version 1.3**.
     *
     * @note There is 1265 icons (64 more than the version **1.2**)
     *
     * @see https://blog.getbootstrap.com/2021/01/07/bootstrap-icons-1-3-0 Bootstrap 1.3 (January 7th, 2021)
     * @see https://www.figma.com/design/UuL6jIPhUePmOVttDaQN8h/Bootstrap-Icons-v1.3 Figma Link
     * @see PossibleBootstrapIconV1_2
     */
    export type PossibleBootstrapIconV1_3 = | PossibleBootstrapIconV1_3_Bootstrap
                                            | PossibleBootstrapIconV1_3_Arrow | PossibleBootstrapIconV1_3_ShapeArrow | PossibleBootstrapIconV1_3_BoxArrow
                                            | PossibleBootstrapIconV1_3_AlertWarningAndSign | PossibleBootstrapIconV1_3_FileAndFolder
                                            | PossibleBootstrapIconV1_3_UiAndKeyboard | PossibleBootstrapIconV1_3_SortAndFilter
                                            | PossibleBootstrapIconV1_3_Social
                                            | PossibleBootstrapIconV1_3_Caret | PossibleBootstrapIconV1_3_Chevron | PossibleBootstrapIconV1_3_Shape
                                            | PossibleBootstrapIconV1_3_Typography | PossibleBootstrapIconV1_3_Media
                                            | PossibleBootstrapIconV1_3_Device | PossibleBootstrapIconV1_3_Commerce
                                            | PossibleBootstrapIconV1_3_DateAndTime
                                            | PossibleBootstrapIconV1_3_Communication | PossibleBootstrapIconV1_3_Tool
                                            | PossibleBootstrapIconV1_3_Application
                                            | PossibleBootstrapIconV1_3_RealWorld | PossibleBootstrapIconV1_3_Geography
                                            | PossibleBootstrapIconV1_3_Layout | PossibleBootstrapIconV1_3_Graphic
                                            | PossibleBootstrapIconV1_3_Emoji | PossibleBootstrapIconV1_3_Hand
                                            | PossibleBootstrapIconV1_3_Control
                                            | PossibleBootstrapIconV1_3_Person | PossibleBootstrapIconV1_3_Security
                                            | PossibleBootstrapIconV1_3_Data | PossibleBootstrapIconV1_3_Cloud
                                            | PossibleBootstrapIconV1_3_Badge
                                            | PossibleBootstrapIconV1_3_Entertainment
                                            | PossibleBootstrapIconV1_3_Misc


    type PossibleBootstrapIconV1_3_Bootstrap = PossibleBootstrapIconV1_2_Bootstrap

    //region -------------------- 1.3 (1st column) --------------------

    type PossibleBootstrapIconV1_3_Arrow = PossibleBootstrapIconV1_2_Arrow
    type PossibleBootstrapIconV1_3_ShapeArrow = PossibleBootstrapIconV1_2_ShapeArrow
    type PossibleBootstrapIconV1_3_BoxArrow = PossibleBootstrapIconV1_2_BoxArrow

    //endregion -------------------- 1.3 (1st column) --------------------
    //region -------------------- 1.3 (2nd column) --------------------

    //region -------------------- 1.3 (alert warning & sign) --------------------

    type PossibleBootstrapIconV1_3_AlertWarningAndSign = | PossibleBootstrapIconV1_2_AlertWarningAndSign
                                                         | 'dash-circle-dotted' | 'dash-square-dotted'
                                                         | 'plus-circle-dotted' | 'plus-square-dotted'

    //endregion -------------------- 1.3 (alert warning & sign) --------------------

    type PossibleBootstrapIconV1_3_FileAndFolder = PossibleBootstrapIconV1_2_FileAndFolder

    //region -------------------- 1.3 (ui & keyboard) --------------------

    type PossibleBootstrapIconV1_3_UiAndKeyboard = | PossibleBootstrapIconV1_2_UiAndKeyboard
                                                   | 'save' | 'save-fill'
                                                   | 'save2' | 'save2-fill'
                                                   | 'border' | 'border-center' | 'border-middle'
                                                   | 'border-bottom' | 'border-top' | 'border-left' | 'border-right'
                                                   | 'border-inner' | 'border-outer' | 'border-all'

    //endregion -------------------- 1.3 (ui & keyboard) --------------------

    type PossibleBootstrapIconV1_3_SortAndFilter = PossibleBootstrapIconV1_2_SortAndFilter

    //region -------------------- 1.3 (social) --------------------

    type PossibleBootstrapIconV1_3_Social = | PossibleBootstrapIconV1_2_Social
                                            | 'whatsapp'
                                            | 'telegram'

    //endregion -------------------- 1.3 (social) --------------------

    //endregion -------------------- 1.3 (2nd column) --------------------
    //region -------------------- 1.3 (3rd column) --------------------

    type PossibleBootstrapIconV1_3_Caret = PossibleBootstrapIconV1_2_Caret
    type PossibleBootstrapIconV1_3_Chevron = PossibleBootstrapIconV1_2_Chevron
    type PossibleBootstrapIconV1_3_Shape = PossibleBootstrapIconV1_2_Shape
    type PossibleBootstrapIconV1_3_Typography = PossibleBootstrapIconV1_2_Typography
    type PossibleBootstrapIconV1_3_Media = PossibleBootstrapIconV1_2_Media

    //region -------------------- 1.3 (device) --------------------

    type PossibleBootstrapIconV1_3_Device = | PossibleBootstrapIconV1_2_Device
                                            | 'mouse-fill' | 'mouse2-fill' | 'mouse3-fill'
                                            | 'phone-vibrate-fill'

    //endregion -------------------- 1.3 (device) --------------------

    type PossibleBootstrapIconV1_3_Commerce = PossibleBootstrapIconV1_2_Commerce
    type PossibleBootstrapIconV1_3_DateAndTime = PossibleBootstrapIconV1_2_DateAndTime

    //endregion -------------------- 1.3 (3rd column) --------------------
    //region -------------------- 1.3 (4th column) --------------------

    type PossibleBootstrapIconV1_3_Communication = PossibleBootstrapIconV1_2_Communication
    type PossibleBootstrapIconV1_3_Tool = PossibleBootstrapIconV1_2_Tool

    //region -------------------- 1.3 (application) --------------------

    type PossibleBootstrapIconV1_3_Application = | PossibleBootstrapIconV1_2_Application
                                                 | 'window-sidebar' | 'window-dock'

    //endregion -------------------- 1.3 (application) --------------------
    //region -------------------- 1.3 (real word) --------------------

    type PossibleBootstrapIconV1_3_RealWorld = | PossibleBootstrapIconV1_2_RealWorld
                                               | 'lightbulb' | 'lightbulb-fill'
                                               | 'lightbulb-off' | 'lightbulb-off-fill'
                                               | 'megaphone' | 'megaphone-fill'
                                               | 'speedometer' | 'speedometer2'
                                               | 'pin' | 'pin-fill'
                                               | 'pin-angle' | 'pin-angle-fill'

    //endregion -------------------- 1.3 (real word) --------------------

    type PossibleBootstrapIconV1_3_Geography = PossibleBootstrapIconV1_2_Geography
    type PossibleBootstrapIconV1_3_Layout = PossibleBootstrapIconV1_2_Layout

    //region -------------------- 1.3 (graphic) --------------------

    type PossibleBootstrapIconV1_3_Graphic = | PossibleBootstrapIconV1_2_Graphic
                                             | 'eraser' | 'eraser-fill'
                                             | 'mask' | 'rulers' | 'stack' | 'paint-bucket'
                                             | 'eyedropper'
                                             | 'symmetry-vertical' | 'symmetry-horizontal'
                                             | 'layer-forward' | 'layer-backward'
                                             | 'palette' | 'palette2' | 'palette-fill'

    //endregion -------------------- 1.3 (graphic) --------------------

    type PossibleBootstrapIconV1_3_Emoji = PossibleBootstrapIconV1_2_Emoji

    //region -------------------- 1.3 (hand) --------------------

    type PossibleBootstrapIconV1_3_Hand = | PossibleBootstrapIconV1_2_Hand
                                          | 'hand-index-fill' | 'hand-index-thumb-fill'
                                          | 'hand-thumbs-down-fill' | 'hand-thumbs-up-fill'

    //endregion -------------------- 1.3 (hand) --------------------

    //endregion -------------------- 1.3 (4th column) --------------------
    //region -------------------- 1.3 (5th column) --------------------

    type PossibleBootstrapIconV1_3_Control = PossibleBootstrapIconV1_2_Control
    type PossibleBootstrapIconV1_3_Person = PossibleBootstrapIconV1_2_Person
    type PossibleBootstrapIconV1_3_Security = PossibleBootstrapIconV1_2_Security
    type PossibleBootstrapIconV1_3_Data = PossibleBootstrapIconV1_2_Data
    type PossibleBootstrapIconV1_3_Cloud = PossibleBootstrapIconV1_2_Cloud

    //region -------------------- 1.3 (badge) --------------------

    type PossibleBootstrapIconV1_3_Badge = | PossibleBootstrapIconV1_2_Badge
                                           | 'badge-3d' | 'badge-3d-fill'
                                           | 'badge-wc' | 'badge-wc-fill'
                                           | 'badge-ar' | 'badge-ar-fill'
                                           | 'badge-vr' | 'badge-vr-fill'

    //endregion -------------------- 1.3 (badge) --------------------

    type PossibleBootstrapIconV1_3_Entertainment = PossibleBootstrapIconV1_2_Entertainment
    type PossibleBootstrapIconV1_3_Misc = PossibleBootstrapIconV1_2_Misc

    //endregion -------------------- 1.3 (5th column) --------------------

    //endregion -------------------- 1.3 --------------------
    //region -------------------- 1.4 --------------------

    /**
     * The possible Boostrap icons that were released in the **version 1.4**.
     *
     * @note There is 1325 icons (60 more than the version **1.3**)
     *
     * @see https://blog.getbootstrap.com/2021/02/22/bootstrap-icons-1-4-0 Bootstrap 1.4 (February 22nd, 2021)
     * @see https://www.figma.com/design/tZZVOiEgKcRUHE3s6o5djB/Bootstrap-Icons-v1.4 Figma Link
     * @see PossibleBootstrapIconV1_3
     */
    export type PossibleBootstrapIconV1_4 = | PossibleBootstrapIconV1_4_Bootstrap
                                            | PossibleBootstrapIconV1_4_Arrow | PossibleBootstrapIconV1_4_ShapeArrow | PossibleBootstrapIconV1_4_BoxArrow
                                            | PossibleBootstrapIconV1_4_AlertWarningAndSign | PossibleBootstrapIconV1_4_FileAndFolder
                                            | PossibleBootstrapIconV1_4_UiAndKeyboard | PossibleBootstrapIconV1_4_SortAndFilter
                                            | PossibleBootstrapIconV1_4_Social
                                            | PossibleBootstrapIconV1_4_Caret | PossibleBootstrapIconV1_4_Chevron | PossibleBootstrapIconV1_4_Shape
                                            | PossibleBootstrapIconV1_4_Typography | PossibleBootstrapIconV1_4_Media
                                            | PossibleBootstrapIconV1_4_Device | PossibleBootstrapIconV1_4_Commerce
                                            | PossibleBootstrapIconV1_4_DateAndTime
                                            | PossibleBootstrapIconV1_4_Communication | PossibleBootstrapIconV1_4_Tool
                                            | PossibleBootstrapIconV1_4_Application
                                            | PossibleBootstrapIconV1_4_RealWorld | PossibleBootstrapIconV1_4_Geography
                                            | PossibleBootstrapIconV1_4_Layout | PossibleBootstrapIconV1_4_Graphic
                                            | PossibleBootstrapIconV1_4_Emoji | PossibleBootstrapIconV1_4_Hand
                                            | PossibleBootstrapIconV1_4_Control
                                            | PossibleBootstrapIconV1_4_Person | PossibleBootstrapIconV1_4_Security
                                            | PossibleBootstrapIconV1_4_Data | PossibleBootstrapIconV1_4_Cloud
                                            | PossibleBootstrapIconV1_4_Badge
                                            | PossibleBootstrapIconV1_4_Entertainment
                                            | PossibleBootstrapIconV1_4_Misc
                                            | PossibleBootstrapIconV1_4_Weather


    type PossibleBootstrapIconV1_4_Bootstrap = PossibleBootstrapIconV1_3_Bootstrap

    //region -------------------- 1.4 (1st column) --------------------

    type PossibleBootstrapIconV1_4_Arrow = PossibleBootstrapIconV1_3_Arrow
    type PossibleBootstrapIconV1_4_ShapeArrow = PossibleBootstrapIconV1_3_ShapeArrow
    type PossibleBootstrapIconV1_4_BoxArrow = PossibleBootstrapIconV1_3_BoxArrow

    //endregion -------------------- 1.4 (1st column) --------------------
    //region -------------------- 1.4 (2nd column) --------------------

    type PossibleBootstrapIconV1_4_AlertWarningAndSign = PossibleBootstrapIconV1_3_AlertWarningAndSign
    type PossibleBootstrapIconV1_4_FileAndFolder = PossibleBootstrapIconV1_3_FileAndFolder
    type PossibleBootstrapIconV1_4_UiAndKeyboard = PossibleBootstrapIconV1_3_UiAndKeyboard
    type PossibleBootstrapIconV1_4_SortAndFilter = PossibleBootstrapIconV1_3_SortAndFilter
    type PossibleBootstrapIconV1_4_Social = PossibleBootstrapIconV1_3_Social

    //endregion -------------------- 1.4 (2nd column) --------------------
    //region -------------------- 1.4 (3rd column) --------------------

    type PossibleBootstrapIconV1_4_Caret = PossibleBootstrapIconV1_3_Caret
    type PossibleBootstrapIconV1_4_Chevron = PossibleBootstrapIconV1_3_Chevron
    type PossibleBootstrapIconV1_4_Shape = PossibleBootstrapIconV1_3_Shape
    type PossibleBootstrapIconV1_4_Typography = PossibleBootstrapIconV1_3_Typography
    type PossibleBootstrapIconV1_4_Media = PossibleBootstrapIconV1_3_Media
    type PossibleBootstrapIconV1_4_Device = PossibleBootstrapIconV1_3_Device
    type PossibleBootstrapIconV1_4_Commerce = PossibleBootstrapIconV1_3_Commerce
    type PossibleBootstrapIconV1_4_DateAndTime = PossibleBootstrapIconV1_3_DateAndTime

    //endregion -------------------- 1.4 (3rd column) --------------------
    //region -------------------- 1.4 (4th column) --------------------

    type PossibleBootstrapIconV1_4_Communication = PossibleBootstrapIconV1_3_Communication
    type PossibleBootstrapIconV1_4_Tool = PossibleBootstrapIconV1_3_Tool
    type PossibleBootstrapIconV1_4_Application = PossibleBootstrapIconV1_3_Application

    //region -------------------- 1.4 (real word) --------------------

    type PossibleBootstrapIconV1_4_RealWorld =
        Exclude<PossibleBootstrapIconV1_3_RealWorld,
            | 'sun' | 'moon'
            | 'thermometer' | 'thermometer-half'>

    //endregion -------------------- 1.4 (real word) --------------------

    type PossibleBootstrapIconV1_4_Geography = PossibleBootstrapIconV1_3_Geography
    type PossibleBootstrapIconV1_4_Layout = PossibleBootstrapIconV1_3_Layout
    type PossibleBootstrapIconV1_4_Graphic = PossibleBootstrapIconV1_3_Graphic
    type PossibleBootstrapIconV1_4_Emoji = PossibleBootstrapIconV1_3_Emoji
    type PossibleBootstrapIconV1_4_Hand = PossibleBootstrapIconV1_3_Hand

    //endregion -------------------- 1.4 (4th column) --------------------
    //region -------------------- 1.4 (5th column) --------------------

    type PossibleBootstrapIconV1_4_Control = PossibleBootstrapIconV1_3_Control
    type PossibleBootstrapIconV1_4_Person = PossibleBootstrapIconV1_3_Person
    type PossibleBootstrapIconV1_4_Security = PossibleBootstrapIconV1_3_Security
    type PossibleBootstrapIconV1_4_Data = PossibleBootstrapIconV1_3_Data
    type PossibleBootstrapIconV1_4_Cloud = PossibleBootstrapIconV1_3_Cloud
    type PossibleBootstrapIconV1_4_Badge = PossibleBootstrapIconV1_3_Badge
    type PossibleBootstrapIconV1_4_Entertainment = PossibleBootstrapIconV1_3_Entertainment

    //region -------------------- 1.4 (misc) --------------------

    type PossibleBootstrapIconV1_4_Misc =
        | Exclude<PossibleBootstrapIconV1_3_Misc, | 'lightning' | 'lightning-fill'>
        | 'lightning-charge' | 'lightning-charge-fill'

    //endregion -------------------- 1.4 (misc) --------------------
    //region -------------------- 1.4 (weather) --------------------

    type PossibleBootstrapIconV1_4_Weather = | 'sun' | 'sun-fill'
                                             | 'sunrise' | 'sunrise-fill'
                                             | 'sunset' | 'sunset-fill'
                                             | 'snow' | 'snow2' | 'snow3'
                                             | 'wind' | 'tornado'
                                             | 'hurricane' | 'tropical-storm'
                                             | 'rainbow'
                                             | 'thermometer' | 'thermometer-low' | 'thermometer-half' | 'thermometer-high'
                                             | 'thermometer-snow' | 'thermometer-sun'
                                             | 'cloudy' | 'cloudy-fill'
                                             | 'cloud-fog' | 'cloud-fog-fill'
                                             | 'cloud-fog2' | 'cloud-fog2-fill'
                                             | 'cloud-haze' | 'cloud-haze-fill'
                                             | 'cloud-haze-1' | 'cloud-haze2-fill'
                                             | 'cloud-drizzle' | 'cloud-drizzle-fill'
                                             | 'cloud-rain' | 'cloud-rain-fill'
                                             | 'cloud-rain-heavy' | 'cloud-rain-heavy-fill'
                                             | 'cloud-hail' | 'cloud-hail-fill'
                                             | 'cloud-snow' | 'cloud-snow-fill'
                                             | 'cloud-sleet' | 'cloud-sleet-fill'
                                             | 'cloud-lightning' | 'cloud-lightning-fill'
                                             | 'cloud-lightning-rain' | 'cloud-lightning-rain-fill'
                                             | 'cloud-sun' | 'cloud-sun-fill'
                                             | 'cloud-moon' | 'cloud-moon-fill'
                                             | 'stars'
                                             | 'moon' | 'moon-fill'
                                             | 'moon-stars' | 'moon-stars-fill'
                                             | 'clouds' | 'clouds-fill'
                                             | 'lightning' | 'lightning-fill'
                                             | 'umbrella' | 'umbrella-fill'
                                             | 'moisture'
                                             | 'water' | 'tsunami'

    //endregion -------------------- 1.4 (weather) --------------------

    //endregion -------------------- 1.4 (5th column) --------------------

    //endregion -------------------- 1.4 --------------------
    //region -------------------- 1.5 --------------------

    /**
     * The possible Boostrap icons that were released in the **version 1.5**.
     *
     * @note There is 1370 icons (45 more than the version **1.4**)
     *
     * @see https://blog.getbootstrap.com/2021/05/10/bootstrap-icons-1-5-0 Bootstrap 1.5 (May 10th, 2021)
     * @see PossibleBootstrapIconV1_4
     */
    type PossibleBootstrapIconV1_5 = | PossibleBootstrapIconV1_4
                                     | 'bank'
                                     | 'bank2'
                                     | 'bell-slash' | 'bell-slash-fill'
                                     | 'coin'
                                     | 'cash-coin'
                                     | 'piggy-bank' | 'piggy-bank-fill'
                                     | 'safe' | 'safe-fill'
                                     | 'safe2' | 'safe2-fill'
                                     | 'pin-map' | 'pin-map-fill'
                                     | 'plus-lg' | 'dash-lg' | 'check-lg' | 'slash-lg' | 'x-lg' | 'question-lg' | 'exclamation-lg' | 'info-lg'
                                     | 'currency-dollar' | 'currency-euro' | 'currency-pound' | 'currency-yen'
                                     | 'currency-exchange'
                                     | 'currency-bitcoin'
                                     | 'file-pdf' | 'file-pdf-fill' | 'file-earmark-pdf' | 'file-earmark-pdf-fill'
                                     | 'gender-male' | 'gender-female' | 'gender-ambiguous' | 'gender-trans'
                                     | 'headset-vr'
                                     | 'sd-card' | 'sd-card-fill'
                                     | 'mastodon'
                                     | 'messenger' | 'reddit' | 'skype'
                                     | 'recycle'
                                     | 'translate'

    //endregion -------------------- 1.5 --------------------
    //region -------------------- 1.6 --------------------

    /**
     * The possible Boostrap icons that were released in the **version 1.6**.
     *
     * @note There is 1406 icons (36 more than the version **1.4**)
     *
     * @see https://blog.getbootstrap.com/2021/10/13/bootstrap-icons-1-6-0 Bootstrap 1.4 (October 13th, 2020)
     * @see PossibleBootstrapIconV1_5
     */
    type PossibleBootstrapIconV1_6 = | PossibleBootstrapIconV1_5
                                     | 'apple' | 'microsoft' | 'windows' | 'paypal'
                                     | 'behance' | 'dribbble' | 'line' | 'medium'
                                     | 'pinterest' | 'signal' | 'snapchat' | 'spotify'
                                     | 'stack-overflow' | 'strava' | 'wordpress' | 'vimeo'
                                     | 'activity'
                                     | 'easel2' | 'easel2-fill'
                                     | 'easel3' | 'easel3-fill'
                                     | 'fan'
                                     | 'fingerprint'
                                     | 'graph-down-arrow' | 'graph-up-arrow'
                                     | 'hypnotize'
                                     | 'magic'
                                     | 'person-rolodex'
                                     | 'person-video' | 'person-video2' | 'person-video3'
                                     | 'person-workspace'
                                     | 'radioactive'
                                     | 'webcam' | 'webcam-fill'
                                     | 'yin-yang'

    //endregion -------------------- 1.6 --------------------
    //region -------------------- 1.7 --------------------

    /**
     * The possible Boostrap icons that were released in the **version 1.7**.
     *
     * @note There is 1522 icons (116 more than the version **1.6**)
     *
     * @see https://blog.getbootstrap.com/2021/11/01/bootstrap-icons-1-7-0 Bootstrap 1.7 (November 1st, 2021)
     * @see PossibleBootstrapIconV1_6
     */
    type PossibleBootstrapIconV1_7 = | PossibleBootstrapIconV1_6
                                     | '123'
                                     | 'bandaid' | 'bandaid-fill'
                                     | 'bluetooth'
                                     | 'body-text'
                                     | 'boombox' | 'boombox-fill'
                                     | 'boxes'
                                     | 'dpad' | 'dpad-fill'
                                     | 'ear' | 'ear-fill'
                                     | 'envelope-dash' | 'envelope-dash-fill' | 'envelope-dash-1'
                                     | 'envelope-plus' | 'envelope-plus-fill'
                                     | 'envelope-slash' | 'envelope-slash-fill' | 'envelope-slash-1'
                                     | 'envelope-x' | 'envelope-x-fill' | 'envelope-x-1'
                                     | 'envelope-exclamation' | 'envelope-exclamation-fill' | 'envelope-exclamation-1'
                                     | 'envelope-check' | 'envelope-check-fill' | 'envelope-check-1'
                                     | 'explicit' | 'explicit-fill'
                                     | 'git'
                                     | 'infinity'
                                     | 'list-columns' | 'list-columns-reverse'
                                     | 'meta'
                                     | 'mortorboard' | 'mortorboard-fill'
                                     | 'mortarboard' | 'mortarboard-fill'
                                     | 'nintendo-switch'
                                     | 'pc' | 'pc-horizontal'
                                     | 'pc-display' | 'pc-display-horizontal'
                                     | 'playstation'
                                     | 'plus-slash-minus'
                                     | 'projector' | 'projector-fill'
                                     | 'qr-code' | 'qr-code-scan'
                                     | 'quora'
                                     | 'quote'
                                     | 'robot'
                                     | 'send' | 'send-fill'
                                     | 'send-plus' | 'send-plus-fill'
                                     | 'send-dash' | 'send-dash-fill'
                                     | 'send-slash' | 'send-slash-fill'
                                     | 'send-x' | 'send-x-fill'
                                     | 'send-exclamation' | 'send-exclamation-fill' | 'send-exclamation-1'
                                     | 'send-check' | 'send-check-fill'
                                     | 'steam'
                                     | 'terminal-split' | 'terminal-plus' | 'terminal-dash' | 'terminal-dash-1' | 'terminal-x'
                                     | 'ticket' | 'ticket-fill'
                                     | 'ticket-detailed' | 'ticket-detailed-fill'
                                     | 'ticket-perforated' | 'ticket-perforated-fill'
                                     | 'tiktok'
                                     | 'window-dash' | 'window-plus' | 'window-x'
                                     | 'window-desktop' | 'window-fullscreen'
                                     | 'window-split' | 'window-stack'
                                     | 'xbox'
                                     | 'ethernet'
                                     | 'hdmi' | 'hdmi-fill'
                                     | 'usb' | 'usb-fill' | 'usb-symbol'
                                     | 'usb-c' | 'usb-c-fill'
                                     | 'usb-plug' | 'usb-plug-fill'
                                     | 'usb-drive-fill'
                                     | 'usb-drive'
                                     | 'usb-micro' | 'usb-micro-fill'
                                     | 'usb-mini' | 'usb-mini-fill'
                                     | 'displayport' | 'displayport-fill' | 'displayport-1'
                                     | 'gpu-card'
                                     | 'memory'
                                     | 'modem' | 'modem-fill'
                                     | 'motherboard' | 'motherboard-fill'
                                     | 'optical-audio' | 'optical-audio-fill'
                                     | 'pci-card'
                                     | 'router' | 'router-fill'
                                     | 'ssd' | 'ssd-fill'
                                     | 'thunderbolt' | 'thunderbolt-fill'
                                     | 'cloud-haze2'
                                     | 'device-hdd' | 'device-hdd-fill'
                                     | 'device-ssd' | 'device-ssd-fill'

    //endregion -------------------- 1.7 --------------------
    //region -------------------- 1.8 --------------------

    /**
     * The possible Boostrap icons that were released in the **version 1.8**.
     1683
     * @note There is 1668 icons (146 more than the version **1.7**)
     *
     * @see https://blog.getbootstrap.com/2022/01/31/bootstrap-icons-1-8-0 Bootstrap 1.8 (January 31st, 2022)
     * @see PossibleBootstrapIconV1_7
     */
    type PossibleBootstrapIconV1_8 = | PossibleBootstrapIconV1_7
                                     | 'arrow-through-heart' | 'arrow-through-heart-fill'
                                     | 'badge-sd' | 'badge-sd-fill'
                                     | 'bag-heart' | 'bag-heart-fill'
                                     | 'balloon' | 'balloon-fill'
                                     | 'balloon-heart' | 'balloon-heart-fill'
                                     | 'box2' | 'box2-fill'
                                     | 'box2-heart' | 'box2-heart-fill'
                                     | 'braces-asterisk'
                                     | 'calendar-heart' | 'calendar-heart-fill'
                                     | 'calendar2-heart' | 'calendar2-heart-fill'
                                     | 'chat-heart' | 'chat-heart-fill'
                                     | 'chat-left-heart' | 'chat-left-heart-fill'
                                     | 'chat-right-heart' | 'chat-right-heart-fill'
                                     | 'chat-square-heart' | 'chat-square-heart-fill'
                                     | 'clipboard-check-fill'
                                     | 'clipboard-data-fill'
                                     | 'clipboard-fill'
                                     | 'clipboard-heart' | 'clipboard-heart-fill'
                                     | 'clipboard-minus-fill'
                                     | 'clipboard-plus-fill'
                                     | 'clipboard-pulse'
                                     | 'clipboard-x-fill'
                                     | 'clipboard2-check' | 'clipboard2-check-fill'
                                     | 'clipboard2-data' | 'clipboard2-data-fill'
                                     | 'clipboard2' | 'clipboard2-fill'
                                     | 'clipboard2-heart' | 'clipboard2-heart-fill'
                                     | 'clipboard2-minus' | 'clipboard2-minus-fill'
                                     | 'clipboard2-plus' | 'clipboard2-plus-fill'
                                     | 'clipboard2-pulse' | 'clipboard2-pulse-fill'
                                     | 'clipboard2-x' | 'clipboard2-x-fill'
                                     | 'emoji-kiss' | 'emoji-kiss-fill'
                                     | 'envelope-heart' | 'envelope-heart-fill'
                                     | 'envelope-open-heart' | 'envelope-open-heart-fill'
                                     | 'envelope-paper' | 'envelope-paper-fill'
                                     | 'envelope-paper-heart' | 'envelope-paper-heart-fill'
                                     | 'filetype-aac' | 'filetype-ai' | 'filetype-bmp' | 'filetype-cs'
                                     | 'filetype-css' | 'filetype-csv' | 'filetype-doc' | 'filetype-docx'
                                     | 'filetype-exe' | 'filetype-gif' | 'filetype-heic' | 'filetype-html'
                                     | 'filetype-java' | 'filetype-jpg' | 'filetype-js' | 'filetype-json'
                                     | 'filetype-jsx' | 'filetype-key' | 'filetype-m4p' | 'filetype-md'
                                     | 'filetype-mdx' | 'filetype-mov' | 'filetype-mp3' | 'filetype-mp4'
                                     | 'filetype-otf' | 'filetype-pdf' | 'filetype-php' | 'filetype-png'
                                     | 'filetype-ppt' | 'filetype-pptx' | 'filetype-ppt-1' | 'filetype-psd'
                                     | 'filetype-py' | 'filetype-raw' | 'filetype-rb' | 'filetype-sass'
                                     | 'filetype-scss' | 'filetype-sh' | 'filetype-svg' | 'filetype-tiff'
                                     | 'filetype-tsx' | 'filetype-ttf' | 'filetype-txt' | 'filetype-wav'
                                     | 'filetype-woff' | 'filetype-xls-1' | 'filetype-xls' | 'filetype-xlsx'
                                     | 'filetype-xml' | 'filetype-yml'
                                     | 'hearts'
                                     | 'heart-arrow'
                                     | 'heart-pulse' | 'heart-pulse-fill'
                                     | 'heartbreak' | 'heartbreak-fill'
                                     | 'hospital' | 'hospital-fill'
                                     | 'house-heart' | 'house-heart-fill'
                                     | 'incognito'
                                     | 'magnet' | 'magnet-fill'
                                     | 'person-heart' | 'person-hearts'
                                     | 'phone-flip'
                                     | 'plugin'
                                     | 'postage' | 'postage-fill'
                                     | 'postage-heart' | 'postage-heart-fill'
                                     | 'postcard' | 'postcard-fill'
                                     | 'postcard-heart' | 'postcard-heart-fill'
                                     | 'search-heart' | 'search-heart-fill'
                                     | 'sliders2' | 'sliders2-vertical'
                                     | 'trash3' | 'trash3-fill'
                                     | 'valentine' | 'valentine2'
                                     | 'wrench-adjustable' | 'wrench-adjustable-circle' | 'wrench-adjustable-circle-fill'

    //endregion -------------------- 1.8 --------------------
    //region -------------------- 1.9 --------------------

    /**
     * The possible Boostrap icons that were released in the **version 1.9**.
     *
     * @note There is 1811 icons (143 more than the version **1.8**)
     *
     * @see https://blog.getbootstrap.com/2022/07/13/bootstrap-icons-1-9-0 Bootstrap 1.9 (July 13th, 2022)
     * @see PossibleBootstrapIconV1_8
     */
    type PossibleBootstrapIconV1_9 = | PossibleBootstrapIconV1_8
                                     | '1-circle' | '1-circle-fill'
                                     | '1-circle-1' | '1-circle-fill-1'
                                     | '1-square' | '1-square-fill'
                                     | '2-circle' | '2-circle-fill'
                                     | '2-circle-1' | '2-circle-fill-1'
                                     | '2-square' | '2-square-fill'
                                     | '3-circle' | '3-circle-fill'
                                     | '3-circle-1' | '3-circle-fill-1'
                                     | '3-square' | '3-square-fill'
                                     | '4-circle' | '4-circle-fill'
                                     | '4-circle-1' | '4-circle-fill-1'
                                     | '4-square-fill' | '4-square'
                                     | '5-circle' | '5-circle-fill'
                                     | '5-circle-1' | '5-circle-fill-1'
                                     | '5-square' | '5-square-fill'
                                     | '6-circle' | '6-circle-fill'
                                     | '6-circle-1' | '6-circle-fill-1'
                                     | '6-square' | '6-square-fill'
                                     | '7-circle' | '7-circle-fill'
                                     | '7-circle-1' | '7-circle-fill-1'
                                     | '7-square' | '7-square-fill'
                                     | '8-circle' | '8-circle-fill'
                                     | '8-circle-1' | '8-circle-fill-1'
                                     | '8-square' | '8-square-fill'
                                     | '9-circle' | '9-circle-fill'
                                     | '9-circle-1' | '9-circle-fill-1'
                                     | '9-square' | '9-square-fill'
                                     | 'airplane-engines' | 'airplane-engines-fill'
                                     | 'airplane' | 'airplane-fill'
                                     | 'alexa'
                                     | 'alipay'
                                     | 'android' | 'android2'
                                     | 'box-fill' | 'box-seam-fill'
                                     | 'browser-chrome' | 'browser-edge' | 'browser-firefox' | 'browser-safari'
                                     | 'c-circle-1' | 'c-circle-fill-1'
                                     | 'c-circle' | 'c-circle-fill'
                                     | 'c-square' | 'c-square-fill'
                                     | 'capsule' | 'capsule-pill'
                                     | 'car-front' | 'car-front-fill'
                                     | 'cassette' | 'cassette-fill'
                                     | 'cc-circle-1' | 'cc-circle-fill-1'
                                     | 'cc-circle' | 'cc-circle-fill'
                                     | 'cc-square' | 'cc-square-fill'
                                     | 'cup-hot' | 'cup-hot-fill'
                                     | 'currency-rupee'
                                     | 'dropbox'
                                     | 'escape'
                                     | 'fast-forward-btn' | 'fast-forward-btn-fill'
                                     | 'fast-forward-circle' | 'fast-forward-circle-fill'
                                     | 'fast-forward' | 'fast-forward-fill'
                                     | 'filetype-sql'
                                     | 'fire'
                                     | 'google-play'
                                     | 'h-circle' | 'h-circle-fill'
                                     | 'h-circle-1' | 'h-circle-fill-1'
                                     | 'h-square' | 'h-square-fill'
                                     | 'indent'
                                     | 'lungs' | 'lungs-fill'
                                     | 'microsoft-teams'
                                     | 'p-circle-1' | 'p-circle-fill-1'
                                     | 'p-circle' | 'p-circle-fill'
                                     | 'p-square' | 'p-square-fill'
                                     | 'pass' | 'pass-fill'
                                     | 'prescription' | 'prescription2'
                                     | 'r-circle' | 'r-circle-fill'
                                     | 'r-circle-1' | 'r-circle-fill-1'
                                     | 'r-square' | 'r-square-fill'
                                     | 'repeat' | 'repeat-1'
                                     | 'rewind' | 'rewind-fill'
                                     | 'rewind-btn' | 'rewind-btn-fill'
                                     | 'rewind-circle' | 'rewind-circle-fill'
                                     | 'train-front' | 'train-front-fill'
                                     | 'train-freight-front' | 'train-freight-front-fill'
                                     | 'train-lightrail-front' | 'train-lightrail-front-fill'
                                     | 'truck-front' | 'truck-front-fill'
                                     | 'ubuntu'
                                     | 'unindent'
                                     | 'unity'
                                     | 'universal-access' | 'universal-access-circle'
                                     | 'virus' | 'virus2'
                                     | 'wechat'
                                     | 'yelp'
                                     | 'sign-stop' | 'sign-stop-fill'
                                     | 'sign-stop-lights' | 'sign-stop-lights-fill'
                                     | 'sign-turn-left' | 'sign-turn-left-fill'
                                     | 'sign-turn-right' | 'sign-turn-right-fill'
                                     | 'sign-turn-slight-left' | 'sign-turn-slight-left-fill'
                                     | 'sign-turn-slight-right' | 'sign-turn-slight-right-fill'
                                     | 'sign-yield' | 'sign-yield-fill'
                                     | 'ev-station' | 'ev-station-fill'
                                     | 'fuel-pump-diesel' | 'fuel-pump-diesel-fill'
                                     | 'fuel-pump' | 'fuel-pump-fill'

    //endregion -------------------- 1.9 --------------------
    //region -------------------- 1.10 --------------------

    /**
     * The possible Boostrap icons that were released in the **version 1.10**.
     *
     * @note There is 1953 icons (142 more than the version **1.9**)
     *
     * @see https://blog.getbootstrap.com/2022/11/11/bootstrap-icons-1-10-0 Bootstrap 1.10 (November 11th, 2022)
     * @see PossibleBootstrapIconV1_9
     */
    type PossibleBootstrapIconV1_10 = | Exclude<PossibleBootstrapIconV1_9,
        | 'cloud-haze-1'
        | 'envelope-dash-1' | 'envelope-slash-1' | 'envelope-x-1' | 'envelope-exclamation-1' | 'envelope-check-1'
        | 'mortorboard' | 'mortorboard-fill'
        | 'send-exclamation-1'
        | 'terminal-dash-1'
        | 'displayport-1'
        | 'ssd' | 'ssd-fill'
        | 'filetype-ppt-1' | 'filetype-xls-1'
        | '1-circle-1' | '1-circle-fill-1'
        | '2-circle-1' | '2-circle-fill-1'
        | '3-circle-1' | '3-circle-fill-1'
        | '4-circle-1' | '4-circle-fill-1'
        | '5-circle-1' | '5-circle-fill-1'
        | '6-circle-1' | '6-circle-fill-1'
        | '7-circle-1' | '7-circle-fill-1'
        | '8-circle-1' | '8-circle-fill-1'
        | '9-circle-1' | '9-circle-fill-1'
        | 'c-circle-1' | 'c-circle-fill-1'
        | 'cc-circle-1' | 'cc-circle-fill-1'
        | 'h-circle-1' | 'h-circle-fill-1'
        | 'p-circle-1' | 'p-circle-fill-1'
        | 'r-circle-1' | 'r-circle-fill-1'>
                                      | '0-circle' | '0-circle-fill'
                                      | '0-square' | '0-square-fill'
                                      | 'rocket' | 'rocket-fill'
                                      | 'rocket-takeoff' | 'rocket-takeoff-fill'
                                      | 'stripe'
                                      | 'subscript' | 'superscript'
                                      | 'trello'
                                      | 'envelope-at' | 'envelope-at-fill'
                                      | 'regex'
                                      | 'text-wrap'
                                      | 'sign-dead-end' | 'sign-dead-end-fill'
                                      | 'sign-do-not-enter' | 'sign-do-not-enter-fill'
                                      | 'sign-intersection' | 'sign-intersection-fill'
                                      | 'sign-intersection-side' | 'sign-intersection-side-fill'
                                      | 'sign-intersection-t' | 'sign-intersection-t-fill'
                                      | 'sign-intersection-y' | 'sign-intersection-y-fill'
                                      | 'sign-merge-left' | 'sign-merge-left-fill'
                                      | 'sign-merge-right' | 'sign-merge-right-fill'
                                      | 'sign-no-left-turn' | 'sign-no-left-turn-fill'
                                      | 'sign-no-parking' | 'sign-no-parking-fill'
                                      | 'sign-no-right-turn' | 'sign-no-right-turn-fill'
                                      | 'sign-railroad' | 'sign-railroad-fill'
                                      | 'building-fill'
                                      | 'buildings' | 'buildings-fill'
                                      | 'building-add' | 'building-fill-add'
                                      | 'building-dash' | 'building-fill-dash'
                                      | 'building-slash' | 'building-fill-slash'
                                      | 'building-x' | 'building-fill-x'
                                      | 'building-down' | 'building-fill-down'
                                      | 'building-up' | 'building-fill-up'
                                      | 'building-exclamation' | 'building-fill-exclamation'
                                      | 'building-check' | 'building-fill-check'
                                      | 'building-gear' | 'building-fill-gear'
                                      | 'building-lock' | 'building-fill-lock'
                                      | 'bus-front' | 'bus-front-fill'
                                      | 'ev-front' | 'ev-front-fill'
                                      | 'globe-americas' | 'globe-asia-australia' | 'globe-central-south-asia' | 'globe-europe-africa'
                                      | 'house-add' | 'house-add-fill'
                                      | 'house-check' | 'house-check-fill'
                                      | 'house-dash' | 'house-dash-fill'
                                      | 'house-down' | 'house-down-fill'
                                      | 'house-exclamation' | 'house-exclamation-fill'
                                      | 'house-gear' | 'house-gear-fill'
                                      | 'house-lock' | 'house-lock-fill'
                                      | 'house-slash' | 'house-slash-fill'
                                      | 'house-up' | 'house-up-fill'
                                      | 'house-x' | 'house-x-fill'
                                      | 'person-add' | 'person-fill-add'
                                      | 'person-down' | 'person-fill-down'
                                      | 'person-up' | 'person-fill-up'
                                      | 'person-fill-dash'
                                      | 'person-fill-x'
                                      | 'person-slash' | 'person-fill-slash'
                                      | 'person-exclamation' | 'person-fill-exclamation'
                                      | 'person-fill-check'
                                      | 'person-gear' | 'person-fill-gear'
                                      | 'person-lock' | 'person-fill-lock'
                                      | 'scooter'
                                      | 'taxi-front' | 'taxi-front-fill'
                                      | 'amd'
                                      | 'database' | 'database-fill'
                                      | 'database-add' | 'database-fill-add'
                                      | 'database-dash' | 'database-fill-dash'
                                      | 'database-x' | 'database-fill-x'
                                      | 'database-slash' | 'database-fill-slash'
                                      | 'database-check' | 'database-fill-check'
                                      | 'database-down' | 'database-fill-down'
                                      | 'database-up' | 'database-fill-up'
                                      | 'database-exclamation' | 'database-fill-exclamation'
                                      | 'database-gear' | 'database-fill-gear'
                                      | 'database-lock' | 'database-fill-lock'
                                      | 'houses' | 'houses-fill'
                                      | 'nvidia'
                                      | 'person-vcard' | 'person-vcard-fill'
                                      | 'sina-weibo'
                                      | 'tencent-qq'
                                      | 'wikipedia'

    //endregion -------------------- 1.10 --------------------
    //region -------------------- 1.11 --------------------

    /**
     * The possible Boostrap icons that were released in the **version 1.11**.
     *
     * @note There is 2050 icons (97 more than the version **1.10**)
     *
     * @see https://blog.getbootstrap.com//2023/09/12/bootstrap-icons-1-11-0 Bootstrap 1.11 (September 12th, 2023)
     * @see PossibleBootstrapIconV1_10
     */
    type PossibleBootstrapIconV1_11 = | PossibleBootstrapIconV1_10
                                      | 'alphabet' | 'alphabet-uppercase'
                                      | 'amazon'
                                      | 'arrows' | 'arrows-vertical' | 'arrows-collapse-vertical' | 'arrows-expand-vertical'
                                      | 'ban' | 'ban-fill'
                                      | 'bing'
                                      | 'cake' | 'cake2' | 'cookie'
                                      | 'copy'
                                      | 'crosshair' | 'crosshair2'
                                      | 'emoji-astonished' | 'emoji-astonished-fill'
                                      | 'emoji-grimace' | 'emoji-grimace-fill'
                                      | 'emoji-grin' | 'emoji-grin-fill'
                                      | 'emoji-surprise' | 'emoji-surprise-fill'
                                      | 'emoji-tear' | 'emoji-tear-fill'
                                      | 'envelope-arrow-down' | 'envelope-arrow-down-fill'
                                      | 'envelope-arrow-up' | 'envelope-arrow-up-fill'
                                      | 'feather' | 'feather2'
                                      | 'floppy' | 'floppy-fill'
                                      | 'floppy2' | 'floppy2-fill'
                                      | 'gitlab'
                                      | 'highlighter'
                                      | 'marker-tip'
                                      | 'nvme' | 'nvme-fill'
                                      | 'opencollective'
                                      | 'pci-card-network'
                                      | 'pci-card-sound'
                                      | 'radar'
                                      | 'send-arrow-down' | 'send-arrow-down-fill'
                                      | 'send-arrow-up' | 'send-arrow-up-fill'
                                      | 'sim-slash' | 'sim-slash-fill'
                                      | 'sourceforge'
                                      | 'substack'
                                      | 'threads' | 'threads-fill'
                                      | 'transparency'
                                      | 'twitter-x'
                                      | 'type-h4' | 'type-h5' | 'type-h6'
                                      | 'backpack' | 'backpack-fill'
                                      | 'backpack2' | 'backpack2-fill'
                                      | 'backpack3' | 'backpack3-fill'
                                      | 'backpack4' | 'backpack4-fill'
                                      | 'brilliance'
                                      | 'cake-fill' | 'cake2-fill'
                                      | 'duffle' | 'duffle-fill'
                                      | 'exposure'
                                      | 'gender-neuter'
                                      | 'highlights'
                                      | 'luggage' | 'luggage-fill'
                                      | 'mailbox-flag' | 'mailbox2-flag'
                                      | 'noise-reduction'
                                      | 'passport-fill'
                                      | 'passport'
                                      | 'person-arms-up' | 'person-raised-hand'
                                      | 'person-standing' | 'person-standing-dress'
                                      | 'person-walking' | 'person-wheelchair'
                                      | 'shadows'
                                      | 'suitcase' | 'suitcase-fill'
                                      | 'suitcase2' | 'suitcase2-fill'
                                      | 'suitcase-lg' | 'suitcase-lg-fill'
                                      | 'vignette'

    //endregion -------------------- 1.11 --------------------

}
