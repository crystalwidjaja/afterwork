"use client"

import Image from 'next/image'
// import Navigation from "../../components/nav";
import Navigation from "../components/navbar";
import React, { useState } from "react";
import './events.css'

interface BlockProps {
  id: number,
  src: string,
  link: string,
  title: string,
  date: string,
  place: string,
  time: string,
}

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="flex items-center justify-center" >
      <div className="relative">
        <svg className="0w-5 h-5 text-gray-50" fill="currentColor" ></svg>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="block p-2 pl-10 w-70 text-gray-900 bg-color rounded-lg border border-gray-300 focus:pl-3"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

interface ButtonProps {
  label: string;
  color: string;
}

const CustomButton: React.FC<ButtonProps> = ({ label, color }) => (
  <button className={`rounded-full px-4 py-2 text-white font-bold button-${color}`}>
    {label}
  </button>
);

// const SearchBar = () => {

//   const clickPoint = useRef();
//   const handleFocus = () => {
//       clickPoint.current.style.display = "none";
//   };

//   const handleBlur = () => {
//       clickPoint.current.style.display = "block";
//   };

//   return (
//       <div className="items-center px-4 flex justify-center" >
//           <div className="relative mr-3">
//               <div className="absolute top-3 left-3 items-center" ref={clickPoint}>
//                   <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
//               </div>
//               <input
//                   type="text"
//                   className="block p-2 pl-10 w-70 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:pl-3"
//                   placeholder="Search Here..."
//                   onFocus={handleFocus}
//                   onBlur={handleBlur}
//               />
//           </div>
//       </div>
//   );
// }

const boxColors = ['#192BC2', '#3BCEAC', '#FFB100', '#BB86FC'];

const EventBlock: React.FC<BlockProps> = ({ id, src, link, title, date, place, time }) => {
  return (

    <div
      key={id}
      className='blue-box shadow-md shadow-gray-600 rounded-lg overflow-hidden'
    >
      <img
        src={src}
        alt=''
        className='rounded-md duration-200 hover:scale-105 max-w-full'
      />
      <div className='box-details'>
        <div className='title'>{title}</div>
        <div className='details'>
          <div className='icon'>
            <img src="Calendericon.png" alt="Calendar" />
          </div>
          <div className='date'>{date}</div>
        </div>
        <div className='details'>
          <div className='icon'>
            <img src="placeicon.png" alt="Place" />
          </div>
          <div className='place'>{place}</div>
        </div>
        <div className='details'>
          <div className='icon'>
            <img src="timeicon.png" alt="Time" />
          </div>
          <div className='time'>{time}</div>
        </div>
      </div>
    </div>
  )
}

export function ImageGrid() {
  const items = [
    {
      id: 1,
      src: 'https://s3-alpha-sig.figma.com/img/4907/4b8a/73b2a11ccd964b2e14d4a2f48a90d23e?Expires=1701648000&Signature=ILt1BtAd16LOGMvfYlZvbt4JNr7kReBe3CDJT5hTpVV~Yo70atSN6iiLXAo1e4hXFmyobGWE0HWiaddGG1SnToVV0pDRI8UAv-0IGW1iGj9n3Fukn1iUHPouKJTa2ruG-3DNzMqjEe1hZXziX0H62zI164iCE4B~BqjAsl6Uni0PCE9VhSS6GRYD~26LCpWRxB78iZmiQ6VDWM3Gi7WFWpVfRh32NydI0L8Wc36lVyqK5OMLgFPMklAJetEU89v37d6-gB3ESPVikyBd0J2BjpP~lVEaMeghINBSL~aeCmGKPqjjfmQlADouUYguT3nRen9QDhIb2fzThpnA0c7CSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      link: 'link here',
      title: 'A Glass of SaaS',
      date: 'October 17, 2023',
      place: '139 Durant Ave, Unit 202',
      time: '4:00 - 7:00PM',
    },
    {
      id: 2,
      src: 'https://s3-alpha-sig.figma.com/img/8e0b/f052/f5f8db15309bef57501323bfb17a4776?Expires=1701648000&Signature=bYZ5tML90~F~HfMGG7nOrfDMsItKm5kEZWvHvXdOGKaxGvkSw60yG2GWOuIoD4sD0p0XU35RgNG1Mx1~636AyCDzNr5sjYmBtnNBNqirQvNxchLWlCp1XVcvyPqLaJ3Ntm0S1V460Wa0HkSZzcT3aMqnYxh8J0XOGksxzyhJgq0Bu8itCqPOSrW~0hN39PFWHnQFL4yQ3-Z5g-aFwB4t29OE6DONQpmLqo2ArrWKTzEcQEbjmA~XPr2O-2ZqXhu77Lhyj4XLWUBg~bH8NhkK7WEPdSkpnvoXXCC8l6AibKPSSnbNFnkp2PN69dWkbQFn8AYxPeeedmT7XAprqICpMw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      link: 'link here',
      title: 'Pre-Saastr Huddle',
      date: 'September 5, 2023',
      place: '139 Durant Ave, Unit 202',
      time: '4:00 - 7:00PM',
    },
    {
      id: 3,
      src: 'https://s3-alpha-sig.figma.com/img/bffd/4c14/28a3da58fe8197fe3caed24603065d8d?Expires=1701648000&Signature=i6SVEBNlh6gTymvtJau5OeNJ8HOYAJQiYW8cxdvnA9xrTZ2esfzf551zcr4Y~MzFtHk03QdOXDeVnlpc7-x1iOuFq-KusLb5AB7DGptgI5-UTASBIIW0frreMo75yMbtFOSJVeg-LbMendizymB8kPSnDwko72VF4KSG2isoRPa82EDkxzaL4t~Xp8fTjnYdU~Cc-KiNwfbCdqt-7nvD5lNP83BZpW4lcetIexh77bn6jCJLky0W9iZxLrzt9UWJ8xvjf6PZ50e0hQ~LxmD3p~CBa5WES-tT0A51kJ~jA41-qExgd~NE~9YngRfGgxs23IE-cURVK4lyNbqPnOJ66g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      link: 'link here',
      title: 'PLG Happy Hour',
      date: 'September 7, 2023',
      place: '139 Durant Ave, Unit 202',
      time: '4:00 - 7:00PM',
    },
    {
      id: 4,
      src: 'https://s3-alpha-sig.figma.com/img/54bb/fd7e/bcaa70b4a8e276e307549766742649af?Expires=1701648000&Signature=Ks1tmbx3SXC791w2J~KZBuVlauIdGUHJ~HgNWu6qfZpQWogZravk7Zr7sAgKj1rOXWQcnJfUyZ7L-VfCsI505WMGLc0gBZ3fD6RQTxeg7hkBsb4h7gE6XCd4smf9AFdUca1geod7nBzr8wzwr3S55ZFhqzwxPCAdAeNOKw7FnnHE5YLczB9v69pdIKNMGrIT5Pi8YnIVmHAij0CY0u4SoiuwfBdB7orEg~Mat5~SRzOEU9nSglKLs1pwr7UCVacWNJt~g9zc4fzcmms8bvGRmbR7f0-TofTfiPYF~3p34xMF-vzeulSQbyMz0SwKiR4qWsEqFRNS788me2HZD0v~jw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      link: 'link here',
      title: 'B2Breakfast',
      date: 'September 8, 2023',
      place: '139 Durant Ave, Unit 202',
      time: '4:00 - 7:00PM',
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

          <SearchBar />

          <div className='flex justify-center mt-8 space-x-4 mb-10'>
            <CustomButton label="SaaStr" color="saastr" />
            <CustomButton label="FinTech" color="fintech" />
            <CustomButton label="Investors" color="investors" />
            <CustomButton label="Blockchain" color="blockchain" />
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-5'>
            {items.map(({ id, src, title, date, place, time }, index) => (
              <EventBlock
                id={id}
                src={src}
                link="hi"
                title={title}
                date={date}
                place={place}
                time={time}
                boxColor={boxColors[index % boxColors.length]}
              >
              </EventBlock>
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
      <Navigation />
      <ImageGrid />
    </main>
  )
}
