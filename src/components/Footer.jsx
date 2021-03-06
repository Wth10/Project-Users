export default function Footer() {
  return (
    <>
      <footer className="border-t border-solid border-[color:var(--hue-0200)] py-6 lg:py-8 xl:py-10">
        <div className="ml-5 md:flex md:items-center md:justify-between container sm-down:max-w-none">
          <div>
            <span class="flex items-center space-x-4 text-[color:var(--hue-1000)]">
              <img
                class="w-[70px] rounded-full"
                src="/img/logo.jpg"
                alt="logo"
              />
              <span class="text-2xl font-bold font-display">DEV.USER</span>
            </span>
            <div className="mt-10 space-y-10 md:space-y-0 md:mt-6">
              <p className="text-base">
                Maker by
                <a
                  target="_blank"
                  href="https://github.com/Wth10"
                  className="ml-1 italic text-blue-400"
                >
                  Wth10
                </a>
              </p>
            </div>
          </div>
          <div>
            <p class="mt-[6em] text-center">© 2022</p>
          </div>
        </div>
      </footer>
    </>
  );
}
