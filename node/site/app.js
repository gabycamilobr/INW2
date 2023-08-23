const firebaseConfig = {
    apiKey: "AIzaSyAdunaouKbQ0umppu5qH_CCdWZAUItsFMY",
    authDomain: "projeto2mibteste-f81d8.firebaseapp.com",
    projectId: "projeto2mibteste-f81d8",
    storageBucket: "projeto2mibteste-f81d8.appspot.com",
    messagingSenderId: "1028313760392",
    appId: "1:1028313760392:web:c2835bbe9cee2ab6e0953d"
  };

  firebase.initializeApp(firebaseConfig);
  //não escreve esse codigo

  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');
  const loginButton = document.getElementById('loginButton');

  loginButton.addEventListener('click', () => {
   const email = emailField.value;
   const password = passwordField.value;

   firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Usuário logado com sucesso
        const user = userCredential.user;
        console.log('Usuário logado:', user);
    })
    .catch((error) => {
        // Tratar erros de autenticação
        const errorMessage = error.message;
        console.error('Erro de autenticação:', errorMessage);
    });
    });