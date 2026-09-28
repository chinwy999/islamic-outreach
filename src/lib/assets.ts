/* Images are imported through the module graph so that they are inlined
 * into the single-file build instead of being fetched at runtime. */
import hero from "../../public/images/hero-mosque.jpg";
import tile from "../../public/images/tilework.jpg";
import valley from "../../public/images/valley-dawn.jpg";
import courtyard from "../../public/images/courtyard.jpg";

export const IMG: Record<string, string> = { hero, tile, valley, courtyard };

/** Photographic plates always degrade to a designed surface, never to a hole. */
export const FALLBACK_SURFACE =
  "linear-gradient(135deg,#0e3b2e 0%,#0a2a20 45%,#14513c 100%)";
