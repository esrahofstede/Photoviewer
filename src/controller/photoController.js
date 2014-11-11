/*jslint devel:true */
/*global photoviewerImages, Photo, FlickrImages, Main*/
/**
 * this controller is responsible for retrieving all the images
 * @type {Object}
 */
var PhotoController = {
    /**
     * converts the photoviewerImages variable to photo objects
     * @return {object(photo)} returns the created photo objects
     */
    getPhotoViewerPhotos: function () {
        'use strict';
        var photoObjects = [],
            image,
            tempImage;

        for (image in photoviewerImages) {
            if (typeof photoviewerImages[image] === 'object') {
                tempImage = new Photo(
                    photoviewerImages[image].src,
                    photoviewerImages[image].author,
                    "000000100",
                    "title",
                    photoviewerImages[image].description,
                    "2010-04-02"
                );
                photoObjects.push(tempImage);
            }
        }
        return photoObjects;
        //ThumbnailsController.appendImages(photoObjects);
    },

    /**
     * retrieves the flickr photos with ajax and converts it to
     * photo objects
     * @param  {Function} callback when the flickr images are returnt
     * this method is called
     * @return {objects(photo)} returns the created photoobjects
     */
    getFlickrPhotos: function (callback) {
        'use strict';
        var photoObjects = [],
            photo,
            index,
            tempPhoto,
            flickrPhotos;
        FlickrImages.ajaxFlickrPhoto(function () {
            flickrPhotos = this;
            console.log(flickrPhotos);
            if (flickrPhotos.stat === "fail") {
                photoObjects = PhotoController.getPhotoViewerPhotos();
                Main.buildWindow(photoObjects);
                return;
            }
            photo = flickrPhotos.photos.photo;
            /*jslint nomen: true*/
            for (index = 0; index < photo.length; index += 1) {
                tempPhoto = new Photo(
                    photo[index].url_m,
                    photo[index].ownername,
                    photo[index].owner,
                    photo[index].title,
                    photo[index].description._content,
                    photo[index].datetaken
                );
                photoObjects.push(tempPhoto);
            }
            /*jslint nomen: false*/
            callback.call(photoObjects);
            //ThumbnailsController.appendImages(photoObjects);
        });
    }
};