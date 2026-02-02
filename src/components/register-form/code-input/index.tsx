import { useFormContext } from "react-hook-form";
import type { FormInputType } from "../types";
import { useMutation } from "@tanstack/react-query";
import { postCheckAgencyCode } from "../../../api-gate/services";
import TickImage from "../../../assets/tick.png";
import CancelImage from "../../../assets/cancel.svg";

const CodeInput = () => {
  const { register, formState, getValues, setError } =
    useFormContext<FormInputType>();

  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: postCheckAgencyCode,
    mutationKey: ["check_code"],
    onError: () => {
      setError("code", { message: "خطا" });
    },
  });

  return (
    <div className="relative">
      <input
        id="code"
        type="text"
        placeholder="کدنمایندگی"
        className={
          formState.errors.code
            ? "error placeholder:text-right text-left"
            : "placeholder:text-right text-left"
        }
        {...register("code", {
          required: "الزامیست",
        })}
        onBlur={() => mutate(getValues("code"))}
      />
      {isSuccess && (
        <img
          src={TickImage}
          width={20}
          height={20}
          className="absolute right-2 top-4"
        />
      )}
      {isError && (
        <img
          src={CancelImage}
          width={20}
          height={20}
          className="absolute right-2 top-4"
        />
      )}
      {formState.errors.code && (
        <span className="error-message">{formState.errors.code.message}</span>
      )}
    </div>
  );
};

export default CodeInput;
