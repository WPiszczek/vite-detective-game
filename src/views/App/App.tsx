import { FC, useEffect, useState } from "react";
import lunr from "lunr";
import { Wrapper } from "./App.styles";

type Document = {
  id: number;
  name: string;
  text: string;
};

const documents = [
  {
    id: 0,
    name: "Lunr",
    text: "Like Solr, but much smaller, and not as bright."
  },
  {
    id: 1,
    name: "React",
    text: "A JavaScript library for building user interfaces."
  },
  {
    id: 2,
    name: "Lodash",
    text: "A modern JavaScript utility library delivering modularity, performance & extras."
  }
];

const App: FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Document[]>(documents);
  const index = lunr(function () {
    this.field("name");
    this.field("text");

    documents.forEach((doc) => {
      this.add(doc);
    }, this);
  });
  console.log(query);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const searchResults = index.search(query.toLowerCase());
    let filteredList: Document[] = [];
    searchResults.forEach((element) => {
      filteredList = [...filteredList, documents[parseInt(element.ref)]];
    });
    setResults(filteredList);
  }, [query]);

  console.log("QUERY", query);
  console.log("RESULTS", results);

  return (
    <Wrapper>
      <input type="text" value={query} onChange={onInputChange} />
      <h1>Results</h1>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.text}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default App;
