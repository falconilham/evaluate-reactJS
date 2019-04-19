import React from 'react'

const loginOtp = () => {
	return(
<form onSubmit={this.handleSubmit.bind(this)}>
          <label>Nama</label>
          <input type="text" className="form-control" name="nama" onChange={this.handleChange.bind(this)}/>
          <label>Password</label>
          <input type="password" className="form-control" name="password" onChange={this.handleChange.bind(this)} />
          <button type="submit" className="btn btn-primary"> submit </button>
        </form>
        )
}
export default loginOtp