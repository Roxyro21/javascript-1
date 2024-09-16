function checkAccess(role) {
  if (role === "admin") {
    return true;
  } else if (role === "user") {
    return true;
  } else if (role === "can comment") {
    return true;
  } else if (role === "viewer") {
    return true;
  } else {
    return false;
  }
}
 console.log(checkAccess('editor'));
 console.log(checkAccess("can comment"));
 console.log(checkAccess("guest"));
 console.log(checkAccess("user"));
 