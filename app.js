//Create variable to use the csvtojson & file system modules
const csvToJSON = require("csvtojson");
const FileSystem = require("fs");

// Use asynchronous function to prevent writing file before csv file
// is read and converted to JSON
// json variable stores converted data from foreclosures.csv file as an object
// json variable containing object is turned into a string via and
// written to a new file named foreclosures.json

async function convert() {
  try {
    const json = await csvToJSON().fromFile("./foreclosures.csv");
    FileSystem.writeFileSync("./foreclosures.json", JSON.stringify(json));
    console.log("file written successfully");
  } catch (error) {
    console.error("error during conversion", error);
  }
}

convert();
