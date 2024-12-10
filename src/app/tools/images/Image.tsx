import './AnimatedImages.scss'
import './VariableImage.scss'

import type {AnimatedImagesProperties}    from 'app/tools/images/properties/AnimatedImagesProperties'
import type {ImageFromFileProperties}     from 'app/tools/images/properties/ImageFromFileProperties'
import type {ImageFromVariableProperties} from 'app/tools/images/properties/ImageFromVariableProperties'
import type {ImageProperties}             from 'app/tools/images/properties/ImageProperties'

import {Empty}             from 'util/emptyVariables'
import {assert}            from 'util/utilitiesMethods'
import {ArrayAsCollection} from 'util/collection/ArrayAsCollection'

import EMPTY_STRING = Empty.EMPTY_STRING

/** @reactComponent */
export default function Image(properties: | ImageFromVariableProperties | ImageProperties | ImageFromFileProperties | AnimatedImagesProperties,) {
    if ('variable' in properties)
        return <ImageFromVariable {...properties}/>
    if ('file' in properties)
        return <ImageFromFile {...properties}/>
    if ('source' in properties)
        return <SingleImage {...properties}/>
    return <AnimatedImages {...properties}/>
}


function ImageFromFile({file, ...imageProperties}: ImageFromFileProperties,) {
    if (file == null)
        return null

    const {fallbackName, fullName, key,} = file
    return <SingleImage key={key} source={fullName} fallbackName={fallbackName} {...imageProperties}/>
}

function ImageFromVariable({variable, isSquared, className = EMPTY_STRING, style, ...imagesProperties}: ImageFromVariableProperties,) {
    const appliedStyle = style ?? {}
    appliedStyle['--image-source'] = `var(--${variable}-image)`
    return <em className={`image-from-variable ${isSquared ? 'square-image-from-variable' : EMPTY_STRING} ${className}`} style={appliedStyle} {...imagesProperties}/>
}

function SingleImage({source, fallbackName, ...imageProperties}: ImageProperties,) {
    return <img src={source} alt={fallbackName} {...imageProperties}/>
}


const MINIMUM_AMOUNT_OF_IMAGES = 2
const MAXIMUM_AMOUNT_OF_IMAGES = 10

function AnimatedImages({partialId, className = EMPTY_STRING, images, displayAnimations = true, displayEveryImages = true, ...otherParameters}: AnimatedImagesProperties,) {
    assert(images.length >= MINIMUM_AMOUNT_OF_IMAGES && images.length <= MAXIMUM_AMOUNT_OF_IMAGES, `The array received for "${partialId}" is required to have between than ${MINIMUM_AMOUNT_OF_IMAGES} & ${MAXIMUM_AMOUNT_OF_IMAGES} items. The length received is ${images.length}.`,)

    if (!displayEveryImages)
        return <div key={`${partialId} - 1st image`} id={partialId} className={`${className} non-animated-image`} {...otherParameters}><Image {...new ArrayAsCollection(images,).getFirst()}/></div>

    if (!displayAnimations)
        return <div key={`${partialId} - not animated`} id={partialId} className={`${className} non-animated-image non-animated-image-${images.length}`} {...otherParameters}>
            {images.map((properties, index,) =>
                'file' in properties
                    ? <ImageFromFile className={`image image-${index + 1}`} file={properties.file}/>
                    : <SingleImage className={`image image-${index + 1}`} source={properties.source} fallbackName={`${properties.fallbackName} ${index + 1}`}/>)}
        </div>

    const {style = {}, ...otherParametersExcludingStyle} = otherParameters
    images.forEach((properties, index) =>
        style[`--image-${index + 1}`] = `url('${'file' in properties ? properties.file?.fullName : properties.source}')`)
    return <div key={`${partialId} - animated`} id={partialId} className={`${className} animated-image animated-image-${images.length}`} style={style} {...otherParametersExcludingStyle}/>
}
