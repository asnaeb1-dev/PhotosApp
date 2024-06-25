import React, { useEffect, useState } from 'react'
import CameraSvG from "../../../../assets/cam.svg";
import PhotoSVG from "../../../../assets/photos.svg";
import Navbar from '../../UIComponents/NavBar/Navbar';

import { FaGoogle as GoogleIcon } from "react-icons/fa";
import { FaMeta as MetaIcon } from "react-icons/fa6";
import CountryData from "../../../utils/countrycodes.json"
import { SIGN_IN } from '../../../utils/strings';

import "./login.css";

const LoginScreen = () => {
    const [phoneCode, setPhoneCode] = useState("");

    useEffect(() => {
        console.log("code", phoneCode);
    }, [phoneCode])

    return (
        <div className='absolute inset-0 w-full h-full overflow-hidden'>
            <Navbar type={0} />
            <img className=' w-40 h-40 xl:w-80 xl:h-80 rotate-12 right-0 absolute opacity-75 select-none' src={CameraSvG} />
            <img className='w-40 h-40 xl:w-80 xl:h-80 absolute left-0 bottom-10 -rotate-12 opacity-75 select-none' src={PhotoSVG} />
            <div className='w-full h-full flex justify-center items-center flex-col '>
                <div className='flex flex-col items-center h-[500px] rounded-2xl p-4'>
                    <p className=' text-2xl select-none font-bold'>{SIGN_IN}</p>
                    <div className='flex flex-col items-center gap-5'>
                        <div className='w-4/5 relative'>
                            {/* This is mobile number form */}
                            <form className='w-full rounded-full border-2 px-4 py-2 flex flex-row gap-2'>
                                <select
                                    defaultValue={123}
                                    className=' outline-none bg-white'
                                    onChange={e => setPhoneCode(e.target.value)}
                                >
                                    <option selected disabled>Choose country code</option>
                                    {
                                        CountryData?.map(country => {
                                            return (
                                                <option
                                                    key={country.countryName}
                                                    value={country.mobileCode}
                                                >
                                                    {country.countryName} - {country.mobileCode}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                                <input
                                    type={"tel"}
                                    className='w-full outline-none flex-1' 
                                    required 
                                    placeholder='Mobile number...'
                                />
                            </form>
                        </div>
                        <p>or</p>
                        {/* This is social network box */}
                        <div className='flex flex-col w-full items-center gap-3'>
                            <button className='w-4/5 cursor-pointer border-2  py-[0.4rem] hover:scale-[101%] transition-transform  flex flex-row rounded-full items-center px-4 google'>
                                <GoogleIcon />
                                <p className='flex-1 '>Sign in with Google</p>
                            </button>
                            <button className='w-4/5 text-[#0081FB] cursor-pointer hover:scale-[101%] transition-transform border-2 border-[#0081FB]  py-2 flex flex-row rounded-full items-center px-4'>
                                <MetaIcon color='#0081FB' />
                                <p className='flex-1'>Sign in with Meta</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen