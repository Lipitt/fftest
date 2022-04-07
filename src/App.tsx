import axios from "axios";
import React from "react";
// import StatusMonitor from "./components/StatusMonitor";

import "./App.css";

function App() {
  // const [requestTimeout, setRequestTimeout] = useState(true);
  // const [assetsData, setAssetsData] = useState("");
  // const [accountsData, setAccountsData] = useState("");
  // const [customersData, setCustomersData] = useState("");
  // const [dataPoints, setDataPoints] = useState("");
  // const [devices, setDevices] = useState();
  // const [documents, setDocuments] = useState();
  // const [forms, setForms] = useState();
  // const [invites, setInvites] = useState();
  // const [media, setMedia] = useState();
  // const [messages, setMessages] = useState();
  // const [namespaces, setNamespaces] = useState();
  // const [orders, setOrders] = useState();
  // const [patients, setPatients] = useState();
  // const [relationships, setRelationships] = useState();
  // const [rules, setRules] = useState();
  // const [teamplates, setTeamplates] = useState();
  // const [users, setUsers] = useState();
  // const [workflows, setWorkflows] = useState();

  // const timerInterval = 15000;

  // useEffect(() => {
  //   if (requestTimeout) {
  //     fetchDataFromAPI();
  //     timer();
  //   }
  //   setRequestTimeout(false);
  // }, [requestTimeout]);

  // const fetchDataFromAPI = () => {
  //   const setEndpoint = (endpoint: string) => {
  //     return `https://api.factoryfour.com/${endpoint}/health/status`;
  //   };

  //   // const accountsEndpoint = `https://api.factoryfour.com/accounts/health/status`;
  //   // const customersEndpoint = `https://api.factoryfour.com/customers/health/status`;
  //   // const assetsEndpont = `https://api.factoryfour.com/customers/health/status`

  //   console.log(setEndpoint("accounts"));
  // const accountsEndpoint = setEndpoint("accounts");
  // const assetsEndpoint = setEndpoint("assets");
  // const customersEndpoint = setEndpoint("customers");
  // const datapointsEndpoint = setEndpoint("datapoints");
  // const devicesEndpoint = setEndpoint("devices");
  // const documentsEndpoint = setEndpoint("documents");
  // const formsEndpoint = setEndpoint("forms");
  // const invitesEndpoint = setEndpoint("invites");
  // const mediaEndpoint = setEndpoint("media");
  // const messagesEndpoint = setEndpoint("messages");
  // const namespacesEndpoint = setEndpoint("namespaces");
  // const ordersEndpoint = setEndpoint("orders");
  // const patientsEndpoint = setEndpoint("patients");
  // const relationshipsEndpoint = setEndpoint("relationships");
  // const rulesEndpoint = setEndpoint("accounts");
  // const templatesEndpoint = setEndpoint("accounts");
  // const usersEndpoint = setEndpoint("accounts");
  // const workflowsEndpoint = setEndpoint("accounts");

  // const accountsRes = axios.get(setEndpoint("accounts"));
  // const assetsRes = axios.get(assetsEndpoint);
  // const customersRes = axios.get(customersEndpoint);
  // const datapointsRes = axios.get(datapointsEndpoint);
  // const devicesRes = axios.get(devicesEndpoint);
  // const documentsRes = axios.get(documentsEndpoint);
  // const formsRes = axios.get(formsEndpoint);
  //const invitesRes = axios.get(invitesEndpoint);
  //const mediaRes = axios.get(mediaEndpoint);
  // const messagesRes = axios.get(messagesEndpoint);
  // const namespacesRes = axios.get(namespacesEndpoint);
  // const ordersRes = axios.get(ordersEndpoint);
  // const patientsRes = axios.get(patientsEndpoint);
  // const relationshipsRes = axios.get(relationshipsEndpoint);
  // const rulesRes = axios.get(rulesEndpoint);
  // const templatesRes = axios.get(templatesEndpoint);
  // const usersRes = axios.get(usersEndpoint);
  // const workflowsRes = axios.get(workflowsEndpoint);

  //   axios.all([accountsRes, customersRes]).then(
  //     axios.spread((...allData) => {
  //       setAccountsData(allData[0].data);
  //       setCustomersData(allData[1].data);
  //     })
  //   );
  // };

  // const timer = () => {
  //   setTimeout(() => {
  //     setRequestTimeout(true);
  //   }, timerInterval);
  // };

  const fetchtest = () => {
    const setEndpoint = (endpoint: string) => {
      return `https://api.factoryfour.com/${endpoint}/health/status`;
    };

    // const accountsEndpoint = `https://api.factoryfour.com/accounts/health/status`;
    // const customersEndpoint = `https://api.factoryfour.com/customers/health/status`;
    // const assetsEndpont = `https://api.factoryfour.com/customers/health/status`

    console.log("testapi");
    const accountsEndpoint = setEndpoint("accounts");
    const assetsEndpoint = setEndpoint("assets");
    const customersEndpoint = setEndpoint("customers");
    const datapointsEndpoint = setEndpoint("datapoints");
    const devicesEndpoint = setEndpoint("devices");
    const documentsEndpoint = setEndpoint("documents");
    const formsEndpoint = setEndpoint("forms");
    const invitesEndpoint = setEndpoint("invites");
    const mediaEndpoint = setEndpoint("media");
    const messagesEndpoint = setEndpoint("messages");
    const namespacesEndpoint = setEndpoint("namespaces");
    const ordersEndpoint = setEndpoint("orders");
    const patientsEndpoint = setEndpoint("patients");
    const relationshipsEndpoint = setEndpoint("relationships");
    const rulesEndpoint = setEndpoint("accounts");
    const templatesEndpoint = setEndpoint("accounts");
    const usersEndpoint = setEndpoint("accounts");
    const workflowsEndpoint = setEndpoint("accounts");

    const accountsRes = axios.get(accountsEndpoint);
    const assetsRes = axios.get(assetsEndpoint);
    const customersRes = axios.get(customersEndpoint);
    const datapointsRes = axios.get(datapointsEndpoint);
    const devicesRes = axios.get(devicesEndpoint);
    const documentsRes = axios.get(documentsEndpoint);
    const formsRes = axios.get(formsEndpoint);
    const invitesRes = axios.get(invitesEndpoint);
    const mediaRes = axios.get(mediaEndpoint);

    const messagesRes = axios.get(messagesEndpoint);
    const namespacesRes = axios.get(namespacesEndpoint);
    const ordersRes = axios.get(ordersEndpoint);
    const patientsRes = axios.get(patientsEndpoint);
    const relationshipsRes = axios.get(relationshipsEndpoint);
    const rulesRes = axios.get(rulesEndpoint);
    const templatesRes = axios.get(templatesEndpoint);
    const usersRes = axios.get(usersEndpoint);
    const workflowsRes = axios.get(workflowsEndpoint);

    console.log(messagesRes);
    console.log(namespacesRes);
    console.log(relationshipsRes);
    console.log(templatesRes);
    console.log(workflowsRes);
    console.log(accountsRes);
    console.log(assetsRes);
    console.log(customersRes);
    console.log(datapointsRes);
    console.log(devicesRes);
    console.log(documentsRes);
    console.log(ordersRes);
    console.log(patientsRes);
    console.log(formsRes);
    console.log(invitesRes);
    console.log(mediaRes);
    console.log(usersRes);
    console.log(rulesRes);
  };

  return (
    <div className="App">
      <button onClick={fetchtest}>test api</button>
      {/* <StatusMonitor name="Accounts" apiData={accountsData} />
      <StatusMonitor name="Customers" apiData={customersData} /> */}
    </div>
  );
}

export default App;
