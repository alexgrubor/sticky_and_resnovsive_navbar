
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <img src="https://assets.materialup.com/uploads/07ee2e3d-0c16-43b3-b672-20973bb1569f/preview.jpg" alt="" id="home"  />
      <NavBar />
      <div className="sections">
      <img src="https://cdn.shopify.com/s/files/1/1833/4291/articles/shopify-about-us-page.webp?v=1671781835" alt="" id="about" />
      <img src="https://cdn.baymard.com/research/media_files/attachments/37790/original/research-media-file-91d3a63e26e0dcf9de9693abfbfa67c5.jpg" alt="" id="products" />
      <img src="https://images01.nicepagecdn.com/page/64/21/website-design-preview-64211.jpg" alt="" id="contact" />
      </div>
    </div>
  );
}

export default App;
