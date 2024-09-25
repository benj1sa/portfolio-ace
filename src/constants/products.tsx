import sidefolioAceternity from "public/images/sidefolio-aceternity-2.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";
import sidefolioAether from "public/images/aether-astra.png";
import sidefolioAether2 from "public/images/aether-astra-2.png";
import sidefolioAether3 from "public/images/aether-astra-3.png";

export const products = [
  {
    href: "https://aetherumd.github.io/aether-astra/",
    title: "Aether Gravitational Lensing",
    description:
      "Unveiling the Origins of the Universe with Cutting-Edge Simulations.",
    thumbnail: sidefolioAether,
    images: [sidefolioAether2, sidefolioAether3],
    stack: ["Nextjs", "Tailwindcss", "Aceternity UI", "React.js"],
    slug: "aceternity",
    content: (
      <div>
        <p>
          Our team is working on a groundbreaking project aimed at uncovering the
          mysteries behind the formation of the first stars and galaxies in the 
          universe. While this research may not have a direct societal impact, its 
          contributions to the field of astrophysics could have far-reaching implications 
          for humanity's understanding of our cosmic origins.{" "}
        </p>
        <p>
          Leveraging the power of supercomputers and the unprecedented capabilities of the 
          James Webb Space Telescope (JWST), we are developing a model that will simulate 
          the universe&apos;s earliest star clusters and galaxies. A key challenge lies in replicating 
          the complex phenomenon of gravitational lensing, which distorts light from distant 
          galaxies, a feature the JWST is primed to observe.
        </p>{" "}
        <p>
          Our software pipeline, which applies these gravitational distortions to simulated 
          galaxies, will allow astronomers to compare our synthetic observations with real data 
          from JWST. Once complete, our work will be open source, providing a valuable tool for 
          the global astronomy community. Scientists, space agencies, and students alike will 
          benefit from our research as it unlocks new avenues for understanding the universe&apos;s origins.
        </p>{" "}
        <p>
          Why Is This Important?

          <ul>
            <li>
              <strong>Advancing Astronomy:</strong> This project provides deeper insights into galaxy formation, answering questions about the early universe that were previously out of reach.
            </li>
            <li>
              <strong>Global Collaboration:</strong> By making our tools publicly available, we support the broader astronomy community in advancing research on cosmic evolution.
            </li>
            <li>
              <strong>Inspiring Future Generations:</strong> Students and budding astronomers can use our research not only as a model for future scientific inquiry but as an example of what collaborative, high-tech projects can achieve in astrophysics.
            </li>
          </ul>
        </p>{" "}
        <p>
          Our project combines synthetic simulations and gravitational lensing effects in a 
          novel way, allowing us to simulate the distorted observations seen by the JWST. 
          Unlike past research, we aim to create highly detailed models of the universe, 
          factoring in these lensing phenomena to accurately mimic JWST&apos;s data.
        </p>{" "}
      </div>
    ),
  },
];
