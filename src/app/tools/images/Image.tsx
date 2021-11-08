import type {ImageProperties} from './properties/ImageProperties';

export default function Image({source, fallbackName, ...imageProperties}: ImageProperties,) {
    return <img src={source} alt={fallbackName} {...imageProperties}/>;
}
