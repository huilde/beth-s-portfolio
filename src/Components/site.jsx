import React from "react";
import "./site.css";
import ImgAsset from "../public";
import { Link } from "react-router-dom";

import HorizontalTextAnimation from "./HorizontalTextAnimation";
import Slider from "./Slider";

export default function Site() {
  return (
    <div className="site_site">
      <header className="header">
        <span className="title">
          Elizabeth
          <br />
          Soares
        </span>
        <div className="headerOptions">
          <span className="headerText">Home</span>
          <span className="headerText">About</span>
          <span className="headerText">Work</span>
          <span className="headerText">Contact</span>
        </div>
      </header>

      <div className="Container">
        <span className="Designerdeproduto">Designer de produto</span>
        <span className="mainText">
          Projetando produtos inclusivos, encantadores e impactantes.
        </span>
      </div>
      <div className="HeroHeadingRight">
        <div className="Container_1">
          <div className="Column_1">
            <div className="ImageWrapper">
              <img className="Image" src={ImgAsset.site_Image} />
            </div>
          </div>
          <div className="Column_2">
            <span className="Atuocomodesignerh8anoscomosltimos5anosdedicadosaodesigndeprodutosdigitaisMeupropsitopromoverimpactopositivonavidadaspessoaspormeiodeprodutoseficientesinclusivosesignificativos">
              Atuo como designer há 8 anos, com os últimos 5 anos dedicados ao
              design de produtos digitais. Meu propósito é promover impacto
              positivo na vida das pessoas por meio de produtos eficientes,
              inclusivos e significativos.
            </span>
            <span className="PortrsdadesignercombachareladoeespecializaoemprodutosdigitaishumameninaquedesdeapocadoOrkutjseaventuravacomHTMLePhotoscapesemsaberqueissomudariaoseurumoprofissionalDuranteoensinomdioaocursartcnicoemmultimdiameapaixoneipelodesignetudoqueeleenglobaescolhiseguirestacarreiraemeaprimoreinareadigitaletecnolgicaTenhoumolharminuciosoparaasinterfacescomcuidadoeprecisoparaencantarecriarvalordeformasignificativaconcretizandoideiaseprojetandoexperinciasVercurrculo">
              <span>
                Por trás da designer com bacharelado e especialização em
                produtos digitais, há uma menina que desde a época do Orkut já
                se aventurava com HTML e Photoscape, sem saber que isso mudaria
                o seu rumo profissional. Durante o ensino médio, ao cursar
                técnico em multimídia, me apaixonei pelo design e tudo que ele
                engloba, escolhi seguir esta carreira e me aprimorei na área
                digital e tecnológica.
              </span>
              <br />
              <br />
              <span>
                Tenho um olhar minucioso para as interfaces, com cuidado e
                precisão para encantar e criar valor de forma significativa,
                concretizando ideias e projetando experiências.
              </span>
              <br />
              <br />
              <span>Ver currículo</span>
            </span>
          </div>
        </div>
      </div>
      <div className="animationContainer">
        <HorizontalTextAnimation text=" • prototipagem • design system • interação humano-computador • metodologia • gestão de projeto • sistema de identidade visual "></HorizontalTextAnimation>
      </div>
      <Slider></Slider>

      <div className="HeroNoImage_4">
        <div className="sobre">
          <span className="Chegouataqui">Chegou até aqui?</span>
          <span className="Entreemcontato">Entre em contato</span>
          <div className="Frame427319686">
            <div className="Group10">
              <div className="Group4">
                <div className="rilinkedinfill">
                  <img className="Vector" src={ImgAsset.site_Vector} />
                </div>
              </div>
              <div className="Ellipse4" />
            </div>
            <div className="Group11">
              <div className="Group5">
                <div className="ridribbbleline">
                  <img className="Vector_1" src={ImgAsset.site_Vector_1} />
                </div>
              </div>
              <div className="Ellipse5" />
            </div>
            <div className="Group12">
              <div className="Group6">
                <div className="ribehancefill">
                  <img className="Vector_2" src={ImgAsset.site_Vector_2} />
                </div>
              </div>
              <div className="Ellipse6" />
            </div>
          </div>
        </div>
        <img className="Line10" src={ImgAsset.site_Line10} />
        <footer className="footer">
          <div className="Frame427319687">
            <span className="ElizabethSoaresumadesignerbrasileiracombasegeneralistacomfocoemprodutosdigitais">
              Elizabeth Soares é uma designer brasileira com base generalista
              com foco em produtos digitais.
            </span>

            <div className="Frame427319686_1">
              <div className="Group10_1">
                <div className="Group4_1">
                  <div className="rilinkedinfill_1">
                    <img className="Vector_3" src={ImgAsset.site_Vector_3} />
                  </div>
                </div>
                <div className="Ellipse4_1" />
              </div>
              <div className="Group11_1">
                <div className="Group5_1">
                  <div className="ridribbbleline_1">
                    <img className="Vector_4" src={ImgAsset.site_Vector_4} />
                  </div>
                </div>
                <div className="Ellipse5_1" />
              </div>
              <div className="Group12_1">
                <div className="Group6_1">
                  <div className="ribehancefill_1">
                    <img className="Vector_5" src={ImgAsset.site_Vector_5} />
                  </div>
                </div>
                <div className="Ellipse6_1" />
              </div>
            </div>
          </div>
          <div className="Frame427319688">
            <span className="NatalRioGrandedoNorteBrasil">
              Natal, Rio Grande do Norte, Brasil{" "}
            </span>
            <span className="soares0elizabethgmailcom">
              soares0elizabeth@gmail.com
            </span>
            <span className="_5584996387886">+55 84 996387886</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
