import { SignupFormFieldsValue } from "@/components/organisms/Auth/SignupForm";
import { postAuthApi } from "@/components/organisms/Auth/utils";

export const useSignup = () => {
  const signup = async (data: SignupFormFieldsValue) => {
    try {
      await postAuthApi("local/signup", data);
    } catch (error) {
      console.error(`Signup error: ${error}`);
    }
  };

  return signup;
};
