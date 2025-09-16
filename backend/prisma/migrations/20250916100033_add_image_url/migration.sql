/*
  Warnings:

  - Added the required column `imageUrl` to the `Deal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Deal" ADD COLUMN     "imageUrl" TEXT NOT NULL;
