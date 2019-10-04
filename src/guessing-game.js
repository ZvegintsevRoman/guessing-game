class GuessingGame {
  constructor() {}

  setRange(min, max) {
    this._min = min;
    this._max = max;  
  }

  guess() {
    this._current = Math.ceil((this._max + this._min) / 2);
    return this._current;
  }

  lower() {
    this._max = this._current;
  }

  greater() {
    this._min = this._current;
  }
}

module.exports = GuessingGame;
