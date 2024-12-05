const SHOPDATA = {
    'waste': {
        title: 'Amas de déchets',
        icon: '/logos/blood-vessel.png',
        co2PerSecond: 1,
        desc: `Accumulation de déchets plastiques dans les océans, affectant la faune marine`,
        basePrice: 100
    },
    'acidification': {
        title: 'Acidification des Océans',
        icon: '/logos/acid.png',
        co2PerSecond: 50,
        desc: `Augmentation du CO2 dans l'eau, nuisant aux coraux et aux coquillages`,
        basePrice: 5_000
    },
    'overfishing': {
        title: 'Surpêche',
        icon: '/logos/fishing.png',
        co2PerSecond: 500,
        desc: `Épuisement des stocks de poissons, perturbant les écosystèmes marins`,
        basePrice: 100_000
    },
    'oilspill': {
        title: 'Marées Noires',
        icon: '/logos/oil.png',
        co2PerSecond: 10_000,
        desc: `Déversement de pétrole brut dans les océans, affectant la faune et la flore`,
        basePrice: 10_000_000
    },
    'coralbleaching': {
        title: 'Blanchissement des Coraux',
        icon: '/logos/coral.png',
        co2PerSecond: 200_000,
        desc: `Augmentation de la température de l'eau, détruisant les coraux et les habitats marins que ces derniers permettent`,
        basePrice: 5_000_000_000
    },
    'invasion': {
        title: 'Invasion d\'espèces',
        icon: '/logos/invasion.png',
        co2PerSecond: 1000_000,
        desc: `Introduction d'espèces non indigènes qui perturbent l'équilibre écologique.`,
        basePrice: BigInt('5_000_000_000_000')
    },
    'eutrophication': {
        title: 'Eutrophisation',
        icon: '/logos/algae.png',
        co2PerSecond: 1000_000_000,
        desc: `Surabondance de nutriments dans l'eau, provoquant des algues nuisibles et des zones mortes.`,
        basePrice: BigInt('10_000_000_000_000_000')
    }
};

export default SHOPDATA;