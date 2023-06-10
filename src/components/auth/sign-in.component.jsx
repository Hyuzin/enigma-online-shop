import { useState } from 'react';
import { loginInput } from '../../constants/forms-auth-input';
import FormInput from '../formInput/formInput.component';
import { Button } from '../';
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.util';

const defaultFormFields = {
  email: '',
  password: '',
};
const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('user not found!');
          break;
        default:
          console.log(error.message);
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="flex flex-col shadow-lg w-[50%] rounded-xl p-10 gap-5 ">
      <h1 className="font-semibold text-center text-xl">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        {loginInput.map(({ id, type, name, placeHolder }) => {
          return (
            <FormInput
              key={id}
              type={type}
              name={name}
              value={formFields[name]}
              placeHolderLabel={placeHolder}
              onChange={handleChange}
            />
          );
        })}
        <div className="flex flex-row gap-3">
          <Button variant={'normal'} type="submit">
            Login
          </Button>
          <Button type="button" variant={'google'} onClick={signInWithGoogle}>
            Login with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
