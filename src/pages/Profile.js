import React, { useEffect, useContext } from 'react';
import { GithubContext } from '../Context/Github/GithubContext';
import { Spinner } from '../components/Spinner/Spinner';
import { Link } from 'react-router-dom';
import { Repos } from '../components/Repos/Repos';

const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />
  }
  const { name, company, avatar_url, location, bio, blog, login, html_url, followers, public_repos, public_gists, following } = user;
  return (
    <>
      <Link to="/" className="btn btn-link text-dark text-decoration-none">Main</Link>

      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img src={avatar_url} alt={name} style={{ width: 150 }} />
              <h3>{name}</h3>
              {location && <p>location: {location}</p>}
            </div>
            <div className="col">
              {
                bio && <>
                  <h1>BIO</h1>
                  <p>{bio}</p>
                </>
              }
              <a href={html_url}
                className="btn btn-dark btn-sm mb-4"
                target="_blank"
                rel="noopener noreferrer">
                open profile
              </a>
              <ul>
                {
                  login && <li>
                    <strong>Username: </strong>{login}
                  </li>
                }
                {
                  company && <li>
                    <strong>Company: </strong>{company}
                  </li>
                }
                {
                  blog && <li>
                    <strong>Website: </strong>{blog}
                  </li>
                }
                <div className="badge badge-primary mr-2">Followers: {followers}</div>
                <div className="badge badge-success mr-2">Following: {following}</div>
                <div className="badge badge-info mr-2">Repositories: {public_repos}</div>
                <div className="badge badge-dark mr-2">Gists: {public_gists}</div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </>
  )
}

export default Profile;