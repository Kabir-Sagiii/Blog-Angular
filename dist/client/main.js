(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/oCP":
/*!*****************************************!*\
  !*** ./src/app/effects/root.effects.ts ***!
  \*****************************************/
/*! exports provided: RootEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootEffects", function() { return RootEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");



class RootEffects {
    constructor(actions$) {
        this.actions$ = actions$;
    }
}
RootEffects.ɵfac = function RootEffects_Factory(t) { return new (t || RootEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"])); };
RootEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RootEffects, factory: RootEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\91720\Downloads\Profile\angular-social-app\client\src\main.ts */"zUnb");


/***/ }),

/***/ "38Tt":
/*!***********************************************!*\
  !*** ./src/app/users/actions/user.actions.ts ***!
  \***********************************************/
/*! exports provided: registerUser, registerUserSuccess, registerUserFailure, loginUser, loginUserSuccess, loginUserFailure, getUserInfo, getUserInfoSuccess, getUserInfoFailure, logOutUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUserSuccess", function() { return registerUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUserFailure", function() { return registerUserFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUser", function() { return loginUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUserSuccess", function() { return loginUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginUserFailure", function() { return loginUserFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfoSuccess", function() { return getUserInfoSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfoFailure", function() { return getUserInfoFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logOutUser", function() { return logOutUser; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// Register a User
const registerUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] register User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const registerUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] register User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const registerUserFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] register User Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Login a User
const loginUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] login User', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginUserSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] login User Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loginUserFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] login User Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Get User Info
const getUserInfo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] GET user Info');
const getUserInfoSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Get User Info Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const getUserInfoFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] Get User Info Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const logOutUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[User] LogOut User');


/***/ }),

/***/ "9l6A":
/*!*********************************************************!*\
  !*** ./src/app/developers/actions/developer.actions.ts ***!
  \*********************************************************/
/*! exports provided: loadDevelopers, loadDevelopersSuccess, loadDevelopersFailure, loadDeveloper, loadDeveloperSuccess, loadDeveloperFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDevelopers", function() { return loadDevelopers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDevelopersSuccess", function() { return loadDevelopersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDevelopersFailure", function() { return loadDevelopersFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDeveloper", function() { return loadDeveloper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDeveloperSuccess", function() { return loadDeveloperSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDeveloperFailure", function() { return loadDeveloperFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// get all profiles
const loadDevelopers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Developer] Load Developers');
const loadDevelopersSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Developer] Load Developers Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadDevelopersFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Developer] Load Developers Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// load a developer
const loadDeveloper = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Developer] Load Developer', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadDeveloperSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Developer] Load Developer Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadDeveloperFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Developer] Load Developer Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "A44q":
/*!************************************************!*\
  !*** ./src/app/posts/reducers/post.reducer.ts ***!
  \************************************************/
/*! exports provided: postFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postFeatureKey", function() { return postFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_post_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/post.actions */ "jynn");


const postFeatureKey = 'post';
const initialState = {
    loading: false,
    posts: [],
    selectedPost: {},
    errorMessage: ''
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, 
// load all Posts
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["loadAllPosts"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["loadAllPostsSuccess"], (state, { posts }) => {
    return Object.assign(Object.assign({}, state), { loading: false, posts: posts });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["loadAllPostsFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// Create Post
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["createPost"], (state, { text }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["createPostSuccess"], (state, { post }) => {
    return Object.assign(Object.assign({}, state), { loading: false, posts: [post, ...state.posts] });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["createPostFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// load a post
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["loadPost"], (state, { postId }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["loadPostSuccess"], (state, { post }) => {
    return Object.assign(Object.assign({}, state), { loading: false, selectedPost: post });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["loadPostFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// Create Comment
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["createComment"], (state, { text, postId }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["createCommentSuccess"], (state, { post }) => {
    return Object.assign(Object.assign({}, state), { loading: false, selectedPost: post });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["createCommentFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// delete Comment
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["deleteComment"], (state, { postId, commentId }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["deleteCommentSuccess"], (state, { post }) => {
    return Object.assign(Object.assign({}, state), { loading: false, selectedPost: post });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["deleteCommentFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// delete Post
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["deletePost"], (state, { postId }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["deletePostSuccess"], (state, { post }) => {
    return Object.assign(Object.assign({}, state), { loading: false, posts: state.posts.filter(selectedPost => selectedPost._id !== post._id) });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["deletePostFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// Like Post
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["likePost"], (state, { postId }) => {
    return Object.assign(Object.assign({}, state), { loading: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["likePostSuccess"], (state, { post }) => {
    let likedPosts = state.posts.map(selectedPost => {
        if (selectedPost._id === post._id) {
            return post;
        }
        return selectedPost;
    });
    return Object.assign(Object.assign({}, state), { loading: false, posts: likedPosts });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["likePostFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// Un-Like Post
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["unlikePost"], (state, { postId }) => {
    return Object.assign(Object.assign({}, state), { loading: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["unlikePostSuccess"], (state, { post }) => {
    let unLikedPosts = state.posts.map(selectedPost => {
        if (selectedPost._id === post._id) {
            return post;
        }
        return selectedPost;
    });
    return Object.assign(Object.assign({}, state), { loading: false, posts: unLikedPosts });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_1__["unlikePostFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}));


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    //  apiURL : 'http://127.0.0.1:5000'
    apiURL: ""
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DxbG":
/*!***********************************************!*\
  !*** ./src/app/root/reducers/util.reducer.ts ***!
  \***********************************************/
/*! exports provided: utilFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utilFeatureKey", function() { return utilFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_util_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/util.actions */ "R+vF");


const utilFeatureKey = 'util';
const initialState = {
    messages: []
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_util_actions__WEBPACK_IMPORTED_MODULE_1__["setAlertUtils"], (state, { message, color }) => {
    return Object.assign(Object.assign({}, state), { messages: [...state.messages, { message, color }] });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_util_actions__WEBPACK_IMPORTED_MODULE_1__["removeAlertUtils"], (state) => {
    return Object.assign(Object.assign({}, state), { messages: [] });
}));


/***/ }),

/***/ "E8O7":
/*!*****************************************************!*\
  !*** ./src/app/profiles/effects/profile.effects.ts ***!
  \*****************************************************/
/*! exports provided: ProfileEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEffects", function() { return ProfileEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/profile.actions */ "GYyd");
/* harmony import */ var _root_actions_util_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../root/actions/util.actions */ "R+vF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/profile.service */ "H6sQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");











class ProfileEffects {
    constructor(actions$, profileService, router) {
        this.actions$ = actions$;
        this.profileService = profileService;
        this.router = router;
        this.loadProfile = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["loadProfile"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])((action) => {
            return this.profileService.loadProfile()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(({ profile }) => [
                _actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["loadProfileSuccess"]({ profile })
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["loadProfileFailure"](error))));
        }));
        this.deleteExperience = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["deleteExperience"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])((action) => {
            return this.profileService.deleteExperience(action.experienceId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(({ profile }) => [
                _actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["deleteExperienceSuccess"]({ profile })
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["deleteExperienceFailure"](error))));
        }));
        this.deleteEducation = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["deleteEducation"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])((action) => {
            return this.profileService.deleteEducation(action.educationId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(({ profile }) => [
                _actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["deleteEducationSuccess"]({ profile })
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["deleteEducationFailure"](error))));
        }));
        this.updateProfile = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["updateProfile"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])((action) => {
            return this.profileService.updateProfile(action.profile)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(({ profile }) => [
                _actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["updateProfileSuccess"]({ profile }),
                _root_actions_util_actions__WEBPACK_IMPORTED_MODULE_4__["setAlertUtils"]({ message: 'Profile is Updated', color: 'success' })
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["updateProfileFailure"](error))));
        }));
        this.createProfile = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["createProfile"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])((action) => {
            return this.profileService.createProfile(action.profile)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(({ profile }) => [
                _actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["createProfileSuccess"]({ profile }),
                _root_actions_util_actions__WEBPACK_IMPORTED_MODULE_4__["setAlertUtils"]({ message: 'Profile is Created', color: 'success' })
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["createProfileFailure"](error))));
        }));
        this.addExperience = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["addExperience"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])((action) => {
            return this.profileService.addExperience(action.experience)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(({ profile }) => [
                _actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["addExperienceSuccess"]({ profile }),
                _root_actions_util_actions__WEBPACK_IMPORTED_MODULE_4__["setAlertUtils"]({ message: 'Experience is Added', color: 'success' })
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["addExperienceFailure"](error))));
        }));
        this.addEducation = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["addEducation"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])((action) => {
            return this.profileService.addEducation(action.education)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(({ profile }) => [
                _actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["addEducationSuccess"]({ profile }),
                _root_actions_util_actions__WEBPACK_IMPORTED_MODULE_4__["setAlertUtils"]({ message: 'Education is Added', color: 'success' })
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["addEducationFailure"](error))));
        }));
        // Routing / Redirection
        // if update Profile is success, redirect to dashboard page
        this.updateProfileSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["updateProfileSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.router.navigate(['/profiles/dashboard'])));
        // if Create Profile is success, redirect to dashboard page
        this.createProfileSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["createProfileSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.router.navigate(['/profiles/dashboard'])));
        // if add Experience is success, redirect to dashboard page
        this.addExperienceSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["addExperienceSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.router.navigate(['/profiles/dashboard'])));
        // if add Education is success, redirect to dashboard page
        this.addEducationSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["addEducationSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.router.navigate(['/profiles/dashboard'])));
    }
}
ProfileEffects.ɵfac = function ProfileEffects_Factory(t) { return new (t || ProfileEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
ProfileEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProfileEffects, factory: ProfileEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], ProfileEffects.prototype, "loadProfile", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], ProfileEffects.prototype, "deleteExperience", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], ProfileEffects.prototype, "deleteEducation", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], ProfileEffects.prototype, "updateProfile", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], ProfileEffects.prototype, "createProfile", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], ProfileEffects.prototype, "addExperience", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], ProfileEffects.prototype, "addEducation", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], ProfileEffects.prototype, "updateProfileSuccess$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], ProfileEffects.prototype, "createProfileSuccess$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], ProfileEffects.prototype, "addExperienceSuccess$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], ProfileEffects.prototype, "addEducationSuccess$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProfileEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { loadProfile: [], deleteExperience: [], deleteEducation: [], updateProfile: [], createProfile: [], addExperience: [], addEducation: [], updateProfileSuccess$: [], createProfileSuccess$: [], addExperienceSuccess$: [], addEducationSuccess$: [] }); })();


/***/ }),

/***/ "EvAZ":
/*!**********************************************************!*\
  !*** ./src/app/developers/reducers/developer.reducer.ts ***!
  \**********************************************************/
/*! exports provided: developerFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "developerFeatureKey", function() { return developerFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_developer_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/developer.actions */ "9l6A");


const developerFeatureKey = 'developer';
const initialState = {
    loading: false,
    developers: [],
    developer: {},
    errorMessage: ''
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, 
// get all developers
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_developer_actions__WEBPACK_IMPORTED_MODULE_1__["loadDevelopers"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_developer_actions__WEBPACK_IMPORTED_MODULE_1__["loadDevelopersSuccess"], (state, { developers }) => {
    return Object.assign(Object.assign({}, state), { loading: false, developers: developers });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_developer_actions__WEBPACK_IMPORTED_MODULE_1__["loadDevelopersFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// get a developer
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_developer_actions__WEBPACK_IMPORTED_MODULE_1__["loadDeveloper"], (state, { developerId }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_developer_actions__WEBPACK_IMPORTED_MODULE_1__["loadDeveloperSuccess"], (state, { developer }) => {
    return Object.assign(Object.assign({}, state), { loading: false, developer: developer });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_developer_actions__WEBPACK_IMPORTED_MODULE_1__["loadDeveloperFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}));


/***/ }),

/***/ "GYyd":
/*!*****************************************************!*\
  !*** ./src/app/profiles/actions/profile.actions.ts ***!
  \*****************************************************/
/*! exports provided: loadProfile, loadProfileSuccess, loadProfileFailure, deleteExperience, deleteExperienceSuccess, deleteExperienceFailure, deleteEducation, deleteEducationSuccess, deleteEducationFailure, updateProfile, updateProfileSuccess, updateProfileFailure, addExperience, addExperienceSuccess, addExperienceFailure, addEducation, addEducationSuccess, addEducationFailure, clearProfile, createProfile, createProfileSuccess, createProfileFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProfile", function() { return loadProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProfileSuccess", function() { return loadProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProfileFailure", function() { return loadProfileFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteExperience", function() { return deleteExperience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteExperienceSuccess", function() { return deleteExperienceSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteExperienceFailure", function() { return deleteExperienceFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEducation", function() { return deleteEducation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEducationSuccess", function() { return deleteEducationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEducationFailure", function() { return deleteEducationFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfile", function() { return updateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfileSuccess", function() { return updateProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfileFailure", function() { return updateProfileFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExperience", function() { return addExperience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExperienceSuccess", function() { return addExperienceSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addExperienceFailure", function() { return addExperienceFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEducation", function() { return addEducation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEducationSuccess", function() { return addEducationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEducationFailure", function() { return addEducationFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearProfile", function() { return clearProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProfile", function() { return createProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProfileSuccess", function() { return createProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProfileFailure", function() { return createProfileFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// load Profile
const loadProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] Load Profile');
const loadProfileSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] Load Profile Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadProfileFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] Load Profile Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// delete Experience
const deleteExperience = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] Delete Experience', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteExperienceSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] Delete Experience Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteExperienceFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] Delete Experience Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// delete Education
const deleteEducation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] Delete Education', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteEducationSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] Delete Education Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteEducationFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] Delete Education Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Update Profile
const updateProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] Update Profile', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateProfileSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] Update Profile Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateProfileFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] Update Profile Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Add Experience
const addExperience = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] Add Experience', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addExperienceSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] Add Experience Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addExperienceFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] Add Experience Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Add Education
const addEducation = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] Add Education', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addEducationSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] Add Education Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addEducationFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] Add Education Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Clear Profile
const clearProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] Clear Profile');
// create Profile
const createProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] create Profile', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createProfileSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] create Profile Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createProfileFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Profile] create Profile Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "H6sQ":
/*!******************************************************!*\
  !*** ./src/app/profiles/services/profile.service.ts ***!
  \******************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../root/util/ErrorHandlerUtil */ "ydcC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class ProfileService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    // load a Profile
    loadProfile() {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/api/profiles/me`;
        return this.httpClient.get(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerUtil"].handleError));
    }
    // Delete Experience
    deleteExperience(experienceId) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/api/profiles/experience/${experienceId}`;
        return this.httpClient.delete(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerUtil"].handleError));
    }
    // Delete Education
    deleteEducation(educationId) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/api/profiles/education/${educationId}`;
        return this.httpClient.delete(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerUtil"].handleError));
    }
    // Update Profile
    updateProfile(profile) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/api/profiles/`;
        return this.httpClient.put(dataURL, profile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerUtil"].handleError));
    }
    // add Experience
    addExperience(experience) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/api/profiles/experience`;
        return this.httpClient.put(dataURL, experience).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerUtil"].handleError));
    }
    // add Education
    addEducation(education) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/api/profiles/education`;
        return this.httpClient.put(dataURL, education).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerUtil"].handleError));
    }
    // Create Profile
    createProfile(profile) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/api/profiles/`;
        return this.httpClient.post(dataURL, profile).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerUtil"].handleError));
    }
}
ProfileService.ɵfac = function ProfileService_Factory(t) { return new (t || ProfileService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ProfileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProfileService, factory: ProfileService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "IGZg":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _app_root_reducers_util_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app/root/reducers/util.reducer */ "DxbG");
/* harmony import */ var _app_users_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/users/reducers/user.reducer */ "x2SL");
/* harmony import */ var _app_developers_reducers_developer_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/developers/reducers/developer.reducer */ "EvAZ");
/* harmony import */ var _app_profiles_reducers_profile_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/profiles/reducers/profile.reducer */ "Ti/k");
/* harmony import */ var _app_posts_reducers_post_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/posts/reducers/post.reducer */ "A44q");






const reducers = {
    [_app_root_reducers_util_reducer__WEBPACK_IMPORTED_MODULE_1__["utilFeatureKey"]]: _app_root_reducers_util_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
    [_app_users_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_2__["userFeatureKey"]]: _app_users_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
    [_app_developers_reducers_developer_reducer__WEBPACK_IMPORTED_MODULE_3__["developerFeatureKey"]]: _app_developers_reducers_developer_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"],
    [_app_profiles_reducers_profile_reducer__WEBPACK_IMPORTED_MODULE_4__["profileFeatureKey"]]: _app_profiles_reducers_profile_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"],
    [_app_posts_reducers_post_reducer__WEBPACK_IMPORTED_MODULE_5__["postFeatureKey"]]: _app_posts_reducers_post_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"]
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "IQPI":
/*!*******************************************************!*\
  !*** ./src/app/root/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _users_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../users/services/user.service */ "zLM3");



class AuthInterceptor {
    constructor(userService) {
        this.userService = userService;
    }
    intercept(request, next) {
        let tokenizedRequest = request.clone({
            setHeaders: {
                'x-auth-token': `${this.userService.getToken()}`
            }
        });
        return next.handle(tokenizedRequest);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_users_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"])); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _users_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }]; }, null); })();


/***/ }),

/***/ "J21F":
/*!***********************************************!*\
  !*** ./src/app/posts/effects/post.effects.ts ***!
  \***********************************************/
/*! exports provided: PostEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEffects", function() { return PostEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _actions_post_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/post.actions */ "jynn");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/post.service */ "TWdz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");










class PostEffects {
    constructor(actions$, postService, router) {
        this.actions$ = actions$;
        this.postService = postService;
        this.router = router;
        this.loadAllPosts = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["loadAllPosts"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((action) => {
            return this.postService.loadAllPosts()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(({ posts }) => [
                _actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["loadAllPostsSuccess"]({ posts })
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["loadAllPostsFailure"](error))));
        }));
        this.loadPost = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["loadPost"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((action) => {
            return this.postService.loadPost(action.postId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(({ post }) => [
                _actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["loadPostSuccess"]({ post })
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["loadPostFailure"](error))));
        }));
        this.createPost = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["createPost"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => {
            return this.postService.createPost(action.text)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(({ post }) => [
                _actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["createPostSuccess"]({ post })
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["createPostFailure"](error))));
        }));
        this.createComment = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["createComment"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => {
            return this.postService.createComment(action.text, action.postId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(({ post }) => [
                _actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["createCommentSuccess"]({ post })
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["createCommentFailure"](error))));
        }));
        this.deleteComment = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["deleteComment"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => {
            return this.postService.deleteComment(action.postId, action.commentId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(({ post }) => [
                _actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["deleteCommentSuccess"]({ post })
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["deleteCommentFailure"](error))));
        }));
        this.deletePost = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["deletePost"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => {
            return this.postService.deletePost(action.postId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(({ post }) => [
                _actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["deletePostSuccess"]({ post })
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["deletePostFailure"](error))));
        }));
        this.likePost = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["likePost"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => {
            return this.postService.likePost(action.postId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(({ post }) => [
                _actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["likePostSuccess"]({ post })
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["likePostFailure"](error))));
        }));
        this.unlikePost = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["unlikePost"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((action) => {
            return this.postService.unlikePost(action.postId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(({ post }) => [
                _actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["unlikePostSuccess"]({ post })
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_post_actions__WEBPACK_IMPORTED_MODULE_3__["unlikePostFailure"](error))));
        }));
    }
}
PostEffects.ɵfac = function PostEffects_Factory(t) { return new (t || PostEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
PostEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PostEffects, factory: PostEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], PostEffects.prototype, "loadAllPosts", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], PostEffects.prototype, "loadPost", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], PostEffects.prototype, "createPost", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], PostEffects.prototype, "createComment", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], PostEffects.prototype, "deleteComment", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], PostEffects.prototype, "deletePost", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], PostEffects.prototype, "likePost", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], PostEffects.prototype, "unlikePost", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PostEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { loadAllPosts: [], loadPost: [], createPost: [], createComment: [], deleteComment: [], deletePost: [], likePost: [], unlikePost: [] }); })();


/***/ }),

/***/ "JKHU":
/*!***********************************************!*\
  !*** ./src/app/users/effects/user.effects.ts ***!
  \***********************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _users_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../users/actions/user.actions */ "38Tt");
/* harmony import */ var _root_actions_util_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../root/actions/util.actions */ "R+vF");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/user.service */ "zLM3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");











class UserEffects {
    constructor(actions$, userService, router) {
        this.actions$ = actions$;
        this.userService = userService;
        this.router = router;
        /*@Effect()
        public registerUser(){
          return this.actions$.pipe(
            ofType(userActions.registerUser),
            concatMap((action) => this.userService.registerUser(action.user).pipe(
              map(({msg}) => userActions.registerUserSuccess({msg})),
              catchError((error) => of(userActions.registerUserFailure({error})))
            ))
          )
        }*/
        this.registerUser = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_users_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["registerUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])((action) => {
            return this.userService.registerUser(action.user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(({ msg }) => [
                _users_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["registerUserSuccess"]({ msg }),
                _root_actions_util_actions__WEBPACK_IMPORTED_MODULE_4__["setAlertUtils"]({ message: msg, color: 'success' })
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_users_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["registerUserFailure"](error))));
        }));
        this.loginUser = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_users_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["loginUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])((action) => {
            return this.userService.loginUser(action.user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(({ msg, token }) => [
                _users_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["loginUserSuccess"]({ msg, token }),
                _root_actions_util_actions__WEBPACK_IMPORTED_MODULE_4__["setAlertUtils"]({ message: msg, color: 'success' }),
                _users_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["getUserInfo"]()
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_users_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["loginUserFailure"](error))));
        }));
        this.getUserInfo = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_users_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["getUserInfo"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])((action) => {
            return this.userService.getUserInfo()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(({ user }) => [
                _users_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["getUserInfoSuccess"]({ user })
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(_users_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["getUserInfoFailure"](error))));
        }));
        // if registration is success, redirect to login page
        this.registerUserSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_users_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["registerUserSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.router.navigate(['/users/login'])));
        // if login is success, redirect to home page
        this.loginUserSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_users_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["loginUserSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.router.navigate(['/posts/list'])));
    }
}
UserEffects.ɵfac = function UserEffects_Factory(t) { return new (t || UserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
UserEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserEffects, factory: UserEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserEffects.prototype, "registerUser", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserEffects.prototype, "loginUser", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], UserEffects.prototype, "getUserInfo", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], UserEffects.prototype, "registerUserSuccess$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
], UserEffects.prototype, "loginUserSuccess$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { registerUser: [], loginUser: [], getUserInfo: [], registerUserSuccess$: [], loginUserSuccess$: [] }); })();


/***/ }),

/***/ "K9gB":
/*!*********************************************************!*\
  !*** ./src/app/developers/effects/developer.effects.ts ***!
  \*********************************************************/
/*! exports provided: DeveloperEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperEffects", function() { return DeveloperEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _actions_developer_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/developer.actions */ "9l6A");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_developer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/developer.service */ "RMQE");









class DeveloperEffects {
    constructor(actions$, developerService) {
        this.actions$ = actions$;
        this.developerService = developerService;
        this.loadDevelopers = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_developer_actions__WEBPACK_IMPORTED_MODULE_3__["loadDevelopers"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((action) => {
            return this.developerService.loadDevelopers()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(({ developers }) => [
                _actions_developer_actions__WEBPACK_IMPORTED_MODULE_3__["loadDevelopersSuccess"]({ developers })
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_developer_actions__WEBPACK_IMPORTED_MODULE_3__["loadDevelopersFailure"](error))));
        }));
        this.loadDeveloper = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_developer_actions__WEBPACK_IMPORTED_MODULE_3__["loadDeveloper"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((action) => {
            return this.developerService.loadDeveloper(action.developerId)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(({ developer }) => [
                _actions_developer_actions__WEBPACK_IMPORTED_MODULE_3__["loadDeveloperSuccess"]({ developer })
            ]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_actions_developer_actions__WEBPACK_IMPORTED_MODULE_3__["loadDeveloperFailure"](error))));
        }));
    }
}
DeveloperEffects.ɵfac = function DeveloperEffects_Factory(t) { return new (t || DeveloperEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_developer_service__WEBPACK_IMPORTED_MODULE_6__["DeveloperService"])); };
DeveloperEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DeveloperEffects, factory: DeveloperEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], DeveloperEffects.prototype, "loadDevelopers", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
], DeveloperEffects.prototype, "loadDeveloper", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DeveloperEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] }, { type: _services_developer_service__WEBPACK_IMPORTED_MODULE_6__["DeveloperService"] }]; }, { loadDevelopers: [], loadDeveloper: [] }); })();


/***/ }),

/***/ "KKCB":
/*!****************************************************!*\
  !*** ./src/app/root/util/alert/alert.component.ts ***!
  \****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _root_reducers_util_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../root/reducers/util.reducer */ "DxbG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AlertComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("alert-success", message_r1.color === "success")("alert-danger", message_r1.color === "danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r1.message);
} }
class AlertComponent {
    constructor(store) {
        this.store = store;
        this.messages = [];
    }
    ngOnInit() {
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_root_reducers_util_reducer__WEBPACK_IMPORTED_MODULE_2__["utilFeatureKey"])).subscribe((state) => {
            this.messages = state.messages;
        });
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["app-alert"]], decls: 1, vars: 1, consts: [["class", "alert alert-dismissible fixed-top animated slideInDown m-2", 3, "alert-success", "alert-danger", 4, "ngFor", "ngForOf"], [1, "alert", "alert-dismissible", "fixed-top", "animated", "slideInDown", "m-2"], ["data-dismiss", "alert", 1, "close"], [1, "fa", "fa-times-circle"], [1, "font-weight-bold"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 5, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGVydC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alert',
                templateUrl: './alert.component.html',
                styleUrls: ['./alert.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "R+vF":
/*!**********************************************!*\
  !*** ./src/app/root/actions/util.actions.ts ***!
  \**********************************************/
/*! exports provided: setAlertUtils, removeAlertUtils, loadUtilsSuccess, loadUtilsFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAlertUtils", function() { return setAlertUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAlertUtils", function() { return removeAlertUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUtilsSuccess", function() { return loadUtilsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadUtilsFailure", function() { return loadUtilsFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const setAlertUtils = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Util] Set Alert Utils', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const removeAlertUtils = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Util] Remove Alert Utils');
const loadUtilsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Util] Load Utils Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadUtilsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Util] Load Utils Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "RMQE":
/*!**********************************************************!*\
  !*** ./src/app/developers/services/developer.service.ts ***!
  \**********************************************************/
/*! exports provided: DeveloperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeveloperService", function() { return DeveloperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../root/util/ErrorHandlerUtil */ "ydcC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class DeveloperService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    // load all Developers
    loadDevelopers() {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/api/profiles`;
        return this.httpClient.get(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerUtil"].handleError));
    }
    // load a Developer
    loadDeveloper(developerId) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/api/profiles/users/${developerId}`;
        return this.httpClient.get(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerUtil"].handleError));
    }
}
DeveloperService.ɵfac = function DeveloperService_Factory(t) { return new (t || DeveloperService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
DeveloperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DeveloperService, factory: DeveloperService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeveloperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _root_util_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./root/util/alert/alert.component */ "KKCB");
/* harmony import */ var _root_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./root/components/navbar/navbar.component */ "hlyh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } }, directives: [_root_util_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"], _root_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "TWdz":
/*!************************************************!*\
  !*** ./src/app/posts/services/post.service.ts ***!
  \************************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../root/util/ErrorHandlerUtil */ "ydcC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class PostService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    // load all Posts
    loadAllPosts() {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/api/posts`;
        return this.httpClient.get(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerUtil"].handleError));
    }
    // load Post
    loadPost(postId) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/api/posts/${postId}`;
        return this.httpClient.get(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerUtil"].handleError));
    }
    // Create a Post
    createPost(text) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/api/posts`;
        return this.httpClient.post(dataURL, { text: text }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerUtil"].handleError));
    }
    // Create a Comment
    createComment(text, postId) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/api/posts/comment/${postId}`;
        return this.httpClient.post(dataURL, { text: text }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerUtil"].handleError));
    }
    // Delete Comment
    deleteComment(postId, commentId) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/api/posts/comment/${postId}/${commentId}`;
        return this.httpClient.delete(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerUtil"].handleError));
    }
    // Delete Post
    deletePost(postId) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/api/posts/${postId}`;
        return this.httpClient.delete(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerUtil"].handleError));
    }
    // Like Post
    likePost(postId) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/api/posts/like/${postId}`;
        return this.httpClient.put(dataURL, postId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerUtil"].handleError));
    }
    // Un-Like Post
    unlikePost(postId) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/api/posts/unlike/${postId}`;
        return this.httpClient.put(dataURL, postId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerUtil"].handleError));
    }
}
PostService.ɵfac = function PostService_Factory(t) { return new (t || PostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
PostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostService, factory: PostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Ti/k":
/*!******************************************************!*\
  !*** ./src/app/profiles/reducers/profile.reducer.ts ***!
  \******************************************************/
/*! exports provided: profileFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileFeatureKey", function() { return profileFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/profile.actions */ "GYyd");


const profileFeatureKey = 'profile';
const initialState = {
    loading: false,
    profile: {},
    errorMessage: ''
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, 
// load Profile
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["loadProfile"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["loadProfileSuccess"], (state, { profile }) => {
    return Object.assign(Object.assign({}, state), { loading: false, profile: profile });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["loadProfileFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// delete Experience
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["deleteExperience"], (state, { experienceId }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["deleteExperienceSuccess"], (state, { profile }) => {
    return Object.assign(Object.assign({}, state), { loading: false, profile: profile });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["deleteExperienceFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// delete Education
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["deleteEducation"], (state, { educationId }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["deleteEducationSuccess"], (state, { profile }) => {
    return Object.assign(Object.assign({}, state), { loading: false, profile: profile });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["deleteEducationFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// update Profile
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["updateProfile"], (state, { profile }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["updateProfileSuccess"], (state, { profile }) => {
    return Object.assign(Object.assign({}, state), { loading: false, profile: profile });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["updateProfileFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// add Experience
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["addExperience"], (state, { experience }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["addExperienceSuccess"], (state, { profile }) => {
    return Object.assign(Object.assign({}, state), { loading: false, profile: profile });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["addExperienceFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// add Education
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["addEducation"], (state, { education }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["addEducationSuccess"], (state, { profile }) => {
    return Object.assign(Object.assign({}, state), { loading: false, profile: profile });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["addEducationFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// clear Profile
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["clearProfile"], (state) => {
    return Object.assign(Object.assign({}, state), { profile: {} });
}), 
// Create Profile
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["createProfile"], (state, { profile }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["createProfileSuccess"], (state, { profile }) => {
    return Object.assign(Object.assign({}, state), { loading: false, profile: profile });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_profile_actions__WEBPACK_IMPORTED_MODULE_1__["createProfileFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}));


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "IGZg");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _effects_root_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./effects/root.effects */ "/oCP");
/* harmony import */ var _developers_effects_developer_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./developers/effects/developer.effects */ "K9gB");
/* harmony import */ var _users_effects_user_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/effects/user.effects */ "JKHU");
/* harmony import */ var _profiles_effects_profile_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./profiles/effects/profile.effects */ "E8O7");
/* harmony import */ var _posts_effects_post_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./posts/effects/post.effects */ "J21F");
/* harmony import */ var _root_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./root/components/navbar/navbar.component */ "hlyh");
/* harmony import */ var _root_components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./root/components/home/home.component */ "vg3d");
/* harmony import */ var _root_util_alert_alert_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./root/util/alert/alert.component */ "KKCB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _root_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./root/interceptors/auth.interceptor */ "IQPI");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
            useClass: _root_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__["AuthInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_5__["metaReducers"] }),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument() : [],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([_effects_root_effects__WEBPACK_IMPORTED_MODULE_9__["RootEffects"], _developers_effects_developer_effects__WEBPACK_IMPORTED_MODULE_10__["DeveloperEffects"], _users_effects_user_effects__WEBPACK_IMPORTED_MODULE_11__["UserEffects"], _profiles_effects_profile_effects__WEBPACK_IMPORTED_MODULE_12__["ProfileEffects"], _posts_effects_post_effects__WEBPACK_IMPORTED_MODULE_13__["PostEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _root_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
        _root_components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
        _root_util_alert_alert_component__WEBPACK_IMPORTED_MODULE_16__["AlertComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _root_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
                    _root_components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                    _root_util_alert_alert_component__WEBPACK_IMPORTED_MODULE_16__["AlertComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_5__["metaReducers"] }),
                    !_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument() : [],
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forRoot([_effects_root_effects__WEBPACK_IMPORTED_MODULE_9__["RootEffects"], _developers_effects_developer_effects__WEBPACK_IMPORTED_MODULE_10__["DeveloperEffects"], _users_effects_user_effects__WEBPACK_IMPORTED_MODULE_11__["UserEffects"], _profiles_effects_profile_effects__WEBPACK_IMPORTED_MODULE_12__["ProfileEffects"], _posts_effects_post_effects__WEBPACK_IMPORTED_MODULE_13__["PostEffects"]])
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
                        useClass: _root_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__["AuthInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "hlyh":
/*!************************************************************!*\
  !*** ./src/app/root/components/navbar/navbar.component.ts ***!
  \************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _users_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../users/actions/user.actions */ "38Tt");
/* harmony import */ var _profiles_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../profiles/actions/profile.actions */ "GYyd");
/* harmony import */ var _users_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../users/reducers/user.reducer */ "x2SL");
/* harmony import */ var _users_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../users/services/user.service */ "zLM3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function NavbarComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_li_11_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.clickLogOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " LogOut");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(store, userService) {
        this.store = store;
        this.userService = userService;
        this.user = {};
    }
    ngOnInit() {
        if (this.userService.isLoggedIn()) {
            this.store.dispatch(_users_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["getUserInfo"]());
            // get user info from the store
            this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_users_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_4__["userFeatureKey"])).subscribe((state) => {
                this.user = state.user;
            });
        }
    }
    hasUser() {
        return Object.keys(this.user).length > 0;
    }
    loggedInUser() {
        return this.userService.isLoggedIn();
    }
    clickLogOut() {
        this.store.dispatch(_profiles_actions_profile_actions__WEBPACK_IMPORTED_MODULE_3__["clearProfile"]());
        this.store.dispatch(_users_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["logOutUser"]());
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_users_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 12, vars: 3, consts: [[1, "navbar", "navbar-dark", "bg-dark", "navbar-expand-sm"], [1, "container"], ["routerLink", "/", 1, "navbar-brand"], [1, "fa", "fa-code"], [1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], [1, "navbar-nav", "ml-auto"], ["class", "nav-item", 4, "ngIf"], ["routerLink", "/users/register", 1, "nav-link"], ["routerLink", "/users/login", 1, "nav-link"], ["routerLink", "/", 1, "nav-link", 3, "click"], [1, "fa", "fa-sign-out-alt"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Social App ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavbarComponent_li_9_Template, 3, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_li_10_Template, 3, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavbarComponent_li_11_Template, 4, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedInUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loggedInUser());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loggedInUser());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _users_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }]; }, null); })();


/***/ }),

/***/ "jynn":
/*!***********************************************!*\
  !*** ./src/app/posts/actions/post.actions.ts ***!
  \***********************************************/
/*! exports provided: loadAllPosts, loadAllPostsSuccess, loadAllPostsFailure, createPost, createPostSuccess, createPostFailure, loadPost, loadPostSuccess, loadPostFailure, createComment, createCommentSuccess, createCommentFailure, deleteComment, deleteCommentSuccess, deleteCommentFailure, deletePost, deletePostSuccess, deletePostFailure, likePost, likePostSuccess, likePostFailure, unlikePost, unlikePostSuccess, unlikePostFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllPosts", function() { return loadAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllPostsSuccess", function() { return loadAllPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAllPostsFailure", function() { return loadAllPostsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPost", function() { return createPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPostSuccess", function() { return createPostSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPostFailure", function() { return createPostFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPost", function() { return loadPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPostSuccess", function() { return loadPostSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPostFailure", function() { return loadPostFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComment", function() { return createComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCommentSuccess", function() { return createCommentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCommentFailure", function() { return createCommentFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteComment", function() { return deleteComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCommentSuccess", function() { return deleteCommentSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCommentFailure", function() { return deleteCommentFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePost", function() { return deletePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePostSuccess", function() { return deletePostSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePostFailure", function() { return deletePostFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likePost", function() { return likePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likePostSuccess", function() { return likePostSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "likePostFailure", function() { return likePostFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlikePost", function() { return unlikePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlikePostSuccess", function() { return unlikePostSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlikePostFailure", function() { return unlikePostFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// to load all posts
const loadAllPosts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] Load All Posts');
const loadAllPostsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] Load All Posts Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadAllPostsFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] Load All Posts Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Create Post
const createPost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] Create Post', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createPostSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] Create Post Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createPostFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] Create Post Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// load a post
const loadPost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] Load Post', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadPostSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] Load Post Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadPostFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] Load Post Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// Create Comment
const createComment = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] Create Comment', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createCommentSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] Create Comment Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createCommentFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] Create Comment Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// delete Comment
const deleteComment = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] delete Comment', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteCommentSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] delete Comment Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteCommentFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] delete Comment Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// delete Post
const deletePost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] delete Post', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deletePostSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] delete Post Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deletePostFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] delete Post Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// like Post
const likePost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] like Post', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const likePostSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] like Post Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const likePostFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] like Post Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// unlike Post
const unlikePost = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] unlike Post', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const unlikePostSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] unlike Post Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const unlikePostFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Post] unlike Post Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _root_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./root/components/home/home.component */ "vg3d");





const routes = [
    { path: '', component: _root_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'developers', loadChildren: () => __webpack_require__.e(/*! import() | developers-developers-module */ "developers-developers-module").then(__webpack_require__.bind(null, /*! ./developers/developers.module */ "5mqb")).then(m => m.DevelopersModule) }, { path: 'posts', loadChildren: () => Promise.all(/*! import() | posts-posts-module */[__webpack_require__.e("default~posts-posts-module~profiles-profiles-module~users-users-module"), __webpack_require__.e("posts-posts-module")]).then(__webpack_require__.bind(null, /*! ./posts/posts.module */ "1XP4")).then(m => m.PostsModule) }, { path: 'profiles', loadChildren: () => Promise.all(/*! import() | profiles-profiles-module */[__webpack_require__.e("default~posts-posts-module~profiles-profiles-module~users-users-module"), __webpack_require__.e("profiles-profiles-module")]).then(__webpack_require__.bind(null, /*! ./profiles/profiles.module */ "YxGc")).then(m => m.ProfilesModule) }, { path: 'users', loadChildren: () => Promise.all(/*! import() | users-users-module */[__webpack_require__.e("default~posts-posts-module~profiles-profiles-module~users-users-module"), __webpack_require__.e("users-users-module")]).then(__webpack_require__.bind(null, /*! ./users/users.module */ "zrcO")).then(m => m.UsersModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vg3d":
/*!********************************************************!*\
  !*** ./src/app/root/components/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 12, vars: 0, consts: [[1, "landing-page"], [1, "wrapper"], [1, "d-flex", "flex-column", "align-items-center", "justify-content-center", "text-center", "h-100"], [1, "display-4"], [1, "lead", "px-4"], ["routerLink", "/users/register", 1, "btn", "btn-light", "text-teal", "btn-sm"], ["routerLink", "/users/login", 1, "btn", "btn-teal", "btn-sm"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The Social Media App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A fun place for developers and friends to share ideas on technology.Plenty of cool discussions!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "x2SL":
/*!************************************************!*\
  !*** ./src/app/users/reducers/user.reducer.ts ***!
  \************************************************/
/*! exports provided: userFeatureKey, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userFeatureKey", function() { return userFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/user.actions */ "38Tt");


const userFeatureKey = 'user';
const initialState = {
    loading: false,
    isAuthenticated: false,
    token: '',
    user: {},
    errorMessage: ''
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, 
// register a User
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["registerUser"], (state, { user }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["registerUserSuccess"], (state, { msg }) => {
    return Object.assign(Object.assign({}, state), { loading: false });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["registerUserFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, errorMessage: error });
}), 
// Login a User
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["loginUser"], (state, { user }) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["loginUserSuccess"], (state, { msg, token }) => {
    localStorage.setItem('angular-social-token', token);
    return Object.assign(Object.assign({}, state), { loading: false, token: token, isAuthenticated: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["loginUserFailure"], (state, { error }) => {
    localStorage.removeItem('angular-social-token');
    return Object.assign(Object.assign({}, state), { loading: false, token: '', isAuthenticated: false, user: {}, errorMessage: error });
}), 
// Get User Info
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["getUserInfo"], (state) => {
    return Object.assign(Object.assign({}, state), { loading: true });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["getUserInfoSuccess"], (state, { user }) => {
    return Object.assign(Object.assign({}, state), { loading: false, user: user });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["getUserInfoFailure"], (state, { error }) => {
    return Object.assign(Object.assign({}, state), { loading: false, user: {}, errorMessage: error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_1__["logOutUser"], (state) => {
    localStorage.removeItem('angular-social-token');
    return Object.assign(Object.assign({}, state), { loading: false, token: '', isAuthenticated: false, user: {} });
}));


/***/ }),

/***/ "ydcC":
/*!***********************************************!*\
  !*** ./src/app/root/util/ErrorHandlerUtil.ts ***!
  \***********************************************/
/*! exports provided: ErrorHandlerUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerUtil", function() { return ErrorHandlerUtil; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

class ErrorHandlerUtil {
    static handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client Error
            errorMessage = `Error : ${error.error.message}`;
        }
        else {
            // server error
            errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
    }
}


/***/ }),

/***/ "zLM3":
/*!************************************************!*\
  !*** ./src/app/users/services/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../root/util/ErrorHandlerUtil */ "ydcC");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    // register
    registerUser(user) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/api/users/register`;
        return this.httpClient.post(dataURL, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerUtil"].handleError));
    }
    // login
    loginUser(user) {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/api/users/login`;
        return this.httpClient.post(dataURL, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerUtil"].handleError));
    }
    // get User Info
    getUserInfo() {
        let dataURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/api/users`;
        return this.httpClient.get(dataURL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(_root_util_ErrorHandlerUtil__WEBPACK_IMPORTED_MODULE_3__["ErrorHandlerUtil"].handleError));
    }
    // isLoggedIn
    isLoggedIn() {
        return !!localStorage.getItem('angular-social-token');
    }
    // get Token
    getToken() {
        return localStorage.getItem('angular-social-token');
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map