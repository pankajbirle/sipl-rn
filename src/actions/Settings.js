import { AsyncStorage } from "react-native";
import axios from "axios";
import {
  API_REQUEST,
  API_FAILURE,
  UPDATE_USER_PROFILE_SUCCESS,
  MEMBER_SUCCESS,
  MEMBER_FAILURE,
  FETCH_USER_DATA,
  USER_PROFILE_IMAGE_SUCCESS,
  GET_USER_PROFILE_SUCCESS
} from "../constants";

import { API, MESSAGES } from "../config";
import { apiErrors, Toast } from "../helper";

const headers = {
  "Content-Type": "application/json"
};

/**
 * @method getOrgDetailsAction
 * @description Action creator for fetching the details of org basic profile info
 * @return {orgDetails}
 */

export const getOrgDetailsAction = id => dispatch => {
  const orgId = getOrgId();
  console.log(orgId, "orgid");
  AXIOS_INSTANCE.get(`/organizations/${orgId}`)
    .then(res => {
      //console.log(res, "Response from action call")
      dispatch({
        type: ORGANISATION_DETAILS,
        payload: res.data.success.organization
      });
    })
    .catch(err => {
      if (err.response) {
        openNotification("error", err.response.data.error);
      } else {
        errorResponse(err);
      }
    });
};

/**
 * @method addOrgDetailsAction
 * @description Action creator for adding the details of org basic profile info
 * @return {orgDetails}
 */
export const addOrgDetailsAction = (formValues, callback) => dispatch => {
  AXIOS_INSTANCE.post("/organizations", formValues)
    .then(res => {
      callback(res);
    })
    .catch(err => {
      if (err.response) {
        openNotification("error", err.response.data.error);
      } else {
        errorResponse(err);
      }
    });
  dispatch({
    type: ORGANISATION_DETAILS,
    payload: {}
  });
};

/**
 * @method editOrgDetailsAction
 * @description Action creator for editing the details of org basic profile info
 * @return {orgDetails}
 */

export const editOrgDetailsAction = (id, formValues, callback) => dispatch => {
  const orgId = getOrgId();
  AXIOS_INSTANCE.put(`/organizations/${orgId}`, formValues)
    .then(res => {
      callback(res);
    })
    .catch(err => {
      if (err.response) {
        openNotification("error", err.response.data.error);
      } else {
        errorResponse(err);
      }
    });
  dispatch({
    type: ORGANISATION_DETAILS,
    payload: {}
  });
};

// /**
//  * @method getOrgLegalDetailsAction
//  * @description Action creator for fetching the details of org legal profile info
//  * @return {orgDetails}
//  */

/**
 * @method getUserProfileDetailsAction
 * @description Action creator for fetching the details of user with respect to id
 * @return {userProfileDetails}
 */

export const getUserProfileDetailsAction = () => dispatch => {
  AXIOS_INSTANCE.get(`/users/${getUserId()}`)
    .then(res => {
      console.log(res.data.success, "Response from action call");
      dispatch({
        type: USER_PROFILE_DETAILS,
        payload: res.data.success.user
      });
    })
    .catch(err => {
      if (err.response) {
        openNotification("error", err.response.data.error);
      } else {
        errorResponse(err);
      }
    });
};

/**
 * @method updateUserProfileDetailsAction
 * @description Action creator for updating the details of user with respect to id
 * @return {userProfileDetails}
 */

export const updateUserProfileDetailsAction = (
  id,
  formValues,
  callback
) => dispatch => {
  const userId = getUserId();
  AXIOS_INSTANCE.put(`/users/${userId}`, formValues)
    .then(res => {
      console.log(res, "cdefref");
      callback(res);
      //console.log(res, "Response from action call")
      dispatch({
        type: USER_PROFILE_DETAILS,
        payload: res.data.success.user
      });
    })
    .catch(err => {
      if (err.response) {
        openNotification("error", err.response.data.error);
      } else {
        errorResponse(err);
      }
    });
};

/**
 * Function created to fetch data for all dropdowns in the form
 */
export const masterDropDownSettingsAction = () => dispatch => {
  Axios.all([
    AXIOS_INSTANCE.get("/emirates"),
    AXIOS_INSTANCE.get("/primary-business-activities")
  ])
    .then(
      Axios.spread((emirates, industries) => {
        //console.log(industries, "OBJECT");
        const obj = {
          emirates: emirates.data.success.emirates,
          industries: industries.data.success.primaryBusinessActivities
        };
        dispatch({
          type: DROPDOWN_LIST_CONTACTS,
          payload: obj
        });
      })
    )
    .catch(err => {
      if (err.response) {
        openNotification("error", err.response.data.error);
      } else {
        errorResponse(err);
      }
    });
};

/**
 * Function created to fetch data for all dropdowns in the form
 */
export const masterDropDownSettingsLegalAction = () => dispatch => {
  Axios.all([
    AXIOS_INSTANCE.get("/staggers")
    // AXIOS_INSTANCE.get('/primary-business-activities'),
  ])
    .then(
      Axios.spread(staggers => {
        //console.log(staggers, "OBJECT");
        const obj = {
          staggers: staggers.data.success.staggers
        };
        dispatch({
          type: DROPDOWN_LIST_CONTACTS,
          payload: obj
        });
      })
    )
    .catch(err => {
      if (err.response) {
        openNotification("error", err.response.data.error);
      } else {
        errorResponse(err);
      }
    });
};
