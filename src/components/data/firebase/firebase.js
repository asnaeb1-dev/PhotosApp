import { ResponseType } from "../../utils/Models/Response";
import { firebaseApp } from "./firebaseConfig";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
const auth = getAuth();

export const authenticateUsingGoogle = async () => {
    const provider = new GoogleAuthProvider();
    let authResponse;
    try {
        const response = await signInWithPopup(auth, provider);
        const credentials = GoogleAuthProvider.credentialFromResult(response);
        const token = credentials.accessToken;
        const userInfo = response.user;
        authResponse = new Response(ResponseType.SUCCESS,{ token, userInfo })
    }catch (e) {
        authResponse = new Response(ResponseType.ERROR, e)
    }
    return authResponse;
}