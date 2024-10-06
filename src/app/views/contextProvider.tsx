import { createContext, ReactNode, useState } from "react";

type Context = {
    shouldExpandAll: boolean | null;
    setShouldExpandAll: React.Dispatch<React.SetStateAction<boolean | null>>;
};

export const AppContext = createContext({} as Context);

/**
 * shouldExpandAllとsetShouldExpandAllの、2つのメンバーを子要素に提供する
 */
export const ContextProvider = ({
    children,
}: {
    children: ReactNode;
}): JSX.Element => {
    // チートシートの展開状態を以下で表す
    // 全て展開された状態 -> true
    // 全て折りたたまれた状態 -> false
    // 一部展開された状態 -> null
    const [shouldExpandAll, setShouldExpandAll] = useState<boolean | null>(
        false,
    );

    return (
        <AppContext.Provider value={{ shouldExpandAll, setShouldExpandAll }}>
            {children}
        </AppContext.Provider>
    );
};
