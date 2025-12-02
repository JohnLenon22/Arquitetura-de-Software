-- CreateTable
CREATE TABLE "Produto" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL DEFAULT 0,
    "dataCadastro" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "precoVenda" REAL NOT NULL,
    "precoCompra" REAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "idCategoria" INTEGER NOT NULL,
    CONSTRAINT "Produto_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "Categoria" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "MovimentacaoEstoque" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tipoMovimentacao" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idProduto" TEXT NOT NULL,
    "idUsuario" TEXT NOT NULL,
    "idLocalArmazenamento" TEXT NOT NULL,
    "idLocalArmazenamentoDestino" TEXT,
    "idPessoa" TEXT,
    CONSTRAINT "MovimentacaoEstoque_idProduto_fkey" FOREIGN KEY ("idProduto") REFERENCES "Produto" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "MovimentacaoEstoque_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "MovimentacaoEstoque_idPessoa_fkey" FOREIGN KEY ("idPessoa") REFERENCES "Pessoa" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "MovimentacaoEstoque_idLocalArmazenamento_fkey" FOREIGN KEY ("idLocalArmazenamento") REFERENCES "LocalArmazenamento" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senhaHash" TEXT NOT NULL,
    "tipoUsuario" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Pessoa" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "tipoPessoa" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "PessoaMovimentacao" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idPessoa" TEXT NOT NULL,
    "idMovimentacao" TEXT NOT NULL,
    CONSTRAINT "PessoaMovimentacao_idPessoa_fkey" FOREIGN KEY ("idPessoa") REFERENCES "Pessoa" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "PessoaMovimentacao_idMovimentacao_fkey" FOREIGN KEY ("idMovimentacao") REFERENCES "MovimentacaoEstoque" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LocalArmazenamento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "responsavel" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
