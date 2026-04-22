import { Link } from "wouter";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="max-w-md w-full text-center space-y-6 p-6">
        <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertCircle className="w-10 h-10 text-destructive" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground font-display">
          404
        </h1>
        <h2 className="text-xl font-semibold text-foreground">
          Página não encontrada
        </h2>
        <p className="text-muted-foreground">
          O link que você acessou pode estar quebrado ou a página foi removida.
        </p>
        <div className="pt-6">
          <Link href="/">
            <Button size="lg" className="w-full">
              Voltar para a Calculadora
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
