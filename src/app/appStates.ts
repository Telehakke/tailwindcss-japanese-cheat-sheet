import { atom } from "jotai";
import { TranslatorEN, TranslatorJA } from "./models/translator";

export const translatorJA = new TranslatorJA();
export const translatorEN = new TranslatorEN();

export const translationsAtom = atom(translatorJA.getTranslations());
export const isJapaneseAtom = atom(true);
export const shouldExpandAllAtom = atom<boolean | null>(false);
