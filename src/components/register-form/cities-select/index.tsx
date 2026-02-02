import { useFormContext, useWatch } from "react-hook-form";
import type { FormInputType, ProvinceType } from "../types";
import { useQuery } from "@tanstack/react-query";
import { getCities } from "../../../api-gate/services";

const CitiesSelect = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<FormInputType>();

  const selectedProvince = useWatch({ control, name: "province" });

  const { data: citiesList, isLoading: citiesListIsLoading } = useQuery<
    ProvinceType[],
    Error
  >({
    queryKey: ["cities", selectedProvince],
    queryFn: () => {
      if (!selectedProvince) return Promise.reject("No province selected");
      return getCities(selectedProvince);
    },
    enabled: !!selectedProvince,
  });

  return (
    <>
      <select
        id="county"
        className={errors.county ? "error" : ""}
        {...register("county", {
          required: "لطفا یک شهر انتخاب کنید",
        })}
        disabled={citiesListIsLoading || !selectedProvince}
      >
        <option value="">شهر</option>
        {citiesList?.map(({ name, id }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      {errors.county && (
        <span className="error-message">{errors.county.message}</span>
      )}
    </>
  );
};

export default CitiesSelect;
