import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { FORM_DEFAULT_VALUES, type FormInputType } from "./types";
import CodeInput from "./code-input";
import ProvincesSelect from "./provinces-select";
import CitiesSelect from "./cities-select";
import InsurancesSelect from "./insurances-select";
import AddressText from "./address-text";
import PhoneInput from "./phone-input";
import AgencyRadio from "./agency-radio";
import { useMutation } from "@tanstack/react-query";
import { postSignUp } from "../../api-gate/services";

const RegisterForm = () => {
  const methods = useForm<FormInputType>({
    defaultValues: FORM_DEFAULT_VALUES,
  });

  const { mutate } = useMutation({
    mutationFn: postSignUp,
    mutationKey: ["sign_up"],
  });

  const onSubmit: SubmitHandler<FormInputType> = (data) => {
    mutate(data);
    console.log("داده‌های فرم:", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="-mt-24 bg-white rounded-xl w-full px-4 py-5"
      >
        <div>
          <CodeInput />
        </div>
        <div className="mt-7">
          <ProvincesSelect />
        </div>

        <div className="mt-7">
          <CitiesSelect />
        </div>
        <div className="mt-10 relative">
          <AddressText />
        </div>
        <div className="mt-7">
          <InsurancesSelect />
        </div>
        <div className="mt-7 flex items-center justify-between">
          <PhoneInput />
        </div>

        <div className="mt-7">
          <AgencyRadio />
        </div>

        <div className="mt-7">
          <button
            type="submit"
            disabled={methods.formState.isSubmitting}
            className={`${
              Object.keys(methods.formState.errors).length
                ? "border-red-600! border-4"
                : ""
            } py-5 bg-[#009BA7] rounded-xl w-full text-white`}
          >
            ثبت نام
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
