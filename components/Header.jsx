
const Header = (props) => {
  
/* props are used to pass data from parent to child component */
  return(<header>
      <h1>{props.title}</h1>
  </header>)
}

export default Header;