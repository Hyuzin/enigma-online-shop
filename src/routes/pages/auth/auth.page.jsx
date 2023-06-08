import { SignIn, SignUp } from '../../../components';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../../utils/firebase/firebase.util';
const Auth = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="pt-16 flex max-w-6xl mx-auto gap-5 h-screen items-center">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
