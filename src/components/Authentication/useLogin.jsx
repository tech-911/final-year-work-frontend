import { useState } from "react";
import UseAuthContext from "../Context/UseAuthContext";
import { ToastContainer, toast } from "react-toastify";

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { dispatch } = UseAuthContext();

  const login = async (role, accessCode) => {
    setError(null);
    setLoading(true);

    const response = await fetch(
      "https://final-year-project-api-topaz.vercel.app/api/command/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role, accessCode }),
      }
    );

    const json = await response.json();
    if (!response.ok && json.status === "00") {
      setError(json);
      setLoading(false);
    //   console.log("User", json);
      toast.error("Error Login in !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }

    if (response.ok && json.status !== "00") {
      localStorage.setItem("User", JSON.stringify(json));
    //   console.log("User", json);
      dispatch({ type: "LOGIN", payload: json });
      setLoading(false);
      toast.success("Login Success", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return { login, error, isLoading };
};

export default useLogin;
