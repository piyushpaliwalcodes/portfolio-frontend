import { MantineProvider } from "@mantine/core";
import { pdfjs } from "react-pdf";
import AOS from "aos";
import "aos/dist/aos.css";

import Homepage from "./components/Homepage";
import { useEffect } from "react";
function App() {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App h-full">
      <MantineProvider>
        <Homepage />
      </MantineProvider>
    </div>
  );
}

export default App;
