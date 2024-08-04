import React, {createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({children}) => {
  const [account, set_account] = useState({
    username: '',
    email: ''
  });
  return (
    <div>
      <DataContext.Provider value={{ account, set_account }}>
        {children}
      </DataContext.Provider>
    </div>
  );
};
export default DataProvider;