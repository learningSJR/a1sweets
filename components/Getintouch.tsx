import { Leaf } from 'lucide-react'
import SectionHeading from './SectionHeading'
;<section id="contact" className="bg-[#fff6d6] py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <SectionHeading tag="Get in Touch" title="Visit or Enquire" />
    <div className="grid md:grid-cols-3 gap-7">
      {[
        ['Dine-In', 'Enjoy your favourite vegetarian dishes at A1 Sweets.'],
        ['Takeout', 'Bring the A1 experience home.'],
        ['Outdoor Catering', 'Enquire about catering for your next event.'],
      ].map(([n, d]) => (
        <div key={n} className="bg-white p-9 shadow-sm border-t-4 border-red">
          <Leaf className="text-red mb-4" />
          <h3 className="display text-3xl text-navy mb-3">{n}</h3>
          <p className="text-gray-600 leading-7">{d}</p>
        </div>
      ))}
    </div>
    <p className="text-center text-gray-600 mt-10">
      For verified contact details and ordering, visit the official A1 Sweets
      website.
    </p>
    <div className="text-center mt-6">
      <a
        href="https://www.a1sweets.com/"
        className="inline-block bg-red text-white px-8 py-4 uppercase text-xs font-bold tracking-wider"
      >
        Visit A1 Sweets Website →
      </a>
    </div>
  </div>
</section>
