export interface KakaoLocation {
  getLat: () => number;
  getLng: () => number;
}

export interface KakaoMapRef {
  getCenter: () => KakaoLocation;
}

export type KakaoMapEventTypes = "idle";

export declare namespace kakao.maps {
  export interface KakaoMapOptions {
    center: LatLng;
    level: number;
  }

  export class Marker {
    constructor(options: MarkerOptions);
  }

  export interface MarkerOptions {
    map: any;
    position: LatLng;
  }

  export interface SetLevelOptions {
    anchor?: LatLng;
    animate?:
      | boolean
      | {
          duration?: number;
        };
  }
  export class LatLng {
    constructor(lat: number, lng: number);

    getLat(): number;
    getLng(): number;
  }

  export class Map {
    constructor(element: HTMLElement, options: KakaoMapOptions);

    // center
    getCenter(): LatLng;
    setCenter(latLng: LatLng): void;

    // level
    setLevel(level: number, options?: SetLevelOptions): void;
    getLevel(): number;

    locPosition(lat: number, lon: number): LatLng;
  }

  export class event {
    public static addListener(
      map: Map,
      event: KakaoMapEventTypes,
      listner: () => void
    ): void;
    public static removeListener(
      map: Map,
      event: KakaoMapEventTypes,
      listner: () => void
    ): void;
  }

  export interface InfoWindowOptions {}

  export class InfoWindow {
    constructor(options: InfoWindowOptions);

    open(map: any, marker: Marker): void;
  }
}
