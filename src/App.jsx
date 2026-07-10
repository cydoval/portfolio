import { Github } from "lucide-react";

const caesPortfolioUrl = "https://computing.caes.ucdavis.edu/portfolio";
const githubUrl = "https://github.com/cydoval";

function App() {
  return (
    <main className="min-h-svh bg-base-100 text-base-content">
      <section className="mx-auto flex min-h-svh w-[min(90%,1120px)] items-center justify-between gap-12 py-16 sm:py-24">
        <div className="max-w-3xl">
          <h1 className="sr-only">Cal Doval</h1>
          <img
            className="h-auto w-56 sm:w-72"
            src="/media/logo_dark.svg"
            alt="Cal Doval"
          />

          <p className="mt-8 max-w-2xl text-[1.35rem] leading-[1.55] text-neutral/90 sm:text-[1.55rem]">
            My name is Cal Doval.
            <br />
            I create websites, develop brands, and manage content for{" "}
            <a className="link link-primary" href={caesPortfolioUrl}>
              UC Davis College of Agricultural and Environmental Sciences
            </a>{" "}
            and occasionally other companies.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a
              className="btn btn-primary rounded gap-2 px-5"
              href={githubUrl}
              aria-label="Cal Doval on GitHub"
            >
              <Github size={20} strokeWidth={2.1} aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>

        <div className="hidden flex-1 justify-end lg:flex">
          <img
            className="h-[min(66vh,600px)] w-auto drop-shadow-2xl"
            src="/media/cal2x.png"
            alt="Graphic representation of Cal"
          />
        </div>
      </section>
    </main>
  );
}

export default App;
