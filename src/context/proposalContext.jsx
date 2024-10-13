import { createContext, useState } from "react";

const proposals = {
    proposal: [],
}

const ProposalContext = createContext(wallet);

const ProposalProvider = ({ children }) => {
    const [proposal, setProposal] = useState([]);

    return (
        <ProposalContext.Provider value={{
            proposal, setProposal
        }}>
            {children}
        </ProposalContext.Provider>
    );
};

export { ProposalContext, ProposalProvider }