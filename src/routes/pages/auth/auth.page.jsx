import { SignIn, SignUp } from '../../../components';

const Auth = () => {
  return (
    <div className="pt-16 flex max-w-6xl mx-auto gap-5 h-screen items-center">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
