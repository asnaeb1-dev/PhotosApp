import React, { useEffect, useState } from 'react'

import CameraSvG from "../../../../assets/cam.svg";
import PhotoSVG from "../../../../assets/photos.svg";
import CollageImage from "../../../../assets/coll.jpg";

import Navbar from '../../UIComponents/NavBar/Navbar';

import { FaGoogle as GoogleIcon } from "react-icons/fa";
import { FaMeta as MetaIcon } from "react-icons/fa6";
import CountryData from "../../../utils/countrycodes.json"
import { GOOGLE_COLORS, PATHS, SIGN_IN } from '../../../utils/strings';

import "./login.css";
import CustomSelect from '../../UIComponents/CustomSelect/CustomSelect';
import { useMutation } from '@tanstack/react-query';
import { ResponseType } from '../../../utils/Models/Response';
import { useNavigate } from 'react-router-dom';
import { authenticateUsingGoogle } from '../../../data/firebase/firebase';

const LoginScreen = () => {
    const [phoneCode, setPhoneCode] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        console.log("code", phoneCode);
    }, [phoneCode]);

    //GOOGLE Auth
	const { mutate: googleAuthMutation, isPending: googleLoginPending } = useMutation({
		mutationFn: authenticateUsingGoogle,
		onSuccess: (data) => {
			console.log("login done using google", data)
			if(data?.responseType === ResponseType.SUCCESS) {
				if(data?.response?.token) {
					navigate(PATHS.DASHBOARD, { replace: true })
				}
			} else {
                console.log(data?.response);
            }
		},
		onError: (err) => {
			console.log(err);
		}
	});

    const handleGoogleLogin = () => {
        googleAuthMutation();
    }

    return (
        <div className='absolute inset-0 w-full h-full overflow-hidden'>
            <div className='absolute inset-0 w-full flex flex-col md:flex-row h-full z-[-1] '>
                <div className='w-full h-full flex-1'></div>
                <div className='w-full h-full flex-1 bg-design'></div>
            </div>
            <Navbar type={0} />
            <img className=' w-40 h-40 lg:w-80 lg:h-80 rotate-12 right-0 absolute opacity-75 select-none' loading={"lazy"} src={CameraSvG} />
            <img className='w-40 h-40 lg:w-80 lg:h-80 z-[-1] absolute left-0 bottom-10 -rotate-12 opacity-75 select-none' loading={"lazy"} src={PhotoSVG} />
            <div className='w-full h-full flex justify-center items-center flex-col '>
                <div className='flex w-full h-[400px] relative bottom-20 flex-col items-center md:h-[480px] md:w-[500px] md:border-2 md:border-indigo-500/50 md:shadow-xl rounded-2xl p-4 bg-white justify-center gap-10'>
                    <p className=' text-2xl select-none font-bold'>{SIGN_IN}</p>
                    <div className='flex flex-col items-center gap-5 w-full'>
                        <div className='w-[90%] md:w-4/5'>
                            {/* This is mobile number form */}
                            <form className='flex flex-col gap-2 w-full'>
                                <CustomSelect list={CountryData} />
                            </form>
                        </div>
                        <div className='flex flex-row w-full items-center justify-center gap-5'>
                            <div className='w-1/3 h-[1px] bg-indigo-500 rounded-full'></div>
                            <p>or</p>
                            <div className='w-1/3 h-[1px] bg-indigo-500 rounded-full'></div>
                        </div>
                        {/* This is social network box */}
                        <div className='flex flex-col w-full items-center gap-3'>
                            <button onClick={handleGoogleLogin} className={`w-[90%] md:w-4/5 hover:scale-[102%]  cursor-pointer transition-transform p-[2px] rounded-full bg-google`}>
                                <span className='w-full h-full bg-white flex flex-row items-center rounded-full px-4 py-2'>
                                    <GoogleIcon color={GOOGLE_COLORS.green} />
                                    <p className='flex-1 '>Sign in with Google</p>
                                </span>
                            </button>
                            <button className='w-[90%] md:w-4/5 text-[#0081FB] cursor-pointer hover:scale-[102%] transition-transform border-2 border-[#0081FB]  py-2 flex flex-row rounded-full items-center px-4'>
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