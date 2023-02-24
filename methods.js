function insert() {
  var noteId = document.getElementById("noteId").value;
  var key = document.getElementById("key").value;
  var des = document.getElementById("des").value;

  // validation
  if (key.length < 3 || des.length == 0 || noteId.length < 10) {
    alert(
      "'Note Id' are required\n\n'Key' must be greater then 3\n\nFill the note's..."
    );
    return 0;
  }

  if (1) {
    firebase
      .database()
      .ref("users/" + noteId + "/register")
      .once("value", function (snapshot) {
        var count = snapshot.numChildren();
        if (count == 0) {
          firebase
            .database()
            .ref("users/" + noteId + "/register")
            .set({
              noteId: noteId,
              key: key,
              des: des,
            });
          alert("success");
        } else {
          alert("Note Id already registered");
        }
      });
  }
}
//---------updating
function update() {
  var noteId = document.getElementById("noteId").value;
  var key = document.getElementById("key").value;
  var des = document.getElementById("des").value;

  // validation
  if (key.length < 3 || des.length == 0 || noteId.length < 10) {
    alert("'Note Id' are required\n\n'Key' must be greater then 3");
    return 0;
  }
  if (1) {
    firebase
      .database()
      .ref("users/" + noteId + "/register")
      .once("value", function (snapshot) {
        var count = snapshot.numChildren();
        if (count != 0) {
          var getKey = snapshot.val().key;
          if (getKey == key) {
            var check = confirm("Do you want to Update your note's");
            if (check) {
              firebase
                .database()
                .ref("users/" + noteId + "/register")
                .update({
                  des: des,
                });
              alert("success");
            }
          } else {
            alert("key is wrong");
          }
        } else {
          alert("Note Id not register");
        }
      });
  }
}
//---------deleting
function delet() {
  var noteId = document.getElementById("noteId").value;
  var key = document.getElementById("key").value;

  // validation
  if (key.length < 3 || des.length == 0 || noteId.length < 10) {
    alert("'Note Id' are required\n\n'Key' must be greater then 3");
    return 0;
  }

  if (1) {
    firebase
      .database()
      .ref("users/" + noteId + "/register")
      .once("value", function (snapshot) {
        var count = snapshot.numChildren();
        if (count != 0) {
          var getKey = snapshot.val().key;
          if (getKey == key) {
            var check = confirm("Do you want to delete Note Id ?");
            if (check) {
              firebase
                .database()
                .ref("users/" + noteId)
                .remove();
              alert("successful delete");
            }
          } else {
            alert("Key wrong");
          }
        } else {
          alert("Note Id not register");
        }
      });
  }
}
//---------reading
function read() {
  var noteId = document.getElementById("noteId").value;
  var key = document.getElementById("key").value;

  // validation
  if (noteId.length < 10 && key.length == 0) {
    alert("'Note Id' are required\n\n'Public Key' must be greater then 3");
    return 0;
  }

  if (1) {
    firebase
      .database()
      .ref("users/" + noteId + "/register")
      .once("value", function (snapshot) {
        var count = snapshot.numChildren();
        if (count != 0) {
          var getKey = snapshot.val().key;
          if (getKey == key) {
            var getDes = snapshot.val().des;
            var description = getDes.replaceAll("\n", "<br/>");

            document.write("<h4>Description : </h4><br>" + description);
          } else {
            alert("'key' wrong");
          }
        } else {
          alert("Note Id not register");
        }
      });
  }
}
//--------refresh
function refresh() {
  window.location.reload();
}
