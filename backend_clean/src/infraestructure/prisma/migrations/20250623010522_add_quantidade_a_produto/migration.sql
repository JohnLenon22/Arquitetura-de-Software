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

-- AlterTable
ALTER TABLE "Produto" ADD COLUMN     "quantidade" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovimentacaoEstoque" ADD CONSTRAINT "MovimentacaoEstoque_idProduto_fkey" FOREIGN KEY ("idProduto") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovimentacaoEstoque" ADD CONSTRAINT "MovimentacaoEstoque_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovimentacaoEstoque" ADD CONSTRAINT "MovimentacaoEstoque_idLocalArmazenamento_fkey" FOREIGN KEY ("idLocalArmazenamento") REFERENCES "LocalArmazenamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PessoaMovimentacao" ADD CONSTRAINT "PessoaMovimentacao_idPessoa_fkey" FOREIGN KEY ("idPessoa") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PessoaMovimentacao" ADD CONSTRAINT "PessoaMovimentacao_idMovimentacao_fkey" FOREIGN KEY ("idMovimentacao") REFERENCES "MovimentacaoEstoque"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
