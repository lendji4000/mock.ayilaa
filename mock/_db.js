// _db.js

const users = require("./users/users");
const query = require("./documents/query");
const posts = require("./blog/posts");
const comments = require("./blog/comments");
const profile = require("./blog/profile");
const subcomments = require("./blog/subblog/subcomments");
module.exports = () => ({
    users,
    query,
    posts,
    comments,
    profile,
    subcomments
});

/**
 *
 */

// // _db.js
// const Path = require("path");
// const glob = require("glob");
// const config= require('./config.json');
// const apiFiles = glob.sync(
//     Path.resolve(__dirname, "./") + "/**/[!_]*.js",
//     {
//         nodir: true
//     }
// );
// // apiFiles will be :
// // [ '/Users/billy/Desktop/json-server-multiple-files-sample/mock/comments.js',
// //   '/Users/billy/Desktop/json-server-multiple-files-sample/mock/_db.js',
// //   '/Users/billy/Desktop/json-server-multiple-files-sample/mock/posts.js',
// //   '/Users/billy/Desktop/json-server-multiple-files-sample/mock/profile.js' ]
//
// let data = {};
//
// apiFiles.forEach(filePath => {
//     const api = require(filePath);
//     let [, url] = filePath.split("mock/"); // e.g. comments.js
//     url =  url.slice(url.length - 9) === "/index.js"
//         ? url.slice(0, url.length - 9) // remove /index.js
//         : url.slice(0, url.length - 3); // remove .js
//     data[url.replace(/\//g, '-')] = api; // the only change
// });
//
// // data will be :
// // { 'comments': [ { id: 1, body: 'some comment', postId: 1 } ],
// //   'db': {},
// //   'posts': [ { id: 1, title: 'json-server', author: 'typicode' } ],
// //   'profile': { name: 'typicode' } }
//
// module.exports = () => {
//     return data;
// };
