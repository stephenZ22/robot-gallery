import React, { useState } from 'react';

interface AppStateValue {
    author: string;
    shoppingCart: { items: {id: number, name: string}[] }
}
const defaultContextValue: AppStateValue = {
    author: 'StephenZzz',
    shoppingCart: { items: [] },
  }
  
  export const appContext = React.createContext(defaultContextValue)

  export const AppStateProvider : React.FC = (props) => {
    const [state, setState] = useState(defaultContextValue)
    
    return( 
        <appContext.Provider value={state}>
            {/* {props.children} */}
        </appContext.Provider>
    );
  }
  