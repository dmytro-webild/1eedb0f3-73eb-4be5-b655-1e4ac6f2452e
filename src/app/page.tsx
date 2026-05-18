"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextAbout from '@/components/sections/about/TextAbout';
import { Activity, Award, Clock, Smile, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="mediumLarge"
        background="noise"
        cardStyle="gradient-bordered"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Experience",
          id: "experience",
        },
        {
          name: "Our Doctors",
          id: "team",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Miami Dental District"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCentered
      background={{
        variant: "radial-gradient",
      }}
      title="Redefining the Modern Dental Experience"
      description="At Miami Dental District, we blend world-class clinical expertise with a boutique, luxury environment. Your comfort is our signature standard."
      avatars={[
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DtIVj3BFLPFlHiXkf0bSDZOPYW/uploaded-1779095143424-2i0310sr.jpg",
          alt: "Dr. Yanelys",
        },
        {
          src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DtIVj3BFLPFlHiXkf0bSDZOPYW/uploaded-1779095143424-tjemxbvx.jpg",
          alt: "Dr. Pino",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-patient-looking-mirror-clinic_107420-73992.jpg",
          alt: "Patient",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-sincere-beautiful-african-girl-smiling_176420-11234.jpg",
          alt: "Patient",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-girl-thinks_93675-133061.jpg",
          alt: "Patient",
        },
      ]}
      buttons={[
        {
          text: "Schedule Your Consultation",
          href: "#contact",
        },
      ]}
      marqueeItems={[
        {
          type: "text-icon",
          text: "Elite Care",
          icon: Star,
        },
        {
          type: "text-icon",
          text: "Modern Tech",
          icon: Activity,
        },
        {
          type: "text-icon",
          text: "Pain-Free",
          icon: Smile,
        },
        {
          type: "text-icon",
          text: "Concierge",
          icon: Clock,
        },
        {
          type: "text-icon",
          text: "Miami's Best",
          icon: Award,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      tag="About Us"
      title="Where Elite Artistry Meets Unmatched Patient Care"
      buttons={[
        {
          text: "View Our Services",
          href: "#experience",
        },
      ]}
    />
  </div>

  <div id="experience" data-section="experience">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Miraculous Precision",
          description: "Techniques ensuring comfort during every procedure.",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-space-with-maquette-table-design-urban-property-plan-building-model-layout-nobody-office-with-architecture-project-real-estate-development-presentation_482257-29970.jpg",
          buttonIcon: "Zap",
        },
        {
          title: "Absolute Transparency",
          description: "Step-by-step clarity regarding your treatment plan.",
          imageSrc: "http://img.b2bpic.net/free-photo/celebration-labour-day-with-monochrome-view-woman-working-her-job_23-2151295981.jpg",
          buttonIcon: "Eye",
        },
        {
          title: "Culture of Warmth",
          description: "An elite staff that treats you like family.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-black-female-doctor-talking-couple-showing-them-medical-test-results-touchpad-consultations-clinic_637285-1755.jpg",
          buttonIcon: "Heart",
        },
        {
          title: "Modern Comfort",
          description: "State-of-the-art facilities designed for peace.",
          imageSrc: "http://img.b2bpic.net/free-photo/medical-instruments_1157-18593.jpg",
          buttonIcon: "Shield",
        },
      ]}
      title="The Patient Experience"
      description="Revolutionizing the journey from anxiety to ease with boutique-level care."
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      team={[
        {
          id: "dr-yanelys",
          name: "Dr. Yanelys",
          role: "Master of Gentle Dentistry",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DtIVj3BFLPFlHiXkf0bSDZOPYW/uploaded-1779095143424-2i0310sr.jpg",
        },
        {
          id: "dr-pino",
          name: "Dr. Pino",
          role: "Lead Clinician & Educator",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DtIVj3BFLPFlHiXkf0bSDZOPYW/uploaded-1779095143424-tjemxbvx.jpg",
        },
      ]}
      title="Our World-Class Doctors"
      description="Meet the visionary experts behind our patient-centric dental care philosophy."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Verified Patient",
          handle: "@dental-client",
          testimonial: "Dr. Yanelys is a great dentist! Her hands are miraculous!",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-woman-happy-dentist_23-2148396150.jpg",
        },
        {
          id: "2",
          name: "Verified Patient",
          handle: "@dental-client",
          testimonial: "Dr. Pino is an amazing doctor and I do love the staff.",
          imageSrc: "http://img.b2bpic.net/free-photo/thoughtful-woman-going-through-medical-test-results-with-her-doctor-clinic_637285-1779.jpg",
        },
        {
          id: "3",
          name: "Satisfied Client",
          handle: "@dental-client",
          testimonial: "The atmosphere is excellent and very friendly.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-female-patient-waiting-have-dental-procedure-dentist_23-2148985766.jpg",
        },
        {
          id: "4",
          name: "Loyal Patient",
          handle: "@dental-client",
          testimonial: "A pain-free and transparent experience.",
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-young-man-with-brown-skin-big-smile-posing-beside-white-wall-portrait-glad-black-haired-guy-laughing-girl-big-earphones-enjoying-music_197531-3878.jpg",
        },
        {
          id: "5",
          name: "Happy Smile",
          handle: "@dental-client",
          testimonial: "Everything was explained thoroughly.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-male-doctor-patient_1170-2163.jpg",
        },
      ]}
      title="Elite Clientele Feedback"
      description="Hear directly from those who have experienced our boutique dental service."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Do you accept new patients?",
          content: "Yes, we are currently accepting new elite patients by appointment.",
        },
        {
          id: "q2",
          title: "What should I bring to my first appointment?",
          content: "Please bring a valid ID and your dental insurance information.",
        },
        {
          id: "q3",
          title: "Do you offer financing options?",
          content: "Yes, we discuss all transparent financial options during your consultation.",
        },
      ]}
      title="Common Questions"
      description="Everything you need to know about your next visit."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Contact"
      title="Reserve Your Private Appointment"
      description="Experience dental excellence at 7036 Coral Way, Miami, FL 33155. Concierge: +1 305-441-7700."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Miami Dental District"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "© 2024 Miami Dental District",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
