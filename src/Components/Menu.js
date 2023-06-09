
export default function Menu({showMenu,handleShowMenu, handleShowForm}) {
  return (
    <div className={`menu ${showMenu}`} onClick={()=>handleShowMenu("menu-close")}>
        <ul>
            <a href="#about-app" ><li>About this app</li></a>            
            <a href="#about-alcohol" ><li>About alcohol</li></a>
            <a href="#drink-cards" ><li>View drinks</li></a>
            <a href="#" onClick={handleShowForm}><li>Add drinks</li></a>
        </ul>
    </div>
  )
}
