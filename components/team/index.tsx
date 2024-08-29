export default function Team() {
  return (
    <>
      <div className="sm:w-full max-w-4xl mx-auto p-6">
        <h2 className="text-xl font-bold mt-10 mb-4">Team</h2>
        <div className="row grid sm:grid-cols-1 md:grid-cols-3 gap-3">
          <div className="col">
            <div className="text-lg font-semibold fw-semibold">
              Kobe Zhao (China)
            </div>
            <div>
              <a
                className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
                href="mailto:kobe.zhao@dkwholesale.us"
                tabIndex={0}
              >
                kobe.zhao@dkwholesale.us
              </a>
            </div>
            <div>
              <a
                className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
                href="https://api.whatsapp.com/send?phone=8613829617567"
                tabIndex={0}
              >
                +86 138 2961 7567
              </a>
            </div>
          </div>
          <div className="col">
            <div className="text-lg font-semibold fw-semibold">
              Jay Lin (US)
            </div>
            <div>
              <a
                className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
                href="mailto:jay.lin@dkwholesale.us"
                tabIndex={0}
              >
                jay.lin@dkwholesale.us
              </a>
            </div>
            <div>
              <a
                className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-primary no-underline hover:opacity-80 active:opacity-disabled transition-opacity"
                href="https://api.whatsapp.com/send?phone=14153702887"
                tabIndex={0}
              >
                +1 415 851 1937
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
