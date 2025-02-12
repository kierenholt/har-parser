//MAKE SURE YOU HAVE 
//WORLDWIDE
//past day

const search = async function (keyword) {
    return new Promise((res, rej) => {
        console.log("search entered at " + new Date().toLocaleTimeString());
        document.getElementsByTagName('input')[0].dispatchEvent(new FocusEvent("focus"));
        document.getElementsByTagName('input')[0].value = keyword;
        document.getElementsByTagName('input')[0].dispatchEvent(new KeyboardEvent("keydown", {
            which: 9
        }));
        nextKeyword = keyword == "USDT" ? "USDC" : "USDT";
        nextInterval = 300 + Math.random() * 120;
        setTimeout(() => search(nextKeyword), nextInterval * 1000);
    });
}

let oldXHROpen = window.XMLHttpRequest.prototype.open;
window.XMLHttpRequest.prototype.open = function (method, url, async, user, password) {

    this.addEventListener('load', function () {
        try {
            ranked = JSON.parse(this.responseText.substring(6)).default.rankedList[1].rankedKeyword;
            if (ranked.length) {
                for (r of ranked) {
                    if (r.query && r.value > 200 && !alreadyInList(r.query) && r.query.indexOf("usd") != -1) {
                        addToList(r.query);
                        let message = `${r.query} / ${r.value}`;
                        console.log(`${message} / ${new Date().toString()}`);
                        let wirepusherUrl = `https://wirepusher.com/send?id=jRjqmpGFc&title=BREAKOUT&message=${message}&type=trends`;
                        fetch(encodeURI(wirepusherUrl));
                    }
                }
            }
        } 
        catch {}
    });
    return oldXHROpen.apply(this, arguments);
}

function alreadyInList(query) {
    let list = getList();
    return list.indexOf(query) > -1;
}

function addToList(query, value, created) {
    let list = getList();
    list.push(query);
    storeList(list);
}

const STORAGE_KEY = "trendsTicker";

function storeList(obj) {
    localStorage[STORAGE_KEY] = JSON.stringify(obj);
}

function getList() {
    return JSON.parse(localStorage[STORAGE_KEY]);
}

function resetList() {
    localStorage[STORAGE_KEY] = JSON.stringify([]);
}

search('USDT');