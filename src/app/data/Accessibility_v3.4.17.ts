export const version = "v3.4.17";
export const documentations = [
    {
        "url": "https://tailwindcss.com/docs/screen-readers",
        "entry": "Screen Readers",
        "description": "Utilities for improving accessibility with screen readers.",
        "parameters": [
            [
                "sr-only",
                "position: absolute;\nwidth: 1px;\nheight: 1px;\npadding: 0;\nmargin: -1px;\noverflow: hidden;\nclip: rect(0, 0, 0, 0);\nwhite-space: nowrap;\nborder-width: 0;\n"
            ],
            [
                "not-sr-only",
                "position: static;\nwidth: auto;\nheight: auto;\npadding: 0;\nmargin: 0;\noverflow: visible;\nclip: auto;\nwhite-space: normal;\n"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/forced-color-adjust",
        "entry": "Forced Color Adjust",
        "description": "Utilities for opting in and out of forced colors.",
        "parameters": [
            [
                "forced-color-adjust-auto",
                "forced-color-adjust: auto;\n"
            ],
            [
                "forced-color-adjust-none",
                "forced-color-adjust: none;\n"
            ]
        ]
    }
]