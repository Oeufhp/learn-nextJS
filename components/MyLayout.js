import Header from './Header'

const layoutStyle = {
  margin: 20, 
  padding: 20,
  border: '1px solid #1a9085'
}

const Layout = (props) => {
  return <div style={layoutStyle}>
            <Header/>
            {props.children}
          </div>
}

export default Layout