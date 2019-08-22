import React from 'react';
import './Register.css';

class Register extends React.Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  onNameChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  onEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };

  onPasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  onSubmitRegister = () => {
    //console.log(this.state);
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onChangeRoute('home');
        }
      });
  };

  render() {
    //const { onChangeRoute } = this.props;

    return (
      <div>
        <main className='ph6 pa4 black-80  dib shadow-5'>
          <div className='measure center'>
            <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
              <legend className='f2 fw6 ph0 mh0'>Register</legend>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                  Name
                </label>
                <input
                  className='pa2 input-reset ba bg-transparent hover-bg-black hover-white'
                  type='name'
                  name='name'
                  id='name'
                  onChange={this.onNameChange}
                />
              </div>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                  Email
                </label>
                <input
                  className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='email'
                  name='email-address'
                  id='email-address'
                  onChange={this.onEmailChange}
                />
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6' htmlFor='password'>
                  Password
                </label>
                <input
                  className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                  type='password'
                  name='password'
                  id='password'
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className=''>
              <input
                className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                type='submit'
                value='Register'
                onClick={this.onSubmitRegister}
              />
            </div>
            <div className='lh-copy mt3'>
              {/* <a href="#0" className="f6 link dim black db b">Register</a> */}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Register;
