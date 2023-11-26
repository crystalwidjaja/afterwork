import React, { useState } from 'react';

const majorCities = ["Los Angeles", "Chicago", "New York City", "San Francisco"]

const tiers = [{tier: "Standard", image:"money.jpeg", pricing:"up to $1,000", description:"For the cost-concious planner who wants to create a remarkable experience without exceeding a tight budget"},
                {tier: "Mid-tier", image:"money.jpeg", pricing:"up to $5,000", description:"For the cost-concious planner who wants to create a remarkable experience without exceeding a tight budget"},
                {tier: "Premium", image:"money.jpeg", pricing:"up to $10,000", description:"For the cost-concious planner who wants to create a remarkable experience without exceeding a tight budget"}
            ]

const vibes = [{vibe: "Corporate", image: "corporate-office.jpeg"},
                {vibe: "Gala", image: "money.jpeg"},
                {vibe: "Social", image: "corporate-office.jpeg"}
]

const services = ["DJ", "Panel", "Catering"]

export function Landing({ formID, visible, goBack, goNext }){
    return (
        <div class={visible ? "block":"hidden"}>
            <p>Welcome to the planner!</p>
            <p>We'll be using AI to generate all the events in the area according to your choosing</p>
            <button class="border-2 bg-blue-500 text-white" onClick={goNext}>Click to go next</button>
        </div>
    )
}

export function WhereHeld({ formID, visible, goBack, goNext }){
    return (
        <div class={visible ? "block":"hidden"}>
            <p>Lets get some basic info about your event</p>

            <form id={formID}>
                <label htmlFor="location">Your event will be held in </label>
                <select class="bg-gray-200" id="locationOptions" name="locationOptions">
                    {majorCities.map((city) => <option value={city}>{city}</option>)}
                </select>
            </form>

            <button class="border-2 bg-blue-500 text-white" onClick={goBack}>Previous</button>
            <button class="border-2 bg-blue-500 text-white"onClick={goNext}>Next</button>
        </div>
    )
}

export function GuestAmount({ formID, visible, goBack, goNext }){
    return (
        <div class={visible ? "block":"hidden"}>
            <p>Lets get some basic info about your event</p>

            <form id={formID}>
                <label htmlFor="guestAmount">I am expecting an average of </label>
                <input class="border-2 bg-gray-200" type="number"/>
                <a>guests</a>
            </form>

            <button class="border-2 bg-blue-500 text-white" onClick={goBack}>Previous</button>
            <button class="border-2 bg-blue-500 text-white" onClick={goNext}>Next</button>
        </div>
    )
}

function BudgetChoice({ checked, onSelect, tier, pricing, image, description}){
    return (
        <div class="border">
            <label htmlFor={tier} onClick={() => onSelect(tier)}>
            <input class="absolute w-0 h-0" type="radio" name="budget"/>
            <div class={`cursor-pointer ${checked ? "bg-blue-800 text-white":"bg-white text-blue-800"}`}>
                <p>{tier}</p>
                <p>{pricing}</p>
                <img class="w-10 h-10" src={image}/>
                <p>{description}</p>
            </div>
            </label>
        </div>
    )
}


export function Budget({ formID, visible, goBack, goNext }){
    const [selection, changeSelection] = useState("")
    return (
        <div class={visible ? "block":"hidden"}>
            <p>What's your budget</p>
            <form id={formID}>
                {tiers.map((info, index) => <BudgetChoice checked={info.tier==selection}
                                                    onSelect={changeSelection}
                                                    tier={info.tier}
                                                    pricing={info.pricing}
                                                    image={info.image}
                                                    description={info.description}/>)}
            </form>
            <div>
                <button class="border-2 bg-blue-500 text-white" onClick={goBack}>Previous</button>
                <button class="border-2 bg-blue-500 text-white" onClick={goNext}>Next</button>
            </div>
        </div>
    )
}

function VibeChoice({ checked, vibe, image, onSelect }){
    return (
        <div class="border">
            <label htmlFor={vibe} onClick={() => onSelect(vibe)}>
            <input class="absolute w-0 h-0" type="radio" name="budget"/>
            <div class={`cursor-pointer ${checked ? "bg-blue-800 text-white":"bg-white text-blue-800"}`}>
                <p>{vibe}</p>
                <img class="" src={image}/>
            </div>
            </label>
        </div>
    )
}

export function Vibe({ formID, visible, goBack, goNext }){
    const [selection, changeSelection] = useState("")
    return (
        <div class={visible ? "block":"hidden"}>
            <p>What's the vibe?</p>
            <form id={formID}>
                {vibes.map((info, index) => <VibeChoice checked={info.vibe==selection}
                                                    onSelect={changeSelection}
                                                    vibe={info.vibe}
                                                    image={info.image}/>)}
            </form>
            <div>
                <button class="border-2 bg-blue-500 text-white" onClick={goBack}>Previous</button>
                <button class="border-2 bg-blue-500 text-white" onClick={goNext}>Next</button>
            </div>
        </div>
    )
}

export function Services({ formID, visible, goBack, goNext }){
    return (
        <div class={visible ? "block":"hidden"}>
            <p>What services are you looking for?</p>
            <p>This will help us provide you the best recommendations for your event</p>
            <form id={formID}>
                {services.map((service) => (<div>
                <input type="checkbox" id={service} name={service} value={service}/>
                <label for={service}> {service} </label>
                </div>
                ))}
            </form>
            <div>
                <button class="border-2 bg-blue-500 text-white" onClick={goBack}>Previous</button>
                <button class="border-2 bg-blue-500 text-white" onClick={goNext}>Next</button>
            </div>
        </div>
    )
}

export function Final({ formID, visible, goBack, goNext }){
    return (
        <div class={visible ? "block":"hidden"}>
            <input form={formID} class="border-2 text-xl" type="submit" value="Ready to Submit?"/>
            <br/>
            <button class="border-2 bg-blue-500 text-white" onClick={goBack}>Previous</button>
        </div>
    )
}
