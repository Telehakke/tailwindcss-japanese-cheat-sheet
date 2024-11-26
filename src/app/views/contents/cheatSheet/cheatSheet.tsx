import { DetailedDocumentation } from "../../../models/types";
import FloatingCard from "./sub/floatingCard";
import CategoryBar from "./sub/categoryBar";
import DocumentationGroupBox from "./sub/documentationGroupBox";

/**
 * カテゴリー名とその項目の説明を表示する
 */
export const CheatSheet = ({
    category,
    detailedDocumentations,
}: {
    category: string;
    detailedDocumentations: DetailedDocumentation[];
}): JSX.Element => {
    return (
        <FloatingCard>
            <CategoryBar category={category} />
            {detailedDocumentations.map((doc) => {
                return (
                    <DocumentationGroupBox
                        key={doc.entry}
                        detailedDocumentation={doc}
                    />
                );
            })}
        </FloatingCard>
    );
};
