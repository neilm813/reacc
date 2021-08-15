import Counter from "./components/Counter.js";

export default function App() {
  const wrap = document.createElement("div");
  const row = document.createElement("div");
  wrap.appendChild(row);
  row.style.display = "flex";
  row.style.justifyContent = "space-evenly";

  const col1 = document.createElement("div");
  row.appendChild(col1);
  const col2 = document.createElement("div");
  row.appendChild(col2);

  return {
    app: wrap,
    components: [
      new Counter({
        parentNode: col1,
        headingText: "Red Cars",
        headingSize: 2,
      }),
      new Counter({ parentNode: col2 }),
    ],
  };
}
