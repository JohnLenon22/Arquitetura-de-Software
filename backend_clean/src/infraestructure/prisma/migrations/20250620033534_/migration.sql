/*
  Warnings:

  - You are about to drop the column `idUsuarioMovimentacao` on the `MovimentacaoEstoque` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "MovimentacaoEstoque" DROP CONSTRAINT "MovimentacaoEstoque_idUsuarioMovimentacao_fkey";

-- AlterTable
ALTER TABLE "MovimentacaoEstoque" DROP COLUMN "idUsuarioMovimentacao";
