import { signInWithGooglePopup,createUserDocumentFromAuth } from '../../../utils/firebase/firebase.util';
const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  };
  return (
    <div className='pt-20'>
      <button onClick={logGoogleUser}>SignIn Google</button>
    </div>
  )
};

export default SignIn;
