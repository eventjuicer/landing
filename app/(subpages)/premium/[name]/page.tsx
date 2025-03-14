
import { PremiumItem } from "@/components/sections/premium/premium-item"
import { items } from "@/settings/premium"

export const dynamic = 'force-static'

// export async function generateStaticParams() {
//     return items.map(item => ({
//         name: item.label
//     }))
// }

export default async function PagePremium({params}: {params: {name: string}}) {

    const name = (await params).name
    const item = items.find(item => item.label === name)
    return (
        <div>
            <PremiumItem label={name} media={item?.media || []} ticketId={Number(item?.ticketId || 0)} thumbnail={item?.thumbnail || ""} />
        </div>
    )
  }