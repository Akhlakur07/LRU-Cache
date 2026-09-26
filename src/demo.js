import { LRUCache } from "./LRUCache.js";

const cache = new LRUCache(2);

cache.put("A", 10);
console.log('put("A", 10) → cache:', cache.entries());

cache.put("B", 20);
console.log('put("B", 20) → cache:', cache.entries());

console.log('get("A") →', cache.get("A"));

cache.put("C", 30);
console.log('put("C", 30) → cache:', cache.entries());
console.log('LRU eviction: "B" was removed');

console.log('get("B") →', cache.get("B"));
console.log('get("C") →', cache.get("C"));
console.log('get("A") →', cache.get("A"));