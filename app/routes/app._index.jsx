import { useEffect, useState } from "react";
import { Page, Card, Button, Layout, Text, TextField, FormLayout, Image } from "@shopify/polaris";

export default function Index() {
  const [shopDomain, setShopDomain] = useState("");
  const [hookId, setHookId] = useState(""); // État pour le hookId
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
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
  }
  return (
    <Page title="Connect Your Shopify Store">
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <Image
                source="app/routes/_index/silver_stock_logo.jpg"
                alt="Silver Stock Logo"
                width={150}
              />
            </div>
            <FormLayout>
              <Text
                variant="headingLg"
                as="h1"
                style={{
                  textAlign: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#5c6ac4",
                  marginBottom: "20px",
                }}
              >
                Enter Your Shopify Domain and Hook ID
              </Text>
              <TextField
                label="Shop Domain"
                value={shopDomain}
                onChange={(value) => setShopDomain(value)}
                placeholder="e.g., my-shop.myshopify.com"
                autoComplete="off"
                error={error && error.includes("shop domain") ? error : null}
                style={{
                  border: "2px solid #5c6ac4",
                  borderRadius: "8px",
                  padding: "10px",
                  fontSize: "16px",
                }}
              />
              <TextField
                label="Hook ID"
                value={hookId}
                onChange={(value) => setHookId(value)}
                placeholder="Enter your Hook ID"
                autoComplete="off"
                error={error && error.includes("Hook ID") ? error : null}
                style={{
                  border: "2px solid #5c6ac4",
                  borderRadius: "8px",
                  padding: "10px",
                  fontSize: "16px",
                }}
              />
              <Button
                primary
                onClick={handleInstallApp}
                loading={isLoading}
                disabled={!shopDomain || !hookId || isLoading}
                fullWidth
                style={{
                  backgroundColor: "#5c6ac4",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  padding: "10px",
                }}
              >
                Connect Your Shop To Silver Stock
              </Button>
              {error && (
                <Text
                  variant="bodyMd"
                  as="p"
                  style={{
                    color: "red",
                    textAlign: "center",
                    marginTop: "10px",
                    fontWeight: "bold",
                  }}
                >
                  {error}
                </Text>
              )}
            </FormLayout>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}