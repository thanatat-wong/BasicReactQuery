import { Route, Routes } from "react-router-dom";
import "./App.css";
import ResponsiveAppBar from "./components/Nav";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { DependentQueriesPage } from "./components/DependentQueries.page";
import { PaginatedQueriesPage } from "./components/PaginatedQueries.page";
import { InfiniteQueriesPage } from "./components/InfiniteQueries.page";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/RQSuperHeroes" element={<RQSuperHeroesPage />} />
          <Route path="/SuperHeroes" element={<SuperHeroesPage />} />
          <Route path="/RQDependent" element={<DependentQueriesPage email="vishwas@example.com" />} />
          <Route path="/RQPaginated" element={<PaginatedQueriesPage />}/>
          <Route path="/RQInfinite" element={<InfiniteQueriesPage />}/>
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </div>
  );
}

export default App;
