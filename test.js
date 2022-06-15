firebase.auth().onAuthStateChanged(function(user)
{
  if (user)
  {

    var userID = firebase.auth().currentUser.uid;

    firebase.database().ref('Users/' + userID).once('value').then(function(snapshot)
    {
      if (snapshot.val())
      {
        window.location.href = "index";

      }
      else
      {
        window.location.href = "index";
      }
    });

  }
});
