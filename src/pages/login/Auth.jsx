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
  <div className="bg-[#D9D9D9] w-4/5 flex items-center">
    <div className="m-auto bg-white py-[36px] w-[40%] h-fit m-auto rounded-lg">
      <form onSubmit={handlesubmit}>
        <label
            className="mb-[32px] block text-3xl text-center font-bold text-#546270">Login</label> 

        <input onChange={(e) => setRole(e.target.value)}
            value={role}
          placeholder="Enter Your Role" type="text"  className="px-6 py-3.5 text-center block w-3/4 mx-auto border-2 border-[#708090] rounded-md mb-4" />      
        <input onChange={(e) => setAccess(e.target.value)}
            value={accessCode}
            placeholder="Enter access code" type="password"  className="px-6 py-3.5 text-center block w-3/4 mx-auto border-2 border-[#708090] rounded-md" />
          {error && <p className="mt-3 text-red text-sm">{ error }</p>}
        <button disabled={isLoading} value="Submit" className="block text-xl text-white font-bold bg-[#546270] py-2 px-6 mx-auto mt-6 rounded-md">Submit</button>
      </form>
      </div>
    </div>
  )
};

export default Auth;
