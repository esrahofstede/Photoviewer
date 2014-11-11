/*jslint browser:true */
/**
 * creates the imagegrid section
 * @type {Object}
 */
var ThumbnailsView = {
    /**
     * creates the imagegrid sec
     * @return {DOM element} the imagegrid section
     */
    createImageGridView : function () {
        'use strict';
        var imageGrid = document.createElement("section");
        imageGrid.id = "imageGrid";
        return imageGrid;
    }
};
