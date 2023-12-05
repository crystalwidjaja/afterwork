
import React, { useState } from 'react';
import './Questions.css'


const buttonStyle = "border-2 bg-blue-500 text-white"


const majorCities = ["", "Chicago", "Los Angeles", "New York City", "San Francisco"]


const tiers = [{ tier: "Standard", image: "money.jpeg", pricing: "up to $1,000", description: "For the cost-concious planner who wants to create a remarkable experience without exceeding a tight budget" },
{ tier: "Mid-tier", image: "money.jpeg", pricing: "up to $5,000", description: "For the cost-concious planner who wants to create a remarkable experience without exceeding a tight budget" },
{ tier: "Premium", image: "money.jpeg", pricing: "up to $10,000", description: "For the cost-concious planner who wants to create a remarkable experience without exceeding a tight budget" }
]


const vibes = [{ vibe: "Corporate", image: "corporate-office.jpeg" },
{ vibe: "Gala", image: "corporate-office.jpeg" },
{ vibe: "Social", image: "corporate-office.jpeg" }
]

const services = ["DJ", "Panel", "Catering"]


export function Landing({ formID, visible, goBack, goNext }) {
    return (
        <div className={`container px-4 md:px-8 lg:px-12 ${visible ? 'block' : 'hidden'}`}>
            <div className="flex items-center justify-center h-full text-lg">
                <div className="text-center">
                    <p className="mb-8 font-bold">Welcome to the planner!</p>
                    <p className="mb-8">We'll be using AI to generate all the events in the area according to your choosing.</p>
                    <button
                        className={`${buttonStyle} text-md font-semibold px-4 py-2 mb-8 w-30 h-13 rounded-lg transition-transform transform hover:scale-110 duration-400`}
                        style={{
                            backgroundImage: 'linear-gradient(to bottom right, #1539CE, #15CECE)',
                            color: '#ffffff',
                            borderRadius: '0.375rem',
                        }}
                        onClick={goNext}
                    >
                        Click to Begin
                    </button>
                </div>
            </div>
        </div>
    );
}

export function WhereHeld({ formID, visible, goBack, goNext }: WhereHeldProps) {
    return (
        <div className={`container ${visible ? 'block' : 'hidden'} text-center my-8`} style={{ position: 'relative' }}>
            <p className="mb-6 mt-7">Let's get some basic info about your event!</p>

            <form id={formID} className="mb-6 flex justify-center items-center">
                <p className="mr-4 font-bold">Your event will be held in</p>
                <label htmlFor="location"
                    className="block mb-4 w-15 text-black"
                    style={{ color: 'black' }}>
                    <select
                        className="rounded-full bg-gray-200 p-2"
                        id="locationOptions"
                        name="locationOptions"
                        style={{ backgroundColor: 'rgba(21, 57, 206, 0.19)', color: 'black' }}
                    >
                        {majorCities.map((city) => (
                            <option value={city} key={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </label>
            </form>

            <div style={{ marginTop: 'auto', marginBottom: '1px' }}>
                <button
                    style={{ backgroundColor: 'rgba(25, 43, 194, 1)' }}
                    className="hover:bg-gray-500 text-white px-3 py-1 rounded-md transition-all mr-2"
                    onClick={goBack}
                >
                    Back
                </button>

                <button
                    className="hover: bg-gray-500 text-white px-3 py-1 rounded-md transition-all ml-2"
                    style={{ backgroundColor: 'rgba(25, 43, 194, 1)' }}
                    onClick={goNext}
                >
                    Next
                </button>
            </div>

        </div>
    );
}




export function GuestAmount({ formID, visible, goBack, goNext }) {
    return (
        <div className={visible ? "block text-center my-8" : "hidden"}>
            <p className="mb-6">Let's get some basic info about your event!</p>

            <form id={formID} className="mb-4">
                <label htmlFor="guestAmount" className="font-bold mb-4"> I am expecting an average of </label>
                <input
                    className="border-4 bg-gray-200 mb-4 ml-3 mr-3 p-1 rounded-full w-20"
                    type="number"
                    style={{ backgroundColor: 'rgba(21, 57, 206, 0.19)', color: 'black' }}
                />
                <a className="mb-4 font-bold">guests</a>
            </form>


            <div style={{ marginTop: 'auto', marginBottom: '1px' }}>
                <button
                    style={{ backgroundColor: 'rgba(25, 43, 194, 1)' }}
                    className="hover:bg-gray-500 text-white px-3 py-1 rounded-md transition-all mr-2"
                    onClick={goBack}
                >
                    Back
                </button>

                <button
                    className="hover: bg-gray-500 text-white px-3 py-1 rounded-md transition-all ml-2"
                    style={{ backgroundColor: 'rgba(25, 43, 194, 1)' }}
                    onClick={goNext}
                >
                    Next
                </button>
            </div>



        </div>
    )
}

function BudgetChoice({ checked, onSelect, tier, pricing, image, description }) {
    return (
        <div className="border flex flex-col items-center md:w-40 md:h-50 transition-all overflow-hidden mt- mb-1 mx-1 rounded-xl pt-5">
            <label htmlFor={tier} onClick={() => onSelect(tier)}>
                <input className="absolute w-0 h-0" type="radio" name="budget" />
                <div className={`cursor-pointer ${checked ? "bg-blue-800 text-white" : "bg-white text-blue-800"}`}>
                    <p className="text-sm font-bold">{tier}</p>
                    <p className="text-sm">{pricing}</p>
                    <div className="flex justify-center">
                        <img className="w-10 h-10" src={image} alt={tier} />
                    </div>
                    <p className="text-xs mb-3">{description}</p>
                </div>
            </label>
        </div>
    );
}



export function Budget({ formID, visible, goBack, goNext }) {
    const [selection, changeSelection] = useState("");

    return (
        <div className={visible ? "block text-center mt-4" : "hidden "}>
            <p className="font-mulish mb-2 text-2xl font-bold">What's your budget?</p>
            <div className="flex justify-between mb-4">
                <BudgetChoice
                    checked={tiers[0].tier === selection}
                    onSelect={changeSelection}
                    tier={tiers[0].tier}
                    pricing={tiers[0].pricing}
                    image={tiers[0].image}
                    description={tiers[0].description}
                />
                <BudgetChoice
                    checked={tiers[1].tier === selection}
                    onSelect={changeSelection}
                    tier={tiers[1].tier}
                    pricing={tiers[1].pricing}
                    image={tiers[1].image}
                    description={tiers[1].description}
                />
                <BudgetChoice
                    checked={tiers[2].tier === selection}
                    onSelect={changeSelection}
                    tier={tiers[2].tier}
                    pricing={tiers[2].pricing}
                    image={tiers[2].image}
                    description={tiers[2].description}
                />
            </div>

            <div style={{ marginTop: 'auto', marginBottom: '1px' }}>
                <button
                    style={{ backgroundColor: 'rgba(25, 43, 194, 1)' }}
                    className="hover:bg-gray-500 text-white px-3 py-1 rounded-md transition-all mr-2"
                    onClick={goBack}
                >
                    Back
                </button>

                <button
                    className="hover: bg-gray-500 text-white px-3 py-1 rounded-md transition-all ml-2"
                    style={{ backgroundColor: 'rgba(25, 43, 194, 1)' }}
                    onClick={goNext}
                >
                    Next
                </button>
            </div>

        </div>
    );
}

export function VibeChoice({ checked, vibe, image, onSelect }) {
    const [isHovered, setHovered] = useState(false);

    return (
        <label className="border flex flex-col items-center md:w-30 md:h-40 transition-all overflow-hidden mb-3 mx-2 rounded-xl" htmlFor={vibe} onClick={() => onSelect(vibe)}>
            <input className="absolute w-0 h-0" type="radio" name="budget" />
            <div
                className={`cursor-pointer transition-all ${isHovered ? "bg-blue-800 text-white scale-105" : "bg-white text-blue-800"
                    } p-0 flex flex-col items-center h-full`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <p className="mt-1 text-sm md:text-lg font-bold ">{vibe}</p>
                <div className="justify-center mb-1">
                    <img className="w-25 h-50" src={image} alt={vibe} />
                </div>
            </div>
        </label>
    );
}

export function Vibe({ formID, visible, goBack, goNext }) {
    const [selection, changeSelection] = useState("");

    return (
        <div className={visible ? "block text-center mt-4 px-3" : "hidden"}>
            <p className="mb- text-2xl font-bold">What's the vibe?</p>
            <p className="text-sm mb-5">
                This will help us provide you the best recommendations for your event.
            </p>
            <form id={formID} className="flex justify-between">
                {vibes.map((info, index) => (
                    <VibeChoice
                        key={index}
                        checked={info.vibe === selection}
                        onSelect={changeSelection}
                        vibe={info.vibe}
                        image={info.image}
                    />
                ))}
            </form>

            <div style={{ marginTop: 'auto', marginBottom: '1px' }}>
                <button
                    style={{ backgroundColor: 'rgba(25, 43, 194, 1)' }}
                    className="hover:bg-gray-500 text-white px-3 py-1 rounded-md transition-all mr-2"
                    onClick={goBack}
                >
                    Back
                </button>

                <button
                    className="hover: bg-gray-500 text-white px-3 py-1 rounded-md transition-all ml-2"
                    style={{ backgroundColor: 'rgba(25, 43, 194, 1)' }}
                    onClick={goNext}
                >
                    Next
                </button>
            </div>

        </div>
    );
}

export function Services({ formID, visible, goBack, goNext }) {
    // Split the services into three sections
    const sections = [
        ["DJ", "Panel", "Catering"],
        ["Panel", "Sound System", "Lights"],
        ["Insurance", "Security", "Branding"]
    ];

    return (
        <div className={visible ? "block text-center mt-4" : "hidden"}>
            <p className="mb-2 text-lg font-bold">What services are you looking for?</p>
            <p className="text-sm mb-4">This will help us provide you the best recommendations for your event.</p>

            {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-4 flex items-center justify-center">
                    {section.map((service, serviceIndex) => (
                        <div key={serviceIndex} className={serviceIndex !== 0 ? "ml-4" : ""}>
                            <input type="checkbox" id={service} name={service} value={service} />
                            <label htmlFor={service} className="text-sm ml-2"> {service} </label>
                        </div>
                    ))}
                </div>
            ))}

            <div style={{ marginTop: 'auto', marginBottom: '1px' }}>
                <button
                    style={{ backgroundColor: 'rgba(25, 43, 194, 1)' }}
                    className="hover:bg-gray-500 text-white px-3 py-1 rounded-md transition-all mr-2"
                    onClick={goBack}
                >
                    Back
                </button>

                <button
                    className="hover: bg-gray-500 text-white px-3 py-1 rounded-md transition-all ml-2"
                    style={{ backgroundColor: 'rgba(25, 43, 194, 1)' }}
                    onClick={goNext}
                >
                    Next
                </button>
            </div>

        </div>
    );
}

export function Submit({ formID, visible, goBack, goNext }) {
    return (
        <div className={visible ? "block text-center mt-4" : "hidden"}>
            <div className="flex flex-col items-center">
                <input form={formID} className="text-2xl font-bold mb-4" type="submit" value="Ready to Submit?" />

                <div style={{ marginTop: 'auto', marginBottom: '1px' }}>
                    <button
                        style={{ backgroundColor: 'rgba(25, 43, 194, 1)' }}
                        className="hover:bg-gray-500 text-white px-3 py-1 rounded-md transition-all mr-2"
                        onClick={goBack}
                    >
                        Back
                    </button>

                    <button
                        className="hover: bg-gray-500 text-white px-3 py-1 rounded-md transition-all ml-2"
                        style={{ backgroundColor: 'rgba(25, 43, 194, 1)' }}
                        onClick={goNext}
                    >
                        Next
                    </button>
                </div>

            </div>
        </div>
    );
}


export function Final({ formID, visible, goBack, goNext }) {
    return (
        <div className={visible ? "block" : "hidden"}>
            <p className="font-bold mb-8">Creating your new itinerary...</p>
        </div>
    );
}

