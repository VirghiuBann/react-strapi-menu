import sublinks from '../data'
import { useGlobalContext } from './../Context'

const NavLinks = () => {
  const { setPageId } = useGlobalContext()
  return (
    <div className='nav-links'>
      {sublinks.map(({ pageId, page }) => {
        return (
          <button
            key={pageId}
            className='nav-link'
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        )
      })}
    </div>
  )
}

export default NavLinks
