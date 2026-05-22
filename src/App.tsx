import { Switch, Route } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

import ImpostoAliExpress from "@/pages/ImpostoAliExpress";
import ImpostoShein from "@/pages/ImpostoShein";
import ImpostoShopee from "@/pages/ImpostoShopee";
import RemessaConforme from "@/pages/RemessaConforme";
import ICMSImportacao from "@/pages/ICMSImportacao";
import ComoCalcularImposto from "@/pages/ComoCalcularImposto";
import TabelaImpostoImportacao from "@/pages/TabelaImpostoImportacao";
import TaxaCorreiosImportacao from "@/pages/TaxaCorreiosImportacao";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

function Router() {
  return (
    <Switch>

      {/* 首页 */}
      <Route path="/" component={Home} />

      {/* SEO 页面 */}
      <Route
        path="/imposto-aliexpress-brasil"
        component={ImpostoAliExpress}
      />

      <Route
        path="/imposto-shein-brasil"
        component={ImpostoShein}
      />

      <Route
        path="/imposto-shopee-brasil"
        component={ImpostoShopee}
      />

      <Route
        path="/o-que-e-remessa-conforme"
        component={RemessaConforme}
      />

      <Route
        path="/icms-importacao-brasil"
        component={ICMSImportacao}
      />

      <Route
        path="/como-calcular-imposto-importacao-brasil"
        component={ComoCalcularImposto}
      />

      <Route
        path="/tabela-imposto-importacao-brasil"
        component={TabelaImpostoImportacao}
      />

      <Route
        path="/taxa-correios-importacao"
        component={TaxaCorreiosImportacao}
      />

      {/* 404 */}
      <Route component={NotFound} />

    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider delayDuration={300}>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
