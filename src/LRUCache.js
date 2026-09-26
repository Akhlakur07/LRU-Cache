export class LRUCache {
  constructor(capacity) {
    if (!Number.isInteger(capacity) || capacity <= 0) {
      throw new Error("Capacity must be a positive integer.");
    }

    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }

    const value = this.cache.get(key);

    // Move this key to the most-recently-used position.
    this.cache.delete(key);
    this.cache.set(key, value);

    return value;
  }

  put(key, value) {
    // Existing key: remove first so re-adding moves it to most recent.
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }

    this.cache.set(key, value);

    // First key in a Map is the least recently used.
    if (this.cache.size > this.capacity) {
      const leastRecentlyUsedKey = this.cache.keys().next().value;
      this.cache.delete(leastRecentlyUsedKey);
    }
  }

  entries() {
    return [...this.cache.entries()];
  }
}