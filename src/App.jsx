import Card from "./Card"

function App() {

// title style
const title={
  color:'blue',
  background:'#ffffff'
  ,padding:'10px'
}


  return (
    <div style={{textAlign:"center"}}>
      <h1 style={title}>digital tasbih</h1>

<Card/>
<Card/>
<Card/>


    </div>
  )
}

export default App
