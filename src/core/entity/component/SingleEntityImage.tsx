import type {Entities}            from 'core/entity/Entities'
import type {GameStyleCollection} from 'util/collection/GameStyleCollection'
import type {ReactProperties}     from 'util/react/ReactProperties'

import Image               from 'app/tools/images/Image'
import {GameStyles}        from 'core/gameStyle/GameStyles'
import {ArrayAsCollection} from 'util/collection/ArrayAsCollection'

import NSMBU = GameStyles.NSMBU
import SMB =   GameStyles.SMB
import SMB3 =  GameStyles.SMB3
import SMW =   GameStyles.SMW
import SM3DW = GameStyles.SM3DW

interface SingleEntityImageProperties
    extends ReactProperties {

    /** The reference to retrieve its first image */
    readonly reference: Entities

    /** The {@link GameStyles} to display or not a selected image */
    readonly gameStyles: GameStyleCollection

}

/**
 * Get the first image present on each {@link GameStyles game style} present in the {@link reference} received
 *
 * @param reference  The reference to retrieve its first image
 * @param gameStyles The collection to display or not a selected image in a {@link GameStyles game style}
 * @reactComponent
 */
export default function SingleEntityImage({reference, gameStyles,}:SingleEntityImageProperties,) {
    if (gameStyles.isEmpty)
        return <div className="singleEntityImage empty-singleEntityImage"/>
    if (gameStyles.size === 1)
        if (gameStyles.hasSmb)
            return <div className="singleEntityImage unique-singleEntityImage smb-singleEntityImage">
                <Image file={new ArrayAsCollection(reference.image.get(SMB,),).getFirstOrNull()} className="entity-image"/>
            </div>
        else if (gameStyles.hasSmb3)
            return <div className="singleEntityImage unique-singleEntityImage smb3-singleEntityImage">
                <Image file={new ArrayAsCollection(reference.image.get(SMB3,),).getFirstOrNull()} className="entity-image"/>
            </div>
        else if (gameStyles.hasSmw)
            return <div className="singleEntityImage unique-singleEntityImage smw-singleEntityImage">
                <Image file={new ArrayAsCollection(reference.image.get(SMW,),).getFirstOrNull()} className="entity-image"/>
            </div>
        else if (gameStyles.hasNsmbu)
            return <div className="singleEntityImage unique-singleEntityImage nsmbu-singleEntityImage">
                <Image file={new ArrayAsCollection(reference.image.get(NSMBU,),).getFirstOrNull()} className="entity-image"/>
            </div>
        else
            return <div className="singleEntityImage unique-singleEntityImage sm3dw-singleEntityImage">
                <Image file={new ArrayAsCollection(reference.image.get(SM3DW,),).getFirstOrNull()} className="entity-image"/>
            </div>
    return <div className="singleEntityImage mixedGameStyle-singleEntityImage">
        {gameStyles.hasSmb ? <Image file={new ArrayAsCollection(reference.image.get(SMB,),).getFirstOrNull()} className="entity-image"/> : null}
        {gameStyles.hasSmb3 ? <Image file={new ArrayAsCollection(reference.image.get(SMB3,),).getFirstOrNull()} className="entity-image"/> : null}
        {gameStyles.hasSmw ? <Image file={new ArrayAsCollection(reference.image.get(SMW,),).getFirstOrNull()} className="entity-image"/> : null}
        {gameStyles.hasNsmbu ? <Image file={new ArrayAsCollection(reference.image.get(NSMBU,),).getFirstOrNull()} className="entity-image"/> : null}
        {gameStyles.hasSm3dw ? <Image file={new ArrayAsCollection(reference.image.get(SM3DW,),).getFirstOrNull()} className="entity-image"/> : null}
    </div>

}
