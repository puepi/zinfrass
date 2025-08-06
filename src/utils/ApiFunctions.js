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

export async function addBatiment(batiment) {
    const formData = new FormData();
    formData.append("nom", batiment.nom);
    formData.append("nature", batiment.nature);
    formData.append("retrocede", batiment.retrocede);
    formData.append("dateRetrocession", batiment.dateRetrocession);
    formData.append("description", batiment.description);
    formData.append("subdivisionId", Number.parseInt(batiment.subdivisionId));
    try {
        const plainObject = Object.fromEntries(formData.entries())
        console.log(JSON.stringify(plainObject))
        const response = await api.post("/batiments/add", JSON.stringify(plainObject), {
            headers: { "Content-Type": 'application/json' }
        })
        return response.data.data
    } catch (error) {
        // console.log(error.message)
        throw error
    }
}


export async function getSubdivisions(subdivisionName) {
    try {
        const parameters = {}
        parameters.name = subdivisionName
        const response = await api.get("/subdivisions/get-name", { params: parameters })
        // const response = await api.get("/batiments/getall")
        return response.data.data
    } catch (error) {
        console.log(error.message)
        throw error
    }
}


export async function addFournisseur(fournisseur) {
    const formData = new FormData();
    formData.append("nom", fournisseur.nom)
    formData.append("representant", fournisseur.representant)
    formData.append("type", fournisseur.type)
    formData.append("adresse", fournisseur.adresse)
    formData.append("contact", fournisseur.contact)
    formData.append("email", fournisseur.email)
    formData.append("niu", fournisseur.niu)
    try {
        const plainObject = Object.fromEntries(formData.entries())
        console.log(JSON.stringify(plainObject))
        const response = await api.post("/fournisseurs/add", JSON.stringify(plainObject), {
            headers: { "Content-Type": 'application/json' }
        })
        return response.data.data
    } catch (error) {
        // console.log(error.message)
        throw error
    }
}

export async function getAllFournisseurs() {
    try {
        const response = await api.get("/fournisseurs/getall")
        // const response = await api.get("/batiments/getall")
        return response.data.data
    } catch (error) {
        console.log(error.message)
        throw error
    }
}

export async function addCategorie(categorie) {
    const formData = new FormData()
    formData.append('nom', categorie.nom)
    try {
        const plainObject = Object.fromEntries(formData.entries())
        console.log(JSON.stringify(plainObject))
        const response = await api.post("/categories/add", JSON.stringify(plainObject), {
            headers: { "Content-Type": 'application/json' }
        })
        return response.data.data
    } catch (error) {
        console.log(error)
    }
}

export async function getAllCategories() {
    try {
        const response = await api.get("/categories/getall")
        // const response = await api.get("/batiments/getall")
        return response.data.data
    } catch (error) {
        console.log(error.message)
        throw error
    }
}

export async function addTypeEquipement(typeEquipement) {
    const formData = new FormData()
    formData.append("nom", typeEquipement.nom)
    formData.append("caracteristiques", typeEquipement.caracteristiques)
    formData.append("categoryId", Number.parseInt(typeEquipement.categorieId))
    formData.append("abreviation", typeEquipement.abreviation)
    try {
        const plainObject = Object.fromEntries(formData.entries())
        console.log(JSON.stringify(plainObject))
        const response = await api.post('/types-equipement/add', JSON.stringify(plainObject), {
            headers: { 'Content-Type': 'application/json' }
        })
        return response.data.data
    } catch (error) {
        console.log(error)
    }
}


export async function getAllTypesEquipement() {
    try {
        const response = await api.get('/types-equipement/getall')
        return response.data.data
    } catch (error) {
        console.log(error.message)
        throw error
    }
}

export async function addSubdivision(subdivision) {
    const formData = new FormData()
    formData.append("nom", subdivision.nom)
    formData.append("type", subdivision.type)
    formData.append("parentId", Number.parseInt(subdivision.parentId))
    try {
        const plainObject = Object.fromEntries(formData.entries())
        console.log(JSON.stringify(plainObject))
        const response = await api.post('/subdivisions/add', JSON.stringify(plainObject), {
            headers: { 'Content-Type': 'application/json' }
        })
        return response.data.data
    } catch (error) {
        console.log(error)
    }
}

export async function getAllSubdivisions() {
    try {
        const response = await api.get('/subdivisions/getall')
        return response.data.data
    } catch (error) {
        console.log(error.message)
        throw error
    }
}



export async function addEspace(espace) {
    const formData = new FormData()
    formData.append("nom", espace.nom)
    formData.append("type", subdivision.type)
    formData.append("parentId", Number.parseInt(subdivision.parentId))
    try {
        const plainObject = Object.fromEntries(formData.entries())
        console.log(JSON.stringify(plainObject))
        const response = await api.post('/subdivisions/add', JSON.stringify(plainObject), {
            headers: { 'Content-Type': 'application/json' }
        })
        return response.data.data
    } catch (error) {
        console.log(error)
    }
}

export async function getAllSubdivisions() {
    try {
        const response = await api.get('/subdivisions/getall')
        return response.data.data
    } catch (error) {
        console.log(error.message)
        throw error
    }
}

