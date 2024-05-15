'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface PopupBestSellerProps {
    isPopup2?: boolean
    setIsPopup?: any
    item: any
}

function PopupBestSeller(props: PopupBestSellerProps) {
    let { isPopup2, setIsPopup } = props
    const { id, image, title, price, salePrice } = props.item
    const [optionSelect, setOptionSelect] = useState(1)
    const [amountSelect, setAmountSelect] = useState(1)
    const [imageIndex, setImageIndex] = useState(0)
    const [imageAvatar, setImageAvatar] = useState('')
    const imageLength = image.length

    const handleAmount = (e: any) => {
        setAmountSelect(e.target.value)
    }
    const handlePopup = () => {
        setIsPopup(false)
        setImageIndex(0)
    }

    useEffect(() => {
        setImageAvatar(image[imageIndex].link)
    }, [imageIndex, props.item])
    useEffect(() => {
        setImageIndex(0)
    }, [props.item])

    return (
        <div className={`${isPopup2 ? 'fixed' : 'hidden'} w-[100vw] h-[100vh] top-[0] left-0 z-[100]`}>
            <div className="w-[700px] h-[440px] bg-white relative z-[102] left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] rounded-lg flex gap-5 p-5">
                <div className="basis-1/2 flex flex-col justify-between gap-2">
                    <Image src={`${imageAvatar}`} alt='' width={310} height={100} className={`w-full h-[300px]`}></Image>
                    <div className="flex w-full justify-between">
                        {image.map((item: any) => (
                            <Image key={item.id} src={item.link} alt='' width={100} height={100} className={`${imageLength <= 3 ? 'w-[31%]' : 'w-[24%]'}`} onClick={() => {setImageIndex(item.id - 1)}}/>
                        ))}
                    </div>
                </div>
                <div className="basis-1/2">
                    <div className="text-xl font-medium">{title}</div>
                    <div className="text-sm mt-1"><span className='font-semibold text-[13px]'>SKU:</span> <span className='text-[12px] tracking-wide'>Đang cập nhật</span></div>
                    <div className="text-sm mt-2 text-red-600 font-medium flex">
                        <div className="">{price.toLocaleString("en-US")}<span>đ</span></div>
                        <div className="ml-3 text-slate-500 line-through">{salePrice?.toLocaleString("en-US")}<span>{salePrice ? "đ" : ""}</span></div>
                    </div>
                    <div className="mt-3 text-[13px]">Khối lượng:</div>
                    <div className="flex mt-1 gap-2">
                        <div className={`text-[12px] flex justify-center items-center border p-3 cursor-pointer ${optionSelect === 1 ? 'border-red-600 text-black' : 'border-gray-400 text-gray-400'}`} onClick={() => {setOptionSelect(1)}}>1kg</div>
                        <div className={`text-[12px] flex justify-center items-center border p-3 cursor-pointer ${optionSelect === 2 ? 'border-red-600 text-black' : 'border-gray-400 text-gray-400'}`} onClick={() => {setOptionSelect(2)}}>2kg</div>
                    </div>
                    <div className="flex mt-4 gap-5">
                        <div className="flex">
                            <input type="number" inputMode="numeric" className='focus:outline-none border border-black w-[40px] h-[50px] flex justify-center items-center text-center' value={amountSelect} onChange={handleAmount}/>
                            <div className="flex flex-col">
                                <div className="h-[25px] border border-black w-10 text-2xl flex items-center justify-center cursor-pointer" onClick={() => setAmountSelect(Number(amountSelect) + 1)}>+</div>
                                <div className="h-[25px] border border-black w-10 text-2xl flex items-center justify-center cursor-pointer" onClick={() => setAmountSelect(amountSelect - 1)}>-</div>
                            </div>
                        </div>
                        <div className="flex w-full bg-mainGreen text-white font-semibold justify-center items-center text-sm">Thêm vào giỏ</div>
                    </div>
                    <Link href={'/'} className="flex mt-4 text-mainGreen text-sm items-center">
                        <span>Xem chi tiết</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                        </svg>

                    </Link>
                </div>
                <div className="absolute top-[-18px] text-white bg-black px-3 py-1 rounded-full right-[-15px] text-base cursor-pointer" onClick={handlePopup}>X</div>
            </div>
            <div className="w-[100vw] h-[100vh] bg-black top-[-59.7vh] left-0 z-[101] opacity-60 relative"></div>
        </div>
    );
}

export default PopupBestSeller;