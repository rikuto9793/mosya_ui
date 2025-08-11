import { AiOutlineEyeInvisible } from "react-icons/ai";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

export default function () {

  return (
    <>
      {/* 画面全体 */}
      <div className="flex flex-col items-center min-h-screen min-w-scree">
        {/* メイン画面 */}
        <div className="relative flex flex-col items-center w-100 h-200 rounded-2xl mt-16">
          <div className="flex flex-col items-start w-full ml-10">
            <p className="text-center text-2xl font-bold mt-8 text-gray-500">
              ＜
            </p>
            <p className="text-center text-3xl mt-8 font-semibold text-gray-800">
              ログイン・新規登録
            </p>
            <p className="text-center text-base mt-16 font-semibold text-gray-400">
              パスワードを設定すれば登録完了！
            </p>
            <div className="relative items-between">
              <input type="text" placeholder="" className="input-ghost border-gray-300 border-b-2 w-90 mt-8" />
              <AiOutlineEyeInvisible className="absolute right-3 top-3/5 -translate-y-1/2 text-gray-500 cursor-pointer text-2xl" />
            </div>
            <p className="text-center text-base font-bold text-gray-400 mt-8">
              半角
            </p>
            <p className="text-center text-base font-bold text-gray-400">
              てく
            </p>

          </div>
          <button className="items-center justify-center w-90 h-16 mt-8 rounded-xl bg-orange-400"></button>
          <div className="flex flex-col items-start w-full">
            <input type="checkbox" className="checkbox mt-4 ml-8 w-6 h-6" />
          </div>

          <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] z-20 rounded-2xl"></div>
    
        {/* 被さってる画面 */}
        <div className="absolute flex flex-col top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-start w-76 h-100 bg-white z-30 rounded-2xl shadow-2xl">
          <div className="flex flex-col items-center mt-8 w-full">
            <FaRegCircleCheck className="w-14 h-14 text-green-600" />
          </div>
          <p className="text-center text-2xl font-bold text-gray-800 mt-4">
            登録完了！
          </p>
          <p className="text-center text-sm font-bold text-gray-500 w-56 mt-4">
            メールアドレスを認証・紐づけることで、アカウントを安全に保てます
          </p>

          {/* 認証メール通知 */}
          <div className="relative flex flex-row items-center justify-start w-60 h-8 rounded-2xl bg-gray-200 mt-4">
            <FaCheckCircle className=" text-green-600 cursor-pointer text-2xl ml-2 h-4 w-4" />
            <p className="text-center text-xs font-bold text-green-600 ml-2">
              認証メールが送信されました
            </p>
          </div>
          <div className="flex flex-col items-start w-64 h-20 mt-4">
            <p className="text-left text-xs font-bold text-gray-400">
            アカウントの認証方法がメールに記載されています。メールが届かない場合は、「アカウント」＞「ログイン方法」からもう一度メールを送信してください。
          </p>
          </div>

          <button className="items-center justify-center w-64 h-12 text-bold text-xl text-center text-black rounded-2xl border border-black">OK</button>
          
        </div>
      </div>

      </div>
    
  </>
  )
}