import axios from "axios";
import React, { useEffect, useState } from "react";
import StatusMonitor from "./components/StatusMonitor";

import "./App.css";

function App() {
  const [requestTimeout, setRequestTimeout] = useState(true);
  const [assetsData, setAssetsData] = useState("");
  const [accountsData, setAccountsData] = useState("");
  const [customersData, setCustomersData] = useState("");
  const [datapointsData, setDatapointsData] = useState("");
  const [devicesData, setDevicesData] = useState();
  const [documentsData, setDocumentsData] = useState();
  const [formsData, setFormsData] = useState();
  const [invitesData, setInvitesData] = useState();
  const [mediaData, setMediaData] = useState();
  const [messagesData, setMessagesData] = useState();
  const [namespacesData, setNamespacesData] = useState();
  const [ordersData, setOrdersData] = useState();
  const [patientsData, setPatientsData] = useState();
  const [relationshipsData, setRelationshipsData] = useState();
  const [rulesData, setRulesData] = useState();
  const [templatesData, setTemplatesData] = useState();
  const [usersData, setUsersData] = useState();
  const [workflowsData, setWorkflowsData] = useState();

  const timerInterval = 15000;

  useEffect(() => {
    if (requestTimeout) {
      fetchDataFromAPI();
      timer();
    }
    setRequestTimeout(false);
  }, [requestTimeout]);

  const fetchDataFromAPI = () => {
    const setEndpoint = (endpoint: string) => {
      return `https://api.factoryfour.com/${endpoint}/health/status`;
    };

    const accountsRes = axios.get(setEndpoint("accounts"));
    const assetsRes = axios.get(setEndpoint("assets"));
    const customersRes = axios.get(setEndpoint("customers"));
    const datapointsRes = axios.get(setEndpoint("datapoints"));
    const devicesRes = axios.get(setEndpoint("devices"));
    const documentsRes = axios.get(setEndpoint("documents"));
    const formsRes = axios.get(setEndpoint("forms"));
    const invitesRes = axios.get(setEndpoint("invites"));
    const mediaRes = axios.get(setEndpoint("media"));
    const messagesRes = axios.get(setEndpoint("messages"));
    const namespacesRes = axios.get(setEndpoint("namespaces"));
    const ordersRes = axios.get(setEndpoint("orders"));
    const patientsRes = axios.get(setEndpoint("patients"));
    const relationshipsRes = axios.get(setEndpoint("relationships"));
    const rulesRes = axios.get(setEndpoint("rules"));
    const templatesRes = axios.get(setEndpoint("templates"));
    const usersRes = axios.get(setEndpoint("users"));
    const workflowsRes = axios.get(setEndpoint("workflows"));

    axios
      .all([
        accountsRes,
        assetsRes,
        customersRes,
        datapointsRes,
        devicesRes,
        documentsRes,
        formsRes,
        invitesRes,
        mediaRes,
        messagesRes,
        namespacesRes,
        ordersRes,
        patientsRes,
        relationshipsRes,
        rulesRes,
        templatesRes,
        usersRes,
        workflowsRes,
      ])
      .then(
        axios.spread((...allData) => {
          setAccountsData(allData[0].data);
          setAssetsData(allData[1].data);
          setCustomersData(allData[2].data);
          setDatapointsData(allData[3].data);
          setDevicesData(allData[4].data);
          setDocumentsData(allData[5].data);
          setFormsData(allData[6].data);
          setInvitesData(allData[7].data);
          setMediaData(allData[8].data);
          setMessagesData(allData[9].data);
          setNamespacesData(allData[10].data);
          setOrdersData(allData[11].data);
          setPatientsData(allData[12].data);
          setRelationshipsData(allData[13].data);
          setRulesData(allData[14].data);
          setTemplatesData(allData[15].data);
          setUsersData(allData[16].data);
          setWorkflowsData(allData[17].data);
        })
      );
  };

  const timer = () => {
    setTimeout(() => {
      setRequestTimeout(true);
    }, timerInterval);
  };

  return (
    <div className="App">
      <StatusMonitor name="ACCOUNTS" apiData={accountsData} />
      <StatusMonitor name="ASSETS" apiData={assetsData} />
      <StatusMonitor name="CUSTOMERS" apiData={customersData} />
      <StatusMonitor name="DATAPOINTS" apiData={datapointsData} />
      <StatusMonitor name="DEVICES" apiData={devicesData} />
      <StatusMonitor name="DOCUMENTS" apiData={documentsData} />
      <StatusMonitor name="FORMS" apiData={formsData} />
      <StatusMonitor name="INVITES" apiData={invitesData} />
      <StatusMonitor name="MEDIA" apiData={mediaData} />
      <StatusMonitor name="MESSAGES" apiData={messagesData} />
      <StatusMonitor name="NAMESPACES" apiData={namespacesData} />
      <StatusMonitor name="ORDERS" apiData={ordersData} />
      <StatusMonitor name="PATIENTS" apiData={patientsData} />
      <StatusMonitor name="RELATIONSHIPS" apiData={relationshipsData} />
      <StatusMonitor name="RULES" apiData={rulesData} />
      <StatusMonitor name="TEMPLATES" apiData={templatesData} />
      <StatusMonitor name="USERS" apiData={usersData} />
      <StatusMonitor name="WORKFLOWS" apiData={workflowsData} />
    </div>
  );
}

export default App;
