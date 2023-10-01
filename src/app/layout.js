import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from './components/NavBar';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata = {
  title: 'NEXTJS',
  description: 'Powered by Laravel Backend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
          crossorigin></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin></script>

        <script>var Alert = ReactBootstrap.Alert;</script>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <NavBar />
        <Container className='p-3 mb-3'>
          {children}
        </Container>

        <Container>

        <footer className="p-3 bg-light">
          <div>
            <a href="https://coreui.io">Video Management System</a>
            {' '}
            <span>&copy; 2023 StreamDotMySolutions</span>
          </div>
          <div>
            <span>Powered by</span>
            {' '}
            <a href="https://coreui.io">NEXTJS - LARAVEL</a>
          </div>
        </footer>


        </Container>


      
      </body>
    </html>
  )
}
