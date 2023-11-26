import Image from 'next/image'
import Navigation from "./components/navbar";
import Questionnaire from './components/Questionnaire'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Questionnaire />
    </main>
  )
}
