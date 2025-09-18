import Aktuelles from "@/components/startseite/Aktuelles";
import AktuellesBeispiele from "@/components/startseite/AktuellesBeispiele";
import Cta from "@/components/startseite/Cta";
import Einleitung from "@/components/startseite/Einleitung";
import Footer from "@/components/Footer";
import Hero from "@/components/startseite/Hero";
import Nav from "@/components/Nav";
import PageWrapper from "@/components/PageWrapper";
import { Sponsoren } from "@/components/startseite/Sponsoren";

export default function Home() {
  return (
    <>
      <PageWrapper>
        <main>
          <Nav />
          <Hero />
          <Einleitung />
          <Sponsoren />
          <Cta />
          <Aktuelles />
          <AktuellesBeispiele />
          <Footer />
        </main>
      </PageWrapper>
    </>
  );
}
