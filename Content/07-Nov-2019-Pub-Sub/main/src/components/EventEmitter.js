export default class EventEmitter {
  constructor() {
    this.eventStorage = {};
  }

  // Subscribe event
  subscribe(eventName, subscriberName, cb) {
    eventName = eventName.toLowerCase();
    if (this.eventStorage[eventName]) {
      let existed = false;
      this.eventStorage[eventName].forEach(e => {
        // One subscriber can only subscribe one event
        if (e.subscriber === subscriberName) {
          existed = true;
        }
      });

      if (!existed) {
        this.eventStorage[eventName].push({
          subscriber: subscriberName,
          cb
        });
      }
    } else {
      this.eventStorage[eventName] = [
        {
          subscriber: subscriberName,
          cb
        }
      ];
    }

    return {
      getSubscriberName: () => subscriberName,
      getEventName: () => eventName,
      unSubscribe: () => {
        if (this.eventStorage[eventName]) {
          this.eventStorage[eventName] = this.eventStorage[eventName].filter(
            e => !(e.subscriber === subscriberName && e.cb === cb)
          );
        }
      }
    };
  }

  // Emit the given event name
  emit(eventName) {
    if (this.eventStorage[eventName]) {
      return this.eventStorage[eventName].map(e => e.cb());
    }
  }

  // Remove the given event name
  remove(eventName) {
    if (this.eventStorage[eventName]) {
      delete this.eventStorage[eventName];
    }
  }
}
