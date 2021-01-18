import { Component } from 'react';
import { connect } from 'react-redux';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { auth, signInWithGoogle }from '../../firebase/firebase.utils';
import { googleSignInStart } from '../../redux/user/user-actions'; 

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
} from './sign-in.styles';

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(
                email,
                password
            )
            this.setState({email: '', password: ''});
            
        } catch (error) {
            console.log('error')
        }

    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value})
    }

    render() {
        const { googleSignInStart } = this.props;
        return(
            <SignInContainer>
                <SignInTitle>I already had an account</SignInTitle>  
                <span>Sign in with your email and password</span>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput 
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        label='Email'
                        value={this.state.email}
                        required />

                    <FormInput 
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        label='Password'
                        value={this.state.password} 
                        required />
                    <ButtonsBarContainer>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton type='button' onClick={ googleSignInStart } isGoogleSignIn >Sign in with google</CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(null, mapDispatchToProps)(SignIn);