import { headers } from "next/headers";
import { FaUserCircle } from "react-icons/fa";
export default function () {
  return (
    <>
      {/* 画面全体 */}
      <div className="flex items-center justify-center w-screen h-screen bg-gray-100">

        {/* 登録画面全体 */}
        <div className="flex flex-col items-center h-220 w-120 bg-white rounded-2xl">
          <div className="flex flex-row items-center justify-between w-full">
            <p className="text-left text-xl font-bold text-gray-800 mt-12 ml-8">
              ＜
            </p>

            <p className="text-center text-xl font-normal text-gray-800 mt-12 mr-56">
              登録
            </p>
          </div>
          {/* アイコン */}
          <div className="flex flex-row items-center gap-8 w-120">
            <FaUserCircle className="w-12 h-12 ml-16 mt-8 cursor-pointer" />
            {/* 手順 */}
            <ul className="steps w-64">
              <li className="step step-primary"></li>
              <li className="step step-primary"></li>
              <li className="step"></li>
              <li className="step"></li>
            </ul>

            
          </div>
          {/* メールで登録 */}
          <div className="flex flex-col items-start w-full">
            <p className="text-center text-2xl font-bold text-gray-800 mt-8 ml-16">
              メールで登録
            </p>
            {/* 入力フォーム */}
            <fieldset className="fieldset ml-16 mt-8">
              <legend className="fieldset-legend">メール</legend>
              <input type="text" className="input bg-gray-100 w-80 h-12 rounded-2xl px-4" placeholder="xxx@mail.com" />
              <p className="label text-gray-300 font-bold text-xs mt-2">有効なメールアドレスを入力</p>
            </fieldset>

            <fieldset className="fieldset ml-16 mt-8">
              <legend className="fieldset-legend">パスワード</legend>
              <input type="text" className="input bg-gray-100 w-80 h-12 rounded-2xl px-4" placeholder="パスワード" />
              <p className="label text-gray-300 font-bold text-xs mt-4">英文字と数字を含み、８文字以上である必要があります。</p>
            </fieldset>

            <fieldset className="fieldset ml-16 mt-8">
              <legend className="fieldset-legend">パスワードを再入力</legend>
              <input type="text" className="input bg-gray-100 w-80 h-12 rounded-2xl px-4" placeholder="パスワードを再入力" />
            </fieldset>

            <div className="flex flex-row items-center justify-start w-full ml-16 mt-12">
              {/* チェックボックス */}
              <input type="checkbox" className="checkbox bg-gray-100" />
              <p className="text-center text-base font-bold text-gray-800 ml-4">
                パスワードを表示する
              </p>
            </div>
            <div className="flex flex-row items-center justify-start w-full ml-16 mt-4">
              <input type="checkbox" className="checkbox bg-gray-100" />
              <p className="text-center text-base font-bold text-gray-800 ml-4">
                同意
              </p>
              <div className="link link-info ml-4 text-sky-500">利用規約</div>
            </div>

            {/* ボタン */}
            <button className="items-center justify-center rounded-4xl bg-sky-300 h-10 w-52 ml-32 mt-8 text-white">次へ</button>
          </div>

        </div>
      </div>
    </>
  );
}