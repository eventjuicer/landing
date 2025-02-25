import { items as defaultItems } from '@/settings/premium'
import Image from 'next/image'
import {Gradient} from '@/components/hero/gradient'
import Link from 'next/link'
import {t} from '@/scripts/translate'
import { Button } from '@/components/ui/button'
import { PremiumItem } from '@/types'
import {Skeleton} from '@/components/ui/skeleton'

interface PremiumListProps {
    items: PremiumItem[];
    baseLabel: string;
    excludeLabel?: string;
}

export function PremiumList({items=defaultItems, baseLabel="premium", excludeLabel}: PremiumListProps) {
    return (
        <div className="md:ml-[25vw] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:w-[70vw]">
            {items.map((item, index) => {

                if (excludeLabel && item.label === excludeLabel) {
                    return null;
                }

                return (
                    <figure
                        key={item.ticketId}
                        className="relative aspect-square w-full group"
                    >
                        {/* <Link href={`/premium/${item.label}`} className="block w-full h-full"> */}
                            {item.thumbnail ? <Image 
                                src={item.thumbnail} 
                                alt={item.label} 
                                fill 
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                quality={100}
                            /> : <Skeleton className="w-full h-full" />}
                            
                            <Gradient 
                                variation={index % 3} 
                                className="absolute bottom-[30%] right-0 w-[100px] h-[100px] opacity-100 group-hover:opacity-50 transition-all duration-300" 
                            />
    
                            <figcaption className="absolute inset-0 flex flex-col items-start justify-end p-5 bg-gradient-to-t from-black/90 via-black/10 to-transparent">
                                <div className="text-white">
                                    <h3 className="text-2xl md:text-[2rem] font-thin tracking-tighter">
                                        {t(`premium.${item.label}.title`)}
                                    </h3>
                                    <div className="text-sm mt-1">PRICE</div>
                                    <div className="flex justify-end mt-2">
                                        <Button asChild>
                                            <Link href={`/premium/${item.label}`}>asd</Link>
                                        </Button>
                                    </div>
                                </div>
    
                               
                            </figcaption>
                        {/* </Link> */}
                    </figure>
                )
            })}
        </div>
    )
}

//  <VideoYoutube url={item.videoSrc} />
//