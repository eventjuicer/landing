"use client"

import useSWR from "swr"
import { fetcher } from "@/lib/fetcher"
import { ApiTicketPremiumDTO } from "@/db/ticket/premium-ticket-transformer"

export function useTicket(ticketId: number): ApiTicketPremiumDTO | null {

    const { data, isLoading, error } = useSWR<ApiTicketPremiumDTO[]>(ticketId? "/api/tickets/premium": null, fetcher, {
        revalidateOnFocus: false,
        dedupingInterval: 600,
        refreshInterval: 1000 * 30
    })

    const ticket = data?.find((ticket) => ticket.id === ticketId)

    return isLoading || error || !ticket ? null : ticket
}