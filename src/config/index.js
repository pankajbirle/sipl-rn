/**
 * Inside this file we define all the necessary configurations
 * Like the base url and endpoints, file configuration, etc
 * Export the required settings and import them wherever required
 */

import AXIOS from "axios";
import { MAX_TIMEOUT } from "../constants";

const cancelToken = AXIOS.CancelToken;
const source = cancelToken.source();
export const axios = AXIOS.create({
  timeout: MAX_TIMEOUT,
  cancelToken: source.token
});

/** Define base url only once and use it everywhere */
/** For development */
//export const BASE_URL = 'https://server-dot-sports-field-dev.appspot.com/v1';
/** Base URL for production */
export const BASE_URL = "http://10.10.1.15:8080/snap-vat-api/public/api/v1";

export const PROFILE_MEDIA_URL = `${BASE_URL}/api/account/settings/media/`;

/** Export API */
export const API = {
  login: `${BASE_URL}/login`,
  logout: `${BASE_URL}/logout`,
  forgotPassword: `${BASE_URL}/forgotpassword`,
  updatePassword: `${BASE_URL}/updatepassword/`,
  updateUserProfile: `${BASE_URL}/users/update/`,
  getUserDetails: `${BASE_URL}/users`
};

/** Export FILE_CONFIG */
export const FILE_CONFIG = {
  MAX_NUMBER_OF_FILES: 5,
  MAX_FILE_SIZE: 1024 /** In KBs */
};

export const MAX_VIDEO_SIZE = 20000000;
export const AMP_CONTROL_ROLE = "5bcd627cc1a43f14cd408b34";
export const COUNCIL_ADMIN_ROLE = "5c3e8cf51fcd14c699906f18";

export const MESSAGES = {
  INVALID_EMAIL_PASSWORD:
    "Email and password combination is invalid or your account is inactive.",
  LOGIN_SUCCESS: "You are successfully logged in.",
  UPDATE_PASSWORD_SUCCESS: "Your password has been successfully updated",
  NOT_VERIFIED_USER:
    "Your account is pending for verification. Please Verify your account first for login.",
  SOME_ERROR: "There went wrong. Please try again later.",
  PROFILE_UPDATE_SUCESS: "Your profile has been updated successfully.",
  MAX_UPLOAD_IMAGE_SIZE:
    " Please upload only image files with size equal to or less than 5MB.",
  INVALID_EMAIL: "It seems, the email address is invalid.",
  RESEND_VARIFICATION_CODE_FAIL:
    "Oops! something went wrong in resending verification token on your registered email address.",
  LOGOUT_SUCCESS: "You are successfully logged out.",
  USER_PROFILE_IMAGE_UPLOAD_SUCCESS:
    "Your profile image has been uploaded successfully.",
  FIELD_ERROR_MESSAGE:
    "Please check and correct the errors for submitting the form.",
  OLD_PASSWORD_ERROR: "Please enter valid old password.",
  RESET_PASSWORD:
    "The reset password instructions have been sent on your relevant  email address.",
  IMAGE_FILE_SIZE:
    "Please upload only image files with size equal to or less than 200KB.",
  ORGANISATION_UPDATE_ADDRESS_ERROR:
    "Sorry, we are unable to update organisation address.",
  INVITE_MEMBER_SUCCESS: "Then member has been invited successfully.",
  UPDATE_MEMBER_ROLE_SUCCESS: "The role has been changed successfully.",
  REMOVE_MEMBER_FROM_GROUP:
    "The member has been removed from group successfully.",
  ORGANISATION_PROFILE_IMAGE_UPLOAD_SUCCESS:
    "The organisation image has been uploaded successfully.",
  ORGANISATION_DETAILS_UPDATE_SUCCESS:
    "The organisation details has been updated successfully.",
  TURN_LIGHT_ON_SUCESS: "Turning light on successfully.",
  TURN_LIGHT_RESET_SUCCESS: "Turning light reset successfully.",
  TURN_LIGHT_OFF_SUCCESS: "Turning light off successfully.",
  SITE_STATUS_SUCCESS: "The site status has been changed successfully.",
  DEVICE_STATUS_SUCCESS: "The field status has been changed successfully.",
  DEVICE_AUTO_TIME_SUCCESS: "Auto off time has been changed successfully.",
  NOT_ASSIGNED_ROLES:
    "It seems, you dont have any role. Please connect to administrator.",
  DEVICE_SOCKET_ERROR:
    "Sorry! due to technical reason, the device is unable on/off. Please try again later."
};

//All status code for API response
export const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  NOT_MODIFIED: 304,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  GONE: 410,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_ENTITY: 422,
  TO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
  VALIDATION: 100,
  BAD_GATEWAY: 502,
  NOT_IMPLIMENTED: 501
};

export const NATIONAL_PARK_SITE_ID = "5c3e67f4184deb36d47bc32e";
export const PARAMETER_TYPE_ID = "5c5b6db01fcd14c699974940";
export const ADD_ONE_HOUR_IN_CURRENT_TIME = 1;
export const REACT_APP_DEVICE_SOCKET_LOADER = 10000;
export const UTILS = {
  log: function(data, data1) {
    try {
      if (true) {
        if (data1) {
          console.log(data, data1);
        } else {
          console.log(data);
        }
      }
    } catch (err) {}
  }
};
