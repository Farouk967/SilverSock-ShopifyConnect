import { useEffect, useState } from "react";
import { Page, Card, Button, Layout, Text, TextField, FormLayout, Image } from "@shopify/polaris";

export default function Index() {
  const [shopDomain, setShopDomain] = useState("");
  const [hookId, setHookId] = useState(""); // État pour le hookId
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  /*useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const shop = urlParams.get("shop");
      const code = urlParams.get("code");

      if (shop && code) {
        console.log("Shop:", shop);
        console.log("Code:", code);
      }
    }
  }, []);

  const handleInstallApp = () => {
    const apiKey = "b0413c05ff1d80b113668ff5bb203467";
    const redirectUri = `https://europe-west1-silver-smok-admin.cloudfunctions.net/getStoreCredentials`;

    if (!shopDomain) {
      setError("Please enter a valid shop domain.");
      return;
    }

    

    if (!hookId) {
      setError("Please enter a valid Hook ID.");
      return;
    }

    setError(null); 
    setIsLoading(true); 

    const installUrl = `https://${shopDomain}/admin/oauth/authorize?client_id=${apiKey}&redirect_uri=${redirectUri}&state=${hookId}`;
    
    try {
      window.open(installUrl, "_blank");
    } catch (error) {
      setError("An error occurred while redirecting to Shopify. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false); 
  };
  }*/
  return (
<h1> hello </h1>
  );
}