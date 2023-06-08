import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.util';
import FormInput from '../formInput/formInput.component';
import { registerInput } from '../../constants/formAuthInput';
import {Button} from '../'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const removeFormField = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        return alert('passwords do not match');
      }
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      setFormFields(defaultFormFields);
      removeFormField();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('error creating the user', error.message);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="flex flex-col shadow-lg w-[50%] rounded-xl p-10 gap-5 ">
      <h1 className="text-center text-xl font-semibold">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        {registerInput.map(({ id, type, name, placeHolder }) => {
          return (
            <FormInput
              key={id}
              type={type}
              name={name}
              value={eval(name)}
              placeHolderLabel={placeHolder}
              onChange={handleChange}
            />
          );
        })}
        <Button variant={'normal'}>Register</Button>
      </form>
    </div>
  );
};

export default SignUp;
