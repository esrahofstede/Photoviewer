/*jslint browser:true */
/**
 * creates the container div
 * @type {Object}
 */
var WindowView = {
    /**
     * creates the container div
     * @return {DOM element} container div
     */
    buildContainerView : function () {
        'use strict';
        if (document.getElementById("container")) {
            document.body.removeChild(document.getElementById("container"));
        }
        var container = document.createElement("div");
        container.id = "container";
        return container;
    }
};