export const version = "v3.4.17";
export const documentations = [
    {
        "url": "https://tailwindcss.com/docs/transition-property",
        "entry": "Transition Property",
        "description": "Utilities for controlling which CSS properties transition.",
        "parameters": [
            [
                "transition-none",
                "transition-property: none;\n"
            ],
            [
                "transition-all",
                "transition-property: all;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\ntransition-duration: 150ms;\n"
            ],
            [
                "transition",
                "transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\ntransition-duration: 150ms;\n"
            ],
            [
                "transition-colors",
                "transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\ntransition-duration: 150ms;\n"
            ],
            [
                "transition-opacity",
                "transition-property: opacity;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\ntransition-duration: 150ms;\n"
            ],
            [
                "transition-shadow",
                "transition-property: box-shadow;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\ntransition-duration: 150ms;\n"
            ],
            [
                "transition-transform",
                "transition-property: transform;\ntransition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\ntransition-duration: 150ms;\n"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/transition-duration",
        "entry": "Transition Duration",
        "description": "Utilities for controlling the duration of CSS transitions.",
        "parameters": [
            [
                "duration-0",
                "transition-duration: 0s;\n"
            ],
            [
                "duration-75",
                "transition-duration: 75ms;\n"
            ],
            [
                "duration-100",
                "transition-duration: 100ms;\n"
            ],
            [
                "duration-150",
                "transition-duration: 150ms;\n"
            ],
            [
                "duration-200",
                "transition-duration: 200ms;\n"
            ],
            [
                "duration-300",
                "transition-duration: 300ms;\n"
            ],
            [
                "duration-500",
                "transition-duration: 500ms;\n"
            ],
            [
                "duration-700",
                "transition-duration: 700ms;\n"
            ],
            [
                "duration-1000",
                "transition-duration: 1000ms;\n"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/transition-timing-function",
        "entry": "Transition Timing Function",
        "description": "Utilities for controlling the easing of CSS transitions.",
        "parameters": [
            [
                "ease-linear",
                "transition-timing-function: linear;\n"
            ],
            [
                "ease-in",
                "transition-timing-function: cubic-bezier(0.4, 0, 1, 1);\n"
            ],
            [
                "ease-out",
                "transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n"
            ],
            [
                "ease-in-out",
                "transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/transition-delay",
        "entry": "Transition Delay",
        "description": "Utilities for controlling the delay of CSS transitions.",
        "parameters": [
            [
                "delay-0",
                "transition-delay: 0s;\n"
            ],
            [
                "delay-75",
                "transition-delay: 75ms;\n"
            ],
            [
                "delay-100",
                "transition-delay: 100ms;\n"
            ],
            [
                "delay-150",
                "transition-delay: 150ms;\n"
            ],
            [
                "delay-200",
                "transition-delay: 200ms;\n"
            ],
            [
                "delay-300",
                "transition-delay: 300ms;\n"
            ],
            [
                "delay-500",
                "transition-delay: 500ms;\n"
            ],
            [
                "delay-700",
                "transition-delay: 700ms;\n"
            ],
            [
                "delay-1000",
                "transition-delay: 1000ms;\n"
            ]
        ]
    },
    {
        "url": "https://tailwindcss.com/docs/animation",
        "entry": "Animation",
        "description": "Utilities for animating elements with CSS animations.",
        "parameters": [
            [
                "animate-none",
                "animation: none;"
            ],
            [
                "animate-spin",
                "animation: spin 1s linear infinite;\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}"
            ],
            [
                "animate-ping",
                "animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}"
            ],
            [
                "animate-pulse",
                "animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n\n@keyframes pulse {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: .5;\n  }\n}"
            ],
            [
                "animate-bounce",
                "animation: bounce 1s infinite;\n\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);\n  }\n  50% {\n    transform: translateY(0);\n    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\n  }\n}"
            ]
        ]
    }
]