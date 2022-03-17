"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// First, we must import the schema creator
var schema_creator_1 = __importDefault(require("part:@sanity/base/schema-creator"));
// Then import schema types from any plugins that might expose them
var schema_type_1 = __importDefault(require("all:part:@sanity/base/schema-type"));
var creator_1 = __importDefault(require("./documents/creator"));
var article_1 = __importDefault(require("./documents/article"));
var project_1 = __importDefault(require("./documents/project"));
var projectLink_1 = __importDefault(require("./documents/projectLink"));
var projectLinkProvider_1 = __importDefault(require("./documents/projectLinkProvider"));
var category_1 = __importDefault(require("./documents/category"));
var employer_1 = __importDefault(require("./documents/employer"));
var series_1 = __importDefault(require("./documents/series"));
var jobTitle_1 = __importDefault(require("./documents/jobTitle"));
// Then we give our schema to the builder and provide the result to Sanity
exports.default = (0, schema_creator_1.default)({
    // We name our schema
    name: "default",
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schema_type_1.default.concat([
        category_1.default,
        creator_1.default,
        employer_1.default,
        jobTitle_1.default,
        article_1.default,
        project_1.default,
        projectLink_1.default,
        projectLinkProvider_1.default,
        series_1.default,
    ]),
});
