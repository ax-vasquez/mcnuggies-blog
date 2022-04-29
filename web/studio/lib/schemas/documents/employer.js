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
    name: "employer",
    title: "Employer",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: function (Rule) { return Rule.required(); },
        },
        {
            title: "Are you currently employed?",
            name: "employed",
            type: "boolean",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
            validation: function (Rule) { return Rule.required(); },
        },
        {
            title: "Start date",
            name: "startDate",
            type: "date",
            options: {
                dateFormat: "YYYY-MM",
                calendarTodayLabel: "Today",
            },
            validation: function (Rule) { return Rule.required(); },
        },
        {
            title: "End date",
            name: "endDate",
            type: "date",
            options: {
                dateFormat: "YYYY-MM",
                calendarTodayLabel: "Today",
            },
        },
        __assign(__assign({ name: "description", title: "Description" }, shared_1.richTextFieldConfig), { validation: function (Rule) { return Rule.required(); } }),
        {
            title: "Home Page",
            name: "homePage",
            type: "url",
        },
        {
            name: "jobTitles",
            title: "Job Titles",
            type: "array",
            of: [{ type: "reference", to: [{ type: "jobTitle" }] }],
            description: "The job title(s) you held, or currently hold, at this employer",
            validation: function (Rule) { return Rule.required(); },
        },
    ],
    preview: {
        select: {
            title: "name",
            media: "image",
        },
    },
};
