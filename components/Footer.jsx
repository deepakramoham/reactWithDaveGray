
const Footer = () =>{

  const date = new Date();
  return(<footer>
    <p>copyright &copy; {date.getFullYear()} </p>
  </footer>)
}

export default Footer;