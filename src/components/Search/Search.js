import React, {useContext, useState} from 'react';
import { AlertContext } from '../../Context/Alert/AlertContext';
import { GithubContext } from '../../Context/Github/GithubContext';

const Search = () => {
  
  const { show, hide } = useContext(AlertContext);
  const { search, clearUsers } = useContext(GithubContext)
  const [value, onChangeValue] = useState('');

  const onSubmit = event => {

    if (event.key !== 'Enter') {
      return
    }
    
    clearUsers()
    
    if (value.trim()) {
      hide()
      search(value.trim())
    } else {
      show('Imput can\'t be empty')
    }
  }

  return (
      <div className="form-group">
        <label htmlFor="searchGitHubUser">Search GitHub User</label>
        <input 
        type="text" 
        className="form-control" 
        placeholder="Enter user's nickname"
        value={value}
        onChange={event => onChangeValue(event.target.value)}
        onKeyPress={onSubmit}/>
        <small id="searchHelp" className="form-text text-muted">And maybe you will find somebody interesting.</small>
      </div>
  )
}

export default Search;