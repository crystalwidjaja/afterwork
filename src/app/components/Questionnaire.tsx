"use client";
// Questionnaire.tsx
import React, { useState } from 'react';
import { Landing, WhereHeld, GuestAmount, Budget, Vibe, Services, Submit, Final } from './Questions';
import { useMemo } from 'react';

const questions = [Landing, WhereHeld, GuestAmount, Budget, Vibe, Services, Submit, Final];

interface ProgressDotsProps {
    currentQuestion: number;
    totalQuestions: number;
    onSelect: (index: number) => void;
}

type BackgroundColor = 'bg-blue' | 'bg-red';

function getDotBackgroundColor(index: number, currentQuestion: number): BackgroundColor {
    return index < currentQuestion ? 'bg-blue' : 'bg-red';
}

function ProgressDots({ currentQuestion, totalQuestions, onSelect }: ProgressDotsProps) {
    return (
        <div className="flex items-center space-x-2">
            {[...Array(totalQuestions).keys()].map((index) => (
                <button
                    key={index}
                    className={`h-3 w-3 rounded-full border border-black ${getDotBackgroundColor(index, currentQuestion)}`}
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
            <div className="max-w-screen-md max-h-screen-md mx-auto content-center text-black border-2 bg-white p-8 rounded-lg" style={{ width: '700px', height: '350px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
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
                <div className="mt-4 flex items-center justify-center space-x-2">
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