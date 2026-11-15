import { wedding } from "@/content/invitation";

import { PhotoCard, Reveal } from "../primitives";

const GALLERY_SIZES = "(min-width: 40rem) 20rem, 52vw";

export function GallerySection() {
  const [left, right] = wedding.photos.gallery;

  return (
    <section aria-label="Լուսանկարներ" className="px-6 py-16">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <div className="relative flex items-center justify-center py-6">
            <div className="z-1 w-[52%] translate-x-[6%] -rotate-4 sm:w-[48%]">
              <PhotoCard photo={left} sizes={GALLERY_SIZES} />
            </div>
            <div className="z-2 w-[52%] -translate-x-[6%] rotate-4 sm:w-[48%]">
              <PhotoCard photo={right} sizes={GALLERY_SIZES} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
