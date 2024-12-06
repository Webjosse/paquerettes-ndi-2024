const SHOPDATA = {
    'waste': {
        title: 'Athérosclérose',
        title2: 'Amas de déchets',
        icon: '/logos/blood-vessel.png',
        co2PerSecond: 1,
        desc: `L'accumulation de déchets plastiques dans les océans affecte la vie marine dans son ensemble et sur la photosynthèse. **C'est un peu comme si les artères de l'océan étaient bouchées.**`,
        basePrice: 100
    },
    'hotBlood': {
        title: 'Hyperthermie',
        icon: '/logos/blood-hot.png',
        co2PerSecond: 50,
        desc: `**L'océan a le sang bouillonant, mais ce n'est pas dû à des sensations fortes.** L'augmentation de la température de l'eau a plusieurs effets: le blanchissement des coraux, la modification des courants, la réduction de l'oxygène dissous et l'expansion thermique affecte les écosystèmes.`,
        basePrice: 1_000
    },
    'overFishing': {
        title: 'Carences nutritives',
        icon: '/logos/no-fish.png',
        co2PerSecond: 500,
        desc: `**L'océan manque de nutriments**, et ce n'est pas seulement dû à la pêche clandestine. Les divers effets de la pollution sur les écosystèmes soumarins réduisent la population de plancton qui nourrit presque toute la chaine alimentaire !`,
        basePrice: 12_000
    },
    'oilspill': {
        title: 'Intoxication',
        icon: '/logos/oil-leak.png',
        co2PerSecond: 10_000,
        desc: `**L'océan est intoxiqué, le pétrole est impropre à la consommation.** Les marées noires affectent la faune et la flore marine et polluent l'eau.`,
        basePrice: 100_000
    },
    'coralbleaching': {
        title: 'Emphysème pulmonaire',
        icon: '/logos/no-coral.png',
        co2PerSecond: 200_000,
        desc: `**Les coraux sont les poumons de l'océan**. Ils génèrent de l'oxygène pour toute la planète, mais ils meurent petit à petit comme des alvéoles. C'est dû à la pollution, au réchauffement de l'eau et à certaines activités humaines`,
        basePrice: 9_000_000
    }
};

export default SHOPDATA;