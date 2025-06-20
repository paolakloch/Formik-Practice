import React, { useState } from "react";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexto";
import { ListaSupensa } from "../../componentes/ListaSuspensa/ListaSuspensa";
import { Col, Row } from "react-grid-system";
import { Botao } from "../../componentes/Botao/Botao";
import { Link } from "react-router-dom";
import { Field, Form, Formik } from "formik";

const estadosBrasileiros = [
  { text: "Acre", value: "AC" },
  { text: "Alagoas", value: "AL" },
  { text: "Amapá", value: "AP" },
  { text: "Amazonas", value: "AM" },
  { text: "Bahia", value: "BA" },
  { text: "Ceará", value: "CE" },
  { text: "Distrito Federal", value: "DF" },
  { text: "Espírito Santo", value: "ES" },
  { text: "Goiás", value: "GO" },
  { text: "Maranhão", value: "MA" },
  { text: "Mato Grosso", value: "MT" },
  { text: "Mato Grosso do Sul", value: "MS" },
  { text: "Minas Gerais", value: "MG" },
  { text: "Pará", value: "PA" },
  { text: "Paraíba", value: "PB" },
  { text: "Paraná", value: "PR" },
  { text: "Pernambuco", value: "PE" },
  { text: "Piauí", value: "PI" },
  { text: "Rio de Janeiro", value: "RJ" },
  { text: "Rio Grande do Norte", value: "RN" },
  { text: "Rio Grande do Sul", value: "RS" },
  { text: "Rondônia", value: "RO" },
  { text: "Roraima", value: "RR" },
  { text: "Santa Catarina", value: "SC" },
  { text: "São Paulo", value: "SP" },
  { text: "Sergipe", value: "SE" },
  { text: "Tocantins", value: "TO" },
];
const DadosPessoais = () => {
  return (
    <Formik
      initialValues={{
        nome: "",
        estado: "",
        cidade: "",
        telefone: "",
        email: "",
        senha: "",
        confirmarSenha: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.nome) {
          errors.nome = "Campo Obrigatório";
        }
        if (!values.estado) {
          errors.estado = "Campo Obrigatório";
        }
        if (!values.cidade) {
          errors.cidade = "Campo Obrigatório";
        }
        if (!values.email) {
          errors.email = "Campo Obrigatório";
        } else if (
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)
        ) {
          errors.email = "Email inválido";
        }
        if (!values.telefone) {
          errors.telefone = "Campo Obrigatório";
        } else if (!/^\d{11}$/.test(values.telefone)) {
          errors.telefone = "Telefone inválido";
        }
        if (!values.senha) {
          errors.senha = "Campo Obrigatório";
        }
        if (!values.confirmarSenha) {
          errors.confirmarSenha = "Campo Obrigatório";
        } else if (values.senha !== values.confirmarSenha) {
          errors.confirmarSenha = "As senhas não conferem";
        }
        return errors;
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <div style={{ textAlign: "center" }}>
            <Tipografia variante="h1" componente="h1">
              Crie seu cadastro
            </Tipografia>
            <Tipografia variante="body" componente="body">
              Crie seu perfil gratuitamente para começar a trabalhar com os
              melhores freelancers. Em seguida, você poderá dar mais detalhes
              sobre suas demandas e sobre sua forma de trabalho.
            </Tipografia>
          </div>
          <Row>
            <Col>
              <CampoTexto titulo="Nome completo" name="nome" type="text" />
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={4} sm={4}>
              <ListaSupensa titulo="Estado" opcoes={estadosBrasileiros} />
            </Col>
            <Col lg={8} md={8} sm={8}>
              <CampoTexto titulo="Cidade" name="cidade" type="text" />
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={6}>
              <CampoTexto titulo="E-mail" name="email" type="email" />
            </Col>
            <Col lg={6} md={6} sm={6}>
              <CampoTexto titulo="Telefone" name="telefone" type="tel" />
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={6}>
              <CampoTexto titulo="Senha" name="senha" type="password" />
            </Col>
            <Col lg={6} md={6} sm={6}>
              <CampoTexto
                titulo="Confirme sua senha"
                name="confirmarSenha"
                type="password"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={6}>
              <Link to="/cadastro/interesses">
                <Botao variante="secundaria">Anterior</Botao>
              </Link>
            </Col>
            <Col lg={6} md={6} sm={6}>
              <div style={{ textAlign: "right" }}>
                {/* <Link to="/cadastro/concluido"> */}
                <Botao>Próxima</Botao>
                {/* </Link> */}
              </div>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default DadosPessoais;
