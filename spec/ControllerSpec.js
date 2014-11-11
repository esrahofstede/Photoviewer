/*jslint browser: true*/
/*global expect, it, describe, beforeEach, PhotoController*/
//console.log("test");
describe("PhotoController", function () {
    'use strict';
    it("should be able to get default fotos", function () {
        var photoViewerPhotos = PhotoController.getPhotoViewerPhotos();
        expect(PhotoController.getPhotoViewerPhotos()).toBeDefined();
        expect(PhotoController.getPhotoViewerPhotos()).toEqual(photoViewerPhotos);
    });
    it("should get 24 default photos", function() {
        var photoViewerPhotos = PhotoController.getPhotoViewerPhotos();
        expect(photoViewerPhotos.length).toBe(24);
    });
});