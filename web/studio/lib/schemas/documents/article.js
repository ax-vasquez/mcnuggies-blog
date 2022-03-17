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
    name: "article",
    title: "Article",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            validation: function (Rule) { return Rule.required(); },
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "title",
                slugify: function (input) { return input
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .slice(0, 200); },
            },
        },
        {
            title: "Publish date",
            name: "publishDate",
            type: "date",
            options: {
                dateFormat: "YYYY-MM-DD",
                calendarTodayLabel: "Today",
            },
            validation: function (Rule) { return Rule.required(); },
        },
        {
            title: "Author",
            name: "author",
            type: "reference",
            to: [{ type: "creator" }],
            validation: function (Rule) { return Rule.required(); },
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        __assign(__assign({ name: "summary", title: "Summary" }, shared_1.summaryRichTextFieldConfig), { validation: function (Rule) { return Rule.required(); } }),
        __assign(__assign({ name: "body", title: "Body" }, shared_1.richTextFieldConfig), { validation: function (Rule) { return Rule.required(); } }),
        {
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: [{ type: "category" }] }],
            validation: function (Rule) { return Rule.required(); },
        },
        {
            name: "series",
            title: "Series",
            type: "reference",
            to: [{ type: "series" }],
        },
        {
            name: "seriesIndex",
            title: "Series Index",
            type: "number",
        },
    ],
    preview: {
        select: {
            title: "title",
            media: "image",
        },
    },
};
