// Grouping data By object values

const items = [
    { year: "2023", id: 0 },
    { year: "2023", id: 1 },
    { year: "2024", id: 2 },
];

const grouped = Object.groupBy(items, el => el.year);
console.log(grouped);
