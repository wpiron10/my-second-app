import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Header title="The Job Board" />
      <div className="container">
        <div className="wrapper">
          <div>
            <Content
              jobtitle="Full time sales associate"
              contractType="CDI"
              country="Australie"
              city="Sydney"
              color=""
            />
          </div>

          <div>
            <Content
              jobtitle="Agent de Sécurité - Pantin"
              contractType="CDI"
              country="France"
              city="Pantin"
            />
          </div>
          <div>
            <Content
              jobtitle="Responsable d'Atelier (H/F)"
              contractType="CDD"
              country="France"
              city="Paris"
            />
          </div>
          <div>
            <Content
              jobtitle="Chef de Projets"
              contractType="CDD"
              country="France"
              city="Paris"
            />
          </div>
          <div>
            <Content
              jobtitle="Développeur React.js"
              contractType="CDI"
              country="France"
              city="Paris"
            />
          </div>
          <div>
            <Content
              jobtitle="Sales Associate Stockholm"
              contractType="CDI"
              country="Suède"
              city="Stockholm"
            />
          </div>
          <div>
            <Content
              jobtitle="Vendeur/se - Crans Montana"
              contractType="CDI"
              country="Suisse"
              city="Crans-Montana"
            />
          </div>
          <div>
            <Content
              jobtitle="CRM & Data Quality Analyst"
              contractType="CDI"
              country="USA"
              city="New-York"
            />
          </div>
          <div>
            <Content
              jobtitle="Infirmier (H/F)
              "
              contractType="CDI"
              country="France"
              city="Pantin"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
