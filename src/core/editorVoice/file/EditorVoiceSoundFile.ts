import type {NonRepeatableSoundFile}                                                                           from 'util/file/sound/NonRepeatableSoundFile'

/** A {@link NonRepeatableSoundFile} made to be related to an {@link EditorVoices} */
export type EditorVoiceSoundFile<NAME extends string = string, > = NonRepeatableSoundFile<'editor voice', NAME, 'wav'>
