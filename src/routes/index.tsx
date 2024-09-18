import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from "@/pages/pokemon/view";
import PokemonDetail from "@/pages/pokemonDetail/view";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
