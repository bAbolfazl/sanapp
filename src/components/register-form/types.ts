export enum AgencyType {
  LEGAL = "legal",
  REAL = "real",
}

export type ProvinceType = {
  id: number;
  name: string;
  code: string;
};

export type FormInputType = {
  code: string;
  province: string;
  county: string;
  address: string;
  insurance: string;
  city_code: string;
  phone_number: string;
  agency_type: AgencyType;
  name: string;
};

export const FORM_DEFAULT_VALUES: FormInputType = {
  code: "",
  province: "",
  county: "", // <-- اینجا باید county باشد نه city
  address: "",
  insurance: "",
  phone_number: "",
  city_code: "",
  agency_type: AgencyType.REAL,
  name: "",
};
