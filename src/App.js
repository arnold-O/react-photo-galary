import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

const mainUrl = `https://api.unsplash.com/photos/`;

function App() {
  const FetchData = async () => {
    let url;
    url = `${mainUrl}?client_id=ImGoC-ocaNY2EWT7blSawFHIWiqomdoy7c7I-Hn2unM`;

    try {
      const response = await fetch(url);
      const res = response.json();
      console.log(res);
    } catch (error) {}
  };
  useEffect(() => {
    FetchData();
  });
  return (
    <div className="main-container-wrapper">
      <form className="search-form-wrapper">
        <input type="text" className="input-search" placeholder="Search Photo" />
        <button className="search-Btn">Serach</button>
      </form>
    </div>
  );
}

export default App;
