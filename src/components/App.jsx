import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import emojipedia from "../emojipedia";

function App() {
  const createEmoji = emojipedia.map((emoji) => (
    <Content
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      description={emoji.meaning}
    />
  ));
  return (
    <>
      <Header />
      <dl className="dictionary">{createEmoji}</dl>
      <Footer />
    </>
  );
}

export default App;
