import { Github } from "lucide-react";

const caesPortfolioUrl = "https://computing.caes.ucdavis.edu/portfolio";
const githubUrl = "https://github.com/cydoval";

function App() {
  return (
    <main className="blueprint-page min-h-svh overflow-hidden bg-base-100 text-base-content">
      <section
        className="relative mx-auto grid h-svh w-[min(84vw,52.75rem)] grid-rows-[1fr_auto_auto_1fr] border-x border-dashed border-main-border before:pointer-events-none before:absolute before:left-1/2 before:top-[var(--blueprint-top-guide)] before:z-0 before:w-screen before:-translate-x-1/2 before:border-t before:border-dashed before:border-main-border before:content-[''] after:pointer-events-none after:absolute after:bottom-[var(--blueprint-bottom-guide)] after:left-1/2 after:z-0 after:w-screen after:-translate-x-1/2 after:border-t after:border-dashed after:border-main-border after:content-[''] max-sm:w-[min(calc(100%_-_2rem),52.75rem)]"
        aria-labelledby="intro-title"
      >
        <span
          className="pointer-events-none absolute left-0 top-[var(--blueprint-top-guide)] z-[2] h-[var(--blueprint-node-size)] w-[var(--blueprint-node-size)] -translate-x-1/2 -translate-y-1/2 border border-main-border bg-base-100"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute left-full top-[var(--blueprint-top-guide)] z-[2] h-[var(--blueprint-node-size)] w-[var(--blueprint-node-size)] -translate-x-1/2 -translate-y-1/2 border border-main-border bg-base-100"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute bottom-[var(--blueprint-bottom-guide)] left-0 z-[2] h-[var(--blueprint-node-size)] w-[var(--blueprint-node-size)] -translate-x-1/2 translate-y-1/2 border border-main-border bg-base-100"
          aria-hidden="true"
        />
        <span
          className="pointer-events-none absolute bottom-[var(--blueprint-bottom-guide)] left-full z-[2] h-[var(--blueprint-node-size)] w-[var(--blueprint-node-size)] -translate-x-1/2 translate-y-1/2 border border-main-border bg-base-100"
          aria-hidden="true"
        />

        <div className="relative mt-60 z-[1] grid grid-cols-[var(--blueprint-logo-size)_minmax(0,1fr)] items-start gap-3 border-t border-dashed border-main-border bg-base-100 p-[var(--blueprint-gutter)] max-sm:grid-cols-1">
          <img
            className="mt-0.5 h-[var(--blueprint-logo-size)] w-[var(--blueprint-logo-size)] max-sm:mt-0"
            src="/media/logo_dark.svg"
            alt=""
            aria-hidden="true"
          />

          <div>
            <h1 id="intro-title" className="sr-only">
              Cal Doval
            </h1>
            <div className="max-w-2xl text-lg">
              <p className="mb-2">My name is Cal Doval.</p>
              <p>
                I create websites, develop brands, and manage content
                applications for{" "}
                <a
                  className="text-primary no-underline [text-underline-offset:0.16em] hover:underline focus-visible:underline"
                  href={caesPortfolioUrl}
                >
                  UC Davis College of Agricultural and Environmental Sciences
                </a>{" "}
                and occasionally other companies.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-[1] flex min-h-2 items-center overflow-hidden border-y border-dashed border-main-border bg-base-100 px-[calc(var(--blueprint-gutter)_+_var(--blueprint-logo-size)_+_clamp(1rem,2vw,1.6rem))] max-sm:px-[var(--blueprint-gutter)]">
          <span
            className="pointer-events-none absolute inset-y-0 right-0 z-0 w-[35%] border-l border-main-border [--hatch-line:color-mix(in_oklab,var(--main-border)_72%,transparent)] bg-[repeating-linear-gradient(120deg,transparent_0,transparent_0.48rem,var(--hatch-line)_0.48rem,var(--hatch-line)_0.58rem,transparent_0.58rem,transparent_0.75rem)] max-sm:w-[42%]"
            aria-hidden="true"
          />
          <a
            className="btn btn-primary relative z-[1] my-2"
            href={githubUrl}
            aria-label="Cal Doval on GitHub"
          >
            <Github
              className="size-5 shrink-0"
              strokeWidth={2}
              aria-hidden="true"
            />
            Github
          </a>
        </div>

        <div
          className="pointer-events-none relative z-0 min-h-full overflow-hidden before:absolute before:inset-[0_0_var(--blueprint-bottom-guide)_0] before:bg-[repeating-linear-gradient(135deg,transparent_0,transparent_1.15rem,var(--main-border)_1.15rem,var(--main-border)_1.25rem,transparent_1.25rem,transparent_1.95rem)] before:content-['']"
          aria-hidden="true"
        />
      </section>
    </main>
  );
}

export default App;
