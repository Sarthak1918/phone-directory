import './header.css'
function Header(props) {
  return (
    <div>
      <header className="header">{props.title}</header>
    </div>
  );
}

export default Header;
