import './EntityInstrumentImages.scss'

import {getFirstOrNullByArray, mapByArray} from '@joookiwi/collection'

import type {ReactProperties} from 'util/react/ReactProperties'
import type {Instruments}     from 'core/instrument/Instruments'

import Image        from 'app/tools/images/Image'
import {GameStyles} from 'core/gameStyle/GameStyles'
import {Entities}   from 'core/entity/Entities'

import EntityCompanion = Entities.Companion
import NSMBU =           GameStyles.NSMBU
import SMB =             GameStyles.SMB
import SMB3 =            GameStyles.SMB3
import SMW =             GameStyles.SMW

interface EntityInstrumentImagesProperties
    extends ReactProperties {

    readonly value: Instruments

}

export default function EntityInstrumentImages({value,}: EntityInstrumentImagesProperties,) {
    return <div className="instrument-entity-images-container text-center mb-1">{
        mapByArray(value.reference.entities,
            it => EntityCompanion.getValueByName(it.americanEnglish,).image,)
            .map(it => getFirstOrNullByArray(it.get(SMW,),)
                ?? getFirstOrNullByArray(it.get(NSMBU,),)
                ?? getFirstOrNullByArray(it.get(SMB3,),)
                ?? getFirstOrNullByArray(it.get(SMB,),),)
            .filterNotNull()
            .map(it =>
                <Image key={`Instrument entity image (${it.path}/${it.name})`} file={it}/>,)
    }</div>
}
