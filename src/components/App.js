import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import notes from "../notes";
import Note from "./Note";

function App() {
  return (
    <div>
      <Header />
      {/* <Note /> */}
      {notes.map((noteTerm) => {
        return (
          <Note
            key={noteTerm.id}
            name={noteTerm.name}
            content={noteTerm.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
