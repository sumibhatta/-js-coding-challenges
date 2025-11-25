function deepAccess() {
  function getCity(user) {
    return user?.address?.current?.city || "Unknown";
  }

  const user1 = {
    address: {
      current: {
        city: "Kathmandu",
      },
      previous: {
        city: "Pokhara",
      },
    },
  };
  const user2 = {
    address: {
      previous: {
        city: "Pokhara",
      },
    },
  };

  return {
    user1: getCity(user1),
    user2: getCity(user2),
  };
}

function run() {
  return JSON.stringify(deepAccess());
}
console.log(deepAccess());
