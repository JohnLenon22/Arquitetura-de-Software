/*
  Warnings:

  - You are about to drop the column `tipo` on the `MovimentacaoEstoque` table. All the data in the column will be lost.
  - Added the required column `tipoMovimentacao` to the `MovimentacaoEstoque` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MovimentacaoEstoque" DROP COLUMN "tipo",
ADD COLUMN     "tipoMovimentacao" "TipoMovimentacao" NOT NULL;
