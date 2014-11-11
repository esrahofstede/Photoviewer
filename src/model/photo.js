/*global Author*/
function Photo(source, authorName, authorID, title, description, dateTaken) {
    'use strict';
    /**
     * The url where the photograph is found
     * @type {string}
     */
    if (typeof source === "string") {
        this.source = source;
    }
    /**
     * The creator of the photo
     * @type {Author}
     */
    this.author = new Author(authorName, authorID);
    /**
     * The title of the photograph
     * @type {string}
     */
    if (typeof title === "string") {
        this.title = title;
    }
    /**
     * A description of the photograph
     * @type {string}
     */
    if (typeof description === "string") {
        this.description = description;
    }
    /**
     * The date when the photo was taken
     * @type {string}
     */
    if (typeof dateTaken === "string") {
        this.dateTaken = dateTaken;
    }
}