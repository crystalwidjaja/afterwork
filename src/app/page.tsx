import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Image
        src="/landing.png"
        alt="Vercel Logo"
        layout='fill'
        priority
      />
    </main>
  )
}
