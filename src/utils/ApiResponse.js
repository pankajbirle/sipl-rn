/**
 * @method formatGetUserProfileResult
 * @description Used to format user profile deatils
 */
export function formatGetUserProfileResult(result) {
    let actObj = {
      id: result.user.id,
      item_guid: result.user.item_guid,
      organization_id: result.user.organization_id,
      tax_agency_id: result.user.tax_agency_id,
      name_en: result.user.name_en,
      name_ar: result.user.name_ar,
      gender: result.user.gender,
      email: result.user.email,
      mobile: result.user.mobile,
      address: result.user.address,
      city: result.user.city,
      state: result.user.state,
      country: result.user.country,
      zipcode: result.user.zipcode,
      language: result.user.language,
      timezone: result.user.timezone,
      is_active: result.user.is_active,
      created_by: result.user.created_by,
      updated_by: result.user.updated_by,
      deleted_by: result.user.deleted_by,
      created_at: result.user.created_at,
      updated_at: result.user.updated_at,
      deleted_at: result.user.deleted_at,
      isTrnAvailable: result.user.isTrnAvailable,
      trn: result.user.trn,
      token: result.user.token
    };
    return actObj;
  }
  