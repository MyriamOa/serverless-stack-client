const config = {
    STRIPE_KEY: "pk_test_51ICVLeLId1inZYIw6JPBpiE4QdQPWbLLCIHTtSSz1JEED1wdx1CgSSe9ryWxKrQvh7tPNkqQ1EOGk7Ye6MpB7Mz400WuSmOMZd",
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "ca-central-1",
      BUCKET: "notes-app-uploas-files",
    },
    apiGateway: {
      REGION: "ca-central-1",
      URL: "https://vgzbtuq903.execute-api.ca-central-1.amazonaws.com/prod",
    },
    cognito: {
      REGION: "ca-central-1",
      USER_POOL_ID: "ca-central-1_4yDVzSq7i",
      APP_CLIENT_ID: "1nnvle07q8c35ib429rd38cbrt",
      IDENTITY_POOL_ID: "ca-central-1:6c030f8b-409f-44af-847f-cdb7db7f2f04",
    },
  };
  
  export default config;