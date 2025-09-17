import logoPolyniaBlack from '../assets/pome/logo_polynia_black.png';
import shopeeIcon from '../assets/rjm/shopee-icon.png';
import produkPome from '../assets/pome/pome_produk.png';
import whatsappIconGreen from '../assets/rjm/whatsapp-icon-green.png';
import pomeBfa1 from "../assets/pome/pome_bfa1.jpg";
import pomeBfa2 from "../assets/pome/pome_bfa2.jpg";
import pomeBfa3 from "../assets/pome/pome_bfa3.png";
import buahPome from "../assets/pome/buah_pome.png";
import pomeHTU1 from "../assets/pome/Pome_HTU_1.png";
import pomeHTU2 from "../assets/pome/Pome_HTU_2.png";
import pomeHTU3 from "../assets/pome/Pome_HTU_3.png";

function Pomegranate() {

    function handleConsult() {
        window.open('https://wa.me/6287789598557', '_blank');
    }

    return (
        <div className="fade-in flex justify-center w-full">
            <div className="w-full lg:w-1/3 md:w-2/3 flex flex-col gap-0 items-center">
                <div>
                    <img src={logoPolyniaBlack} alt="Rose Jelly Mask" className="w-1/4 mx-auto mt-4" />
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    <div className="w-[330px] lexend-deca-semibold text-4xl text-center">Samarin kerutan dan flek hitam</div>
                    <div className='lexend-deca-regular text-xl text-center'>Mengurangi tanda penuaan</div>
                </div>
                
                <div className='w-[350px] h-[350px]'>
                    <img src={produkPome} alt="Produk Polynia Pomegranate" />
                </div>

                <div className='mt-16 flex items-center gap-2 lexend-deca-semibold text-base'>
                    <div 
                        onClick={() => { window.open("https://shopee.co.id/POLYNIA-Pomegranate-Revitalizing-Face-Mask-Masker-Anti-Aging-Pudarkan-Kerutan-Garis-Halus-Samarkan-Flek-Hitam-BPOM-i.832362926.18734566734") }} 
                        className='cursor-pointer flex items-center gap-1 px-4 py-2 bg-[#EA501F] text-white rounded-4xl hover:opacity-70 transition ease-in-out duration-300'
                    >
                        <img src={shopeeIcon} alt="Shopee" className='inline w-3' />
                        Dapatkan di Shopee
                    </div>
                </div>
                
                
                {/* Ingredients Rose Jelly Mask */}
                <div className='flex flex-col items-center gap-8 mt-12'>
                    <div className='w-[330px] lexend-deca-semibold text-3xl text-center'>Seperti Botox di rumah sendiri</div>
                    <div className='flex flex-col gap-4'>
                        <img className='aspect-16/9' src={pomeBfa1} alt="Pome BFA 1" />
                        <img className='aspect-16/9' src={pomeBfa2} alt="Pome BFA 2" />
                        <img className='aspect-16/9' src={pomeBfa3} alt="Pome BFA 3" />
                    </div>
                </div>

                <div className='relative flex flex-col gap-8 mt-12 items-center'>
                    <div className='w-[330px] lexend-deca-semibold text-3xl text-center'>Apa kandungan Pomegranate Mask?</div>
                    <img fetchPriority='high' className='aspect-5/9' src={buahPome} alt="" />
                    <div className='absolute bottom-2 left-4 flex flex-col gap-0'>
                        <div className='text-4xl text-white lexend-deca-semibold'>Pomegranate Extract</div>
                        <div className='text-4xl text-white lexend-deca-semibold'>Niacinamide</div>
                        <div className='text-4xl text-white lexend-deca-semibold'>Vitamin C</div>
                        <div className='text-4xl text-white lexend-deca-semibold'>Tea Tree Extract</div>
                        <div className='text-4xl text-white lexend-deca-semibold'>Plantago Major Seed Extract</div>
                        <div className='text-4xl text-white lexend-deca-semibold'>Vaccinium Myrtillus Fruit Extract</div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-8 mt-12">
                    <div className='w-[330px] lexend-deca-semibold text-3xl text-center'>Cara pemakaian Pomegranate Mask</div>
                    <div className='flex gap-3 justify-center'>
                        <div className='lexend-deca-semibold flex flex-col justify-center items-center gap-2'>
                            <div className='text-xl'>maks.</div>
                            <div className='text-4xl text-[#A3242C]'>4x</div>
                            <div className='text-xl'>seminggu</div>
                        </div>
                        <div className='w-3/5 flex flex-col items-center gap-6 lexend-deca-regular'>
                            <div className='flex gap-3 items-center'>
                                <img className='w-[100px] rounded-full' src={pomeHTU1} alt="" />
                                Cuci muka dengan air bersih.
                            </div>
                            <div className='flex gap-3 items-center'>
                                <img className='w-[100px] rounded-full' src={pomeHTU2} alt="" />
                                Oleskan ke wajah sambil pijat merata
                            </div>
                            <div className='flex gap-3 items-center'>
                                <img className='w-[100px] rounded-full' src={pomeHTU3} alt="" />
                                Bilas dengan air bersih atau dibawa tidur.
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center gap-6 mt-12 h-[240px]'>
                    <div className='w-[250px] lexend-deca-semibold text-3xl text-center'>Belum yakin? Yuk konsultasi.</div>
                    <div onClick={() => handleConsult()} className='cursor-pointer rounded-full flex gap-1 items-center border-1 border-[#25D366] p-2'>
                        <img className='w-5 ml-2' src={whatsappIconGreen} alt="Whatsapp Icon" />
                        <div className='lexend-deca-semibold text-lg text-[#25D366]'>Apa masalah kulit kamu?</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Pomegranate;