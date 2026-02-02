import { useFormContext, useWatch } from "react-hook-form";
import type { FormInputType, ProvinceType } from "../types";
import { useQuery } from "@tanstack/react-query";
import { getInsuranceBranch } from "../../../api-gate/services";

const InsurancesSelect = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<FormInputType>();

  const selectedProvince = useWatch({ control, name: "province" });

  const { data: insuranceList, isLoading: insuranceListIsLoading } = useQuery<
    ProvinceType[],
    Error
  >({
    queryKey: ["insurances", selectedProvince],
    queryFn: () => getInsuranceBranch("", "DEY", selectedProvince),
    enabled: !!selectedProvince,
  });

  return (
    <>
      <select
        id="insurance"
        className={errors.insurance ? "error" : ""}
        {...register("insurance", {
          required: "لطفا یک شعبه انتخاب کنید",
        })}
        disabled={insuranceListIsLoading || !selectedProvince}
      >
        <option value="">شعبه بیمه</option>
        {insuranceList?.map(({ name, id }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      {errors.insurance && (
        <span className="error-message">{errors.insurance.message}</span>
      )}
    </>
  );
};

export default InsurancesSelect;
