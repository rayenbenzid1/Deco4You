export class Produit {
    constructor(
        public id: number,
        public nom: string,
        public description: string,
        public marque: string,
        public prix: number,
        public quantite: number,
        public image: string
    ) {}
}