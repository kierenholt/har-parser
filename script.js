//MAKE SURE YOU HAVE 
//WORLDWIDE
//past day


ADDITIONAL_SEARCH_TERM = " COIN"
const search = async function (coin) {
    return new Promise((res, rej) => {

        document.getElementsByTagName('input')[0].dispatchEvent(new FocusEvent("focus"));
        document.getElementsByTagName('input')[0].value = coin + ADDITIONAL_SEARCH_TERM;
        document.getElementsByTagName('input')[0].dispatchEvent(new KeyboardEvent("keydown", {
            which: 9
        }));
        setTimeout(res, 10000);

    });

}


coins = ["BTC","ETH","BNB","NEO","LTC","QTUM","ADA","XRP","EOS","TUSD","IOTA","XLM","ONT","TRX","ETC","ICX","NULS","VET","USDC","LINK","WAVES","ONG","HOT","ZIL","ZRX","FET","BAT","ZEC","IOST","CELR","DASH","OMG","THETA","ENJ","MATIC","ATOM","TFUEL","ONE","FTM","ALGO","DOGE","DUSK","ANKR","WIN","COS","MTL","DENT","KEY","DOCK","WAN","FUN","CVC","CHZ","BAND","XTZ","REN","RVN","HBAR","NKN","STX","KAVA","ARPA","IOTX","RLC","CTXC","BCH","TROY","VITE","FTT","EUR","OGN","DREP","WRX","LSK","BNT","LTO","MBL","COTI","STPT","DATA","SOL","CTSI","HIVE","CHR","ARDR","MDT","STMX","KNC","LRC","PNT","COMP","SC","ZEN","SNX","VTHO","DGB","SXP","MKR","DCR","STORJ","MANA","YFI","BAL","BLZ","IRIS","KMD","JST","CRV","SAND","OCEAN","NMR","DOT","LUNA","RSR","PAXG","WNXM","TRB","SUSHI","KSM","EGLD","DIA","RUNE","FIO","UMA","BEL","WING","UNI","OXT","SUN","AVAX","FLM","ORN","UTK","XVS","ALPHA","AAVE","NEAR","FIL","INJ","AUDIO","CTK","AKRO","AXS","HARD","STRAX","UNFI","ROSE","AVA","XEM","SKL","GRT","JUV","PSG","1INCH","REEF","OG","ATM","ASR","CELO","RIF","TRU","CKB","TWT","FIRO","LIT","SFP","DODO","CAKE","ACM","BADGER","FIS","OM","POND","DEGO","ALICE","LINA","PERP","SUPER","CFX","TKO","PUNDIX","TLM","BAR","FORTH","BAKE","BURGER","SLP","SHIB","ICP","AR","POLS","MDX","MASK","LPT","XVG","ATA","GTC","ERN","KLAY","PHA","BOND","MLN","DEXE","C98","CLV","QNT","FLOW","MINA","RAY","FARM","ALPACA","QUICK","MBOX","FOR","REQ","GHST","WAXP","GNO","XEC","ELF","DYDX","IDEX","VIDT","USDP","GALA","ILV","YGG","SYS","DF","FIDA","FRONT","CVP","AGLD","RAD","BETA","RARE","LAZIO","CHESS","ADX","AUCTION","DAR","BNX","MOVR","CITY","ENS","KP3R","QI","PORTO","POWR","VGX","JASMY","AMP","PYR","RNDR","ALCX","SANTOS","BICO","FLUX","FXS","VOXEL","HIGH","CVX","PEOPLE","OOKI","SPELL","JOE","ACH","IMX","GLMR","LOKA","SCRT","API3","BTTC","ACA","XNO","WOO","ALPINE","T","ASTR","GMT","KDA","APE","BSW","BIFI","STEEM","MOB","NEXO","REI","GAL","LDO","EPX","OP","LEVER","STG","LUNC","GMX","POLYX","APT","OSMO","HFT","PHB","HOOK","MAGIC","HIFI","RPL","PROS","AGIX","GNS","SYN","VIB","SSV","LQTY","AMB","USTC","GAS","GLM","PROM","QKC","UFT","ID","ARB","LOOM","OAX","RDNT","WBTC","EDU","SUI","AERGO","PEPE","FLOKI","AST","SNT","COMBO","MAV","PENDLE","ARKM","WBETH","WLD","FDUSD","SEI","CYBER","ARK","CREAM","GFT","IQ","NTRN","TIA","MEME","ORDI","BEAMX","PIVX","VIC","BLUR","VANRY","AEUR","JTO","1000SATS","BONK","ACE","NFP","AI","XAI","MANTA","ALT","JUP","PYTH","RONIN","DYM","PIXEL","STRK","PORTAL","PDA","AXL","WIF","METIS","AEVO","BOME"];

p = Promise.resolve();
for (let coin of coins) {
    p = p.then(() => search(coin));
}
