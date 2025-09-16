-- CreateTable
CREATE TABLE "public"."Deal" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(18,2) NOT NULL,
    "ticket" DECIMAL(18,2) NOT NULL,
    "yieldPercent" DOUBLE PRECISION NOT NULL,
    "daysLeft" INTEGER NOT NULL,
    "soldPercent" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Deal_pkey" PRIMARY KEY ("id")
);
