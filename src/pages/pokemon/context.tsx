import { IPokemonData } from "@/service/pokemon/types";
import { createContext, useContext, useState } from "react";

export interface InitialValuteProps {
  usePokemonData: IPokemonData[];
  setPokemonData: (value: IPokemonData[]) => void;
}

interface PokemonProviderType {
  children: React.ReactNode;
}

const PokemonContext = createContext<InitialValuteProps | undefined>(undefined);

const InitialValue = () => {
  const [usePokemonData, setPokemonData] = useState<IPokemonData[]>([]);

  return { usePokemonData, setPokemonData };
};

export const PokemonProvider = ({ children }: PokemonProviderType) => {
  return (
    <PokemonContext.Provider value={{ ...InitialValue() }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemonContext must be used within a PokemonContext");
  }
  return context;
};
