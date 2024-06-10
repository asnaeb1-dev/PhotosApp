import React, { useState } from 'react'
import { CiMenuKebab as MenuIcon } from "react-icons/ci";

const PhotosGrid = () => {


    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzPEK2qo0EX-KvHRGIbTrOqL9ri5uGffLrkA&s",
        "https://i.pinimg.com/736x/e9/02/0b/e9020bd38dbe20292b42cfa556bd20bf.jpg",
        "https://blog.playstation.com/tachyon/2022/06/0c3c20a8d8514501524a0859461f391572ea6e61.jpg",
        "https://upload.wikimedia.org/wikipedia/en/d/d6/Superman_Man_of_Steel.jpg",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFODjKKTJ8NdutNzggtBvAsj7udRjZgJXEA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4WNNT7XagN8n4Xe4aTGdaiW-6kCDR6B1_8A&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1IelA0PS9fAbJBWBwsICO3kZkV_-H0R9UpA&s",
        "https://i.pcmag.com/imagery/articles/02d59YeUacjuY8olmMvrRhy-2.fit_lim.v1569487536.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSzXWFvwJVsLyJas77KD8bQF7UxECuTbWIw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa8D9hS_dPFIv8Khmb98umyAe1YHvA2_A3hQ&s",
        "https://media.newyorker.com/photos/5909527c1c7a8e33fb38a864/master/pass/Man_of_Steel-580.jpeg",
        "https://images.thedirect.com/media/article_full/superman-logo.jpg",
        "https://upload.wikimedia.org/wikipedia/en/d/d6/Superman_Man_of_Steel.jpg",
        "https://preview.redd.it/reminder-that-batman-arkham-knight-came-out-in-2015-and-was-v0-0ly0hyim6m8a1.jpg?width=640&crop=smart&auto=webp&s=95b2349d9293a6163657ed9f7c62a5f8fad05ecd",
        "https://wallpapers.com/images/featured/spiderman-background-oycfyb1ksermw921.jpg",
        "https://i.pinimg.com/736x/e9/02/0b/e9020bd38dbe20292b42cfa556bd20bf.jpg",

        "https://cdn.mos.cms.futurecdn.net/cdab5f38e87469a0ecbb6b0a6b3f5b97-1200-80.jpg",
        "https://blog.playstation.com/tachyon/2022/06/0c3c20a8d8514501524a0859461f391572ea6e61.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFODjKKTJ8NdutNzggtBvAsj7udRjZgJXEA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4WNNT7XagN8n4Xe4aTGdaiW-6kCDR6B1_8A&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1IelA0PS9fAbJBWBwsICO3kZkV_-H0R9UpA&s",
        "https://i.pcmag.com/imagery/articles/02d59YeUacjuY8olmMvrRhy-2.fit_lim.v1569487536.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzPEK2qo0EX-KvHRGIbTrOqL9ri5uGffLrkA&s",
    ] 

    // className={ img !== "" ? `hover:scale-110 hover:transition-transform h-72 hover:shadow-2xl p-4 bg-no-repeat bg-cover bg-center cursor-pointer rounded-lg ${image.width > 600 && "col-span-2"} ${(index === images.length - 1) ? "h-72" : (image.height > 600 && "row-span-2 h-full")}` : " h-72"}

    return (
        <div className='grid grid-cols-2 gap-1 p-1 lg:grid-cols-4 grid-flow-dense overflow-hidden'>
            {
                images.map((img, index) => {
                    const image = new Image();
                    image.src = img;
                    console.log(image.width, image.height);
                    return (
                        <PhotoGridItem
                            key={index}
                            index={index}
                            imageSrc={image.src}
                        />
                    )
                })
            }
        </div>
    )
}


const PhotoGridItem = ({ imageSrc, index = -1 }) => {
    const [isMouseHover, setMouseHover] = useState(false);
    const x = index % 4;
    const y = Math.floor(index / 4);

    return (
        <div
            onMouseOver={() => setMouseHover(true)}
            onMouseOut={() => setMouseHover(false)}
            style={{ backgroundImage: `url(${imageSrc})` }}
            className={`hover:scale-125 ${x === 0 && y === 0 && "origin-top-left"} ${x === 0 && "origin-left"} ${y === 0 && "origin-top"} hover:transition-transform h-72 hover:shadow-2xl p-4 bg-no-repeat bg-cover bg-center cursor-pointer rounded-lg`}
            key={index}
        >
            {
                isMouseHover &&
                <div className='flex flex-col w-full h-full'>
                    <p className='text-[22px] font-bold '>phototitle</p>
                </div>
            }
        </div>
    )
}

export default PhotosGrid