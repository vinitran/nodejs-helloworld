const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require("./routes/route");
// const Web3 = require('web3');
// const ABI = require('./contractData/abi.json');
// const contractAddr = require("./contractData/address.json");
// const web3 = new Web3('wss://ws-nd-736-330-285.p2pify.com/f03e93f8c3e2ca5148a4c1d666feaffb');
// const contract = new web3.eth.Contract(ABI.abi, contractAddr.address);


require('dotenv').config()

const sequelize = require('./database/database');
sequelize.authenticate().then(() => {
  console.log('Database connected...');
}).catch(err => {
  console.log('Error: ' + err);
});

// const handlerSmartContractData = () => {
//   let options = {
//     filter: {
//       value: []    //Only get events where transfer value was 1000 or 1337
//     },
//     fromBlock: 23973154,                  //Number || "earliest" || "pending" || "latest"
//     toBlock: 'latest'
//   };

//   contract.events.Stake(options)
//   .on('data', event => console.log(event.returnValues))
//   .on('changed', changed => console.log(changed))
//   .on('error', err => console.log ('error', err.message, err.stack))
//   .on('connected', str => console.log(str))
// }

// handlerSmartContractData();
const app = express();

const init_swagger = () => {
  const expressSwagger = require('express-swagger-generator')(app);

  let options = {
    explorer: true,
    swaggerDefinition: {
      info: {
        description: 'RESTFULL API',
        title: 'RESTFULL API',
        version: '1.0',
      },
      host: "localhost:5000",
      basePath: '/api',
      produces: [
        "application/json",
        "application/xml"
      ],
      schemes: ['http', 'https'],
      securityDefinitions: {
        JWT: {
          type: 'apiKey',
          in: 'headers',
          name: 'authorization',
          description: ""
        }
      }
    },
    basedir: __dirname,
    files: ['./routes/route.js']
  };
  expressSwagger(options);
};

init_swagger();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors("*"));
router(app);

const SV_PORT = process.env.SV_PORT;
sequelize.sync().then(() => {
  app.listen(SV_PORT, console.log(`Server started on port ${SV_PORT}`));
}).catch(err => console.log("Error: " + err));