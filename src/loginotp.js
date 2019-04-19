import React from 'react'

const loginOtp = (props) => {
	return(
		<form onSubmit={props.handleSubmitotp.bind(this)}>
          <label>Otp Code</label>
          <input type="text" className="form-control" name="otp" onChange={props.handleChange.bind(this)}/>
          <button type="submit" className="btn btn-primary"> submit </button>
        </form>
        )
}
export default loginOtp