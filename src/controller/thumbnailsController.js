/*jslint browser:true */
/*global Image, Main, LargeImageController, ImageView, ThumbnailsView*/
/*jslint plusplus: true */
/**
 * this contrailer is responsible for every action for the photoviewer grid
 * @type {Object}
 */
var ThumbnailsController = {
    /**
     * all the images in the photoviewer grid
     * @type {Array}
     */
    allImages: [],
    /**
     * creates a new image to append the photoviewer grid
     * @param  {Photo} photo     the photo to append
     * @param  {Number} imageID   the id of the image to append
     * @param  {String} classGrid the css class of the grid
     * @return {Image}           the image to append
     */
    appendGridImage: function (photo, imageID, classGrid) {
        'use strict';
        var classes = {
                figure: ["grid", classGrid],
                img: ["grid"]
            },
            onclick = {
                img: "LargeImageController.openPhotoViewer(" + imageID + ")",
                figure: ""
            },
            oncontextmenu = {
                img: "ThumbnailsController.deleteImage(" + imageID + "); return false;",
                figure: ""
            };
        return new Image(photo, classes, imageID, onclick, oncontextmenu);
    },
    /**
     * calculates the class to add to all the images in the grid depending on the total number of images
     * @param  {Array(Image)} images all the images in the grid
     * @return {String}        the class to add to the image
     */
    calculateImages: function (images) {
        'use strict';
        if (images.length < 25) {
            var squareRoot = Math.sqrt(images.length - 1);
            squareRoot = Math.ceil(squareRoot);
            return "row" + squareRoot;
        }
        return "row5";
    },
    /**
     * creates all the images for the grid
     * @param  {Array(Photo)} photos all the photos for the grid
     * @return {Array(Image)}        all the images for the grid
     */
    appendImages: function (photos) {
        'use strict';
        var images = [],
            classGrid = ThumbnailsController.calculateImages(photos),
            index;
        for (index = 0; index < photos.length; index += 1) {
            images.push(ThumbnailsController.appendGridImage(photos[index], index, classGrid));
        }
        ThumbnailsController.allImages = images;
        // ThumbnailsController.createGrid(images);
        return images;
    },
    /**
     * creates a html element with all the images
     * @param  {Array[Images]}  all photos embedded in an Image object
     * @return {html}           html element with all the images
     */
    createGrid: function (images) {
        'use strict';
        var imageGrid = ThumbnailsView.createImageGridView(),
            key;
        for (key in images) {
            if (typeof images[key] === 'object') {
                imageGrid.appendChild(ImageView.createFigureView(images[key]));
            }
        }
        //Main.showGrid(imageGrid);
        return imageGrid;
    },
    /**
     * deletes a figure from the DOM and a image from the AllImages variable
     * @param  {Number} imageID the image to delete
     */
    deleteImage: function (imageID) {
        'use strict';
        var classGrid = ThumbnailsController.calculateImages(ThumbnailsController.allImages),
            imageGrid,
            index;
        ThumbnailsController.allImages.splice(imageID, 1);
        LargeImageController.lastOpenedImage = 0;
        for (index = 0; index < ThumbnailsController.allImages.length; index++) {
            ThumbnailsController.allImages[index].imgID = index;
            ThumbnailsController.allImages[index].setOnClickIMG(index);
            ThumbnailsController.allImages[index].setOnContextMenuIMG(index);
            ThumbnailsController.allImages[index].classes.figure[1] = classGrid;
        }

        imageGrid = ThumbnailsController.createGrid(ThumbnailsController.allImages);
        Main.showGrid(imageGrid);
    }
};



/**
 * creating a album with image objects
 * @param  {Array[Photos]} photos [all photo objects needed for the album]
 * @return {Array[Images]}        all photos embedded in an Image object
 */
// function appendGridImage(photo, imageID, classGrid) {
//     'use strict';
//     var classes = {
//             figure: ["grid", classGrid],
//             img: ["grid"]
//         },
//         onclick = {
//             img: "LargeImageController.openPhotoViewer(" + imageID + ")",
//             figure: ""
//         },
//         oncontextmenu = {
//             img: "deleteImage(" + imageID + "); return false;",
//             figure: ""
//         };
//     return new Image(photo, classes, imageID, onclick, oncontextmenu);
// }

// function calculateImages(images) {
//     'use strict';
//     if (images.length < 25) {
//         var squareRoot = Math.sqrt(images.length - 1);
//         squareRoot = Math.ceil(squareRoot);
//         return "row" + squareRoot;
//     }
//     return "row5";
// }

// function appendImages(photos) {
//     'use strict';
//     var images = [],
//         classGrid = calculateImages(photos),
//         index;
//     for (index = 0; index < photos.length; index += 1) {
//         images.push(appendGridImage(photos[index], index, classGrid));
//     }
//     allImages = images;
//     createGrid(images);
// }

/**
 * creates a html element with all the photos
 * @param  {Array[Images]}  all photos embedded in an Image object
 * @return {html}           html element with all the images
 */
// function createGrid(images) {
//     var imageGrid = ThumbnailsView.createImageGridView(),
//         key;
//     for (key in images) {
//         imageGrid.appendChild(ImageView.createFigureView(images[key]));
//     }
//     showGrid(imageGrid);
// }

// function deleteImage(imageID) {
//     'use strict';
//     var classGrid = calculateImages(allImages),
//         key;
//     allImages.splice(imageID, 1);
//     lastOpenedImage = 0;
//     for (key in allImages) {
//         allImages[key].imgID = key;
//         allImages[key].setOnClickIMG(key);
//         allImages[key].setOnContextMenuIMG(key);
//         allImages[key].classes.figure[1] = classGrid;
//     }
//     createGrid(allImages);
// }