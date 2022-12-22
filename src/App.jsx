import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";

const App = () => {
  return (
    <section className="d-flex flex-column justify-content-between">
      <Header text="Galería de Imágenes con React" color="primary" />
      <div className="d-flex gap-4 card-container justify-content-center">
        <Card
          link="https://picsum.photos/400"
          titulo="Imagen random #1"
          descripcion="Internet nos ofrece un sin fin de imágenes."
          width="400"
        />
        <Card
          link="https://picsum.photos/500"
          titulo="Imagen random #2"
          descripcion="A que no adivinas lo que aparecerá luego de apretar el botón..."
          width="500"
        />
        <Card
          link="https://picsum.photos/600"
          titulo="Imagen random #3"
          descripcion="¿Que soy? Quizás un rascacielos, el mar, o un perro salchicha."
          width="600"
        />
        <Card
          link="https://picsum.photos/700"
          titulo="Imagen random #4"
          descripcion="¡Probablemente no vuelvas a ver esta imagen, guárdala!"
          width="700"
        />
      </div>
      <Footer />
    </section>
  );
};

export default App;
