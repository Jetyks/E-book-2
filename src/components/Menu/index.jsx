import './index.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import logo from '../../assets/img/bb-logo.png'
import homeIcon2 from '../../assets/img/homepage.png'
import homeIcon2White from '../../assets/img/homepage-white.png'
import settingsIcon from '../../assets/img/settings.png'
import settingsIconWhite from '../../assets/img/settings-white.png'
import bookMark from '../../assets/img/bookmark-2.png'
import bookMarkWhite from '../../assets/img/bookmark-2-white.png'
import { NavCircleItem } from '../NavCircleItem'

function Menu () {
  const location = useLocation()
  const [selectedIcon, setIsSelectedIcon] = useState('')
  const handleIconClick = (iconNumber) => {
    setIsSelectedIcon(iconNumber)
  }
  const [icons, setIcons] = useState({
    home: homeIcon2,
    bookmark: bookMark,
    settings: settingsIcon
  })

  useEffect(() => {
    // Este efecto se ejecuta cada vez que 'selected' cambie.
    switch (location.pathname) {
      case '/':
        setIcons({
          home: homeIcon2White, // Cambiar a blanco
          bookmark: bookMark,
          settings: settingsIcon
        })
        setIsSelectedIcon('icon1')
        break
      case '/my-books':
        setIcons({
          home: homeIcon2,
          bookmark: bookMarkWhite, // Cambiar a blanco
          settings: settingsIcon
        })
        setIsSelectedIcon('icon2')
        break
      case '/settings':
        setIcons({
          home: homeIcon2,
          bookmark: bookMark,
          settings: settingsIconWhite // Cambiar a blanco
        })
        setIsSelectedIcon('icon3')
        break
      default:
        setIcons({
          home: homeIcon2,
          bookmark: bookMark,
          settings: settingsIcon
        })
        break
    }
    // Aquí podrías realizar otras acciones como aplicar estilos, hacer fetch a una API, etc.
  }, [selectedIcon])

  const navigate = useNavigate()
  const handleClickLogo = () => {
    navigate('/')
    setIcons({
      home: homeIcon2White,
      bookmark: bookMark,
      settings: settingsIcon
    })
    setIsSelectedIcon('icon1')
  }

  return (
        <nav>
            <div className="menu-container">
                <div className='logo-container'>
                    <img className='logo-png' src= {logo}
                     alt="logo-byte-books"
                     onClick={() => handleClickLogo()} />
                </div>
                <div className='nav-items-container'>
                    <div className='nav-items'>
                    <Link to="/" onClick= {() => handleIconClick('icon1')}>
                            <NavCircleItem
                             icon={icons.home}
                             altText="Home Icon"
                             isSelected={selectedIcon === 'icon1'}
                              />
                        </Link>
                        <Link to="my-books" onClick= {() => handleIconClick('icon2')}>
                            <NavCircleItem
                             icon={icons.bookmark}
                             altText="Saved Icon"
                             isSelected={selectedIcon === 'icon2'}
                             />
                        </Link>
                        <Link to="settings" onClick= {() => handleIconClick('icon3')}>
                            <NavCircleItem
                             icon={icons.settings}
                             altText="Settings Icon"
                             isSelected={selectedIcon === 'icon3'}
                             />
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
  )
}

export { Menu }
