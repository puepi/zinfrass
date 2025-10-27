

import { create } from "zustand";

export const useAppStore = create((set) => ({
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
}))