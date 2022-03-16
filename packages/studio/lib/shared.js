"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.summaryRichTextFieldConfig = exports.richTextFieldConfig = void 0;
var react_1 = __importDefault(require("react"));
var fa_1 = require("react-icons/fa");
var highlightIcon = function () { return (react_1.default.createElement("span", { style: { fontWeight: "bold" } }, "H")); };
var highlightRender = function (props) { return (react_1.default.createElement("span", { style: { backgroundColor: "yellow" } }, props.children)); };
exports.richTextFieldConfig = {
    type: "array",
    of: [
        {
            title: "Block",
            type: "block",
            styles: [
                { title: "Normal", value: "normal" },
                { title: "H1", value: "h1" },
                { title: "H2", value: "h2" },
                { title: "H3", value: "h3" },
                { title: "H4", value: "h4" },
                { title: "Quote", value: "blockquote" },
            ],
            marks: {
                decorators: [
                    { title: "Strong", value: "strong" },
                    { title: "Emphasis", value: "em" },
                    {
                        title: "Highlight",
                        value: "highlight",
                        blockEditor: {
                            icon: highlightIcon,
                            render: highlightRender,
                        },
                    },
                    { title: "Inline-code", value: "code" },
                ],
                annotations: [
                    {
                        name: "link",
                        type: "object",
                        title: "link",
                        fields: [
                            {
                                name: "url",
                                type: "url",
                            },
                        ],
                    },
                    {
                        name: "internalLink",
                        type: "object",
                        title: "Internal link",
                        blockEditor: {
                            icon: fa_1.FaPaperclip,
                        },
                        fields: [
                            {
                                name: "reference",
                                type: "reference",
                                to: [{ type: "article" }],
                            },
                        ],
                    },
                ],
            },
            lists: [
                { title: "Bullet", value: "bullet" },
                { title: "Number", value: "number" },
            ],
        },
        {
            type: "code",
        },
        {
            type: "image",
        },
    ],
};
/**
 * A simplified version of the rich text field config
 */
exports.summaryRichTextFieldConfig = {
    type: "array",
    of: [
        {
            title: "Block",
            type: "block",
            styles: [{ title: "Normal", value: "normal" }],
            marks: {
                decorators: [
                    { title: "Strong", value: "strong" },
                    { title: "Emphasis", value: "em" },
                    { title: "Inline-code", value: "code" },
                ],
                annotations: [
                    {
                        name: "link",
                        type: "object",
                        title: "link",
                        fields: [
                            {
                                name: "url",
                                type: "url",
                            },
                        ],
                    },
                    {
                        name: "internalLink",
                        type: "object",
                        title: "Internal link",
                        blockEditor: {
                            icon: fa_1.FaPaperclip,
                        },
                        fields: [
                            {
                                name: "reference",
                                type: "reference",
                                to: [{ type: "article" }],
                            },
                        ],
                    },
                ],
            },
            lists: [],
        },
    ],
};
