import { useState } from "react";
import {
  useAddSuperHeroData,
  useSuperHeroesData,
} from "../hooks/useSuperHeroesData";
import { Button, TextField } from "@mui/material";

export const RQSuperHeroesPage = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const { mutate: addHero } = useAddSuperHeroData();

  const handleAddHeroClick = () => {
    console.log({ name, alterEgo });
    const hero = { name, alterEgo };
    addHero(hero);
  };

  const onSuccess = (data) => {
    console.log({ data });
  };

  const onError = (error) => {
    console.log({ error });
  };

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError);

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <div>
        <TextField
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          size="small"
          sx={{ marginRight: 1 }}
        />
        <TextField
          variant="outlined"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
          size="small"
          sx={{ marginRight: 1 }}
        />
        <Button variant="contained" onClick={handleAddHeroClick}>
          Add Hero
        </Button>
      </div>
      <Button variant="outlined" onClick={refetch} sx={{ marginTop: 5 }}>
        Fetch heroes
      </Button>
      {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
};
