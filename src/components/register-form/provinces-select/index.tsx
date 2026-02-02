import { useFormContext } from "react-hook-form";
import type { FormInputType, ProvinceType } from "../types";
import { useQuery } from "@tanstack/react-query";
import { getProvinces } from "../../../api-gate/services";

const ProvincesSelect = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputType>();

  const { data: provincesList } = useQuery<ProvinceType[], Error>({
    queryKey: ["provinces"],
    queryFn: getProvinces,
  });

  return (
    <>
      <select
        id="province"
        className={errors.province ? "error" : ""}
        {...register("province", {
          required: "لطفا یک استان انتخاب کنید",
        })}
      >
        <option value="">استان</option>
        {provincesList?.map(({ name, id }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      {errors.province && (
        <span className="error-message">{errors.province.message}</span>
      )}
    </>
  );
};

export default ProvincesSelect;
