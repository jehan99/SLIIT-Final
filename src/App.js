import './App.css';
import Navbar from './Navbar';
import TopBody from './Topbody';
import LandBody from './LandBody';
import BookSec1 from './BookSec1';
import Booksec2 from './Booksec2';
import Booksec3 from './Booksec3';
import Addbook from './Addbook';
import Footer from './Footer';
import FooterBottom from './Footerbt';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
   <div>
<Navbar/>
<TopBody/>
<LandBody/>
<BookSec1/>
<Booksec2/>
<Booksec3/>
  <Addbook/>
  <Footer/>
  <FooterBottom/>


   </div>

  );
  }

export default App;
