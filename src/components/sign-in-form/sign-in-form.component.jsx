import { 
    useState
 } from "react";

 import {signInWithGooglePopup, signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";

 import FormInput from "../form-input/form-input.component"
 import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'


 import { SignInContainer, SignInHeader, SingInButtons } from  './sign-in-form.styles'

const defaultFormfields= {
    email: '',
    password: '',
};


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormfields); 
    const { email, password,} = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormfields);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email,password);
            resetFormFields();
        } catch(error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('incorrect password');
                    break;
                case 'auth/user-not-found':
                    alert('email not registered');
                    break;
                default:
                    console.log(error);
            }
            
        }
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };



    const handleChange = (event) => {
        const{ name, value } = event.target;

        setFormFields({...formFields, [name]: value});
    }

    return(
        <SignInContainer>
            <SignInHeader>I already have an account?</SignInHeader>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>
                <FormInput label="Password"type="password" required onChange={handleChange} name="password" value={password}/>
                <SingInButtons>
                    <Button type='submit'> Sign in </Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}> Google sign</Button>
                </SingInButtons>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;