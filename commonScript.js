function setAllowedAccess(user, access) {
  const userAccess = user.accessCode.map((element) => {
    return element.toLowerCase();
  });

  const res = userAccess.map((element) => {
    return access.includes(`${element.toLocaleLowerCase()}`);
  });

  return res.find((element) => element === true);
}
