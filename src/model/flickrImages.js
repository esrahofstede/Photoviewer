/*jslint browser: true, devel: true */
/*global ActiveXObject*/
var FlickrImages = {
    ajaxFlickrPhoto: function (callback) {
        'use strict';
        var xmlhttp = new XMLHttpRequest(),
            urlParameters = {
                protocol: 'https',
                website: 'api.flickr.com/services/rest/',
                method: 'flickr.interestingness.getList',
                api_key: '156b7d7b5c9ebefb5c4b2c2b79eee2c2',
                api_sig: '6025a188341dfd3783d8009ee25dc0cb',
                extras: ['description', 'date_taken', 'owner_name', 'icon_server', 'original_format', 'url_m'],
                format: 'json&nojsoncallback=1',
                per_page: '20',
                page: '1',
                formattedExtras: function () {
                    return urlParameters.extras.join("%2C+");
                }
            },
            url = urlParameters.protocol + "://" +
                urlParameters.website +
                "?method=" + urlParameters.method +
                "&api_key=" + urlParameters.api_key +
                "&extras=" + urlParameters.formattedExtras() +
                "&per_page=" + urlParameters.per_page +
                "&page=" + urlParameters.page +
                "&format=" + urlParameters.format;
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                console.log(xmlhttp.readyState);
                callback.call(JSON.parse(xmlhttp.responseText));
            }
        };
    }
};
