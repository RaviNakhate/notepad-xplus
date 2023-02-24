import "./conn.js";
import "firebase/database";
import {
  getDatabase,
  ref,
  onValue,
  set,
  get,
  update,
  remove,
} from "firebase/database";

// INSERT
const insert = (noteId, key, des) => {
  // validation
  if (key.length < 3 || des.length == 0 || noteId.length < 10) {
    alert(
      "'Note Id' are required\n\n'Key' must be greater then 3\n\nFill the note's..."
    );
    return 0;
  }

  // process
  const database = getDatabase();
  const databaseRef = ref(database, `users/${noteId}/register`);

  const newData = {
    noteId: noteId,
    key: key,
    des: des,
  };
  set(databaseRef, newData)
    .then(() => {
      alert("success");
    })
    .catch((error) => {
      alert("Note Id already registered");
    });
};

// UPDATE
const updat = (noteId, key, des) => {
  // validation
  if (key.length < 3 || des.length == 0 || noteId.length < 10) {
    alert(
      "'Note Id' are required\n\n'Key' must be greater then 3\n\nFill the note's..."
    );
    return 0;
  }

  // process
  const database = getDatabase();
  const databaseRef = ref(database, `users/${noteId}/register`);

  const newData = {
    des: des,
  };

  get(databaseRef).then((snapshot) => {
    const data = snapshot.val();
    if (data == null) {
      alert("Note Id not register");
      return 0;
    }
    if (data.key === key) {
      update(databaseRef, newData);
      alert("success");
    } else {
      alert("key is wrong");
    }
  });
};

// DELETE
const delet = (noteId, key) => {
  // validation
  if (key.length < 3 || noteId.length < 10) {
    alert("'Note Id' are required\n\n'Key' must be greater then 3");
    return 0;
  }

  // process
  const database = getDatabase();
  const databaseRef = ref(database, `users/${noteId}/register`);

  get(databaseRef).then((snapshot) => {
    const data = snapshot.val();

    if (data == null) {
      alert("Note Id not register");
      return 0;
    }
    if (data.key === key) {
      remove(databaseRef);
      alert("successful delete");
    } else {
      alert("key is wrong");
    }
  });
};

// READ
const read = (noteId, key) => {
  // validation
  if (noteId.length < 10 && key.length == 0) {
    alert("'Note Id' are required\n\n'Public Key' must be greater then 3");
    return 0;
  }

  // process
  const database = getDatabase();
  const databaseRef = ref(database, `users/${noteId}/register`);

  onValue(databaseRef, (snapshot) => {
    const data = snapshot.val();

    if (data == null) {
      alert("Note Id not register");
      return 0;
    }
    if (data.key === key) {
      var des = data.des.replaceAll("\n", "<br/>");
      document.write("<h4>Description : </h4><br>" + des);
    } else {
      alert("key is wrong");
    }
  });
};

export { insert, read, updat, delet };
