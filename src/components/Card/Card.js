import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ user }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={user.avatar_url} alt={user.login} />
      <div className="card-body">
        <h5 className="card-title">{user.login}</h5>
        <Link to={'/profile/' + user.login} className="btn btn-dark">Open</Link>
      </div>
    </div>
  )
}

export default Card;