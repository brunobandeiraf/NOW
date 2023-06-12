import React from "react";
import { NativeRouter, Route, Routes } from "react-router-native";
import { Login } from "./src/screens/Login";
import { Cadastro } from "./src/screens/cadastro";
import { Interesses } from "./src/screens/interesses";
import { Home } from "./src/screens/Home";
import { Cadastrod } from "./src/screens/cadastrod";

import { Perfil } from "./src/screens/perfil";
import { Perfilamigo } from "./src/screens/perfilamigo";
import { Contatos } from "./src/screens/contatos";

export const Router = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route index path="/" element={<Home />}></Route>
        <Route path="/home" element={<Login />}></Route>
        <Route path="/sign-up" element={<Cadastro />}></Route>
        <Route path="/cadastrod" element={<Cadastrod />}></Route>
        <Route path="/interesses" element={<Interesses/>}></Route>
        <Route path="/perfil" element={<Perfil/>}></Route>
        <Route path="/perfilamigo" element={<Perfilamigo/>}></Route>
        <Route path="/contatos" element={<Contatos/>}></Route>
      </Routes>
    </NativeRouter>
  )};
