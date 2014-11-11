/*jslint browser: true*/
/*global expect, it, describe*/
describe("Author",
    function () {
        beforeEach(function () {
            author = new Author("Esra Hofstede", "123456789");
        });
        it("should consist a authorName", function () {
            expect(author.name).toBeDefined();
            expect(author.name).toEqual("Esra Hofstede");
        });
        it("should consist a authorID", function () {
            expect(author.authorID).toBeDefined();
            expect(author.authorID).toEqual("123456789");
        });
        describe("contains a authorName", function () {
            var authorNameTest = new Author(123456, "123456789a");
            it("which has to be a string", function () {
                expect(authorNameTest.authorName).not.toBeDefined();
            });
        });
        describe("contains a authorID", function () {
            var authorIDTest = new Author("Esra Jansen", 12345678.19);
            it("which has to be a string", function () {
                expect(authorIDTest.authorID).toBeUndefined();
            });
        });
    }
);

describe("Photo", function () {
    beforeEach(function () {
        source = "img/001.jpg";
        title = "Title text";
        description = "Description text";
        dateTaken = "2014-14-05";
        photo = new Photo("img/001.jpg", "Esra Hofstede", "123456789", "Title text", "Description text", "2014-14-05");
    });
    it("should consist a sourceURL", function () {
        expect(photo.source).toBeDefined();
        expect(photo.source).toEqual(source);
    });
    it("should consist a title", function () {
        expect(photo.title).toBeDefined();
        expect(photo.title).toEqual(title);
    });
    it("should consist a description", function () {
        expect(photo.description).toBeDefined();
        expect(photo.description).toEqual(description);
    });
    it("should consist a date which the photo was taken", function () {
        expect(photo.dateTaken).toBeDefined();
        expect(photo.dateTaken).toEqual(dateTaken);
    });
    describe("contains a source", function () {
        photoSourceTest = new Photo(113113.11, "Esra Hofstede", "123456789", "Title text", "Description text", "2014-14-05");
        it("which has to be a string", function () {
            expect(photoSourceTest.source).toBeUndefined();
        });
    });
    describe("contains a Author", function () {
        photoAuthorTest = new Photo("1111131", "Esra Hofsteden", "123456689", "Title text", "Description text", "2014-14-05");
        it("which contains a authorname", function () {
            expect(photoAuthorTest.author.name).toBeDefined();
            expect(photoAuthorTest.author.name).toEqual("Esra Hofsteden");
        });
        it("which contains a authorID", function () {
            expect(photoAuthorTest.author.authorID).toBeDefined();
            expect(photoAuthorTest.author.authorID).toEqual("123456689");
        });
    });
    describe("contains a title", function () {
        photoTitleTest = new Photo("113234511", "Esra Hofstede", "123456789", 12345679, "Description text", "2014-14-05");
        it("which has to be a string", function () {
            expect(photoTitleTest.title).toBeUndefined();
        });
    });
    describe("contains a description", function () {
        photoDescriptionTest = new Photo("113234511", "Esra Hofstede", "123456789", "Title text", 234567876543, "2014-14-05");
        it("which has to be a string", function () {
            expect(photoDescriptionTest.description).toBeUndefined();
        });
    });
    describe("contains a taken which the photo was taken", function () {
        photoDateTakenTest = new Photo("113234511", "Esra Hofstede", "123456789", "Title text", "Description text", 1814848484);
        it("which has to be a string", function () {
            expect(photoDateTakenTest.dateTaken).toBeUndefined();
        });
    });
});

describe("Image", function () {
    beforeEach(function () {
        photo = new Photo("img/001.jpg", "Esra Hofstede", "123456789", "Title text", "Description text", "2014-14-05");
        photo2 = new Photo("img/002.jpg", "Tom Hofstede", "223456789", "Title text", "asdf text", "2114-14-05");
        classes = {
            img: ["class"],
            figure: ["class"]
        };
        imgID = 0;
        onclick = "openPhotoviewer(0)";
        oncontextmenu = "closePhotoviewer()"
        image = new Image(photo, classes, imgID, onclick, oncontextmenu);
    });
    it("should consist a classes variable", function () {
        expect(image.classes).toBeDefined();
        expect(image.classes).toEqual(classes);
    });
    it("should consist an imgID", function () {
        expect(image.imgID).toBeDefined();
        expect(image.imgID).toEqual(imgID);
    });
    it("should consist a onclick variable", function () {
        expect(image.onclick).toBeDefined();
        expect(image.onclick).toEqual(onclick);
    });
    it("should consist an oncontextmenu variable", function () {
        expect(image.oncontextmenu).toBeDefined();
        expect(image.oncontextmenu).toEqual(oncontextmenu);
    });
    it("should consist a photo object", function () {
        expect(image.photo).toBeDefined();
        expect(image.photo).toEqual(photo);
        expect(image.photo).not.toEqual(photo2);
    });
    describe("contains classes", function () {
        beforeEach(function () {
            imageClasses = new Image(photo, classes, imgID, onclick, oncontextmenu);
        });
        it("which is an object", function () {
            expect(imageClasses.classes.img).toBeDefined();
            expect(imageClasses.classes.figure).toBeDefined();
        });
        it("which object variables are an array", function () {
            classesTest = {
                img: "class",
                figure: "class"
            };
            imageClasses = new Image(photo, classesTest, imgID, onclick, oncontextmenu);
            expect(imageClasses.classes).toBeUndefined();
            expect(imageClasses.classes).toBeUndefined();
        });
    });
});