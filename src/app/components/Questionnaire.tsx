"use client";
import React, { useState } from 'react';
import {Landing, WhereHeld, GuestAmount, Budget, Vibe, Services, Submit, Final} from './Questions';

const questions = [Landing, WhereHeld, GuestAmount, Budget, Vibe, Services, Submit, Final]

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
            <form id="questionnaire" class="hidden" onSubmit={()=>alert("hi")}/>
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
            <ProgressDots currentQuestion = {currentQuestion} totalQuestions = {questions.length-1} onSelect = {setQuestion}/>
            </div>
        </div>
    )
} 