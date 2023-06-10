import { SignIn, SignUp } from '../../../components';

const Auth = () => {
  return (
    <div className="flex gap-5 items-center h-screen mx-auto w-full max-w-5xl">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
