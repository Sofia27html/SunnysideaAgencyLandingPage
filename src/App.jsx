import "./App.css";
import ClientTestimonials from "./Components/ClientTestimonials";
import Footer from "./Components/Footer";
import GraphicDesignandPhotography from "./Components/GraphicDesignandPhotography";
import { Hero } from "./Components/Hero";
import MiddleSection from "./Components/MiddleSection";

const designerPhotography = [
  {
    title: "Graphic Design",
    text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
    img: "../src/assets/sunnyside-agency-landing-page-main/images/desktop/image-graphic-design.jpg",
    titleColor: "#25564b",
    textColor: "#25564b",
  },
  {
    title: "Photography",
    text: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    img: "../src/assets/sunnyside-agency-landing-page-main/images/desktop/image-photography.jpg",
    titleColor: "#19536b",
    textColor: "#19536b",
  },
];

const testimonials = [
  {
    img: "../src/assets/sunnyside-agency-landing-page-main/images/image-emily.jpg",
    text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    job: "Marketing Director",
  },
  {
    img: "../src/assets/sunnyside-agency-landing-page-main/images/image-thomas.jpg",
    text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    job: "Chief Operating Officer",
  },
  {
    img: "../src/assets/sunnyside-agency-landing-page-main/images/image-jennie.jpg",
    text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    job: "Business Owner",
  },
];

function App() {
  return (
    <main className="flex flex-col ">
      <Hero />

      <MiddleSection
        title={"Transform your brand"}
        text={
          "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        }
        link={"LEARN MORE"}
        img={
          "../src/assets/sunnyside-agency-landing-page-main/images/desktop/image-transform.jpg"
        }
      />

      <MiddleSection
        reverse
        title={"Stand out to the right audience"}
        text={
          "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
        }
        link={"LEARN MORE"}
        img={
          "../src/assets/sunnyside-agency-landing-page-main/images/desktop/image-stand-out.jpg"
        }
      />

      <GraphicDesignandPhotography
        designerPhotography={designerPhotography}
        textColor="#ffffff"
        textColor2="#ffffff"
      />

      <ClientTestimonials testimonials={testimonials} />

      <div className="grid grid-cols-2 md:grid-cols-4    ">
        <img
          src="../src/assets/sunnyside-agency-landing-page-main/images/desktop/image-gallery-milkbottles.jpg"
          alt="milkbottles"
        />
        <img
          src="../src/assets/sunnyside-agency-landing-page-main/images/desktop/image-gallery-orange.jpg"
          alt="orange"
        />
        <img
          src="../src/assets/sunnyside-agency-landing-page-main/images/desktop/image-gallery-cone.jpg"
          alt="cone"
        />
        <img
          src="../src/assets/sunnyside-agency-landing-page-main/images/desktop/image-gallery-sugarcubes.jpg"
          alt="sugarcubes"
        />
      </div>
      <Footer />
    </main>
  );
}

export default App;
