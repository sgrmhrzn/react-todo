import reactLogo from './../../assets/react.svg'
import './home.component.css'


function Home() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Welcome to TODO App</h1>
        <div className="card">

        </div>
      </div>
    </>
  )
}

export default Home
