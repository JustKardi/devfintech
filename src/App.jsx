import { useState } from 'react';
import Header from './Header.jsx';
import SectionOne from './Section_One.jsx';
import SectionTwo from './Section_Two.jsx';
import SectionThree from './Section_Three.jsx';
import CourseSection from './Course_Section.jsx';
import SectionFive from './Section_Five.jsx';
import SectionSix from './Section_Six.jsx';
import QuoteSection from './QuoteSection.jsx';
import SectionSeven from './SectionSeven.jsx';
import Footer from './footer.jsx';

function App() {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <CourseSection />
      <SectionFive />
      <SectionSix />
      <QuoteSection />
      <SectionSeven />
      <Footer />
    </>
  );
}

export default App;
