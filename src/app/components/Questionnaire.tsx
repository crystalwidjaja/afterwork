"use client";
// Questionnaire.tsx
import React, { useState } from 'react';
import { Landing, WhereHeld, GuestAmount, Budget, Vibe, Services, Submit, Final } from './Questions';

const questions = [Landing, WhereHeld, GuestAmount, Budget, Vibe, Services, Submit, Final];

interface ProgressDotsProps {
    currentQuestion: number;
    totalQuestions: number;
    onSelect: (index: number) => void;
}

function ProgressDots({ currentQuestion, totalQuestions, onSelect }: ProgressDotsProps) {
    return (
        <div className="flex items-center space-x-2">
            {[...Array(totalQuestions).keys()].map((index) => (
                <button
                    key={index}
                    className={`h-3 w-3 rounded-full ${currentQuestion === index ? 'bg-red' : 'bg-blue'} border border-black`}
                    onClick={() => onSelect(index)}
                />
            ))}
        </div>
    );
}

export default function Questionnaire() {
    const [currentQuestion, setQuestion] = useState(0);

    return (
        <div style={{ backgroundColor: 'rgba(17, 43, 100, 0.58)' }} className="min-h-screen flex items-center justify-center">
            <div className="max-w-screen-md max-h-screen-md mx-auto content-center text-black border-2 bg-white p-8 rounded-md" style={{ width: '700px', height: '300px' }}>
                <form id="questionnaire" className="hidden" onSubmit={() => alert('hi')} />
                {questions.map((Question, index) => (
                    <Question
                        key={index}
                        formID="questionnaire"
                        visible={index === currentQuestion}
                        goBack={() => setQuestion(currentQuestion - 1)}
                        goNext={() => setQuestion(currentQuestion + 1)}
                    />
                ))}
                <div className="mt-8 flex items-center justify-center mt-8 space-x-2">
                    <ProgressDots
                        currentQuestion={currentQuestion}
                        totalQuestions={questions.length - 1}
                        onSelect={setQuestion}
                    />
                </div>
            </div>
        </div>
    );
}
