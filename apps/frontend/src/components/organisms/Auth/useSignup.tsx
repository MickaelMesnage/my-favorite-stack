import { SignupFormFieldsValue } from "@/src/components/organisms/Auth/SignupForm";
import { postAuthApi } from "@/src/components/organisms/Auth/utils";
import { useRouter } from "next/navigation";

export const useSignup = () => {
  const router = useRouter();

  const signup = async (data: SignupFormFieldsValue) => {
    try {
      await postAuthApi("local/signup", { body: data });
      router.push("/auth/signin");
    } catch (error) {
      console.error(`Signup error: ${error}`);
    }
  };

  return signup;
};
