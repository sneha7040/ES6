const pob = new Promise((resolve, reject) => {
  setTimeout(() => {
    let roll_No = [1, 2, 3, 4, 5];
    resolve(roll_No);
  }, 2000);
});

const getBiodata = (indexData) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (indexData) => {
        let Biodata = {
          name: "sneha mondal",
          age: "22",
        };
        resolve(
          `my name is ${Biodata.name} and I am ${Biodata.age} years old.`
        );
      },
      2000,
      indexData
    );
  });
};

// pob.then((rollNo)=>{
//   console.log(rollNo);
//   return getBiodata(rollNo[1]);
// }).then((anything)=>{
// console.log(anything);
// }).catch((error)=>{
//   console.log(error);
// })
async function getData() {
  try {
    const rollNoData = await pob;
    console.log(rollNoData);

    const bioDatas = await getBiodata(rollNoData[1]);
    console.log(bioDatas);

    return bioDatas;
  } catch (error) {
    console.log(`the error:${error}`);
  }
}
const getName = getData().then((myname) => {
  console.log(myname);
});
