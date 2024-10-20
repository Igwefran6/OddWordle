import SecureLocalStorage from "../src/utils/SecureLocalStorage";

function testStore() {
  SecureLocalStorage.saveData("user", "{name: 'max', age: 20}");
}

function testRetrieve() {
  SecureLocalStorage.retrieveData("user");
}

export { testStore, testRetrieve };
