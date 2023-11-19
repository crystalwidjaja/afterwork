import Image from 'next/image'
import Navigation from "./nav";

export default function Home() {
  return (
    <main>
      <Navigation />
    </main>
  )
}

export function Events() {
  return (
    <main>
      <p>events page</p>
    </main>
  )
}
