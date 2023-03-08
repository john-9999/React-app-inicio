import './App.css'

function App() {

  return (
    <div className="App">
      
      <center><div><h2 className='titulo-inicio'>Alimentación App</h2></div></center>
      <center><div><p className='p-inicio-d'>Alimentación App es una aplicación diseñada para ayudarte a llevar un registro detallado de los alimentos que consumes a lo largo del día. Con esta herramienta, puedes registrar fácilmente los alimentos que consumes, las porciones y otros nutrientes importantes. Además, muchas de estas aplicaciones también te permiten establecer metas de consumo diario de nutrientes y realizar un seguimiento de tu progreso a lo largo del tiempo. En resumen, Alimentación App es una herramienta útil para controlar tu ingesta diaria de alimentos y mejorar tu salud en general.</p></div></center>
      
      <p className="p-ini">
        Click en el logo o botón que quieras para registrar tu alimentación!
      </p>
      <div>
        <a href="https://john-9999.github.io/app-react.js/">
          <img src="https://img.icons8.com/fluency/48/null/cherry-cheesecake.png" className="logo" alt="Vite logo" /><center>
            <button className='r-temporal'>Registro Rápido</button>
            
            </center>
        </a>
        <center><p className='p-r-temporal'>No se guardará tu registro, solo para anotaciones o controles diarios rápidos.</p></center>
        <a href="https://john-9999.github.io/REACT-APP-Ls/">
          <img src="https://img.icons8.com/fluency/48/null/salad.png"  className="logo react" alt="React logo" /><center>
            <button className='r-completo'>Registro Completo</button>
            
            </center>
        </a>
        <center><p className='p-r-completo'>Se guardará tu registro completo.</p></center>
      </div>

      <div className="card">
        <p>
        <h4 className='devby'>Desarrollado por <a target="_blank" href="https://linktr.ee/juanperez_2">Juan Manuel Perez</a></h4>
        </p>
      </div>
      

    </div>
  )
}

export default App
