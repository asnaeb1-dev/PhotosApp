import React, { useState } from 'react'
import "./customselect.css";

const CustomSelect = ({ list }) => {
    const [text, setText] = useState()
    const [showList, setShowList] = useState(false);
    const [currentSelections, setCurrentSelections] = useState(list[0].mobileCode)
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row gap-2'>
                <div className={`flex ${text ? "flex-2" : "flex-1"} flex-row border-2 gap-1 rounded-full outline-none border-indigo-500`}>
                    <span onClick={() => setShowList(!showList)} className='outline-none shadow-xl flex-1 cursor-pointer bg-indigo-500/20 rounded-l-3xl rounded-r-sm border-indigo-500 '>
                        <p
                            className='outline-none w-full  py-2 rounded-full px-2 text-center'
                            type={"text"}
                            placeholder={"Select country"}
                        >
                            +{currentSelections}
                        </p>
                    </span>
                    <span className='flex-[4]'>
                        <input
                            type={"tel"}
                            inputMode={"tel"}
                            maxLength={15}
                            onChange={e => setText(e.target.value)}
                            placeholder='Mobile no.'
                            name="mobileNumber"
                            className='outline-none w-full  py-2 rounded-full px-2'
                        />
                    </span>
                </div>
                {
                    text &&
                        <button className={`border-2 border-indigo-500 flex items-center  justify-center flex-1 rounded-full`}>
                            Go
                        </button>
                }
            </div>
            {
                showList &&
                <SelectList
                    list={list}
                    handleItemClick={index => (setCurrentSelections(list[index].mobileCode), setTimeout(setShowList(false), 200))}
                />
            }
        </div>
    )
}


const SelectList = ({ list = [], handleItemClick }) => {
    return (
        <div className='w-[371px] container h-52 border-2 py-1 border-indigo-500 rounded-lg  absolute bottom-12 z-10 overflow-y-auto flex flex-col gap-2 bg-white'>
            {
                list.map((country, index) => {
                    return (
                        <span onClick={() => handleItemClick(index)} key={country.countryName} className='flex mx-1 cursor-pointer py-2 rounded-lg flex-row hover:bg-indigo-500/40 hover:text-white justify-between px-2 items-center justify-center'>
                            <div className='flex flex-row gap-2 items-center'>
                                <img width={20} height={10} src={"https://cdn.countryflags.com/thumbs/china/flag-square-250.png"} alt="" loading={"lazy"} />
                                <p className='flex-1'>{country.countryName}</p>
                            </div>
                            <p className='flex-1 text-end'>{country.mobileCode}</p>
                        </span>
                    )
                })
            }
        </div>
    )
}

export default CustomSelect