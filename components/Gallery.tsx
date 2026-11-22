import SectionHeading from "./SectionHeading";
import styles from "./Gallery.module.css";

const I = "/images/";

export default function Gallery() {
  return (
      <section id="gallery" className={`py-24 px-6 max-w-7xl mx-auto ${styles.gallery}`}>
        <SectionHeading tag="Gallery" title="A Feast for the Eyes" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'menu_rest_1_1.png',
            'menu_rest_1_2.png',
            'menu_rest_1_3.png',
            'menu_rest_1_7.png',
            'menu_rest_1_8.png',
            'menu_rest_1_9.png',
            'menu_rest_1_5.png',
            'menu_rest_1_6.png',
          ].map((im, i) => (
            <div
              key={im}
              className="bg-[#fff6d6] h-48 md:h-64 flex items-center justify-center image-hover overflow-hidden"
            >
              <img
                src={I + im}
                alt={'A1 Sweets food gallery ' + (i + 1)}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>
  );
}
