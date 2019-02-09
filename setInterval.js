class Clock {
  constructor() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();

    //option1
    const _tick = this._tick.bind(this)
    window.setInterval(_tick, 1000);

    //option2
    // window.setInterval(() => this._tick(), 1000);
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    if (this.seconds <= 58) {
      this.seconds = this.seconds + 1;
    } else if (this.minutes <= 58) {
      this.seconds = 0;
      this.minutes = this.minutes + 1;
    } else if (this.hours <= 23) {
      this.seconds = 0;
      this.minutes = 0;
      this.hours = this.hours + 1;
    } else {
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 1;
    }
    
    this.printTime();
  }
}