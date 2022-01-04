const Header = ({ title }) => {
  
    return (
        <header>
            <h1>{title} List</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Default Title"
}

export default Header
