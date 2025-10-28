

import { create } from "zustand";
import { getAllMetrics } from "../utils/ApiFunctions";

export const useAppStore = create((set, get) => ({
    //state
    seuils: 0,
    incidents: 0,
    interventions: 0,
    stock: 0,


    //functions to modify data
    setSeuils: (newSeuil) => set({ seuils: newSeuil }),
    setIncidents: (newIncidents) => set({ incidents: newIncidents }),
    setInterventions: (newIntervention) => set({ interventions: newIntervention }),
    setStock: (newStock) => set({ stock: newStock }),

    // fetch the combined metrics from backend
    fetchAllMetrics: async (opts = {}) => {
        // opts: { url, signal, onError }
        try {
            const data = await getAllMetrics()
            // defensive: ensure numbers
            set({
                seuils: Number(data.seuils ?? 0),
                incidents: Number(data.incidents ?? 0),
                interventions: Number(data.interventions ?? 0),
                stock: Number(data.stock ?? 0),
            });
            console.log(data)
            return data;
        } catch (err) {
            console.error("fetchAllMetrics error:", err);
            throw err;
        }
    },

    // init: convenience wrapper to call once (returns promise)
    init: async (opts = {}) => {
        // avoids multiple simultaneous inits
        if (get().__initializing) return;
        set({ __initializing: true });
        try {
            await get().fetchAllMetrics(opts);
        } catch (err) {
            // swallow or rethrow depending on your needs
        } finally {
            set({ __initializing: false, __initialized: true });
        }
    },

}))