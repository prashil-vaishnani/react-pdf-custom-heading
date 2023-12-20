import { Button } from "antd";
import "./App.css";
import LongForm from "./components/LongForm";
import { Margin, usePDF, Resolution } from "react-to-pdf";

function App() {
  const { toPDF, targetRef } = usePDF({
    method: "save",
    filename: "multipage-example.pdf",
    resolution: Resolution.HIGH,
    page: {
      margin: Margin.MEDIUM,
      format: "letter",
      // default is 'portrait'
      // orientation: "landscape",
    },
    // canvas: {
    //   // default is 'image/jpeg' for better size performance
    //   mimeType: "image/png",
    //   qualityRatio: 1,
    // },
    // customize any value passed to the jsPDF instance and html2canvas
    // function
    // overrides: {
    //   // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
    //   pdf: {
    //     compress: true,
    //   },
    //   // see https://html2canvas.hertzen.com/configuration for more options
    //   canvas: {
    //     useCORS: true,
    //   },
    // },
  });
  return (
    <div className="App">
      <Button
        style={{ marginTop: "10px", marginBottom: "20px" }}
        type="primary"
        onClick={toPDF}
      >
        {" "}
        Pdf Downloads
      </Button>
      <div ref={targetRef}>
        <LongForm />
      </div>
    </div>
  );
}

export default App;
