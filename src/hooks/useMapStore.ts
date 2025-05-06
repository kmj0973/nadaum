import { create } from "zustand";
import { persist } from "zustand/middleware";

type MapState = {
  type: string;
  location: string;
  exercise: string;
  lat: number;
  lng: number;
  setLat: (lat: number) => void;
  setLng: (lng: number) => void;
  setType: (type: string) => void;
  setLocation: (location: string) => void;
  setExercise: (exercise: string) => void;
};

export const useMapStore = create<MapState>()(
  persist(
    (set) => ({
      type: "공공체육시설",
      location: "강남구",
      exercise: "풋살장",
      lat: 37.566535,
      lng: 126.977969,
      setLat: (lat: number) => set({ lat }),
      setLng: (lng: number) => set({ lng }),
      setType: (type) => set({ type }),
      setLocation: (location) => set({ location }),
      setExercise: (exercise) => set({ exercise }),
    }),
    {
      name: "map-store", // localStorage 키 이름
    }
  )
);
