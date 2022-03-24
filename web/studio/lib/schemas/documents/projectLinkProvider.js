"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: "projectLinkProvider",
    title: "Project Link Provider",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: function (Rule) { return Rule.required(); }
        },
        {
            name: "icon",
            title: "Icon",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: function (Rule) { return Rule.required(); }
        },
    ],
    preview: {
        select: {
            title: "title",
            media: "image",
        },
    },
};
