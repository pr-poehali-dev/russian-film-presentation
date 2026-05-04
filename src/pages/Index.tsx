import { useState } from "react";
import Icon from "@/components/ui/icon";

const galleryImages = [
  {
    src: "https://cdn.poehali.dev/projects/9ac96bb2-4c06-46b7-a4d6-f64c2ff02fbd/files/f6b41e23-46f9-4d97-8b34-ff197c50ad2f.jpg",
    caption: "The final seconds of the game",
  },
  {
    src: "https://cdn.poehali.dev/projects/9ac96bb2-4c06-46b7-a4d6-f64c2ff02fbd/files/19b7808f-a7a3-4d8c-84fd-9e79829d818f.jpg",
    caption: "The team on the court",
  },
  {
    src: "https://cdn.poehali.dev/projects/9ac96bb2-4c06-46b7-a4d6-f64c2ff02fbd/files/f6b41e23-46f9-4d97-8b34-ff197c50ad2f.jpg",
    caption: "Munich, 1972",
  },
];

const cast = [
  { name: "Vladimir Mashkov", role: "Coach Kondrashin" },
  { name: "Marcelis Jankauskis", role: "Paulauskas" },
  { name: "Ivan Kolesnikov", role: "Alexander Belov" },
  { name: "John Savage", role: "USA Coach" },
];

export default function Index() {
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [opinion, setOpinion] = useState(
    "This movie is really special. It is not just about basketball — it is about people who never give up, even when everything seems impossible. The coach believes in his team when nobody else does. The players fight not just for a medal, but for their families and their country.\n\nWhy should you watch it? First, it is a true story — and that makes it even more exciting. Second, the acting is great and easy to follow. Third, the final game is so tense that you will be sitting on the edge of your seat. When the last three seconds play out, you will feel like YOU just won."
  );
  const [draft, setDraft] = useState("");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e0d0]" style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://cdn.poehali.dev/projects/9ac96bb2-4c06-46b7-a4d6-f64c2ff02fbd/files/f6b41e23-46f9-4d97-8b34-ff197c50ad2f.jpg)`,
            filter: "brightness(0.3) contrast(1.2)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

        <div className="relative z-10 px-6 md:px-16 pb-20 max-w-5xl">
          <div className="text-[11px] tracking-[0.3em] uppercase text-[#c8a96e] mb-6 font-light">
            Movie Presentation
          </div>
          <h1
            className="text-[72px] md:text-[120px] leading-[0.9] font-bold uppercase text-white mb-6"
            style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "-1px" }}
          >
            Going
            <br />
            <span className="text-[#c8a96e]">Vertical</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-[#a09880] font-light italic max-w-lg"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            The story of one victory that changed everything
          </p>
        </div>

        <div className="absolute bottom-8 right-8 md:right-16 z-10 flex flex-col items-end gap-1">
          <div className="text-[10px] tracking-[0.25em] uppercase text-[#c8a96e]">2017</div>
          <div className="w-12 h-[1px] bg-[#c8a96e]" />
        </div>
      </section>

      {/* GENRE & DIRECTOR */}
      <section className="px-6 md:px-16 py-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#c8a96e] mb-4">Genre</div>
            <h2
              className="text-4xl md:text-5xl font-semibold text-white mb-4"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Historical Sports Drama
            </h2>
            <p className="text-[#6e6860] text-sm leading-relaxed">
              A biographical drama based on real events
            </p>
          </div>

          <div className="md:border-l border-[#1e1e1e] md:pl-16">
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#c8a96e] mb-4">Director</div>
            <h2
              className="text-4xl md:text-5xl font-semibold text-white mb-4"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Anton Megerdichev
            </h2>
            <p className="text-[#6e6860] text-sm leading-relaxed">
              Russian film director and screenwriter. Also known for "Metro" and "Shadow Boxing 2".
            </p>
          </div>
        </div>

        <div className="mt-12 h-[1px] bg-[#1e1e1e]" />
      </section>

      {/* MAIN CAST */}
      <section className="px-6 md:px-16 py-10 max-w-5xl mx-auto">
        <div className="text-[10px] tracking-[0.3em] uppercase text-[#c8a96e] mb-12">Main Cast</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
          {cast.map((actor, i) => (
            <div
              key={i}
              className="py-8 pr-8 border-b border-[#1e1e1e] md:border-b-0 md:border-r last:border-r-0"
            >
              <div
                className="text-2xl font-semibold text-white mb-2 leading-tight"
                style={{ fontFamily: "'Oswald', sans-serif" }}
              >
                {actor.name}
              </div>
              <div className="text-[11px] tracking-[0.15em] uppercase text-[#c8a96e]">
                {actor.role}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-0 h-[1px] bg-[#1e1e1e]" />
      </section>

      {/* ABOUT */}
      <section className="px-6 md:px-16 py-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#c8a96e] mb-4">About the Film</div>
          </div>
          <div className="md:col-span-2">
            <p
              className="text-2xl md:text-3xl text-white leading-relaxed font-light italic mb-8"
              style={{ fontFamily: "'Cormorant', serif" }}
            >
              "Going Vertical" — the Soviet basketball team vs. the USA at the 1972 Olympics in Munich.
            </p>
            <p className="text-[#a09880] leading-relaxed text-base font-light">
              The final game is one of the most exciting in basketball history. The Soviet team, led by coach Vladimir Kondrashin, beat the undefeated Americans in the very last seconds of the game. The film is not only about sport — it is about real people, their families, their struggles, and their belief that winning is possible.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 md:px-16 py-10 max-w-5xl mx-auto">
        <div className="text-[10px] tracking-[0.3em] uppercase text-[#c8a96e] mb-10">Gallery</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden cursor-pointer group aspect-[4/3]"
              onClick={() => setActiveImage(i)}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-[11px] tracking-[0.2em] uppercase text-[#c8a96e]">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OPINION */}
      <section className="px-6 md:px-16 py-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-[#c8a96e] mb-4">My Opinion</div>
          </div>
          <div className="md:col-span-2">
            {opinion ? (
              <div>
                <div className="w-8 h-[1px] bg-[#c8a96e] mb-6" />
                <p
                  className="text-xl md:text-2xl text-white leading-relaxed font-light italic mb-6 whitespace-pre-line"
                  style={{ fontFamily: "'Cormorant', serif" }}
                >
                  "{opinion}"
                </p>
                <button
                  onClick={() => { setOpinion(""); setDraft(""); }}
                  className="text-[10px] tracking-[0.2em] uppercase text-[#3e3e3e] hover:text-[#c8a96e] transition-colors"
                >
                  Edit
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <textarea
                  className="w-full bg-transparent border-b border-[#2e2e2e] text-[#e8e0d0] placeholder-[#3e3e3e] resize-none focus:outline-none focus:border-[#c8a96e] transition-colors py-3 text-base font-light leading-relaxed"
                  placeholder="Write your opinion about the film..."
                  rows={4}
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                />
                <button
                  onClick={() => { if (draft.trim()) setOpinion(draft.trim()); }}
                  className="text-[11px] tracking-[0.3em] uppercase text-[#c8a96e] border border-[#c8a96e] px-6 py-3 hover:bg-[#c8a96e] hover:text-[#0a0a0a] transition-all duration-300"
                >
                  Save
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1e1e1e] px-6 md:px-16 py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div
          className="text-[11px] tracking-[0.2em] uppercase text-[#3e3e3e]"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Going Vertical · 2017
        </div>
        <div className="text-[11px] text-[#3e3e3e]">
          Russia · 135 min · 12+
        </div>
      </footer>

      {/* LIGHTBOX */}
      {activeImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          onClick={() => setActiveImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-[#a09880] hover:text-white transition-colors"
            onClick={() => setActiveImage(null)}
          >
            <Icon name="X" size={24} />
          </button>
          <img
            src={galleryImages[activeImage].src}
            alt={galleryImages[activeImage].caption}
            className="max-h-[80vh] max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[11px] tracking-[0.2em] uppercase text-[#c8a96e]">
            {galleryImages[activeImage].caption}
          </div>
        </div>
      )}
    </div>
  );
}
