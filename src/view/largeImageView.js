/*jslint browser:true */
/**
 * All the function for creating the Large image photoviewer
 * @type {Object}
 */
var LargeImageView = {
    /**
     * creates the photoviewer figcaption
     * @param  {Image} image the image with the text
     * @return {DOM element}       the text for next to the image
     */
    createFigureCaption : function (image) {
        'use strict';
        /**
         * creates a html element with a text inside
         * @param  {String} typeNode the type of DOM element
         * @param  {String} text     the text for in the DOM element
         * @return {DOM element}          the DOM element with text
         */
        function createText(typeNode, text) {
            var node = document.createElement(typeNode);
            node.innerHTML = text;
            return node;
        }
        var figcaption = document.createElement("figcaption"),
            title = createText("h1", image.photo.title),
            author = createText("p", "Author: " + image.photo.author.name),
            desription = createText("p", image.photo.description.substring(0, 100)),
            dateTaken = createText("p", image.photo.dateTaken);
        figcaption.appendChild(title);
        figcaption.appendChild(author);
        figcaption.appendChild(desription);
        figcaption.appendChild(dateTaken);
        return figcaption;
    }
};