import React from 'react';

class SignIn extends React.Component {
  state = {
    signInEmail: '',
    signInPassword: ''
  };

  onEmailChange = event => {
    this.setState({
      signInEmail: event.target.value
    });
  };

  onPasswordChange = event => {
    this.setState({
      signInPassword: event.target.value
    });
  };

  onSubmitSignin = () => {
    //console.log(this.state);
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => {
        return response.json();
      })
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onChangeRoute('home');
        }
      });
  };

  render() {
    return (
      <main className='ph6 pa4 black-80  dib shadow-5'>
        <div className='measure center'>
          <fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
            <legend className='f1 fw6 ph0 mh0'>Sign In</legend>
            <div className='mt3'>
              <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                Email
              </label>
              <input
                onChange={this.onEmailChange}
                className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                type='email'
                name='email-address'
                id='email-address'
              />
            </div>
            <div className='mv3'>
              <label className='db fw6 lh-copy f6' htmlFor='password'>
                Password
              </label>
              <input
                onChange={this.onPasswordChange}
                className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
                type='password'
                name='password'
                id='password'
              />
            </div>
          </fieldset>
          <div className=''>
            <input
              className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
              type='submit'
              value='Sign in'
              onClick={this.onSubmitSignin}
            />
          </div>
          <div className='lh-copy mt3'>
            <p
              onClick={() => this.props.onChangeRoute('register')}
              href='#0'
              className='f6 link dim black db b pointer'
            >
              Register
            </p>
          </div>
        </div>
      </main>
    );
  }
}
export default SignIn;
