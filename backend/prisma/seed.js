"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    await prisma.deal.createMany({
        data: [
            {
                name: 'The Marina Torch',
                price: 6_500_000,
                ticket: 60_000,
                yieldPercent: 9.25,
                daysLeft: 150,
                soldPercent: 75,
                imageUrl: '/static/deals/deal1.png',
            },
            {
                name: 'HHHR Tower',
                price: 6_500_000,
                ticket: 60_000,
                yieldPercent: 9.25,
                daysLeft: 150,
                soldPercent: 75,
                imageUrl: '/static/deals/deal2.png',
            },
            {
                name: 'Ocean peaks',
                price: 6_500_000,
                ticket: 60_000,
                yieldPercent: 9.25,
                daysLeft: 150,
                soldPercent: 75,
                imageUrl: '/static/deals/deal3.png',
            },
            {
                name: 'Al Yaqoub Tower',
                price: 6_500_000,
                ticket: 60_000,
                yieldPercent: 9.25,
                daysLeft: 150,
                soldPercent: 75,
                imageUrl: '/static/deals/deal4.png',
            },
        ],
        skipDuplicates: true,
    });
}
main().finally(() => prisma.$disconnect());
//# sourceMappingURL=seed.js.map