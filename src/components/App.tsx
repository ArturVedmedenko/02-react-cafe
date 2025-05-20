import AppBar from "./AppBar/AppBar";
import catData from "../cats.json";
import { type Cat } from "../types/cat";
import CatList from "./CatList";

const allCats: Cat[] = catData;

const takenCats: Cat[] = allCats.filter((cat) => cat.taken);

export default function App() {
  return (
    <>
      <AppBar />
      <CatList cats={allCats} />
      <h2>Taken cats</h2>
      <CatList cats={takenCats} />
    </>
  );
}
