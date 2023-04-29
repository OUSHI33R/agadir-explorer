import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Page404 from "../Component/Page404";
function PageNotFound() {

    return (
      <>
        <nav>
          <Navbar />
        </nav>
        <Page404 />
        <Footer />
      </>

      
    )
}

export default PageNotFound;