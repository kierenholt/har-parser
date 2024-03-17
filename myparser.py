import os
import json
import pprint

PICKUP_CUTOFF = 10
ADDITIONAL_SEARCH_TERM = " COIN"
def getPickupRatio(arr):
    s = sum(arr)
    last = sum(arr[-PICKUP_CUTOFF:])
    if s == 0:
        return 0
    return round(last / s * 100)
#180 x 8 min intervals

def coinToUrl(coin):
    return f'https://www.tradingview.com/symbols/{coin}USDT/'


dir = 'C:\\Users\\KierenHolt\\Downloads'
files = os.listdir(dir)
files = list(filter(lambda f: f.endswith('.har'),files))
for f in files: 
    lastFile = f
file = open(dir + "\\" + lastFile, "r")
contents = file.read()

harobj = json.loads(contents)

entries = harobj["log"]["entries"]
ret = []
for e in entries:
    response = e["response"]["content"]["text"]
    jsonStr = response[6:]
    parsed = json.loads(jsonStr)
    values = [t["value"][0] for t in parsed["default"]["timelineData"]]
    pickupRatio = getPickupRatio(values)

    request = list(filter(lambda e:e["name"] == "req",e["request"]["queryString"]))[0]["value"]
    queryObj = json.loads(request)
    keywords = queryObj["comparisonItem"][0]["complexKeywordsRestriction"]["keyword"][0]["value"]
    coin = keywords[:-len(ADDITIONAL_SEARCH_TERM)]
    ret.append([coinToUrl(coin), pickupRatio])

ret = list(sorted(ret, key=lambda item: item[1]))
print("reading from filename: " + lastFile)
pprint.pprint(ret[-10:])