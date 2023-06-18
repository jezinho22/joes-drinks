
export default function Menu({showMenu,handleShowMenu}) {
  return (
    <div className={`menu ${showMenu}`} onClick={()=>handleShowMenu("menu-close")}>
        <ul>
            <a href="#" ><li>About alcohol</li></a>
            <a href="#" ><li>About this app</li></a>
            <a href="#" ><li>View drinks</li></a>
            <a href="#" ><li>Add drinks</li></a>
        </ul>
    </div>
  )
}
