"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var shared_1 = require("../../shared");
exports.default = {
    name: "creator",
    title: "Creator",
    type: "document",
    fields: [
        {
            name: "name",
            validation: function (Rule) { return Rule.required(); },
            title: "Name",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                slugify: function (input) { return input
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .slice(0, 200); },
            },
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            title: "Github",
            name: "githubUrl",
            type: "url",
        },
        {
            title: "LinkedIn",
            name: "linkedInUrl",
            type: "url",
        },
        __assign({ name: "bio", title: "Bio", validation: function (Rule) { return Rule.required(); } }, shared_1.richTextFieldConfig),
    ],
    preview: {
        select: {
            title: "name",
            media: "image",
        },
    },
};
