"use client";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { FaApple, FaFacebook } from 'react-icons/fa';


export default function () {
  const [email, Setemail] = useState<string>("");
  const [password, Setpassword] = useState<string>("");
  const [ispassword, Setispassword] = useState<boolean>(false);

  return (
    <>
      {/* 画面全体 */}
      <div className="flex flex-col items-center min-w-screen min-h-screen bg-gray-200">

        {/* メイン画面 */}
        <div className="flex flex-col items-center w-100 h-210 mt-16 bg-white rounded-xl">
          <div className="flex flex-col items-center w-full">


            <p className="text-center text-2xl font-bold text-black mt-24">
              アカウントを新規作成
            </p>
            <p className="text-center text-base font-bold text-gray-300 mt-4">
              Fill your information below or register
            </p>
            <p className="text-center text-base font-bold text-gray-300">
              with your social acount.
            </p>
          </div>

          {/* 入力フォーム */}
          <div className="flex flex-col items-start w-full">
            <fieldset className="fieldset mt-4 ml-4">
              <legend className="fieldset-legend font-bold">Email</legend>
              <input type="text" className="input mt-2 border border-gray-200 rounded-xs px-4 h-10 w-90 text-base" placeholder="example@gmail.com" />
            </fieldset>
          </div>
          {/* パスワード欄 */}
          <div className="flex flex-row justify-start w-full">
            <fieldset className="fieldset mt-8 ml-4">
              <legend className="fieldset-legend font-bold">Password</legend>
              <div className="relative items-between">
                <input type="text" className="input mt-2 border border-gray-200 rounded-xs px-4 h-10 w-90 text-base" placeholder="example123" />
                <IoEyeOutline className="absolute right-3 top-3/5 -translate-y-1/2 text-gray-500 cursor-pointer text-2xl" />
              </div>
            </fieldset>
          </div>
          {/* 利用規約 */}
          <div className="flex flex-row items-center justify-start w-full mt-4 ml-8">
            <input type="checkbox" className="checkbox" />
            <p className="text-center text-base font-semibold ml-2">
              <span className="text-teal-500 font-semibold underline mr-1">利用規約</span>
              に同意する
            </p>
          </div>

          {/* 新規登録ボタン */}
          <button className="items-center justify-center rounded-4xl bg-teal-400 h-12 w-52 mt-8 text-white text-xs">新規登録</button>

          {/* アイコンたち */}
          <div className="flex flex-row items-center justify-center w-60 mt-8">
            <div className="flex-grow border-t border-gray-200"></div>
            <p className="mx-4 text-gray-400 text-sm">
              Or sign in with
            </p>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* 他サインインボタン */}
          <div className="flex flex-row items-center justify-between w-56 mt-12">
            {/* Appleボタン */}
            <button className="flex items-center p-4 rounded-full border border-gray-300 hover:bg-gray-100">
              <FaApple className="w-8 h-8" />
            </button>
            {/* グーグルボタン */}
            <button className="flex items-center p-4 rounded-full border border-gray-300 hover:bg-gray-100">
              <FcGoogle className="w-8 h-8" />
            </button>
            {/* Facebookボタン */}
            <button className="flex items-center p-4 rounded-full border border-gray-300 hover:bg-gray-100">
              <FaFacebook className="w-8 h-8" />
            </button>
          </div>


          {/* または新規登録 */}
          <div className="flex flex-row items-center justify-center w-full mt-16">
            <p className="font-semibold">
              すでにアカウントを持っていますか？<span className="underline text-teal-500">ログイン</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )

}