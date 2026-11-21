import type { JSX } from "react/jsx-runtime";
import type { CheatSheetData } from "../../../models/types";
import CategoryBar from "./sub/categoryBar";
import DocumentationGroupBox from "./sub/documentationGroupBox";
import FloatingCard from "./sub/floatingCard";

/**
 * カテゴリー名とその項目の説明を表示する
 */
export const CheatSheet = ({ cheatSheetData }: { cheatSheetData: CheatSheetData }): JSX.Element => {
  return (
    <FloatingCard>
      <CategoryBar cheatSheetData={cheatSheetData} />
      {cheatSheetData.detailedDocumentations.map((doc) => {
        return <DocumentationGroupBox key={doc.entry} detailedDocumentation={doc} />;
      })}
    </FloatingCard>
  );
};
