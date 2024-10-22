import { Router } from "express";
import controllerCategoria from "./controllers/controller.categoria.js";
import controllerBanner from "./controllers/controller.banner.js";
import controllerEmpresa from "./controllers/controller.empresa.js";
import controllerPedido from "./controllers/controller.pedido.js";
import controllerUsuario from "./controllers/controller.usuario.js";
import jwt from "./token.js";

const router = Router();

// Rotas públicas (não precisam de autenticação)
router.post("/usuarios/login", controllerUsuario.Login);
router.post("/usuarios", controllerUsuario.Inserir);

// Rotas protegidas (precisam de autenticação)
router.use(jwt.VerifyJWT); 

// Categorias
router.get("/categorias", controllerCategoria.Listar);

// Banners
router.get("/banners", controllerBanner.Listar);

// Emresas
router.get("/empresas/destaques", controllerEmpresa.Destaques);
router.get("/empresas", controllerEmpresa.Listar);
router.post("/empresas/:id/favoritos", controllerEmpresa.Favoritar);
router.delete("/empresas/:id/favoritos", controllerEmpresa.Desfavoritar);
router.get("/empresas/:id/cardapio", controllerEmpresa.Cardapio);

// Pedidos
router.get("/pedidos", controllerPedido.Listar);
router.get("/pedido/:id", controllerPedido.ListarId);

// Usuários
router.get("/usuarios/favoritos", controllerUsuario.Favoritos);
router.get("/usuarios/perfil", controllerUsuario.Perfil);

export default router;