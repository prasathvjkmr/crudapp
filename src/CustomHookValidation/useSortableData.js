import React from "react";

const useSortableData = (APIData, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedProducts = React.useMemo(() => {
    let sortableProducts = [...APIData];
    if (sortConfig !== null) {
      sortableProducts.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return console.table(sortableProducts);
  }, [APIData, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };
  return { APIData: sortedProducts, requestSort, sortConfig };
};

export default useSortableData;
