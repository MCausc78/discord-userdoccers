import { createElement, isValidElement, PropsWithChildren, ReactNode, useMemo, useState } from "react";
import Tab from "./Tab";

interface TabsProperties {
  default?: string;
}

export default function Tabs({ children: originalChildren, default: defaultTab }: PropsWithChildren<TabsProperties>) {
  const children: Array<typeof originalChildren> = Array.isArray(originalChildren)
    ? Array.from(originalChildren)
    : [originalChildren];
  const tabs = [];
  for (const child of children) {
    // @ts-expect-error
    if (child.props.mdxType !== "Tab") throw new TypeError("All children must be tabs");
    // @ts-expect-error
    tabs.push(new Tab(child.props));
  }

  const [currentTab, setCurrentTab] = useState<string>(defaultTab ?? tabs[0].id);
  return (
    <tr className="bg-gray-100 text-text-light even:bg-gray-50 dark:bg-trueGray-800 dark:text-text-dark dark:even:bg-trueGray-900">
      {tabs.map((tab) => (
        <th
          className="bg-gray-200 p-2 px-3 uppercase dark:bg-table-head-background-dark"
          onClick={() => setCurrentTab(tab.id)}
        >
          {tab.label}
        </th>
      ))}
      <>{tabs.find((tab) => tab.id === currentTab)?.render()}</>
    </tr>
  );
}
