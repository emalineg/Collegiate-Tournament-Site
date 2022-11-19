import Link from "next/link";

export default function Nav() {
  return (
    <div aria-label="Site Nav" className=" bg-black/60 px-6 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="relative flex grid basis-full grid-cols-2">
          <div>
            <Link href="/">
              <span className="sr-only">Logo</span>
              <img
                src="tv.png"
                alt="The Valley Finals Logo"
                className="h-auto w-16"
              />
            </Link>
          </div>
          <div className="flex justify-end">
            <ul
              style={{
                fontFamily: "MontLI",
                color: "white",
              }}
              className="flex items-center text-sm font-medium"
            >
              <li>
                <Link
                  className="rounded-lg px-1 py-2 hover:text-green-400 sm:px-3"
                  href="https://twitch.tv/ivc_esports"
                >
                  {" "}
                  Twitch{" "}
                </Link>
              </li>
              <li>
                <Link
                  className=" rounded-lg px-1 py-2 hover:text-green-400 sm:px-3"
                  href="https://www.communitygaming.io/tournament/the-valley-a-rocket-league-championship"
                  target="_blank"
                >
                  {" "}
                  Brackets{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-lg px-1 py-2 hover:text-green-400 sm:px-3"
                  href="https://forms.gle/eWdnhABkQwTjZGpy7"
                  target="_blank"
                >
                  {" "}
                  RSVP{" "}
                </Link>
              </li>
              <li>
                <Link
                  className="rounded-lg px-1 py-2 hover:text-green-400 sm:px-3"
                  href="#sponsors"
                  scroll={false}
                >
                  {" "}
                  Partners{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
