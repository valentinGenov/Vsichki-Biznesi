webpackHotUpdate("archive~post",{

/***/ "./packages/twentytwenty-theme/src/components/post/post-categories.js":
/*!****************************************************************************!*\
  !*** ./packages/twentytwenty-theme/src/components/post/post-categories.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! frontity */ \"./node_modules/frontity/dist/src/index.js\");\n/* harmony import */ var frontity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(frontity__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_screen_reader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/screen-reader */ \"./packages/twentytwenty-theme/src/components/styles/screen-reader.js\");\n/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link */ \"./packages/twentytwenty-theme/src/components/link.js\");\n/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/react/jsx-runtime */ \"./node_modules/@emotion/react/jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js\");\nfunction _EMOTION_STRINGIFIED_CSS_ERROR__(){return\"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).\";}const PostCategories=({categories})=>{// Remove empty or undefined categories\nconst postCategories=categories.filter(Boolean);if(postCategories.length===0){return null;}return Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxs\"])(EntryCategories,{children:[Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(_styles_screen_reader__WEBPACK_IMPORTED_MODULE_1__[\"default\"],{children:\"Categories\"}),Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(EntryCategoriesInner,{children:postCategories.map(category=>Object(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(CategoryTag,{link:category.link,children:Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"decode\"])(category.name)},category.id))})]});};/* harmony default export */ __webpack_exports__[\"default\"] = (Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"connect\"])(PostCategories));//    const EntryCategories = styled.div`\n//      line-height: 1.25;\n//      margin-bottom: 2rem;\n//\n//      @media (min-width: 700px) {\n//        margin-bottom: 3rem;\n//      }\n//    `;\nconst EntryCategoriesInner=Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(\"div\", false?undefined:{target:\"e13btr6x1\",label:\"EntryCategoriesInner\"})( false?undefined:{name:\"15qk1og\",styles:\"justify-content:center;display:flex;flex-wrap:wrap;margin:-0.5rem 0 0 -1rem;@media (min-width: 700px){margin:-1rem 0 0 -2rem;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxWc2ljaGtpQml6bmVzaVxcVnNpY2hraS1UZW1pXFxwYWNrYWdlc1xcdHdlbnR5dHdlbnR5LXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXHBvc3RcXHBvc3QtY2F0ZWdvcmllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQzJDIiwiZmlsZSI6IkQ6XFxWc2ljaGtpQml6bmVzaVxcVnNpY2hraS1UZW1pXFxwYWNrYWdlc1xcdHdlbnR5dHdlbnR5LXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXHBvc3RcXHBvc3QtY2F0ZWdvcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgU2NyZWVuUmVhZGVyVGV4dCBmcm9tIFwiLi4vc3R5bGVzL3NjcmVlbi1yZWFkZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9saW5rXCI7XG5cbmNvbnN0IFBvc3RDYXRlZ29yaWVzID0gKHsgY2F0ZWdvcmllcyB9KSA9PiB7XG4gIC8vIFJlbW92ZSBlbXB0eSBvciB1bmRlZmluZWQgY2F0ZWdvcmllc1xuICBjb25zdCBwb3N0Q2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuZmlsdGVyKEJvb2xlYW4pO1xuXG4gIGlmIChwb3N0Q2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEVudHJ5Q2F0ZWdvcmllcz5cbiAgICAgIDxTY3JlZW5SZWFkZXJUZXh0PkNhdGVnb3JpZXM8L1NjcmVlblJlYWRlclRleHQ+XG5cbiAgICAgIDxFbnRyeUNhdGVnb3JpZXNJbm5lcj5cbiAgICAgICAge3Bvc3RDYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICA8Q2F0ZWdvcnlUYWcga2V5PXtjYXRlZ29yeS5pZH0gbGluaz17Y2F0ZWdvcnkubGlua30+XG4gICAgICAgICAgICB7ZGVjb2RlKGNhdGVnb3J5Lm5hbWUpfVxuICAgICAgICAgIDwvQ2F0ZWdvcnlUYWc+XG4gICAgICAgICkpfVxuICAgICAgPC9FbnRyeUNhdGVnb3JpZXNJbm5lcj5cbiAgICA8L0VudHJ5Q2F0ZWdvcmllcz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUG9zdENhdGVnb3JpZXMpO1xuXG4vLyAgICBjb25zdCBFbnRyeUNhdGVnb3JpZXMgPSBzdHlsZWQuZGl2YFxuLy8gICAgICBsaW5lLWhlaWdodDogMS4yNTtcbi8vICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbi8vXG4vLyAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuLy8gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4vLyAgICAgIH1cbi8vICAgIGA7XG5cbiAgICBjb25zdCBFbnRyeUNhdGVnb3JpZXNJbm5lciA9IHN0eWxlZC5kaXZgXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBtYXJnaW46IC0wLjVyZW0gMCAwIC0xcmVtO1xuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgbWFyZ2luOiAtMXJlbSAwIDAgLTJyZW07XG4gICAgICB9XG4gICAgYDtcblxuY29uc3QgQ2F0ZWdvcnlUYWcgPSBzdHlsZWQoTGluaylgXG4gIGJvcmRlci1ib3R0b206IDAuMTVyZW0gc29saWQgY3VycmVudENvbG9yO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDM2NjY2NjY3ZW07XG4gIG1hcmdpbjogMC41cmVtIDAgMCAxcmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luOiAxcmVtIDAgMCAycmVtO1xuICB9XG5cbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAxNTBtcztcbiAgOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});const CategoryTag=/*#__PURE__*/Object(frontity__WEBPACK_IMPORTED_MODULE_0__[\"styled\"])(_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], false?undefined:{target:\"e13btr6x0\",label:\"CategoryTag\"})( false?undefined:{name:\"100n8le\",styles:\"border-bottom:0.15rem solid currentColor;font-size:1.4rem;font-weight:700;letter-spacing:0.036666667em;margin:0.5rem 0 0 1rem;text-decoration:none;text-transform:uppercase;@media (min-width: 700px){font-size:1.5rem;margin:1rem 0 0 2rem;}transition:border-bottom-color 150ms;:hover{border-bottom-color:transparent;}\",map:\"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxWc2ljaGtpQml6bmVzaVxcVnNpY2hraS1UZW1pXFxwYWNrYWdlc1xcdHdlbnR5dHdlbnR5LXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXHBvc3RcXHBvc3QtY2F0ZWdvcmllcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRGdDIiwiZmlsZSI6IkQ6XFxWc2ljaGtpQml6bmVzaVxcVnNpY2hraS1UZW1pXFxwYWNrYWdlc1xcdHdlbnR5dHdlbnR5LXRoZW1lXFxzcmNcXGNvbXBvbmVudHNcXHBvc3RcXHBvc3QtY2F0ZWdvcmllcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgU2NyZWVuUmVhZGVyVGV4dCBmcm9tIFwiLi4vc3R5bGVzL3NjcmVlbi1yZWFkZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9saW5rXCI7XG5cbmNvbnN0IFBvc3RDYXRlZ29yaWVzID0gKHsgY2F0ZWdvcmllcyB9KSA9PiB7XG4gIC8vIFJlbW92ZSBlbXB0eSBvciB1bmRlZmluZWQgY2F0ZWdvcmllc1xuICBjb25zdCBwb3N0Q2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuZmlsdGVyKEJvb2xlYW4pO1xuXG4gIGlmIChwb3N0Q2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEVudHJ5Q2F0ZWdvcmllcz5cbiAgICAgIDxTY3JlZW5SZWFkZXJUZXh0PkNhdGVnb3JpZXM8L1NjcmVlblJlYWRlclRleHQ+XG5cbiAgICAgIDxFbnRyeUNhdGVnb3JpZXNJbm5lcj5cbiAgICAgICAge3Bvc3RDYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICA8Q2F0ZWdvcnlUYWcga2V5PXtjYXRlZ29yeS5pZH0gbGluaz17Y2F0ZWdvcnkubGlua30+XG4gICAgICAgICAgICB7ZGVjb2RlKGNhdGVnb3J5Lm5hbWUpfVxuICAgICAgICAgIDwvQ2F0ZWdvcnlUYWc+XG4gICAgICAgICkpfVxuICAgICAgPC9FbnRyeUNhdGVnb3JpZXNJbm5lcj5cbiAgICA8L0VudHJ5Q2F0ZWdvcmllcz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUG9zdENhdGVnb3JpZXMpO1xuXG4vLyAgICBjb25zdCBFbnRyeUNhdGVnb3JpZXMgPSBzdHlsZWQuZGl2YFxuLy8gICAgICBsaW5lLWhlaWdodDogMS4yNTtcbi8vICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbi8vXG4vLyAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuLy8gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4vLyAgICAgIH1cbi8vICAgIGA7XG5cbiAgICBjb25zdCBFbnRyeUNhdGVnb3JpZXNJbm5lciA9IHN0eWxlZC5kaXZgXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBtYXJnaW46IC0wLjVyZW0gMCAwIC0xcmVtO1xuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgbWFyZ2luOiAtMXJlbSAwIDAgLTJyZW07XG4gICAgICB9XG4gICAgYDtcblxuY29uc3QgQ2F0ZWdvcnlUYWcgPSBzdHlsZWQoTGluaylgXG4gIGJvcmRlci1ib3R0b206IDAuMTVyZW0gc29saWQgY3VycmVudENvbG9yO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDM2NjY2NjY3ZW07XG4gIG1hcmdpbjogMC41cmVtIDAgMCAxcmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luOiAxcmVtIDAgMCAycmVtO1xuICB9XG5cbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAxNTBtcztcbiAgOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuYDtcbiJdfQ== */\",toString:_EMOTION_STRINGIFIED_CSS_ERROR__});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy90d2VudHl0d2VudHktdGhlbWUvc3JjL2NvbXBvbmVudHMvcG9zdC9wb3N0LWNhdGVnb3JpZXMuanM/MDFhMiJdLCJuYW1lcyI6WyJQb3N0Q2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJwb3N0Q2F0ZWdvcmllcyIsImZpbHRlciIsIkJvb2xlYW4iLCJsZW5ndGgiLCJtYXAiLCJjYXRlZ29yeSIsImxpbmsiLCJkZWNvZGUiLCJuYW1lIiwiaWQiLCJjb25uZWN0IiwiRW50cnlDYXRlZ29yaWVzSW5uZXIiLCJDYXRlZ29yeVRhZyIsIkxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7OztxUkFJQSxLQUFNQSxlQUFjLENBQUcsQ0FBQyxDQUFFQyxVQUFGLENBQUQsR0FBb0IsQ0FDekM7QUFDQSxLQUFNQyxlQUFjLENBQUdELFVBQVUsQ0FBQ0UsTUFBWCxDQUFrQkMsT0FBbEIsQ0FBdkIsQ0FFQSxHQUFJRixjQUFjLENBQUNHLE1BQWYsR0FBMEIsQ0FBOUIsQ0FBaUMsQ0FDL0IsTUFBTyxLQUFQLENBQ0QsQ0FFRCxNQUNFLHlFQUFDLGVBQUQsWUFDRSx1RUFBQyw2REFBRCx5QkFERixDQUdFLHVFQUFDLG9CQUFELFdBQ0dILGNBQWMsQ0FBQ0ksR0FBZixDQUFvQkMsUUFBRCxFQUNsQix1RUFBQyxXQUFELEVBQStCLElBQUksQ0FBRUEsUUFBUSxDQUFDQyxJQUE5QyxVQUNHQyx1REFBTSxDQUFDRixRQUFRLENBQUNHLElBQVYsQ0FEVCxFQUFrQkgsUUFBUSxDQUFDSSxFQUEzQixDQURELENBREgsRUFIRixHQURGLENBYUQsQ0FyQkQsQ0F1QmVDLHVIQUFPLENBQUNaLGNBQUQsQ0FBdEIsRUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUksS0FBTWEscUJBQW9CLGk5RkFBMUIsQ0FXSixLQUFNQyxZQUFXLENBQUcsb0VBQU0sQ0FBQ0MsNkNBQVAsMkRBQUgsMmdHQUFqQiIsImZpbGUiOiIuL3BhY2thZ2VzL3R3ZW50eXR3ZW50eS10aGVtZS9zcmMvY29tcG9uZW50cy9wb3N0L3Bvc3QtY2F0ZWdvcmllcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QsIHN0eWxlZCwgZGVjb2RlIH0gZnJvbSBcImZyb250aXR5XCI7XG5pbXBvcnQgU2NyZWVuUmVhZGVyVGV4dCBmcm9tIFwiLi4vc3R5bGVzL3NjcmVlbi1yZWFkZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9saW5rXCI7XG5cbmNvbnN0IFBvc3RDYXRlZ29yaWVzID0gKHsgY2F0ZWdvcmllcyB9KSA9PiB7XG4gIC8vIFJlbW92ZSBlbXB0eSBvciB1bmRlZmluZWQgY2F0ZWdvcmllc1xuICBjb25zdCBwb3N0Q2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuZmlsdGVyKEJvb2xlYW4pO1xuXG4gIGlmIChwb3N0Q2F0ZWdvcmllcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEVudHJ5Q2F0ZWdvcmllcz5cbiAgICAgIDxTY3JlZW5SZWFkZXJUZXh0PkNhdGVnb3JpZXM8L1NjcmVlblJlYWRlclRleHQ+XG5cbiAgICAgIDxFbnRyeUNhdGVnb3JpZXNJbm5lcj5cbiAgICAgICAge3Bvc3RDYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICA8Q2F0ZWdvcnlUYWcga2V5PXtjYXRlZ29yeS5pZH0gbGluaz17Y2F0ZWdvcnkubGlua30+XG4gICAgICAgICAgICB7ZGVjb2RlKGNhdGVnb3J5Lm5hbWUpfVxuICAgICAgICAgIDwvQ2F0ZWdvcnlUYWc+XG4gICAgICAgICkpfVxuICAgICAgPC9FbnRyeUNhdGVnb3JpZXNJbm5lcj5cbiAgICA8L0VudHJ5Q2F0ZWdvcmllcz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoUG9zdENhdGVnb3JpZXMpO1xuXG4vLyAgICBjb25zdCBFbnRyeUNhdGVnb3JpZXMgPSBzdHlsZWQuZGl2YFxuLy8gICAgICBsaW5lLWhlaWdodDogMS4yNTtcbi8vICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbi8vXG4vLyAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuLy8gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4vLyAgICAgIH1cbi8vICAgIGA7XG5cbiAgICBjb25zdCBFbnRyeUNhdGVnb3JpZXNJbm5lciA9IHN0eWxlZC5kaXZgXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBtYXJnaW46IC0wLjVyZW0gMCAwIC0xcmVtO1xuXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgbWFyZ2luOiAtMXJlbSAwIDAgLTJyZW07XG4gICAgICB9XG4gICAgYDtcblxuY29uc3QgQ2F0ZWdvcnlUYWcgPSBzdHlsZWQoTGluaylgXG4gIGJvcmRlci1ib3R0b206IDAuMTVyZW0gc29saWQgY3VycmVudENvbG9yO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDM2NjY2NjY3ZW07XG4gIG1hcmdpbjogMC41cmVtIDAgMCAxcmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luOiAxcmVtIDAgMCAycmVtO1xuICB9XG5cbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAxNTBtcztcbiAgOmhvdmVyIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/twentytwenty-theme/src/components/post/post-categories.js\n");

/***/ })

})