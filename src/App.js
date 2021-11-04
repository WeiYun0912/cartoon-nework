import React from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;

// const batch = db.batch();
// template.forEach((doc) => {
//   let docRef = db.collection("cartoons-figures").doc();
//   batch.set(docRef, doc);
// });
// batch.commit();
// db.collection("cartoons").onSnapshot((snapshot) => {
//   snapshot.docs.map((doc) => console.log(doc.id, doc.data()));
// });
// db.collection("cartoons").add({
//   name: "blablabal123",
// });
