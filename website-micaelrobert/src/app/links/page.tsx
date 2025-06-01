'use client'

import { MotionDiv, LittleBall } from "@/components/animation";
import { Icons } from "@/components/icons";
import { useEffect } from "react";
import { UAParser } from 'ua-parser-js';

export default function Page() {
  useEffect(() => {
    sendMetrics({ viewLink: window.location.href });
  }, []);

  return (
    <div>
      {/* Fundo estilo “joguinho” com tom roxo/azulado */}
      <div className="fixed inset-0 -z-10 h-full w-full animate-backgroundMove">
        <div className="absolute inset-0">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(#6336e033_1px,transparent_1px)] bg-[size:20px_20px] bg-[#00091d]" />
        </div>
      </div>

      <div className="container mx-auto flex flex-col gap-4 items-center my-20">
        <div className="flex flex-col items-center gap-4">
          <img src="/images/icon-micael.jpeg" alt="Micael Robert icon" className="rounded-full" width={150} />
          <div className="text-center">
            <h1 className="text-3xl font-bold">Micael Robert</h1>
            <p className="my-2">
              <span className="font-semibold">Full Stack Developer</span> <br />
              <span>Angular, Next, Python, C# and more!</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-5">
            <SocialButtons link="https://github.com/micaelrobert" Icon={<Icons.gitHub className="w-6 h-6 text-white" />} />
            <SocialButtons link="https://discord.gg/nEynGJk5" Icon={<Icons.discord className="w-6 h-6 text-white" />} />
            <SocialButtons link="https://x.com/micaelrobertt" Icon={<Icons.twitter className="w-6 h-6 text-white" />} />
            <SocialButtons link="https://www.linkedin.com/in/micael-robert/" Icon={<Icons.linkedin className="w-6 h-6 text-white" />} />
            <SocialButtons link="https://www.instagram.com/micaelrobertt/" Icon={<Icons.instagram className="w-6 h-6 text-white" />} />
          </div>

          <div className="flex flex-col gap-4 items-center">
            <h3 className="text-xl">Projects</h3>
            <ButtonOfList name="Personal Website" link="https://micaelrobert.vercel.app" />
            <ButtonOfList name="EventHub" link="https://github.com/micaelrobert/EventHub_InMemory" />
            <ButtonOfList name="EventHub .NET" link="https://github.com/micaelrobert/Back_EventHub" />
          </div>

          <div className="flex flex-col gap-4 items-center">
            <ButtonOfList name="📄 CV (ENG) 🇺🇸" link="/micael-robert-eng.pdf" />
            <ButtonOfList name="📄 CV (PT) 🇧🇷" link="/micael-robert-br.pdf" />
            <ButtonOfList name="🔥 Fav Music 🔥" link="https://www.youtube.com/watch?v=GCdwKhTtNNw" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonOfList({ name, link }: { name: string, link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      onClick={() => sendMetrics({ viewLink: link })}
      className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
      rel="noreferrer">
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-900 rounded-full group-hover:w-96 group-hover:h-96" />
      <span className="relative w-60 text-center">{name}</span>
    </a>
  );
}

async function sendMetrics({ viewLink }: { viewLink: string }) {
  const parser = new UAParser();
  const { os, browser, device } = parser.getResult();

  try {
    await fetch('/api/metrics', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: 'micaelrobert',
        browser: browser.name,
        os: os.name,
        device: device.model || 'Unknown',
        viewLink
      })
    });
  } catch (error) {
    console.error('Failed to send metrics:', error);
  }
}

function SocialButtons({ link, Icon }: { link: string, Icon: JSX.Element }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => sendMetrics({ viewLink: link })}
      className="relative inline-flex items-center justify-center p-3 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group">
      <span className="absolute w-0 h-0 transition-all duration-1000 ease-out bg-purple-900 rounded-full group-hover:w-28 group-hover:h-28" />
      <span className="relative text-center">
        {Icon}
      </span>
    </a>
  );
}
