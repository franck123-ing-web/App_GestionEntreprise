const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");
const sequelize = require("./db");

const Enterprise = require("./models/Enterprise");
const Establishment = require("./models/Establishment");
const Branch = require("./models/Branch");
const Activity = require("./models/Activity");
const Address = require("./models/Address");
const Contact = require("./models/Contact");
const Denomination = require("./models/Denomination");
const Code = require("./models/Code");
const Meta = require("./models/meta");

async function importCSVStreaming(model, filePath, mapFn, batchSize = 500) {
  return new Promise((resolve, reject) => {
    const batch = [];
    let count = 0;

    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", async (row) => {
        batch.push(mapFn(row));
        if (batch.length >= batchSize) {
          await model.bulkCreate(batch, { ignoreDuplicates: true });
          count += batch.length;
          batch.length = 0;
          console.log(`Inserted ${count} rows in ${model.name}`);
        }
      })
      .on("end", async () => {
        if (batch.length > 0) {
          await model.bulkCreate(batch, { ignoreDuplicates: true });
          count += batch.length;
        }
        console.log(`✔ Finished ${model.name}: ${count} rows inserted`);
        resolve();
      })
      .on("error", reject);
  });
}

function fixDate(v) {
  return v && v !== "" ? v : null;
}

async function loadAllCSV() {
  try {
    await sequelize.sync({ alter: true });
    console.log("Database synced");

    await importCSVStreaming(
      Enterprise,
      path.join(__dirname, "CSV/enterprise.csv"),
      (r) => ({
        EnterpriseNumber: r.EnterpriseNumber,
        Status: r.Status,
        JuridicalSituation: r.JuridicalSituation,
        TypeOfEnterprise: r.TypeOfEnterprise,
        JuridicalForm: r.JuridicalForm,
        JuridicalFormCAC: r.JuridicalFormCAC,
        StartDate: fixDate(r.StartDate),
      })
    );

    await importCSVStreaming(
      Establishment,
      path.join(__dirname, "CSV/establishment.csv"),
      (r) => ({
        EstablishmentNumber: r.EstablishmentNumber,
        StartDate: fixDate(r.StartDate),
        EnterpriseNumber: r.EnterpriseNumber,
      })
    );

    console.log("✔ All CSV imported successfully");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

loadAllCSV();
