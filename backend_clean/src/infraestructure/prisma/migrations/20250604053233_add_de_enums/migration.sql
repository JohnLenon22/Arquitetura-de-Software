/*
  Warnings:

  - You are about to drop the column `dataCadastro` on the `Pessoa` table. All the data in the column will be lost.
  - You are about to drop the column `dataCadastro` on the `Usuario` table. All the data in the column will be lost.
  - Changed the type of `tipo` on the `MovimentacaoEstoque` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `tipoPessoa` to the `Pessoa` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `tipoUsuario` on the `Usuario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TipoPessoa" AS ENUM ('CLIENTE', 'FORNECEDOR');

-- CreateEnum
CREATE TYPE "TipoMovimentacao" AS ENUM ('ENTRADA', 'SAIDA', 'TRANSFERENCIA');

-- AlterTable
ALTER TABLE "MovimentacaoEstoque" DROP COLUMN "tipo",
ADD COLUMN     "tipo" "TipoMovimentacao" NOT NULL;

-- AlterTable
ALTER TABLE "Pessoa" DROP COLUMN "dataCadastro",
ADD COLUMN     "tipoPessoa" "TipoPessoa" NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "dataCadastro",
DROP COLUMN "tipoUsuario",
ADD COLUMN     "tipoUsuario" "TipoUsuario" NOT NULL;
