"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: "projectLink",
    title: "Project Link",
    type: "document",
    fields: [
        {
            name: "provider",
            title: "Title",
            type: "reference",
            to: [{ type: "projectLinkProvider" }],
            validation: function (Rule) { return Rule.required(); },
        },
        {
            name: "url",
            title: "URL",
            type: "url",
            validation: function (Rule) { return Rule.required(); },
        },
    ],
    preview: {
        select: {
            title: "title",
            media: "image",
        },
    },
};
