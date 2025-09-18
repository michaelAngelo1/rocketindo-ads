import logoEileenGrace from '../assets/rjm/logo-eileengrace.png';
import produkRjm from '../assets/rjm/produk-rjm.webp';
import shopeeIcon from '../assets/rjm/shopee-icon.png';
import bulgarianRose from '../assets/rjm/bulgarian-rose.png';
import centellaAsiatica from '../assets/rjm/centella-asiatica.png';
import hyaluronicAcid from '../assets/rjm/hyaluronic-acid.png';
import egMockup from '../assets/rjm/eg-mockup.png';
import whatsappIconGreen from '../assets/rjm/whatsapp-icon-green.png';
import { useEffect, useState } from 'react';
import bfa1 from "../assets/rjm/bfa1_rjm.jpg";
import bfa2 from "../assets/rjm/bfa2_rjm.jpg";
import bfa3 from "../assets/rjm/bfa3_rjm.jpg";
import bfa4 from "../assets/rjm/bfa4_rjm.jpg";

function RoseJellyMask() {

    const [loading, setLoading] = useState(true);

    function handleConsult() {
        window.open('https://wa.me/6287867306822', '_blank');
    }

    useEffect(() => {
        const timer = setTimeout((() => {
            setLoading(false);
        }), 1500);
        return () => clearTimeout(timer);
    }, []);

    if(loading) {
        return (
            <div className='flex justify-center items-center h-screen bg-white'>
                <img
                    src={logoEileenGrace}
                    alt="Loading..."
                    className="w-64 opacity-0 animate-fade-in"
                    style={{
                        animation: 'fade-in 0.7s ease-in forwards'
                    }}
                />
            </div>
        )
    }

    return (
        <div className="fade-in flex justify-center w-full">
            <div className="w-full lg:w-1/3 md:w-2/3 flex flex-col gap-0 items-center">
                <div>
                    <img src={logoEileenGrace} alt="Rose Jelly Mask" className="w-1/2 mx-auto mt-4" />
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    <div className="w-[330px] lexend-deca-semibold text-4xl text-center">Rawat jerawat dan beruntusan</div>
                    <div className='lexend-deca-regular text-xl text-center'>Melembapkan & mencerahkan</div>
                </div>
                
                <div className='w-[350px] h-[350px]'>
                    <img src={produkRjm} alt="Produk Rose Jelly Mask" />
                </div>

                <div className='flex items-center gap-2 lexend-deca-semibold text-base'>
                    <div 
                        onClick={() => { window.open("https://shopee.co.id/EILEEN-GRACE-Moisturize-Rose-Jelly-Mask-300-ml-Masker-Wajah-Jerawat-Bruntus-Bopeng-Bekas-Jerawat-Kemerahan-Skin-Barrier-Mencerahkan-Melembapkan-i.33221984.460504215?sp_atk=6b85ea89-582f-490a-afeb-717f8568c163&xptdk=6b85ea89-582f-490a-afeb-717f8568c163") }} 
                        className='cursor-pointer flex items-center gap-1 px-4 py-2 bg-[#EA501F] text-white rounded-4xl hover:opacity-70 transition ease-in-out duration-300'
                    >
                        <img src={shopeeIcon} alt="Shopee" className='inline w-3' />
                        Dapatkan di Shopee
                    </div>
                </div>
                
                
                {/* Ingredients Rose Jelly Mask */}
                <div className='flex flex-col gap-10 mt-12'>
                    <div className='lexend-deca-semibold text-4xl text-center'>Apa saja kandungan Rose Jelly Mask?</div>
                    <div className='relative lexend-deca-semibold h-[400px]'>
                        <div className='absolute top-0 left-0'>
                            <div className='p-9 w-[360px] h-[100px] rounded-r-full flex items-center justify-between bg-[#FF5858] text-lg text-white'>
                                <img className='w-20' src={bulgarianRose} alt="" />
                                Bulgarian Rose
                            </div>                            
                        </div>
                        <div className='absolute top-32 right-0'>
                            <div className='p-9 w-[360px] h-[100px] rounded-l-full flex items-center justify-between border border-[#FF5858] text-lg text-[#FF5858]'>
                                Centella Asiatica
                                <img className='w-20' src={centellaAsiatica} alt="" />
                            </div>
                        </div>
                        <div className='absolute top-64 left-0'>
                            <div className='p-9 w-[360px] h-[100px] rounded-r-full flex items-center justify-between bg-[#FF5858] text-lg text-white'>
                                <img className='w-20' src={hyaluronicAcid} alt="" />
                                Hyaluronic Acid
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-col gap-10 mt-4'>
                    <div className='w-[330px] lexend-deca-semibold text-4xl text-center'>Apa saja manfaat Rose Jelly Mask?</div>
                    <div className='relative lexend-deca-semibold m-auto w-[330px] h-[330px] text-white'>
                        <div className='transition-all duration-300 ease-in-out hover:scale-110 text-center text-lg absolute top-3 left-0 w-[180px] h-[180px] bg-[#FF5858] rounded-full flex justify-center items-center'>
                            Merawat jerawat dan bekasnya
                        </div>
                        <div className='transition-all duration-300 ease-in-out hover:scale-110 text-center text-lg absolute top-16 right-0 w-[150px] h-[150px] bg-[#FF5858] rounded-full flex justify-center items-center'>
                            Menenangkan kulit
                        </div>
                        <div className='transition-all duration-300 ease-in-out hover:scale-110 text-center text-lg absolute top-46 right-26 w-[150px] h-[150px] bg-[#FF5858] rounded-full flex justify-center items-center'>
                            Menghidrasi kulit
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-10 mt-12 items-center'>
                    <div className='w-[360px] lexend-deca-semibold text-4xl text-center'>Jerawat hilang dalam dua minggu</div>
                    <img src={bfa1} alt="BFA 1" />
                    <img src={bfa2} alt="BFA 2" />
                    <img src={bfa3} alt="BFA 3" />
                    <img src={bfa4} alt="BFA 4" />
                </div>

                <div className="flex flex-col items-center gap-6 mt-12">
                    <div className='w-[330px] lexend-deca-semibold text-4xl text-center'>Kenapa harus Rose Jelly Mask?</div>
                    <div className='w-[330px] lexend-deca-regular text-lg text-center'>Moisturize Rose Jelly Mask sudah terjual lebih dari 1 juta pcs ke seluruh Indonesia.</div>
                    <img className='w-[240px] rounded-xl' src={egMockup} alt="EG Mockup" />
                    <div className='w-[330px] lexend-deca-regular text-lg text-center'>Ini menjadikan Moisturize Rose Jelly Mask menjadi masker jeli paling laris sepanjang masa menurut riset IDN Times 2022.</div>
                </div>

                <div className='flex flex-col items-center gap-6 mt-12 h-[240px]'>
                    <div className='w-[280px] lexend-deca-semibold text-4xl text-center'>Belum yakin? Yuk konsultasi.</div>
                    <div onClick={() => handleConsult()} className='cursor-pointer rounded-full flex gap-1 items-center border-1 border-[#25D366] p-2'>
                        <img className='w-5 ml-2' src={whatsappIconGreen} alt="Whatsapp Icon" />
                        <div className='lexend-deca-semibold text-lg text-[#25D366]'>Apa masalah kulit kamu?</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RoseJellyMask;