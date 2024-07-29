export class TwoWayMap<T, K> {

    private map: Map<T, K>;
    private reverseMap: Map<K, T>;

    constructor(map: Map<T, K>) {
        this.map = map;
        this.reverseMap = new Map<K, T>();
        map.forEach((value, key) => {
            this.reverseMap.set(value, key);
        });
    }

    public get(key: T) {
        return this.map.get(key);
    }

    public revGet(key: K) {
        return this.reverseMap.get(key);
    }

}