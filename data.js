function savetoDb(data, sucess, failure) {
  let internet_speed = Math.floor(Math.random() * 10) + 1;

  if (internet_speed < 4) {
    sucess();
  } else {
    failure();
  }
}

savetoDb(
  "Hello",
  () => {
    console.log("Data was saved 1");
    savetoDb(
      "Hello again",
      () => {
        console.log("Data was saved 2");
        savetoDb(
          "Hello again & again ",
          () => {
            console.log("Data was saved 3");
          },
          () => {
            console.log("Failed: weak connection 3");
          }
        );
      },
      () => {
        console.log("Failed: weak connection 2");
      }
    );
  },
  () => {
    console.log("Failed: weak connection");
  }
);
// Example of Javascript Call Hell!!