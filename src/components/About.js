import React from "react";
import Card from "./Card";
import logo from "@/assets/logo.png";
import sbjain from "@/assets/sbjain.webp";
import tps from "@/assets/tps.webp";
import sda from "@/assets/sda.webp";

const About = () => {
  return (
    <section className="flex items-center justify-center flex-col px-4 py-10" id="about">
      <div className="mt-3 mb-6 text-3xl md:text-5xl font-bold text-center">
        About
      </div>

      <div className="w-full max-w-[80%] flex flex-wrap justify-center gap-12 px-2">
        <Card
          image={sbjain}
          title="S.B.Jain Institute of Technology, Management and Research, Nagpur"
          description="- B.Tech (Electronics and TeleCommunication)"
          date="2020 - 2024"
          link="https://www.sbjit.edu.in/"
        />

        <Card
          image={tps}
          title="Tuli Public School and Junior College, Bokhara Nagpur"
          description="Intermediates (XII) 12th - Science"
          date="2019 - 2020"
          link="https://www.google.com/search?q=tuli+public+school+bokhara+nagpur&oq=tuli+public+school+bokhara+nagpur&gs_lcrp=EgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMhIIARAuGCcYrwEYxwEYgAQYigUyCggCEAAYgAQYogQyCggDEAAYgAQYogQyCggEEAAYgAQYogQyBwgFEAAY7wXSAQg1MTc5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8"
        />

        <Card
          image={sda}
          title="Seventh Day Adventist Higher Secondary School, Nagpur"
          description="Secondary Education - (X) 10th"
          date="2017 - 2018"
          link="https://www.google.com/search?q=seventh+day+adventist+school+nagpur&sca_esv=571e9f62cdadf4fd&sxsrf=AE3TifOPz9SugzcwvLMAreMI64aX2ZW8bA%3A1753166783280&ei=vzN_aM7sEO6l1e8PsIrnqAw&ved=0ahUKEwiOyOWa78-OAxXuUvUHHTDFGcUQ4dUDCBA&uact=5&oq=seventh+day+adventist+school+nagpur&gs_lp=Egxnd3Mtd2l6LXNlcnAiI3NldmVudGggZGF5IGFkdmVudGlzdCBzY2hvb2wgbmFncHVyMgoQIxiABBgnGIoFMhAQLhiABBjHARgnGIoFGK8BMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHkjhC1COBViyB3ABeACQAQCYAaoCoAH9A6oBAzItMrgBA8gBAPgBAZgCA6AClATCAggQABiABBiwA8ICCRAAGLADGAgYHsICCBAAGLADGO8FwgILEAAYsAMYogQYiQXCAgsQABiABBiwAxiiBMICCxAuGIAEGMcBGK8BmAMAiAYBkAYHkgcHMS4wLjEuMaAH3R2yBwUyLTEuMbgHiwTCBwMyLTPIBxM&sclient=gws-wiz-serp"
        />
      </div>
    </section>
  );
};

export default About;
