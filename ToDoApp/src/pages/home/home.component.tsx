import { AuthenticatedTemplate, useMsal } from '@azure/msal-react';
import reactLogo from './../../assets/react.svg'
import './home.component.css'


function Home() {
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();

  return (
    <>
      <AuthenticatedTemplate>
        {
          activeAccount ?
            <div style={{ textAlign: 'center' }}>
              <div>
                <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div>
              <h1 id="welcome-text" data-testid="welcome-text">Welcome to TODO App</h1>
              <div className="card">
                {/* <IdTokenData idTokenClaims={activeAccount.idTokenClaims} /> */}
              </div>
            </div>

            :
            null
        }
      </AuthenticatedTemplate>


    </>
  )
}

export default Home
