import { useFormContext } from "react-hook-form";
import type { FormInputType } from "../types";

const AddressText = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormInputType>();

  return (
    <>
      <label
        htmlFor="address"
        className="bg-white absolute right-2 -top-3 inline-block px-3 text-sm text-[#747F7F]"
      >
        آدرس
      </label>
      <textarea
        id="address"
        rows={5}
        className={errors.address ? "error" : ""}
        {...register("address", {
          required: "لطفا پیام خود را وارد کنید",
          maxLength: {
            value: 500,
            message: "پیام نباید بیشتر از ۵۰۰ کاراکتر باشد",
          },
        })}
      />
      {errors.address && (
        <span className="error-message">{errors.address.message}</span>
      )}
    </>
  );
};

export default AddressText;
