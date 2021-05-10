let city = "";
let url = "";


let button = document.getElementById("search").onclick = function () {
    city = document.getElementById("cityName").value;
    url = "https://twitter.com/search?q=verified+" + city + "+%28bed+OR+beds+OR+icu+OR+oxygen+OR+ventilator+OR+ventilators+OR+fabiflu%29+-%22not+verified%22+-%22unverified%22+-%22needed%22+-%22required%22&f=live";

    //console.log(url)
    open(url);
}



