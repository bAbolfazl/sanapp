import {
  AgencyType,
  type FormInputType,
} from "../components/register-form/types";
import { baseApi, mainApi } from "./api-client";

export const getProvinces = async () => {
  const { data } = await baseApi.get(`provinces_wop/`);

  return data;
};

export const getCities = async (province: string) => {
  const { data } = await baseApi.get(`counties_wop/`, { params: { province } });

  return data;
};

export const getInsuranceBranch = async (
  name: string,
  insurance: string,
  province: string
) => {
  const { data } = await mainApi.get(
    `selection_item/insurance_branch/wop_list/`,
    {
      params: { name, insurance, province },
    }
  );

  return data.response;
};

export const postCheckAgencyCode = async (agentCode: string) => {
  const { data } = await mainApi.post(
    `DEY/agent/verification/signup/check_agency_code/`,

    { agent_code: agentCode }
  );

  return data.response;
};

export const postSignUp = async (body: FormInputType) => {
  const { data } = await mainApi.post(`DEY/agent/verification/signup/`, {
    address: body.address,
    agency_type: body.agency_type,
    agent_code: body.code,
    city_code: body.city_code,
    county: body.county,
    first_name: "نام",
    insurance_branch: body.insurance,
    last_name: "نام خانوادگی",
    phone_number: "09000000009",
    phone: body.phone_number,
    province: body.province,
    ...(body.agency_type === AgencyType.LEGAL && { name: body.name }),
  });

  return data.response;
};
