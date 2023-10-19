'use-strict'
import { Layout } from '../components/layouts/page'

export default function Home() {
  return (
    <>
      <main>
        <div className="absolute w-[var(--logo-size)] h-[var(--logo-size)] bg-logo bg-no-repeat left-[calc(51%-calc(var(--logo-size)/2))] top-[calc(var(--index)*2.8)] z-[1]" />

        <section className="overflow-hidden perspective">
          <Layout />
        </section>
      </main>
    </>
  )
}
