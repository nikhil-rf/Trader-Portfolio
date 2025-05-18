import React from 'react';

function About() {
  return (
    <section className="bg-[#1F5F4B] min-h-screen py-20 px-7 md:px-20 text-black">
      <h2 className="text-3xl font-bold text-white mb-8 border-b-2 border-white inline-block ml-8">
        About Me
      </h2>

      <div className="max-w-5xl mx-auto bg-white/40 p-10 rounded-md text-black">
  <ul className="space-y-6 text-base font-bold list-none">
    <li>
      • I’m a stock market trader who comes from an engineering background. Like most beginners, I went through the <br /> usual path—mentors, trading books, weekend courses. But after all that, one truth stood out:
    </li>
    <li>
      • <span className="font-bold">Trading can’t be taught.</span> It’s a skill that takes time, experience, and self-awareness to develop.
    </li>
    <li>
      • I’m also a huge cricket fan. And every time legends like <span className="font-bold">SACHIN TENDULKAR, RAHUL DRAVID AND VIRAT KOHLI <br /></span>    Dravid talk about game awareness, they echo something simple: <br />
      Keep it simple. Enjoy the game.
    </li>
    <li>
      • That, to me, is the core of trading. <br />
      You don’t need complicated setups or secret indicators. <br />
      You need clarity, discipline, and the ability to stay grounded.
    </li>
    <li>
      • I still remember my first trade—hands trembling as I hit ‘buy’, heart racing as I watched the P&L tick up and down. <br />
      Everyone goes through that stage...
    </li>
    <li>
      • This website is my space. <br />
      To document my trades, share what I’ve learned, and hopefully help traders who are tired of the noise, the hype, and the “get-rich” nonsense.
    </li>
  </ul>
</div>

    </section>
  );
}

export default About;
