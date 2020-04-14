// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

const IoTHubTokenCredentials = require('azure-iot-digitaltwins-service').IoTHubTokenCredentials;
const DigitalTwinServiceClient = require('azure-iot-digitaltwins-service').DigitalTwinServiceClient;

const deviceId = '<DEVICE_ID_GOES_HERE>';
const componentName = '<INTERFACE_INSTANCE_NAME_GOES_HERE>'; // for the environmental sensor, try "environmentalSensor"

// Simple example of how to:
// - create a Digital Twin Service Client using the DigitalTwinServiceClient constructor
// - get a single Digital Twin Component by name
async function main() {
  // IoT Hub connection string has to be set to system environment variable IOTHUB_CONNECTION_STRING
  // Twin enabled device must be exist on the IoT Hub


  // Create service client
  const credentials = new IoTHubTokenCredentials(process.env.IOTHUB_CONNECTION_STRING);
  const digitalTwinServiceClient = new DigitalTwinServiceClient(credentials);

  console.log('getting ' + componentName + ' on device ' + deviceId + '...');
  // Get component by name
  const partialDigitalTwin = await digitalTwinServiceClient.getDigitalTwinComponent(deviceId, componentName);

  // Print the component
  console.log(JSON.stringify(partialDigitalTwin.interfaces, null, 2));
};

main();
