import { useLocation } from "wouter";

import ICMSPorEstado, { icmsStatePages } from "@/pages/ICMSPorEstado";
import ImpostoPlataformaEstado, {
  platformStatePages,
} from "@/pages/ImpostoPlataformaEstado";
import NotFound from "@/pages/not-found";

export default function DynamicSeoPage() {
  const [location] = useLocation();

  if (icmsStatePages.some((page) => page.path === location)) {
    return <ICMSPorEstado />;
  }

  if (platformStatePages.some((page) => page.path === location)) {
    return <ImpostoPlataformaEstado />;
  }

  return <NotFound />;
}
