"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: "category",
    title: "Category",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: function (Rule) { return Rule.required(); },
        },
    ],
};
