import { useState } from 'react';
import { loginInput } from '../../constants/formAuthInput';
import FormInput from '../formInput/formInput.component';
import {Button} from '../'

const defaultFormFields = {
  email: '',
  password: '',
};
const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  console.log(formFields)

  const handleSubmit = () => {
    console.log('login');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="flex flex-col shadow-lg w-[50%] rounded-xl p-10 gap-5 ">
      <h1 className="text-center text-xl font-semibold">Login</h1>
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
        <div className='flex flex-row gap-3'>
          <Button variant={'normal'}>Login</Button>
          <Button variant={'google'}>Login with Google</Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
