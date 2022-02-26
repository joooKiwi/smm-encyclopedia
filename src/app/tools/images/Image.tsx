import './AnimatedImages.scss';

import type {AnimatedImagesProperties} from './properties/AnimatedImagesProperties';
import type {ImageProperties}          from './properties/ImageProperties';

import {assert} from '../../../util/utilitiesMethods';

/**
 *
 * @param properties
 * @reactComponent
 */
export default function Image(properties: | ImageProperties | AnimatedImagesProperties,) {
    return 'source' in properties
        ? <SingleImage {...properties}/>
        : <AnimatedImages {...properties}/>;
}

function SingleImage({source, fallbackName, ...imageProperties}: ImageProperties,) {
    return <img src={source} alt={fallbackName} {...imageProperties}/>;
}


const MINIMUM_AMOUNT_OF_IMAGES = 2;
const MAXIMUM_AMOUNT_OF_IMAGES = 10;

function AnimatedImages({partialId, className = '', images, displayAnimations = true, displayEveryImages = true, ...otherParameters}: AnimatedImagesProperties,) {
    assert(images.length >= MINIMUM_AMOUNT_OF_IMAGES && images.length <= MAXIMUM_AMOUNT_OF_IMAGES, `The array received for "${partialId}" is required to have between than ${MINIMUM_AMOUNT_OF_IMAGES} & ${MAXIMUM_AMOUNT_OF_IMAGES} items. The length received is ${images.length}.`,);

    if (!displayEveryImages)
        return <div key={`${partialId} - 1st image`} id={partialId} className={`${className} non-animated-image`} {...otherParameters}><Image {...images[0]}/></div>;

    if (!displayAnimations)
        return <div key={`${partialId} - not animated`} id={partialId} className={`${className} non-animated-image non-animated-image-${images.length}`} {...otherParameters}>
            {images.map(({source, fallbackName,}, index,) => <SingleImage className={`image image-${index + 1}`} source={source} fallbackName={`${fallbackName} ${index + 1}`}/>)}
        </div>;

    const {style = {}, ...otherParametersExcludingStyle} = otherParameters;
    images.forEach(({source,}, index) => style[`--image-${index + 1}`] = `url('${source}')`);
    return <div key={`${partialId} - animated`} id={partialId} className={`${className} animated-image animated-image-${images.length}`} style={style} {...otherParametersExcludingStyle}/>;
}
