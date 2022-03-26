import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/black.css";
import Reveal from "reveal.js";
import RevealNotes from "reveal.js/plugin/notes/notes.esm";

const deck = new Reveal();
deck.initialize({
  history: true,
  plugins: [RevealNotes],
});
