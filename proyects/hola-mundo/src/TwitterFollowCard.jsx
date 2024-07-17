import { Children } from "react";
import { useState } from "react";
export function TwitterFollowCard ({userName,children,initialIsFollowing}) {
  // el estado inicializado solo se inicializa una sola vez 
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
  // desestructura con los [] y en la pos 0 esta el uso de la variable y en 
  //la pos 1 esta es set de la variable  lo inicializo como false 
  const text = isFollowing ? 'Siguiendo': 'Seguir'
  // esto es un if de manera reducida (evalua isFollowing)
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }
    return(
        <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          alt='El avatar de midudev'
          src={`https://unavatar.io/${userName}`}
        />
        <div className='tw-followCard-info'>
          <strong>{children}</strong>
          <span className='tw-followCard-infoUserName'>{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName}  onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
    )
}