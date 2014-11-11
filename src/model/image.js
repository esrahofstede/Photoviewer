function Image(photo, classes, imgID, onclick, oncontextmenu) {
    'use strict';
    /**
     * The photo contains all information about the photo like the source, author, title etc.
     * @type {Photo}
     */
    this.photo = photo;

    /**
     * A object which contains two objects, img and figure.
     * Each of these objects contains an array with all the classes.
     * @type {JSON}
     */
    if (typeof classes === "object") {
        if (typeof classes.img === "object" || typeof classes.figure === "object") {
            this.classes = classes;
        }
    }
    /**
     * The ID of the image in the grid.
     * This ID is necessary to identify the image
     * @type {int}
     */
    this.imgID = imgID;

    /**
     * Contains a functionname with parameters which executes when is clicked on the image
     * @type {string}
     */
    this.onclick = onclick;

    /**
     * Contains a functionname with parameters which executes when is rightclicked on the image
     * @type {string}
     */
    this.oncontextmenu = oncontextmenu;

    /**
     * Used for changing the onclick variable
     * @param {int} imageID the ID of the image
     */
    this.setOnClickIMG = function (imageID) {
        this.onclick.img = "LargeImageController.openPhotoViewer(" + imageID + ");return false;";
    };

    /**
     * Used for changing the oncontextmenu variable
     * @param {int} imageID the ID of the image
     */
    this.setOnContextMenuIMG = function (imageID) {
        this.oncontextmenu.img = "ThumbnailsController.deleteImage(" + imageID + ");return false;";
    };
}