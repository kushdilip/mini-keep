import StorageArray from 'ember-local-storage/local/array';

const Storage = StorageArray.extend();

// Model
// text
// deleted
// done
// due_date


// Uncomment if you would like to set initialState
Storage.reopenClass({
  initialState() {
    return [
      {
        id: 1,
        title: 'task 1',
        text: 'Do the task',
        done: false,
        deleted: false,
        due_date: "2016-04-03T11:32:41+05:30",
        due_time: "2016-04-01T11:32:41+05:30"
      }
    ];
  }
});

export default Storage;