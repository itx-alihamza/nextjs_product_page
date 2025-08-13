import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { useDotButton } from './EmblaCarouselDotButton'
import './Carousal.css'
import Image from 'next/image';

interface Props {
    className?: string;
    onDotsData?: (data: { selectedIndex: number; scrollSnaps: number[]; onDotButtonClick: (index: number) => void }) => void;
}

const Carousal = ({ className, onDotsData }: Props) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

    const carousalPics = ['/images/carouPicDes.png', '/images/sec_3_bg_des.png', '/images/carouPicDes.png', '/images/sec_3_bg_des.png']

    //Next/Prev buttons
    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])
    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes())
        }
    }, [emblaApi])

    useEffect(() => {
        if (onDotsData) {
            onDotsData({ selectedIndex, scrollSnaps, onDotButtonClick });
        }
    }, [onDotsData, selectedIndex, scrollSnaps, onDotButtonClick])

    return (
        <div className="embla relative w-full h-full">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {carousalPics.map((items: string, i: number) => (
                        <div key={i} className="embla__slide">
                            <div className="relative w-full h-full">
                                <Image
                                    src={items}
                                    alt='productPics'
                                    fill
                                    className='object-cover'
                                    sizes="100vw"
                                    unoptimized
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="absolute group flex justify-center items-center w-[clamp(40px,3vw+30px,80px)] h-[clamp(40px,3vw+30px,80px)] border rounded-full top-1/2 left-[4%] -translate-y-1/2 text-black font-bold embla__prev"
                onClick={scrollPrev}
            >
                <Image
                    className='w-4 h-7 sm:w-6 sm:h-9 md:w-8 md:h-12 group-hover:'
                    width={400}
                    height={400}
                    alt='prev'
                    src={'/assets/carouLeft.png'}
                />
            </button>
            {/* ✅ FIXED: Next button with correct class name and positioning */}
            <button
                className="absolute flex justify-center items-center w-[clamp(40px,3vw+30px,80px)] h-[clamp(40px,3vw+30px,80px)] border rounded-full top-1/2 right-[4%] -translate-y-1/2 text-black font-bold embla__next"
                onClick={scrollNext}
            >
                <Image
                    className='w-4 h-7 sm:w-6 sm:h-9 md:w-8 md:h-12'
                    width={400}
                    height={400}
                    alt='next'
                    src={'/assets/carouRight.png'}
                />
            </button>
        </div>
    )
}

export default Carousal