import { useFormContext } from "react-hook-form";
import type { FormInputType } from "../types";

const PhoneInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputType>();

  return (
    <>
      <div className="basis-[70%]">
        <input
          id="phone_number"
          type="text"
          placeholder="تلفن ثابت"
          className={errors.code ? "error" : ""}
          {...register("phone_number", {
            required: "این فیلد الزامی است",
          })}
        />
        {errors.phone_number && (
          <span className="error-message">{errors.phone_number.message}</span>
        )}
      </div>
      <div className="basis-[20%] ">
        <input
          id="city_code"
          type="text"
          placeholder="021"
          className={errors.city_code ? "error text-left" : "text-left"}
          {...register("city_code", {
            required: "این فیلد الزامی است",
          })}
        />
        {errors.city_code && (
          <span className="error-message">{errors.city_code.message}</span>
        )}
      </div>
    </>
  );
};

export default PhoneInput;
