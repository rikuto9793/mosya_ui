import { headers } from "next/headers";

export default function () {
  return (
    <>
      {/* 画面全体 */}
      <div className="flex flex-col items-center min-h-screen relative bg-yellow-300">

        {/* 上バー */}
        <header className="flex items-start w-220 h-20 bg-violet-400 mt-40 rounded-t-2xl">
          <p className="text-center text-xl font-normal text-white mt-6 ml-10">
            Estate Registration Center
          </p>
        </header>

        {/* カード全体 */}
        <div className="flex flex-col items-center justify-start w-220 h-120 bg-gray-100 rounded-b-2xl">
          <div className="flex flex-col w-60 h-72 shadow-2xl bg-white mt-20 rounded-2xl">
            <p className="text-2xl font-bold text-gray-500 mt-8 ml-4">
              Sign in
            </p>

            <input type="text" className="input ml-4 mt-8 text-gray-500 border-b-2 border-gray-200 mr-4" placeholder="Username" />


            <input type="text" className="input ml-4 mt-4 text-gray-500 border-b-2 border-gray-200 mr-4" placeholder="Jobnumber" />

            <label className="select mt-6 ml-4 mr-4 text-gray-500 border border-gray-200">
              <select>
                <option>Select survice hall</option>
              </select>
            </label>

            <button className="text-center text-base mt-4 ml-4 mr-4 text-white bg-violet-400 hover:bg-violet-600">Sign in</button>

          </div>
        </div>
      </div>
    </>
  );
}