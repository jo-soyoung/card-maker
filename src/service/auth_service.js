import firebase from 'firebase';

// 앱에서 유저가 로그인/로그아웃을 하는 이런 authenticaiton과 관련된 일을 하는 class
class AuthService {
  login(providerName) {
    //아래에 왜 []을 쓰고 ``을 넣는거지?
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
