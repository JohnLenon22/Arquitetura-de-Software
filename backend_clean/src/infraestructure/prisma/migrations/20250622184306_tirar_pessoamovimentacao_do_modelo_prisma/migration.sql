/*
  Warnings:

  - You are about to drop the column `idPessoa` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `idPessoa` to the `MovimentacaoEstoque` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MovimentacaoEstoque" DROP CONSTRAINT "MovimentacaoEstoque_idLocalArmazenamento_fkey";

-- DropForeignKey
ALTER TABLE "MovimentacaoEstoque" DROP CONSTRAINT "MovimentacaoEstoque_idProduto_fkey";

-- DropForeignKey
ALTER TABLE "MovimentacaoEstoque" DROP CONSTRAINT "MovimentacaoEstoque_idUsuario_fkey";

-- DropForeignKey
ALTER TABLE "PessoaMovimentacao" DROP CONSTRAINT "PessoaMovimentacao_idMovimentacao_fkey";

-- DropForeignKey
ALTER TABLE "PessoaMovimentacao" DROP CONSTRAINT "PessoaMovimentacao_idPessoa_fkey";

-- DropForeignKey
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_idCategoria_fkey";

-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_idPessoa_fkey";

-- DropIndex
DROP INDEX "Usuario_idPessoa_key";

-- AlterTable
ALTER TABLE "MovimentacaoEstoque" ADD COLUMN     "idPessoa" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "idPessoa";

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovimentacaoEstoque" ADD CONSTRAINT "MovimentacaoEstoque_idProduto_fkey" FOREIGN KEY ("idProduto") REFERENCES "Produto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovimentacaoEstoque" ADD CONSTRAINT "MovimentacaoEstoque_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovimentacaoEstoque" ADD CONSTRAINT "MovimentacaoEstoque_idPessoa_fkey" FOREIGN KEY ("idPessoa") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovimentacaoEstoque" ADD CONSTRAINT "MovimentacaoEstoque_idLocalArmazenamento_fkey" FOREIGN KEY ("idLocalArmazenamento") REFERENCES "LocalArmazenamento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PessoaMovimentacao" ADD CONSTRAINT "PessoaMovimentacao_idPessoa_fkey" FOREIGN KEY ("idPessoa") REFERENCES "Pessoa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PessoaMovimentacao" ADD CONSTRAINT "PessoaMovimentacao_idMovimentacao_fkey" FOREIGN KEY ("idMovimentacao") REFERENCES "MovimentacaoEstoque"("id") ON DELETE CASCADE ON UPDATE CASCADE;
