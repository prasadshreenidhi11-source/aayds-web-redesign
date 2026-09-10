import Seo from '../components/ui/Seo'
import Button from '../components/ui/Button'
import ServiceGrid from '../components/ui/ServiceGrid'

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you were looking for could not be found." />
      <main className="bg-[#f3f6fc] px-4 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-display text-[6rem] font-extrabold leading-none text-brand-primary/15 sm:text-[9rem]">404</span>
            <h1 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">We couldn't find that page</h1>
            <p className="mt-4 font-body text-base text-ink/60">The link may be out of date. Here are the places people usually want to go.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button to="/">Back to home</Button>
              <Button to="/contact-us" variant="outline" arrow>
                Contact us
              </Button>
            </div>
          </div>
          <div className="mt-16">
            <ServiceGrid />
          </div>
        </div>
      </main>
    </>
  )
}
