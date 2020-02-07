import React, { useContext } from 'react';
import Search from '../components/Search/Search';
import Card from '../components/Card/Card';
import { GithubContext } from '../Context/Github/GithubContext';
import { Spinner } from '../components/Spinner/Spinner';

const Home = () => {

  const { loading, users } = useContext(GithubContext);

  return (
    <>
      <Search />
      {
        loading
          ? <Spinner />
          : <div className="row">
            {
              users.map(user => (
                <div className="col-sm-4 mb-4" key={user.id}>
                  <Card user={user} />
                </div>
              ))
            }
          </div>
      }
    </>
  )
}

export default Home;