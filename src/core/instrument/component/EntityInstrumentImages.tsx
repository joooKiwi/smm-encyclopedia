import './EntityInstrumentImages.scss'

import type {ReactProperties} from 'util/react/ReactProperties'
import type {Instruments}     from 'core/instrument/Instruments'

import Image               from 'app/tools/images/Image'
import {GameStyles}        from 'core/gameStyle/GameStyles'
import {Entities}          from 'core/entity/Entities'
import {ArrayAsCollection} from 'util/collection/ArrayAsCollection'

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
        new ArrayAsCollection(value.reference.entities,)
            .map(it => EntityCompanion.getValueByName(it.americanEnglish,).image,)
            .map(it =>
                new ArrayAsCollection(it.get(SMW,),).getFirstOrNull()
                ?? new ArrayAsCollection(it.get(NSMBU,),).getFirstOrNull()
                ?? new ArrayAsCollection(it.get(SMB3,),).getFirstOrNull()
                ?? new ArrayAsCollection(it.get(SMB,),).getFirstOrNull(),)
            .filterNotNull()
            .map(it =>
                <Image key={`Instrument entity image (${it.path}/${it.name})`} file={it}/>,)
    }</div>
}
