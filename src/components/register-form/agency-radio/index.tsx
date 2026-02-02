import { useFormContext, useWatch } from "react-hook-form";
import { AgencyType, type FormInputType } from "../types";

const AgencyRadio = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext<FormInputType>();

  const agencyType = useWatch({ control, name: "agency_type" });

  return (
    <>
      <div>
        <div> نوع نمایندگی:</div>
        <div className="mt-3 radio-group flex items-center gap-28">
          <label className="flex items-center gap-3">
            <input
              type="radio"
              value={AgencyType.REAL}
              {...register("agency_type")} // ✅ همین کافی است
            />
            حقیقی
          </label>

          <label className="flex items-center gap-3">
            <input
              type="radio"
              value={AgencyType.LEGAL}
              {...register("agency_type")} // ✅ همین کافی است
            />
            حقوقی
          </label>
        </div>
      </div>
      {agencyType === AgencyType.LEGAL && (
        <div className="mt-9 relative">
          <label
            htmlFor="address"
            className="bg-white absolute right-2 -top-3 inline-block px-3 text-sm text-[#747F7F]"
          >
            نام نمایندگی
          </label>
          <input
            id="name"
            type="text"
            className={errors.code ? "error" : ""}
            {...register("name", {
              required: "این فیلد الزامی است",
            })}
          />
          {errors.name && (
            <span className="error-message">{errors.name.message}</span>
          )}
        </div>
      )}
    </>
  );
};

export default AgencyRadio;
