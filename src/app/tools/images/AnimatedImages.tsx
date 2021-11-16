import './AnimatedImages.scss';

import type {AnimatedImagesProperties} from './properties/AnimatedImagesProperties';

import Image from './Image';

const MINIMUM_AMOUNT_OF_IMAGES = 2;
const MAXIMUM_AMOUNT_OF_IMAGES = 10;

export default function AnimatedImages({partialId, className = '', images, displayAnimations = true, displayEveryImages = true, ...otherParameters}: AnimatedImagesProperties,) {
    if (!window.IS_IN_PRODUCTION && (images.length < MINIMUM_AMOUNT_OF_IMAGES || images.length > MAXIMUM_AMOUNT_OF_IMAGES))
        throw new ReferenceError(`The array received is required to have between than ${MINIMUM_AMOUNT_OF_IMAGES} & ${MAXIMUM_AMOUNT_OF_IMAGES} items. The length received is ${images.length}.`);

    if (!displayEveryImages)
        return <div key={`${partialId} - 1st image`} id={partialId} className={`${className} non-animated-image`} {...otherParameters}><Image {...images[0]}/></div>;

    if (!displayAnimations)
        return <div key={`${partialId} - not animated`} id={partialId} className={`${className} non-animated-image non-animated-image-${images.length}`} {...otherParameters}>
            {images.map(({source, fallbackName,}, index,) => <Image className={`image image-${index + 1}`} source={source} fallbackName={`${fallbackName} ${index + 1}`}/>)}
        </div>;

    const {style = {}, ...otherParametersExcludingStyle} = otherParameters;
    images.forEach(({source,}, index) => style[`--image-${index + 1}`] = `url('${source}')`);
    return <div key={`${partialId} - animated`} id={partialId} className={`${className} animated-image animated-image-${images.length}`} style={style} {...otherParametersExcludingStyle}/>;
}
