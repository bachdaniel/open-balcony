// ── UI TRANSLATIONS ───────────────────────────────────────────
// Static text on the page. Each key maps to an element with a
// matching data-i18n="..." attribute in index.html.
const i18n = {
  en: {
    "hero-label": "Welcome to our",
    "hero-title": "Altan Fernisering",
    "hero-sub": "Come explore our little green world — two balconies, countless stories.",
    "nav-rose": "Rose Garden",
    "nav-lounge": "The Lounge",
    "nav-history": "History",
    "story-title": "Getting Ready for Summer",
    "story-p1": "Every spring, there's a quiet ritual on our balconies. The first warm day calls for dragging out the overwintered pots, checking which roots survived, and deciding who gets a new home. This year was no different — except that we gave ourselves more time, and it showed.",
    "story-p2": "The Rose Garden got its annual hard prune in March, before the buds broke. We were brutal this time, cutting back further than felt comfortable, and the roses rewarded us with the strongest growth we've seen in years. Meanwhile, the Lounge balcony went through a full refresh: new soil, new pots, and a careful arrangement that finally makes it feel like a room you want to sit in.",
    "story-p3": "We're happy you're here to see it. Tap any plant card to learn a bit about who it is, and how it ended up on our balcony.",
    "rose-title": "The Rose Garden",
    "rose-desc": "Our south-facing balcony — full sun, climbing roses, and all the bees.",
    "lounge-title": "The Lounge",
    "lounge-desc": "A shaded retreat with lush foliage, herbs, and a comfortable chair.",
    "history-title": "History",
    "history-desc": "How these balconies came to be — a few moments from over the years.",
    "card-hint": "Tap to read more →",
    "card-flip": "Tap to flip →",
    "card-flip-back": "← Tap to flip back",
    "modal-care-title": "Plant care",
    "care-water": "Water",
    "care-sun": "Sun",
    "care-tips": "Tips",
    "footer": "Made with care & soil — Open Balcony 2025",
    "welcome-hosts": "Your hosts",
    "welcome-title": "Welcome to Altan Fernisering",
    "welcome-body1": "We're so happy you're here! This little site is a guided tour of our two balconies — the Rose Garden and the Lounge — plus the story of how it all came to be.",
    "welcome-body2": "Tap any plant card to flip it over and read about it. We've documented most of the plants you'll find out here — but not quite all of them. So go ahead and explore the balconies yourself… maybe you can spot a few we've missed?",
    "welcome-cta": "Explore the balconies →"
  },
  da: {
    "hero-label": "Velkommen til vores",
    "hero-title": "Altan Fernisering",
    "hero-sub": "Kom og udforsk vores lille grønne verden — to altaner, utallige historier.",
    "nav-rose": "Rosenhaven",
    "nav-lounge": "Loungen",
    "nav-history": "Historie",
    "story-title": "Vi gør klar til sommeren",
    "story-p1": "Hvert forår er der et stille ritual på vores altaner. Den første varme dag betyder, at de overvintrede potter skal slæbes frem, at vi tjekker, hvilke rødder der overlevede, og beslutter, hvem der får et nyt hjem. I år var ingen undtagelse — bortset fra at vi gav os selv mere tid, og det kunne ses.",
    "story-p2": "Rosenhaven fik sin årlige hårde beskæring i marts, før knopperne sprang ud. Vi var nådesløse denne gang og skar længere tilbage, end der føltes rart, og roserne belønnede os med den kraftigste vækst, vi har set i årevis. Imens fik Lounge-altanen en gennemgribende fornyelse: ny jord, nye potter og en omhyggelig indretning, der endelig får den til at føles som et rum, man har lyst til at sidde i.",
    "story-p3": "Vi er glade for, at du er her for at se det. Tryk på et plantekort for at læse lidt om, hvem den er, og hvordan den endte på vores altan.",
    "rose-title": "Rosenhaven",
    "rose-desc": "Vores sydvendte altan — fuld sol, klatreroser og alle bierne.",
    "lounge-title": "Loungen",
    "lounge-desc": "Et skyggefuldt fristed med frodige planter, krydderurter og en behagelig stol.",
    "history-title": "Historie",
    "history-desc": "Hvordan disse altaner blev til — et par øjeblikke gennem årene.",
    "card-hint": "Tryk for at læse mere →",
    "card-flip": "Tryk for at vende →",
    "card-flip-back": "← Tryk for at vende tilbage",
    "modal-care-title": "Plantepleje",
    "care-water": "Vand",
    "care-sun": "Sol",
    "care-tips": "Tips",
    "footer": "Lavet med omhu & jord — Open Balcony 2025",
    "welcome-hosts": "Jeres værter",
    "welcome-title": "Velkommen til Altan Fernisering",
    "welcome-body1": "Vi er så glade for, at du er her! Denne lille side er en guidet tur rundt på vores to altaner — Rosenhaven og Loungen — plus historien om, hvordan det hele blev til.",
    "welcome-body2": "Tryk på et plantekort for at vende det og læse om planten. Vi har dokumenteret de fleste af de planter, du finder herude — men ikke helt alle. Så gå selv på opdagelse på altanerne … måske kan du finde nogle, vi har overset?",
    "welcome-cta": "Udforsk altanerne →"
  }
};

// ── PLANT DATA ─────────────────────────────────────────────────
// Each text field can be either a plain string (same in both
// languages, e.g. a botanical name) or an object { en, da } with
// one value per language.
//
// Image paths are relative, e.g. "images/rose-garden/my-rose.jpg".
// Put your photos in the images/rose-garden/, images/lounge/ and
// images/history/ folders.
//
// "care" is optional — leave it out (or empty) for items like the
// History cards that aren't plants.
//
// TODO (review — added 2026-06-19): Double-check the plant identifications
// below. Confirmed by owner: Grand Award & Morten Korch roses. Best-guess /
// uncertain and worth a closer look:
//   • "White Meadow Flower" (PXL_...162956876) — species not identified
//   • "Aubrieta"            (PXL_...163011674) — guess, confirm
//   • "Gladiolus"           (PXL_...163121206) — could be iris
//   • "Bird's-foot Trefoil" & "Tidy Tips" — fairly sure, but verify
// Lounge uncertain:
//   • "Raspberry"        (PXL_...053023593) — likely, confirm
//   • "Yarrow"           (PXL_...163141389) — in bud, confirm at flowering
//   • "Leafy Greens"     (PXL_...163201582) — rocket or chicory?
//   • "Silver-leaved Herb" (PXL_...163209782) — tansy/yarrow?
//   • "Creeping Herb"    (PXL_...163217447) — thyme or oregano?
//   • "White Sweet Clover" (PXL_...163232037) — confirm
// Update name / botanical / description once confirmed.

const plants = {
  roseGarden: [
    {
      name: { en: "Grand Award Rose", da: "Grand Award-rose" },
      botanical: "Rosa 'Grand Award'",
      emoji: "🌹",
      image: "images/rose-garden/Rose_GrandAward.jpg",
      description: {
        en: "A climbing rose with velvety, deep-red blooms trained up our trellis. It opens flat and full, and the bees find it within minutes of a flower unfurling.",
        da: "En klatrerose med dybrøde, fløjlsbløde blomster bundet op ad espalieret. Den åbner sig fladt og fyldigt, og bierne finder den, få minutter efter en blomst er sprunget ud."
      },
      care: {
        water: { en: "Once or twice a week — more in hot, dry spells", da: "En til to gange om ugen — oftere i varme, tørre perioder" },
        sun:   { en: "Full sun, 6+ hours a day", da: "Fuld sol, 6+ timer om dagen" },
        tips:  { en: "Deadhead spent blooms and tie new canes to the trellis", da: "Fjern afblomstrede blomster og bind nye skud op til espalieret" }
      }
    },
    {
      name: { en: "Morten Korch Rose", da: "Morten Korch-rose" },
      botanical: "Rosa 'Morten Korch'",
      emoji: "🌹",
      image: "images/rose-garden/Rose_MortenCoch.jpg",
      description: {
        en: "A nostalgic Danish rose named after the beloved author, known for soft pink, richly fragrant flowers. Here it's still in bud, gathering strength for summer.",
        da: "En nostalgisk dansk rose opkaldt efter den elskede forfatter, kendt for sarte lyserøde, stærkt duftende blomster. Her står den endnu i knop og samler kræfter til sommeren."
      },
      care: {
        water: { en: "Once or twice a week — keep the roots from drying out", da: "En til to gange om ugen — lad ikke rødderne tørre ud" },
        sun:   { en: "Full sun, 6+ hours a day", da: "Fuld sol, 6+ timer om dagen" },
        tips:  { en: "A good prune in early spring keeps it full and flowering", da: "En god beskæring i det tidlige forår holder den fyldig og blomstrende" }
      }
    },
    {
      name: { en: "Mint", da: "Mynte" },
      botanical: "Mentha spicata",
      emoji: "🌿",
      image: "images/rose-garden/PXL_20260618_162837382.MP.jpg",
      description: {
        en: "Spearmint spilling out of a terracotta pot — perfect for tea and summer drinks. It spreads fast, so we keep it potted on its own.",
        da: "Grøn mynte, der vælter ud over en terrakottapotte — perfekt til te og sommerdrinks. Den breder sig hurtigt, så vi holder den i sin egen potte."
      },
      care: {
        water: { en: "Keep the soil reliably moist", da: "Hold jorden jævnt fugtig" },
        sun:   { en: "Sun to part shade", da: "Sol til halvskygge" },
        tips:  { en: "Pinch the tips often to keep it bushy", da: "Knib toppene jævnligt for at holde den busket" }
      }
    },
    {
      name: { en: "Cornflower (Blue)", da: "Kornblomst (blå)" },
      botanical: "Centaurea cyanus",
      emoji: "🌸",
      image: "images/rose-garden/PXL_20260618_162853559.MP.jpg",
      description: {
        en: "Classic blue cornflowers swaying in our little rooftop meadow — a magnet for bees and butterflies.",
        da: "Klassiske blå kornblomster, der svajer i vores lille tag-eng — en magnet for bier og sommerfugle."
      },
      care: {
        water: { en: "Water moderately; fairly drought-tolerant once established", da: "Vand moderat; ret tørketålende når den er etableret" },
        sun:   { en: "Full sun", da: "Fuld sol" },
        tips:  { en: "Deadhead to keep new flowers coming all summer", da: "Fjern afblomstrede for at få nye blomster hele sommeren" }
      }
    },
    {
      name: { en: "Bird's-foot Trefoil", da: "Almindelig kællingetand" },
      botanical: "Lotus corniculatus",
      emoji: "🌼",
      image: "images/rose-garden/PXL_20260618_162907902.MP.jpg",
      description: {
        en: "Cheerful little yellow pea-flowers, sometimes tinged with orange — an easy, bee-friendly native.",
        da: "Muntre små gule ærteblomster, nogle gange med et strejf af orange — en nem, bivenlig hjemmehørende plante."
      },
      care: {
        water: { en: "Water moderately", da: "Vand moderat" },
        sun:   { en: "Full sun", da: "Fuld sol" },
        tips:  { en: "Thrives in poor soil — don't overfeed", da: "Trives i mager jord — undgå for meget gødning" }
      }
    },
    {
      name: { en: "Tidy Tips", da: "Layia (Tidy Tips)" },
      botanical: "Layia platyglossa",
      emoji: "🌼",
      image: "images/rose-garden/PXL_20260618_162921682.MP.jpg",
      description: {
        en: "A sunny daisy with yellow petals dipped in white, part of our wildflower seed mix.",
        da: "En solrig margerit-lignende blomst med gule kronblade dyppet i hvidt — en del af vores vildblomst-frøblanding."
      },
      care: {
        water: { en: "Water moderately; let it dry between waterings", da: "Vand moderat; lad den tørre lidt mellem vandinger" },
        sun:   { en: "Full sun", da: "Fuld sol" },
        tips:  { en: "An annual that happily self-seeds for next year", da: "En etårig, der gerne selvsår sig til næste år" }
      }
    },
    {
      name: { en: "Cornflower (Pink)", da: "Kornblomst (lyserød)" },
      botanical: "Centaurea cyanus",
      emoji: "🌸",
      image: "images/rose-garden/PXL_20260618_162930439.MP.jpg",
      description: {
        en: "The pink sister to our blue cornflowers, with the same shaggy, papery petals.",
        da: "Den lyserøde søster til vores blå kornblomster, med de samme lasede, papiragtige kronblade."
      },
      care: {
        water: { en: "Water moderately; fairly drought-tolerant", da: "Vand moderat; ret tørketålende" },
        sun:   { en: "Full sun", da: "Fuld sol" },
        tips:  { en: "Deadhead to encourage more blooms", da: "Fjern afblomstrede for at få flere blomster" }
      }
    },
    {
      name: { en: "Red Clover", da: "Rødkløver" },
      botanical: "Trifolium pratense",
      emoji: "🌸",
      image: "images/rose-garden/PXL_20260618_162940615.MP.jpg",
      description: {
        en: "Soft pink clover heads loved by bumblebees — and it quietly feeds the soil with nitrogen.",
        da: "Bløde lyserøde kløverhoveder, som humlebierne elsker — og den gøder stille jorden med kvælstof."
      },
      care: {
        water: { en: "Water moderately", da: "Vand moderat" },
        sun:   { en: "Full sun to light shade", da: "Fuld sol til let skygge" },
        tips:  { en: "Leave a few flowers for the bees before cutting back", da: "Lad et par blomster stå til bierne, før du klipper tilbage" }
      }
    },
    {
      name: { en: "White Meadow Flower", da: "Hvid engblomst" },
      botanical: "",
      emoji: "🤍",
      image: "images/rose-garden/PXL_20260618_162956876.MP.jpg",
      description: {
        en: "A delicate white bloom from our wildflower seed mix — we're still confirming exactly which one it is.",
        da: "En sart hvid blomst fra vores vildblomst-frøblanding — vi er stadig ved at finde ud af præcis hvilken det er."
      },
      care: {
        water: { en: "Water moderately", da: "Vand moderat" },
        sun:   { en: "Full sun", da: "Fuld sol" },
        tips:  { en: "Part of a sown meadow mix — let it self-seed", da: "Del af en sået eng-blanding — lad den selvså sig" }
      }
    },
    {
      name: { en: "Boston Ivy", da: "Rådhusvin" },
      botanical: "Parthenocissus tricuspidata",
      emoji: "🍃",
      image: "images/rose-garden/PXL_20260618_163006512.MP.jpg",
      description: {
        en: "A self-clinging climber covering the trellis in glossy three-lobed leaves that blaze red in autumn.",
        da: "En selvklæbende klatreplante, der dækker espalieret med blanke, trelappede blade, som flammer rødt om efteråret."
      },
      care: {
        water: { en: "Water while establishing; tough once settled", da: "Vand mens den etablerer sig; hårdfør når den er rodfæstet" },
        sun:   { en: "Sun to part shade", da: "Sol til halvskygge" },
        tips:  { en: "Prune to keep it off windows and gutters", da: "Beskær, så den holdes væk fra vinduer og tagrender" }
      }
    },
    {
      name: { en: "Aubrieta", da: "Aubrieta (blålæbe)" },
      botanical: "Aubrieta deltoidea",
      emoji: "💜",
      image: "images/rose-garden/PXL_20260618_163011674.MP.jpg",
      description: {
        en: "Vivid magenta flowers trailing over the edge of the window box. (We think it's aubrieta — happy to be corrected!)",
        da: "Levende magenta blomster, der hænger ud over kanten af altankassen. (Vi tror, det er aubrieta — ret os endelig!)"
      },
      care: {
        water: { en: "Water moderately; dislikes soggy soil", da: "Vand moderat; bryder sig ikke om våd jord" },
        sun:   { en: "Full sun", da: "Fuld sol" },
        tips:  { en: "Shear back after flowering to keep it tidy", da: "Klip tilbage efter blomstring for at holde den pæn" }
      }
    },
    {
      name: { en: "Sugar Snap Pea", da: "Sukkerært" },
      botanical: "Pisum sativum",
      emoji: "🫛",
      image: "images/rose-garden/PXL_20260618_163038162.MP.jpg",
      description: {
        en: "A pea pod swelling on the vine — homegrown snacking straight off the balcony.",
        da: "En ærtebælg, der svulmer på ranken — hjemmedyrket snack direkte fra altanen."
      },
      care: {
        water: { en: "Keep evenly moist, especially while podding", da: "Hold jævnt fugtig, især mens den sætter bælge" },
        sun:   { en: "Full sun", da: "Fuld sol" },
        tips:  { en: "Give the vines something to climb", da: "Giv ranken noget at klatre på" }
      }
    },
    {
      name: { en: "Gladiolus", da: "Gladiolus" },
      botanical: "Gladiolus",
      emoji: "🌱",
      image: "images/rose-garden/PXL_20260618_163121206.MP.jpg",
      description: {
        en: "Sword-shaped leaves pushing up from the pot, with flower spikes on the way. (Could also be iris — we'll know once it blooms.)",
        da: "Sværdformede blade, der skyder op af potten, med blomsterstængler på vej. (Kan også være iris — det ved vi, når den blomstrer.)"
      },
      care: {
        water: { en: "Water moderately during growth", da: "Vand moderat i vækstsæsonen" },
        sun:   { en: "Full sun", da: "Fuld sol" },
        tips:  { en: "Stake the tall spikes so they don't flop", da: "Støt de høje stængler, så de ikke vælter" }
      }
    }
    // Add more plants by copying the block above and pasting after this line
  ],

  lounge: [
    {
      name: { en: "Wisteria", da: "Blåregn" },
      botanical: "Wisteria sinensis",
      emoji: "🌿",
      image: "images/lounge/PXL_20260505_165307622.MP.jpg",
      description: {
        en: "The climber from the plan, trained along wires up the brick wall. In time it should drape the corner in cascades of fragrant purple flowers.",
        da: "Klatreplanten fra planen, bundet langs tråde op ad murstensvæggen. Med tiden skulle den gerne dække hjørnet i kaskader af duftende lilla blomster."
      },
      care: {
        water: { en: "Water regularly, especially in its first summers", da: "Vand jævnligt, især de første somre" },
        sun:   { en: "Full sun to part shade", da: "Fuld sol til halvskygge" },
        tips:  { en: "Prune twice a year to encourage flowering", da: "Beskær to gange om året for at fremme blomstring" }
      }
    },
    {
      name: { en: "Raspberry", da: "Hindbær" },
      botanical: "Rubus idaeus",
      emoji: "🌿",
      image: "images/lounge/PXL_20260521_053023593.MP.jpg",
      description: {
        en: "The raspberry bush from the February plan, settling into its pots. (We're fairly sure it's the raspberry.) We're hoping for a handful of berries to pick straight from the balcony.",
        da: "Hindbærbusken fra februar-planen, der falder til i sine krukker. (Vi er ret sikre på, at det er hindbær.) Vi håber på en håndfuld bær at plukke direkte fra altanen."
      },
      care: {
        water: { en: "Keep the soil moist", da: "Hold jorden fugtig" },
        sun:   { en: "Sun to part shade", da: "Sol til halvskygge" },
        tips:  { en: "Cut back the old canes after fruiting", da: "Skær de gamle skud tilbage efter frugtsætning" }
      }
    },
    {
      name: { en: "Yarrow", da: "Røllike" },
      botanical: "Achillea sp.",
      emoji: "🌼",
      image: "images/lounge/PXL_20260618_163141389.MP.jpg",
      description: {
        en: "Soft, feathery foliage coming into bud — we think it's a yarrow, but we'll be sure once it flowers.",
        da: "Blødt, fjeragtigt løv på vej i knop — vi tror, det er en røllike, men vi er sikre, når den blomstrer."
      },
      care: {
        water: { en: "Water moderately; drought-tolerant once established", da: "Vand moderat; tørketålende når etableret" },
        sun:   { en: "Full sun", da: "Fuld sol" },
        tips:  { en: "Deadhead to prolong flowering", da: "Fjern afblomstrede for længere blomstring" }
      }
    },
    {
      name: { en: "Columbine (Pink)", da: "Akeleje (lyserød)" },
      botanical: "Aquilegia vulgaris",
      emoji: "🌸",
      image: "images/lounge/PXL_20260618_163149056.MP.jpg",
      description: {
        en: "A pink-and-white columbine nodding above its lacy foliage — one of the first things to bloom in the lounge box.",
        da: "En lyserød-og-hvid akeleje, der nikker over sit fligede løv — noget af det første, der blomstrede i lounge-kassen."
      },
      care: {
        water: { en: "Keep evenly moist", da: "Hold jævnt fugtig" },
        sun:   { en: "Part shade to sun", da: "Halvskygge til sol" },
        tips:  { en: "Happily self-seeds for next year", da: "Selvsår sig gerne til næste år" }
      }
    },
    {
      name: { en: "Columbine (Blue & Pink)", da: "Akeleje (blå & lyserød)" },
      botanical: "Aquilegia vulgaris",
      emoji: "🌸",
      image: "images/lounge/PXL_20260618_163153066.MP.jpg",
      description: {
        en: "More columbines in blue and pink, crowding happily together along the railing box.",
        da: "Flere akelejer i blåt og lyserødt, der trænges lykkeligt sammen i gelænderkassen."
      },
      care: {
        water: { en: "Keep evenly moist", da: "Hold jævnt fugtig" },
        sun:   { en: "Part shade to sun", da: "Halvskygge til sol" },
        tips:  { en: "Happily self-seeds for next year", da: "Selvsår sig gerne til næste år" }
      }
    },
    {
      name: { en: "Leafy Greens", da: "Bladgrønt" },
      botanical: "",
      emoji: "🌿",
      image: "images/lounge/PXL_20260618_163201582.MP.jpg",
      description: {
        en: "A leafy rosette in its own pot — possibly rocket or chicory. We're still working out exactly what we sowed here!",
        da: "En bladrig roset i sin egen potte — måske rucola eller cikorie. Vi er stadig ved at finde ud af, hvad vi såede her!"
      },
      care: {
        water: { en: "Keep moist", da: "Hold fugtig" },
        sun:   { en: "Sun to part shade", da: "Sol til halvskygge" },
        tips:  { en: "Pick young leaves often", da: "Pluk de unge blade jævnligt" }
      }
    },
    {
      name: { en: "Silver-leaved Herb", da: "Sølvbladet urt" },
      botanical: "",
      emoji: "🌿",
      image: "images/lounge/PXL_20260618_163209782.MP.jpg",
      description: {
        en: "Soft, silvery, finely-cut foliage with arching stems — perhaps a silver tansy or yarrow. Still to be identified.",
        da: "Blødt, sølvfarvet, fintsnittet løv med buede stængler — måske en sølv-tanacetum eller røllike. Skal stadig identificeres."
      },
      care: {
        water: { en: "Water sparingly", da: "Vand sparsomt" },
        sun:   { en: "Full sun", da: "Fuld sol" },
        tips:  { en: "Loves dry, free-draining soil", da: "Elsker tør, veldrænet jord" }
      }
    },
    {
      name: { en: "Creeping Herb", da: "Krybende krydderurt" },
      botanical: "",
      emoji: "🌿",
      image: "images/lounge/PXL_20260618_163217447.MP.jpg",
      description: {
        en: "A low, spreading herb filling a window box — likely thyme or oregano. A pinch of the leaves should tell us soon!",
        da: "En lav, spredende urt, der fylder en altankasse — sandsynligvis timian eller oregano. En knivspids af bladene afslører det snart!"
      },
      care: {
        water: { en: "Water moderately", da: "Vand moderat" },
        sun:   { en: "Full sun", da: "Fuld sol" },
        tips:  { en: "Trim regularly and use in the kitchen", da: "Klip jævnligt og brug i køkkenet" }
      }
    },
    {
      name: { en: "White Sweet Clover", da: "Hvid stenkløver" },
      botanical: "Melilotus albus",
      emoji: "🤍",
      image: "images/lounge/PXL_20260618_163232037.MP.jpg",
      description: {
        en: "Tall spikes of tiny white flowers rising out of the meadow box, with cornflowers and trefoil for company. Beloved by bees.",
        da: "Høje aks af bittesmå hvide blomster, der rejser sig fra eng-kassen, med kornblomster og kællingetand som selskab. Elsket af bier."
      },
      care: {
        water: { en: "Water moderately", da: "Vand moderat" },
        sun:   { en: "Full sun", da: "Fuld sol" },
        tips:  { en: "A wildflower-mix self-seeder", da: "En selvsåer fra vildblomst-blandingen" }
      }
    }
    // Add more plants by copying the block above and pasting after this line
  ],

  history: [
    {
      name: { en: "A snowy start", da: "En snedækket start" },
      botanical: "20 Feb 2026",
      emoji: "❄️",
      image: "images/history/PXL_20260220_075017780.MP.jpg",
      description: {
        en: "Mid-winter on the balcony — snow on the lounge cushions and a single gull overhead. The bare beginning, before a single pot was planted.",
        da: "Midt om vinteren på altanen — sne på lounge-hynderne og en enkelt måge over taget. Den bare begyndelse, før en eneste potte var plantet."
      }
    },
    {
      name: { en: "The master plan", da: "Den store plan" },
      botanical: "20 Feb 2026",
      emoji: "✏️",
      image: "images/history/PXL_20260220_081948368.MP.jpg",
      description: {
        en: "A hand-drawn plan for 'Rosehaven og Loungen' — wildflowers, flower boxes with a rose trellis, hanging boxes on the railing, and wisteria on an espalier. Budgets scribbled in the margin, a raspberry bush, a blueberry bush, and a trip to Jesper's nursery.",
        da: "En håndtegnet plan for 'Rosehaven og Loungen' — vilde blomster, blomsterkasser med rosen-espalier, hængende kasser på gelænderet og blåregn på espalier. Budgetter kradset i marginen, en hindbærbusk, en blåbærbusk og en tur til Jespers Planteskole."
      }
    },
    {
      name: { en: "Building the trellis", da: "Espalieret bygges" },
      botanical: "26 Feb 2026",
      emoji: "🔨",
      image: "images/history/PXL_20260226_091838376.MP.jpg",
      description: {
        en: "Down in the workshop, brushing the first coat of black onto a hand-built lattice trellis.",
        da: "Nede i værkstedet, hvor første lag sort males på et hjemmebygget gitter-espalier."
      }
    },
    {
      name: { en: "A planter takes shape", da: "En plantekasse tager form" },
      botanical: "27 Feb 2026",
      emoji: "🪚",
      image: "images/history/PXL_20260227_081858836.MP.jpg",
      description: {
        en: "The matching planter box, freshly stained and drying on a pair of sawhorses.",
        da: "Den matchende plantekasse, nymalet og tørrer på et par buklere."
      }
    },
    {
      name: { en: "In its place", da: "På sin plads" },
      botanical: "1 Mar 2026",
      emoji: "🧱",
      image: "images/history/PXL_20260301_122756300.MP.jpg",
      description: {
        en: "The finished trellis-planter installed against the brick wall — empty, painted, and waiting for soil.",
        da: "Det færdige espalier med plantekasse sat op mod murstensvæggen — tom, malet og klar til jord."
      }
    },
    {
      name: { en: "First plantings", da: "De første planter" },
      botanical: "9 Mar 2026",
      emoji: "🪴",
      image: "images/history/PXL_20260309_093730250.MP.jpg",
      description: {
        en: "Bare cuttings and twigs go into the new boxes. It doesn't look like much yet — but it's a start.",
        da: "Bare stiklinger og kviste kommer i de nye kasser. Det ligner ikke meget endnu — men det er en begyndelse."
      }
    },
    {
      name: { en: "First evening out", da: "Første aften ude" },
      botanical: "21 Apr 2026",
      emoji: "🌅",
      image: "images/history/PXL_20260421_181551502.MP.jpg",
      description: {
        en: "A spring sunset over the rooftops, a cold beer, and the first shrub leafing out. The balcony is becoming a place to sit.",
        da: "En forårssolnedgang over tagene, en kold øl og den første busk, der springer ud. Altanen er ved at blive et sted at sidde."
      }
    },
    {
      name: { en: "Columbines and company", da: "Akeleje og selskab" },
      botanical: "24 Apr 2026",
      emoji: "👶",
      image: "images/history/PXL_20260424_051917050.MP.jpg",
      description: {
        en: "The columbines open in the box just as the little one settles in for a morning on the balcony.",
        da: "Akelejerne springer ud i kassen, netop som den lille falder til på altanen en morgen."
      }
    },
    {
      name: { en: "Morning together", da: "Morgen sammen" },
      botanical: "24 Apr 2026",
      emoji: "🥰",
      image: "images/history/PXL_20260424_052014165.MP.jpg",
      description: {
        en: "A father-and-son selfie with the columbines in full bloom behind.",
        da: "En far-og-søn-selfie med akelejerne i fuldt flor bagved."
      }
    },
    {
      name: { en: "Coming together", da: "Det hele samler sig" },
      botanical: "21 May 2026",
      emoji: "🌆",
      image: "images/history/PXL_20260521_052858774.MP.jpg",
      description: {
        en: "Hanging pots and boxes brimming with grasses and herbs at dusk — the planting is really taking off.",
        da: "Hængende potter og kasser fyldt med græsser og krydderurter i skumringen — beplantningen tager for alvor fart."
      }
    },
    {
      name: { en: "Berry bushes", da: "Bærbuske" },
      botanical: "21 May 2026",
      emoji: "🫐",
      image: "images/history/PXL_20260521_052915906.MP.jpg",
      description: {
        en: "The raspberry and blueberry bushes from the plan, potted up on the trellis-planter.",
        da: "Hindbær- og blåbærbuskene fra planen, plantet i krukker på espalier-kassen."
      }
    },
    {
      name: { en: "The Lounge fills in", da: "Loungen fyldes ud" },
      botanical: "21 May 2026",
      emoji: "🌿",
      image: "images/history/PXL_20260521_052954903.MP.jpg",
      description: {
        en: "Wisteria climbing the wires, columbines and geraniums spilling from the box, and ferns hanging above the sofa.",
        da: "Blåregn klatrer op ad trådene, akeleje og pelargonier vælter ud af kassen, og bregner hænger over sofaen."
      }
    },
    {
      name: { en: "Room with a view", da: "Stue med udsigt" },
      botanical: "21 May 2026",
      emoji: "🏙️",
      image: "images/history/PXL_20260521_053005888.MP.jpg",
      description: {
        en: "The lounge corner against the Copenhagen rooftops — finally a green room to relax in.",
        da: "Lounge-hjørnet mod Københavns tage — endelig et grønt rum at slappe af i."
      }
    },
    {
      name: { en: "Bath on the balcony", da: "Bad på altanen" },
      botanical: "23 May 2026",
      emoji: "🛁",
      image: "images/history/PXL_20260523_111923988.PORTRAIT.jpg",
      description: {
        en: "Two happy faces in a tub on the deck, greenery all around.",
        da: "To glade ansigter i et badekar på terrassen, omgivet af grønt."
      }
    },
    {
      name: { en: "Sunny afternoon", da: "Solrig eftermiddag" },
      botanical: "23 May 2026",
      emoji: "☀️",
      image: "images/history/PXL_20260523_112204316.MP.jpg",
      description: {
        en: "Looking out from the living room — sunshine, a parasol, and the kids splashing on the balcony.",
        da: "Set fra stuen — solskin, en parasol og børnene, der pjasker på altanen."
      }
    },
    {
      name: { en: "Wisteria on the brick", da: "Blåregn på muren" },
      botanical: "7 Jun 2026",
      emoji: "🌿",
      image: "images/history/PXL_20260607_141804174.MP.jpg",
      description: {
        en: "The wisteria has reached well up the brick wall, with columbines still flowering in the box below.",
        da: "Blåregnen er nået langt op ad murstensvæggen, med akeleje, der stadig blomstrer i kassen nedenunder."
      }
    },
    {
      name: { en: "Everything growing", da: "Alt gror" },
      botanical: "7 Jun 2026",
      emoji: "🌾",
      image: "images/history/PXL_20260607_141828072.MP.jpg",
      description: {
        en: "Grasses, herbs and flowers crowding every pot — the balcony at its leafiest.",
        da: "Græsser, krydderurter og blomster, der fylder hver eneste potte — altanen på sit mest frodige."
      }
    },
    {
      name: { en: "The corner garden", da: "Hjørnehaven" },
      botanical: "7 Jun 2026",
      emoji: "🪻",
      image: "images/history/PXL_20260607_141833839.MP.jpg",
      description: {
        en: "Lavender, sword-leaved bulbs and trailing greenery filling the trellis corner.",
        da: "Lavendel, sværdbladede løg og hængende grønt, der fylder espalier-hjørnet."
      }
    },
    {
      name: { en: "Among the cornflowers", da: "Blandt kornblomsterne" },
      botanical: "14 Jun 2026",
      emoji: "🌸",
      image: "images/history/PXL_20260614_184349899.MP.jpg",
      description: {
        en: "Peeking out from a box gone wild with cornflowers and white campion, glass in hand.",
        da: "Kigger frem fra en kasse, der er gået vild i kornblomster og hvid pragtstjerne, med et glas i hånden."
      }
    },
    {
      name: { en: "An evening earned", da: "En velfortjent aften" },
      botanical: "14 Jun 2026",
      emoji: "🍷",
      image: "images/history/PXL_20260614_184415023.MP.jpg",
      description: {
        en: "A couple's selfie with wine, the wild meadow box in full bloom behind — the balcony exactly as it was dreamed back in February.",
        da: "En par-selfie med vin og den vilde eng-kasse i fuldt flor bagved — altanen præcis som den blev drømt tilbage i februar."
      }
    }
    // Add more history cards by copying the block above and pasting after this line
  ]
};

// Maps a grid element id to the matching key in `plants`.
const gridMap = {
  "rose-garden-grid": "roseGarden",
  "lounge-grid": "lounge",
  "history-grid": "history"
};

// ── LANGUAGE STATE ─────────────────────────────────────────────
// Default to Danish on every visit. We only remember a language once the
// visitor actively picks one via the toggle (stored under a fresh key so old
// auto-saved values don't linger).
let currentLang = "da";
try {
  const saved = localStorage.getItem("ob-lang");
  if (saved && i18n[saved]) currentLang = saved;
} catch (e) {}

// Resolve a field that may be a string or an { en, da } object.
function L(val) {
  if (val == null) return "";
  if (typeof val === "string") return val;
  return val[currentLang] || val.en || val.da || "";
}

// Emojis that read as foliage rather than a flower — used to pick the
// decorative graphic on the back of the card.
const LEAF_EMOJIS = ['🌿', '🍃', '🌱'];

// ── RENDER CARDS ───────────────────────────────────────────────
function renderCards(gridId, plantList) {
  const grid = document.getElementById(gridId);
  if (!grid) return;

  grid.innerHTML = "";

  plantList.forEach((plant, index) => {
    const card = document.createElement("article");
    card.className = "plant-card";
    card.dataset.index = index;
    card.dataset.section = gridId;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-pressed", "false");
    card.setAttribute("aria-label", L(plant.name));

    const name = L(plant.name);
    const emoji = plant.emoji || '🌿';
    const motif = LEAF_EMOJIS.includes(emoji) ? 'leaf' : 'flower';

    // Care list for the back (skipped entirely for non-plant cards)
    const care = plant.care || {};
    const careItems = [
      { icon: '💧', label: i18n[currentLang]["care-water"], value: L(care.water) },
      { icon: '☀️', label: i18n[currentLang]["care-sun"],   value: L(care.sun) },
      { icon: '💡', label: i18n[currentLang]["care-tips"],  value: L(care.tips) }
    ].filter(item => item.value);

    const careHtml = careItems.length
      ? `<ul class="card-care">${careItems.map(it =>
          `<li><span class="care-icon">${it.icon}</span><span><strong>${it.label}:</strong> ${it.value}</span></li>`
        ).join('')}</ul>`
      : '';

    card.innerHTML = `
      <div class="card-inner">
        <div class="card-front">
          <div class="card-image-wrap" style="background-image:url('${plant.image}')">
            <img
              src="${plant.image}"
              alt="${name}"
              loading="lazy"
              onerror="this.style.display='none'; this.parentElement.querySelector('.card-placeholder').style.display='flex';"
            />
            <div class="card-placeholder" style="display:none">${emoji}</div>
          </div>
          <div class="card-body">
            <p class="card-name">${name}</p>
            ${plant.botanical ? `<p class="card-botanical">${plant.botanical}</p>` : ''}
            <p class="card-hint">${i18n[currentLang]["card-flip"]}</p>
          </div>
        </div>
        <div class="card-back card-back--${motif}">
          <div class="card-back-inner">
            <div class="card-back-image" style="background-image:url('${plant.image}')">
              <img
                src="${plant.image}"
                alt="${name}"
                loading="lazy"
                onerror="this.style.display='none'; this.parentElement.querySelector('.card-placeholder').style.display='flex';"
              />
              <div class="card-placeholder" style="display:none">${emoji}</div>
            </div>
            <p class="card-name">${name}</p>
            ${plant.botanical ? `<p class="card-botanical">${plant.botanical}</p>` : ''}
            <p class="card-back-desc">${L(plant.description)}</p>
            ${careHtml}
            <p class="card-hint card-hint-back">${i18n[currentLang]["card-flip-back"]}</p>
          </div>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

function renderAll() {
  renderCards("rose-garden-grid", plants.roseGarden);
  renderCards("lounge-grid", plants.lounge);
  renderCards("history-grid", plants.history);
}

// ── MODAL ─────────────────────────────────────────────────────
const overlay   = document.getElementById('modal-overlay');
const closeBtn  = document.getElementById('modal-close');
const imgEl     = document.getElementById('modal-image');
const placeholderEl = document.getElementById('modal-placeholder');
const nameEl    = document.getElementById('modal-name');
const botanicalEl = document.getElementById('modal-botanical');
const descEl    = document.getElementById('modal-desc');
const careBox   = document.getElementById('modal-care');
const careList  = document.getElementById('modal-care-list');

let currentPlant = null;   // remembered so we can re-render on language switch

function openModal(plant) {
  currentPlant = plant;

  nameEl.textContent = L(plant.name);
  botanicalEl.textContent = plant.botanical || '';
  descEl.textContent = L(plant.description);

  // Image
  imgEl.src = plant.image;
  imgEl.alt = L(plant.name);
  imgEl.style.display = 'block';
  placeholderEl.textContent = plant.emoji || '🌿';
  placeholderEl.style.display = 'none';

  imgEl.onerror = () => {
    imgEl.style.display = 'none';
    placeholderEl.style.display = 'flex';
  };

  // Care items
  careList.innerHTML = '';
  const care = plant.care || {};
  const careMap = [
    { icon: '💧', label: i18n[currentLang]["care-water"], value: care.water },
    { icon: '☀️', label: i18n[currentLang]["care-sun"],   value: care.sun },
    { icon: '💡', label: i18n[currentLang]["care-tips"],  value: care.tips }
  ];

  let careCount = 0;
  careMap.forEach(({ icon, label, value }) => {
    const text = L(value);
    if (!text) return;
    careCount++;
    const li = document.createElement('li');
    li.innerHTML = `<span class="care-icon">${icon}</span><span><strong>${label}:</strong> ${text}</span>`;
    careList.appendChild(li);
  });

  // Hide the whole care block when there's nothing to show (e.g. History cards)
  careBox.style.display = careCount ? '' : 'none';

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Focus trap
  closeBtn.focus();
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  currentPlant = null;
}

// ── LANGUAGE TOGGLE ────────────────────────────────────────────
function setLang(lang, persist) {
  if (!i18n[lang]) lang = "da";
  currentLang = lang;
  if (persist) {
    try { localStorage.setItem("ob-lang", lang); } catch (e) {}
  }
  document.documentElement.lang = lang === "da" ? "da" : "en";

  // Static strings
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = i18n[lang][key];
    if (val != null) el.textContent = val;
  });

  // Toggle button states
  document.querySelectorAll(".lang-btn").forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  // Re-render dynamic content
  renderAll();
  if (overlay.classList.contains("open") && currentPlant) openModal(currentPlant);
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang, true));
});

// ── FLIP-AND-ZOOM ──────────────────────────────────────────────
// Pressing a card lifts it to a large, centered view and flips it over
// to reveal the readable details on the back. It flies back to its spot
// in the grid when dismissed. Uses the FLIP technique so the motion is
// smooth and the resting state has real (crisp) dimensions.
const scrim = document.getElementById('card-scrim');
let openCard = null;

function openZoom(card) {
  if (openCard) return;
  openCard = card;

  const first = card.getBoundingClientRect();

  // Hold the card's slot in the grid so nothing reflows behind the backdrop
  const spacer = document.createElement('div');
  spacer.className = 'card-spacer';
  spacer.style.width = first.width + 'px';
  spacer.style.height = first.height + 'px';
  card.parentNode.insertBefore(spacer, card);
  card._spacer = spacer;

  // Target: centered and enlarged
  const vw = window.innerWidth, vh = window.innerHeight;
  const tW = Math.min(440, Math.round(vw * 0.92));
  const tH = Math.min(560, Math.round(vh * 0.86));
  const left = Math.round((vw - tW) / 2);
  const top  = Math.round((vh - tH) / 2);

  card.classList.add('zoomed');
  card.style.position = 'fixed';
  card.style.margin = '0';
  card.style.left = left + 'px';
  card.style.top = top + 'px';
  card.style.width = tW + 'px';
  card.style.height = tH + 'px';
  card.style.transformOrigin = 'top left';

  // Invert: snap it visually back onto its grid slot (no transition)
  const sx = first.width / tW;
  const sy = first.height / tH;
  card.style.transition = 'none';
  card.style.transform =
    `translate(${first.left - left}px, ${first.top - top}px) scale(${sx}, ${sy})`;

  scrim.classList.add('open');
  document.body.classList.add('zoom-open');
  document.body.style.overflow = 'hidden';

  // Play: fly to center + flip
  requestAnimationFrame(() => requestAnimationFrame(() => {
    card.style.transition = 'transform .45s cubic-bezier(.34,.1,.2,1)';
    card.style.transform = 'translate(0,0) scale(1)';
    card.classList.add('flipped');
    card.setAttribute('aria-pressed', 'true');
  }));
}

function closeZoom(card, keepScrim) {
  if (!card || !card.classList.contains('zoomed')) return;

  const spacer = card._spacer;
  const first = card.getBoundingClientRect();
  const target = spacer ? spacer.getBoundingClientRect() : first;

  card.style.transition = 'transform .4s cubic-bezier(.4,.1,.2,1)';
  card.style.transformOrigin = 'top left';
  card.style.transform =
    `translate(${target.left - first.left}px, ${target.top - first.top}px) ` +
    `scale(${target.width / first.width}, ${target.height / first.height})`;
  card.classList.remove('flipped');
  card.setAttribute('aria-pressed', 'false');

  // Release straight away so paging can open the next card immediately
  if (openCard === card) openCard = null;

  if (!keepScrim) {
    scrim.classList.remove('open');
    document.body.classList.remove('zoom-open');
    document.body.style.overflow = '';
  }

  let done = false;
  const cleanup = () => {
    if (done) return;
    done = true;
    card.classList.remove('zoomed');
    card.removeAttribute('style');     // back to its CSS-driven grid state
    if (spacer && spacer.parentNode) spacer.parentNode.removeChild(spacer);
    card._spacer = null;
    if (openCard === card) openCard = null;
  };
  card.addEventListener('transitionend', cleanup, { once: true });
  setTimeout(cleanup, 550);            // fallback if transitionend doesn't fire
}

// Page from the open card to its previous/next sibling in the same section,
// wrapping around. The current card flies back to its slot as the next one
// lifts out — the backdrop stays up throughout.
function pageTo(offset) {
  if (!openCard) return;
  const current = openCard;
  const cards = Array.prototype.slice.call(
    document.querySelectorAll('.plant-card[data-section="' + current.dataset.section + '"]')
  );
  const idx = cards.indexOf(current);
  if (idx === -1 || cards.length < 2) return;
  const next = cards[(idx + offset + cards.length) % cards.length];
  if (next === current) return;
  closeZoom(current, true);   // keep the backdrop up
  openZoom(next);
}

// ── EVENT LISTENERS ────────────────────────────────────────────
document.addEventListener('click', (e) => {
  if (e.target.closest('.card-scrim')) { closeZoom(openCard); return; }
  const card = e.target.closest('.plant-card');
  if (!card) return;
  if (card.classList.contains('zoomed')) closeZoom(card);
  else openZoom(card);
});

document.getElementById('card-nav-prev').addEventListener('click', (e) => { e.stopPropagation(); pageTo(-1); });
document.getElementById('card-nav-next').addEventListener('click', (e) => { e.stopPropagation(); pageTo(1); });

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (welcomeOverlay.classList.contains('open')) closeWelcome();
    else closeZoom(openCard);
  } else if (openCard) {
    if (e.key === 'ArrowLeft')  pageTo(-1);
    else if (e.key === 'ArrowRight') pageTo(1);
  }
});

// A resize would leave the centered card misplaced — just close it
window.addEventListener('resize', () => { if (openCard) closeZoom(openCard); });

// ── WELCOME POPUP ──────────────────────────────────────────────
// Shown once per browser (first visit, e.g. when arriving via the QR code).
const welcomeOverlay = document.getElementById('welcome-overlay');
const welcomeClose = document.getElementById('welcome-close');

function closeWelcome() {
  welcomeOverlay.classList.remove('open');
  document.body.style.overflow = '';
  try { localStorage.setItem('welcomed', '1'); } catch (e) {}
}

welcomeClose.addEventListener('click', closeWelcome);
welcomeOverlay.addEventListener('click', (e) => {
  if (e.target === welcomeOverlay) closeWelcome();
});

let alreadyWelcomed = false;
try { alreadyWelcomed = localStorage.getItem('welcomed') === '1'; } catch (e) {}

if (!alreadyWelcomed) {
  welcomeOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

// Keyboard activation for cards
document.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('plant-card')) {
    e.preventDefault();
    e.target.click();
  }
});

closeBtn.addEventListener('click', closeModal);

// ── ACTIVE NAV HIGHLIGHT ───────────────────────────────────────
const navLinks = document.querySelectorAll('.section-nav a');
const sections = document.querySelectorAll('.plant-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

// ── INIT ───────────────────────────────────────────────────────
setLang(currentLang, false);   // applies translations + renders all cards (don't persist the default)
