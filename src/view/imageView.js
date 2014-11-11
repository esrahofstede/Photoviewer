/*jslint browser:true */
/**
 * the imageview creates all the DOM elements for the images
 * @type {Object}
 */
var ImageView = {
    /**
     * creates a figure element
     * @param  {String} classes the classes to add to the image
     * @param  {String} onclick the function to action when is clicked at the image
     * @return {DOM element}         the figure element
     */
    createFigure: function (classes, onclick) {
        'use strict';
        var figure = document.createElement("figure");
        figure.setAttribute("class", classes);
        figure.setAttribute("onclick", onclick);
        return figure;
    },
    /**
     * creates img element 
     * @param  {String} source        the source where the image can be found
     * @param  {String} alt           an alternative when image cannot be showed
     * @param  {String} onclick       a function which is called when the image is clicked
     * @param  {Object} classes       the classes to add to the figure and to the image
     * @param  {String} oncontextmenu a function which is called when is rightclick at the image
     * @return {DOM element}          the image with all the attributes
     */
    createIMGView: function (source, alt, onclick, classes, oncontextmenu) {
        'use strict';
        var img = document.createElement("img");
        img.setAttribute("class", classes);
        img.setAttribute("onclick", onclick);
        img.setAttribute("oncontextmenu", oncontextmenu);
        img.src = source;
        img.alt = alt;
        return img;
    },
    /**
     * creates the figure for the image
     * @param  {Image} image the image for inside the figure
     * @return {DOM element}       the figure
     */
    createFigureView: function (image) {
        'use strict';
        //var figure = createFigure(image.classes.figure, image.onclick.figure);
        var figure = document.createElement("figure");

        function getAllClasses(multipleClasses) {
            var classes = "",
                key;
            for (key in multipleClasses) {
                if (typeof multipleClasses[key] === 'string') {
                    classes = classes + " " + multipleClasses[key];
                }
            }
            return classes;
        }
        figure.setAttribute("class", getAllClasses(image.classes.figure));
        figure.setAttribute("onclick", image.onclick.figure);
        figure.appendChild(this.createIMGView(image.photo.source, image.photo.title, image.onclick.img, image.classes.img, image.oncontextmenu.img));
        return figure;
    }
};