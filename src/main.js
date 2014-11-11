/*jslint browser:true, devel:true */
/*global WindowView, ThumbnailsController, LargeImageController, PhotoController*/
/**
 * [Main description]
 * @type {Object}
 */
var Main = {
    container: WindowView.buildContainerView(),
    buildWindow: function (photoObjects) {
        'use strict';
        var images = ThumbnailsController.appendImages(photoObjects),
            imageGrid = ThumbnailsController.createGrid(images);
        Main.showGrid(imageGrid);
    },
    buildPhotoViewer: function () {
        'use strict';
        var online = navigator.onLine,
            photoObjects;
        if (online) {
            try {
                PhotoController.getFlickrPhotos(function () {
                    Main.buildWindow(this);
                });
            } catch (err) {
                photoObjects = PhotoController.getPhotoViewerPhotos();
                Main.buildWindow(photoObjects);
            }
        } else {
            photoObjects = PhotoController.getPhotoViewerPhotos();
            Main.buildWindow(photoObjects);
        }
    },
    showGrid: function (imageGrid) {
        'use strict';
        Main.container = WindowView.buildContainerView();
        Main.container.appendChild(imageGrid);
        document.body.appendChild(Main.container);
    },
    handle: function (e) {
        'use strict';
        var elementExists;
        if (e.keyCode === 37) {
            elementExists = document.getElementsByClassName("btnLeft");
            if (elementExists[0]) {
                elementExists[0].onclick();
            }
        } else if (e.keyCode === 39) {
            elementExists = document.getElementsByClassName("btnRight");
            if (elementExists[0]) {
                elementExists[0].onclick();
            }
        } else if (e.keyCode === 32) {
            elementExists = document.getElementsByClassName("largePhoto");
            if (elementExists[0]) {
                LargeImageController.closePhotoViewer();
            } else {
                if (LargeImageController.lastOpenedImage === "") {
                    LargeImageController.openPhotoViewer(0);
                } else {
                    LargeImageController.openPhotoViewer(LargeImageController.lastOpenedImage);
                }

            }
            e.preventDefault();
        } else if (e.keyCode === 27) {
            elementExists = document.getElementsByClassName("largePhoto");
            if (elementExists[0]) {
                LargeImageController.closePhotoViewer();
            }
        } else if (e.keyCode === 38 || e.keyCode === 40) {
            elementExists = document.getElementsByClassName("largePhoto");
            if (elementExists[0]) {
                e.preventDefault();
            }
        }
    }
};

/**
 * the function called after loading the DOM
 * @return {void} when the method is already called, returns void
 */
function init() {
    // quit if this function has already been called
    if (arguments.callee.done) {
        return;
    }
    // flag this function so we don't do the same thing twice
    arguments.callee.done = true;
    Main.buildPhotoViewer();
}

/**
 * After de DOM is loaded, this function is called
 */
window.onload = function () {
    'use strict';
    init();
};

/**
 * After de DOM is loaded, this function is called and Firefox is used
 */
if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", init, false);
}



window.addEventListener("keydown", Main.handle, true);