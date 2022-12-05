import './AnimatedImages.scss'
import './VariableImage.scss'

import type {AnimatedImagesProperties}    from 'app/tools/images/properties/AnimatedImagesProperties'
import type {ImageFromVariableProperties} from 'app/tools/images/properties/ImageFromVariableProperties'
import type {ImageProperties}             from 'app/tools/images/properties/ImageProperties'

import {assert} from 'util/utilitiesMethods'

/**
 *
 * @param properties
 * @reactComponent
 */
export default function Image(properties: | ImageFromVariableProperties | ImageProperties | AnimatedImagesProperties,) {
    return 'variable' in properties
        ? <ImageFromVariable {...properties}/>
        : 'source' in properties
            ? <SingleImage {...properties}/>
            : <AnimatedImages {...properties}/>
}

function ImageFromVariable({variable, isSquared, className, style, ...imagesProperties}: ImageFromVariableProperties,) {
    const appliedStyle = style ?? {}
    appliedStyle['--image-source'] = `var(--${variable}-image)`
    return <i className={`image-from-variable ${isSquared ? 'square-image-from-variable' : ''} ${className ?? ''}`}
              style={appliedStyle} {...imagesProperties}/>
}

function SingleImage({source, fallbackName, ...imageProperties}: ImageProperties,) {
    return <img src={source} alt={fallbackName} {...imageProperties}/>
}


const MINIMUM_AMOUNT_OF_IMAGES = 2
const MAXIMUM_AMOUNT_OF_IMAGES = 10

function AnimatedImages({partialId, className = '', images, displayAnimations = true, displayEveryImages = true, ...otherParameters}: AnimatedImagesProperties,) {
    assert(images.length >= MINIMUM_AMOUNT_OF_IMAGES && images.length <= MAXIMUM_AMOUNT_OF_IMAGES, `The array received for "${partialId}" is required to have between than ${MINIMUM_AMOUNT_OF_IMAGES} & ${MAXIMUM_AMOUNT_OF_IMAGES} items. The length received is ${images.length}.`,)

    if (!displayEveryImages)
        return <div key={`${partialId} - 1st image`} id={partialId} className={`${className} non-animated-image`} {...otherParameters}><Image {...images[0]}/></div>

    if (!displayAnimations)
        return <div key={`${partialId} - not animated`} id={partialId} className={`${className} non-animated-image non-animated-image-${images.length}`} {...otherParameters}>
            {images.map(({source, fallbackName,}, index,) => <SingleImage className={`image image-${index + 1}`} source={source} fallbackName={`${fallbackName} ${index + 1}`}/>)}
        </div>

    const {style = {}, ...otherParametersExcludingStyle} = otherParameters
    images.forEach(({source,}, index) => style[`--image-${index + 1}`] = `url('${source}')`)
    return <div key={`${partialId} - animated`} id={partialId} className={`${className} animated-image animated-image-${images.length}`} style={style} {...otherParametersExcludingStyle}/>
}
