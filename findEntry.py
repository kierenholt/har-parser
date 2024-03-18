import os
import json
import pprint

COIN_TO_FIND = "CTK"
ADDITIONAL_SEARCH_TERM = " COIN"

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

    request = list(filter(lambda e:e["name"] == "req",e["request"]["queryString"]))[0]["value"]
    queryObj = json.loads(request)
    keywords = queryObj["comparisonItem"][0]["complexKeywordsRestriction"]["keyword"][0]["value"]
    coin = keywords[:-len(ADDITIONAL_SEARCH_TERM)]
    
    if coin == COIN_TO_FIND:
        break

print("reading from filename: " + lastFile)
print(values)