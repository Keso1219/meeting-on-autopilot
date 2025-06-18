
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Target, Bot, DollarSign } from 'lucide-react';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      quote: "Vi fyllde vår kalender på två veckor – grymt effektiv process!",
      author: "Anna Svensson, VD, TechSaaS"
    },
    {
      quote: "50 nya kundmöten på tre veckor – det slog våra vildaste förväntningar.",
      author: "Johan Lundberg, Försäljningschef, B2B Dynamics"
    },
    {
      quote: "Kombon AI + telefon var avgörande – vår pipeline fylldes snabbt.",
      author: "Maria Pettersson, CRM-ansvarig, DataSolutions"
    },
    {
      quote: "Tydlig process och tydliga resultat – vi är imponerade!",
      author: "Erik Andersson, VD, SoftEnterprise"
    },
    {
      quote: "Bokning på autopilot – med support från verkliga samtal.",
      author: "Sofia Eriksson, COO, GrowthLabs"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Återaktivera era <span className="text-emerald-400">"döda"</span> CRM‑leads – 
              <span className="text-emerald-400"> boka möte direkt</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Smarta retargeting‑kampanjer + AI & telefoni = mötesflöde på autopilot.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/kevin-sorani-eleveight/30min" 
              style={{minWidth: '320px', height: '630px'}}
            ></div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-red-400">
            1000-tals CRM-leads ligger bara och samlar damm?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300">
            Förlorad tid, pengar och outnyttjad potential – det är dags att agera.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Så hjälper vi er återaktivera <span className="text-emerald-400">CRM-nätverket</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-colors">
              <Target className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Smart Retargeting</h3>
              <p className="text-gray-300">Smart retargeting mot ditt befintliga kontakt­nätverk</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-colors">
              <Bot className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">AI + Telefoni</h3>
              <p className="text-gray-300">AI‑förberedda samtal + personliga telefonmöten</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-colors">
              <DollarSign className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Riskfritt</h3>
              <p className="text-gray-300">Ni betalar bara när ett möte är bokat – 100 % riskfritt</p>
            </div>
          </div>
          <div className="bg-emerald-900/30 border border-emerald-400 p-8 rounded-lg text-center">
            <p className="text-xl">
              <strong className="text-emerald-400">Resultat:</strong> Kombinationen AI + mänsklig kontakt har visat 
              <span className="text-emerald-400 font-bold"> 3× högre konvertering</span> utan nya annonser.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Riktiga resultat från <span className="text-emerald-400">CRM-nätverk</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">SaaS‑bolag</h3>
              <p className="text-gray-300 text-lg">
                <span className="text-white font-bold">41 möten på 5 veckor</span> – återaktivering av gamla CRM-leads.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">B2B‑företag</h3>
              <p className="text-gray-300 text-lg">
                <span className="text-white font-bold">50 möten på 21 dagar</span> genom smart outreach mot befintlig databas.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">Strategi‑kombination</h3>
              <p className="text-gray-300 text-lg">
                <span className="text-white font-bold">AI + telefoni gav 3× högre konvertering</span> – helt utan nya annonser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Vad våra <span className="text-emerald-400">kunder säger</span>
          </h2>
          <div className="relative bg-gray-800 rounded-lg p-8 md:p-12">
            <div className="text-center">
              <p className="text-xl md:text-2xl italic mb-6 text-gray-300">
                "{testimonials[currentSlide].quote}"
              </p>
              <span className="text-emerald-400 font-semibold">
                – {testimonials[currentSlide].author}
              </span>
            </div>
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevSlide}
                className="bg-emerald-400 hover:bg-emerald-500 text-gray-900 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="bg-emerald-400 hover:bg-emerald-500 text-gray-900 w-12 h-12 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-emerald-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Så går <span className="text-emerald-400">processen</span> till
          </h2>
          <div className="space-y-8">
            {[
              'Segmentering av ert CRM-nätverk',
              'AI-genererade samtalsunderlag + samtal från våra säljare',
              'Retargeting via Meta Pixel + uppföljning',
              'Bokning via inbäddad Calendly + automatiska påminnelser'
            ].map((step, index) => (
              <div key={index} className="flex items-center space-x-6 bg-gray-900 p-6 rounded-lg">
                <div className="w-12 h-12 bg-emerald-400 text-gray-900 rounded-full flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Re-CTA Section */}
      <section id="recta" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Boka ert <span className="text-emerald-400">första möte</span> nu
          </h2>
          <div className="max-w-2xl mx-auto bg-white rounded-lg p-4">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/kevin-sorani-eleveight/30min" 
              style={{minWidth: '320px', height: '630px'}}
            ></div>
          </div>
          <p className="text-center text-gray-400 mt-6">
            <small>Ni betalar först när ett möte är bokat. Vi spårar effektiviteten med Meta Pixel.</small>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Vanliga <span className="text-emerald-400">frågor</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'Vad är "döda" leads?',
                answer: 'Det är leads som inte varit aktiva – vi återväcker dem.'
              },
              {
                question: 'Hur mäts framgång?',
                answer: 'Antal bokade möten, spårat via Meta Pixel.'
              },
              {
                question: 'Hur snabbt ser vi resultat?',
                answer: 'Första mötena sker inom 2–5 veckor efter start.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-emerald-400">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 border-t border-gray-700">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-300 mb-2">© 2025 Eleveight – All rights reserved</p>
          <p className="text-gray-500 text-sm">
            Vi använder Meta Pixel för att mäta kampanjeffektivitet.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
