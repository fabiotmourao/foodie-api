import { Router } from "express";
import controllerCategoria from "./controllers/controller.categoria.js";
import controllerBanner from "./controllers/controller.banner.js";
import controllerEmpresa from "./controllers/controller.empresa.js";
import controllerPedido from "./controllers/controller.pedido.js";
import controllerUsuario from "./controllers/controller.usuario.js";
import jwt from "./token.js";

const router = Router();

// router.get("/categorias", jwt.VerifyJWT, controllerCategoria.Listar);
// router.get("/banners",  jwt.VerifyJWT, controllerBanner.Listar);
// router.get("/empresas/destaques",  jwt.VerifyJWT, controllerEmpresa.Destaques);

// router.get("/pedidos",  jwt.VerifyJWT, controllerPedido.Listar);
// router.get("/pedido/:id",  jwt.VerifyJWT, controllerPedido.ListarId);

// router.get("/usuarios/favoritos",  jwt.VerifyJWT, controllerUsuario.Favoritos);
// router.post("/usuarios/login", controllerUsuario.Login);
// router.post("/usuarios", controllerUsuario.Inserir);

// Rotas públicas (não precisam de autenticação)
router.post("/usuarios/login", controllerUsuario.Login);
router.post("/usuarios", controllerUsuario.Inserir);

// Rotas protegidas (precisam de autenticação)
router.use(jwt.VerifyJWT); 

router.get("/categorias", controllerCategoria.Listar);
router.get("/banners", controllerBanner.Listar);
router.get("/empresas/destaques", controllerEmpresa.Destaques);

router.get("/pedidos", controllerPedido.Listar);
router.get("/pedido/:id", controllerPedido.ListarId);

router.get("/usuarios/favoritos", controllerUsuario.Favoritos);

export default router;