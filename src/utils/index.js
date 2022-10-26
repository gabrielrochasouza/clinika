export const compareTimePassedSinceLastLogin = () => {
  if (localStorage.getItem("@ultimoLogin")) {
    const lastLogin = Number(localStorage.getItem("@ultimoLogin"));
    const now = new Date().valueOf();
    const hours = 47;
    const seconds = (now - lastLogin) / 1000;
    if (seconds > hours * 3600) {
      localStorage.clear();
    }
  }
};

export const getTodayDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const dateObj = {
    day,
    month,
    year,
    hour,
    minutes,
    nowDateTime: `${day}-${month}-${year} ${hour}:${minutes}`,
    nowDate: `${day}-${month}-${year}`,
  };
  return dateObj;
};

export const timePassed = (initialHour, finalHour) => {
  const [initialHours, initialMinutes] = initialHour.split(":");
  const [finalHours, finalMinutes] = finalHour.split(":");
  const date = new Date();
  const nowHour = date.getHours();
  const nowMinutes = date.getMinutes();

  if (nowHour > finalHours) {
    return "passed";
  } else if (nowHour == finalHours) {
    if (nowMinutes > finalMinutes) return "passed";
  }

  if (nowHour < initialHours) {
    return "will-pass";
  } else if (nowHour == initialHours) {
    if (nowMinutes < initialMinutes) return "will-pass";
  }
  return "happening";
};
//passed
//will-pass
//happening

export const getPorcentXRelationY = (x, y) => {
  return ((x / y) * 100).toFixed(4);
};

export const tranforTimeInMinutes = (time) => {
  const result = time.split(":");
  return Number(result[0]) * 60 + Number(result[1]);
};
