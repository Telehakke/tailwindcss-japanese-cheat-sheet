export const FontSize = {
    textSm: "text-sm",
    textXl: "text-xl",
    text2xl: "text-2xl",
} as const;

export const TextColor = {
    neutral500_dark300: "text-neutral-500 dark:text-neutral-300",
    neutral900_dark100: "text-neutral-900 dark:text-neutral-100",
    orange500: "text-orange-500",
    firstBlue700_dark300: "first:text-blue-700 first:dark:text-blue-300",
    lastGreen700_dark300: "last:text-green-700 last:dark:text-green-300",
} as const;

export const Bg = {
    gray800: "bg-gray-800",
    neutral50_dark800: "bg-neutral-50 dark:bg-neutral-800",
    neutral200_dark700: "bg-neutral-200 dark:bg-neutral-700",
    neutral200_dark900: "bg-neutral-200 dark:bg-neutral-900",
    hoverNeutral50: "hover:bg-neutral-50",
    hoverNeutral100_dark700: "hover:bg-neutral-100 hover:dark:bg-neutral-700",
    hoverNeutral200_dark800: "hover:bg-neutral-200 hover:dark:bg-neutral-800",
    hoverNeutral300_dark700: "hover:bg-neutral-300 hover:dark:bg-neutral-700",
    purple300_dark800: "bg-purple-300 dark:bg-purple-800",
    slate100_dark900: "bg-neutral-100 dark:bg-neutral-900",
    transparent: "bg-transparent",
    oddStone50_dark800: "odd:bg-stone-50 odd:dark:bg-stone-800",
    evenStone200_dark900: "even:bg-stone-200 even:dark:bg-stone-900",
    purpleToTransparentGradation:
        "bg-gradient-to-r from-purple-400 dark:from-purple-700 to-transparent",
} as const;

export const Border = {
    neutral400_dark700: "border-neutral-400 dark:border-neutral-700",
    purple300_dark800: "border-purple-300 dark:border-purple-800",
} as const;

export const Fill = {
    neutral500: "fill-neutral-500",
    neutral500_hover400: "fill-neutral-500 hover:fill-neutral-400",
    neutral500_hoverSky500: "fill-neutral-500 hover:fill-sky-500",
} as const;

export const Outline = {
    stone400_dark700: "outline-stone-400 dark:outline-stone-700",
} as const;
