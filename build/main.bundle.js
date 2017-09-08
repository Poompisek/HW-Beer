'use strict';

var getBeersAPI = function getBeersAPI() {
    return fetch('https://api.punkapi.com/v2/beers/').then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Something Error!!!');
    }).then(function (response) {
        var beers = response;
        var fResult = "";
        for (var i = 0; i < beers.length; i++) {
            fResult += "<br>" + "<image src =" + beers[i].image_url + "/><hr>" + "<b>Name : </b>" + beers[i].name + "<br> <b>Tagline : </b>" + beers[i].tagline + "<br> <b>PH : </b>" + beers[i].ph + "<br> <b>Yeast : </b>" + beers[i].ingredients.yeast + "<br> <b>First Brewed : </b>" + beers[i].first_brewed + "<br> <b>Description : </b>" + beers[i].description + "<br>";
        }
        document.getElementById('result').innerHTML = fResult;
    });
};

var getBeerAPIByName = function getBeerAPIByName(name) {
    return fetch('https://api.punkapi.com/v2/beers/?beer_name=' + name).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Something Error!!!');
    }).then(function (response) {
        var beers = response;
        var result = "";
        for (var i = 0; i < beers.length; i++) {
            result += "<br>" + "<img src =" + beers[i].image_url + "/><hr>" + "<b>Name : </b>" + beers[i].name + "<br> <b>Tagline : </b>" + beers[i].tagline + "<br> <b>PH : </b>" + beers[i].ph + "<br> <b>Yeast : </b>" + beers[i].ingredients.yeast + "<br> <b>First Brewed : </b>" + beers[i].first_brewed + "<br> <b>Description : </b>" + beers[i].description + "<br>";
        }
        document.getElementById('result').innerHTML = result;
    });
};

var getBeerAPIByYeast = function getBeerAPIByYeast(yeast) {
    return fetch('https://api.punkapi.com/v2/beers/?yeast=' + yeast).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Something Error!!!');
    }).then(function (response) {
        var beers = response;
        var result = "";
        for (var i = 0; i < beers.length; i++) {
            result += "<br>" + "<image src =" + beers[i].image_url + "/><hr>" + "<b>Name : </b>" + beers[i].name + "<br> <b>Tagline : </b>" + beers[i].tagline + "<br> <b>PH : </b>" + beers[i].ph + "<br> <b>Yeast : </b>" + beers[i].ingredients.yeast + "<br> <b>First Brewed : </b>" + beers[i].first_brewed + "<br> <b>Description : </b>" + beers[i].description + "<br>";
        }
        document.getElementById('result').innerHTML = result;
    });
};

var getBeerAPIByNameAndYeast = function getBeerAPIByNameAndYeast(name, yeast) {
    return fetch('https://api.punkapi.com/v2/beers/?beer_name=' + name + '&?yeast=' + yeast).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Something Error!!!');
    }).then(function (response) {
        var beers = response;
        var result = "";
        for (var i = 0; i < beers.length; i++) {
            result += "<br>" + "<image src =" + beers[i].image_url + "/><hr>" + "<b>Name : </b>" + beers[i].name + "<br> <b>Tagline : </b>" + beers[i].tagline + "<br> <b>PH : </b>" + beers[i].ph + "<br> <b>Yeast : </b>" + beers[i].ingredients.yeast + "<br> <b>First Brewed : </b>" + beers[i].first_brewed + "<br> <b>Description : </b>" + beers[i].description + "<br>";
        }
        document.getElementById('result').innerHTML = result;
    });
};

var getBeerApiByMali = function getBeerAPIByNameAndYeast(name, yeast, malt) {
    return fetch('https://api.punkapi.com/v2/beers/?beer_name=' + name + '&?yeast=' + yeast + '&?malt=' + malt).then(function (response) {
        return response.json();
    }).catch(function (e) {
        return console.err('Something Error!!!');
    }).then(function (response) {
        var beers = response;
        var result = "";
        for (var i = 0; i < beers.length; i++) {
            result += "<br>" + "<image src =" + beers[i].image_url + "/><hr>" + "<b>Name : </b>" + beers[i].name + "<br> <b>Tagline : </b>" + beers[i].tagline + "<br> <b>PH : </b>" + beers[i].ph + "<br> <b>Yeast : </b>" + beers[i].ingredients.yeast + "<br> <b>First Brewed : </b>" + beers[i].first_brewed + "<br> <b>Description : </b>" + beers[i].description + "<br>";
        }
        document.getElementById('result').innerHTML = result;
    });
};

getBeersAPI();

var toSearch = function toSearch(name, yeast) {
    if (yeast != "" && name != "") {
        getBeerAPIByNameAndYeast(name, yeast);
    } else if (yeast != "") {
        getBeerAPIByYeast(yeast);
    } else if (name != "") {
        getBeerAPIByName(name);
        
    }else if (name != ""){
        getBeerApiByMali(name, yeast, malt)
    } else {
        var fResult = "No result";
        document.getElementById('result').innerHTML = fResult;
    }
};
