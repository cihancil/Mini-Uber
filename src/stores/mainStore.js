import { observable, computed, action } from 'mobx';
import Firebase from '../services/firebase';

class MainStore {

  @observable _drivers = []

  @computed get drivers() {
    return this._drivers.slice();
  }

  @action fetchDrivers() {
    return new Promise((resolve, reject) => {
      Firebase.Database.ref("/drivers").once("value")
        .then(snapshot => {
          let fetchedDrivers = snapshot.val().filter(driver => {
            return driver !== undefined
          });
          this._drivers = fetchedDrivers;
          resolve();
        })
        .catch(err => reject(err))
    })
  }
}

const store = new MainStore();
export default store;