import React from 'react'

const login = (props) => {
	return(
		<form onSubmit={props.handleSubmit.bind(this)}>
          <label>Nama</label>
          <input type="text" className="form-control" name="nama" onChange={props.handleChange.bind(this)}/>
          <label>Password</label>
          <input type="password" className="form-control" name="password" onChange={props.handleChange.bind(this)} />
          <button type="submit" className="btn btn-primary"> submit </button>
        </form>
		)
}

export default login