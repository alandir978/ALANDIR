export type StockRow = {
  ticker: string
  name: string
  price: string
  change: string
  positive: boolean
  score: number
}

export const tickerShortcuts = [
  'STM',
  'UniCredit',
  'Ferrari',
  'NVIDIA',
  'Apple',
  'Microsoft',
  'Enel',
]

export const italianStocks: StockRow[] = [
  { ticker: 'UCG', name: 'UniCredit', price: '39,12 €', change: '+1,25%', positive: true, score: 7.5 },
  { ticker: 'ENI', name: 'Eni', price: '14,24 €', change: '+0,64%', positive: true, score: 7.1 },
  { ticker: 'ISP', name: 'Intesa Sanpaolo', price: '3,48 €', change: '+1,02%', positive: true, score: 7.4 },
  { ticker: 'ENEL', name: 'Enel', price: '6,18 €', change: '+0,15%', positive: true, score: 6.9 },
  { ticker: 'STM', name: 'STMicroelectronics', price: '64,10 €', change: '+1,20%', positive: true, score: 7.8 },
  { ticker: 'RACE', name: 'Ferrari', price: '515,00 €', change: '-0,30%', positive: false, score: 8.6 },
  { ticker: 'DIA', name: 'Diasorin', price: '98,75 €', change: '-0,45%', positive: false, score: 7.2 },
  { ticker: 'BZU', name: 'Buzzi Unicem', price: '27,54 €', change: '-0,22%', positive: false, score: 6.6 },
  { ticker: 'ATL', name: 'Atlantia', price: '20,35 €', change: '+0,36%', positive: true, score: 6.3 },
  { ticker: 'LDO', name: 'Leonardo', price: '23,18 €', change: '+0,78%', positive: true, score: 7.0 },
]

export type MarketCard = {
  name: string
  value: string
  change: string
  positive: boolean
  flag: string
  series: number[]
}

const up = [4, 5, 4.4, 5.2, 5, 6, 5.6, 6.6, 6.2, 7.2, 7, 8]
const down = [8, 7.4, 7.8, 7, 7.2, 6.4, 6.6, 5.8, 6, 5.4, 5.6, 4.8]

export const marketTabs = ['INDICI', 'MATERIE PRIME', 'VALUTE', 'CRYPTO', 'FUTURES'] as const

export const indices: MarketCard[] = [
  { name: 'FTSE MIB', value: '34.025,45', change: '+0,73%', positive: true, flag: '🇮🇹', series: up },
  { name: 'S&P 500', value: '5.325,16', change: '+0,65%', positive: true, flag: '🇺🇸', series: up },
  { name: 'NASDAQ 100', value: '18.532,63', change: '+0,92%', positive: true, flag: '🇺🇸', series: up },
  { name: 'DAX', value: '18.756,32', change: '+0,64%', positive: true, flag: '🇩🇪', series: up },
  { name: 'NIKKEI 225', value: '38.920,26', change: '-0,11%', positive: false, flag: '🇯🇵', series: down },
  { name: 'EURO STOXX 50', value: '5.025,14', change: '+0,40%', positive: true, flag: '🇪🇺', series: up },
  { name: 'HANG SENG', value: '18.345,31', change: '+1,02%', positive: true, flag: '🇭🇰', series: up },
  { name: 'ORO', value: '2.338,70', change: '+0,45%', positive: true, flag: '🥇', series: up },
  { name: 'PETROLIO (WTI)', value: '78,45', change: '-0,21%', positive: false, flag: '🛢️', series: down },
  { name: 'EUR/USD', value: '1,0824', change: '+0,18%', positive: true, flag: '💱', series: up },
]

export const mostFollowed: StockRow[] = [
  { ticker: 'NVDA', name: 'NVIDIA', price: '225,30 $', change: '+2,12%', positive: true, score: 9.2 },
  { ticker: 'AAPL', name: 'Apple', price: '280,15 $', change: '+0,42%', positive: true, score: 8.1 },
  { ticker: 'MSFT', name: 'Microsoft', price: '415,60 $', change: '+0,31%', positive: true, score: 8.3 },
  { ticker: 'STM', name: 'STM', price: '64,10 €', change: '+1,20%', positive: true, score: 7.8 },
  { ticker: 'UCG', name: 'UniCredit', price: '79,12 €', change: '+0,80%', positive: true, score: 7.5 },
  { ticker: 'RACE', name: 'Ferrari', price: '515,00 €', change: '-0,30%', positive: false, score: 8.6 },
  { ticker: 'ENEL', name: 'Enel', price: '6,18 €', change: '+0,15%', positive: true, score: 6.9 },
]

export type EarningRow = {
  ticker: string
  name: string
  date: string
  score: number
  summary: string
}

export const latestEarnings: EarningRow[] = [
  { ticker: 'NVDA', name: 'NVIDIA', date: '22 Mag 2025', score: 9.5, summary: 'Risultati forti e guidance sopra le attese.' },
  { ticker: 'MU', name: 'Micron', date: '21 Mag 2025', score: 9.0, summary: 'Domanda AI in forte crescita, outlook positivo.' },
  { ticker: 'ORCL', name: 'Oracle', date: '20 Mag 2025', score: 9.3, summary: 'Cloud in accelerazione, utili sopra le aspettative.' },
  { ticker: 'STM', name: 'STM', date: '24 Apr 2025', score: 7.4, summary: 'Domanda in ripresa, ma ancora debole in alcuni segmenti.' },
  { ticker: 'UCG', name: 'UniCredit', date: '15 Apr 2025', score: 8.0, summary: 'Risultati solidi, qualità del credito in miglioramento.' },
]

export type Mover = { name: string; change: string }

export const topGainers: Mover[] = [
  { name: 'Saipem', change: '+6,21%' },
  { name: 'STMicroelectronics', change: '+4,03%' },
  { name: 'Tenaris', change: '+3,45%' },
  { name: 'Pirelli', change: '+2,71%' },
  { name: 'Leonardo', change: '+2,35%' },
]

export const topLosers: Mover[] = [
  { name: 'Buzzi Unicem', change: '-2,98%' },
  { name: 'DiaSorin', change: '-2,41%' },
  { name: 'Moncler', change: '-1,82%' },
  { name: 'Campari', change: '-1,61%' },
  { name: 'Interpump', change: '-1,45%' },
]

export const stmChart: number[] = [
  52, 51, 53, 52.4, 50, 51.5, 49, 52, 54, 53, 55, 57, 56, 58, 57, 60, 59, 62,
  61, 64, 63, 66, 68, 67, 69, 68, 70,
]

/* ------------------------------------------------------------------ */
/* Market switcher data — one mock dataset per market, ready for API.  */
/* ------------------------------------------------------------------ */

export type Market = {
  id: string
  label: string
  liveLabel: string
  flag: string
  stocks: StockRow[]
  followed: StockRow[]
  gainers: Mover[]
  losers: Mover[]
}

const nasdaqStocks: StockRow[] = [
  { ticker: 'NVDA', name: 'NVIDIA', price: '225,30 $', change: '+2,12%', positive: true, score: 9.2 },
  { ticker: 'AAPL', name: 'Apple', price: '280,15 $', change: '+0,42%', positive: true, score: 8.1 },
  { ticker: 'MSFT', name: 'Microsoft', price: '415,60 $', change: '+0,31%', positive: true, score: 8.3 },
  { ticker: 'AMZN', name: 'Amazon', price: '198,40 $', change: '+1,05%', positive: true, score: 8.4 },
  { ticker: 'GOOGL', name: 'Alphabet', price: '176,20 $', change: '-0,28%', positive: false, score: 8.2 },
  { ticker: 'META', name: 'Meta Platforms', price: '524,90 $', change: '+1,64%', positive: true, score: 8.0 },
  { ticker: 'TSLA', name: 'Tesla', price: '248,75 $', change: '-1,12%', positive: false, score: 6.8 },
  { ticker: 'AVGO', name: 'Broadcom', price: '1.412,00 $', change: '+0,88%', positive: true, score: 8.5 },
  { ticker: 'AMD', name: 'Adv. Micro Devices', price: '162,30 $', change: '+2,40%', positive: true, score: 7.6 },
  { ticker: 'NFLX', name: 'Netflix', price: '628,10 $', change: '-0,52%', positive: false, score: 7.9 },
]

const spStocks: StockRow[] = [
  { ticker: 'BRK.B', name: 'Berkshire Hathaway', price: '452,10 $', change: '+0,34%', positive: true, score: 8.7 },
  { ticker: 'JPM', name: 'JPMorgan Chase', price: '212,45 $', change: '+0,61%', positive: true, score: 8.0 },
  { ticker: 'V', name: 'Visa', price: '289,30 $', change: '+0,22%', positive: true, score: 8.3 },
  { ticker: 'XOM', name: 'Exxon Mobil', price: '118,75 $', change: '-0,44%', positive: false, score: 7.1 },
  { ticker: 'JNJ', name: 'Johnson & Johnson', price: '154,20 $', change: '+0,12%', positive: true, score: 7.4 },
  { ticker: 'PG', name: 'Procter & Gamble', price: '167,90 $', change: '-0,18%', positive: false, score: 7.2 },
  { ticker: 'UNH', name: 'UnitedHealth', price: '498,60 $', change: '+0,76%', positive: true, score: 7.8 },
  { ticker: 'HD', name: 'Home Depot', price: '362,40 $', change: '+0,55%', positive: true, score: 7.5 },
  { ticker: 'MA', name: 'Mastercard', price: '472,15 $', change: '+0,40%', positive: true, score: 8.2 },
  { ticker: 'KO', name: 'Coca-Cola', price: '63,80 $', change: '-0,09%', positive: false, score: 7.0 },
]

const daxStocks: StockRow[] = [
  { ticker: 'SAP', name: 'SAP', price: '198,40 €', change: '+1,12%', positive: true, score: 8.4 },
  { ticker: 'SIE', name: 'Siemens', price: '178,25 €', change: '+0,64%', positive: true, score: 7.9 },
  { ticker: 'ALV', name: 'Allianz', price: '286,70 €', change: '+0,28%', positive: true, score: 7.6 },
  { ticker: 'DTE', name: 'Deutsche Telekom', price: '24,18 €', change: '-0,22%', positive: false, score: 7.3 },
  { ticker: 'MBG', name: 'Mercedes-Benz', price: '64,90 €', change: '-0,55%', positive: false, score: 6.9 },
  { ticker: 'BMW', name: 'BMW', price: '88,40 €', change: '+0,33%', positive: true, score: 7.0 },
  { ticker: 'BAS', name: 'BASF', price: '46,12 €', change: '-0,41%', positive: false, score: 6.5 },
  { ticker: 'VOW3', name: 'Volkswagen', price: '102,30 €', change: '+0,18%', positive: true, score: 6.4 },
  { ticker: 'ADS', name: 'Adidas', price: '224,80 €', change: '+1,45%', positive: true, score: 7.2 },
  { ticker: 'DBK', name: 'Deutsche Bank', price: '16,74 €', change: '+0,82%', positive: true, score: 6.8 },
]

const cacStocks: StockRow[] = [
  { ticker: 'MC', name: 'LVMH', price: '672,40 €', change: '+0,92%', positive: true, score: 8.5 },
  { ticker: 'OR', name: "L'Oréal", price: '398,15 €', change: '+0,38%', positive: true, score: 8.1 },
  { ticker: 'TTE', name: 'TotalEnergies', price: '62,80 €', change: '-0,34%', positive: false, score: 7.4 },
  { ticker: 'SU', name: 'Schneider Electric', price: '224,60 €', change: '+1,02%', positive: true, score: 7.9 },
  { ticker: 'AIR', name: 'Airbus', price: '158,90 €', change: '+0,71%', positive: true, score: 8.0 },
  { ticker: 'SAN', name: 'Sanofi', price: '92,45 €', change: '-0,15%', positive: false, score: 7.2 },
  { ticker: 'BNP', name: 'BNP Paribas', price: '68,30 €', change: '+0,56%', positive: true, score: 7.1 },
  { ticker: 'AI', name: 'Air Liquide', price: '178,20 €', change: '+0,24%', positive: true, score: 7.5 },
  { ticker: 'KER', name: 'Kering', price: '342,70 €', change: '-1,08%', positive: false, score: 6.7 },
  { ticker: 'DG', name: 'Vinci', price: '112,40 €', change: '+0,44%', positive: true, score: 7.3 },
]

const stoxxStocks: StockRow[] = [
  { ticker: 'ASML', name: 'ASML Holding', price: '892,30 €', change: '+1,34%', positive: true, score: 8.8 },
  { ticker: 'MC', name: 'LVMH', price: '672,40 €', change: '+0,92%', positive: true, score: 8.5 },
  { ticker: 'SAP', name: 'SAP', price: '198,40 €', change: '+1,12%', positive: true, score: 8.4 },
  { ticker: 'NESN', name: 'Nestlé', price: '88,90 CHF', change: '-0,12%', positive: false, score: 7.6 },
  { ticker: 'OR', name: "L'Oréal", price: '398,15 €', change: '+0,38%', positive: true, score: 8.1 },
  { ticker: 'SIE', name: 'Siemens', price: '178,25 €', change: '+0,64%', positive: true, score: 7.9 },
  { ticker: 'TTE', name: 'TotalEnergies', price: '62,80 €', change: '-0,34%', positive: false, score: 7.4 },
  { ticker: 'IBE', name: 'Iberdrola', price: '12,84 €', change: '+0,52%', positive: true, score: 7.2 },
  { ticker: 'ENEL', name: 'Enel', price: '6,18 €', change: '+0,15%', positive: true, score: 6.9 },
  { ticker: 'AIR', name: 'Airbus', price: '158,90 €', change: '+0,71%', positive: true, score: 8.0 },
]

const favouritesStocks: StockRow[] = [
  { ticker: 'STM', name: 'STMicroelectronics', price: '64,10 €', change: '+1,20%', positive: true, score: 7.8 },
  { ticker: 'NVDA', name: 'NVIDIA', price: '225,30 $', change: '+2,12%', positive: true, score: 9.2 },
  { ticker: 'RACE', name: 'Ferrari', price: '515,00 €', change: '-0,30%', positive: false, score: 8.6 },
  { ticker: 'AAPL', name: 'Apple', price: '280,15 $', change: '+0,42%', positive: true, score: 8.1 },
  { ticker: 'MC', name: 'LVMH', price: '672,40 €', change: '+0,92%', positive: true, score: 8.5 },
  { ticker: 'UCG', name: 'UniCredit', price: '39,12 €', change: '+1,25%', positive: true, score: 7.5 },
  { ticker: 'ASML', name: 'ASML Holding', price: '892,30 €', change: '+1,34%', positive: true, score: 8.8 },
]

function topByChange(rows: StockRow[]): Mover[] {
  const parse = (c: string) => parseFloat(c.replace('%', '').replace(',', '.'))
  return [...rows]
    .sort((a, b) => parse(b.change) - parse(a.change))
    .slice(0, 5)
    .map((r) => ({ name: r.name, change: r.change }))
}

function bottomByChange(rows: StockRow[]): Mover[] {
  const parse = (c: string) => parseFloat(c.replace('%', '').replace(',', '.'))
  return [...rows]
    .sort((a, b) => parse(a.change) - parse(b.change))
    .slice(0, 5)
    .map((r) => ({ name: r.name, change: r.change }))
}

export const markets: Market[] = [
  {
    id: 'MIB40',
    label: 'MIB40',
    liveLabel: 'MIB40 LIVE 🔴',
    flag: '🇮🇹',
    stocks: italianStocks,
    followed: mostFollowed,
    gainers: topGainers,
    losers: topLosers,
  },
  {
    id: 'NASDAQ100',
    label: 'NASDAQ 100',
    liveLabel: 'NASDAQ 100 LIVE',
    flag: '🇺🇸',
    stocks: nasdaqStocks,
    followed: nasdaqStocks.slice(0, 7),
    gainers: topByChange(nasdaqStocks),
    losers: bottomByChange(nasdaqStocks),
  },
  {
    id: 'SP500',
    label: 'S&P 500',
    liveLabel: 'S&P 500 LIVE',
    flag: '🇺🇸',
    stocks: spStocks,
    followed: spStocks.slice(0, 7),
    gainers: topByChange(spStocks),
    losers: bottomByChange(spStocks),
  },
  {
    id: 'DAX',
    label: 'DAX',
    liveLabel: 'DAX LIVE',
    flag: '🇩🇪',
    stocks: daxStocks,
    followed: daxStocks.slice(0, 7),
    gainers: topByChange(daxStocks),
    losers: bottomByChange(daxStocks),
  },
  {
    id: 'CAC40',
    label: 'CAC 40',
    liveLabel: 'CAC 40 LIVE',
    flag: '🇫🇷',
    stocks: cacStocks,
    followed: cacStocks.slice(0, 7),
    gainers: topByChange(cacStocks),
    losers: bottomByChange(cacStocks),
  },
  {
    id: 'STOXX50',
    label: 'EURO STOXX 50',
    liveLabel: 'EURO STOXX 50 LIVE',
    flag: '🇪🇺',
    stocks: stoxxStocks,
    followed: stoxxStocks.slice(0, 7),
    gainers: topByChange(stoxxStocks),
    losers: bottomByChange(stoxxStocks),
  },
  {
    id: 'PREFERITI',
    label: 'PREFERITI',
    liveLabel: 'PREFERITI LIVE',
    flag: '⭐',
    stocks: favouritesStocks,
    followed: favouritesStocks,
    gainers: topByChange(favouritesStocks),
    losers: bottomByChange(favouritesStocks),
  },
]
