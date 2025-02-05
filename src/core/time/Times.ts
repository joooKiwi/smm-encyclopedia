import type {CollectionHolder} from '@joookiwi/collection'
import type {Singleton}        from '@joookiwi/enumerable'
import type {Array, Nullable}  from '@joookiwi/type'
import {isArray}               from '@joookiwi/collection'
import {Enum}                  from '@joookiwi/enumerable'

import type {ClassWithEnglishName}                                                                 from 'core/ClassWithEnglishName'
import type {PropertyGetter, PropertyReferenceGetter}                                              from 'core/PropertyGetter'
import type {Entity}                                                                               from 'core/entity/Entity'
import type {TimeProperty}                                                                         from 'core/entity/properties/time/TimeProperty'
import type {CompanionEnumDeclaration_Times}                                                       from 'core/time/Times.companionEnum.declaration'
import type {GroupUrl, Names, Ordinals, PossibleEnglishName, PossibleSimpleImagePath, PossibleUrl} from 'core/time/Times.types'
import type {TimeImageFile}                                                                        from 'core/time/file/TimeImageFile'
import type {ClassUsedInRoute}                                                                     from 'route/ClassUsedInRoute'
import type {ClassWithImageFile}                                                                   from 'util/file/image/ClassWithImageFile'

import {timeImage}                                              from 'core/time/file/fileCreator'
import {StringContainer}                                        from 'util/StringContainer'
import {Empty}                                                  from 'util/emptyVariables'
import {getValueByEnglishName, getValueByUrlValue}              from 'util/utilitiesMethods'
import {CompanionEnumWithCurrentAndSetCurrentEventAsCollection} from 'util/enumerable/companion/CompanionEnumWithCurrentAndSetCurrentEventAsCollection'
import {ArrayAsCollection}                                      from 'util/collection/ArrayAsCollection'

import EMPTY_ARRAY = Empty.EMPTY_ARRAY

export abstract class Times<const NAME extends PossibleEnglishName = PossibleEnglishName,
    const URL extends PossibleUrl = PossibleUrl,
    const IMAGE_NAME extends PossibleSimpleImagePath = PossibleSimpleImagePath, >
    extends Enum<Ordinals, Names>
    implements ClassWithEnglishName<NAME>,
        ClassWithImageFile<TimeImageFile<IMAGE_NAME>>,
        ClassUsedInRoute<URL, URL>,
        PropertyReferenceGetter<Entity, CollectionHolder<Entity>>,
        PropertyGetter<TimeProperty> {

    //region -------------------- Enum instances --------------------

    public static readonly DAY =   new class Times_Day extends Times<'Day', 'day', 'Sun'> {

        public override get(property: TimeProperty,) {
            return property.isInDayTheme
        }

        public override getReference(entity: Entity,) {
            return entity.referencesInDayTheme
        }

    }('Day', 'day', 'Sun',)
    public static readonly NIGHT = new class Times_Night extends Times<'Night', 'night', 'Moon'> {

        public override get(property: TimeProperty,) {
            return property.isInNightTheme
        }

        public override getReference(entity: Entity,) {
            return entity.referencesInNightTheme
        }

    }('Night', 'night', 'Moon',)

    //endregion -------------------- Enum instances --------------------
    //region -------------------- Companion enum --------------------

    public static readonly CompanionEnum: Singleton<CompanionEnumDeclaration_Times> = class CompanionEnum_Times
        extends CompanionEnumWithCurrentAndSetCurrentEventAsCollection<Times, typeof Times>
        implements CompanionEnumDeclaration_Times {

        //region -------------------- Singleton usage --------------------

        static #instance?: CompanionEnum_Times

        private constructor() {
            super(Times,)
        }

        public static get get() {
            return this.#instance ??= new CompanionEnum_Times()
        }

        //endregion -------------------- Singleton usage --------------------
        //region -------------------- Fields --------------------

        public readonly URL_NAME_SEPARATOR = '/'
        public readonly NAME_ARGUMENT_SEPARATOR = ','

        // public readonly URL_REGEX = /.*\/time-((day|night)(,(day|night))*|(all))(\/|$)/i
        // public readonly SINGLE_URL_REGEX = /.*\/time-(day|night)(\/|$)/i
        public readonly PREFIX = '/time-'
        public readonly PREFIX_WITHOUT_SLASH = 'time-'
        public readonly ALL_PREFIX_GROUP = '/time-all/'

        //endregion -------------------- Fields --------------------
        //region -------------------- Methods --------------------

        public getValueByName(value: Nullable<| Times | string>,): Times {
            return getValueByEnglishName(value, this,)
        }

        public getValueByUrl(value: Nullable<|Times | string>,): Times {
            return getValueByUrlValue(value, this,)
        }


        public findInUrl(url: string,): Array<Times> {
            const lowerCasedUrl = url.toLowerCase()
            if (lowerCasedUrl.includes(this.ALL_PREFIX_GROUP,))
                return Times.ALL

            const prefix = this.PREFIX
            if (!lowerCasedUrl.includes(prefix,))
                return EMPTY_ARRAY

            /** All the possible {@link Times.urlValue} that could be found in the url */
            const valuesFound = new ArrayAsCollection(lowerCasedUrl.substring(lowerCasedUrl.indexOf(prefix,) + prefix.length,).split(this.URL_NAME_SEPARATOR, 1,),).getFirst()
            const withDay = valuesFound.includes('day',)
            const withNight = valuesFound.includes('night',)

            if (withDay)
                if (withNight)
                    return Times.ALL
                else
                    return Times.DAY_ONLY
            if (withNight)
                return Times.NIGHT_ONLY
            return EMPTY_ARRAY
        }

        public findInName(name: string,): Array<Times> {
            const startingIndex = name.indexOf('Time=',)
            if (startingIndex === -1)
                return EMPTY_ARRAY

            const nameFromGame = name.substring(startingIndex + 5,)
            if (nameFromGame === 'all)' || nameFromGame.startsWith('all ',))
                return Times.ALL

            if (nameFromGame === 'day)' || nameFromGame.startsWith('day ',))
                return Times.DAY_ONLY
            if (nameFromGame === 'night)' || nameFromGame.startsWith('night ',))
                return Times.NIGHT_ONLY

            throw new ReferenceError(`No times have a name associated to the name "${name}".`,)
        }



        public getGroupUrl(times: | Array<Times> | CollectionHolder<Times>,): GroupUrl {
            const times2 = isArray(times,) ? new ArrayAsCollection(times,) : times
            const withDay = times2.has(Times.DAY,)
            const withNight = times2.has(Times.NIGHT,)

            if (withDay)
                if (withNight)
                    return 'all'
                else
                    return 'day'
            if (withNight)
                return 'night'
            throw new ReferenceError('No time group url value is findable from empty array or collection.',)
        }

        //endregion -------------------- Methods --------------------

    }

    //endregion -------------------- Companion enum --------------------
    //region -------------------- Fields --------------------

    readonly #englishName
    readonly #url
    readonly #imageName
    #imageFile?: TimeImageFile<IMAGE_NAME>

    //endregion -------------------- Fields --------------------
    //region -------------------- Constructor --------------------

    private constructor(englishName: NAME, url: URL, imagePath: IMAGE_NAME,) {
        super()
        this.#englishName = new StringContainer(englishName,)
        this.#url = url
        this.#imageName = imagePath
    }

    //endregion -------------------- Constructor --------------------
    //region -------------------- Getter methods --------------------

    public get englishName(): NAME {
        return this.#englishName.get
    }

    public get englishNameInHtml(): string {
        return this.#englishName.getInHtml
    }

    public get urlValue(): URL {
        return this.#url
    }

    public get urlName(): URL {
        return this.#url
    }

    public get imageName(): IMAGE_NAME {
        return this.#imageName
    }

    public get imageFile(): TimeImageFile<IMAGE_NAME> {
        return this.#imageFile ??= timeImage(this.imageName, this.englishName,)
    }

    //endregion -------------------- Getter methods --------------------
    //region -------------------- Methods --------------------

    public abstract get(property: TimeProperty,): boolean

    public abstract getReference(entity: Entity,): CollectionHolder<Entity>

    //endregion -------------------- Methods --------------------

}

export namespace Times {// eslint-disable-line @typescript-eslint/no-namespace

    /** The companion instance of a {@link Times} */
    export const Companion = Times.CompanionEnum.get

    /** All the {@link Times} */
    export const ALL = [Times.DAY, Times.NIGHT,] as const

    export const DAY_ONLY = [Times.DAY,] as const
    export const NIGHT_ONLY = [Times.NIGHT,] as const

    export const EVERY_TIME = [ALL, DAY_ONLY, NIGHT_ONLY,] as const

}

// @ts-ignore: TODO remove this test variable when the application will be complete
(window.test ??= {}).Times = Times
