export type Navigation = {
    category: string;
    urls: string[];
};

export type Documentation = {
    url: string;
    entry: string;
    description: string;
    parameters: string[][];
};

export type DetailedDocumentation = {
    url: string;
    entry: string;
    description: string;
    detail: JSX.Element | null | undefined;
    parameters: string[][];
};

export type Translation = {
    entry: string;
    description: string;
    detail: JSX.Element | null;
};

export type CheatSheetData = {
    category: string;
    detailedDocumentations: DetailedDocumentation[];
};
