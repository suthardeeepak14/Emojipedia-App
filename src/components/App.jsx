import React from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import emojipedia from "../emojipedia";

function createEmoji(emojiItem) {
  return (
    <Content
      key={emojiItem.id}
      emoji={emojiItem.emoji}
      name={emojiItem.name}
      description={emojiItem.meaning}
    />
  );
}

function App() {
  return (
    <>
      <Header />
      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
      <Footer />
    </>
  );
}

export default App;
