import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
  return (
    <section className="flex flex-col gap-4">
      <ExperienceCard
        name="Visual Boston"
        href="https://visualboston.com/"
        description="Working with VisualBoston allowed me to work with a team of talented digital product experts focused on all aspects of the software life-cycle. which lead me in many directions from implementing interactive designs to working with complex & intricate micro-services."
        position="Fullstack"
        src="/vb.svg"
        width="50"
        height="48"
      />

      <ExperienceCard
        name="Web Revived"
        href="https://www.webrevived.com/"
        description="My Time at Web Revived started of with small, young & enthusiastic team which taught me how to interact with others team members and work with them efficiently & how to plan & execute making web-apps."
        position="Frontend"
        src="/webrevived.jpg"
        classNameImg="justify-self-center self-center mix-blend-lighten w-[130px]"
        width="400"
        height="400"
      />
    </section>
  );
};
