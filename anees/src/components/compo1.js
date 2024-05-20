import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FiHexagon } from "react-icons/fi";

const Compo1 = () => {
  
  const [showDev2, setShowDev2] = useState(false);
  const [showDev3, setShowDev3] = useState(false);

  
  const toggleDev2 = () => {
    setShowDev2(prevShowDev2 => !prevShowDev2);
  };
  const toggleDev3 = () => {
    setShowDev3(prevShowDev3 => !prevShowDev3);
  };

  return (
    <div className="bg-gray-800 text-white h-full-sceen py-[4%]">
      <h3 className="text-4xl font-bold py-4 mx-[7%]">Workspace</h3>
      <p className="text-3xl font-semibold my-3 mx-[7%]  text-gray-300">Manage project setting for your workspace</p>
      <form action="">
        <div className="border mx-[7%] rounded-xl my-10">
        <h3 className="text-4xl  font-semibold py-4 ml-3">Workspace</h3>
      <p className="text-3xl text-gray-300 font-bold my-3 ml-3">Manage project setting for your workspace</p>
          <div className="flex flex-col gap-y-5 py-5">
            <div className="flex flex-row justify-between items-center p-3 bg-gray-400 rounded-xl mx-5 dev1">
              <p className="text-2xl">Backlog</p>
              <button type="button" className="plus" onClick={toggleDev3}>
                <FaPlus color="white" size={30} />
              </button>
            </div>
            <div className="flex flex-row justify-start gap-x-3 items-center  p-3 rounded-xl mx-5 ">
              
              <button type="button" className="bg-orange-500 p-3" >
              <FiHexagon size={30} />
            
              </button>
              <div>
              <p className="text-2xl font-bold">Backlog</p>
              <p className="font-semibold text-xl">2 projects</p>
              </div>
              
            </div>
            {showDev3 && (
              <div className="flex flex-row justify-around items-center dev2">
                <div className="w-[5%] p-2 rounded-xl border flex justify-center">
                  <FiHexagon size={40} />
                </div>
                <div className="w-[20%]">
                  <input
                    className="rounded-xl p-2 border text-white w-full"
                    type="text"
                    id="firstName"
                    placeholder="Name"
                    value=""
                  />
                </div>
                <div className="w-[40%]">
                  <input
                    className="rounded-xl p-2 border text-white w-full"
                    type="text"
                    id="Description"
                    placeholder="Description"
                    value=""
                  />
                </div>
                <button
                  type="button"
                  className="w-[10%] border p-3 rounded-xl text-xl cancel"
                  onClick={toggleDev3}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="w-[10%] bg-[#2B6F9C] border p-3 rounded-xl text-xl"
                >
                  Create
                </button>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-y-5 py-5">
            <div className="flex flex-row justify-between items-center p-3 bg-gray-400 rounded-xl mx-5 dev1">
              <p className="text-2xl">Planned</p>
              <button type="button" className="plus" onClick={toggleDev2}>
                <FaPlus color="white" size={30} />
              </button>
            </div>
            <div className="flex flex-row justify-start gap-x-3 items-center  p-3 rounded-xl mx-5 ">
              
              <button type="button" className="bg-gray-500 p-3" >
              <FiHexagon size={30} />
            
              </button>
              <p className="text-2xl">Planned</p>
            </div>
            {showDev2 && (
              <div className="flex flex-row justify-around items-center dev2">
                <div className="w-[5%] p-2 rounded-xl border flex justify-center">
                  <FiHexagon size={40} />
                </div>
                <div className="w-[20%]">
                  <input
                    className="rounded-xl p-2 border text-white w-full"
                    type="text"
                    id="firstName"
                    placeholder="Name"
                    value=""
                  />
                </div>
                <div className="w-[40%]">
                  <input
                    className="rounded-xl p-2 border text-white w-full"
                    type="text"
                    id="Description"
                    placeholder="Description"
                    value=""
                  />
                </div>
                <button
                  type="button"
                  className="w-[10%] border p-3 rounded-xl text-xl cancel"
                  onClick={toggleDev2}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="w-[10%] bg-[#2B6F9C] border p-3 rounded-xl text-xl"
                >
                  Create
                </button>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Compo1;
