import React, { useEffect, useState } from "react";
import UseAuthContext from "../../components/Context/UseAuthContext";
import useLogin from "../../components/Authentication/useLogin";

const Auth = () => {
  const [accessCode, setAccess] = useState("")
  const [role, setRole] = useState("")
  const { dispatch } = UseAuthContext()
  const {login, error, isLoading} = useLogin()

  const handlesubmit = async (e) => {
    e.preventDefault()
    await login(role, accessCode)
  }

  useEffect(() => {
    dispatch({type: "AUTH"})
  }, [dispatch])

  return (
  <div className="bg-[#D9D9D9] w-screen h-screen flex items-center">
    <div className="m-auto bg-white py-[1.875rem] w-[80%] h-fit m-auto rounded-lg sm:w-[55%] md:w-[50%] lg:w-[35%] xl:w-[30%] ">
      <form onSubmit={handlesubmit}>
        <label
            className="mb-[20px] block text-2xl text-center font-bold text-#546270 md:text-3xl md:mb-[2rem]">Login</label> 

        <input onChange={(e) => setRole(e.target.value)}
            value={role}
          placeholder="Enter Your Role" type="text"  className="px-4 py-2.5 text-center block w-3/4 mx-auto border-2 border-[#708090] rounded-md mb-4 md:px-6 md:py-3.5" />      
        <input onChange={(e) => setAccess(e.target.value)}
            value={accessCode}
            placeholder="Enter access code" type="password"  className="px-4 py-2.5 text-center block w-3/4 mx-auto border-2 border-[#708090] rounded-md md:px-6 md:py-3.5" />
          {error && <p className="mt-3 text-red text-sm">{ error }</p>}
        <button disabled={isLoading} className="block text-lg text-white font-bold bg-[#546270] py-1.5 px-4 mx-auto mt-5 rounded-md md:mt-6 md:text-xl md:py-2 md:px-6">Submit</button>
      </form>
      </div>
    </div>
  )
};

export default Auth;
