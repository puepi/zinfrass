import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080"
})

export async function getBatiments(subdivisionName) {
    try {
        const parameters = {}
        parameters.name = subdivisionName
        const response = await api.get("/batiments/subdivision-name", { params: parameters })
        // const response = await api.get("/batiments/getall")
        return response.data.data
    } catch (error) {
        console.log(error.message)
        throw error
    }
}

export async function addFactures(facture) {
    const formData = new FormData();
    formData.append("type", facture.type);
    formData.append("numeroFacture", facture.numFacture);
    formData.append("numéroCompteur", facture.numCompteur);
    formData.append("debut", facture.debut);
    formData.append("fin", facture.fin);
    formData.append("consommation", Number.parseInt(facture.consommation));
    formData.append("montant", Number.parseInt(facture.montant));
    formData.append("ancienIndex", Number.parseInt(facture.oldIndex));
    formData.append("nouvelIndex", Number.parseInt(facture.newIndex));
    formData.append("batimentId", Number.parseInt(facture.batimentId));
    try {
        const plainObject = Object.fromEntries(formData.entries())
        console.log(JSON.stringify(plainObject))
        const response = await api.post("/factures/add", JSON.stringify(plainObject), {
            headers: { "Content-Type": 'application/json' }
        })
        return response.data.data
    } catch (error) {
        // console.log(error.message)
        throw error
    }
}

