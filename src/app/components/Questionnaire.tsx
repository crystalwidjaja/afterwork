"use client";
import React, { useState } from 'react';
import './Questionnaire.css'; // Import your CSS file
import {Landing, WhereHeld, GuestAmount, Budget, Vibe, Services, Final} from './Questions';

const questions = [Landing, WhereHeld, GuestAmount, Budget, Vibe, Services, Final]

function ProgressDots({currentQuestion, totalQuestions, onSelect}){
    return (
        <div>
            {[...Array(totalQuestions).keys()].map((index: number) => (
            <button class={`h-3 w-3 rounded-full ${currentQuestion==index ? 'bg-red-200' : 'bg-blue-200'}`}
                onClick={() => onSelect(index)}
            />            
            ))}
        </div>
    )
}

export default function Questionnaire(){ 
    const [currentQuestion, setQuestion] = useState(0);

    return (
        <div class="max-w-screen-md max-h-screen-md mx-auto content-center text-black border-2">
            <div>
            <form id="questionnaire" class="hidden"/>
            {questions.map((Question, index) => (
                <Question 
                    formID="questionnaire"
                    visible={index === currentQuestion}
                    goBack = {()=>setQuestion(currentQuestion - 1)}
                    goNext = {()=>setQuestion(currentQuestion + 1)}
                    />
                    )
            )}
            </div>
            
            <div class="flex-end">
            <ProgressDots currentQuestion = {currentQuestion} totalQuestions = {questions.length} onSelect = {setQuestion}/>
            </div>
        </div>
    )
} 