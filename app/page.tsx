import { SiteHeader } from '@/components/alandir/site-header'
import { Hero } from '@/components/alandir/hero'
import { InfoCards } from '@/components/alandir/info-cards'
import { StockSpotlight } from '@/components/alandir/stock-spotlight'
import { ItalianStocks } from '@/components/alandir/italian-stocks'
import { MarketsLive } from '@/components/alandir/markets-live'
import { MostFollowed } from '@/components/alandir/most-followed'
import { LatestEarnings } from '@/components/alandir/latest-earnings'
import { TopMovers } from '@/components/alandir/top-movers'
import { CtaBanner } from '@/components/alandir/cta-banner'
import { SiteFooter } from '@/components/alandir/site-footer'
import { MarketProvider } from "@/components/alandir/market-context"

export default function Page() {
  return (
    <MarketProvider>
  <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <InfoCards />

      {/* STM spotlight + Italian stocks */}
      <section className="mx-auto max-w-[1400px] px-6 py-6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.55fr_1fr]">
          <StockSpotlight />
          <ItalianStocks />
        </div>
      </section>

      {/* Markets live + most followed */}
      <section className="mx-auto max-w-[1400px] px-6 py-6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.45fr_1fr]">
          <MarketsLive />
          <MostFollowed />
        </div>
      </section>

      {/* Latest earnings + top movers */}
      <section className="mx-auto max-w-[1400px] px-6 py-6">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.45fr_1fr]">
          <LatestEarnings />
          <TopMovers />
        </div>
      </section>

      <CtaBanner />
      <SiteFooter />
    </main>
  )</MarketProvider>

 )
}
