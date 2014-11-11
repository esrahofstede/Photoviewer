function Author(name, authorID) {
    'use strict';
    /**
     * The name of the author
     * It has to be a string
     * @type {string}
     */
    if (typeof name === "string") {
        this.name = name;
    }
    /**
     * The ID of the author (flickrID)
     * It has to be a string
     * @type {string}
     */
    if (typeof authorID === "string") {
        this.authorID = authorID;
    }
}