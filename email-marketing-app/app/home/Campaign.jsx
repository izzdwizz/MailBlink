import Image from 'next/image'
import { campaignDetailsList, campaignFeaturesDetails } from './data'

const Campaign = () => {
  return (
    <section className='mx-auto max-w-7xl'>
        <div className="my-20 px-8 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center md:gap-20">
                <Image src="/image/unsplash_Of_m3hMsoAA.svg" alt="campaign splash photo" width={100} height={100}  className='w-full object-cover'/>
                <div className="">
                    <p className="font-Roboto text-3xl sm:text-4xl md:text-5xl mt-10 md:mt-0 font-bold text-primaryBlack2 text-center leading-tight">Create beautiful <br/>
                    <span className='text-forestGreen'>Email Campaigns </span></p>
                    <div className=" mt-4">
                        <p className="text-sm md:text-base text-primaryBlack leading-6">Use our machine learning powered propriotory solutions to protect your business from any cybersecurity attacts.</p>
                        <p className="text-navyBlue font-semibold mt-2 font-lg text-sm md:text-base">Schedule a demo with our friendly experts.</p>
                        <div className="mt-4">
                            {campaignDetailsList.map(({ id, photo, alt, heading, content }) => (
                                <div className="flex gap-10 mb-4" key={id}>
                                    <Image src={photo}  alt={alt} width={50} height={50}  className=''/>
                                    <div className="">
                                        <h3 className="text-primaryBlack2 font-semibold my-2 text-sm md:text-base">{heading}</h3>
                                        <p className="text-primaryBlack text-sm max-w-[340px]">{content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-8">
                            <button href='#' className="bg-navyBlue hover:rounded-[24px] rounded-full border border-navyBlue text-white hover:bg-white hover:text-navyBlue px-6 py-3 font-semibold hover:border hover:border-navyBlue hover:font-medium text-sm transition duration-100">Schedule a demo</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 text-sm md:text-base md:grid-cols-2 pt-16 gap-x-20 gap-y-10">
                {campaignFeaturesDetails.map(({ id, photo, alt, heading, content })=> (
                    <div className="flex gap-10" key={id}>
                        <Image src={photo} alt={alt} width={60} height={60}  className=''/>
                        <div className="">
                            <h3 className="text-primaryBlack2 font-semibold my-2 text-sm md:text-base">{heading}</h3>
                            <p className="text-primaryBlack text-sm max-w-[450px]">{content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Campaign