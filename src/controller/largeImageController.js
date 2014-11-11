/*jslint browser:true */
/*global Main, ThumbnailsController, ImageView, LargeImageView*/
/**
 * this controller is responsible for every action for the photoviewer 
 * @type {Object}
 */
var LargeImageController = {
    /**
     * The lastOpenedImage is the last image which was opened in the PhotoViewer
     * @type {Number}
     */
    lastOpenedImage : 0,
    /**
     * opens the photoviewer with one large image
     * @param  {number} imageID the id of the image to show
     */
    openPhotoViewer: function (imageID) {
        'use strict';
        var largeImage = ThumbnailsController.allImages[imageID],
            image,
            figure,
            figcaption;
        try {
            image = LargeImageController.appendLargeImage(largeImage.photo, imageID);
            figure = ImageView.createFigureView(image);
            figcaption = LargeImageView.createFigureCaption(largeImage);
            figure.appendChild(figcaption);
            Main.container.appendChild(figure);
            LargeImageController.createButtons(imageID);
            LargeImageController.lastOpenedImage = imageID;
        } catch (e) {
            document.body.innerHTML = "All Photos are deleted. Refresh for new Images";
        }
    },
    /**
     * creates the new image to show in the photoViewer
     * @param  {Photo} photo   the photo to view in the photoviewer
     * @param  {Number} imageID the ID of the photo to open
     * @return {Image}         returns the image with all the information to append the photo to the DOM
     */
    appendLargeImage: function (photo, imageID) {
        'use strict';
        var classes = {
                figure: ["largePhoto"],
                img: ["largePhoto"]
            },
            onclick = {
                figure: "LargeImageController.closePhotoViewer()",
                img: ""
            },
            oncontextmenu = {
                img: "",
                figure: ""
            };
        return new Image(photo, classes, imageID, onclick, oncontextmenu);
    },
    /**
     * creates the buttons for the photoviewer
     * @param  {Number} imageID the id of the image which is opened by clicking on the button
     */
    createButtons: function (imageID) {
        'use strict';
        var buttonLeft = ImageView.createIMGView("images/left.png", "last", "LargeImageController.reopenPhotoViewer(" + (imageID - 1) + ")", "btnLeft"),
            buttonRight = ImageView.createIMGView("images/right.png", "next", "LargeImageController.reopenPhotoViewer(" + (imageID + 1) + ")", "btnRight");
        Main.container.appendChild(buttonLeft);
        Main.container.appendChild(buttonRight);
    },
    /**
     * deletes the photoviewer elements from the DOM and sets the lastOpenedImage to the opened image.
     */
    closePhotoViewer: function () {
        'use strict';
        var photoviewer,
            buttonLeft,
            buttonRight;

        photoviewer = Main.container.getElementsByClassName("largePhoto");
        buttonLeft = Main.container.getElementsByClassName("btnLeft");
        buttonRight = Main.container.getElementsByClassName("btnRight");

        Main.container.removeChild(photoviewer[0]);
        Main.container.removeChild(buttonLeft[0]);
        Main.container.removeChild(buttonRight[0]);
    },
    /**
     * deletes the photoviewer DOM objects and creates it again
     * @param  {Number} imageID the id of the image to show in the photoviewer
     */
    reopenPhotoViewer: function (imageID) {
        'use strict';
        if (imageID < 0) {
            imageID = ThumbnailsController.allImages.length - 1;
        }
        if (imageID === (ThumbnailsController.allImages.length)) {
            imageID = 0;
        }
        LargeImageController.closePhotoViewer();
        LargeImageController.openPhotoViewer(imageID);
    }
};