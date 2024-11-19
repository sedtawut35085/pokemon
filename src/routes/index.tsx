import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokemon from "@/pages/pokemon/view";
import PokemonDetail from "@/pages/pokemonDetail/view";
import MockTable from "@/pages/equipment/view";

function Router() {
  console.log("ddd");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/pokemon/:id" element={<PokemonDetail />} />
          <Route path="/report" element={<MockTable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
