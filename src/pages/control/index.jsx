import React, { useEffect, useState } from "react";
import UseAuthContext from "../../components/Context/UseAuthContext";
import { FiImage } from "react-icons/fi";
import { baseUrl } from "../../BaseUrls/base";
import { toast } from "react-toastify";

const Control = () => {
  const { dispatch } = UseAuthContext();

  useEffect(() => {
    dispatch({ type: "CONTROL" });
  }, [dispatch]);

  const [speed, setSpeed] = useState("m");
  const [command, setCommand] = useState("stop");

  const handleCommand = async (command) => {
    setCommand(command);
    if (command === "high") {
      setSpeed("h");
    } else if (command === "mid") {
      setSpeed("m");
    } else if (command === "low") {
      setSpeed("l");
    }
    if (localStorage.getItem("User")) {
      const token = JSON.parse(localStorage.getItem("User")).token;

      fetch(`${baseUrl}/getFeedback`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      })
        .then((response) => {
          if (!response.ok) {
            toast.error("Network Error", {
              position: toast.POSITION.TOP_RIGHT,
            });
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json(); // Move response.json() inside the first .then() block
        })
        .then((data) => {
          //   console.log("Data received:", data.feedback);
          if (data.feedback === "done") {
            fetch(`${baseUrl}/postCommand`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "auth-token": token,
              },
              body: JSON.stringify({ command }),
            })
              .then((res) => {
                toast.success(`${command} command initiated`, {
                  position: toast.POSITION.TOP_RIGHT,
                });
                console.log(res);
              })
              .catch((err) => {
                toast.error("Error initiating command", {
                  position: toast.POSITION.TOP_RIGHT,
                });
              });
          } else {
            toast.error(
              "Hardware not responding. Wait for hardware to process command",
              {
                position: toast.POSITION.TOP_RIGHT,
              }
            );
            return;
          }
        });
    } else {
      toast.error("Token Expired ReSignin", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
  };
  const handleReset = async () => {
    if (localStorage.getItem("User")) {
      const token = JSON.parse(localStorage.getItem("User")).token;

      fetch(`${baseUrl}/refresh`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      })
        .then((res) => {
          toast.success(
            `System Refreshed. Try a command. Ensure hardware is turned on`,
            {
              position: toast.POSITION.TOP_RIGHT,
            }
          );
          //   console.log(res);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Error Refreshing", {
            position: toast.POSITION.TOP_RIGHT,
          });
        });
    } else {
      toast.error("Token Expired ReSignin", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
  };

  return (
    <div className="flex flex-col items-center py-20 px-9 w-full h-screen sm:w-[62%] md:w-[67%] lg:w-3/4 xl:w-4/5">
      <p className="text-[#546270] text-[40px] font-[700] mb-14 self-start">
        Control Application
      </p>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-10 w-full">
        <div className="w-[400px] rounded-[14px] bg-[#d9d9d998] flex flex-col items-center gap-4 py-6 px-5">
          <div className="flex flex-row items-center gap-4">
            <p className="text-[#546270] text-[16px] font-[700]">
              Control Node
            </p>
            <p className="text-[#546270] text-[16px] font-[700]">
              State: <span className="text-[#5CB85C]">{command}</span>
            </p>
          </div>
          <button
            onClick={() => handleCommand("forward")}
            className="w-full h-[48px] bg-[#453170] rounded-[8px] text-[#fff] text-[24px] font-[800]"
          >
            Forward
          </button>

          <button
            onClick={() => handleCommand("stop")}
            className="w-full h-[48px] bg-[#FF4747] rounded-[8px] text-[#fff] text-[24px] font-[800]"
          >
            Stop
          </button>
          <button
            onClick={handleReset}
            className="w-full h-[48px] bg-[#5CB85C] rounded-[8px] text-[#fff] text-[24px] font-[800]"
          >
            Reset
          </button>
          <button
            onClick={() => handleCommand("backward")}
            className="w-full h-[48px] bg-[#453170] rounded-[8px] text-[#fff] text-[24px] font-[800] mb-2"
          >
            Backward
          </button>
          <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
            <button
              onClick={() => handleCommand("high")}
              className={` text-[18px] font-[800]  w-10 h-10 rounded-full flex flex-row items-center justify-center ${
                speed === "h" ? "bg-[#453170] text-[#fff]" : "text-[#000]"
              }`}
            >
              H
            </button>
            <button
              onClick={() => handleCommand("mid")}
              className={` text-[18px] font-[800]  w-10 h-10 rounded-full flex flex-row items-center justify-center ${
                speed === "m" ? "bg-[#453170] text-[#fff]" : "text-[#000]"
              }`}
            >
              M
            </button>
            <button
              onClick={() => handleCommand("low")}
              className={` text-[18px] font-[800]  w-10 h-10 rounded-full flex flex-row items-center justify-center ${
                speed === "l" ? "bg-[#453170] text-[#fff]" : "text-[#000]"
              }`}
            >
              L
            </button>
          </div>
        </div>
        <div className="rounded-[14px] bg-[#d9d9d998] flex flex-col items-center gap-4 py-4 px-5 lg:w-[340px] w-[400px]">
          <FiImage className="text-[200px] text-[#708090] h-full" />
        </div>
      </div>
    </div>
  );
};

export default Control;
