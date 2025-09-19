import Head from 'next/head'
import { AICreationBar } from '@/components/AICreationBar'
import { DiscoverGrid } from '@/components/DiscoverGrid'
import { UserProfile } from '@/components/UserProfile'

export default function Home() {
  return (
    <>
      <Head>
        <title>Suno AI Clone - AI Music Generation</title>
        <meta name="description" content="Open source clone of Suno AI music generation platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-slate-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header with User Profile */}
          <header className="mb-8">
            <UserProfile />
          </header>
          
          {/* AI Music Creation Bar */}
          <section className="mb-12">
            <AICreationBar />
          </section>
          
          {/* Discover Grid */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Discover</h2>
            <DiscoverGrid />
          </section>
        </div>
      </main>
    </>
  )
}