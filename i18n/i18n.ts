import nl from "./locales/nl.js";
import en from "./locales/en.js";

export default function t(lang: "en" | "nl" = "en") {
  let dict = lang === "en" ? en : nl;

  return function (key: string) {
    return dict[key] || "not found";
  };
}
