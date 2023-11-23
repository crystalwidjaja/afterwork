"use client"

import Image from 'next/image'
// import Navigation from "../../components/nav";
import Navigation from "../components/navbar";
import React from "react";
import './events.css'

export function ImageGrid() {
  const items = [
   {
     id: 1,
     src: 'https://s3-alpha-sig.figma.com/img/4907/4b8a/73b2a11ccd964b2e14d4a2f48a90d23e?Expires=1701648000&Signature=ILt1BtAd16LOGMvfYlZvbt4JNr7kReBe3CDJT5hTpVV~Yo70atSN6iiLXAo1e4hXFmyobGWE0HWiaddGG1SnToVV0pDRI8UAv-0IGW1iGj9n3Fukn1iUHPouKJTa2ruG-3DNzMqjEe1hZXziX0H62zI164iCE4B~BqjAsl6Uni0PCE9VhSS6GRYD~26LCpWRxB78iZmiQ6VDWM3Gi7WFWpVfRh32NydI0L8Wc36lVyqK5OMLgFPMklAJetEU89v37d6-gB3ESPVikyBd0J2BjpP~lVEaMeghINBSL~aeCmGKPqjjfmQlADouUYguT3nRen9QDhIb2fzThpnA0c7CSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
     link: 'link here',
   },
   {
     id: 2,
     src: 'https://s3-alpha-sig.figma.com/img/8e0b/f052/f5f8db15309bef57501323bfb17a4776?Expires=1701648000&Signature=bYZ5tML90~F~HfMGG7nOrfDMsItKm5kEZWvHvXdOGKaxGvkSw60yG2GWOuIoD4sD0p0XU35RgNG1Mx1~636AyCDzNr5sjYmBtnNBNqirQvNxchLWlCp1XVcvyPqLaJ3Ntm0S1V460Wa0HkSZzcT3aMqnYxh8J0XOGksxzyhJgq0Bu8itCqPOSrW~0hN39PFWHnQFL4yQ3-Z5g-aFwB4t29OE6DONQpmLqo2ArrWKTzEcQEbjmA~XPr2O-2ZqXhu77Lhyj4XLWUBg~bH8NhkK7WEPdSkpnvoXXCC8l6AibKPSSnbNFnkp2PN69dWkbQFn8AYxPeeedmT7XAprqICpMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
     link: 'link here',
   },
   {
     id: 3,
     src: 'https://s3-alpha-sig.figma.com/img/6ae7/a660/f2b7bbd2b5bb7ae0d170d8be42a89d48?Expires=1701648000&Signature=ki1aSZfgE7ot0Jmul1ZjIdSD2YNhLFO8F8QgSIeJdcj8UP9sgFNtXlVC2XZnt5J2cHncFvV-RkZDQfyKYo7GFBemzPGI9HM9plPohrur1kp8ZKHZTjmD2oMB-8YffyuZoc5lKTDFlPUkJlVDd8skpLYUwTXhQM5OODL~v8P4wVo4eyKmvHyamsnJzxR7-uqv5mfVNGBl1LSm-AJOOrlPht43TPZZaaDtcMezwx~4IRUUPNqkGAaK4oG4ZGxQJZd7VX9PCYWFjBvxuZ3OWwaN3lSQ40P12NVCnOKUXpHD57Iuf5prVHONitiORSfqkti1Rl6lu25pm4fF5O~tAtPMWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
     link: 'link here',
   },
   {
     id: 4,
     src: 'https://s3-alpha-sig.figma.com/img/54bb/fd7e/bcaa70b4a8e276e307549766742649af?Expires=1701648000&Signature=Ks1tmbx3SXC791w2J~KZBuVlauIdGUHJ~HgNWu6qfZpQWogZravk7Zr7sAgKj1rOXWQcnJfUyZ7L-VfCsI505WMGLc0gBZ3fD6RQTxeg7hkBsb4h7gE6XCd4smf9AFdUca1geod7nBzr8wzwr3S55ZFhqzwxPCAdAeNOKw7FnnHE5YLczB9v69pdIKNMGrIT5Pi8YnIVmHAij0CY0u4SoiuwfBdB7orEg~Mat5~SRzOEU9nSglKLs1pwr7UCVacWNJt~g9zc4fzcmms8bvGRmbR7f0-TofTfiPYF~3p34xMF-vzeulSQbyMz0SwKiR4qWsEqFRNS788me2HZD0v~jw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
     link: 'link here',
   },
 ];
 return (
   <>
     <div
       className='white background'
     >
       <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
         <div className='pb-8'>
           <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
Afterwork            </p>
           <p className='py-6'>Search for events hosted in SF.</p>
           <p className='py-7'>to add an event, email us! hello@goafterwork.com</p>
         </div>

         <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5'>
           {items.map(({ id, src, link }) => (
             <div
               key={id}
               className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'
             >
               <img
                 src={src}
                 alt=''
                 className='rounded-md duration-200 hover:scale-105'
               />
               <div className='flex items-center justify-center'>
                 <button
                   className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                   onClick={() => window.open(link, '_blank')}
                 >
                   add
                 </button>
                 <button
                   className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                   onClick={() => window.open(link, '_blank')}
                 >
                   button
                 </button>
               </div>
             </div>
             ))}
            </div>
          </div>
        </div>
      </>
    );
}

export default function Events() {
  return (
    <main>
      <Navigation/>
      <ImageGrid/>
      <h2 className='red'>events page</h2>
      
    </main>
  )
}
