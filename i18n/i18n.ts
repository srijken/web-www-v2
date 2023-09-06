import nl from "./locales/nl.js";
import en from "./locales/en.js";

type LangKeys = keyof typeof en;

export default function t(lang: "en" | "nl" = "en") {
  let dict = lang === "en" ? en : nl;

  return function (key: LangKeys) {
    return dict[key] || "not found";
  };
}
