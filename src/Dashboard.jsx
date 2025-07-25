import { useState } from 'react'
import { FaRegSmile } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import maintexts from './texts/maintexts'
import languageOptions from './texts/language'
import './dashboard.css'

// images lain
import mainBackground from './images/mainBackground.png';
import logo from './images/logoWhite.png';

export default function Dashboard() {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'id');

  const handleLangChange = (e) => {
    setLang(e.target.value);
    localStorage.setItem('lang', e.target.value);
  };

  const appname = maintexts[lang].appname
  const mainbutton = maintexts[lang].mainbutton

  return (
    <div className="dashboard-container">
      {/* Baris 1 */}
      <div className="dashboard-header"  style={{
                backgroundImage: `url(${mainBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}>
        <img
          src={logo}
          alt="Peacemaking App Logo"
          className="dashboard-logo">
        </img>
        <h2>{appname}</h2>
        {/* Dropdown Language */}
        <select
          className={"dashboard-language-dropdown"}
          value={lang}
          onChange={handleLangChange}
        >
          {Object.keys(languageOptions).map(code => (
            <option key={code} value={code}>
              {languageOptions[code]}
            </option>
          ))}
        </select>
      </div>
      {/* Baris 2 */}
      <div className="dashboard-actions">
        <Link to="/choosetopic" className="dashboard-btn dashboard-btn-full">
          {mainbutton}
        </Link>
      </div>
    </div>
  )
}