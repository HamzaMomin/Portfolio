
import React from "react";

function TalhaCode() {
  return (
    <div className="flex flex-col justify-between items-center  border-rose-600 border-2 overflow-hidden w-screen h-screen">

      <div className="flex justify-center items-center flex-grow">
        <div className="w-[500px] h-[300px] bg-rose-950 rounded-xl text-center">
          <h1 className="text-rose-50 text-2xl font-mono">Place you card here</h1>

          <div className="w-[120px] h-[160px] sm:w-[135px] sm:h-[180px] md:w-[150px] md:h-[200px] border-2 border-rose-50 border-dashed rounded-lg mx-auto mt-8 flex items-center justify-center">
            <p className="text-rose-50">Drop card here</p>
          </div>

        </div>
      </div>

      <div className="flex justify-center items-end border-white border-2 translate-y-20">
        {/* <Card title="About" description="Who am I?" rotation="-rotate-[15deg] translate-x-4" />
        <Card title="Work" description="What do I do?" rotation="rotate-0 -translate-y-4" />
        <Card title="Stuff" description="my yapping" rotation="rotate-[15deg] -translate-x-4" /> */}
      </div>
    </div>
  )
}

export default TalhaCode();