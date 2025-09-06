import Image from "next/image";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { AnimatedBackground } from "@/components/animatedbackground";

type TitleColoredProps = {
  children: React.ReactNode;
  className?: string;
};

function TitleColored({ children, className }: TitleColoredProps) {
  return (
    <h1 className={`font-extrabold text-4xl sm:text-7xl drop-shadow-md ${className}`}>
      {children}
    </h1>
  );
}

export default function Home() {
  return (
    <>
      <AnimatedBackground />

      <div className="container mx-auto px-4">
        <section className="flex flex-col justify-center text-center min-h-[90vh] lg:h-[100vh] -mt-10 lg:-mt-8">
          {/* Header */}
          <div className="flex flex-row mx-auto gap-4 mb-4 items-center">
            <Image
              src="/images/micael.jpeg"
              alt="Micael Robert"
              width={100}
              height={100}
              className="border w-16 h-16 object-cover rounded-full shadow-md"
            />
            <div className="px-4 py-2 bg-white/5 backdrop-blur-md rounded-full text-sm sm:text-xl text-white border border-zinc-700 shadow">
              Hello, I'm Micael Robert! 👋
            </div>
          </div>

          {/* main titles */}
          <div className="space-y-4 text-white">
            <div className="flex flex-row justify-center items-center gap-4">
              <TitleColored className="bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text">
                CLIENT
              </TitleColored>
              <div className="text-xs sm:text-base text-left">
                // The best experience
                <br />
                always first
              </div>
            </div>

            <div className="flex flex-row justify-center items-center gap-4">
              <div className="text-xs sm:text-base text-left">
                // 📍 Saquarema,
                <br />
                Rio de Janeiro, Brasil 🌊🇧🇷
              </div>
              <TitleColored className="bg-gradient-to-r from-green-400 to-yellow-300 text-transparent bg-clip-text">
                FOCUSED
              </TitleColored>
            </div>

            <div className="flex flex-row justify-center items-center gap-4">
              <TitleColored className="bg-gradient-to-r from-fuchsia-500 to-blue-400 text-transparent bg-clip-text">
                FULLSTACK
              </TitleColored>
              <Link href="/links">
                <button className="ml-2 px-4 py-2 text-sm sm:text-base rounded-full bg-gradient-to-r from-blue-600 
                to-purple-600 via-purple-600 to-pink-600 animate-gradient text-white shadow-md transition transform 
                hover:scale-105 hover:shadow-lg active:scale-95 ">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    /links
                  </div>
                </button>
              </Link>
            </div>

            <div className="flex flex-row justify-center items-center gap-4">
              <div className="text-xs sm:text-base text-left">
                // Next, Typecript, C#,
                <br />
                Python and more!
              </div>
              <TitleColored className="bg-gradient-to-r from-red-400 to-yellow-400 text-transparent bg-clip-text">
                DEVELOPER
              </TitleColored>
            </div>
          </div>

          {/* subtitles*/}
          <h2 className="text-base sm:text-3xl font-semibold mt-8 mx-auto text-center w-3/4 text-white">
            Creating software that enhances your experience with{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-400 text-transparent bg-clip-text">
              productivity
            </span>
            ,{" "}
            <span className="bg-gradient-to-r from-amber-500 to-yellow-400 text-transparent bg-clip-text">
              appeal
            </span>
            , and{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 to-purple-900 text-transparent bg-clip-text">
              asthetic
            </span>
            .
          </h2>
          

          {/* Social buttons */}
          <div className="flex justify-center gap-3 mt-6">
            {[
              { icon: Icons.gitHub, href: "https://github.com/micaelrobert" },
              { icon: Icons.instagram, href: "https://www.instagram.com/micaelrobertt/" },
              { icon: Icons.linkedin, href: "https://www.linkedin.com/in/micael-robert/" },
              { icon: Icons.twitter, href: "https://x.com/micaelrobertt" },
              { icon: Icons.discord, href: "https://discord.gg/nEynGJk5" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="bg-black/60 backdrop-blur-sm w-12 h-12 rounded-full flex justify-center items-center hover:scale-110 transition transform hover:shadow-lg"
              >
                <Icon className="w-6 h-6 text-white" />
              </a>
            ))}
          </div>
        </section>
        

        {/* PROJECTS */}
        <section className="lg:h-[90vh] mx-4 mb-16">
          <h2 className="text-2xl sm:text-4xl font-semibold mb-8 text-white">
            My Projects on GitHub
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:mx-16">
            <Project url="micaelrobert/ExploraSaqua" />
            <Project url="micaelrobert/seraphineplay" />
            <Project url="micaelrobert/EventHub_InMemory" />
            <Project url="micaelrobert/newapp_form" />
            <Project url="micaelrobert/algoritimos" />
            <Project url="micaelrobert/website_micaelrobert" />
          </div>
        </section>
      </div>
    </>
  );
}

async function Project({ url }: { url: string }) {
  const data = await fetch(`https://api.github.com/repos/${url}`);
  const repo = await data.json();

  return (
    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
      <div className="flex-1 bg-zinc-900/40 backdrop-blur-lg border border-zinc-700 p-6 rounded-xl transition hover:scale-[1.02] hover:bg-zinc-800/60 duration-200 shadow-md hover:shadow-lg text-white">
        <div className="flex flex-col mb-6">
          <div className="flex flex-row justify-between items-start">
            <h3 className="text-lg sm:text-2xl font-semibold">{repo.name}</h3>
            <div className="flex items-center gap-2 text-sm">
              ⭐ {repo.stargazers_count}
              {repo.forks_count > 0 && <> | 🍴 {repo.forks_count}</>}
            </div>
          </div>
          <div className="text-xs sm:text-sm flex flex-wrap gap-2 mt-3">
            {repo.topics?.map((topic: string) => (
              <span key={topic} className="bg-purple-800/60 px-3 py-1 rounded-full">
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </span>
            ))}
          </div>
        </div>
        <p className="text-sm text-zinc-300">{repo.description}</p>
      </div>
    </a>
  );
}
