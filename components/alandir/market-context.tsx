'use client'

import { createContext, useContext, useMemo, useState } from 'react'
import { markets, type Market } from '@/lib/alandir-data'

type MarketContextValue = {
  market: Market
  marketId: string
  setMarketId: (id: string) => void
}

const MarketContext = createContext<MarketContextValue | null>(null)

export function MarketProvider({ children }: { children: React.ReactNode }) {
  const [marketId, setMarketId] = useState('MIB40')

  const value = useMemo<MarketContextValue>(() => {
    const market = markets.find((m) => m.id === marketId) ?? markets[0]
    return { market, marketId, setMarketId }
  }, [marketId])

  return <MarketContext.Provider value={value}>{children}</MarketContext.Provider>
}

export function useMarket() {
  const ctx = useContext(MarketContext)
  if (!ctx) {
    throw new Error('useMarket must be used within a MarketProvider')
  }
  return ctx
}
