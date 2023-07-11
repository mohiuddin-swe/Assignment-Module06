import Header from './Components/Header';
import Content from './Components/content';
import Footer from './Components/footer';

function App() {
  return (
    <div className="container mx-auto px-4 ">
      <Header title="Simple React App" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;