import {SimpleImageFile} from 'util/file/image/SimpleImageFile'
import {MedalImageFile}  from 'core/officialNotification/file/MedalImageFile'

export const LIKE_IMAGE_FILE = new SimpleImageFile('others', 'Heart_00^d', 'tiff', 'Like image',)
export const STAMP_IMAGE_FILE = new SimpleImageFile('others', 'EventClearListIcon_00^s', 'tiff', 'Stamp image',)


export const GOLD_MEDAL_IMAGE_FILE = new MedalImageFile(3, 'Gold medal image',)
export const SILVER_MEDAL_IMAGE_FILE = new MedalImageFile(4, 'Silver medal image',)
export const BRONZE_MEDAL_IMAGE_FILE = new MedalImageFile(5, 'Bronze medal image',)


export const FIRST_PLACE_IMAGE_FILE = new MedalImageFile(0, '1st place image (medal)',)
export const SECOND_PLACE_IMAGE_FILE = new MedalImageFile(1, '2nd place image (medal)',)
export const THIRD_PLACE_IMAGE_FILE = new MedalImageFile(2, '3rd place image (medal)',)
