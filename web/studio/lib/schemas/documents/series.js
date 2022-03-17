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
    name: "series",
    title: "Series",
    type: "document",
    fields: [
        {
            name: "seriesTitle",
            title: "Series Title",
            type: "string",
            validation: function (Rule) { return Rule.required(); }
        },
        __assign(__assign({ name: "seriesDescription", title: "Series Description" }, shared_1.richTextFieldConfig), { validation: function (Rule) { return Rule.required(); } }),
        {
            name: "articles",
            title: "Articles",
            type: "array",
            of: [{ type: "reference", to: [{ type: "article" }] }]
        }
    ]
};
