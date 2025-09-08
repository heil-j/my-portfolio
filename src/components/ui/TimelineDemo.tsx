import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";


export function TimelineDemo() {
    const data = [
       {
        title: "2024 - PRESENT",
        content: (
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-2">
              LITHAN EDUCLAAS
            </h3>
            <p className="text-cyan-300 text-sm md:text-base font-semibold mb-2">
              Applied Degree in Software Engineering   
            </p>
            <p className="text-neutral-1000 dark:text-[rgb(195,195,195)] text-sm md:text-lg font-normal mb-8 tracking-tighter">
              Enrolled in an Applied Degree program focusing on Software Engineering. Gained practical skills in software development, coding, and application design. Participated in hands-on projects and internships to apply theoretical knowledge in real-world scenarios.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/educlaas logo.webp"
                alt="Lithan Logo"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/images/lithan.webp"
                alt="Lithan Building"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        ),
      },
      {
        title: "2024 - PRESENT",
        content: (
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-2">
              FIRST CITY PROVIDENTIAL COLLEGE
            </h3>
            <p className="text-cyan-300 text-sm md:text-base font-semibold mb-2">
              Bachelor of Science in Information Technology - Software Engineering   
            </p>
            <p className="text-neutral-1000 dark:text-[rgb(195,195,195)] text-sm md:text-lg font-normal mb-8 tracking-tighter">
              Studied Information Technology with a specialization in Software Engineering. Gained skills in programming, software development, and project management. Participated in coding competitions and collaborated on team projects to develop real-world applications.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/fcpc logo.jpg"
                alt="High School Logo"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/images/fcpc pic.jpg"
                alt="High School Building"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        ),
      },
      {
        title: "2023 - 2024",
        content: (
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-2">
              MAPUA UNIVERSITY
            </h3>
            <p className="text-cyan-300 text-sm md:text-base font-semibold mb-2">
              Bachelor of Science in Civil Engineering - Master of Science in Civil Engineering (1 year Completed)
            </p>
            <p className="text-neutral-1000 dark:text-[rgb(195,195,195)] text-sm md:text-lg font-normal mb-8 tracking-tighter">
              Pursued a dual degree program in Civil Engineering, focusing on structural analysis, construction management, and sustainable design. Engaged in various projects that provided practical experience in the field.
            </p>
            <div className="grid grid-cols-2 gap-4">
               <Image
                src="/images/mapua logo.avif"
                alt="College Campus"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/images/mapua pic.jpg"
                alt="College Logo"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        ),
      },
      {
        title: "2020 - 2022",
        content: (
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-cyan-400 mb-2">
              JARMMETH COLLEGE INC. 
            </h3>
            <p className="text-cyan-300 text-sm md:text-base font-semibold mb-2">
              Senior High School, STEM Strand    
            </p>
            <p className="text-neutral-1000 dark:text-[rgb(195,195,195)] text-sm md:text-lg font-normal mb-8 tracking-tighter">
              Completed Senior High School with a focus on Science, Technology, Engineering, and Mathematics (STEM). Developed a strong foundation in advanced mathematics, physics, and computer science. Engaged in various science fairs and technology projects that enhanced problem-solving and analytical skills.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/jci logo.jpg"
                alt="Elementary School Logo"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
              <Image
                src="/images/jci pic.png"
                alt="Elementary School"
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              />
            </div>
          </div>
        ),
      },
    ];
    return (
      <div className="w-full">
        <Timeline data={data} />
      </div>
    );
  }
