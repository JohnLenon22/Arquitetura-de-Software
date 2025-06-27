-- AddForeignKey
ALTER TABLE "MovimentacaoEstoque" ADD CONSTRAINT "MovimentacaoEstoque_idLocalArmazenamentoDestino_fkey" FOREIGN KEY ("idLocalArmazenamentoDestino") REFERENCES "LocalArmazenamento"("id") ON DELETE SET NULL ON UPDATE CASCADE;
